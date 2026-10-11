/*
 * 網站唯一的資料來源：研究所版（/academic/）與求職版（/）都讀這一份。
 * 每個文字欄位都是 { zh: "...", en: "..." }。
 * 搜尋「待填」或「TODO」可以找到還需要你補上的地方。
 */
window.SITE = {
  profile: {
    name: { zh: "張惟喆", en: "WEICHE CHANG" },
    school: {
      zh: "輔仁大學 資訊工程學系",
      en: "Dept. of Computer Science & Information Engineering, Fu Jen Catholic University"
    },
    photo: "", // 例如 "assets/photo.jpg"；留空就顯示姓名縮寫
    email: "weru6129@gmail.com", // 【待填】公開用的 Email
    github: "https://github.com/weiJayc",
    resumePdf: "", // 求職版用，例如 "assets/resume.pdf"
    taglineAcademic: {
      zh: "喜歡把感測資料與深度學習結合，做成真的能動的系統。",
      en: "I enjoy turning sensor data and deep learning into systems that actually run."
    },
    taglineJob: {
      zh: "【待填：求職定位，例如「後端 / AI 應用工程師」】",
      en: "[TODO: target role, e.g. Backend / Applied AI Engineer]"
    }
  },

  // 首屏下方的數字亮點（研究所版）
  stats: [
    { value: "6 / 57", label: { zh: "班排名", en: "Class rank" } },
    { value: "89.3", label: { zh: "學業平均", en: "Average score" } },
    { value: { zh: "銀獎", en: "Silver" }, label: { zh: "2026 ICPC 全國私大程式競賽", en: "2026 ICPC Taiwan PUPC" } },
    { value: { zh: "第三名", en: "3rd Place" }, label: { zh: "2026 AI 毫米波創意應用競賽", en: "2026 AI mmWave Innovation Contest" } }
  ],

  // 研究所版：研究興趣
  interests: [
    { zh: "可見光通訊（VLC）與 NOMA", en: "Visible light communication (VLC) & NOMA" },
    { zh: "感測資料 × 深度學習", en: "Sensor data × deep learning" },
    { zh: "嵌入式與實體系統整合", en: "Embedded & physical system integration" }
  ],

  projects: [
    {
      id: "biometrics",
      title: { zh: "門把握力生物辨識", en: "Door-Handle Grip Biometrics" },
      oneLiner: {
        zh: "從「開門的握法」辨識是誰，不需要鑰匙或門禁卡",
        en: "Identify who is opening the door from how they grip the handle — no key or card needed"
      },
      context: { zh: "畢業專題", en: "Capstone project" },
      period: "", // 【待填】
      team: "", // 【待填】
      badge: null,
      tech: ["Python", "CNN", "KNN", { zh: "矩陣壓力感測器", en: "Matrix pressure sensor" }],
      repo: "https://github.com/weiJayc/force-matrix-biometrics-project",
      image: "", // 例如 "assets/projects/biometrics.gif"
      role: {
        zh: ["開發資料收集程式", "建立 CNN 訓練與評估流程"],
        en: ["Built the data-collection app", "Built the CNN training & evaluation pipeline"]
      },
      academic: {
        motivation: {
          zh: "門禁通常需要鑰匙或卡片。我們想知道：只靠開門這個動作本身，能不能認出使用者？",
          en: "Access control usually requires a key or card. We asked whether the act of opening a door is itself enough to identify a person."
        },
        method: {
          zh: "在木板上的門把裝設矩陣壓力感測器，受試者模擬開門握住門把，記錄壓力分布的時間序列，再以 CNN 分類身分；組員另以 KNN 做身分驗證。",
          en: "A matrix pressure sensor is mounted on a door handle fixed to a board. Subjects grip it as if opening a door; the pressure-map sequence is classified by a CNN, with a teammate's KNN model handling authentication."
        },
        challenge: { zh: "【待填：遇到的困難與解法】", en: "[TODO: key challenge and how it was solved]" }
      },
      job: {
        summary: {
          zh: "從感測器資料收集到模型訓練評估的完整流程，由我負責資料端與訓練端。",
          en: "End-to-end pipeline from sensor data collection to model training and evaluation; I owned the data and training sides."
        },
        highlights: {
          zh: ["自製資料收集程式，支援多位受試者錄製", "可重複執行的 CNN 訓練／評估流程"],
          en: ["Custom data-collection app for multi-subject recording", "Reproducible CNN training & evaluation pipeline"]
        }
      }
    },
    {
      id: "mmwave",
      title: { zh: "空氣掌門人：毫米波手勢遙控器", en: "Air Palm Master: mmWave Gesture Remote" },
      oneLiner: {
        zh: "對雷達揮手 → AI 即時辨識 6 種手勢 → 發出紅外線控制家電",
        en: "Wave at a radar → AI recognizes 6 gestures in real time → sends IR signals to home appliances"
      },
      context: { zh: "AI 毫米波創意應用競賽", en: "AI mmWave Innovation Contest" },
      period: "2025.12 – 2026.03",
      team: { zh: "3 人", en: "Team of 3" },
      badge: { zh: "第三名", en: "3rd Place" },
      tech: ["Python", "PyTorch (3D CNN)", "PySide2", "pySerial", { zh: "60 GHz FMCW 雷達", en: "60 GHz FMCW radar" }, "Arduino"],
      repo: "https://github.com/weiJayc/mmWave-ai-Contest",
      image: "",
      role: {
        zh: ["將指導老師提供的程式改成 6 類手勢", "訓練 3D CNN 模型（600 筆資料）", "撰寫 PC → Arduino 的 Serial 串接"],
        en: ["Adapted the advisor's baseline code to our 6 gestures", "Trained the 3D CNN on 600 recordings", "Wrote the PC → Arduino serial link"]
      },
      academic: {
        motivation: {
          zh: "毫米波雷達不需要鏡頭、不受光線影響，也能保護隱私。結合紅外線發射，不用改裝家電就能用手勢控制。",
          en: "mmWave radar needs no camera, works in any lighting and preserves privacy. Paired with IR, it controls existing appliances without modification."
        },
        method: {
          zh: "雷達每幀輸出距離-速度圖（RDI）與相位差圖（PHD），以 30 幀滑動視窗輸入 3D CNN，同時捕捉時間與空間變化；PHD 的角度資訊是分辨左右揮手的關鍵。",
          en: "Each radar frame yields a range-Doppler image (RDI) and a phase-difference map (PHD). A 30-frame sliding window feeds a 3D CNN that captures spatial and temporal change; the angle cue in PHD separates left vs. right waves."
        },
        challenge: {
          zh: "逐幀推論會讓同一個手勢重複觸發家電。我利用雙閥值鎖定的狀態，只在辨識結果改變時才送出 Serial 指令，一個動作對應一次紅外線發射。",
          en: "Per-frame inference made one gesture fire repeatedly. Using the double-threshold lock state, I send a serial command only when the result changes, so one gesture triggers exactly one IR command."
        }
      },
      job: {
        summary: {
          zh: "即時手勢辨識系統，從雷達訊號到家電控制完整串接，競賽第三名。",
          en: "Real-time gesture recognition from radar signal to appliance control; 3rd place in a national contest."
        },
        highlights: {
          zh: ["3D CNN 處理 (2, 30, 32, 32) 時空特徵", "狀態改變才送指令，避免重複觸發", "SDK 綁定舊版 Python，改以 CPU 在期限內完成訓練"],
          en: ["3D CNN over (2, 30, 32, 32) spatio-temporal input", "Edge-triggered commands prevent duplicate actions", "Trained on CPU within deadline under SDK-pinned Python 3.8"]
        }
      }
    },
    {
      id: "calculator",
      title: { zh: "AI 手寫計算機", en: "AI Handwriting Calculator" },
      oneLiner: {
        zh: "手寫算式 → 自動切割與辨識符號 → 算出結果，支援直式、矩陣與變數",
        en: "Handwrite an expression → segment and recognize each symbol → compute; supports vertical arithmetic, matrices and variables"
      },
      context: { zh: "人工智慧導論 期末專題", en: "Intro to AI final project" },
      period: "",
      team: "",
      badge: null,
      tech: ["Python", "TensorFlow / Keras", "OpenCV", "Tkinter"],
      repo: "https://github.com/delitoast1/ai-final-project",
      image: "",
      role: {
        zh: ["提出 DFS 連通元件切割演算法", "設計切割後的版面判斷與特殊符號規則"],
        en: ["Proposed the DFS connected-component segmentation", "Designed layout analysis and special-symbol rules after segmentation"]
      },
      academic: {
        motivation: {
          zh: "一般手寫辨識只辨識單一字元，但真正的算式有橫式、直式、矩陣等二維版面。",
          en: "Typical handwriting recognition handles single characters, but real expressions have 2-D layouts: inline, vertical and matrix."
        },
        method: {
          zh: "以 DFS 找出每組相連筆劃作為一個符號框，再以 CNN 分類 17 類符號；依座標與幾何特徵判斷「=」、矩陣括號與直式橫線，組回算式結構。",
          en: "DFS finds each connected stroke group as one symbol box; a CNN classifies 17 symbol classes. Coordinates and geometry identify '=', matrix brackets and vertical-sum lines to rebuild the expression."
        },
        challenge: {
          zh: "原本以 x 方向合併輪廓的方法會把上下排列的數字黏在一起，只能處理一行橫式。改用 DFS 後才能處理直式與矩陣。",
          en: "The original contour-merging approach glued vertically stacked digits together and only handled one line. Switching to DFS made vertical and matrix layouts possible."
        }
      },
      job: {
        summary: {
          zh: "以演算法與幾何規則補足模型能力，讓單一字元分類器能處理二維算式。",
          en: "Extended a single-symbol classifier to 2-D expressions with algorithms and geometric rules."
        },
        highlights: {
          zh: ["Stack 實作 DFS，避免遞迴深度溢位", "不重新訓練模型，以寬高比判斷矩陣括號", "單一符號驗證準確率 98.9%"],
          en: ["Stack-based DFS avoids recursion-depth overflow", "Bracket detection by aspect ratio — no retraining", "98.9% single-symbol validation accuracy"]
        }
      }
    },
    {
      id: "clinic",
      title: { zh: "醫療院所推薦平台", en: "Medical Clinic Recommendation" },
      oneLiner: {
        zh: "輸入症狀 → LLM 建議就醫科別 → 依距離列出附近院所",
        en: "Describe symptoms → LLM suggests a specialty → nearby clinics ranked by distance"
      },
      context: { zh: "資料庫系統導論 期末專題", en: "Intro to Database Systems final project" },
      period: "2025.12",
      team: { zh: "4 人", en: "Team of 4" },
      badge: null,
      tech: ["PostgreSQL", "PostGIS", "Node.js (Express)", "Ollama (Llama 3.1)", "React"],
      repo: "https://github.com/weiJayc/medical-clinic-recommendation",
      image: "",
      role: {
        zh: ["資料庫設計與 24,024 筆資料清理", "後端空間查詢 API", "本地 LLM（Ollama）串接", "制定 Git 分支與 PR 流程"],
        en: ["Schema design & cleaning of 24,024 records", "Backend spatial-query API", "Local LLM (Ollama) integration", "Set up Git branching & PR workflow"]
      },
      academic: {
        motivation: {
          zh: "民眾常不確定該看哪一科，也不知道附近哪間院所有開這一科。",
          en: "People often don't know which specialty to visit, or which nearby clinic offers it."
        },
        method: {
          zh: "將政府開放資料的多值科別欄位正規化為多對多結構，LLM 從 39 個固定科別中挑選並輸出 JSON，再以 PostGIS 查詢半徑內院所並依距離排序。",
          en: "Normalized the multi-valued specialty field into a many-to-many schema; the LLM picks from 39 fixed specialties as JSON, and PostGIS returns clinics within a radius ranked by distance."
        },
        challenge: {
          zh: "Gemini 免費額度在測試階段就用完，demo 無法讓全班同時連線。我改為本機部署 Ollama，讓系統不再受外部 API 額度限制。",
          en: "The Gemini free quota ran out during testing, risking the class-wide demo. I moved inference to a locally hosted Ollama model, removing the external quota dependency."
        }
      },
      job: {
        summary: {
          zh: "全端系統中負責資料層與後端：資料清理、正規化、空間查詢與 LLM 串接。",
          en: "Owned the data layer and backend: cleaning, normalization, spatial queries and LLM integration."
        },
        highlights: {
          zh: ["參數化查詢防 SQL injection，並限制半徑與筆數", "Geocoding 批次腳本：指數退避重試、單一交易寫回", "LLM 輸出容錯解析，格式錯誤也不中斷 API"],
          en: ["Parameterized queries with radius and row limits", "Geocoding batch job with exponential backoff and single-transaction writes", "Fault-tolerant LLM output parsing keeps the API up"]
        }
      }
    }
  ],

  // 研究所版：研究經驗與研究計畫
  research: [
    {
      title: { zh: "LiFi 光通訊模擬", en: "LiFi Optical Link Simulation" },
      period: "", // 【待填】
      body: {
        zh: "以 Matlab 建立光傳輸與光偵測器（PD）接收的模擬並驗證可行。做法是先釐清所有相關名詞，把原理與流程整理成清楚的文件，再設計實驗。",
        en: "Built and verified a Matlab simulation of optical transmission and photodiode (PD) reception. My approach: clarify every related term first, write a clear document of the principles and flow, then design experiments."
      }
    },
    {
      title: { zh: "研究計畫：室內 MIMO-NOMA 可見光通訊", en: "Proposal: Indoor MIMO-NOMA Visible Light Communication" },
      period: "",
      body: {
        zh: "以 SIC 可解性為依據，進行自適應的使用者分組與功率分配。",
        en: "SIC-decodability-driven adaptive user grouping and power allocation."
      }
    }
  ],

  // 競賽、證照與獎學（新到舊）
  awards: [
    { year: "2026", title: { zh: "ICPC 全國私立大專院校程式競賽（PUPC）銀獎", en: "ICPC Taiwan PUPC — Silver Award" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2026", title: { zh: "AI 毫米波創意應用競賽 第三名", en: "AI mmWave Innovation Contest — 3rd Place" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2026", title: { zh: "全國大專校院電腦軟體設計競賽 晉級決賽", en: "National Collegiate Software Design Contest — Finalist" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2025", title: { zh: "ICPC 全國私立大專院校程式競賽（PUPC）銅獎", en: "ICPC Taiwan PUPC — Bronze Award" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2025", title: { zh: "ICPC Asia Taiwan Online Programming Contest（TOPC）銅獎", en: "ICPC Asia Taiwan Online Programming Contest — Bronze Award" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2025", title: { zh: "全國大專校院電腦軟體設計競賽 晉級決賽", en: "National Collegiate Software Design Contest — Finalist" }, kind: "contest", pages: ["academic"] },
    { year: "2025", title: { zh: "CPE 大學程式能力檢定 進階級（前 6.9%）", en: "CPE Collegiate Programming Exam — Advanced (top 6.9%)" }, kind: "cert", pages: ["academic", "job"] },
    { year: "2024", title: { zh: "晉級 ICPC 亞洲區台中站區域賽", en: "Qualified for ICPC Asia Taichung Regional" }, kind: "contest", pages: ["academic", "job"] },
    { year: "2024", title: { zh: "輔大資工 112-2 書卷獎（第二名）", en: "Dean's List, Spring 2024 (2nd in class)" }, kind: "honor", pages: ["academic"] },
    { year: "", title: { zh: "晶心 ACE 檢定 Advanced Level", en: "Andes Certified Engineer — Advanced Level" }, kind: "cert", pages: ["academic", "job"] },
    { year: "", title: { zh: "多益 TOEIC 715", en: "TOEIC 715" }, kind: "cert", pages: ["academic", "job"] },
    { year: "", title: { zh: "人體研究倫理講習證明", en: "Human Research Ethics Training Certificate" }, kind: "cert", pages: ["academic"] }
  ],

  // 求職版：技能（只列專題中實際用過的）
  skills: [
    { group: { zh: "AI / 機器學習", en: "AI / ML" }, items: ["PyTorch", "TensorFlow / Keras", "CNN / 3D CNN", "OpenCV", "Ollama (LLM)"] },
    { group: { zh: "後端與資料庫", en: "Backend & Data" }, items: ["Node.js (Express)", "PostgreSQL", "PostGIS", "REST API"] },
    { group: { zh: "前端", en: "Frontend" }, items: ["React", "PySide2", "Tkinter"] },
    { group: { zh: "硬體與其他", en: "Hardware & Tools" }, items: ["Arduino", "pySerial", "Matlab", "Git / PR workflow"] }
  ]
};
