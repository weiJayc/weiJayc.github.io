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
data/assets/        ← 專題圖片與影片（projects/）、課程報告 PDF（coursework/）
```

## 怎麼改內容

- 每段文字都是 `{ zh: "中文", en: "English" }`。
- 專題的 `academic` 欄位只出現在研究所版（動機 / 方法 / 遇到的問題），`job` 欄位只出現在求職版（摘要 / 技術重點）。
- 競賽的 `pages` 決定出現在哪一頁。
- 圖片放進 `data/assets/`，再把路徑填進 `image` / `photo` / `resumePdf`，例如 `"data/assets/projects/mmWave/mmWave_realtime.jpg"`。
- `image` 是專題封面：研究所版的卡片和詳細頁右上角、求職版的專題圖都用它。想放多張並排封面時，改用 `images: [{ src, caption }]`（取代 `image`）。
- 卡片封面固定裁成 16:10。截圖兩側有重要內容、不想被裁切時，加上 `coverFit: "contain"`；想調整裁切位置時，在 `images` 的項目加 `pos`，例如 `pos: "8% 50%"`（靠左保留）。
- `media: [{ src, caption, wide, poster }]` 是研究所版詳細頁下方的圖片與影片，依陣列順序排成兩欄；`wide: true` 會橫跨兩欄。圖片點了會開原始大小。
- 放在 Google 雲端硬碟的影片用 `embed` 取代 `src`，網址把 `/view…` 換成 `/preview`，例如 `embed: "https://drive.google.com/file/d/<檔案ID>/preview"`；檔案要設成「知道連結的任何人都能查看」。
- 專題可以加 `blog` 和 `tutorial`（格式都是 `{ url, label }`），詳細頁會多出「鐵人賽文章」「參考教學」兩列。
- 影片請用 `.mp4`（H.264）。手機錄的 `.MOV` 在 Firefox 可能無法播放，需要先轉檔；`poster` 是影片播放前顯示的圖。
- 動機、方法、挑戰想分成好幾段時，改用陣列：`{ zh: ["第一段", "第二段"], en: ["...", "..."] }`。
- 專題有線上網址時填 `demo`，會多出「網站」一列。
- `coursework` 只出現在研究所版：`items` 是課程實驗卡片，`more` 是一行一項的其他修課實作。報告 PDF 放在 `data/assets/coursework/`。
- 一張課程卡片可以包含好幾份作業：在卡片裡放 `parts: [{ id, label, title, numbers, question, approach, finding, report }]`，詳細頁會依序排列。網址 `#卡片id` 打開整張，`#作業id`（例如 `#tsp`）會直接捲到那份作業。
- 研究所版首頁是卡片目錄，點卡片會打開該項目的詳細頁，網址是 `academic/#項目id`（例如 `#mmwave`、`#tsp`），可以直接貼進備審或信裡。
- 專題的 `key: { value, label }` 是卡片上的大數字；沒填就改顯示技術。
- `fresh: true` 會在卡片上標「備審未收錄」，專題、研究、課程實驗都可以用。
- 研究項目加上 `id` 就會變成可點的卡片，有自己的詳細頁（`#id`），欄位和專題相同：`context`、`body`（卡片摘要）、`key`、`image`、`media`、`tech`，以及 `academic: { motivation, method, result }`；`notes: [{ url, label }]` 會列在「筆記」。沒有 `id` 的研究項目維持整段文字顯示在卡片上。

本機預覽：直接用瀏覽器打開 `index.html` 或 `academic/index.html` 即可。

## 語言與追蹤參數

- `?lang=en` 直接開英文版；訪客切換語言後會記住選擇。
- 備審裡可以放 `https://weijayc.github.io/academic/?ref=ncku` 這類連結，搭配瀏覽統計就能看出哪間學校點進來過（統計設定見 `index.html` 和 `academic/index.html` 開頭的註解）。