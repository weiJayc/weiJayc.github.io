/* 依 <body data-page="academic|job"> 把 window.SITE 渲染成頁面 */
(function () {
  "use strict";
  var S = window.SITE;
  var page = document.body.getAttribute("data-page");
  var base = document.body.getAttribute("data-base") || "";
  function asset(u) { return !u || /^(https?:|\/|mailto:)/.test(u) ? u : base + u; }

  var UI = {
    projects: { zh: "專題", en: "Projects" },
    research: { zh: "研究", en: "Research" },
    awards: { zh: "競賽與證照", en: "Awards" },
    awardsNav: { zh: "榮譽", en: "Awards" },
    skills: { zh: "技能", en: "Skills" },
    contact: { zh: "聯絡", en: "Contact" },
    overview: { zh: "概況", en: "Overview" },
    interests: { zh: "研究興趣", en: "Interests" },
    motivation: { zh: "動機", en: "Why" },
    method: { zh: "方法", en: "How" },
    challenge: { zh: "挑戰", en: "Challenge" },
    role: { zh: "我的部分", en: "My part" },
    team: { zh: "團隊", en: "Team" },
    tech: { zh: "技術", en: "Stack" },
    highlights: { zh: "重點", en: "Highlights" },
    code: { zh: "原始碼", en: "Source" },
    resume: { zh: "履歷 PDF", en: "Résumé PDF" },
    certs: { zh: "證照", en: "Certs" },
    imgTodo: { zh: "專題圖片", en: "Project image" },
    contactAcademic: { zh: "歡迎來信討論研究或專題細節。", en: "Happy to talk about research or any project in detail." },
    contactJob: { zh: "歡迎來信聯繫。", en: "Feel free to get in touch." }
  };

  // ---------- 語言 ----------
  function storeGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function storeSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  var params = new URLSearchParams(window.location.search);
  var lang = params.get("lang") || storeGet("lang") || "zh";
  if (lang !== "zh" && lang !== "en") lang = "zh";

  function t(v) { if (v == null) return ""; if (typeof v === "string") return v; return v[lang] != null ? v[lang] : (v.zh || ""); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function isTodo(s) { return /待填|TODO/.test(s); }
  function x(v) { var s = t(v); return isTodo(s) ? '<span class="todo">' + esc(s) + "</span>" : esc(s); }
  function arr(v) { return v ? (v[lang] || v.zh || []) : []; }
  var sep = function () { return lang === "zh" ? "、" : ", "; };
  var comma = function () { return lang === "zh" ? "，" : ", "; };

  // ---------- 小元件 ----------
  function links() {
    var out = ['<a href="' + esc(S.profile.github) + '" target="_blank" rel="noopener">GitHub</a>'];
    out.push(S.profile.email
      ? '<a href="mailto:' + esc(S.profile.email) + '">' + esc(S.profile.email) + "</a>"
      : '<span class="todo">' + (lang === "zh" ? "Email【待填】" : "Email [TODO]") + "</span>");
    if (page === "job") {
      out.push(S.profile.resumePdf
        ? '<a href="' + esc(asset(S.profile.resumePdf)) + '" target="_blank" rel="noopener">' + esc(t(UI.resume)) + "</a>"
        : '<span class="todo">' + esc(t(UI.resume)) + (lang === "zh" ? "【待填】" : " [TODO]") + "</span>");
    }
    return '<p class="links">' + out.join("") + "</p>";
  }
  function row(label, html) { return html ? "<dt>" + esc(t(label)) + "</dt><dd>" + html + "</dd>" : ""; }
  function list(items) { return items.length ? "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>" : ""; }

  // ---------- 區塊 ----------
  function hero() {
    var statement = page === "academic" ? S.profile.taglineAcademic : S.profile.taglineJob;
    return '<header class="hero">' +
      "<h1>" + x(S.profile.name) + "</h1>" +
      '<p class="school">' + esc(t(S.profile.school)) + "</p>" +
      '<p class="statement">' + x(statement) + "</p>" +
      links() + "</header>";
  }

  function section(id, label, body) {
    return '<section class="sec" id="' + id + '"><h2 class="sec-label">' + esc(t(label)) + '</h2><div class="sec-body">' + body + "</div></section>";
  }

  function overview() {
    var rows = S.stats.slice(0, 2).map(function (s) {
      return "<dt>" + esc(t(s.label)) + '</dt><dd class="big">' + esc(t(s.value)) + "</dd>";
    }).join("");
    rows += row(UI.interests, S.interests.map(t).map(esc).join("<br>"));
    return section("overview", UI.overview, '<dl class="facts">' + rows + "</dl>");
  }

  function shot(p) {
    return p.image
      ? '<div class="shot"><img src="' + esc(asset(p.image)) + '" alt="' + esc(t(p.title)) + '" loading="lazy"></div>'
      : '<div class="shot shot-empty"><span>' + esc(t(UI.imgTodo)) + "</span></div>";
  }

  function project(p) {
    var context = t(p.context) + (p.badge ? comma() + t(p.badge) : "");
    var tech = '<span class="p-tech">' + p.tech.map(t).map(esc).join(sep()) + "</span>";
    var lede, rows;
    if (page === "academic") {
      lede = t(p.oneLiner);
      rows = row(UI.motivation, x(p.academic.motivation)) +
        row(UI.method, x(p.academic.method)) +
        row(UI.challenge, x(p.academic.challenge));
    } else {
      lede = t(p.job.summary);
      rows = row(UI.highlights, list(arr(p.job.highlights)));
    }
    rows += row(UI.role, list(arr(p.role))) +
      row(UI.team, esc(t(p.team))) +
      row(UI.tech, tech) +
      row(UI.code, '<a href="' + esc(p.repo) + '" target="_blank" rel="noopener">' + esc(p.repo.replace(/^https:\/\//, "")) + "</a>");
    return '<article class="project" id="p-' + esc(p.id) + '">' + shot(p) +
      '<div class="p-head"><h3>' + esc(t(p.title)) + "</h3>" + (t(p.period) ? '<span class="p-year">' + esc(t(p.period)) + "</span>" : "") + "</div>" +
      '<p class="p-context">' + esc(context) + "</p>" +
      '<p class="p-lede">' + esc(lede) + "</p>" +
      '<dl class="facts">' + rows + "</dl></article>";
  }

  function research() {
    return section("research", UI.research, S.research.map(function (r) {
      return '<article class="research"><h3>' + esc(t(r.title)) + "</h3><p>" + x(r.body) + "</p></article>";
    }).join(""));
  }

  function awards() {
    var groups = [], idx = {};
    S.awards.filter(function (a) { return a.pages.indexOf(page) !== -1; }).forEach(function (a) {
      var k = a.year || "_";
      if (!(k in idx)) { idx[k] = groups.length; groups.push({ key: k, items: [] }); }
      groups[idx[k]].items.push(t(a.title));
    });
    return section("awards", UI.awards, '<div class="years">' + groups.map(function (g) {
      return '<div class="year-row"><span class="y">' + esc(g.key === "_" ? t(UI.certs) : g.key) + "</span>" + list(g.items) + "</div>";
    }).join("") + "</div>");
  }

  function skills() {
    return section("skills", UI.skills, '<div class="skills">' + S.skills.map(function (g) {
      return "<div><h3>" + esc(t(g.group)) + "</h3><p>" + g.items.map(esc).join(sep()) + "</p></div>";
    }).join("") + "</div>");
  }

  function contact() {
    return '<section class="sec contact" id="contact"><h2 class="sec-label">' + esc(t(UI.contact)) + '</h2><div class="sec-body">' +
      '<p class="contact-line">' + esc(t(page === "academic" ? UI.contactAcademic : UI.contactJob)) + "</p>" + links() + "</div></section>";
  }

  function topbar() {
    var nav = page === "academic"
      ? [["projects", UI.projects], ["research", UI.research], ["awards", UI.awardsNav], ["contact", UI.contact]]
      : [["skills", UI.skills], ["projects", UI.projects], ["awards", UI.awardsNav], ["contact", UI.contact]];
    return '<div class="topbar"><nav aria-label="Sections">' +
      nav.map(function (n) { return '<a href="#' + n[0] + '">' + esc(t(n[1])) + "</a>"; }).join("") + "</nav>" +
      '<button class="lang" type="button" aria-label="' + (lang === "zh" ? "Switch to English" : "切換成中文") + '">' +
      '<span class="' + (lang === "zh" ? "on" : "") + '">中</span><span class="' + (lang === "en" ? "on" : "") + '">EN</span></button></div>';
  }

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant-TW" : "en";
    var name = t(S.profile.name);
    var suffix = page === "academic" ? (lang === "zh" ? "學術作品集" : "Academic Portfolio") : (lang === "zh" ? "作品集" : "Portfolio");
    document.title = isTodo(name) ? suffix : name + "｜" + suffix;

    var body = page === "academic"
      ? hero() + overview() + section("projects", UI.projects, S.projects.map(project).join("")) + research() + awards() + contact()
      : hero() + skills() + section("projects", UI.projects, S.projects.map(project).join("")) + awards() + contact();

    document.getElementById("app").innerHTML =
      '<div class="wrap">' + topbar() + "<main>" + body + "</main>" +
      '<footer class="foot">© ' + new Date().getFullYear() + " " + (isTodo(name) ? "" : esc(name)) + "</footer></div>";

    document.querySelector(".lang").addEventListener("click", function () {
      lang = lang === "zh" ? "en" : "zh";
      storeSet("lang", lang);
      var u = new URL(window.location.href);
      u.searchParams.set("lang", lang);
      window.history.replaceState(null, "", u);
      render();
    });
  }

  render();
})();
