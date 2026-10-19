window.SITE = {
  profile: {
    name: { zh: "張惟喆", en: "WEICHE CHANG" },
    school: {
      zh: "輔仁大學 資訊工程學系",
      en: "Dept. of Computer Science & Information Engineering, Fu Jen Catholic University"
    },
    photo: "", // 例如 "data/assets/photo.jpg"；留空就顯示姓名縮寫
    email: "weru6129@gmail.com", // 【待填】公開用的 Email
    github: "https://github.com/weiJayc",
    resumePdf: "", // 求職版用，例如 "data/assets/resume.pdf"
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
      team: { zh: "3 人", en: "Team of 3" },
      badge: null,
      key: { value: "99.4%", label: { zh: "CNN 辨識準確率（180 筆測試資料）", en: "CNN accuracy on 180 test samples" } },
      tech: ["Python", "CNN", "KNN", { zh: "矩陣壓力感測器", en: "Matrix pressure sensor" }],
      repo: "https://github.com/weiJayc/force-matrix-biometrics-project",
      image: "data/assets/projects/biometrics/biometrics.png",
      media: [
        {
          src: "data/assets/projects/biometrics/biometrics_grip.jpg",
          caption: { zh: "受試者模擬開門的動作握住門把。", en: "A subject grips the handle as if opening the door." }
        },
        {
          src: "data/assets/projects/biometrics/biometrics_sensor.jpg",
          caption: { zh: "矩陣壓力感測器包覆在門把上，訊號經排線接出。", en: "The matrix pressure sensor wraps around the handle; its signals run out through a flat cable." }
        },
        {
          src: "data/assets/projects/biometrics/biometrics_recording.jpg",
          caption: { zh: "錄製資料時，筆電上的錄製程式即時顯示壓力熱圖。", en: "While a subject grips the handle, the recording app on the laptop shows a live pressure heatmap." }
        },
        {
          src: "data/assets/projects/biometrics/biometrics_datarecording.png",
          caption: { zh: "資料錄製程式：即時顯示 4×4 壓力熱圖，並依受試者分類儲存每一筆錄製。", en: "Data-recording app: a live 4×4 pressure heatmap, with each recording saved under the subject's label." }
        },
        {
          src: "data/assets/projects/biometrics/biometrics_learningcurve.png", wide: true,
          caption: { zh: "CNN 的訓練與驗證曲線（400 個 epoch）。", en: "CNN training and validation curves over 400 epochs." }
        },
        {
          src: "data/assets/projects/biometrics/biometrics_fusionmatrix.png", wide: true,
          caption: { zh: "混淆矩陣：8 位受試者加上 background 類別，每類 20 筆測試資料。", en: "Confusion matrix: 8 subjects plus a background class, 20 test samples each." }
        }
      ],
      role: {
        zh: ["開發初版熱圖預覽程式", "開發初版資料錄製程式", "建立 CNN 訓練流程並分析訓練結果"],
        en: ["Built the first version of the heatmap preview app", "Built the first version of the data-recording app", "Built the CNN training pipeline and analyzed the results"]
      },
      academic: {
        motivation: {
          zh: "門禁通常需要鑰匙或卡片才能解鎖。我們想知道：只靠開門這個動作本身，能不能認出使用者？因此我們探索握門把時的壓力分布是否因人而異，足以作為辨識身分的依據。",
          en: "Access control usually requires a key or card. We asked whether the act of opening a door is itself enough to identify a person — whether the pressure pattern of a grip differs enough between people to serve as an identity cue."
        },
        method: {
          zh: "在自製的門把裝置上裝設矩陣壓力感測器，受試者模擬開門握住門把，記錄壓力分布的時間序列，再以 CNN 分類身分；組員另以 KNN 與統計特徵分析做身分驗證。",
          en: "A matrix pressure sensor is mounted on a door handle held by a custom-built rig. Subjects grip it as if opening a door, and the pressure-map sequence is classified by a CNN; teammates handle authentication with KNN and statistical-feature analysis."
        },
        // 多段文字用陣列，每一項顯示成一段
        challenge: {
          zh: [
            "一開始我們使用系上教室的門把，但教室需要上課，設備只能反覆拆裝，導致每次收集到的資料無法對齊。因此我們自製了一個固定門把的裝置，才能穩定地大量收集資料。",
            "我們只用 20% 的資料訓練，準確率就超過 95%。當時資料量仍然不足，我們懷疑模型過擬合，但從 learning curve 又看不出過擬合的跡象。因此我們改用其他方法，看看它們是否也有能力分辨不同的使用者：以特徵擷取的方式，對每筆資料計算平均、標準差、最小值、最大值、全距、中位數、曲線下面積、峰值位置、首尾差與最大變化量共 10 項統計量。結果只觀察這些統計量，也能在一定程度上分辨使用者。"
          ],
          en: [
            "We started with a classroom door handle, but the room was in use for classes, so the setup had to be removed and reinstalled again and again, and recordings from different sessions no longer lined up. We built a rig that holds the handle in place, which made large-scale, consistent data collection possible.",
            "Trained on only 20% of the data, the CNN already exceeded 95% accuracy. We still had too little data and suspected overfitting, yet the learning curves showed no sign of it. So we tried other methods to see whether they could also tell users apart, using extracted features: ten statistics per recording — mean, standard deviation, min, max, range, median, area under the curve, peak position, first–last delta and maximum absolute change. These statistics alone could also distinguish users to a fair degree."
          ]
        }
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
      image: "data/assets/projects/mmWave/mmWave_realtime.jpg",
      media: [
        {
          src: "data/assets/projects/mmWave/mmWave_radar.png",
          caption: { zh: "雷達輸出的距離-速度特徵圖（RDI）。", en: "Range-Doppler feature maps (RDI) from the radar." }
        },
        {
          src: "data/assets/projects/mmWave/mmWave_flowchart.png",
          caption: {
            zh: "系統流程：先在紅外線註冊模式收集並儲存 4 組紅外線訊號，之後依辨識到的手勢發射對應的訊號；連續偵測到兩次 Pull 手勢會重新進入註冊模式。",
            en: "System flow: in IR registration mode the device stores four IR codes, then fires the code that matches each recognized gesture; two consecutive Pull gestures return it to registration mode."
          }
        }
      ],
      role: {
        zh: ["將指導老師提供的程式改成 6 類手勢", "訓練 3D CNN 模型（600 筆資料）", "撰寫 PC → Arduino 的 Serial 串接"],
        en: ["Adapted the advisor's baseline code to our 6 gestures", "Trained the 3D CNN on 600 recordings", "Wrote the PC → Arduino serial link"]
      },
      academic: {
        motivation: {
          zh: "疫情期間大家都盡量避免接觸，但使用遙控器卻免不了要用手碰，所以我們希望用手勢取代實體遙控器。用相機鏡頭辨識手勢的例子已經很多，但如果家裡到處都裝著鏡頭，隱私會是一大隱憂。因此我們改用毫米波雷達：它不受環境光線影響，同時也能保護隱私。",
          en: "During the pandemic we tried to avoid touching shared objects, yet a remote control still has to be picked up, so we wanted gestures to replace it. Camera-based gesture recognition is already common, but cameras all over the home are a real privacy concern. We used mmWave radar instead: it works in any lighting and keeps the home private."
        },
        method: {
          zh: "雷達每一幀輸出兩張圖：RDI（距離-速度圖）呈現手的遠近與速度正負，PHD（相位差圖）則以相位呈現左右方向。我們以 30 幀為滑動視窗輸入 3D CNN，同時捕捉時間與空間上的變化。",
          en: "Each radar frame yields two maps: an RDI (range-Doppler image) showing how far the hand is and whether it moves toward or away from the radar, and a PHD (phase-difference map) whose phase gives the left–right direction. A 30-frame sliding window feeds a 3D CNN that captures change across both time and space."
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
      team: { zh: "4 人", en: "Team of 4" },
      badge: null,
      key: { value: "99.7%", label: { zh: "17 類符號的 macro F1", en: "Macro F1 across 17 symbol classes" } },
      tech: ["Python", "TensorFlow / Keras", "OpenCV", "Tkinter"],
      repo: "https://github.com/delitoast1/ai-final-project",
      image: "data/assets/projects/calculator/calculator2.png",
      coverFit: "contain", // 截圖兩側有算式，不裁切
      media: [
        {
          embed: "https://drive.google.com/file/d/1eJrE0lRNIp2kXcEMf6NLTQSEUcFZ9JAg/preview",
          caption: { zh: "操作影片：橫式運算", en: "Demo: inline expressions" }
        },
        {
          embed: "https://drive.google.com/file/d/1ju77yWu-qTAk9o67q54FRPcJhdOVgfUk/preview",
          caption: { zh: "操作影片：直式運算", en: "Demo: vertical arithmetic" }
        },
        {
          embed: "https://drive.google.com/file/d/1w75nfEHSyQN6NdeITpxPlQbtnsBScBj4/preview",
          caption: { zh: "操作影片：矩陣運算", en: "Demo: matrix operations" }
        },
        {
          src: "data/assets/projects/calculator/calculator_variablesmatrix.png",
          caption: { zh: "在矩陣中使用變數：C = 2 時計算矩陣乘法。", en: "A variable inside a matrix: matrix multiplication with C = 2." }
        },
        {
          src: "data/assets/projects/calculator/calculator_flowchart.png", wide: true,
          caption: { zh: "系統流程：書寫停頓 1.5 秒後自動擷取畫布，以 DFS 切出每個符號交給 CNN 辨識，再依橫式、直式或矩陣的版面組回算式。", en: "System flow: 1.5 s after writing stops, the canvas is captured; DFS splits it into symbols for the CNN, and the expression is rebuilt according to its inline, vertical or matrix layout." }
        },
        {
          src: "data/assets/projects/calculator/calculator_sourcecode_flowchart.png", wide: true,
          caption: { zh: "改良前的原始流程：以 OpenCV 偵測輪廓並合併重疊的 bounding box，只能處理單行橫式。", en: "The original pipeline before our changes: OpenCV contours with overlapping bounding boxes merged, limited to a single inline expression." }
        },
        {
          src: "data/assets/projects/calculator/calcalculator_boundingbox.png",
          caption: { zh: "DFS 切割結果：矩陣算式。", en: "DFS segmentation of a matrix expression." }
        },
        {
          src: "data/assets/projects/calculator/calcalculator_boundingbox2.png",
          caption: { zh: "DFS 切割結果：直式加法。", en: "DFS segmentation of a vertical addition." }
        },
        {
          src: "data/assets/projects/calculator/calculator1.png",
          caption: { zh: "變數與直式乘法：代入 A = 4、b = 3，算出 45 × 43 = 1935。", en: "Variables with vertical multiplication: with A = 4 and b = 3, it computes 45 × 43 = 1935." }
        },
        {
          src: "data/assets/projects/calculator/calculator3.png",
          caption: { zh: "三個數的直式乘法：250 × 4 × 30 = 30000。", en: "Vertical multiplication of three numbers: 250 × 4 × 30 = 30000." }
        },
        {
          src: "data/assets/projects/calculator/calculator_learningcurve.png",
          caption: { zh: "CNN 的訓練與驗證曲線。", en: "CNN training and validation curves." }
        },
        {
          src: "data/assets/projects/calculator/calculator_modelscore.png",
          caption: { zh: "17 類符號的分類報告（macro F1 0.9972）。", en: "Classification report for the 17 symbol classes (macro F1 0.9972)." }
        }
      ],
      role: {
        zh: ["提出 DFS 連通元件切割演算法", "設計切割後的版面判斷與特殊符號規則"],
        en: ["Proposed the DFS connected-component segmentation", "Designed layout analysis and special-symbol rules after segmentation"]
      },
      academic: {
        motivation: {
          zh: "手寫數字最常出現的場景就是數學計算，因此我們想做一個手寫計算機，自動辨識算式並算出結果，省下枯燥的計算時間。但一般的手寫辨識只認得單一字元，真正的算式卻有橫式、直式、矩陣等二維版面。",
          en: "Handwritten digits show up most often in math, so we set out to build a handwriting calculator that recognizes an expression and computes the answer automatically, saving tedious calculation time. Typical handwriting recognition, however, handles single characters, while real expressions have 2-D layouts: inline, vertical and matrix."
        },
        method: {
          zh: "以 DFS 找出每組相連筆劃作為一個符號框，再以 CNN 分類 17 類符號；最後依座標與幾何特徵判斷「=」、矩陣括號與直式橫線，組回算式結構。",
          en: "DFS finds each connected stroke group as one symbol box, and a CNN classifies it into one of 17 symbol classes; finally, coordinates and geometry identify '=', matrix brackets and vertical-sum lines to rebuild the expression."
        },
        challenge: {
          zh: "原本以 x 方向合併輪廓的方法會把上下排列的數字黏在一起，只能處理一行橫式；而且 OpenCV 的輪廓函式會把 0、8 這類數字中間的空白也標成獨立的 bounding box。我們自行設計 DFS 切割邏輯後，才能正確處理直式與矩陣。",
          en: "The original contour-merging approach glued vertically stacked digits together and handled only a single line, and OpenCV's contour function also boxed the holes inside digits such as 0 and 8 as separate symbols. Designing our own DFS segmentation fixed both and made vertical and matrix layouts possible."
        }
      },
      job: {
        summary: {
          zh: "以演算法與幾何規則補足模型能力，讓單一字元分類器能處理二維算式。",
          en: "Extended a single-symbol classifier to 2-D expressions with algorithms and geometric rules."
        },
        highlights: {
          zh: ["Stack 實作 DFS，避免遞迴深度溢位", "不重新訓練模型，以寬高比判斷矩陣括號", "17 類符號 macro F1 99.7%"],
          en: ["Stack-based DFS avoids recursion-depth overflow", "Bracket detection by aspect ratio — no retraining", "99.7% macro F1 across 17 symbol classes"]
        }
      }
    },
    {
      id: "clinic",
      title: { zh: "醫路通：醫療院所推薦平台", en: "MediRoute: Medical Clinic Recommendation" },
      oneLiner: {
        zh: "輸入症狀 → LLM 建議就醫科別 → 依距離列出附近院所 → Google Maps 導航",
        en: "Describe symptoms → LLM suggests a specialty → nearby clinics ranked by distance → Google Maps directions"
      },
      context: { zh: "資料庫系統導論 期末專題", en: "Intro to Database Systems final project" },
      period: "2025.12",
      team: { zh: "4 人", en: "Team of 4" },
      badge: null,
      key: { value: "24,024", label: { zh: "筆政府開放資料清理與正規化", en: "Open-data records cleaned and normalized" } },
      tech: ["PostgreSQL", "PostGIS", "Node.js (Express)", "Ollama (Llama 3.1)", "React"],
      repo: "https://github.com/weiJayc/medical-clinic-recommendation",
      image: "data/assets/projects/clinic/clinic_web1.png",
      media: [
        {
          src: "data/assets/projects/clinic/clinic_flowchart.png", wide: true,
          caption: { zh: "系統架構：藍框是我負責的部分，包含後端 API、本地 LLM、資料庫、資料清理與座標補齊腳本。", en: "System architecture. The blue-outlined parts are mine: the backend API, the local LLM, the database, data cleaning and the geocoding script." }
        },
        {
          src: "data/assets/projects/clinic/clinic_web2.png", wide: true,
          caption: { zh: "依距離排序的院所搜尋結果。", en: "Search results ranked by distance." }
        },
        {
          src: "data/assets/projects/clinic/clinic_web3.png",
          caption: { zh: "功能選單：院所搜尋、收藏、語言切換與瀏覽紀錄。", en: "Side menu: search, favorites, language and history." }
        },
        {
          src: "data/assets/projects/clinic/clinic_web4.jpg",
          caption: { zh: "在手機上實際操作的畫面。", en: "The app running on a phone." }
        }
      ],
      role: {
        zh: ["資料庫設計與 24,024 筆資料清理", "後端空間查詢 API", "本地 LLM（Ollama）串接", "制定 Git 分支與 PR 流程"],
        en: ["Schema design & cleaning of 24,024 records", "Backend spatial-query API", "Local LLM (Ollama) integration", "Set up Git branching & PR workflow"]
      },
      academic: {
        motivation: {
          zh: "身體不舒服時，民眾常不確定該看哪一科；有些症狀很難用簡單的詞描述，上網也查不到該看哪一科，更不知道附近哪間院所有開這一科。本專題讓使用者用自然語言描述症狀，由系統推薦適合的就醫科別，再從資料庫中找出使用者附近有開設該科的院所，依距離排序。（本系統僅提供就醫建議，不做醫療診斷。）",
          en: "When people feel unwell, they often don't know which specialty to see. Some symptoms are hard to put into a few words, so searching online doesn't help, and they don't know which nearby clinic offers that specialty. Our system lets users describe symptoms in natural language, recommends a suitable specialty, then finds clinics near the user that offer it, ranked by distance. (It offers guidance only, not a medical diagnosis.)"
        },
        method: {
          zh: "將政府開放資料中的多值科別欄位清洗後拆成多對多關聯表；LLM 從 39 個常見科別中挑選並輸出 JSON，再以 PostGIS 查詢使用者周圍指定半徑內的院所，依距離排序。",
          en: "Cleaned the multi-valued specialty field in the government open data and split it into a many-to-many table; the LLM picks from 39 common specialties and returns JSON, and PostGIS finds clinics within a set radius of the user, ranked by distance."
        },
        challenge: {
          zh: [
            "開放資料中，光是雙北就有 2,006 筆院所只有地址、沒有經緯度；少了座標就無法計算距離，查詢時會漏掉這些院所。我用 Google Geocoding API 批次取得這些院所的經緯度（失敗時以指數退避重試），再寫回資料庫，才補齊了雙北的院所資料。",
            "原始資料中，相近的科別有各式各樣的名稱。我們看過全部資料後，定義了 39 種常見科別作為基礎，讓 LLM 每次只從這些科別中挑選，避免推薦到院所數量過少的特殊科別。",
            "我們原本使用 Gemini 作為後端的 LLM，但在測試階段就用完了免費額度，demo 時無法承載全班同時連線。因此我研究如何在本機部署 Ollama，並重寫 LLM 串接模組，取代原本的 Gemini API。"
          ],
          en: [
            "In the open data, 2,006 facilities in Taipei and New Taipei alone had an address but no coordinates. Without coordinates we couldn't compute distances, so queries silently missed them. I geocoded them in batches with the Google Geocoding API, retrying with exponential backoff, and wrote the coordinates back to the database, which completed the data for the Taipei area.",
            "The raw data used many different names for similar specialties. After going through all of it, our team defined 39 common specialties and had the LLM choose only from them, so it wouldn't recommend niche specialties with very few clinics.",
            "We first used Gemini as the backend LLM, but its free quota ran out during testing and couldn't support the whole class connecting at once for the demo. I studied local deployment with Ollama and rewrote the LLM integration module to replace the Gemini API."
          ]
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
        zh: "參加 30 天的 iThome 鐵人賽自學 Unity，做出 Flappy Bird 3D 與 CubeThon，再自己架設介紹網站讓同學下載試玩",
        en: "Joined the 30-day iThome Ironman challenge to learn Unity, built Flappy Bird 3D and CubeThon, then set up a showcase site where classmates could download and play them"
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
      blog: { url: "https://ithelp.ithome.com.tw/users/20169301/ironman/7941", label: { zh: "Unity入門遊戲開發與實作（30 篇）", en: "iThome Ironman series, 30 posts (in Chinese)" } },
      tutorial: { url: "https://www.youtube.com/watch?v=j48LtUkZRjU&list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6", label: "Brackeys — Unity Beginner Tutorials" },
      // 兩款遊戲各一張封面，卡片上會左右並排
      images: [
        { src: "data/assets/projects/games/games_flappybirds_cover.jpg", caption: "Flappy Bird 3D", pos: "8% 50%" },
        { src: "data/assets/projects/games/games_cubethon_cover.png", caption: { zh: "CubeThon（方塊馬拉松）", en: "CubeThon" } }
      ],
      media: [
        {
          src: "data/assets/projects/games/flappy-bird-3d-demo.mp4", poster: "data/assets/projects/games/games_flappybirds_cover.jpg",
          caption: { zh: "Flappy Bird 3D 遊玩影片", en: "Flappy Bird 3D gameplay" }
        },
        {
          src: "data/assets/projects/games/cubethon-demo.mp4", poster: "data/assets/projects/games/games_cubethon_cover.png",
          caption: { zh: "CubeThon 遊玩影片", en: "CubeThon gameplay" }
        },
        {
          src: "data/assets/projects/games/games_flappybirds1.png",
          caption: { zh: "Flappy Bird 3D 在 Unity 編輯器中的場景。", en: "Flappy Bird 3D in the Unity editor." }
        },
        {
          src: "data/assets/projects/games/games_flappybirds2.jpg",
          caption: { zh: "Flappy Bird 3D 的結算畫面，會記錄最高分。", en: "The Flappy Bird 3D game-over screen, which keeps your best score." }
        },
        {
          src: "data/assets/projects/games/games_cubethon1.png",
          caption: { zh: "CubeThon 在 Unity 編輯器中的場景。", en: "CubeThon in the Unity editor." }
        },
        {
          src: "data/assets/projects/games/games_cubethon2.png",
          caption: { zh: "CubeThon 的終點畫面。", en: "The CubeThon finish line." }
        }
      ],
      role: {
        zh: ["以 Unity 製作 Flappy Bird 3D 與 CubeThon", "設計並撰寫遊戲介紹網站", "以 jQuery 製作網站按鈕與導覽列的滑動遮罩效果"],
        en: ["Built Flappy Bird 3D and CubeThon in Unity", "Designed and wrote the game showcase site", "Added slide-in hover overlays to the site's buttons and nav with jQuery"]
      },
      academic: {
        motivation: {
          zh: "課程要求參加 iThome 鐵人賽，我用 30 天從零學 Unity，並做出兩款遊戲。為了讓互評的同學能直接下載試玩，我自己做了這個網站，這也是我第一個有實際用途的網站。",
          en: "The course required the iThome Ironman 30-day challenge, during which I learned Unity from scratch and built two games. To let peer reviewers download and play them, I built this site — my first website with a real purpose."
        },
        method: {
          zh: "每款遊戲一個區塊：全螢幕背景、標題與 Windows 版下載按鈕，下方接操作說明截圖與遊玩影片；固定導覽列可直接跳到各遊戲，部署在 GitHub Pages。",
          en: "One section per game: a full-screen hero with title and Windows download button, followed by annotated screenshots and a gameplay video. A fixed nav jumps between games; hosted on GitHub Pages."
        },
        challenge: {
          zh: [
            "我對 Unity 完全沒有基礎，但網路上的教學大多預設觀眾已經懂一些 Unity。我先跟著一個從零開始的系列學了 C# 腳本語法，卻發現自己還是不懂 Unity 裡物件之間怎麼互動；直到換成 Brackeys 從頭講解 Unity 運作方式的教學，花十天做完 CubeThon，才真正上手，之後再跟著其他教學完成 Flappy Bird 3D。",
            "鐵人賽要求連續 30 天每天發文。我每天要花一到兩小時學新內容，再花一小時整理成文章，同時還有小考、程式競賽和實驗作業，但 30 天都沒有中斷。",
            "實作時也踩過不少坑，我都記錄在文章裡。例如在 Update() 裡每一幀施力，幀率越高的電腦方塊跑得越快，乘上 Time.deltaTime 之後速度才和幀率無關；我也模擬角色被刪除後重生，發現手動拖拉建立的腳本連結會全部失效、跳出一大堆錯誤，因此改用 FindObjectOfType 在執行時尋找 GameManager。"
          ],
          en: [
            "I started Unity from zero, but most online tutorials assume some prior knowledge. A from-scratch series taught me C# scripting syntax, yet I still didn't understand how objects in Unity interact. It finally clicked after I switched to Brackeys' tutorials, which explain how Unity works from the ground up, and spent ten days building CubeThon; I then built Flappy Bird 3D following other tutorials.",
            "The challenge required a post every day for 30 days. Each day took one to two hours of learning plus an hour of writing, alongside quizzes, programming contests and lab assignments, and I didn't miss a day.",
            "I hit plenty of pitfalls and wrote them up in the posts. Applying force in Update() every frame made the cube faster on machines with higher frame rates, until I scaled it by Time.deltaTime. I also simulated the player being deleted and respawned, saw every manually dragged script reference break with a flood of errors, and switched to finding the GameManager at runtime with FindObjectOfType."
          ]
        }
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
    // 有 id 的研究項目會變成可點的卡片，並有自己的詳細頁（欄位同專題）
    {
      id: "lifi",
      title: { zh: "LiFi 光通訊模擬：NOMA 與 SIC", en: "LiFi Simulation: NOMA with SIC" },
      context: { zh: "進行中的研究", en: "Ongoing research" },
      period: "", // 【待填】
      body: {
        zh: "用 MATLAB 建立 4 盞 LED、1 個接收器的可見光通訊模擬，依序完成通道計算、功率分配、疊加傳輸與 SIC 解碼，並比較不同功率分配下的 BER。",
        en: "A MATLAB simulation of visible light communication with four LEDs and one receiver, covering the channel, power allocation, superposed transmission and SIC decoding, and comparing BER under different power allocations."
      },
      key: { value: "0.0077", label: { zh: "30 dB 時固定功率分配的整體 BER（平均分配約 0.37）", en: "Overall BER at 30 dB with fixed power allocation (≈ 0.37 with uniform)" } },
      tech: ["MATLAB"],
      image: "data/assets/research/research_environment.png",
      notes: [
        { url: "https://hackmd.io/uReNJKYCQDaCHgA-3yuC_g", label: { zh: "LiFi Basic Knowledge：傳輸流程九步驟", en: "LiFi Basic Knowledge: the nine-step transmission chain (in Chinese)" } },
        { url: "https://hackmd.io/GxMzCZaQSi62NSOGKfi6pg?view", label: { zh: "GRPA 與 NGDPA：VLC NOMA 的功率分配", en: "GRPA & NGDPA: power allocation for VLC NOMA (in Chinese)" } }
      ],
      media: [
        {
          src: "data/assets/research/research_overall_BER_curves.png", wide: true,
          caption: { zh: "整體 BER：固定功率分配與平均分配的比較。", en: "Overall BER: fixed vs. uniform power allocation." }
        },
        {
          src: "data/assets/research/research_per-led_BER_curves.png", wide: true,
          caption: { zh: "4 盞 LED 各自的 BER。", en: "BER for each of the four LEDs." }
        }
      ],
      academic: {
        motivation: {
          zh: "LiFi 的傳輸牽涉通道模型、調變、多工、功率分配與 SIC 等許多環節。我先把整個傳輸流程拆成九個步驟整理成筆記，釐清每個名詞與公式，也讓指導老師能清楚看到流程的全貌，以及我們正在處理的是哪個部分。接著搭建 MATLAB 模擬環境，初步驗證整條傳輸流程能否跑通。",
          en: "LiFi transmission involves many pieces: the channel model, modulation, multiple access, power allocation and SIC. I first broke the whole transmission chain into nine steps and wrote them up as notes, pinning down every term and formula, so that my advisor could also see the full picture and which part we were working on. I then set up a MATLAB simulation environment to check that the whole chain works end to end."
        },
        method: {
          zh: "在 5 × 5 × 3 公尺的房間裡，天花板裝 4 盞 LED，接收器放在地面中央。先計算每盞 LED 到接收器的 LOS 通道增益（含接收視角限制），再以固定比例 0.75、0.18、0.05、0.02 分配 4 盞 LED 的功率。每盞 LED 傳送隨機位元的 BPSK 訊號，在接收端疊加並加上 AWGN，最後用 SIC 由強到弱依序解碼。SNR 從 0 到 30 dB，每個 SNR 跑 25 次、每次 1,000 個位元，並和平均分配功率的結果比較。",
          en: "In a 5 × 5 × 3 m room, four LEDs sit on the ceiling and the receiver lies at the center of the floor. The simulation computes the LOS channel gain from each LED to the receiver, including the receiver's field of view, then splits power among the four LEDs in fixed ratios of 0.75, 0.18, 0.05 and 0.02. Each LED sends BPSK symbols from random bits; the signals superpose at the receiver with AWGN added, and SIC decodes them from strongest to weakest. SNR is swept from 0 to 30 dB with 25 runs of 1,000 bits each and compared against uniform power allocation."
        },
        result: {
          zh: "平均分配時 4 層訊號的振幅相同，SIC 無法把它們分開，整體 BER 在所有 SNR 下都停在約 0.37。固定分配的整體 BER 則隨 SNR 下降，30 dB 時降到 0.0077。各盞 LED 之間的差異也很明顯：20 dB 時 4 盞 LED 的 BER 分別是 0.027、0.092、0.205、0.283，分到的功率越少，BER 越高。",
          en: "With uniform allocation the four layers have equal amplitudes, SIC cannot separate them, and the overall BER stays around 0.37 at every SNR. With fixed allocation the overall BER falls as SNR rises, reaching 0.0077 at 30 dB. The LEDs also differ sharply: at 20 dB their BERs are 0.027, 0.092, 0.205 and 0.283 — the less power an LED gets, the higher its BER."
        }
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
    // 一張卡片可以包含好幾份作業（parts），詳細頁會依序排列；
    // 網址 #ai 打開整張，#3sat、#tsp、#mnist 會直接捲到該份作業
    items: [
      {
        id: "ai",
        fresh: true,
        course: { zh: "人工智慧導論 作業一～三", en: "Intro to AI — Assignments 1–3" },
        period: "2025",
        title: { zh: "人工智慧導論：搜尋、最佳化與分類", en: "Intro to AI: Search, Optimization and Classification" },
        summary: {
          zh: "三份作業都用 C++ 從頭實作演算法，再自己設計比較實驗、分析數據：3-SAT 比較搜尋策略，TSP 改良區域搜尋，MNIST 比較三種分類器的取捨。同一門課的期末專題是上方的「AI 手寫計算機」。",
          en: "In all three assignments I implemented the algorithms from scratch in C++, then designed comparison experiments and analyzed the data: search strategies for 3-SAT, improved local search for TSP, and the trade-offs of three classifiers on MNIST. The course's final project is the AI Handwriting Calculator above."
        },
        parts: [
      {
        id: "3sat",
        label: { zh: "作業一", en: "Assignment 1" },
        title: { zh: "3-SAT：比較 DFS、Best-First 與 A* 搜尋", en: "3-SAT: Comparing DFS, Best-First and A* Search" },
        numbers: [
          { value: "28,701", label: { zh: "A* 展開節點數（D = 50）", en: "Nodes expanded by A* (D = 50)" } },
          { value: "47,302", label: { zh: "DFS 與 Best-First 展開節點數（D = 50）", en: "Nodes expanded by DFS and Best-First (D = 50)" } }
        ],
        question: {
          zh: "同一個 3-SAT 問題，不同搜尋策略的代價差在哪裡？",
          en: "On the same 3-SAT problem, where do different search strategies actually differ in cost?"
        },
        approach: {
          zh: "實作 DFS、Best-First Search 與 A*，在變數數 D = 10～50、展開節點上限為 D³ 的測資上，記錄展開節點數、記憶體用量（DFS 的遞迴深度、另外兩者的 priority queue 最大長度）與執行時間。另外做對照實驗：拿掉 DFS 決定取值順序的函式，觀察它對結果的影響。",
          en: "Implemented DFS, Best-First Search and A* and, for D = 10–50 variables with a node budget of D³, measured nodes expanded, memory (DFS recursion depth; maximum priority-queue size for the other two) and runtime. As a control experiment, I removed the function that decides DFS's value order and measured its effect."
        },
        finding: {
          zh: [
            "D = 50 時，A* 只展開 28,701 個節點，DFS 與 Best-First 都是 47,302 個；執行時間也從 D 小時 DFS 最快，變成 A* 最快（1.18 秒，DFS 2.35 秒）。拿掉決定取值順序的函式後，DFS 用完 125,000（= D³）個節點上限仍沒有找到解，可見這個函式是 DFS 能跑完的關鍵。",
            "還沒完全解釋的現象：A* 的 priority queue 反而比 Best-First 大（D = 50 時 70 對 22）。我推測是 g_cost 與 h_score 的權重不同，讓 A* 保留了更多節點。"
          ],
          en: [
            "At D = 50, A* expanded only 28,701 nodes, versus 47,302 for both DFS and Best-First. Runtime flipped too: DFS was fastest for small D, but at D = 50 A* was fastest (1.18 s vs. 2.35 s for DFS). Without the value-ordering function, DFS used up the 125,000-node budget (= D³) and still found no solution, so that function is what lets DFS finish.",
            "An open question: A*'s priority queue grew larger than Best-First's (70 vs. 22 at D = 50). My guess is that the different weights of g_cost and h_score make A* hold on to more nodes."
          ]
        },
        report: "data/assets/coursework/ai-3sat.pdf"
      },
      {
        id: "tsp",
        label: { zh: "作業二", en: "Assignment 2" },
        title: { zh: "TSP：三種區域搜尋法與改良版本", en: "TSP: Three Local Search Methods and Improved Variants" },
        numbers: [
          { value: "3.3×", label: { zh: "只把起始路徑改成 greedy，SA 的平均路徑長縮短（1000 個城市）", en: "Shorter mean tour for SA from a greedy initial tour alone (1000 cities)" } },
          { value: "≈ 1%", label: { zh: "GA+ 標準差／平均（500–1000 個城市）", en: "GA+ std / mean (500–1000 cities)" } }
        ],
        question: {
          zh: "Hill Climbing、Simulated Annealing、Genetic Algorithm 各自卡在哪裡？改良後能好多少？",
          en: "Where do Hill Climbing, Simulated Annealing and Genetic Algorithms each get stuck, and how much can improvements help?"
        },
        approach: {
          zh: "實作三種演算法的一般版與改良版，共 6 種：HC+ 多次重啟、SA+ 以 greedy 產生起始路徑、GA+ 加入 25% greedy 初始族群與菁英保留。城市數 50～1000，每組跑 10 次，比較平均路徑長、執行時間與標準差，並對 GA+ 做參數敏感度分析（tournament k、mutation rate、population size）。",
          en: "Implemented plain and improved versions of all three (6 variants): HC+ with restarts, SA+ with a greedy initial tour, and GA+ with a 25% greedy initial population plus elitism. Ran 50–1000 cities, 10 runs each, comparing mean tour length, runtime and standard deviation, plus a parameter-sensitivity study on GA+ (tournament k, mutation rate, population size)."
        },
        finding: {
          zh: [
            "起始解的品質幾乎決定了結果：1000 個城市時，只把起始路徑改成 greedy，SA 的平均路徑長就從 202,849 降到 61,304；GA 加上 greedy 初始族群與菁英保留後，也從 1,065,507 降到 61,463。200 個城市以上，SA+ 與 GA+ 的結果相差不到 1%。",
            "參數方面，mutation rate 0.1 時平均與標準差都最低，0.4 時標準差升到約 2.6 倍。k = 30 雖然平均最好，但標準差也最大，我判斷是運氣成分，因此選 k = 8～10 作為平衡點。"
          ],
          en: [
            "Initial-solution quality almost decided the outcome. At 1000 cities, switching SA to a greedy initial tour alone cut its mean tour length from 202,849 to 61,304, and adding a greedy initial population plus elitism took GA from 1,065,507 to 61,463. From 200 cities up, SA+ and GA+ ended within 1% of each other.",
            "On parameters, a mutation rate of 0.1 gave both the lowest mean and the lowest std, while at 0.4 the std rose about 2.6×. k = 30 had the best mean but also the highest std, which I judged to be luck, so I chose k = 8–10 as the balance point."
          ]
        },
        report: "data/assets/coursework/ai-tsp.pdf"
      },
      {
        id: "mnist",
        label: { zh: "作業三", en: "Assignment 3" },
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
          zh: "實作三種分類器，以 MNIST 比較準確率、macro F1、訓練與預測時間。KNN 原本要和 6 萬筆訓練資料逐一比距離，計算量約 3.2 兆次，因此我把它簡化成最近質心：每個數字只存一張平均圖像。線性分類器由 10 個一對多的二元分類器組成，並把訓練好的權重存檔，不必每次重新訓練。決策樹以 Gini impurity 選切點，先依特徵值排序再掃過所有切點，並每 4 個 pixel 取樣一次，把特徵從 28×28 降到 7×7。",
          en: "Implemented three classifiers and compared accuracy, macro F1, training and prediction time on MNIST. Plain KNN would compare every test image with all 60,000 training images — about 3.2 trillion operations — so I reduced it to a nearest-centroid classifier that keeps one mean image per digit. The linear classifier is ten one-vs-rest binary classifiers, with trained weights saved so it need not retrain on every run. The decision tree splits on Gini impurity, sweeping thresholds over pre-sorted feature values, with features downsampled from 28×28 to 7×7 by taking every 4th pixel."
        },
        finding: {
          zh: "線性分類器準確率最高（88.32%），但訓練約需 23.5 分鐘。決策樹準確率 82.96%，預測 10,000 張只要 7 ms。最近質心版的 KNN 訓練最快，但平均圖像會讓數字變模糊，準確率最低（82.03%）。想要準確率或速度，都得付出訓練時間或預測時間；三者之中我認為決策樹最平衡。",
          en: "The linear classifier was the most accurate (88.32%) but took about 23.5 minutes to train. The decision tree reached 82.96% and predicted 10,000 images in 7 ms. The nearest-centroid KNN trained fastest, but averaging blurs the digits, so it was the least accurate (82.03%). Accuracy or speed has to be paid for in training or prediction time; of the three, I found the decision tree the best balance."
        },
        report: "data/assets/coursework/ai-mnist.pdf"
      }
        ]
      }
    ],
    more: [
      {
        zh: "演算法｜N-Queens 回溯法：n = 4～13 全部求解，並記錄拜訪節點數與可行節點數；n = 13 時共 73,712 組解。",
        en: "Algorithms | N-Queens backtracking: solved n = 4–13, logging visited and promising nodes; n = 13 has 73,712 solutions."
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
