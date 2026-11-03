/* ============================================================================
   PARTICIPANTS TAB — roster table, live demographics, survey, introductions.
   ----------------------------------------------------------------------------
   Filters and sort live in module state so that a language switch re-renders
   without losing what the reader had selected.
   ========================================================================== */

window.PART = (function () {
  "use strict";

  var A = window.APP;
  var state = { q: "", orgType: "", sector: "", sex: "", sortKey: "name", sortDir: 1 };
  var wired = false;

  var COLS = [
    { key: "name",     ui: "colName" },
    { key: "org",      ui: "colOrg" },
    { key: "orgType",  ui: "colOrgType" },
    { key: "sector",   ui: "colSector" },
    { key: "city",     ui: "colCity" },
    { key: "position", ui: "colPosition" }
  ];

  /* Display value for a cell, in the active language. */
  function val(p, key) {
    var lang = A.lang();
    switch (key) {
      case "name":     return lang === "uk" && p.nameUk ? p.nameUk : p.name;
      case "org":      return lang === "uk" && p.orgUk ? p.orgUk : p.org;
      case "orgType":  return A.t(window.P_LABELS.orgType[p.orgType]);
      case "sector":   return A.t(window.P_LABELS.sector[p.sector]);
      case "city":     return A.t(p.city);
      case "position": return A.t(p.position);
      default:         return "";
    }
  }

  /* Everything a free-text search should look at. */
  function haystack(p) {
    return [p.name, p.nameUk, p.org, p.orgUk, A.t(p.city), A.t(p.position),
            A.t(window.P_LABELS.orgType[p.orgType]), A.t(window.P_LABELS.sector[p.sector])]
      .join(" ").toLowerCase();
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    return window.PARTICIPANTS.filter(function (p) {
      if (state.orgType && p.orgType !== state.orgType) return false;
      if (state.sector && p.sector !== state.sector) return false;
      if (state.sex && p.sex !== state.sex) return false;
      return !q || haystack(p).indexOf(q) >= 0;
    }).sort(function (a, b) {
      return String(val(a, state.sortKey)).localeCompare(String(val(b, state.sortKey)), undefined, { sensitivity: "base" }) * state.sortDir;
    });
  }

  /* ---------------------------------------------------------- the toolbar */
  function renderToolbar() {
    function facet(name, labels) {
      var counts = A.countBy(window.PARTICIPANTS, function (p) { return p[name]; });
      var label = A.t(window.UI[name === "orgType" ? "colOrgType" : name === "sector" ? "colSector" : "chartSex"]);
      return '<select data-facet="' + name + '" aria-label="' + A.esc(label) + '">' +
        '<option value="">' + A.esc(A.fill("allOf", { f: label.toLowerCase() })) + "</option>" +
        counts.map(function (c) {
          return '<option value="' + A.esc(c[0]) + '"' + (state[name] === c[0] ? " selected" : "") + ">" +
            A.esc(A.t(labels[c[0]])) + " (" + c[1] + ")</option>";
        }).join("") + "</select>";
    }

    A.$("#p-toolbar").innerHTML =
      '<input type="search" id="p-search" placeholder="' + A.esc(A.t(window.UI.ph_search)) + '" value="' + A.esc(state.q) + '" aria-label="' + A.esc(A.t(window.UI.ph_search)) + '">' +
      facet("orgType", window.P_LABELS.orgType) +
      facet("sector", window.P_LABELS.sector) +
      facet("sex", window.P_LABELS.sex) +
      '<button class="btn" type="button" id="p-reset">' + A.esc(A.t(window.UI.reset)) + "</button>";
  }

  /* ------------------------------------------------------- table + charts */
  function renderTable() {
    var rows = filtered();
    var total = window.PARTICIPANTS.length;

    A.$("#p-head").innerHTML = COLS.map(function (c) {
      var arrow = state.sortKey === c.key ? (state.sortDir > 0 ? " ▲" : " ▼") : "";
      return '<th data-sort="' + c.key + '" scope="col">' + A.esc(A.t(window.UI[c.ui])) + arrow + "</th>";
    }).join("");

    A.$("#p-rows").innerHTML = rows.length
      ? rows.map(function (p) {
          return "<tr>" + COLS.map(function (c) {
            if (c.key === "name") return '<td><span class="tname">' + A.esc(val(p, "name")) + "</span></td>";
            return "<td>" + A.esc(val(p, c.key)) + "</td>";
          }).join("") + "</tr>";
        }).join("")
      : '<tr><td colspan="' + COLS.length + '" class="muted" style="padding:28px;text-align:center">' +
        A.esc(A.t(window.UI.noMatch)) + "</td></tr>";

    A.$("#p-count").textContent = A.fill("showing", { n: rows.length, t: total });

    var orgs = A.countBy(rows, function (p) { return p.org; }).length;
    var cities = A.countBy(rows, function (p) { return A.t(p.city); }).length;
    var women = rows.filter(function (p) { return p.sex === "F"; }).length;

    A.$("#p-stats").innerHTML = [
      [rows.length, "statPeople"], [orgs, "statOrgs"], [cities, "statCities"], [women, "statWomen"]
    ].map(function (s) {
      return '<article class="card stat"><b>' + s[0] + "</b><span>" + A.esc(A.t(window.UI[s[1]])) + "</span></article>";
    }).join("");

    A.$("#p-charts").innerHTML =
      A.barChart(A.t(window.UI.chartOrgType), A.countBy(rows, function (p) { return A.t(window.P_LABELS.orgType[p.orgType]); }), "", { den: rows.length }) +
      A.barChart(A.t(window.UI.chartSector), A.countBy(rows, function (p) { return A.t(window.P_LABELS.sector[p.sector]); }), "", { den: rows.length }) +
      A.barChart(A.t(window.UI.chartCity), A.countBy(rows, function (p) { return A.t(p.city); }), "", { limit: 10 }) +
      A.barChart(A.t(window.UI.chartOrg), A.countBy(rows, function (p) { return A.lang() === "uk" && p.orgUk ? p.orgUk : p.org; }), "", { limit: 10 }) +
      A.barChart(A.t(window.UI.chartSex), A.countBy(rows, function (p) { return A.t(window.P_LABELS.sex[p.sex]); }), "", { den: rows.length });
  }

  /* -------------------------------------------------------------- survey */
  function renderSurvey() {
    var S = window.SURVEY;
    A.$("#survey-lead").textContent = A.t(S.lead);

    A.$("#survey-headline").innerHTML = S.headline.map(function (h) {
      return '<article class="card stat"><b style="font-size:26px">' + A.esc(h.value) + "</b><span>" + A.esc(A.t(h.label)) + "</span></article>";
    }).join("");

    A.$("#survey-charts").innerHTML = S.blocks.map(function (b) {
      var data = b.data.map(function (d) { return [A.t(d[0]), d[1]]; });
      return A.barChart(A.t(b.title), data, A.t(b.note), {
        den: b.den, flag: !!b.flag, limit: 12,
        footer: A.fill("respondents", { n: S.responses })
      });
    }).join("");

    A.$("#survey-binary").innerHTML = S.binary.map(function (b) {
      var tot = b.yes + b.no;
      return '<article class="card"><h3>' + A.esc(A.t(b.title)) + "</h3>" +
        '<div class="split"><i class="yes" style="width:' + ((b.yes / tot) * 100).toFixed(1) + '%"></i>' +
        '<i class="no" style="width:' + ((b.no / tot) * 100).toFixed(1) + '%"></i></div>' +
        '<div class="split-legend">' +
          '<span><em style="background:var(--rose-600)"></em><b>' + b.yes + "</b> " + A.esc(A.t(b.yesLabel)) + "</span>" +
          '<span><em style="background:var(--amber-500)"></em><b>' + b.no + "</b> " + A.esc(A.t(b.noLabel)) + "</span>" +
        "</div></article>";
    }).join("");

    A.$("#survey-extra").innerHTML =
      '<article class="card"><h2>' + A.esc(A.t(S.barriers.title)) + "</h2>" +
        '<p class="muted" style="font-size:13px">' + A.esc(A.t(S.barriers.note)) + "</p>" +
        '<ul class="ticks">' + S.barriers.items.map(function (i) { return "<li>" + A.esc(A.t(i)) + "</li>"; }).join("") + "</ul></article>" +
      '<article class="card facts"><h2>' + A.esc(A.t(S.logistics.title)) + "</h2><dl>" +
        S.logistics.items.map(function (i) { return "<dt>" + A.esc(A.t(i.k)) + "</dt><dd>" + A.esc(A.t(i.v)) + "</dd>"; }).join("") +
      "</dl></article>";
  }

  /* -------------------------------------------------------- introductions */
  function renderIntros() {
    var byId = {};
    window.PARTICIPANTS.forEach(function (p) { byId[p.id] = p; });
    var lang = A.lang();

    A.$("#intros").innerHTML = window.INTROS.map(function (i) {
      var p = byId[i.id];
      if (!p) return "";
      var name = lang === "uk" && p.nameUk ? p.nameUk : p.name;
      var org = lang === "uk" && p.orgUk ? p.orgUk : p.org;
      var text = lang === "uk" ? i.uk : i.en;
      return '<article class="intro"><div class="iname">' + A.esc(name) + "</div>" +
        '<div class="iorg">' + A.esc(org) + "</div>" +
        "<p>" + A.esc(text) + "</p></article>";
    }).join("");
  }

  /* --------------------------------------------------------------- wiring */
  function wire() {
    if (wired) return;
    wired = true;
    var body = A.$("#panel-participants");

    body.addEventListener("input", function (e) {
      if (e.target.id === "p-search") { state.q = e.target.value; renderTable(); }
    });
    body.addEventListener("change", function (e) {
      var f = e.target.dataset ? e.target.dataset.facet : null;
      if (f) { state[f] = e.target.value; renderTable(); }
    });
    body.addEventListener("click", function (e) {
      if (e.target.id === "p-reset") {
        state.q = ""; state.orgType = ""; state.sector = ""; state.sex = "";
        renderToolbar(); renderTable();
        return;
      }
      var th = e.target.closest ? e.target.closest("th[data-sort]") : null;
      if (th) {
        if (state.sortKey === th.dataset.sort) state.sortDir = -state.sortDir;
        else { state.sortKey = th.dataset.sort; state.sortDir = 1; }
        renderTable();
      }
    });
  }

  return {
    render: function () {
      renderToolbar();
      renderTable();
      renderSurvey();
      renderIntros();
      wire();
    }
  };
})();
