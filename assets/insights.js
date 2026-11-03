/* ============================================================================
   INSIGHTS AND FUTURE FORESIGHT TAB
   ----------------------------------------------------------------------------
   Each need is a <details>. Opening one shows two linked blocks:
     · the sessions of this programme that answer it — clicking one switches to
       the Overview tab and scrolls the agenda to that session;
     · further reading, resolved from data/resources.js by id.

   Below the needs sit the foresight drivers and the full searchable library.
   ========================================================================== */

window.INS = (function () {
  "use strict";

  var A = window.APP;
  var state = { q: "", cluster: "all", open: {}, lib: { q: "", cat: "", origin: "" } };
  var wired = false;

  var RES = {};
  (window.RESOURCES || []).forEach(function (r) { RES[r.id] = r; });

  var SRC_LABEL = { cards: "srcCards", survey: "srcSurvey", forum: "srcForum" };

  function needMatches(n) {
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    var hay = [A.t(n.title), A.t(n.body)].join(" ").toLowerCase();
    if (hay.indexOf(q) >= 0) return true;
    // searching a resource title should surface the needs that cite it
    return (n.reading || []).some(function (id) {
      var r = RES[id];
      return r && (A.t(r.title) + " " + (r.pub || "")).toLowerCase().indexOf(q) >= 0;
    });
  }

  /* ------------------------------------------------------- session links - */
  function sessionLink(ref) {
    var hit = A.lookupSession(ref);
    if (!hit) return "";
    var who = A.sessionWho(hit.session);
    return '<button class="sesslink" type="button" data-goto="' + A.esc(ref) + '">' +
      '<span class="sl-when">' + A.esc(A.t(hit.day.date).split(" ").slice(0, 2).join(" ")) + "<br>" + A.esc(hit.session.time) + "</span>" +
      '<span class="sl-title">' + A.esc(A.t(hit.session.title)) +
      (who ? '<span class="sl-who">' + A.esc(who) + "</span>" : "") +
      "</span></button>";
  }

  /* -------------------------------------------------------- reading cards */
  function readingCard(id) {
    var r = RES[id];
    if (!r) return "";
    return '<div class="read' + (r.course ? " cited" : "") + '">' +
      '<span class="rtype">' + A.esc(A.t(window.UI.type[r.type] || { en: r.type, uk: r.type })) + "</span>" +
      '<span><a href="' + A.esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + A.esc(A.t(r.title)) + "</a>" +
      '<span class="rmeta">' + A.esc(r.pub) + " · " + r.year + " · " +
        A.esc(A.t(window.UI[r.course ? "citedInCourse" : "addedReading"])) + "</span>" +
      '<span class="rnote">' + A.esc(A.t(r.note)) + "</span></span></div>";
  }

  /* ------------------------------------------------------------- clusters */
  function renderClusters() {
    var I = window.INSIGHTS;
    var all = [];
    I.clusters.forEach(function (c) { c.needs.forEach(function (n) { all.push(n); }); });

    A.$("#insights-lead").textContent = A.t(I.lead);

    A.$("#method").innerHTML = "<strong>" + A.esc(A.t(I.method.title)) + "</strong>" +
      '<ol class="numbered" style="margin:.4rem 0 .6rem;font-size:13.5px">' +
      I.method.steps.map(function (s) { return "<li>" + A.esc(A.t(s)) + "</li>"; }).join("") + "</ol>" +
      '<p class="muted" style="font-size:12.5px;margin:0">' + A.esc(A.t(I.method.caveat)) + "</p>";

    A.$("#cluster-nav").innerHTML =
      '<button type="button" data-cluster="all" aria-pressed="' + (state.cluster === "all") + '">' +
        A.esc(A.t(window.UI.allClusters)) + "</button>" +
      I.clusters.map(function (c) {
        return '<button type="button" data-cluster="' + A.esc(c.id) + '" aria-pressed="' + (state.cluster === c.id) + '">' +
          A.esc(A.t(c.label)) + " (" + c.needs.length + ")</button>";
      }).join("");

    var shownCount = 0;

    A.$("#clusters").innerHTML = I.clusters.map(function (c) {
      if (state.cluster !== "all" && state.cluster !== c.id) return "";
      var needs = c.needs.filter(needMatches);
      if (!needs.length) return "";
      shownCount += needs.length;

      return '<section class="cluster" id="cluster-' + A.esc(c.id) + '">' +
        '<div class="cluster-head"><h3>' + A.esc(A.t(c.label)) + "</h3>" +
        '<p class="cq">' + A.esc(A.t(c.question)) + "</p>" +
        "<p>" + A.esc(A.t(c.blurb)) + "</p></div>" +
        '<div class="needs">' + needs.map(function (n) {
          var srcs = (n.src || []).map(function (s) {
            return '<span class="tag">' + A.esc(A.t(window.UI[SRC_LABEL[s]] || { en: s, uk: s })) + "</span>";
          }).join("");
          return '<details class="need" data-need="' + A.esc(n.id) + '"' + (state.open[n.id] ? " open" : "") + ">" +
            "<summary>" +
              '<span class="wbadge" title="' + A.esc(n.weight + " " + A.t(window.UI.mentions)) + '">' + n.weight + "</span>" +
              '<span><span class="ntitle">' + A.esc(A.t(n.title)) + "</span>" +
              '<span class="nsrc tagrow" style="margin-top:6px">' + srcs + "</span></span>" +
              '<span class="chev">▸</span>' +
            "</summary>" +
            '<div class="need-body">' +
              "<p>" + A.esc(A.t(n.body)) + "</p>" +
              '<div class="linkblock"><h4>' + A.esc(A.t(window.UI.whereAnswered)) + "</h4>" +
                '<div class="sesslist">' + (n.sessions || []).map(sessionLink).join("") + "</div></div>" +
              '<div class="linkblock"><h4>' + A.esc(A.t(window.UI.furtherReading)) + "</h4>" +
                '<div class="readlist">' + (n.reading || []).map(readingCard).join("") + "</div></div>" +
            "</div></details>";
        }).join("") + "</div></section>";
    }).join("") || '<p class="empty">' + A.esc(A.t(window.UI.noNeeds)) + "</p>";

    A.$("#i-count").textContent = A.fill("needsCount", { n: shownCount, t: all.length });
  }

  /* ------------------------------------------------------------ foresight */
  function renderForesight() {
    var F = window.INSIGHTS.foresight;
    A.$("#foresight-title").textContent = A.t(F.title);
    A.$("#foresight-lead").textContent = A.t(F.lead);

    var needTitle = {};
    window.INSIGHTS.clusters.forEach(function (c) {
      c.needs.forEach(function (n) { needTitle[n.id] = n; });
    });

    A.$("#foresight").innerHTML = F.drivers.map(function (d) {
      var cls = d.horizon.en === "Present" ? "now" : d.horizon.en === "Near" ? "near" : "";
      return '<article class="fcard ' + cls + '">' +
        '<div class="fh">' + A.esc(A.t(window.UI.horizon[d.horizon.en] || d.horizon)) + "</div>" +
        "<h4>" + A.esc(A.t(d.title)) + "</h4>" +
        "<p>" + A.esc(A.t(d.body)) + "</p>" +
        '<div class="flinks">' + (d.links || []).map(function (id) {
          var n = needTitle[id];
          return n ? '<button type="button" data-need-jump="' + A.esc(id) + '">↳ ' + A.esc(A.t(n.title)) + "</button>" : "";
        }).join("") + "</div>" +
        '<div class="readlist" style="margin-top:12px">' + (d.reading || []).map(readingCard).join("") + "</div>" +
        "</article>";
    }).join("");
  }

  /* -------------------------------------------------------------- library */
  function renderLibrary() {
    var cats = {};
    window.RESOURCES.forEach(function (r) { (r.cats || []).forEach(function (c) { cats[c] = (cats[c] || 0) + 1; }); });

    var catSel = A.$("#r-cat");
    catSel.innerHTML = '<option value="">' + A.esc(A.t(window.UI.allCats)) + "</option>" +
      Object.keys(cats).sort(function (a, b) { return cats[b] - cats[a]; }).map(function (c) {
        return '<option value="' + A.esc(c) + '"' + (state.lib.cat === c ? " selected" : "") + ">" +
          A.esc(A.t(window.UI.cat[c] || { en: c, uk: c })) + " (" + cats[c] + ")</option>";
      }).join("");

    A.$("#r-origin").innerHTML = '<option value="">' + A.esc(A.t(window.UI.allOrigins)) + "</option>" +
      '<option value="cited"' + (state.lib.origin === "cited" ? " selected" : "") + ">" + A.esc(A.t(window.UI.onlyCited)) + "</option>" +
      '<option value="added"' + (state.lib.origin === "added" ? " selected" : "") + ">" + A.esc(A.t(window.UI.onlyAdded)) + "</option>";

    var q = state.lib.q.trim().toLowerCase();
    var rows = window.RESOURCES.filter(function (r) {
      if (state.lib.cat && (r.cats || []).indexOf(state.lib.cat) < 0) return false;
      if (state.lib.origin === "cited" && !r.course) return false;
      if (state.lib.origin === "added" && r.course) return false;
      if (!q) return true;
      return (A.t(r.title) + " " + r.pub + " " + A.t(r.note)).toLowerCase().indexOf(q) >= 0;
    });

    A.$("#r-count").textContent = A.fill("resCount", { n: rows.length, t: window.RESOURCES.length });
    A.$("#library").innerHTML = rows.length
      ? rows.map(function (r) { return readingCard(r.id); }).join("")
      : '<p class="empty" style="grid-column:1/-1">' + A.esc(A.t(window.UI.noRes)) + "</p>";
  }

  /* --------------------------------------------------------------- wiring */
  function wire() {
    if (wired) return;
    wired = true;
    var panel = A.$("#panel-insights");

    A.$("#i-search").addEventListener("input", function (e) {
      state.q = e.target.value;
      renderClusters();
    });
    A.$("#i-expand").addEventListener("click", function () {
      A.$$("#clusters .need").forEach(function (d) { d.open = true; state.open[d.dataset.need] = true; });
    });
    A.$("#i-collapse").addEventListener("click", function () {
      A.$$("#clusters .need").forEach(function (d) { d.open = false; });
      state.open = {};
    });

    panel.addEventListener("click", function (e) {
      var nav = e.target.closest ? e.target.closest("[data-cluster]") : null;
      if (nav) { state.cluster = nav.dataset.cluster; renderClusters(); return; }

      var go = e.target.closest ? e.target.closest("[data-goto]") : null;
      if (go) { A.gotoSession(go.dataset.goto); return; }

      var jump = e.target.closest ? e.target.closest("[data-need-jump]") : null;
      if (jump) {
        var id = jump.dataset.needJump;
        state.cluster = "all"; state.q = ""; A.$("#i-search").value = "";
        state.open[id] = true;
        renderClusters();
        var node = A.$('[data-need="' + id + '"]');
        if (node) node.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    // Remember which needs are open so a language switch does not close them.
    panel.addEventListener("toggle", function (e) {
      var d = e.target;
      if (d && d.classList && d.classList.contains("need")) {
        if (d.open) state.open[d.dataset.need] = true; else delete state.open[d.dataset.need];
      }
    }, true);

    A.$("#r-search").addEventListener("input", function (e) { state.lib.q = e.target.value; renderLibrary(); });
    A.$("#r-cat").addEventListener("change", function (e) { state.lib.cat = e.target.value; renderLibrary(); });
    A.$("#r-origin").addEventListener("change", function (e) { state.lib.origin = e.target.value; renderLibrary(); });
  }

  return {
    render: function () {
      renderClusters();
      renderForesight();
      renderLibrary();
      wire();
      A.$("#i-search").value = state.q;
      A.$("#r-search").value = state.lib.q;
    }
  };
})();
