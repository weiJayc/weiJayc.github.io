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

  // 研究所版：研究計畫與研究經驗
  research: [
    // 有 id 的研究項目會變成可點的卡片，並有自己的詳細頁（欄位同專題，另外可用 sections、plan、refs、parts、readings）
    {
      id: "proposal",
      title: { zh: "研究計畫：MIMO-NOMA 可見光通訊的自適應分群", en: "Proposal: Adaptive User Grouping for MIMO-NOMA VLC" },
      // 詳細頁的大標題用計畫書上的完整題目
      fullTitle: {
        zh: "室內 MIMO-NOMA 可見光通訊之 SIC 可解碼條件導向自適應分群與功率配置",
        en: "SIC-Decodability-Driven Adaptive User Grouping and Power Allocation for Indoor MIMO-NOMA Visible Light Communication"
      },
      context: { zh: "碩士班研究計畫", en: "Master's research proposal" },
      status: { zh: "尚未驗證", en: "Not yet validated" },
      period: "",
      body: {
        zh: "人一多，NOMA 的 SIC 就解不開；分組又得把頻寬切碎。我想用 SIC 的可解碼條件，決定一組該放幾個人。",
        en: "With many users, NOMA's SIC breaks down; grouping them splits the bandwidth. I propose using the SIC decodability condition to decide how many users each group should hold."
      },
      lede: {
        zh: "現有 MIMO-NOMA 可見光通訊的研究，多半讓每顆 LED 同時服務所有使用者，人一多 SIC 就解不開；固定兩人一組雖然避開了這個問題，卻得把有限的頻寬切成很多份。這份計畫想回答：一組該放幾個人？",
        en: "Most MIMO-NOMA visible light communication work has every LED serve all users at once, and with many users SIC can no longer decode. Fixed pairs avoid that but slice the limited bandwidth into many pieces. This proposal asks: how many users should a group hold?"
      },
      note: {
        zh: "這份研究計畫是我自己為碩士班甄試構想的。目前完成的是文獻研讀與計畫撰寫；計畫中的推導、演算法與模擬都還沒有實作驗證。",
        en: "I conceived this proposal on my own for my master's application. So far I have done the literature review and written the proposal; the derivations, algorithm and simulations in it have not yet been implemented or validated."
      },
      key: { value: "63×", label: { zh: "6 人一組至少需要的功率，是單人的 63 倍（τ = 0 dB、增益相同）", en: "Minimum power for a group of six vs. one user (τ = 0 dB, equal gains)" } },
      tech: ["MATLAB"],
      images: [
        {
          src: "data/assets/research/proposal_grouping.svg",
          caption: {
            zh: "示意圖：同樣 6 位使用者的三種分法，寬度是頻寬、高度是功率，每一層是一位使用者。左：全部同組，頻寬最多，但最強的使用者只分到約 1/63 的功率；中：固定兩人一組，SIC 容易，但頻寬切成 3 份；右：本計畫要回答的問題——由 SIC 可解碼條件決定每組人數與頻寬。（功率比例是 τ = 0 dB、增益相同時的最低需求）",
            en: "Schematic: three ways to group the same six users. Width is bandwidth, height is power, and each layer is one user. Left: one group keeps the full bandwidth, but the strongest user gets only about 1/63 of the power. Middle: fixed pairs make SIC easy but split the bandwidth three ways. Right: the question this proposal asks — let the SIC decodability condition set each group's size and bandwidth. (Power shares are the minimum needed at τ = 0 dB with equal gains.)"
          }
        }
      ],
      notes: [
        { url: "https://hackmd.io/GxMzCZaQSi62NSOGKfi6pg?view", label: { zh: "GRPA 與 NGDPA：VLC NOMA 的功率分配", en: "GRPA & NGDPA: power allocation for VLC NOMA (in Chinese)" } }
      ],
      related: ["lifi", "papers"],
      // sections：標題自訂的段落；rows 是左邊有短標籤的條列，stack: true 時標籤自成一行
      sections: [
        {
          label: { zh: "動機", en: "Why" },
          text: {
            zh: [
              "可見光通訊用照明 LED 傳資料，但商用白光 LED 的調變頻寬只有數 MHz，多位使用者共用頻寬的效率因此成為瓶頸。NOMA 讓多位使用者以不同功率疊加在同一段頻寬上，接收端再以連續干擾消除（SIC）依序解碼；在多顆 LED、多顆光偵測器的 MIMO 架構下，已有 GRPA、NGDPA、NLGRPA、PGRPA 等閉合式功率配置公式。",
              "這些公式都讓每顆 LED 同時服務所有使用者。我研讀這些論文時注意到，使用者一多可能出現三個問題（我還沒有自己推導驗證，這正是 RQ1 要回答的）：PGRPA 在 10 位使用者、增益相近時，最強與最弱者的功率比可達 2⁻⁴⁵ ≈ 2.8 × 10⁻¹⁴，強使用者的訊號會被雜訊淹沒；NLGRPA 在使用者增益低於最強者約 70.7% 時，相鄰係數會大於 1，通道較好的人反而分到較多功率；而這些論文都以通道增益總和排序使用者，但光偵測器間距只有 4 cm、通道高度相關，經過迫零（ZF）後，增益總和較大的人不一定比較強。"
            ],
            en: [
              "Visible light communication sends data over lighting LEDs, but commercial white LEDs offer only a few MHz of modulation bandwidth, so sharing it among many users is the bottleneck. NOMA superposes several users on the same band at different power levels, and the receiver separates them with successive interference cancellation (SIC). For MIMO-VLC with multiple LEDs and photodiodes, closed-form power allocation schemes such as GRPA, NGDPA, NLGRPA and PGRPA already exist.",
              "All of them have every LED serve every user. Reading these papers, I noticed three problems that may appear as the number of users grows — I have not yet verified them with my own derivations, which is exactly what RQ1 sets out to do. With PGRPA, ten users with similar gains give a power ratio of 2⁻⁴⁵ ≈ 2.8 × 10⁻¹⁴ between the strongest and weakest user, burying the strong user's signal in noise. With NLGRPA, the ratio between adjacent coefficients exceeds 1 once a user's gain falls below about 70.7% of the strongest, so a better channel gets more power. And these papers order users by the sum of channel gains, but with photodiodes only 4 cm apart the channel is highly correlated, so after zero-forcing (ZF) a larger gain sum does not guarantee a stronger user."
            ]
          }
        },
        {
          label: { zh: "研究缺口", en: "The gap" },
          text: {
            zh: "一個自然的解法是分組：組內用 NOMA，組與組之間用頻率分開。但現有作法多半固定兩人一組，頻寬必須切成 N/2 份；可變的群組大小只出現在單 LED 或發射端預編碼的系統。在「每顆 LED 各自做 NOMA、接收端用 ZF 分離」的 MIMO-VLC 中，還沒有方法回答「一組該放幾個人」。這裡還多了一層單 LED 沒有的困難：同一位使用者經過 ZF 後，在不同 LED 上的強弱順序可能不同，但他只能屬於一組。",
            en: "A natural fix is to group users: NOMA within a group, separate frequency bands between groups. Existing work mostly fixes groups at two users, which cuts the bandwidth into N/2 pieces; variable group sizes appear only in single-LED or transmitter-precoded systems. For MIMO-VLC where each LED runs its own NOMA and the receiver separates streams with ZF, nothing yet answers how many users a group should hold. There is also a difficulty single-LED systems lack: after ZF, a user's strength ranking can differ from LED to LED, yet the user can belong to only one group."
          }
        },
        {
          label: { zh: "核心的取捨", en: "The trade-off" },
          text: {
            zh: "組內人數越多，滿足 SIC 所需的總功率大約以 (1 + τ)^M 的速度成長（τ 是最低 SINR 門檻，M 是組內人數）：τ = 0 dB 且增益相同時，6 人一組至少需要單人 63 倍的功率。反過來，組數越多，每組分到的頻寬越窄，要達到同樣的速率，τ 就得越高。我想以這個可解碼條件為核心，設計快速、可解釋、有保證的分群與功率配置方法。",
            en: "The more users in a group, the faster the total power needed for SIC grows — roughly as (1 + τ)^M, where τ is the minimum SINR threshold and M the group size. At τ = 0 dB with equal gains, a group of six needs at least 63 times the power of a single user. Conversely, the more groups, the narrower each group's band, so τ must rise to reach the same rate. I want to build grouping and power allocation around this decodability condition: fast, explainable and with guarantees."
          }
        },
        {
          label: { zh: "研究問題", en: "Research questions" },
          rows: [
            { k: "RQ1", v: { zh: "現有閉合式功率配置在組內人數增加時，在什麼條件下會違反功率排序、超出可用的動態範圍，或無法滿足 SIC 解碼？", en: "Under what conditions do existing closed-form allocations break power ordering, exceed the usable dynamic range, or fail SIC decoding as groups grow?" } },
            { k: "RQ2", v: { zh: "在每顆 LED 各自 NOMA、接收端 ZF 的架構下，給定最低速率、組數與殘餘 SIC 係數 ε，一組最多能容納幾位使用者？", en: "With per-LED NOMA and receiver ZF, given a minimum rate, the number of groups and a residual-SIC factor ε, how many users can one group hold at most?" } },
            { k: "RQ3", v: { zh: "各 LED 的有效增益排序不一致時，能否以約 O(N²) 的確定性演算法完成分群與組間頻寬分配，並讓最小速率接近窮舉最佳解？", en: "When effective-gain rankings differ across LEDs, can a deterministic algorithm of about O(N²) handle grouping and inter-group bandwidth allocation with a minimum rate close to the exhaustive optimum?" } },
            { k: "RQ4", v: { zh: "在不完美 SIC 與不完美 CSI 下，自適應分群和全部同組、固定兩人一組、OFDMA 相比，最小速率、總速率、公平性與運算時間各差多少？", en: "Under imperfect SIC and CSI, how does adaptive grouping compare with a single group, fixed pairs and OFDMA in minimum rate, sum rate, fairness and runtime?" } }
          ]
        },
        {
          label: { zh: "預計方法", en: "Planned method" },
          text: {
            zh: [
              "模擬沿用文獻常見的設定：5 × 5 × 3 公尺的房間，天花板上 2 × 2 或 4 × 4 顆 LED，每位使用者有多顆間距 4 cm 的光偵測器，採用 DCO-OFDM 與 Lambertian 直視通道。N 位使用者分成 G 組，每組佔一段互不重疊的子頻帶；組內每顆 LED 以 NOMA 疊加送出，接收端以 ZF 分離各 LED 的串流。",
              "先從「每個串流都要達到 SINR 門檻 τ」推導一組在每顆 LED 上至少需要的功率，再結合門檻與子頻帶寬度的關係，得到最大群組大小的設計準則。分群演算法暫稱 DAG（Decodability-Aware Grouping），分成五步：依 ZF 後的有效增益排序；對每個組數 G 以跳號方式產生強弱混合的候選分組；在每顆 LED 上檢查可行性，不可行就交換成員或拆組；先給每組達到最低速率所需的頻寬，剩下的以二分法分配；最後比較所有 G 的結果，總複雜度約 O(N²)。",
              "比較對象包括全部同組（搭配 GRPA、NGDPA、NLGRPA、PGRPA 等）、固定兩人一組（含以模擬退火分配子載波的方法）、OFDMA，以及 N ≤ 10 時的窮舉最佳解（N = 10 時約 11.6 萬種分法）。評估最小速率、總速率、Jain 公平性指標、零速率使用者比例與運算時間，並掃描殘餘 SIC 係數與 CSI 誤差。"
            ],
            en: [
              "The simulation follows settings common in the literature: a 5 × 5 × 3 m room with a 2 × 2 or 4 × 4 LED array on the ceiling, several photodiodes 4 cm apart per user, DCO-OFDM and a Lambertian line-of-sight channel. N users form G groups, each on its own non-overlapping sub-band; within a group, every LED superposes the members' signals with NOMA, and the receiver separates the LED streams with ZF.",
              "Requiring every stream to reach an SINR threshold τ gives the minimum power a group needs on each LED; combined with how τ depends on sub-band width, this yields a design rule for the maximum group size. The grouping algorithm, tentatively DAG (Decodability-Aware Grouping), has five steps: sort users by effective gain after ZF; for each group count G, deal users out in strides so every group mixes strong and weak users; check feasibility on every LED and swap members or split groups that fail; give each group the bandwidth its minimum rate needs and split the rest by bisection; finally compare all G — about O(N²) overall.",
              "Baselines are a single group (with GRPA, NGDPA, NLGRPA, PGRPA and others), fixed pairs (including simulated-annealing subcarrier allocation), OFDMA, and the exhaustive optimum for N ≤ 10 (about 116,000 groupings at N = 10). Metrics are minimum rate, sum rate, Jain's fairness index, the share of zero-rate users and runtime, swept over residual-SIC factors and CSI errors."
            ]
          }
        },
        {
          label: { zh: "預期成果", en: "Expected outcomes" },
          list: {
            zh: [
              "現有閉合式功率配置在組內人數增加時的失效條件（功率排序、動態範圍、可解碼性）",
              "MIMO-VLC 下，由 SIC 可解碼條件推導的最大群組大小準則",
              "約 O(N²) 的自適應分群演算法與具保證的組內功率配置，並量化與窮舉最佳解、模擬退火方法的差距與運算時間",
              "公開可重現的模擬程式碼"
            ],
            en: [
              "Failure conditions of existing closed-form allocations as groups grow (power ordering, dynamic range, decodability)",
              "A maximum group-size rule for MIMO-VLC derived from the SIC decodability condition",
              "An adaptive grouping algorithm of about O(N²) with guaranteed intra-group power allocation, with its gap and runtime against the exhaustive optimum and simulated annealing",
              "Open, reproducible simulation code"
            ]
          },
          after: {
            zh: "我不預設自適應分群在所有情境下都會勝出；如果結果顯示某些條件下固定兩人一組已經足夠，能說清楚「什麼條件下該幾人一組」本身也是有價值的結論。",
            en: "I don't assume adaptive grouping will win everywhere. If fixed pairs turn out to be enough under some conditions, being able to say when each group size is right is a useful result in itself."
          }
        },
        {
          label: { zh: "可能遇到的困難", en: "Risks" },
          stack: true,
          rows: [
            { k: { zh: "DAG 離最佳解太遠", en: "DAG falls far short of the optimum" }, v: { zh: "先以小規模窮舉量化差距；差距過大就加入局部交換搜尋，仍控制在多項式時間內。", en: "Quantify the gap with small exhaustive searches first; if it is too large, add local swap search while staying polynomial." } },
            { k: { zh: "各 LED 排序不一致，很多組不可行", en: "Inconsistent rankings make many groups infeasible" }, v: { zh: "改以各 LED 中最弱的有效增益排序，或允許該組在個別 LED 上改用正交傳輸。", en: "Sort by each user's weakest effective gain across LEDs, or let a group fall back to orthogonal transmission on individual LEDs." } },
            { k: { zh: "最大群組大小沒有簡單的封閉式", en: "No simple closed form for the maximum group size" }, v: { zh: "改為推導上下界或建立數值查表，再以模擬驗證。", en: "Derive upper and lower bounds or build a numerical lookup table instead, then check it by simulation." } },
            { k: { zh: "重現結果與原論文不同", en: "Reproduced results differ from the papers" }, v: { zh: "逐點比對數值、說明假設上的差異，並以一致的 SINR 模型為準。", en: "Compare values point by point, document differing assumptions and settle on one consistent SINR model." } }
          ]
        }
      ],
      // 進度規劃表：span 是 cols 的索引（含頭尾）
      plan: {
        cols: [
          { zh: "碩一上", en: "Y1 fall" }, { zh: "碩一下", en: "Y1 spring" }, { zh: "碩一暑假", en: "Y1 summer" },
          { zh: "碩二上", en: "Y2 fall" }, { zh: "碩二下", en: "Y2 spring" }
        ],
        rows: [
          { task: { zh: "修課（數位通訊、偵測與估計、凸最佳化、光通訊）", en: "Courses (digital comms, detection & estimation, convex optimization, optical comms)" }, span: [0, 1] },
          { task: { zh: "重現文獻與現有功率配置", en: "Reproduce prior work and existing power allocations" }, span: [0, 1] },
          { task: { zh: "RQ1 失效條件分析", en: "RQ1: failure-condition analysis" }, span: [0, 1] },
          { task: { zh: "RQ2 最大群組大小準則推導", en: "RQ2: maximum group-size rule" }, span: [1, 2] },
          { task: { zh: "RQ3 DAG 分群演算法與窮舉基準", en: "RQ3: DAG grouping and exhaustive baseline" }, span: [1, 3] },
          { task: { zh: "RQ4 不完美 SIC／CSI 模擬與運算時間比較", en: "RQ4: imperfect SIC/CSI simulation and runtime comparison" }, span: [2, 3] },
          { task: { zh: "延伸：接收器傾角、學習式調參（選做）", en: "Extensions: receiver tilt, learned tuning (optional)" }, span: [3, 3] },
          { task: { zh: "投稿研討會或期刊", en: "Submit to a conference or journal" }, span: [2, 3] },
          { task: { zh: "論文撰寫與口試", en: "Thesis writing and defense" }, span: [3, 4] }
        ]
      },
      refs: [
        { title: "Non-orthogonal multiple access for visible light communications", by: "H. Marshoud et al.", venue: "IEEE Photon. Technol. Lett.", year: 2016, url: "https://doi.org/10.1109/LPT.2015.2479600" },
        { title: "User pairing and power allocation strategies for downlink NOMA-based VLC systems: An overview", by: "T. Dogra, M. R. Bharti", venue: "AEU Int. J. Electron. Commun.", year: 2022, url: "https://doi.org/10.1016/j.aeue.2022.154184" },
        { title: "On the performance of MIMO-NOMA-based visible light communication systems", by: "C. Chen et al.", venue: "IEEE Photon. Technol. Lett.", year: 2018, url: "https://doi.org/10.1109/LPT.2017.2785964" },
        { title: "Enhancing power allocation efficiency of NOMA aided-MIMO downlink VLC networks", by: "H. Wang et al.", venue: "Opt. Commun.", year: 2020, url: "https://doi.org/10.1016/j.optcom.2019.124497" },
        { title: "Efficient power allocation for downlink MIMO-NOMA-based visible light communication systems", by: "G. T. Tola et al.", venue: "Cogent Eng.", year: 2024, url: "https://doi.org/10.1080/23311916.2024.2340234" },
        { title: "An improved power allocation scheme for downlink NOMA-based MIMO visible light communication systems", by: "T. Dogra, M. R. Bharti", venue: "Int. J. Commun. Syst.", year: 2025, url: "https://doi.org/10.1002/dac.6135" },
        { title: "Performance analysis of power allocation and user-pairing techniques for MIMO-NOMA in VLC systems", by: "H. S. Ibrahim et al.", venue: "Photonics", year: 2024, url: "https://doi.org/10.3390/photonics11030206" },
        { title: "On the achievable max-min user rates in multi-carrier centralized NOMA-VLC networks", by: "O. Maraqa et al.", venue: "Sensors", year: 2021, url: "https://doi.org/10.3390/s21113705" },
        { title: "QoE based joint adaptive user grouping and power allocation in indoor VLC-NOMA network", by: "H. Liu et al.", venue: "Telecommun. Syst.", year: 2026, url: "https://doi.org/10.1007/s11235-026-01428-w" },
        { title: "MU-MIMO NOMA with linear precoding techniques in indoor downlink VLC systems", by: "V. S. Rajput et al.", venue: "IEEE VTC2020-Spring", year: 2020 },
        { title: "Dynamic user clustering and power allocation for uplink and downlink non-orthogonal multiple access (NOMA) systems", by: "M. S. Ali et al.", venue: "IEEE Access", year: 2016, url: "https://doi.org/10.1109/ACCESS.2016.2604821" },
        { title: "Optimal power allocation in downlink multicarrier NOMA systems: Theory and fast algorithms", by: "S. Rezvani et al.", venue: "IEEE J. Sel. Areas Commun.", year: 2022, url: "https://arxiv.org/abs/2107.06678" },
        { title: "On the optimality of power allocation for NOMA downlinks with individual QoS constraints", by: "Z. Yang et al.", venue: "IEEE Commun. Lett.", year: 2017, url: "https://doi.org/10.1109/LCOMM.2017.2689763" },
        { title: "Deep Q-learning-based resource allocation in NOMA visible light communications", by: "A. Al Hammadi et al.", venue: "IEEE Open J. Commun. Soc.", year: 2022, url: "https://doi.org/10.1109/OJCOMS.2022.3219014" },
        { title: "Wireless infrared communications", by: "J. M. Kahn, J. R. Barry", venue: "Proc. IEEE", year: 1997, url: "https://doi.org/10.1109/5.554222" },
        { title: "Fundamental analysis for visible-light communication system using LED lights", by: "T. Komine, M. Nakagawa", venue: "IEEE Trans. Consum. Electron.", year: 2004, url: "https://doi.org/10.1109/TCE.2004.1277847" },
        { title: "NOMA for VLC downlink transmission with random receiver orientation", by: "Y. Yapici, I. Guvenc", venue: "IEEE Trans. Commun.", year: 2019, url: "https://doi.org/10.1109/TCOMM.2019.2914195" }
      ]
    },
    {
      id: "lifi",
      title: { zh: "LiFi 光通訊模擬：NOMA 與 SIC", en: "LiFi Simulation: NOMA with SIC" },
      context: { zh: "協助指導老師建立模擬環境", en: "Simulation setup for my advisor" },
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
      related: ["proposal"],
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
      id: "papers",
      title: { zh: "論文研讀：智慧通訊系統設計", en: "Paper Reading: Intelligent Communication System Design" },
      context: { zh: "指導老師開設的課程", en: "Course taught by my advisor" },
      period: "2026",
      fresh: true,
      // 期中、期末報告目前隱藏（parts 裡的 hidden: true）；要顯示時，把 hidden 拿掉，並把下面幾段文字換回註解裡的版本
      // body 原文：「一學期研讀 18 篇 LiFi 與近場通訊論文。我以全英文上台報告其中一篇，並寫了期中、期末兩份研究報告。」
      //           "18 papers on LiFi and near-field communication in one semester. I presented one of them in English and wrote a midterm and a final research report."
      body: {
        zh: "一學期研讀 18 篇 LiFi 與近場通訊論文，我負責以全英文上台報告其中一篇。",
        en: "18 papers on LiFi and near-field communication in one semester; I presented one of them entirely in English."
      },
      images: [
        { src: "data/assets/research/papers_slide04.jpg", caption: { zh: "我的英文投影片：系統運作的四個步驟。", en: "From my English slides: how the system works, in four steps." } }
      ],
      facts: [
        { k: { zh: "論文", en: "Papers" }, v: { zh: "18 篇（2021–2026 發表）", en: "18, published 2021–2026" } },
        { k: { zh: "主題", en: "Topics" }, v: { zh: "LiFi／可見光通訊 7 篇、近場通訊 10 篇、其他 1 篇", en: "LiFi/VLC 7, near-field 10, other 1" } }
      ],
      // role 原本還有「期中研究報告（第 3 篇）」「期末研究報告（第 10、12 篇）」／"Midterm report (paper 3)", "Final report (papers 10 and 12)"
      role: {
        zh: ["以全英文報告第 15 篇"],
        en: ["English presentation of paper 15"]
      },
      related: ["proposal"],
      sections: [
        {
          label: { zh: "課程形式", en: "Format" },
          // 原文在「我負責第 15 篇」後面還有「，另外也寫了期中與期末兩份研究報告」／", and I also wrote a midterm and a final research report"
          text: {
            zh: "這門課由我的指導老師開設，一學期研讀 18 篇近年的 LiFi 與近場通訊論文。每位同學負責一篇，製作投影片並以全英文上台報告；我負責第 15 篇。其中 LiFi 的論文和我的可見光通訊研究方向直接相關。",
            en: "Taught by my advisor, this course covered 18 recent papers on LiFi and near-field communication in one semester. Each student took one paper, built slides and presented it entirely in English; mine was paper 15. The LiFi papers relate directly to my visible light communication research."
          }
        }
      ],
      // 三份報告；papers 是下方 readings 的論文編號，清單裡對應的論文會標上連到這份報告的標籤
      // 網址 #paper15 會直接捲到該份報告；hidden: true 的報告不顯示（#midterm、#final 目前也打不開）
      parts: [
        {
          id: "paper15",
          label: { zh: "英文口頭報告", en: "English presentation" },
          title: { zh: "以深度學習估計 LiFi 使用者的位置與手機方向", en: "Deep-learning position and orientation estimation for LiFi" },
          papers: [15],
          question: {
            zh: "WiFi 與藍牙定位的誤差常在公尺等級。這篇論文用天花板上 25 顆 VCSEL 雷射的接收訊號，讓神經網路同時估出使用者的 3D 位置和手機的轉動角度。",
            en: "WiFi and Bluetooth positioning are often off by meters. This paper feeds the signals received from 25 ceiling-mounted VCSEL lasers to a neural network that estimates both the user's 3D position and the phone's orientation."
          },
          sections: [
            {
              label: { zh: "論文內容", en: "The paper" },
              text: {
                zh: [
                  "傳統定位方法容易陷入多個局部極小值、需要迭代求解，也常需要使用者位置或方向的先驗資訊。作者改用頻寬超過 1 GHz、光束較好控制的 VCSEL 取代 LED，在 1 × 1 × 3 公尺的房間天花板上放 5 × 5 顆（分散式與集中式兩種佈置）。接收端量測 25 個 SNR，交給三層隱藏層（100、50、20 個神經元）的 DNN，直接輸出 x、y、z 與 yaw、pitch、roll。",
                  "訓練資料共 10 萬筆，全部由模擬產生：隨機產生使用者位置與手機方向、計算 25 個 SNR，再依 Poisson 分布隨機遮擋部分光路。和基準的 CNN 相比，平均位置誤差從 14.55 cm 降到 4.51 cm，yaw 角誤差從 12.28° 降到 8.85°，運算量也少得多；遮擋率 10%、30% 時仍維持不錯的表現，到 50% 時明顯變差。"
                ],
                en: [
                  "Conventional positioning methods get stuck in local minima, need iterative solvers and often require prior knowledge of the user's position or orientation. The authors replace LEDs with VCSELs, which offer more than 1 GHz of bandwidth and better beam control, placing a 5 × 5 array on the ceiling of a 1 × 1 × 3 m room in two layouts, distributed and collocated. The receiver measures 25 SNRs, and a DNN with three hidden layers (100, 50 and 20 neurons) outputs x, y, z plus yaw, pitch and roll directly.",
                  "All 100,000 training samples are simulated: random user positions and phone orientations, the resulting 25 SNRs, and random light-path blockages drawn from a Poisson distribution. Against the baseline CNN, mean position error falls from 14.55 cm to 4.51 cm and yaw error from 12.28° to 8.85°, with far less computation. Performance holds up at 10% and 30% blockage rates but degrades clearly at 50%."
                ]
              }
            },
            {
              label: { zh: "我的報告", en: "My presentation" },
              text: {
                zh: "我把論文整理成 17 頁英文投影片，依序介紹應用情境、傳統方法的限制、系統運作流程、為什麼選 VCSEL、高斯光束的通道模型與 SNR 公式，以及 DNN 架構與實驗結果，並以全英文上台報告。論文中產生資料集的 Algorithm 1 原本是一段虛擬碼，我自己把它畫成流程圖，讓聽眾比較容易跟上每一步。同學針對這篇論文一共提出 16 個問題，我都逐一回答；問題主要圍繞四個主題：分散式與集中式佈置的差異、為什麼這麼簡單的 DNN 能贏過 CNN、遮擋對位置與方向估計的影響，以及使用者轉動或移動時定位是否穩定。",
                en: "I condensed the paper into 17 English slides — the use case, the limits of conventional methods, how the system works, why VCSELs, the Gaussian-beam channel model and SNR formula, then the DNN design and results — and presented it entirely in English. The paper gives Algorithm 1 for dataset generation as pseudocode; I drew it as a flowchart myself so the audience could follow each step. Classmates raised 16 questions on the paper and I answered every one; they clustered around four themes: distributed vs. collocated layouts, why such a simple DNN beats a CNN, how blockage affects position vs. orientation estimates, and whether positioning stays stable when the user rotates or moves."
              }
            }
          ],
          mediaLabel: { zh: "投影片節錄", en: "Selected slides" },
          media: [
            { src: "data/assets/research/papers_slide06.jpg", caption: { zh: "兩種 VCSEL 佈置：分散式與集中式。", en: "The two VCSEL layouts: distributed and collocated." } },
            { src: "data/assets/research/papers_slide09.jpg", caption: { zh: "DNN 架構：輸入 25 個 SNR，輸出 x、y、z 與 yaw、pitch、roll。", en: "The DNN: 25 SNRs in; x, y, z, yaw, pitch and roll out." } },
            { src: "data/assets/research/papers_slide10.jpg", caption: { zh: "論文中產生資料集的 Algorithm 1 原本是虛擬碼，我把它畫成流程圖。", en: "Algorithm 1 for dataset generation is pseudocode in the paper; I drew it as a flowchart." } },
            { src: "data/assets/research/papers_slide15.jpg", caption: { zh: "與基準方法比較：平均位置誤差 4.51 cm（基準 CNN 為 14.55 cm），運算量也較少。", en: "Against the baselines: 4.51 cm mean position error (14.55 cm for the baseline CNN) with less computation." } }
          ]
        },
        {
          id: "midterm",
          hidden: true, // 內容還沒有十足把握，先不顯示
          label: { zh: "期中研究報告", en: "Midterm report" },
          title: { zh: "近場多使用者 MIMO 的波束聚焦", en: "Beam focusing for near-field multiuser MIMO" },
          papers: [3],
          question: {
            zh: "遠場的平面波只能分辨角度。站在同一個角度上的兩位使用者，能不能靠「距離不同」分開？",
            en: "Far-field plane waves resolve only angle. Can two users at the same angle be told apart by their distance?"
          },
          sections: [
            {
              label: { zh: "報告內容", en: "What I covered" },
              text: {
                zh: [
                  "我先從頻率與天線尺寸說明近場為什麼會變成常態：近場與遠場的界線是 2D²/λ，在 28 GHz 使用半公尺的天線時，近場範圍就延伸到約 47 公尺外。在近場內，電磁波是帶有距離資訊的球面波，基地台因此能在同一個角度、不同的距離上各自形成焦點。",
                  "接著整理論文對三種天線架構的訊號模型與演算法：全數位架構以 WMMSE 與交替最佳化求解，作為效能基準；混合式架構的移相器只能改相位，以黎曼共軛梯度去逼近全數位的解；動態超穎表面天線（DMA）受洛倫茲限制，先放寬限制求解再投影回去。模擬中，單一使用者時 DMA 因為元件間距可以小到 λ/5、能塞進更多元件而表現最好；多使用者時則是全數位較好；混合式在使用者超過 RF chain 數量的一半（8 人）後，總速率反而下降。"
                ],
                en: [
                  "I began with why the near field is becoming the norm: the near/far boundary is 2D²/λ, so a half-meter antenna at 28 GHz has a near field reaching about 47 m. Inside it, waves are spherical and carry distance information, letting the base station focus beams at different distances along the same angle.",
                  "I then summarized the signal models and algorithms for three antenna architectures. Fully digital arrays are solved with WMMSE and alternating optimization as the performance benchmark; hybrid arrays, whose phase shifters can only change phase, use Riemannian conjugate gradient to approximate the fully digital solution; dynamic metasurface antennas (DMAs), bound by the Lorentzian constraint, relax it, solve, then project back. In simulation, DMAs did best with a single user because their element spacing can shrink to λ/5 and fit more elements; fully digital did best with multiple users; and hybrid arrays lost sum rate once users exceeded half the number of RF chains (8 users)."
                ]
              }
            },
            {
              label: { zh: "我的觀察", en: "My observation" },
              text: {
                zh: "論文說遠場波束會讓較遠的使用者幾乎沒有速率。我發現這來自模擬的設定：目標是最大化總速率，而且只靠空間多工。兩人角度相同、空間上分不開時，最佳解就是把功率幾乎全給通道較好的那位。實際的 4G、5G 網路會改用分時或分頻，讓每個人都有基本速率。所以波束聚焦真正的價值，不是「讓遠的人有訊號」，而是讓兩人在同一時間、同一頻段都能高速傳輸，不必再切分資源。",
                en: "The paper says far-field beams leave the farther user with almost no rate. I traced this to the simulation setup: the objective is maximum sum rate using spatial multiplexing alone. When two users share an angle and cannot be separated in space, the optimum is to give nearly all the power to the user with the better channel. Real 4G and 5G networks would fall back on time or frequency division so everyone gets a baseline rate. So the real value of beam focusing is not giving the far user a signal at all, but letting both users run at high rates in the same time slot and band without splitting resources."
              }
            }
          ]
        },
        {
          id: "final",
          hidden: true, // 內容還沒有十足把握，先不顯示
          label: { zh: "期末研究報告", en: "Final report" },
          title: { zh: "近場無線充電：把感測輔助的能量聚焦搬到 DMA 上", en: "Near-field wireless charging: moving sensing-assisted focusing onto DMAs" },
          papers: [10, 12],
          question: {
            zh: "第 10 篇用雷達感測縮短近場無線充電前的定位時間，第 12 篇用 DMA 降低超大型天線的耗電與成本。兩者能直接合併嗎？",
            en: "Paper 10 uses radar sensing to cut the time spent locating devices before near-field wireless charging; paper 12 uses DMAs to cut the power and cost of extremely large arrays. Can the two simply be combined?"
          },
          sections: [
            {
              label: { zh: "三個衝突", en: "Three conflicts" },
              text: {
                zh: "我原本想把第 10 篇的感測演算法直接用在第 12 篇的 DMA 硬體上，同時省時間又省電。但逐條比對兩篇的公式後，我發現若不重新推導就直接合併，系統會在三個地方出錯：",
                en: "I first wanted to run paper 10's sensing algorithm directly on paper 12's DMA hardware, saving both time and power. Comparing the two papers' formulas line by line, I found that combining them without re-deriving would break the system in three places:"
              },
              stack: true,
              rows: [
                {
                  k: { zh: "硬體降維，可視區域演算法無法運作", en: "Dimensionality loss breaks visibility-region detection" },
                  v: {
                    zh: "第 10 篇的全數位天線每顆都有獨立的 RF chain，能收到 N × 1（例如 256 維）的完整回波，再用滑動視窗找出未被遮蔽的可視區域（VR）。DMA 為了省電只有少數 RF chain（例如 16 條），回波在微帶線上就已經疊加，只剩 N_d × 1 的訊號，VR 演算法需要的 256 個天線資料拿不到。",
                    en: "Paper 10's fully digital array gives every antenna its own RF chain, so it receives the full N × 1 echo (e.g. 256 entries) and slides a window over it to find the unblocked visibility region (VR). A DMA saves power with only a few RF chains (e.g. 16); echoes already add up along each microstrip, leaving an N_d × 1 signal, so the 256 per-antenna values the VR algorithm needs are not available."
                  }
                },
                {
                  k: { zh: "雷達回波模型不符", en: "Mismatched radar echo model" },
                  v: {
                    zh: "第 10 篇的回波模型假設訊號只經過自由空間，所有延遲與相位差都來自裝置的位置。但在 DMA 中，訊號還會經過微帶線內部的傳播延遲與元件響應；直接套用會把硬體內部的延遲誤認成裝置的距離，算出的 3D 座標偏掉，能量波束也就打不到裝置。",
                    en: "Paper 10's echo model assumes free-space propagation only, attributing every delay and phase difference to the device's position. In a DMA the signal also passes through microstrip propagation delays and element responses; applied as is, the algorithm would mistake that internal delay for distance, the 3D estimate would drift, and the energy beam would miss the device."
                  }
                },
                {
                  k: { zh: "最佳感測時間會算錯", en: "Wrong sensing-time budget" },
                  v: {
                    zh: "第 10 篇以 Cramér–Rao 下界推算要掃描多久才夠準，前提是天線的振幅與相位可以自由調整；DMA 受洛倫茲限制，振幅與相位互相綁定。沿用原本的下界會過度樂觀，分配的感測時間太短，導致定位失敗。",
                    en: "Paper 10 uses the Cramér–Rao bound to decide how long to scan, assuming antenna amplitude and phase can be set freely. A DMA's Lorentzian constraint ties amplitude and phase together, so the original bound is too optimistic: the sensing time it allots is too short and localization fails."
                  }
                }
              ]
            },
            {
              label: { zh: "我提出的方向", en: "What I proposed" },
              text: {
                zh: "針對前兩個衝突，我提出兩個方向：一是在極短時間內輪流只開啟部分元件，讓 RF chain 每次收到不互相疊加的回波，湊出完整的天線資料，讓滑動視窗演算法能運作；二是把 DMA 微帶線的傳播矩陣與元件權重放進雷達回波模型，改寫成包含硬體影響的雙向通道。這兩個方法我都還無法證明或驗證，可行性與運算複雜度仍是未知數。",
                en: "For the first two conflicts I proposed two directions: briefly switching on only some elements at a time, so each RF chain receives echoes that are not summed together and the full per-antenna data can be pieced together for the sliding-window algorithm; and rewriting the radar echo model as a two-way channel that includes the DMA's microstrip propagation matrix and element weights. I could not yet prove or verify either; feasibility and complexity remain open."
              }
            }
          ]
        }
      ],
      // 課程的 18 篇論文，依主題分組；n 是課程上的編號
      readings: [
        {
          topic: { zh: "LiFi／可見光通訊", en: "LiFi / visible light communication" },
          papers: [
            { n: 2, title: "Fronthaul Synchronization Requirements for Distributed MIMO in LiFi Systems", by: "A. Ebmeyer et al.", venue: "IEEE WCNC", year: 2024, url: "https://doi.org/10.1109/WCNC57260.2024.10571141" },
            { n: 4, title: "Efficient Service Differentiation and Energy Management in Hybrid WiFi/LiFi Networks", by: "A. Ihsan et al.", venue: "IEEE Trans. Green Commun. Netw.", year: 2026, url: "https://doi.org/10.1109/TGCN.2025.3624594" },
            { n: 6, title: "Energy and Spectral Efficiency of Multi-Tier LiFi Networks", by: "A. B. Ozyurt et al.", venue: "IEEE WCNC", year: 2023, url: "https://doi.org/10.1109/WCNC55385.2023.10118728" },
            { n: 8, title: "Coherent LiFi System with Spatial Multiplexing", by: "Y. Tan, H. Haas", venue: "IEEE Trans. Commun.", year: 2021, url: "https://doi.org/10.1109/TCOMM.2021.3074216" },
            { n: 15, title: "Joint Position and Orientation Estimation in VCSEL-Based LiFi Networks: A Deep Learning Approach", by: "R. Ahmad et al.", venue: "IEEE GLOBECOM", year: 2023, url: "https://doi.org/10.1109/GLOBECOM54140.2023.10436886" },
            { n: 17, title: "Enhancing the Performance of LiFi Communication with OSTBC, QAM, and OFDM: High-Capacity, Low-Complexity Transceiver Design", by: "M. G. Al-Hamiri, H. J. Abd", venue: "Results in Optics", year: 2024, url: "https://doi.org/10.1016/j.rio.2024.100675" },
            { n: 18, title: "Spatial and Wavelength Division Joint Multiplexing System Design for MIMO-OFDM Visible Light Communications", by: "C. Chen et al.", venue: "IEEE Access", year: 2024, url: "https://doi.org/10.1109/ACCESS.2024.3439407" }
          ]
        },
        {
          topic: { zh: "近場通訊", en: "Near-field communication" },
          papers: [
            { n: 1, title: "Beam-Focusing for Near-Field ISAC Systems", by: "P. Sun et al.", venue: "IEEE SPAWC", year: 2024, url: "https://doi.org/10.1109/SPAWC60668.2024.10694020" },
            { n: 3, title: "Beam Focusing for Near-Field Multiuser MIMO Communications", by: "H. Zhang et al.", venue: "IEEE Trans. Wireless Commun.", year: 2022, url: "https://doi.org/10.1109/TWC.2022.3158894" },
            { n: 5, title: "Near-Field Integrated Sensing and Communication: Performance Analysis and Beamforming Design", by: "K. Qu et al.", venue: "IEEE Open J. Commun. Soc.", year: 2024, url: "https://doi.org/10.1109/OJCOMS.2024.3470844" },
            { n: 7, title: "Near-Field Rainbow: Wideband Beam Training for XL-MIMO", by: "M. Cui et al.", venue: "IEEE Trans. Wireless Commun.", year: 2023, url: "https://doi.org/10.1109/TWC.2022.3222198" },
            { n: 9, title: "Near-Field Wideband Beam Training Based on Distance-Dependent Beam Split", by: "T. Zheng et al.", venue: "IEEE Trans. Wireless Commun.", year: 2025, url: "https://doi.org/10.1109/TWC.2024.3507795" },
            { n: 10, title: "Sensing-Assisted Near-Field Energy Beam Focusing with ELAA over Non-Stationary Channels", by: "L. Zhang et al.", venue: "arXiv", year: 2024, url: "https://arxiv.org/abs/2410.12579" },
            { n: 11, title: "Beam Squint Assisted Joint Angle-Distance Localization for Near-Field Communications", by: "A. Zhang et al.", venue: "arXiv", year: 2025, url: "https://arxiv.org/abs/2509.14850" },
            { n: 12, title: "Near-Field Beam Focusing for Wireless Power Transfer with Dynamic Metasurface Antennas", by: "H. Zhang et al.", venue: "IEEE Internet Things J.", year: 2025, url: "https://doi.org/10.1109/JIOT.2025.3555113" },
            { n: 13, title: "Hybrid Near-Field and Far-Field XL-MIMO: How Many Users Can Be Supported?", by: "Y. Zhang et al.", venue: "IEEE Commun. Lett.", year: 2024, url: "https://doi.org/10.1109/LCOMM.2024.3443529" },
            { n: 14, title: "AN-Aided Secure Beamforming for ELAA-SWIPT in Mixed Near- and Far-Field", by: "Y. Yi et al.", venue: "arXiv", year: 2025, url: "https://arxiv.org/abs/2509.00331" }
          ]
        },
        {
          topic: { zh: "其他：深度學習通道估計", en: "Other: deep-learning channel estimation" },
          papers: [
            { n: 16, title: "Performance Enhancement of Massive MIMO Using Deep Learning-Based Channel Estimation", by: "H. M. N. Helmy et al.", venue: "IOP Conf. Ser.: Mater. Sci. Eng.", year: 2021, url: "https://doi.org/10.1088/1757-899X/1051/1/012029" }
          ]
        }
      ]
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
