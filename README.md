# weiJayc.github.io

一份資料、兩個頁面、中英雙語的個人網站。

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

只要改 `data/site-data.js`，兩個頁面都會更新。

- 每段文字都是 `{ zh: "中文", en: "English" }`。
- 專題的 `academic` 欄位只出現在研究所版（動機 / 方法 / 遇到的問題），`job` 欄位只出現在求職版（摘要 / 技術重點）。
- 競賽的 `pages` 決定出現在哪一頁。
- 圖片放進 `assets/`，再把路徑填進 `image` / `photo` / `resumePdf`，例如 `"assets/projects/mmwave.gif"`。

本機預覽：直接用瀏覽器打開 `index.html` 或 `academic/index.html` 即可。

## 語言與追蹤參數

- `?lang=en` 直接開英文版；訪客切換語言後會記住選擇。
- 備審裡可以放 `https://weijayc.github.io/academic/?ref=ncku` 這類連結，搭配瀏覽統計就能看出哪間學校點進來過（統計設定見 `index.html` 和 `academic/index.html` 開頭的註解）。

## 部署

1. 在 GitHub 建立名為 `weiJayc.github.io` 的 public repo。
2. 把這個資料夾的內容 push 上去（main 分支）。
3. 到 repo 的 Settings → Pages，Source 選 main 分支的根目錄。
4. 幾分鐘後即可從上方網址瀏覽。

## 待填清單

頁面上的紅字就是待填處，搜尋 `待填` 或 `TODO` 也能找到。
