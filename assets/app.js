/* ============================================================================
   CORE — language, theme, tabs, and the Overview tab.
   ----------------------------------------------------------------------------
   Rendering model: every tab exposes a render function on window.APP. Changing
   the language calls them all again, so nothing has to track its own state.
   ========================================================================== */

window.APP = (function () {
  "use strict";

  var LANGS = ["en", "uk"];
  var lang = "en";

  /* ------------------------------------------------------------- helpers - */
  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Resolve a bilingual pair, a plain string, or undefined.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null && v[lang] !== "" ? v[lang] : (v.en || "");
  }

  // "Showing {n} of {t}" → fill(key, {n: 3, t: 22})
  function fill(key, vars) {
    var s = t(window.UI[key]);
    Object.keys(vars || {}).forEach(function (k) {
      s = s.split("{" + k + "}").join(vars[k]);
    });
    return s;
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function countBy(rows, fn) {
    var m = Object.create(null);
    rows.forEach(function (r) {
      var v = fn(r);
      if (v) m[v] = (m[v] || 0) + 1;
    });
    return Object.keys(m).map(function (k) { return [k, m[k]]; })
      .sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); });
  }

  /* Horizontal bar chart card used by both the roster and the survey. */
  function barChart(title, data, note, opts) {
    opts = opts || {};
    if (!data.length) return "";
    var max = data.reduce(function (a, d) { return Math.max(a, d[1]); }, 0) || 1;
    var total = data.reduce(function (a, d) { return a + d[1]; }, 0);
    var shown = data.slice(0, opts.limit || 14);
    return '<div class="card"><h2>' + esc(title) + "</h2>" +
      (note ? '<p class="muted" style="font-size:13px">' + esc(note) + "</p>" : "") +
      shown.map(function (d) {
        var pct = opts.den ? Math.round((d[1] / opts.den) * 100) : null;
        return '<div class="hbar' + (opts.flag ? " flag" : "") + '">' +
          '<span class="hbar-label" title="' + esc(d[0]) + '">' + esc(d[0]) + "</span>" +
          '<span class="hbar-track"><i style="width:' + ((d[1] / max) * 100).toFixed(1) + '%"></i></span>' +
          '<span class="hbar-val">' + d[1] + (pct === null ? "" : " <small>" + pct + "%</small>") + "</span></div>";
      }).join("") +
      (data.length > shown.length ? '<p class="muted" style="font-size:12px;margin:.5rem 0 0">' + fill("andMore", { n: data.length - shown.length }) + "</p>" : "") +
      '<p class="bar-total">' + esc(opts.footer || fill("records", { t: total, c: data.length })) + "</p></div>";
  }

  /* --------------------------------------------------------------- theme - */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("a4019972-theme"); } catch (e) { /* private mode */ }
    if (stored === "dark" || stored === "light") document.documentElement.setAttribute("data-theme", stored);
    $("#theme-toggle").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : cur === "light" ? "dark"
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("a4019972-theme", next); } catch (e) { /* ignore */ }
    });
  }

  /* ------------------------------------------------------------ language - */
  function initLang() {
    var q = new URLSearchParams(location.search).get("lang");
    var stored = null;
    try { stored = localStorage.getItem("a4019972-lang"); } catch (e) { /* ignore */ }
    var nav = (navigator.language || "").toLowerCase().indexOf("uk") === 0 ? "uk" : null;
    var pick = [q, stored, nav].filter(function (v) { return LANGS.indexOf(v) >= 0; })[0] || "en";
    setLang(pick, true);

    $$(".langset button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });
  }

  function setLang(next, silent) {
    lang = next;
    document.documentElement.lang = next;
    try { localStorage.setItem("a4019972-lang", next); } catch (e) { /* ignore */ }
    $$(".langset button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === next));
    });
    if (!silent) renderAll();
  }

  /* Static strings carried by data-ui / data-ui-ph attributes. */
  function applyStatic() {
    $$("[data-ui]").forEach(function (n) { n.textContent = t(window.UI[n.dataset.ui]); });
    $$("[data-ui-ph]").forEach(function (n) { n.placeholder = t(window.UI[n.dataset.uiPh]); });
    document.title = t(window.COURSE.title) + " — " + (lang === "uk" ? "дашборд курсу" : "course dashboard");
  }

  /* ---------------------------------------------------------------- tabs - */
  var activeTab = "overview";
  function initTabs() {
    $$(".tabs button").forEach(function (b) {
      b.addEventListener("click", function () { showTab(b.dataset.tab); });
    });
    var hash = (location.hash || "").replace("#", "");
    if (["overview", "participants", "insights"].indexOf(hash) >= 0) activeTab = hash;
  }

  function showTab(name, noScroll) {
    activeTab = name;
    $$(".tabs button").forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.tab === name)); });
    $$(".panel").forEach(function (p) { p.hidden = p.dataset.panel !== name; });
    if (history.replaceState) history.replaceState(null, "", "#" + name);
    if (!noScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ======================================================== OVERVIEW tab = */
  function renderOverview() {
    var C = window.COURSE;

    /* hero */
    $("#hero-pills").innerHTML =
      '<span class="pill solid">' + esc(t({ en: "Turin · ITCILO campus", uk: "Турин · кампус МНЦ МОП" })) + "</span>" +
      '<span class="pill">' + esc(t({ en: "26–30 October 2026", uk: "26–30 жовтня 2026" })) + "</span>" +
      '<span class="pill">' + esc(t({ en: "Course " + C.code, uk: "Курс " + C.code })) + "</span>";
    $("#hero-title").innerHTML = t(C.titleLines).map(esc).join("<br>");
    $("#hero-lead").textContent = t(C.lead);
    $("#hero-meta").innerHTML = C.meta.map(function (m) {
      return "<div><span>" + esc(t(m.label)) + "</span><strong>" + esc(t(m.value)) + "</strong></div>";
    }).join("");
    $("#hero-kpis").innerHTML = C.kpis.map(function (k) {
      return '<div class="kpi"><b>' + esc(k.value) + "</b><span>" + esc(t(k.label)) + "</span></div>";
    }).join("");
    $("#hero-project").textContent = t(C.project);

    /* premise */
    $("#premise").innerHTML =
      '<p class="eyebrow">' + esc(t(C.premise.eyebrow)) + "</p>" +
      "<h2>" + esc(t(C.premise.title)) + "</h2>" +
      '<div class="premise-steps">' + C.premise.steps.map(function (s) {
        return "<div><b>" + esc(t(s.k)) + "</b><span>" + esc(t(s.v)) + "</span></div>";
      }).join("") + "</div>" +
      "<p>" + esc(t(C.premise.note)) + "</p>";

    /* cohort photograph */
    if (C.cohort) {
      $("#cohort").innerHTML =
        '<img src="' + esc(C.cohort.src) + '" alt="' + esc(t(C.cohort.alt)) + '" width="1800" height="1012" loading="lazy" decoding="async">' +
        "<figcaption><b>" + esc(t(C.cohort.caption)) + "</b><span>" + esc(t(C.cohort.note)) + "</span></figcaption>";
    }

    /* the three responsibilities */
    $("#balance").innerHTML = C.balance.map(function (b) {
      return '<article class="card"><span class="n">' + esc(b.n) + "</span><h3>" + esc(t(b.title)) +
        '</h3><p class="muted" style="font-size:13.5px;margin:0">' + esc(t(b.body)) + "</p></article>";
    }).join("");
    $("#balance-note").textContent = t(C.balanceNote);

    /* about + facts */
    $("#snapshot").textContent = t(C.snapshot);
    $("#facts").innerHTML = "<h2>" + esc(t(C.campus.title)) + "</h2><dl>" +
      C.campus.items.map(function (i) {
        return "<dt>" + esc(t(i.k)) + "</dt><dd>" + esc(t(i.v)) + "</dd>";
      }).join("") + "</dl>";

    $("#pillars").innerHTML = C.pillars.map(function (p) {
      return '<article class="card pillar"><span class="ico">' + p.icon + "</span><h3>" + esc(t(p.title)) +
        "</h3><p>" + esc(t(p.body)) + "</p></article>";
    }).join("");

    $("#topics").innerHTML = C.topics.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("");
    $("#outcomes").innerHTML = C.outcomes.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("");
    $("#audience").textContent = t(C.audience);
    $("#why").innerHTML = C.why.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("");
    $("#format").textContent = t(C.format);

    /* journey */
    $("#journey-lead").textContent = t(C.journeyLead);
    $("#journey").innerHTML = C.phases.map(function (p) {
      return '<div class="jstep ' + esc(p.kind) + '"><span class="jdate">' + esc(t(p.date)) + "</span>" +
        "<h3>" + esc(t(p.title)) + "</h3><p>" + esc(t(p.body)) + "</p></div>";
    }).join("");

    /* downloadable material */
    if (C.downloads) {
      $("#downloads").innerHTML =
        "<h2>" + esc(t(C.downloads.title)) + "</h2>" +
        '<p class="muted" style="font-size:13.5px">' + esc(t(C.downloads.blurb)) + "</p>" +
        '<div class="dl-row">' + C.downloads.items.map(function (d) {
          return '<a class="dl" href="' + esc(d.href) + '" download><span class="dl-ext">' + esc(d.ext) +
            "</span><span>" + esc(t(d.label)) + "</span></a>";
        }).join("") + "</div>" +
        '<p class="muted" style="font-size:12.5px;margin:12px 0 0">' + esc(t(C.downloads.note)) + "</p>";
    }

    /* co-creation */
    $("#cocreation-title").textContent = t(C.cocreation.title);
    $("#cocreation-blurb").textContent = t(C.cocreation.blurb);
    $("#cocreation").innerHTML = C.cocreation.steps.map(function (s) {
      return "<li><b>" + esc(t(s.title)) + "</b><span>" + esc(t(s.body)) + "</span></li>";
    }).join("");
    $("#cocreation-quote").textContent = "“" + t(C.cocreation.quote) + "”";

    /* observation lens */
    $("#lens-title").textContent = t(C.lens.title);
    $("#lens-blurb").textContent = t(C.lens.blurb);
    $("#lens").innerHTML = C.lens.items.map(function (i) {
      return '<div class="lens-item"><span class="n">' + esc(i.n) + "</span><b>" + esc(t(i.q)) +
        "</b><span>" + esc(t(i.a)) + "</span></div>";
    }).join("");

    /* study visits */
    $("#visits").innerHTML = C.visits.map(function (v) {
      return '<article class="card visit-card">' +
        '<div class="vhead"><span class="vday">' + esc(t(v.day)) + '</span><span class="vhost">' + esc(v.host) + "</span></div>" +
        "<h3>" + esc(t(v.title)) + "</h3>" +
        "<p>" + esc(t(v.focus)) + "</p>" +
        '<p class="vlens">' + esc(t(v.lens)) + "</p></article>";
    }).join("");

    /* resource persons */
    $("#people").innerHTML = C.people.map(function (p) {
      var name = lang === "uk" && p.nameUk ? p.nameUk : p.name;
      return '<article class="person"><div class="pn">' + esc(name) + '</div><div class="po">' +
        esc(t(p.org)) + '</div><div class="pr">' + esc(t(p.role)) + "</div></article>";
    }).join("");

    renderDays();
  }

  /* --------------------------------------------------------------- agenda */
  var dayFilter = "all";

  function sessionWho(s) {
    var names = (s.who || []).map(function (n) {
      var p = window.COURSE.people.filter(function (x) { return x.name === n; })[0];
      return (lang === "uk" && p && p.nameUk) ? p.nameUk : n;
    });
    if (s.whoNote) names.push(t(s.whoNote));
    return names.join(" · ");
  }

  function renderDays() {
    var C = window.COURSE;
    var sel = $("#day-filter");
    var prev = sel.value || dayFilter;
    sel.innerHTML = '<option value="all">' + esc(t(window.UI.allDays)) + "</option>" +
      C.days.map(function (d) { return '<option value="' + esc(d.id) + '">' + esc(t(d.date)) + "</option>"; }).join("");
    sel.value = prev && (prev === "all" || C.days.some(function (d) { return d.id === prev; })) ? prev : "all";
    dayFilter = sel.value;

    var days = C.days.filter(function (d) { return dayFilter === "all" || d.id === dayFilter; });
    var n = 0;

    $("#days").innerHTML = days.map(function (d) {
      return '<section class="day ' + esc(d.kind) + '" id="day-' + esc(d.id) + '">' +
        '<header class="day-head"><span class="ddate">' + esc(t(d.date)) + "</span>" +
        '<span class="dlabel">' + esc(t(d.label)) + "</span>" +
        '<span class="dstrap">' + esc(t(d.strap)) + "</span></header>" +
        d.sessions.map(function (s, i) {
          n++;
          var who = sessionWho(s);
          return '<article class="sess ' + esc(s.kind) + '" id="s-' + esc(d.id) + "-" + i + '">' +
            '<div class="stime">' + esc(s.time) + "</div><div>" +
            "<h4>" + (s.kind !== "plenary" ? '<span class="skind ' + esc(s.kind) + '">' + esc(t(window.UI.kind[s.kind])) + "</span>" : "") +
            esc(t(s.title)) + "</h4>" +
            (who ? '<div class="swho">' + esc(who) + "</div>" : "") +
            (s.note ? '<div class="snote">' + esc(t(s.note)) + "</div>" : "") +
            "</div></article>";
        }).join("") +
        "</section>";
    }).join("");

    $("#session-count").textContent = fill("sessionCount", { n: n });
  }

  function initAgenda() {
    $("#day-filter").addEventListener("change", function (e) {
      dayFilter = e.target.value;
      renderDays();
    });
  }

  /* Jump from an Insights need to the session that answers it. */
  function gotoSession(ref) {
    var parts = ref.split(":");
    dayFilter = "all";
    showTab("overview", true);
    $("#day-filter").value = "all";
    renderDays();
    var node = document.getElementById("s-" + parts[0] + "-" + parts[1]);
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
    node.classList.add("flash");
    setTimeout(function () { node.classList.remove("flash"); }, 2600);
  }

  function lookupSession(ref) {
    var parts = ref.split(":");
    var day = window.COURSE.days.filter(function (d) { return d.id === parts[0]; })[0];
    if (!day) return null;
    var s = day.sessions[Number(parts[1])];
    if (!s) return null;
    return { day: day, session: s, index: Number(parts[1]) };
  }

  /* --------------------------------------------------------------- footer */
  function renderFooter() {
    $("#foot-disclaimer").textContent = t(window.UI.foot.disclaimer);
    var c = window.COURSE.contact;
    $("#foot-contact").innerHTML = esc(t(window.UI.foot.rights)) + " · " +
      '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>";
  }

  /* ------------------------------------------------------------ renderAll */
  function renderAll() {
    applyStatic();
    renderOverview();
    if (window.PART && window.PART.render) window.PART.render();
    if (window.INS && window.INS.render) window.INS.render();
    renderFooter();
  }

  return {
    // utilities shared with the other modules
    $: $, $$: $$, esc: esc, el: el, fill: fill, countBy: countBy, barChart: barChart,
    t: t,
    lang: function () { return lang; },
    gotoSession: gotoSession,
    lookupSession: lookupSession,
    sessionWho: sessionWho,
    showTab: showTab,
    renderAll: renderAll,
    init: function () {
      initTheme();
      initTabs();
      initAgenda();
      initLang();   // sets `lang` silently
      renderAll();
      showTab(activeTab, true);
    }
  };
})();
