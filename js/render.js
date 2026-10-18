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
    interests: { zh: "研究興趣", en: "Interests" },
    motivation: { zh: "動機", en: "Why" },
    method: { zh: "方法", en: "How" },
    challenge: { zh: "挑戰", en: "Challenge" },
    role: { zh: "我的部分", en: "My part" },
    team: { zh: "團隊", en: "Team" },
    tech: { zh: "技術", en: "Stack" },
    highlights: { zh: "重點", en: "Highlights" },
    demo: { zh: "網站", en: "Live site" },
    code: { zh: "原始碼", en: "Source" },
    resume: { zh: "履歷 PDF", en: "Résumé PDF" },
    certs: { zh: "證照", en: "Certs" },
    imgTodo: { zh: "專題圖片", en: "Project image" },
    contactAcademic: { zh: "歡迎來信討論研究或專題細節。", en: "Happy to talk about research or any project in detail." },
    coursework: { zh: "課程實驗", en: "Coursework" },
    approach: { zh: "做法", en: "Approach" },
    finding: { zh: "發現", en: "Findings" },
    report: { zh: "報告 PDF", en: "Report (PDF)" },
    moreCourses: { zh: "其他修課實作", en: "Other coursework" },
    details: { zh: "完整介紹", en: "Full write-up" },
    data: { zh: "實驗數據", en: "Results" },
    fresh: { zh: "備審未收錄", en: "New here" },
    back: { zh: "全部項目", en: "All work" },
    prev: { zh: "上一個", en: "Previous" },
    next: { zh: "下一個", en: "Next" },
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
  function ext(u) { return u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u.replace(/^https:\/\//, "").replace(/\/$/, "")) + "</a>" : ""; }
  function list(items) { return items.length ? "<ul>" + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>" : ""; }
  function techText(p) { return p.tech.map(t).map(esc).join(sep()); }

  // ---------- 區塊 ----------
  function hero() {
    var statement = page === "academic" ? S.profile.taglineAcademic : S.profile.taglineJob;
    return '<header class="hero">' +
      "<h1>" + x(S.profile.name) + "</h1>" +
      '<p class="school">' + esc(t(S.profile.school)) + "</p>" +
      '<p class="statement">' + x(statement) + "</p>" +
      links() + "</header>";
  }

  // 研究所版的區塊改成「標題在上、內容全寬」，count 會顯示在標題旁
  function section(id, label, body, count) {
    return '<section class="sec' + (page === "academic" ? " sec-stack" : "") + '" id="' + id + '"><h2 class="sec-label">' + esc(t(label)) +
      (count ? '<span class="count">' + count + "</span>" : "") +
      '</h2><div class="sec-body">' + body + "</div></section>";
  }

  function frame(src, alt) {
    return src
      ? '<div class="shot"><img src="' + esc(asset(src)) + '" alt="' + esc(alt) + '" loading="lazy"></div>'
      : '<div class="shot shot-empty"><span>' + esc(t(UI.imgTodo)) + "</span></div>";
  }

  // images: [{ src, caption }] 會並排顯示多張；否則用單張 image
  function shot(p) {
    if (!p.images) return frame(p.image, t(p.title));
    return '<div class="shots">' + p.images.map(function (im) {
      return "<figure>" + frame(im.src, t(p.title) + " — " + t(im.caption)) + "<figcaption>" + esc(t(im.caption)) + "</figcaption></figure>";
    }).join("") + "</div>";
  }

  // 求職版的專題（研究所版改用 card() + detail()）
  function project(p) {
    var context = t(p.context) + (p.badge ? comma() + t(p.badge) : "");
    var tech = '<span class="p-tech">' + techText(p) + "</span>";
    var rows = row(UI.highlights, list(arr(p.job.highlights))) +
      row(UI.role, list(arr(p.role))) +
      row(UI.team, esc(t(p.team))) +
      row(UI.tech, tech) +
      row(UI.demo, ext(p.demo)) +
      row(UI.code, ext(p.repo));
    return '<article class="project" id="p-' + esc(p.id) + '">' + shot(p) +
      '<div class="p-head"><h3>' + esc(t(p.title)) + "</h3>" + (t(p.period) ? '<span class="p-year">' + esc(t(p.period)) + "</span>" : "") + "</div>" +
      '<p class="p-context">' + esc(context) + "</p>" +
      '<p class="p-lede">' + esc(t(p.job.summary)) + "</p>" +
      '<dl class="facts">' + rows + "</dl></article>";
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
    return '<section class="sec' + (page === "academic" ? " sec-stack" : "") + ' contact" id="contact"><h2 class="sec-label">' + esc(t(UI.contact)) + '</h2><div class="sec-body">' +
      '<p class="contact-line">' + esc(t(page === "academic" ? UI.contactAcademic : UI.contactJob)) + "</p>" + links() + "</div></section>";
  }

  // ---------- 研究所版：卡片目錄 + 詳細頁（網址 #項目id） ----------
  // 可點進詳細頁的項目，順序就是目錄與「上一個／下一個」的順序
  function items() {
    var cw = S.coursework ? S.coursework.items : [];
    return S.projects.map(function (p) { return { kind: "project", d: p }; })
      .concat(cw.map(function (c) { return { kind: "course", d: c }; }));
  }
  function find(id) {
    var all = items();
    for (var i = 0; i < all.length; i++) if (all[i].d.id === id) return all[i];
    return null;
  }
  function current() { return find(decodeURIComponent(window.location.hash.slice(1))); }
  function home(it) { return it.kind === "project" ? "projects" : "coursework"; }
  function tag(d) { return d.fresh ? '<span class="tag">' + esc(t(UI.fresh)) + "</span>" : ""; }
  function keyFig(k) {
    return '<p class="c-key"><span class="v">' + esc(t(k.value)) + '</span><span class="l">' + esc(t(k.label)) + "</span></p>";
  }

  function heroAcademic() {
    var facts = S.stats.slice(0, 2).map(function (s) {
      return "<span>" + esc(t(s.label)) + "<b>" + esc(t(s.value)) + "</b></span>";
    });
    facts.push("<span>" + esc(t(UI.interests)) + "<b>" + S.interests.map(t).map(esc).join(" · ") + "</b></span>");
    return '<header class="hero hero-compact">' +
      "<h1>" + x(S.profile.name) + "</h1>" +
      '<p class="school">' + esc(t(S.profile.school)) + "</p>" +
      '<p class="statement">' + x(S.profile.taglineAcademic) + "</p>" +
      '<p class="hero-facts">' + facts.join("") + "</p>" +
      links() + "</header>";
  }

  function card(it) {
    var d = it.d, isP = it.kind === "project";
    var key = isP ? d.key : (d.numbers || [])[0];
    var hints = isP ? [UI.details, d.demo && UI.demo, d.repo && UI.code] : [UI.data, d.report && UI.report];
    return '<a class="card" href="#' + esc(d.id) + '">' +
      '<p class="c-top"><span>' + esc(t(isP ? d.context : d.course)) + "</span>" + tag(d) + "</p>" +
      "<h3>" + esc(t(d.title)) + "</h3>" +
      '<p class="c-sum">' + esc(t(isP ? d.oneLiner : d.question)) + "</p>" +
      (key ? keyFig(key) : isP ? '<p class="c-key"><span class="l">' + techText(d) + "</span></p>" : "") +
      '<p class="c-foot"><span>' + hints.filter(Boolean).map(t).map(esc).join(" · ") + '</span><span class="arrow" aria-hidden="true">→</span></p></a>';
  }

  // 研究項目目前內容不多，整段直接顯示在卡片上，不做詳細頁
  function researchCard(r) {
    var top = (t(r.period) || r.fresh) ? '<p class="c-top"><span>' + esc(t(r.period)) + "</span>" + tag(r) + "</p>" : "";
    return '<article class="card card-static">' + top + "<h3>" + esc(t(r.title)) + "</h3>" +
      '<p class="c-sum">' + x(r.body) + "</p></article>";
  }

  function academicIndex() {
    var C = S.coursework || { items: [] };
    var grid = function (html) { return '<div class="cards">' + html + "</div>"; };
    var more = C.more && C.more.length
      ? '<div class="more"><h3>' + esc(t(UI.moreCourses)) + "</h3>" + list(C.more.map(t)) + "</div>"
      : "";
    return heroAcademic() +
      section("projects", UI.projects, grid(S.projects.map(function (p) { return card({ kind: "project", d: p }); }).join("")), S.projects.length) +
      section("research", UI.research, grid(S.research.map(researchCard).join("")), S.research.length) +
      section("coursework", UI.coursework,
        (C.intro ? '<p class="sec-intro">' + esc(t(C.intro)) + "</p>" : "") +
        grid(C.items.map(function (c) { return card({ kind: "course", d: c }); }).join("")) + more, C.items.length) +
      awards() + contact();
  }

  function block(label, v) {
    var s = x(v);
    return s ? '<section class="d-block"><h2>' + esc(t(label)) + "</h2><p>" + s + "</p></section>" : "";
  }
  function pagerLink(it, cls, label) {
    return it
      ? '<a class="' + cls + '" href="#' + esc(it.d.id) + '"><span>' + esc(t(label)) + "</span>" + esc(t(it.d.title)) + "</a>"
      : "<span></span>";
  }

  function detail(it) {
    var d = it.d, all = items(), i = all.map(function (a) { return a.d.id; }).indexOf(d.id);
    var context, meta, lede, main, media, aside;
    if (it.kind === "project") {
      context = t(d.context) + (d.badge ? comma() + t(d.badge) : "");
      meta = [t(d.period), t(d.team)];
      lede = t(d.oneLiner);
      main = block(UI.motivation, d.academic.motivation) + block(UI.method, d.academic.method) + block(UI.challenge, d.academic.challenge);
      media = shot(d);
      aside = '<dl class="facts">' + row(UI.role, list(arr(d.role))) +
        row(UI.tech, '<span class="p-tech">' + techText(d) + "</span>") +
        row(UI.demo, ext(d.demo)) + row(UI.code, ext(d.repo)) + "</dl>";
    } else {
      context = t(d.course);
      meta = [t(d.period)];
      lede = t(d.question);
      main = block(UI.approach, d.approach) + block(UI.finding, d.finding);
      media = (d.numbers || []).length ? '<div class="d-nums">' + d.numbers.map(function (n) {
        return '<div><span class="v">' + esc(t(n.value)) + '</span><span class="l">' + esc(t(n.label)) + "</span></div>";
      }).join("") + "</div>" : "";
      aside = d.report ? '<a class="btn" href="' + esc(asset(d.report)) + '" target="_blank" rel="noopener">' + esc(t(UI.report)) + " ↗</a>" : "";
    }
    meta = meta.filter(Boolean).join(" · ");
    return '<article class="detail">' +
      '<p class="d-context"><span>' + esc(context) + "</span>" + tag(d) + "</p>" +
      '<h1 tabindex="-1">' + esc(t(d.title)) + "</h1>" +
      (meta ? '<p class="d-meta">' + esc(meta) + "</p>" : "") +
      '<p class="d-lede">' + esc(lede) + "</p>" +
      '<div class="d-body"><div class="d-main">' + main + "</div>" +
      (media ? '<div class="d-media">' + media + "</div>" : "") +
      (aside ? '<div class="d-aside">' + aside + "</div>" : "") + "</div>" +
      '<nav class="pager" aria-label="' + esc(t(UI.prev)) + " / " + esc(t(UI.next)) + '">' +
      pagerLink(all[i - 1], "prev", UI.prev) + pagerLink(all[i + 1], "next", UI.next) + "</nav></article>";
  }

  function topbar(it) {
    var toggle = '<button class="lang" type="button" aria-label="' + (lang === "zh" ? "Switch to English" : "切換成中文") + '">' +
      '<span class="' + (lang === "zh" ? "on" : "") + '">中</span><span class="' + (lang === "en" ? "on" : "") + '">EN</span></button></div>';
    if (it) return '<div class="topbar topbar-detail"><a class="back" href="#' + home(it) + '">← ' + esc(t(UI.back)) + "</a>" + toggle;
    var nav = page === "academic"
      ? [["projects", UI.projects], ["research", UI.research], ["coursework", UI.coursework], ["awards", UI.awardsNav], ["contact", UI.contact]]
      : [["skills", UI.skills], ["projects", UI.projects], ["awards", UI.awardsNav], ["contact", UI.contact]];
    return '<div class="topbar"><nav aria-label="Sections">' +
      nav.map(function (n) { return '<a href="#' + n[0] + '">' + esc(t(n[1])) + "</a>"; }).join("") + "</nav>" + toggle;
  }

  // ---------- 研究所版的頁面切換 ----------
  var shown = null;       // 目前顯示的詳細頁項目（null = 目錄）
  var indexScroll = 0;    // 點進詳細頁前，目錄的捲動位置
  var fromIndex = false;  // 是否從目錄點進來（是的話「全部項目」直接回上一頁）

  // 詳細頁另外記一次瀏覽，GoatCounter 才看得出教授點開了哪些項目
  function track() {
    var gc = window.goatcounter;
    if (gc && typeof gc.count === "function") gc.count({ path: window.location.pathname + window.location.hash, title: document.title });
  }

  function onRoute() {
    var it = current();
    if (!it && !shown) return; // 目錄內的錨點，交給瀏覽器捲動
    if (it && !shown) { indexScroll = window.scrollY; fromIndex = true; }
    render();
    if (it) {
      window.scrollTo(0, 0);
      document.querySelector(".detail h1").focus({ preventScroll: true });
      track();
      return;
    }
    var sec = document.getElementById(window.location.hash.slice(1));
    if (fromIndex) window.scrollTo(0, indexScroll);
    else if (sec) sec.scrollIntoView();
    else window.scrollTo(0, 0);
    fromIndex = false;
  }

  function wireDetail() {
    document.querySelector(".back").addEventListener("click", function (e) {
      if (!fromIndex) return;
      e.preventDefault();
      window.history.back();
    });
    // 詳細頁之間切換不留歷史紀錄，按「上一頁」一律回到目錄
    Array.prototype.forEach.call(document.querySelectorAll(".pager a"), function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        window.history.replaceState(null, "", a.getAttribute("href"));
        onRoute();
      });
    });
  }

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant-TW" : "en";
    var name = t(S.profile.name);
    var suffix = page === "academic" ? (lang === "zh" ? "學術作品集" : "Academic Portfolio") : (lang === "zh" ? "作品集" : "Portfolio");
    var it = shown = page === "academic" ? current() : null;
    document.title = it
      ? t(it.d.title) + "｜" + (isTodo(name) ? suffix : name)
      : isTodo(name) ? suffix : name + "｜" + suffix;
    if (page === "academic") document.body.setAttribute("data-view", it ? "detail" : "index");

    var body = page === "academic"
      ? (it ? detail(it) : academicIndex())
      : hero() + skills() + section("projects", UI.projects, S.projects.map(project).join("")) + awards() + contact();

    document.getElementById("app").innerHTML =
      '<div class="wrap">' + topbar(it) + "<main>" + body + "</main>" +
      '<footer class="foot">© ' + new Date().getFullYear() + " " + (isTodo(name) ? "" : esc(name)) + "</footer></div>";

    document.querySelector(".lang").addEventListener("click", function () {
      lang = lang === "zh" ? "en" : "zh";
      storeSet("lang", lang);
      var u = new URL(window.location.href);
      u.searchParams.set("lang", lang);
      window.history.replaceState(null, "", u);
      render();
    });
    if (it) wireDetail();
  }

  render();
  if (page === "academic") {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.addEventListener("hashchange", onRoute);
    var target = !shown && document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
