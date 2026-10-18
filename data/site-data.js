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
      key: { value: { zh: "第三名", en: "3rd Place" }, label: { zh: "2026 全國競賽", en: "2026 national contest" } },
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
      key: { value: "98.9%", label: { zh: "單一符號驗證準確率", en: "Single-symbol validation accuracy" } },
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
      key: { value: "24,024", label: { zh: "筆政府開放資料清理與正規化", en: "Open-data records cleaned and normalized" } },
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
    },
    {
      id: "games",
      title: { zh: "Unity 小遊戲與下載網站", en: "Unity Mini-Games & Download Site" },
      oneLiner: {
        zh: "30 天自學 Unity 做出 Flappy Birds 與 CubeThon，再自己架網站讓同學下載試玩",
        en: "Learned Unity in 30 days, built Flappy Birds and CubeThon, then made a site for classmates to download and play them"
      },
      context: { zh: "Web 基本原理與技術 課程", en: "Web Principles & Technologies course" },
      period: "2024.10",
      team: { zh: "個人", en: "Solo" },
      badge: { zh: "iThome 鐵人賽完賽", en: "iThome Ironman Challenge finisher" },
      key: { value: { zh: "30 天", en: "30 days" }, label: { zh: "從零自學 Unity，鐵人賽完賽", en: "Learned Unity from scratch; Ironman finisher" } },
      fresh: true, // 備審未收錄
      tech: ["Unity", "HTML / CSS", "jQuery", "GitHub Pages"],
      repo: "https://github.com/weiJayc/My-games-download-page",
      demo: "https://weijayc.github.io/My-games-download-page/",
      // 兩款遊戲各一張，例如 src: "assets/projects/games-flappy.png"
      images: [
        { src: "", caption: "Flappy Birds" },
        { src: "", caption: { zh: "CubeThon（方塊馬拉松）", en: "CubeThon" } }
      ],
      role: {
        zh: ["以 Unity 製作 Flappy Birds（最高分存在本機）與 CubeThon（三個關卡）", "設計並撰寫遊戲介紹與下載網站", "以 jQuery 做下載按鈕與導覽列的滑動遮罩效果"],
        en: ["Built Flappy Birds (locally saved high score) and CubeThon (three levels) in Unity", "Designed and wrote the showcase & download site", "Added slide-in hover overlays to buttons and nav with jQuery"]
      },
      academic: {
        motivation: {
          zh: "課程要求參加 iThome 鐵人賽，我用 30 天從零學 Unity 做出兩款遊戲。為了讓互評的同學能直接下載試玩，我自己做了這個網站，也是我第一個有實際用途的網站。",
          en: "The course required the iThome Ironman 30-day challenge, during which I learned Unity from scratch and built two games. To let peer reviewers download and play them, I built this site — my first website with a real purpose."
        },
        method: {
          zh: "每款遊戲一個區塊：全螢幕背景、標題與 Windows 版下載按鈕，下方接操作說明截圖與遊玩影片；固定導覽列可直接跳到各遊戲，部署在 GitHub Pages。",
          en: "One section per game: a full-screen hero with title and Windows download button, followed by annotated screenshots and a gameplay video. A fixed nav jumps between games; hosted on GitHub Pages."
        },
        challenge: { zh: "【待填：遇到的困難與解法】", en: "[TODO: key challenge and how it was solved]" }
      },
      job: {
        summary: {
          zh: "從遊戲開發到網站上線一人完成：自學 Unity 做出兩款遊戲，並建置下載網站讓同學試玩。",
          en: "Solo from game to launch: taught myself Unity, shipped two games, and built a download site for classmates to try them."
        },
        highlights: {
          zh: ["完成 iThome 鐵人賽，30 天內從零學會 Unity", "兩款可下載遊玩的 Windows 遊戲", "第一個正式上線的網站，部署於 GitHub Pages"],
          en: ["Completed the iThome Ironman challenge, learning Unity from scratch in 30 days", "Two playable Windows games available for download", "First production website, deployed on GitHub Pages"]
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
    },
    {
      title: { zh: "論文研讀：智慧通訊系統設計（課程）", en: "Paper Reading: Intelligent Communication System Design (course)" },
      period: "",
      fresh: true,
      body: {
        zh: "課程以研讀近年通訊論文為主（共 18 篇，2020–2026），主題包含近場 beam focusing、ISAC、無線電力傳輸，以及 LiFi 的 MIMO-OFDM、同步與以深度學習做定位。其中 LiFi 相關論文與我的可見光通訊研究方向直接相關。",
        en: "A reading-based course covering 18 recent communication papers (2020–2026): near-field beam focusing, ISAC, wireless power transfer, and LiFi topics including MIMO-OFDM, synchronization and deep-learning-based positioning. The LiFi papers relate directly to my visible light communication research direction."
      }
    }
  ],

  // 研究所版：課程實驗（只在 academic 頁顯示）
  coursework: {
    intro: {
      zh: "以下是修課作業中，我自己實作演算法、設計比較實驗並分析數據的報告。",
      en: "Coursework where I implemented the algorithms myself, designed comparison experiments and analyzed the data."
    },
    items: [
      {
        id: "3sat",
        fresh: true,
        course: { zh: "人工智慧導論 作業一", en: "Intro to AI — Assignment 1" },
        period: "2025",
        title: { zh: "3-SAT：比較 DFS、BFS 與 A* 搜尋", en: "3-SAT: Comparing DFS, BFS and A* Search" },
        numbers: [
          { value: "28,701", label: { zh: "A* 展開節點數（D = 50）", en: "Nodes expanded by A* (D = 50)" } },
          { value: "47,302", label: { zh: "DFS 展開節點數（D = 50）", en: "Nodes expanded by DFS (D = 50)" } }
        ],
        question: {
          zh: "同一個 3-SAT 問題，不同搜尋策略的代價差在哪裡？",
          en: "On the same 3-SAT problem, where do different search strategies actually differ in cost?"
        },
        approach: {
          zh: "用 C++ 實作 DFS、BFS 與 A*，在維度 D = 10～50 的測資上記錄展開節點數、記憶體用量與執行時間。另外做對照實驗：拿掉 DFS 的變數取值排序函式，觀察它對結果的影響。",
          en: "Implemented DFS, BFS and A* in C++ and measured nodes expanded, memory usage and runtime for D = 10–50. As a control experiment, I removed DFS's value-ordering function to measure its effect."
        },
        finding: {
          zh: "D = 50 時，A* 展開的節點數最少。拿掉取值排序後，DFS 展開 125,000 個節點仍沒有找到解，可見這個排序是 DFS 能跑完的關鍵。我也記錄了一個還沒完全解釋的現象：A* 的記憶體用量反而比 BFS 高。",
          en: "At D = 50, A* expanded the fewest nodes. Without value ordering, DFS expanded 125,000 nodes and still found no solution, showing the ordering is what makes DFS finish. I also noted an open question: A* used more memory than BFS."
        },
        report: "assets/coursework/ai-3sat.pdf"
      },
      {
        id: "tsp",
        fresh: true,
        course: { zh: "人工智慧導論 作業二", en: "Intro to AI — Assignment 2" },
        period: "2025",
        title: { zh: "TSP：三種區域搜尋法與改良版本", en: "TSP: Three Local Search Methods and Improved Variants" },
        numbers: [
          { value: "17×", label: { zh: "GA+ 相對 GA 的路徑長改善（1000 個城市）", en: "Tour-length improvement of GA+ over GA (1000 cities)" } },
          { value: "≈ 1%", label: { zh: "GA+ 標準差／平均（500–1000 個城市）", en: "GA+ std / mean (500–1000 cities)" } }
        ],
        question: {
          zh: "Hill Climbing、Simulated Annealing、Genetic Algorithm 各自卡在哪裡？改良後能好多少？",
          en: "Where do Hill Climbing, Simulated Annealing and Genetic Algorithms each get stuck, and how much can improvements help?"
        },
        approach: {
          zh: "用 C++ 實作三種演算法的一般版與改良版，共 6 種：HC+ 多次重啟、SA+ 以 greedy 產生起始路徑、GA+ 加入 25% greedy 初始族群與菁英保留。城市數 50～1000，每組跑 10 次，比較平均路徑長、執行時間與標準差，並對 GA+ 做參數敏感度分析（tournament k、mutation rate、population size）。",
          en: "Implemented plain and improved versions of all three in C++ (6 variants): HC+ with restarts, SA+ with a greedy initial tour, and GA+ with a 25% greedy initial population plus elitism. Ran 50–1000 cities, 10 runs each, comparing mean tour length, runtime and standard deviation, plus a parameter-sensitivity study on GA+ (tournament k, mutation rate, population size)."
        },
        finding: {
          zh: "起始解的品質幾乎主導結果：1000 個城市時，GA 的平均路徑長從 1,065,507 降到 61,463。mutation rate 0.1 時平均與標準差都最低，0.4 時標準差升到約 2.6 倍。k = 30 雖然平均最好，但標準差也最大，我判斷是運氣成分，因此選 k = 8～10 作為平衡點。",
          en: "Initial-solution quality dominated the outcome: at 1000 cities, GA's mean tour length dropped from 1,065,507 to 61,463. A mutation rate of 0.1 gave both the lowest mean and lowest std; at 0.4 the std rose about 2.6×. k = 30 had the best mean but also the highest std, which I judged to be luck, so I chose k = 8–10 as the balance point."
        },
        report: "assets/coursework/ai-tsp.pdf"
      },
      {
        id: "mnist",
        fresh: true,
        course: { zh: "人工智慧導論 作業三", en: "Intro to AI — Assignment 3" },
        period: "2025",
        title: { zh: "手寫數字辨識：KNN、決策樹與線性分類器", en: "Handwritten Digit Recognition: KNN, Decision Tree and Linear Classifier" },
        numbers: [
          { value: "88.32%", label: { zh: "線性分類器測試準確率", en: "Linear classifier test accuracy" } },
          { value: "7 ms", label: { zh: "決策樹預測 10,000 張", en: "Decision tree, 10,000 predictions" } }
        ],
        question: {
          zh: "準確率、訓練時間與預測速度之間，三種經典分類器各自怎麼取捨？",
          en: "How do three classic classifiers trade off accuracy, training time and prediction speed?"
        },
        approach: {
          zh: "用 C++ 實作三種分類器，以 MNIST 比較準確率、macro F1、訓練與預測時間。KNN 改成只儲存 10 個類別的平均向量；決策樹以 Gini impurity 選切點，並每 4 個 pixel 取樣一次，把特徵從 28×28 降到 7×7。",
          en: "Implemented three classifiers in C++ and compared accuracy, macro F1, training and prediction time on MNIST. KNN was reduced to 10 class-mean vectors; the decision tree splits on Gini impurity, with features downsampled from 28×28 to 7×7 by sampling every 4th pixel."
        },
        finding: {
          zh: "線性分類器準確率最高（88.32%），但訓練約需 23.5 分鐘。決策樹準確率 82.96%，預測 10,000 張只要 7 ms。KNN 訓練最快，但準確率最低（82.03%）。結論是準確率和速度一定要在訓練或預測時間上取捨，我認為決策樹最平衡。同一門課的期末專題見上方「AI 手寫計算機」。",
          en: "The linear classifier was most accurate (88.32%) but took about 23.5 minutes to train. The decision tree reached 82.96% and predicted 10,000 images in 7 ms. KNN trained fastest but was least accurate (82.03%). Accuracy and speed must be paid for in training or prediction time; I found the decision tree the best balance. The course's final project is the AI Handwriting Calculator above."
        },
        report: "assets/coursework/ai-mnist.pdf"
      }
    ],
    more: [
      {
        zh: "演算法｜N-Queens 回溯法：n = 4～16 全部求解並記錄拜訪與可行節點數；n = 16 時共 14,772,512 組解，拜訪約 180 億個節點。",
        en: "Algorithms | N-Queens backtracking: solved n = 4–16, logging visited and promising nodes; n = 16 has 14,772,512 solutions and about 18 billion visited nodes."
      },
      {
        zh: "物聯網概論 期末專題（4 人）：在玩具車上整合超音波、加速度感測器、LED 螢幕、蜂鳴器與 LED，做出倒車雷達、前方 LED 大燈與時速顯示。",
        en: "Intro to IoT final project (team of 4): integrated ultrasonic and accelerometer sensors, an LED display, a buzzer and LEDs on a toy car for a reversing radar, front LED headlights and a speed display."
      }
    ]
  },

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
