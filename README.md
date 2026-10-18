# weiJayc.github.io

| 頁面 | 網址 | 讀者 |
|---|---|---|
| 求職版 | https://weijayc.github.io/ | HR、工程主管 |
| 研究所版 | https://weijayc.github.io/academic/ | 推甄審查教授 |

## 結構

```
data/site-data.js   ← 所有內容都在這裡（兩頁共用）
index.html          ← 求職版
academic/index.html ← 研究所版
js/render.js        ← 依頁面渲染不同區塊
css/style.css       ← 樣式（兩頁共用，色調不同）
assets/             ← 大頭照、專題 GIF、履歷 PDF
```

## 怎麼改內容

- 每段文字都是 `{ zh: "中文", en: "English" }`。
- 專題的 `academic` 欄位只出現在研究所版（動機 / 方法 / 遇到的問題），`job` 欄位只出現在求職版（摘要 / 技術重點）。
- 競賽的 `pages` 決定出現在哪一頁。
- 圖片放進 `assets/`，再把路徑填進 `image` / `photo` / `resumePdf`，例如 `"assets/projects/mmwave.gif"`。
- 專題想放多張並排圖片時，改用 `images: [{ src, caption }]`（取代 `image`）。
- 專題有線上網址時填 `demo`，會多出「網站」一列。
- `coursework` 只出現在研究所版：`items` 是課程實驗卡片（問題 / 做法 / 發現 / 報告 PDF），`more` 是一行一項的其他修課實作。報告 PDF 放在 `assets/coursework/`。

本機預覽：直接用瀏覽器打開 `index.html` 或 `academic/index.html` 即可。

## 語言與追蹤參數

- `?lang=en` 直接開英文版；訪客切換語言後會記住選擇。
- 備審裡可以放 `https://weijayc.github.io/academic/?ref=ncku` 這類連結，搭配瀏覽統計就能看出哪間學校點進來過（統計設定見 `index.html` 和 `academic/index.html` 開頭的註解）。