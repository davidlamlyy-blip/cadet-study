// RT & Aviation English —— 來源：Airspeaks、ENZO ATC Phraseology／Flight Study Guide／Mass briefing、AELP、Basic Aeronautical Knowledge、ATP Test Prep
(function(){
const NS="http://www.w3.org/2000/svg";
function E(n,a,p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
function tx(p,x,y,s,o){o=o||{};const t=E("text",{x:x,y:y,"font-size":o.sz||14,fill:o.fill||"#e2e8f0","text-anchor":o.a||"middle","font-weight":o.w||400},p);t.textContent=s;return t}
function bx(p,x,y,w,h,fill,stroke,dash){const a={x:x,y:y,width:w,height:h,rx:8,fill:fill,stroke:stroke||"none","stroke-width":2};if(dash)a["stroke-dasharray"]="5 4";return E("rect",a,p)}
function clr(g){while(g.firstChild)g.removeChild(g.firstChild)}
function wrap(s,n){const w=String(s).split(" "),L=[];let c="";w.forEach(x=>{if((c+" "+x).trim().length>n){L.push(c);c=x}else c=(c+" "+x).trim()});if(c)L.push(c);return L}
function lines(p,x,y,s,n,o){o=o||{};wrap(s,n).forEach((l,i)=>tx(p,x,y+i*(o.lh||18),l,o))}
const C=(topic,q,a,zh,e,st)=>({e:e||"🎧",q:q,a:a,zh:zh,topic:topic,st:st||"ok"});

Cadet.add({
  key:"rt", name:"RT & Aviation English", emoji:"🎧", color:"#f472b6",
  src:"Ebook Airspeaks · ENZO ATC Phraseology／Flight Study Guide 10-RADIOS／Mass briefing · AELP English · Basic Aeronautical Knowledge ch2 · ATP Test Prep",
  topics:[
  // ===== Basics =====
  {id:"rt.why",g:"RT Basics",t:"Why Standard RT",d:"RT 係半人工語言：短、準、冇歧義，噪音大都聽得明。",pts:["ICAO 英文為國際標準","短 = 唔阻住 frequency","Noise / 同時講 = 風險","人會『聽你預期嘅嘢』"],rel:["rt.expect","rt.ptt"],src:"Airspeaks Foreword p.viii-x; BAK ch2 p.58",check:false},
  {id:"rt.ptt",g:"RT Basics",t:"Transmission Technique",d:"講之前先聽、諗好內容；撳 PTT 後先開口，講完先放。",pts:["先 listen out，唔好插嘴","Mic 近嘴唇，距離唔好變","慢少少、正常音量","數字前後停一停","唔好 er/um、唔好閒聊"],rel:["rt.numrules","rt.priority"],src:"BAK p.42 'Radio: What it is'",check:false},
  {id:"rt.priority",g:"RT Basics",t:"Aviate–Navigate–Communicate",d:"緊急時先控制飛機，之後先 call。Mayday 優先過其他。",pts:["Aviate > Navigate > Communicate","Mayday > Pan-Pan > Security","Mayday 可以打斷低優先","早 call 好過遲 call"],rel:["rt.mayday","rt.panpan"],src:"BAK p.50 Emergency radio procedures",check:false},
  {id:"rt.ack",g:"Standard Words",t:"Reply Words (Roger/Wilco/Affirm)",d:"回應用字意思唔同：Roger 只係『收到』，唔等於同意或 readback。",pts:["Roger = 收到全部","Wilco = 明白，會照做","Affirm = Yes","Negative = No／唔准／唔啱","Standby = 等我 call 你"],rel:["rt.roger_trap","rt.readback"],src:"Airspeaks Standard words p.xix; BAK Table 2-7",check:false},
  {id:"rt.clr",g:"Standard Words",t:"Authority Words (Cleared/Approved)",d:"Cleared = 有條件批准；Approved = 批准你提出嘅行動。",pts:["Cleared = 按條件執行","Approved = 批准你嘅建議","Cancel = 取消先前 clearance","Recleared = 新取代舊","Request = 我想要／想知"],rel:["rt.lineup","rt.landing"],src:"Airspeaks p.xix; BAK Table 2-7",check:false},
  {id:"rt.fix",g:"Standard Words",t:"Repair Words (Say again/Confirm/Verify)",d:"聽唔清或講錯，用標準字修正，唔好估。",pts:["Say again = 重複","Confirm = 我聽啱未？","Verify = 同 originator 核實","Correction = 我講錯，正確係…","Disregard = 當冇發過","Words twice = 每句講兩次"],rel:["rt.ask","rt.wordstwice"],src:"Airspeaks p.xix; ENZO ATC Phraseology",check:false},
  {id:"rt.wordstwice",g:"Standard Words",t:"Words Twice / Speak Slower",d:"通訊困難（噪音／語言）時，要求每個字講兩次。",pts:["Words twice：請求或通知","Speak slower：降低語速","唔係一般 Say again","語言障礙都會用"],rel:["rt.fix","rt.noise"],src:"ENZO ATC Phraseology 'WORDS TWICE'; Airspeaks p.xix",check:false},
  {id:"rt.overout",g:"Standard Words",t:"Break / Over / Out",d:"Break 分隔訊息；Over／Out 喺 VHF 通常唔用（按 ICAO 教材）。",pts:["Break = 同一訊息內分段","Break Break = 分隔唔同飛機","Over = 等你回覆","Out = 完，唔等回覆","VHF 一般唔用 Over/Out"],rel:["rt.ack"],src:"Airspeaks p.xix; BAK Table 2-7",check:true},
  {id:"rt.readability",g:"Standard Words",t:"Readability Scale",d:"How do you read? 答 1–5 級嘅訊號質素。",pts:["1 Unreadable","2 Readable now and then","3 Readable with difficulty","4 Readable","5 Perfectly readable"],rel:["rt.noise"],src:"BAK Table 2-7; Airspeaks p.xx",check:false},
  {id:"rt.readback",g:"Readback",t:"Readback",d:"重複指令確認收到同明白；錯咗 controller 即刻更正。",pts:["Readback = 安全網","要包括 callsign","數字係重點：逐位讀","唔確定就 Say again"],rel:["rt.readback_items","rt.roger_trap"],src:"BAK p.35; ATP 9045; ENZO Study Guide",check:false},
  {id:"rt.readback_items",g:"Readback",t:"What to Read Back",d:"邊啲要 readback 視乎體系：FAA 重點係 altitude／vector。",pts:["FAA：altitude、restriction、vector","AU 教材：squawk code 要 readback","Parafield：clearance 要完整讀返","『Report…』類唔使 readback","Runway、frequency 通常都讀"],rel:["rt.readback"],src:"ATP 9045 (FAA AIM); BAK p.49; ENZO Study Guide 10",check:true},
  {id:"rt.roger_trap",g:"Readback",t:"Roger ≠ Readback",d:"需要 readback 或 Yes/No 嘅問題，唔可以淨係答 Roger。",pts:["Hold short → 要讀返","Squawk code → 要讀返","Roger 只確認『聽到』","Affirm／Negative 答問題"],rel:["rt.ack","rt.readback"],src:"Airspeaks p.xix 'Roger' note; BAK Table 2-7",check:false},
  {id:"rt.callsign",g:"Call Structure",t:"Callsign Usage",d:"首次聯絡：電台名先、callsign 後；之後 callsign 擺前。",pts:["首次：Station + Callsign","其後：Callsign 擺最前","收尾：Callsign 擺最後","AU 通常講最後三個字母","可加機型：Diamond Star NBJ"],rel:["rt.struct","rt.phonetic"],src:"Airspeaks p.83 Notes; BAK p.43; ENZO Mass briefing 01",check:false},
  // ===== Phonetic & Numbers =====
  {id:"rt.phonetic",g:"Phonetic & Numbers",t:"Phonetic Alphabet",d:"用 Alfa、Bravo…拼字母，重音位要啱（例如 no-VEM-ber）。",pts:["Callsign 用 phonetic 讀","拼地名／難字都用","VH-ABC → Alfa Bravo Charlie","重音：no-VEM-ber、key-BECK","練習：讀車牌"],rel:["rt.callsign","rt.confuse_sound"],src:"BAK Table 2-3, 2-4 p.43",check:false},
  {id:"rt.digits",g:"Phonetic & Numbers",t:"Digit Pronunciation",d:"數字有特別讀法，尤其 5 同 9 要分清。",pts:["0 ZE-RO · 1 WUN · 2 TOO","3 TREE · 4 FOW-er","5 FIFE · 6 SIX","7 SEV-en · 8 AIT · 9 NIN-er","Decimal = DAY-SEE-MAL"],rel:["rt.confuse_num","rt.numrules"],src:"BAK Table 2-5 p.44 (書寫 FOUR；ICAO 讀 FOW-er)",check:true},
  {id:"rt.numrules",g:"Phonetic & Numbers",t:"Number Transmission Rules",d:"一般逐位讀；成百成千可以用 hundred／thousand。",pts:["10 → WUN ZE-RO","236 → TOO TREE SIX","500 → FIFE HUN-dred","7,500 → SEV-en TOU-SAND FIFE HUN-dred","數字前後停一停"],rel:["rt.digits","rt.units"],src:"BAK p.45 'Transmission of numbers'",check:false},
  {id:"rt.freq",g:"Phonetic & Numbers",t:"Frequencies",d:"每位數字逐個讀，細數點讀 DAY-SEE-MAL。",pts:["118.3 → WUN WUN AIT DAY-SEE-MAL TREE","Parafield ATIS 120.9 (ENZO)","121.5 = 國際緊急頻率","Frequency change 要 readback"],rel:["rt.freqchange","rt.digits"],src:"BAK p.44; ENZO Mass briefing 01; BAK p.51",check:false},
  {id:"rt.time",g:"Phonetic & Numbers",t:"Zulu Time",d:"國際用 UTC (Zulu)；本地通訊通常只講分鐘。",pts:["24 小時制","0830Z → ZE-RO AIT TREE ZE-RO","本地：講分鐘就夠","UTC = EST − 10 小時","中部時區差 30 分鐘 (CST −9:30)"],rel:["rt.numrules"],src:"BAK p.45-46",check:false},
  {id:"rt.units",g:"Phonetic & Numbers",t:"Wind, QNH, Oktas",d:"ATIS／clearance 常見單位同讀法。",pts:["Wind：方向 + knots","QNH 1023 → one zero two three","Cloud 用 oktas（八分一）","5/8 → FIFE OK-tas","Temp、dew point 分開講"],rel:["rt.atis","rt.numrules"],src:"Airspeaks p.3-6; BAK p.45",check:false},
  // ===== Call Structure =====
  {id:"rt.struct",g:"Call Structure",t:"Who / Where / What",d:"每個 call 都係：叫邊個、我係邊個、喺邊／狀態、要咩。",pts:["WHO you call（電台名）","WHO you are（callsign）","WHERE／state（位置、高度、ATIS）","WHAT you want（request／intention）","短、順序固定"],rel:["rt.firstcontact","rt.callsign"],src:"Airspeaks Typical exchanges; ENZO Mass briefing 01 slides 16-21",check:false},
  {id:"rt.firstcontact",g:"Call Structure",t:"Initial Contact Examples",d:"ENZO 例：taxi、ready、inbound 都跟同一骨架。",pts:["Taxi：Ground, NBJ, Apron, info D, request taxi","Ready：Tower, NBJ, Ready runway 21R","Inbound：Tower, NBJ, Outer Harbour, 1500, inbound"],rel:["rt.struct","rt.parafield"],src:"ENZO Mass briefing 01 slides 16-21; Study Guide 10",check:false},
  {id:"rt.instr",g:"ATC Instructions",t:"Common ATC Instructions",d:"最常聽到嘅指令，要即刻明同讀返。",pts:["Hold short／Cross runway","Climb and maintain／Descend and maintain","Turn left/right heading","Contact Tower／Approach／Departure","Squawk · Report position"],rel:["rt.readback","rt.holdwords"],src:"ENZO ATC Phraseology (Common ATC Instructions)",check:false},
  {id:"rt.unusual",g:"ATC Instructions",t:"Less Common Instructions",d:"少見但會考嘅指令：option、expedite、orbit、vectors。",pts:["Cleared for the option","Expedite · Orbit left/right","Say intentions · Unable","Expect vectors · Resume own navigation","Radar contact lost"],rel:["rt.instr"],src:"ENZO ATC Phraseology (Unusual ATC Instructions)",check:false},
  {id:"rt.holdwords",g:"ATC Instructions",t:"Hold Short / Line Up / Hold Position",d:"三個唔同意思，揪錯會入錯 runway。",pts:["Hold short = 喺指定點前停","Line up and wait = 入 runway 等","Hold position = 原地唔好郁","Cleared for take-off 先可以起飛","Behind landing traffic, line up behind"],rel:["rt.lineup","rt.takeoff"],src:"ENZO ATC Phraseology 'At the Hold Point'; Airspeaks 1.6",check:false},
  // ===== Flight phases =====
  {id:"rt.atis",g:"Flight Phases",t:"ATIS",d:"開車前先聽 ATIS；順序固定，之後要報 info 字母。",pts:["Info 字母、runway、wind","Visibility、cloud、temp/dew point","QNH、trend (no sig)","首次 call 報『received information D』","Parafield ATIS 120.9 (ENZO)"],rel:["rt.units","rt.aelpatis"],src:"Airspeaks 1.1; ENZO Mass briefing 01 slide 15",check:false},
  {id:"rt.routeclr",g:"Flight Phases",t:"IFR Route Clearance",d:"Controller 一次過讀長 clearance，pilot 完整 readback。",pts:["Ready to copy → 寫低","Cleared to 目的地 via route／SID","Level、frequency、squawk","逐項 readback","Controller：That is correct"],rel:["rt.readback","rt.xpdr"],src:"Airspeaks 1.2 p.10-12",check:false},
  {id:"rt.ctaclr",g:"Flight Phases",t:"Airways Clearance (Class C)",d:"入 controlled airspace 前要 clearance；入面所有改動都要批。",pts:["喺邊界先要 code 同 clearance","Squawk 即刻設置","Request → readback 或 Say again","唔想入：cancel clearance request","出空域：radar services terminated"],rel:["rt.xpdr","rt.freqchange"],src:"ENZO ATC Phraseology (airways clearance)",check:false},
  {id:"rt.startup",g:"Flight Phases",t:"Start-up & Push-back",d:"報 stand、ATIS、目的地；ATC 批或叫你 stand by。",pts:["Ground, callsign, stand, info, request start-up","Start-up approved → Starting up","Delay 有原因同時間","Push-back：request from stand ___","Holding position 就停"],rel:["rt.struct","rt.atis"],src:"Airspeaks 1.3, 1.4 p.14-27",check:false},
  {id:"rt.taxi",g:"Flight Phases",t:"Taxi Instructions",d:"Taxi 指令包括 route、holding point，同讓路。",pts:["Taxi via ___ to holding point ___","第一／第二個轉彎、左／右","Give way to ___ → Traffic in sight","要 readback route","唔肯定就 Say again"],rel:["rt.runwaycross","rt.readback"],src:"Airspeaks 1.5 p.29-40; ENZO Mass briefing 01 slides 16-19",check:false},
  {id:"rt.runwaycross",g:"Flight Phases",t:"Hold Points & Runway Crossing",d:"去到 holding point 要 hold short，除非 ATC 批你 cross。",pts:["Approaching holding point ___","Request cross runway ___","Cross undershoot 都要批","Run-up bay 完先 request further taxi"],rel:["rt.taxi","rt.holdwords"],src:"Airspeaks 1.5.2; ENZO Mass briefing 01 slide 18-19",check:false},
  {id:"rt.lineup",g:"Flight Phases",t:"Line-up",d:"Line up and wait 只係入 runway，未可以起飛。",pts:["Ready at holding point ___","Line up and wait → Lining up","Traffic on final：report in sight","Behind the landing ___ line up behind","Hold position = 唔入"],rel:["rt.holdwords","rt.takeoff"],src:"Airspeaks 1.6; ENZO ATC Phraseology",check:false},
  {id:"rt.takeoff",g:"Flight Phases",t:"Take-off Clearance",d:"Cleared for take-off 先起飛；readback runway；Parafield 一分鐘內要走。",pts:["Ready → Cleared for take-off, wind","Readback：Runway __ cleared for take-off","Traffic in sight 就答","Parafield：一分鐘內開始起飛","ATC 可以叫你 stop／vacate"],rel:["rt.lineup","rt.clr"],src:"Airspeaks 2.2 p.66; ENZO Study Guide 10",check:false},
  {id:"rt.depreport",g:"Flight Phases",t:"Departure & Climb Calls",d:"離場後按指示報位；climb 要 readback level。",pts:["TTA：Turn, Track, Altitude","Parafield 唔需要 departure report","Report reaching level","Further climb → readback","唔批就唔可以自己轉"],rel:["rt.takeoff","rt.freqchange"],src:"ENZO Study Guide 10; Airspeaks 2.3-2.5",check:false},
  {id:"rt.freqchange",g:"Flight Phases",t:"Frequency Change",d:"Contact ___ goodbye：readback frequency，轉頻後先 call。",pts:["Contact 128.6 → 讀返 frequency","轉頻前唔好 call 新台","新頻：Station + Callsign + 情況","Monitor = 聽，但唔使 call"],rel:["rt.freq","rt.ctaclr"],src:"Airspeaks 2.4 p.82-84; ENZO ATC Phraseology",check:false},
  {id:"rt.posrep",g:"Flight Phases",t:"Position Reports",d:"報：邊個 point、時間、高度、下個 point 同 ETA。",pts:["Callsign + point + time","Flight level／altitude","Estimating next at ___","Controller：Next report at ___","按 Wilco／Roger 回覆"],rel:["rt.struct","rt.numrules"],src:"Airspeaks 3.2 p.116-119",check:false},
  {id:"rt.traffic",g:"Flight Phases",t:"Traffic Information",d:"Traffic 用鐘點位置、距離、方向報告；你要 in sight 或 negative contact。",pts:["10 o'clock, 5 miles, crossing","Traffic in sight / Negative contact","Request vectors","Clear of traffic, resume own navigation","沒見到要講，唔好扮"],rel:["rt.ask","rt.instr"],src:"Airspeaks 3.3 p.122-126; ENZO Mass briefing 07",check:false},
  {id:"rt.descent",g:"Flight Phases",t:"Descent",d:"Leaving level, descending to level：逐步 readback，被問先報 passing。",pts:["Squawk ident → radar contact","Descend to ___","Leaving FL___ descending to ___","Report passing ___","Pressurisation 問題要講明"],rel:["rt.approach","rt.readback"],src:"Airspeaks 3.4 p.130-135",check:false},
  {id:"rt.approach",g:"Flight Phases",t:"Approach",d:"報 flight level 同 ATIS，收 squawk、速度同 approach 類型。",pts:["Station, callsign, level, info","Expect ILS runway __","Reduce speed to ___","Report established","Contact Tower ___"],rel:["rt.landing","rt.atis"],src:"Airspeaks 4.2 p.156-161",check:false},
  {id:"rt.landing",g:"Flight Phases",t:"Landing Clearance",d:"Cleared to land 先着陸；Roll through = 跑到尾先出。",pts:["Cleared to land runway __","Readback runway","Roll through approved","Cleared for the option = 多種選擇","Traffic ahead？Number 2"],rel:["rt.goaround","rt.clr"],src:"Airspeaks 4.3; ENZO ATC Phraseology",check:false},
  {id:"rt.goaround",g:"Flight Phases",t:"Go-around Call",d:"Go around 要即刻通知，有人喺 runway 就更加要。",pts:["Callsign, going around","ATC 亦可以叫 Go around","之後跟 ATC 新指示","Circuit 內：向 circuit traffic 講"],rel:["rt.landing","rt.circuit"],src:"ENZO Mass briefing 07 (Go-around radio call)",check:false},
  {id:"rt.afterland",g:"Flight Phases",t:"After Landing",d:"Runway vacated 先報；Parafield 視乎有冇 traffic 報 clear。",pts:["Runway vacated","Taxi to stand ___","Contact Ground ___","冇其他 traffic：clear of all runways 就夠","有 traffic：clear duty runway"],rel:["rt.freqchange","rt.parafield"],src:"Airspeaks 4.4 p.175; ENZO Study Guide 10 'CLEAR ALL RUNWAYS'",check:false},
  {id:"rt.circuit",g:"Flight Phases",t:"Circuit Calls (YPPF)",d:"Downwind 報 touch and go／full stop，Tower 提供 traffic。",pts:["Callsign downwind, touch and go","Callsign downwind, full stop","Upwind join：1500 ft 加速","聽唔清：Say again","ATC 話 time 48 ← 冇需要 readback"],rel:["rt.goaround","rt.parafield"],src:"ENZO Study Guide 10; Mass briefing 07",check:false},
  {id:"rt.parafield",g:"Flight Phases",t:"Parafield Call Sequence",d:"ENZO 日常流程：ATIS→Taxi→Further taxi→Ready→Inbound。",pts:["ATIS 120.9","Ground → Run-up bay → Tower","Ready runway for St Kilda departure","Inbound 由 Outer Harbour／Dam Wall","頻率資料請核對最新 ERSA"],rel:["rt.firstcontact","rt.circuit"],src:"ENZO Mass briefing 01 slides 14-21; Study Guide 10",check:true},
  // ===== Non-towered =====
  {id:"rt.ctaf",g:"Non-towered",t:"CTAF / Broadcast Area",d:"無塔場靠 pilot-to-pilot 廣播自己保持分隔。",pts:["CTAF = common traffic advisory freq","Class G 內 Broadcast Area","預設上限 5000 ft AMSL","UNICOM 係次要功能"],rel:["rt.nontowered","rt.certuncr"],src:"BAK p.160 (Air Law ch)",check:false},
  {id:"rt.certuncr",g:"Non-towered",t:"CERT／REG／MIL vs UNCR",d:"CERT/REG/MIL 一定要有電台；UNCR 有電台就要廣播。",pts:["CERT/REG/MIL：必須 radio + broadcast","冇 radio：遠離 10 nm 或高過 1000 ft","UNCR：有 radio 就廣播","Taxi、line-up、join circuit 都要"],rel:["rt.ctaf"],src:"BAK p.160",check:false},
  {id:"rt.nontowered",g:"Non-towered",t:"Calls at Non-towered Aerodromes",d:"到埗：overfly 窗口、join crosswind、base turn call。",pts:["Overfly：elevation + circuit + 500 ft","Joining crosswind for runway ___","Base turn：touch and go for ___ departure","最安全：dead side crosswind join","有 traffic 要報 intentions"],rel:["rt.ctaf","rt.circuit"],src:"ENZO Mass briefing 16 slide 30",check:false},
  // ===== Emergency =====
  {id:"rt.distress_urgency",g:"Emergency & Lost Comms",t:"Distress vs Urgency",d:"Distress = 即時危險；Urgency = 有危險但唔需要即時援助。",pts:["Distress → MAYDAY","Urgency → PAN-PAN","Safety → SECURITY","唔確定：寧可早 declare","每個情況都要獨立判斷"],rel:["rt.mayday","rt.panpan"],src:"Airspeaks 2.1 p.61; BAK p.50",check:false},
  {id:"rt.mayday",g:"Emergency & Lost Comms",t:"MAYDAY Call",d:"Mayday ×3，callsign，問題，意圖，位置，其他。",pts:["MAYDAY MAYDAY MAYDAY","Callsign (ENZO: ×3)","Nature of emergency","Intentions","Position / level / heading · POB"],rel:["rt.emerg_codes","rt.priority"],src:"Airspeaks p.62; BAK p.51; ENZO Mass briefing 10 slides 33-34",check:false},
  {id:"rt.panpan",g:"Emergency & Lost Comms",t:"PAN-PAN Call",d:"結構同 Mayday 一樣，只係用 PAN-PAN ×3。",pts:["PAN-PAN ×3","同 Mayday 同一結構","例：病人、迷路、燃油疑慮","PSL：早啲 PAN，專心落地","可以升級做 Mayday"],rel:["rt.mayday"],src:"Airspeaks p.63; BAK p.51; ENZO Mass briefing 12 slides 10, 14",check:false},
  {id:"rt.security",g:"Emergency & Lost Comms",t:"Security (Safety) Call",d:"第三級：SECURITY ×3，用於安全資訊。",pts:["Mayday > Pan-Pan > Security","同樣重複三次","例子教材冇詳列"],rel:["rt.distress_urgency"],src:"BAK p.50",check:true},
  {id:"rt.emerg_levels",g:"Emergency & Lost Comms",t:"When to Declare",d:"有疑問就早講；有 loss of control／受傷風險就 Mayday。",pts:["有時間性：至少 Pan-Pan","LOC 或受傷風險：Mayday","Hard-and-fast 規則冇","早講好過遲講","PIC 負最終責任"],rel:["rt.distress_urgency","rt.priority"],src:"BAK p.50",check:false},
  {id:"rt.emerg_freq",g:"Emergency & Lost Comms",t:"Where to Call (121.5)",d:"先用現有 frequency；冇回應再試 FIS，最後 121.5 MHz。",pts:["現行 freq 先","冇回覆：FIS frequency","再冇：121.5 MHz","Squawk 7700","Mayday 之後 ATC 會令全站靜音"],rel:["rt.mayday","rt.emerg_codes"],src:"BAK p.51; Airspeaks 3.4.2",check:false},
  {id:"rt.cancel",g:"Emergency & Lost Comms",t:"Cancel Distress",d:"問題解決：Cancel distress；ATC 發 distress traffic ended。",pts:["Pilot：Cancel distress","ATC：Mayday all stations…","Distress traffic ended","其他飛機恢復使用"],rel:["rt.mayday"],src:"Airspeaks 3.4.2 dialogue 2",check:false},
  {id:"rt.emerg_codes",g:"Emergency & Lost Comms",t:"Special Squawk Codes",d:"7700 緊急、7600 radio failure、7500 被劫持、1200 VFR。",pts:["7700 = emergency","7600 = radio failure","7500 = unlawful interference","1200 = VFR (AU 教材)","轉碼避免誤經過 75/76/77"],rel:["rt.xpdr","rt.lostcomms"],src:"BAK p.49; ATP p.7-2",check:false},
  {id:"rt.lostcomms",g:"Emergency & Lost Comms",t:"Lost Communications",d:"Squawk 7600 → transmit blind → 跟 ERSA／AIP 程序。",pts:["Squawk 7600","Transmit blind","Aviate 先，之後檢查 radio","查 ERSA EMERG（AU）","FAA VFR：維持 VFR 盡快落"],rel:["rt.blind","rt.lights"],src:"ENZO Mass briefing 08 slide 5; BAK p.52; ATP p.7-3",check:true},
  {id:"rt.blind",g:"Emergency & Lost Comms",t:"Transmitting Blind",d:"收唔到但可能發射得到，就盲發位置同意圖。",pts:["Transmitting blind due to receiver failure","位置、level、heading","意圖：點樣落","其他飛機可能聽到"],rel:["rt.lostcomms"],src:"Airspeaks 3.4.2 dialogue 3",check:false},
  {id:"rt.lights",g:"Emergency & Lost Comms",t:"Tower Light Signals",d:"冇 radio：睇 Tower 燈號——綠、紅、閃綠、閃紅。",pts:["空中：穩綠 = cleared to land","穩紅 = give way, circle","閃綠 = return for landing","閃紅 = unsafe, do not land","閃白：教材話冇意義"],rel:["rt.lostcomms"],src:"BAK Table 2-9 p.52",check:true},
  {id:"rt.elt",g:"Emergency & Lost Comms",t:"ELT & 121.5",d:"ELT 發射 emergency frequency；開機前後可以監聽 121.5。",pts:["121.5／243 MHz（教材）","電池到期要檢查","太易誤觸發","開飛前同收機後聽 121.5","PSL 前考慮開 ELT"],rel:["rt.emerg_freq"],src:"BAK p.52; ENZO Mass briefing 12 slide 10",check:true},
  {id:"rt.minfuel",g:"Emergency & Lost Comms",t:"Minimum Fuel Advisory (FAA)",d:"FAA：Min fuel 唔係 emergency，只係通知唔可以等。",pts:["Minimum fuel advisory","唔等於 priority","延誤會變 emergency","只係 FAA 教材"],rel:["rt.distress_urgency"],src:"ATP Test Prep ch7 'minimum fuel advisory'",check:true},
  // ===== Equipment =====
  {id:"rt.xpdr",g:"Transponder & Radar",t:"Transponder Modes & Usage",d:"改碼先 SBY，再 ALT；唔同空域用唔同碼。",pts:["OFF/SBY/ON/ALT/TST","Circuit：1200 + SBY","Training area：1200 + ALT","CTA：clearance 碼 + ALT","Squawk ident = 閃 symbol"],rel:["rt.emerg_codes","rt.ctaclr"],src:"BAK Table 2-8 p.49",check:false},
  {id:"rt.radar",g:"Transponder & Radar",t:"Primary vs Secondary Radar",d:"Primary 反射；SSR 靠 transponder 回應，有 code 同 altitude。",pts:["Primary：有回波","SSR：transponder 回應","Squawk 來自 IFF","CTA 內要有 transponder（Class G 例外）"],rel:["rt.xpdr"],src:"BAK p.48",check:false},
  // ===== Listening / Comprehension =====
  {id:"rt.confuse_num",g:"Listening / Comprehension",t:"Number Confusions",d:"最易混淆：5/9、15/50、13/30、2/to、4/for。",pts:["FIFE vs NIN-er","15 = WUN FIFE · 50 = FIFE ZE-RO","13 = WUN TREE · 30 = TREE ZE-RO","Squawk 7600 vs 7060","聽 digit 之間停頓"],rel:["rt.digits","rt.readback"],src:"BAK p.44; 自己補充",check:false},
  {id:"rt.confuse_sound",g:"Listening / Comprehension",t:"Sound-alike Words",d:"相近聲音：to/two、for/four、left/lift、hold/cold。",pts:["Climb to vs 2","Hold short vs Cold short","Cleared vs Clear","Right vs Light","聽 context 同 readback 確認"],rel:["rt.phonetic","rt.readback"],src:"自己補充（教材冇專章）",check:true},
  {id:"rt.expect",g:"Listening / Comprehension",t:"Hearing What You Expect",d:"人傾向聽自己預期嘅嘢。要特別留意數字同否定句。",pts:["預期 = 錯聽來源","Negative／not 容易漏","Readback 逼你重新聽","教材：Airspeaks Foreword"],rel:["rt.readback","rt.why"],src:"Airspeaks Foreword p.ix",check:false},
  {id:"rt.copy",g:"Listening / Comprehension",t:"Copy & Chunk",d:"聽長 clearance：寫低、拆成段、逐項 readback。",pts:["Ready to copy","寫：callsign、高度、頻率、squawk","拆 chunk：做咩→去邊→幾耐","寫速記符號"],rel:["rt.routeclr","rt.readback"],src:"Airspeaks 1.2; 自己補充",check:false},
  {id:"rt.ask",g:"Listening / Comprehension",t:"Ask When Unsure",d:"聽唔清就 Say again，唔好估。唔見 traffic 要講。",pts:["Say again","Confirm ___?","Unable","Negative contact","FAQ：唔識就直接講"],rel:["rt.fix","rt.traffic"],src:"ENZO Mass briefing 07 slide 436; AELP FAQ Q12",check:false},
  {id:"rt.noise",g:"Listening / Comprehension",t:"Noise & Impediments",d:"噪音、阻塞、同時發射、cockpit 嘈雜都影響聽力。",pts:["Blocked frequency","Simultaneous transmissions","Background noise","口音／母語影響","用 readability 確認"],rel:["rt.wordstwice","rt.readability"],src:"Airspeaks Foreword p.ix",check:false},
  {id:"rt.practice",g:"Listening / Comprehension",t:"Practice Method",d:"Listen → Repeat → Write → Check → Speak 五步循環。",pts:["Airspeaks 5 步","先聽再睇 transcript","複誦 pilot 部分","角色扮演 controller","練車牌、街牌"],rel:["rt.phonetic","rt.copy"],src:"Airspeaks Notes to the learner p.xvii; BAK p.43",check:false},
  // ===== AELP / English =====
  {id:"rt.icao6",g:"ICAO English",t:"ICAO Language Levels",d:"六項評分，最低一項就係總分。",pts:["Pronunciation · Structure · Vocabulary","Fluency · Comprehension · Interactions","L4 Operational：3 年","L5 Extended：6 年","L6 Expert：永久"],rel:["rt.aelptest"],src:"AELP FAQ p.2; AELP english test.docx",check:false},
  {id:"rt.aelptest",g:"ICAO English",t:"AELP Test Format",d:"20–30 分鐘電話測驗：自我介紹、ATIS、圖片描述。",pts:["Part 1：個人話題","Part 2：ATIS 聽力＋總結","Part 3：圖片描述","電話：semi-direct + 直接面試","最低 Level 4"],rel:["rt.icao6","rt.aelpatis"],src:"AELP english test.docx; AELP FAQ p.1-3",check:false},
  {id:"rt.aelpatis",g:"ICAO English",t:"ATIS Task (Part 2)",d:"聽 ATIS 後描述天氣、再總結內容。",pts:["Runway in use","Wind, visibility, cloud","Temp, QNH","Summarise in your words"],rel:["rt.atis","rt.aelptest"],src:"AELP english test.docx Part 2; Questions example.docx",check:false},
  {id:"rt.aelppic",g:"ICAO English",t:"Picture Description",d:"描述事故圖：人、物、事件、可能原因。",pts:["Who / what / where","What happened?","What next?","用完整句講足 20–30 秒"],rel:["rt.aelptest","rt.aelptips"],src:"Questions example.docx; AELP FAQ Q12",check:false},
  {id:"rt.aelptips",g:"ICAO English",t:"AELP Speaking Tips",d:"連續講、用淺白英文、冇經驗就講『我估計…』。",pts:["連續講足時間","清楚、唔好太快","唔明就問","無經驗：I have never ... but I would ...","唔需要技術考試"],rel:["rt.ask","rt.aelptest"],src:"AELP FAQ Q12 p.3-4",check:false},
  {id:"rt.aelpqs",g:"ICAO English",t:"Common Interview Themes",d:"話題包括自我介紹、訓練、emergency 經驗（radio failure、alternator）。",pts:["Self intro / goals","First solo story","Radio failure","Alternator failure","Airmanship / decision making"],rel:["rt.lostcomms","rt.aelptest"],src:"Questions example.docx",check:false}
  ],
  links:[
    ["rt.expect","rt.readback","預期偏差 → 用 readback 抓錯"],
    ["rt.digits","rt.confuse_num","FIFE/NIN-er 專門拉開 5 同 9"],
    ["rt.numrules","rt.freq","同一套逐位讀法"],
    ["rt.callsign","rt.phonetic","Callsign 用 phonetic 讀"],
    ["rt.struct","rt.firstcontact","結構 = 骨架，例子填內容"],
    ["rt.ack","rt.roger_trap","Roger 唔可以取代 readback"],
    ["rt.readback","rt.xpdr","Squawk code 係 readback 項目"],
    ["rt.takeoff","rt.clr","Cleared for take-off 先係批准"],
    ["rt.holdwords","rt.lineup","Line up ≠ cleared for take-off"],
    ["rt.mayday","rt.emerg_codes","Mayday 同時 squawk 7700"],
    ["rt.lostcomms","rt.emerg_codes","Radio failure → 7600"],
    ["rt.lostcomms","rt.lights","冇 radio 就睇燈號"],
    ["rt.priority","rt.mayday","Aviate 先，之後 Mayday"],
    ["rt.distress_urgency","rt.panpan","分級決定用邊個字"],
    ["rt.emerg_freq","rt.elt","121.5 MHz 係共同緊急頻"],
    ["rt.ctaclr","rt.freqchange","入出空域伴隨頻率轉換"],
    ["rt.atis","rt.firstcontact","首次 call 要報 ATIS 字母"],
    ["rt.atis","rt.aelpatis","AELP Part 2 用 ATIS"],
    ["rt.copy","rt.routeclr","長 clearance 要寫低再讀返"],
    ["rt.ask","rt.fix","Say again／Confirm 係標準修復"],
    ["rt.wordstwice","rt.noise","噪音／語言障礙 → words twice"],
    ["rt.circuit","rt.goaround","Circuit 內 go-around 要即時通知"],
    ["rt.nontowered","rt.ctaf","無塔場廣播靠 CTAF"],
    ["rt.parafield","rt.firstcontact","ENZO 流程使用同一結構"],
    ["rt.icao6","rt.aelptips","最低分項決定總分，要全面練"],
    ["rt.units","rt.atis","ATIS 內容單位"],
    ["rt.afterland","rt.parafield","Parafield 落地後報 clear"],
    ["rt.traffic","rt.ask","見唔到 traffic 要講 negative contact"],
    ["rt.blind","rt.lostcomms","收唔到就 transmit blind"],
    ["rt.xpdr","rt.radar","Transponder 係 SSR 嘅另一半"],
    ["rt.freq","rt.freqchange","轉頻要讀返 frequency"],
    ["rt.practice","rt.phonetic","練習方法包括朗讀車牌"],
    ["rt.cancel","rt.mayday","Cancel distress 結束 Mayday"],
    ["rt.emerg_levels","rt.distress_urgency","判斷 declare 級別"],
    ["rt.confuse_sound","rt.confuse_num","同一類聽錯風險"],
    ["rt.aelpqs","rt.lostcomms","面試會問 radio failure"]
  ],
  cards:[
    // Basics
    C("rt.why","Why does aviation use standard phraseology?","It keeps messages short, unambiguous and quick to understand, even with noise and accents.","標準用語＝短、準、少誤會。"),
    C("rt.why","What makes radio communication difficult in flight?","Noise, blocked or overlapping transmissions, poor signal and the tendency to hear what you expect.","噪音、同時發射、預期偏差。"),
    C("rt.ptt","What should you do before you press the PTT?","Listen out, decide what to say, then press PTT before speaking and release after finishing.","先聽、先諗、先撳。"),
    C("rt.ptt","How should you speak into the microphone?","Close to the lip, steady distance, a little slower than normal at normal volume.","唔好嘈、唔好低聲。"),
    C("rt.priority","What is the correct priority in an emergency?","Aviate, navigate, then communicate.","控制飛機最重要。"),
    C("rt.priority","What is the order of message priority?","Mayday first, then Pan-Pan, then Security.","三級優先。"),
    C("rt.ack","What does Roger mean?","I have received all of your last transmission.","只係收到。"),
    C("rt.ack","What does Wilco mean?","I understand your message and will comply with it.","明白，照做。"),
    C("rt.ack","What do Affirm and Negative mean?","Affirm means yes; Negative means no, permission not granted, or that is not correct.","Yes／No。"),
    C("rt.ack","What does Standby mean?","Wait and I will call you.","等我先。"),
    C("rt.clr","What does Cleared mean?","Authorised to proceed under the conditions specified.","有條件批准。"),
    C("rt.clr","What does Approved mean?","Permission for the proposed action is granted.","批准你提議。"),
    C("rt.clr","What does Recleared mean?","A change has been made to your last clearance and this one supersedes it.","新 clearance 取代舊。"),
    C("rt.clr","What is the difference between Request and Report?","Request means I wish to obtain; Report means pass me the following information.","Request＝我想；Report＝你報。"),
    C("rt.fix","How do you ask for a repeat?","Say 'Say again' to repeat all or a specified part of the last transmission.","重複。"),
    C("rt.fix","What does Confirm mean?","Have I correctly received the following, or did you correctly receive this message?","核對。"),
    C("rt.fix","What does Verify mean?","Check and confirm with the originator.","同源頭核實。"),
    C("rt.fix","What do you say if you make a mistake?","Say 'Correction' then give the correct version.","改錯。"),
    C("rt.fix","What does Disregard mean?","Consider that transmission as not sent.","當冇發過。"),
    C("rt.wordstwice","When would you request Words twice?","When communication is difficult; it asks that every word or group be sent twice.","通訊困難。"),
    C("rt.wordstwice","How does Words twice differ from Say again?","Say again repeats once; Words twice asks that each phrase be said two times throughout.","每句兩次。"),
    C("rt.overout","What do Over and Out mean?","Over expects a reply; Out ends the exchange. ICAO notes they are not normally used on VHF.","VHF 通常唔用。","🎧","check"),
    C("rt.overout","What is Break Break used for?","To separate messages to different aircraft in a very busy environment.","分隔唔同飛機。"),
    C("rt.readability","How do you ask about signal quality?","Say 'How do you read?' and the answer is 1 to 5.","問訊號質素。"),
    C("rt.readability","What does readability 3 mean?","Readable but with difficulty.","有困難。"),
    C("rt.readback","Why do we read back clearances?","To confirm that what was instructed was received and understood.","確認。"),
    C("rt.readback","What if your readback is wrong?","The controller should correct it; you then read back again.","錯咗要更正。"),
    C("rt.readback_items","Which items must be read back under the FAA AIM?","Altitude assignments, altitude restrictions and vectors.","FAA 重點。","🎧","check"),
    C("rt.readback_items","Is a Report request normally read back at Parafield?","No, a request to report somewhere is not required to be read back.","唔使。"),
    C("rt.roger_trap","Is 'Roger' an acceptable readback for 'hold short runway 21R'?","No; Roger only means received, you must read back the hold short instruction.","要讀返。"),
    C("rt.roger_trap","Should you answer a Yes/No question with Roger?","No, answer Affirm or Negative.","直接答 Yes/No。"),
    C("rt.callsign","In what order do you give station and callsign at first contact?","Station name first, then your callsign.","先電台後 callsign。"),
    C("rt.callsign","Where do you put the callsign in later transmissions?","At the start of the call, and at the end when signing off.","前後都可以。"),
    C("rt.callsign","How do you say VH-ABC?","Alfa Bravo Charlie (last three letters in Australia).","AU 用最後三字。"),
    // Phonetic & numbers
    C("rt.phonetic","Why do we use the phonetic alphabet?","To avoid confusion between similar-sounding letters like A, B and C.","防混淆。"),
    C("rt.phonetic","How do you say 'November' correctly?","no-VEM-ber, stressing the second syllable.","重音。"),
    C("rt.phonetic","When should you spell a word phonetically?","For callsigns, difficult place names, poor reception or confusion.","需要時拼。"),
    C("rt.digits","How is 5 pronounced?","FIFE.","FIFE。"),
    C("rt.digits","How is 9 pronounced?","NIN-er.","NIN-er。"),
    C("rt.digits","How is 3 pronounced?","TREE.","TREE。"),
    C("rt.digits","How do you say a decimal point?","DAY-SEE-MAL.","DAY-SEE-MAL。"),
    C("rt.digits","How is 4 pronounced in ICAO standard?","FOW-er.","書本寫 FOUR；ICAO 係 FOW-er。","🎧","check"),
    C("rt.numrules","How do you say 10 on the radio?","WUN ZE-RO.","唔係 ten。"),
    C("rt.numrules","How do you say 236?","TOO TREE SIX.","逐位。"),
    C("rt.numrules","How do you say 7,500 feet?","SEV-en TOU-SAND FIFE HUN-dred.","千百可用。"),
    C("rt.numrules","What do you do before and after numbers?","Pause briefly.","停一停。"),
    C("rt.freq","How do you say 118.3?","WUN WUN AIT DAY-SEE-MAL TREE.","逐位。"),
    C("rt.freq","What is the international emergency frequency?","121.5 MHz.","緊急頻。"),
    C("rt.time","What time reference is used in aviation?","UTC, called Zulu.","Zulu。"),
    C("rt.time","How do you say 0830Z?","ZE-RO AIT TREE ZE-RO, Zulu.","逐位。"),
    C("rt.time","What is the UTC offset for EST in the BAK text?","UTC = EST minus 10 hours.","EST −10。"),
    C("rt.units","What cloud unit is used in radio?","Oktas (eighths of the sky).","八分一。"),
    C("rt.units","What items does a pilot usually read back from ATIS?","Wind, QNH and runway.","三件事。"),
    C("rt.units","In what order does ATIS usually give weather?","Runway, wind, visibility, temperature, dew point, QNH.","順序。"),
    // Structure
    C("rt.struct","What are the four parts of a standard call?","Who you call, who you are, where or state, what you want.","四部分。"),
    C("rt.struct","Why keep calls short and structured?","So controllers can understand quickly and the frequency is not blocked.","快速、清楚。"),
    C("rt.firstcontact","Give a taxi request at Parafield.","'Parafield Ground, Diamond Star NBJ, Eastern Apron, received information D, request taxi.'","ENZO 範例。"),
    C("rt.firstcontact","Give a ready call at Parafield.","'Parafield Tower, NBJ, ready runway 21R for St Kilda departure.'","Tower ready。"),
    C("rt.firstcontact","What does an inbound call include?","Station, callsign, position, altitude, ATIS letter, 'inbound'.","報全套。"),
    C("rt.instr","What does Hold short mean?","Stop before the specified point, usually a runway.","喺點前停。"),
    C("rt.instr","What does Squawk mean?","Set the transponder to the specified code.","設碼。"),
    C("rt.instr","What does Contact Tower mean?","Change to the Tower frequency and call them.","轉頻。"),
    C("rt.unusual","What is 'Cleared for the option'?","Permission to do touch-and-go, low approach, missed approach, stop-and-go or full stop.","多種選擇。"),
    C("rt.unusual","What does Say intentions mean?","The controller asks you to state your plan.","講計劃。"),
    C("rt.unusual","What does Unable mean?","You cannot comply with the instruction.","做唔到。"),
    C("rt.unusual","What does Expedite mean?","Do it quickly, for example climb or descend.","加快。"),
    C("rt.holdwords","Is 'line up and wait' permission to take off?","No, it only allows you to enter and wait on the runway.","未可起飛。"),
    C("rt.holdwords","What does Hold position mean?","Stay where you are; do not move.","原地唔郁。"),
    C("rt.holdwords","What should you do if traffic is on short final?","ATC may say line up behind the landing aircraft; read back the instruction.","讀返。"),
    // Phases
    C("rt.atis","When do you listen to ATIS?","Before calling for start-up or taxi.","開車前聽。"),
    C("rt.atis","What do you say about ATIS on first contact?","'Received information' plus the letter.","報字母。"),
    C("rt.atis","What does 'no sig' mean?","No significant change in weather expected.","冇大變。"),
    C("rt.routeclr","What does a route clearance contain?","Destination, route, SID, level, frequency and squawk.","六項。"),
    C("rt.routeclr","What should you do after the clearance is read?","Read it back fully; the controller replies 'That is correct'.","完整讀返。"),
    C("rt.ctaclr","When do you request an airways clearance (ENZO)?","Early, at the boundary, to allow time for coordination.","提前請求。"),
    C("rt.ctaclr","What if you no longer want to enter controlled airspace?","Say 'Cancel clearance request'.","取消。"),
    C("rt.ctaclr","What must you do inside controlled airspace?","Be cleared for any change of altitude or route.","一切要批。"),
    C("rt.startup","What do you say when requesting start-up?","Station, callsign, stand, ATIS letter, 'request start-up', destination.","全套。"),
    C("rt.startup","What does 'Stand by for start' mean?","Wait; ATC will call when start-up is approved.","等。"),
    C("rt.taxi","What do you say when ATC gives give-way instructions?","'Traffic in sight' with your callsign.","見到就講。"),
    C("rt.taxi","What do you do if you do not understand taxi instructions?","Say 'Say again'.","問清楚。"),
    C("rt.runwaycross","What do you do at a holding point?","Hold short and request crossing if needed.","停低請求。"),
    C("rt.runwaycross","Why report from run-up bay?","To request further taxi after checks.","檢查後才請求。"),
    C("rt.lineup","What do you answer to 'Line up and wait'?","'Lining up' with your callsign.","Lining up。"),
    C("rt.lineup","If an aircraft is on final, what might ATC say?","'Report the aircraft in sight' then 'Behind the landing aircraft, line up behind'.","先見到先。"),
    C("rt.takeoff","What is the readback for take-off clearance?","'Runway 21R, cleared for take-off, callsign'.","讀返跑道。"),
    C("rt.takeoff","How soon must you take off at Parafield?","Within one minute of receiving departure instructions.","一分鐘。","🎧","check"),
    C("rt.depreport","What does TTA stand for?","Turn, Track, Altitude.","離場報告格式。"),
    C("rt.depreport","Is a departure report required at Parafield?","No.","唔需要。"),
    C("rt.freqchange","How do you respond to 'Contact Departure 124.2'?","Read back the frequency and callsign.","讀返頻率。"),
    C("rt.freqchange","What does Monitor mean?","Listen on the frequency without necessarily calling.","聽但唔使 call。"),
    C("rt.posrep","What does a position report include?","Callsign, position, time, level and next estimate.","五項。"),
    C("rt.traffic","How does ATC describe traffic?","Clock position, distance and direction.","鐘點、距離、方向。"),
    C("rt.traffic","What do you say if you cannot see the traffic?","'Negative contact' and request vectors if needed.","唔見就講。"),
    C("rt.descent","What do you say when starting descent?","'Leaving [level], descending to [level]'.","離開、下降。"),
    C("rt.approach","What do you report on approach?","'Established' when established on the approach.","報 established。"),
    C("rt.approach","What do you give at first contact with Approach?","Callsign, level, ATIS information.","三項。"),
    C("rt.landing","What does 'Roll through approved' mean?","Land and continue to the end; do not exit early.","唔好提早出。"),
    C("rt.landing","What is the readback for landing clearance?","'Cleared to land runway [xx], callsign'.","讀返跑道。"),
    C("rt.goaround","What do you say when going around?","'Callsign, going around'.","通知。"),
    C("rt.goaround","Why tell ATC when going around?","Because they must re-sequence traffic and runway use.","重排。"),
    C("rt.afterland","When do you report runway vacated?","Once clear of the runway.","離開後。"),
    C("rt.afterland","What if there is no other traffic?","Only report clear of all runways.","一次就夠。"),
    C("rt.circuit","What is the downwind call?","'Callsign, downwind, touch and go (or full stop)'.","Downwind call。"),
    C("rt.circuit","What do you do if you do not understand circuit instructions?","Say 'Say again'.","問。"),
    C("rt.parafield","What is the sequence of radio calls at Parafield?","ATIS, taxi, further taxi, ready, inbound, taxi back.","ENZO 流程。"),
    C("rt.parafield","Which frequency is ATIS at Parafield (ENZO)?","120.9 MHz.","核對 ERSA。","🎧","check"),
    // Non-towered
    C("rt.ctaf","What is a CTAF?","Common Traffic Advisory Frequency used for pilot-to-pilot broadcasts.","自我分隔。"),
    C("rt.ctaf","What is the default upper limit of a Broadcast Area?","5,000 ft AMSL.","5000 ft。"),
    C("rt.certuncr","Is a radio mandatory at CERT, REG and MIL aerodromes?","Yes; do not approach unless radio equipped and broadcasting.","必須。"),
    C("rt.certuncr","What should you do at UNCR aerodromes if you have a radio?","Make the same broadcasts as at other non-towered fields.","照樣廣播。"),
    C("rt.nontowered","What call do you make when overflying to inspect the windsock?","'[Aerodrome] traffic, [callsign] overflying at [altitude] for windsock inspection'.","報高度。"),
    C("rt.nontowered","Where is the safest place to join the circuit?","Crosswind from the dead side.","Dead side。"),
    C("rt.nontowered","What altitude is used for overflight per ENZO?","Elevation + circuit altitude + 500 ft.","加 500 ft。"),
    // Emergency
    C("rt.distress_urgency","Define distress.","A dangerous situation requiring immediate assistance.","即時援助。"),
    C("rt.distress_urgency","Define urgency.","A dangerous situation not requiring immediate assistance.","唔需要即時。"),
    C("rt.distress_urgency","Give an example of an urgency situation.","A seriously ill passenger.","病人。"),
    C("rt.distress_urgency","Give an example of a distress situation.","An uncontrollable engine fire.","發動機火。"),
    C("rt.mayday","What are the elements of a Mayday call?","Mayday x3, aircraft identification, nature, intention, position/level/heading, other information.","六項。"),
    C("rt.mayday","Give an engine failure Mayday example.","'Mayday, Mayday, Mayday, NBJ, engine failure, forced landing, ten miles north of St Kilda, 3,000 ft, two POB'.","ENZO 例子。"),
    C("rt.mayday","What do you do after a Mayday call?","Squawk 7700 and continue to fly the aircraft.","7700。"),
    C("rt.mayday","Can Mayday interrupt other calls?","Yes; it has priority over all.","可以。"),
    C("rt.panpan","When is a Pan-Pan appropriate?","Urgent situation not requiring immediate assistance, e.g., ill passenger or navigation difficulty.","例子。"),
    C("rt.panpan","Does a Pan-Pan have the same structure as a Mayday?","Yes, with Pan-Pan repeated three times.","結構一致。"),
    C("rt.panpan","When do you make a PAN call during a precautionary search landing?","Early, so you can focus on the landing.","盡早。"),
    C("rt.security","What is a Security call?","A safety message prefaced by 'Security' repeated three times.","第三級。","🎧","check"),
    C("rt.emerg_levels","When should you declare a Mayday?","If there is any risk of loss of control or injury.","LOC 或傷。"),
    C("rt.emerg_levels","When should you declare at least a Pan-Pan?","If there is any urgency.","有緊急性。"),
    C("rt.emerg_freq","Where do you transmit Mayday first?","On the current frequency.","現行頻。"),
    C("rt.emerg_freq","If no response, where next?","FIS frequency, then 121.5 MHz.","FIS→121.5。"),
    C("rt.cancel","How do you cancel a distress?","Say 'Cancel distress' on the frequency.","Cancel distress。"),
    C("rt.cancel","What does ATC say when distress traffic ends?","'Mayday all stations, distress traffic ended'.","結束廣播。"),
    C("rt.emerg_codes","What squawk code means emergency?","7700.","7700。"),
    C("rt.emerg_codes","What squawk code means radio failure?","7600.","7600。"),
    C("rt.emerg_codes","What squawk code means hijack?","7500.","7500。"),
    C("rt.emerg_codes","What is the Australian VFR code (BAK)?","1200.","VFR。"),
    C("rt.lostcomms","What is your first step in radio failure?","Aviate; then squawk 7600.","7600。"),
    C("rt.lostcomms","What does FAA say for VFR radio failure?","Continue VFR and land as soon as practicable.","盡快落地。","🎧","check"),
    C("rt.lostcomms","What route do you fly in IFR radio failure (FAA)?","Assigned, vectored, expected, then filed route.","四個層次。","🎧","check"),
    C("rt.lostcomms","What altitude in IFR radio failure (FAA)?","Highest of assigned, minimum IFR altitude, or expected.","最高者。","🎧","check"),
    C("rt.blind","What is a blind transmission?","Transmitting position and intentions when you can send but not receive.","盲發。"),
    C("rt.lights","What does a steady green light mean to an aircraft in flight?","Cleared to land.","綠＝落。"),
    C("rt.lights","What does a steady red light mean in flight?","Give way to other aircraft and continue circling.","紅＝等。"),
    C("rt.lights","What does a flashing red light mean in flight?","Aerodrome unsafe; do not land.","唔好落。"),
    C("rt.elt","What frequencies does an ELT use per BAK?","121.5 and 243 MHz.","教材如此。","🎧","check"),
    C("rt.minfuel","What is a minimum fuel advisory (FAA)?","A notice that you cannot accept undue delay; not an emergency.","唔係 emergency。","🎧","check"),
    // Transponder
    C("rt.xpdr","What do you select first when changing a code?","SBY.","先 SBY。"),
    C("rt.xpdr","Which code and mode in the training area?","1200 and ALT.","1200＋ALT。"),
    C("rt.xpdr","What does ALT mode transmit?","The code and the aircraft altitude.","碼＋高度。"),
    C("rt.radar","How is secondary radar different from primary?","It relies on the transponder response.","靠 transponder。"),
    // Listening
    C("rt.confuse_num","Which two digits are most often confused?","5 (FIFE) and 9 (NIN-er).","5／9。"),
    C("rt.confuse_num","How do you distinguish 15 and 50?","Say WUN FIFE and FIFE ZE-RO.","逐位。"),
    C("rt.confuse_sound","Why can 'to' and 'two' be confusing?","They sound the same; use TOO only for the number 2.","TOO。","🎧","check"),
    C("rt.expect","Why do pilots mishear instructions?","Because we hear what we expect to hear.","預期偏差。"),
    C("rt.copy","How do you handle a long clearance?","Write it down in chunks and read back each item.","寫低再讀。"),
    C("rt.ask","What if you are unsure what ATC said?","Say again or confirm, never guess.","唔好估。"),
    C("rt.noise","What are common impediments to RT?","Blocked frequencies, noise and accents.","障礙。"),
    C("rt.practice","What is the five-step practice cycle?","Listen, repeat, write, check, speak.","五步。"),
    // AELP
    C("rt.icao6","What are the six ICAO language skills?","Pronunciation, structure, vocabulary, fluency, comprehension, interactions.","六項。"),
    C("rt.icao6","How is the overall level determined?","By the lowest of the six scores.","最低分。"),
    C("rt.icao6","How long is Level 4 valid?","Three years.","三年。"),
    C("rt.aelptest","What are the parts of the AELP test?","Interview, ATIS listening, picture description.","三部分。"),
    C("rt.aelptest","How long is the test?","20 to 30 minutes.","20–30 分鐘。"),
    C("rt.aelpatis","What do you do in the ATIS task?","Listen to the ATIS and summarise the weather and key info.","描述同總結。"),
    C("rt.aelppic","How do you describe a picture?","Say who and what, where, what happened and what could happen next.","人物、事件、後果。"),
    C("rt.aelptips","What if you lack experience for a question?","Say so and describe what you think the answer might be.","講『我估』。"),
    C("rt.aelpqs","Name some topics in the AELP interview.","Self intro, goals, first solo, radio failure, airmanship.","話題。")
  ],
  anims:[
    {title:"Radio call 逐步組裝 (Who/Where/What)",hint:"揀情境，拉滑桿逐部分出現；撳每個格睇意思",build(box,H){
      const svg=H.svg(box,700,300),say=H.note(box),g=E("g",{},svg);
      const SC=[
        {n:"Taxi",p:["Parafield Ground","Diamond Star NBJ","Eastern Apron, received information D","Request taxi"]},
        {n:"Ready",p:["Parafield Tower","Diamond Star NBJ","Ready runway 21R","For St Kilda departure"]},
        {n:"Inbound",p:["Parafield Tower","Diamond Star NBJ","Outer Harbour, 1500, received information D","Inbound"]},
        {n:"En route",p:["Winton Control","Sunair 153","Lake VOR at 15, FL270","Estimating Blackrock at 48"]}];
      const TT=["WHO you call","WHO you are","WHERE / state","WHAT you want"],CL=["#38bdf8","#4ade80","#fbbf24","#f472b6"];
      const MN=["電台名先講（首次聯絡）","Callsign（可加機型）","位置、高度、ATIS 字母","要求或意圖，越短越好"];
      let sc=0,step=4,sel=-1;
      function draw(){clr(g);const S=SC[sc];
        for(let i=0;i<4;i++){const x=15+i*172;
          if(i<step){bx(g,x,30,160,150,CL[i],sel===i?"#fff":"none");
            tx(g,x+80,52,TT[i],{fill:"#0f172a",sz:12,w:700});
            lines(g,x+80,86,S.p[i],16,{fill:"#0f172a",sz:14,lh:18});
            const r=E("rect",{x:x,y:30,width:160,height:150,fill:"transparent",style:"cursor:pointer"},g);r.onclick=()=>{sel=i;say(TT[i]+"："+MN[i]);draw()};}
          else bx(g,x,30,160,150,"none","#64748b",true)}
        const full=S.p.slice(0,step).join(", ");
        tx(g,350,215,"組合嘅 call：",{sz:12,fill:"#94a3b8"});
        lines(g,350,240,full||"…",70,{sz:14,lh:20})}
      SC.forEach((s,i)=>H.button(box,s.n,()=>{sc=i;sel=-1;draw();say("情境："+s.n+"，格式一樣：Who–Who–Where–What")}));
      H.slider(box,"組裝步驟",0,4,4,v=>{step=v;sel=-1;draw();say(v===0?"空白：未開始":v<4?"繼續加下一部分":"完整 call！四部分齊")});
    }},
    {title:"Readback 揪錯遊戲",hint:"睇 ATC 指令同 pilot readback，判斷啱唔啱",build(box,H){
      const svg=H.svg(box,700,320),say=H.note(box),g=E("g",{},svg);
      const IT=[
        ["NBJ, climb to 5500 feet.","Climb 5500, NBJ.",true,"啱：level 同 callsign 都讀返。"],
        ["NBJ, squawk 3434.","Squawk 3443, NBJ.",false,"錯：數字轉位 3434 ≠ 3443。"],
        ["NBJ, contact Approach 128.6.","Approach 124.2, NBJ.",false,"錯：Frequency 讀錯。"],
        ["NBJ, hold short runway 21R.","Roger.",false,"錯：Roger 唔係 readback，要讀返 hold short。"],
        ["NBJ, line up and wait.","Line up and wait, NBJ.",true,"啱。"],
        ["NBJ, runway 03L clear for take-off.","Runway 03R clear for take-off, NBJ.",false,"錯：L 變成 R，會入錯跑道。"],
        ["NBJ, descend to 3500.","Climb to 3500, NBJ.",false,"錯：descend 讀成 climb。"],
        ["NBJ, report approaching.","Wilco, NBJ.",true,"啱：Report 類唔使完整 readback。"],
        ["NBJ, remain clear of Class C, contact Approach 128.6.","Remain clear of Class C, contact Approach 128.6, NBJ.",true,"啱：兩項都讀返。"]];
      let i=0,ans=null,score=0,tot=0;
      function draw(){clr(g);const it=IT[i];
        tx(g,20,30,"ATC",{a:"start",sz:12,fill:"#94a3b8"});bx(g,20,38,660,52,"#38bdf8");lines(g,350,70,it[0],70,{fill:"#0f172a",sz:16});
        tx(g,20,125,"Pilot readback",{a:"start",sz:12,fill:"#94a3b8"});
        const wrong=ans!==null&&!it[2];
        bx(g,20,133,660,52,wrong?"#f87171":"#4ade80",ans!==null?(wrong?"#fff":"none"):"none");lines(g,350,165,it[1],70,{fill:"#0f172a",sz:16});
        if(ans!==null){const good=ans===it[2];bx(g,20,205,660,60,good?"#14532d":"#7f1d1d");tx(g,350,230,good?"✔ 你判斷啱":"✖ 你判斷錯咗",{sz:16,w:700});lines(g,350,252,it[3],70,{sz:13})}
        tx(g,680,305,"分數 "+score+" / "+tot,{a:"end",sz:13,fill:"#94a3b8"});tx(g,20,305,"第 "+(i+1)+" / "+IT.length+" 題",{a:"start",sz:13,fill:"#94a3b8"})}
      function answer(c){if(ans!==null)return;ans=c;tot++;if(c===IT[i][2])score++;draw();say(IT[i][3])}
      H.button(box,"✔ Readback OK",()=>answer(true));
      H.button(box,"✖ 有錯！",()=>answer(false));
      H.button(box,"Next ▶",()=>{i=(i+1)%IT.length;ans=null;draw();say("留意數字、runway、frequency、方向字")});
      draw();say("判斷：readback 啱唔啱？");
    }},
    {title:"Numbers & Phonetic 讀法",hint:"拉滑桿睇點讀；最後幾個係易混淆配對",build(box,H){
      const svg=H.svg(box,700,300),say=H.note(box),g=E("g",{},svg);
      const IT=[
        {t:"Frequency 118.3",r:[["1","WUN"],["1","WUN"],["8","AIT"],[".","DAY-SEE-MAL","s"],["3","TREE"]],n:"逐位讀，細數點讀 DAY-SEE-MAL"},
        {t:"Altitude 5,500 ft",r:[["5,000","FIFE TOU-SAND","s"],["500","FIFE HUN-dred","s"]],n:"成千成百可以用 thousand／hundred"},
        {t:"Heading 050",r:[["0","ZE-RO"],["5","FIFE"],["0","ZE-RO"]],n:"三位逐個讀"},
        {t:"Squawk 7600",r:[["7","SEV-en"],["6","SIX"],["0","ZE-RO"],["0","ZE-RO"]],n:"Radio failure code"},
        {t:"Number 10",r:[["1","WUN"],["0","ZE-RO"]],n:"唔係 ten，要 WUN ZE-RO"},
        {t:"Time 0830Z",r:[["0","ZE-RO"],["8","AIT"],["3","TREE"],["0","ZE-RO"]],n:"Zulu time 逐位"},
        {t:"Runway 26L",r:[["2","TOO"],["6","SIX"],["L","LEFT","s"]],n:"跑道號逐位＋方向字"},
        {t:"Callsign NBJ",r:[["N","NO-VEM-ber"],["B","BRAH-voh"],["J","JEW-lee-ETT"]],n:"Phonetic，留意重音"},
        {t:"5 vs 9",r:[["5","FIFE"]],r2:[["9","NIN-er"]],n:"FIFE vs NIN-er，兩個最易錯"},
        {t:"15 vs 50",r:[["1","WUN"],["5","FIFE"]],r2:[["5","FIFE"],["0","ZE-RO"]],n:"15 = WUN FIFE；50 = FIFE ZE-RO"},
        {t:"13 vs 30",r:[["1","WUN"],["3","TREE"]],r2:[["3","TREE"],["0","ZE-RO"]],n:"13 = WUN TREE；30 = TREE ZE-RO"},
        {t:"2 vs 'to'",r:[["2","TOO"]],r2:[["to","to (介詞)","w"]],n:"數字 2 讀 TOO；介詞 to 唔係數字"}];
      function row(rr,y,col){const n=rr.length,w=Math.min(110,(660)/n-8),x0=350-(n*(w+8)-8)/2;
        rr.forEach((c,i)=>{const x=x0+i*(w+8),k=c[2];bx(g,x,y,w,90,k==="s"?"#fbbf24":k==="w"?"#94a3b8":col);tx(g,x+w/2,y+38,c[0],{fill:"#0f172a",sz:c[0].length>3?18:26,w:700});tx(g,x+w/2,y+70,c[1],{fill:"#0f172a",sz:12,w:700})})}
      function draw(v){clr(g);const it=IT[v];tx(g,350,26,it.t,{sz:18,w:700});row(it.r,45,"#38bdf8");if(it.r2){tx(g,350,160,"vs",{sz:14,fill:"#94a3b8"});row(it.r2,170,"#f87171")}else{tx(g,350,200,"黃色 = 特別組合字",{sz:12,fill:"#94a3b8"})}}
      H.slider(box,"例子 0–"+(IT.length-1),0,IT.length-1,0,v=>{draw(v);say(IT[v].n)});
    }},
    {title:"Mayday vs Pan-Pan 判斷＋結構",hint:"先判斷級別，再逐項出現 call 嘅內容",build(box,H){
      const svg=H.svg(box,700,340),say=H.note(box),g=E("g",{},svg);
      const SC=[
        ["Engine failure at 3,000 ft, forced landing",true,"Distress：需要即時行動"],
        ["Fire in the rear toilets",true,"Airspeaks 列為 distress"],
        ["Passenger seriously ill",false,"Urgency：需要儘快處理"],
        ["Depressurisation, emergency descent",true,"Airspeaks 列為 distress"],
        ["Injuries after severe turbulence",false,"Airspeaks 列為 urgency"],
        ["Lost, fuel and daylight under 1 hour",false,"BAK：有時間性至少 Pan-Pan"],
        ["Rising ground, cloud base lowering, LOC risk",true,"BAK：有 LOC／CFIT 風險 → Mayday"],
        ["Bomb scare",false,"Airspeaks 練習例子：Pan-Pan（真實情況逐案評估）"]];
      const EL=["1  MAYDAY ×3 / PAN-PAN ×3","2  Aircraft identification","3  Nature of emergency","4  Intentions","5  Position / level / heading","6  Other (POB, squawk 7700)"];
      const MV=["MAYDAY MAYDAY MAYDAY","NBJ NBJ NBJ Diamond Star","Engine failure","Forced landing","10 miles north of St Kilda, 3000 ft","Two POB, squawk 7700"];
      const PV=["PAN-PAN PAN-PAN PAN-PAN","NBJ","Passenger seriously ill","Return to base","20 miles south, 3000 ft, heading 250","Request ambulance"];
      let si=0,ans=null,step=0;
      function draw(){clr(g);const s=SC[si];tx(g,350,30,"情境："+s[0],{sz:16,w:700});
        if(ans===null){tx(g,350,150,"撳 MAYDAY 或 PAN-PAN 判斷",{sz:15,fill:"#94a3b8"});return}
        const ok=ans===s[1];bx(g,20,50,660,34,ok?"#14532d":"#7f1d1d");tx(g,350,73,(ok?"✔ 啱":"✖ 錯")+" · 答案："+(s[1]?"MAYDAY":"PAN-PAN")+" · "+s[2],{sz:13});
        const V=s[1]?MV:PV;
        for(let i=0;i<6;i++){const y=100+i*38;if(i<step){bx(g,20,y,300,32,s[1]?"#f87171":"#fbbf24");tx(g,30,y+21,EL[i],{a:"start",fill:"#0f172a",sz:12,w:700});bx(g,325,y,355,32,"#1e293b");tx(g,335,y+21,V[i],{a:"start",sz:12})}else bx(g,20,y,660,32,"none","#475569",true)}}
      function pick(c){if(ans!==null)return;ans=c;step=0;draw();say(SC[si][2])}
      H.button(box,"MAYDAY",()=>pick(true));H.button(box,"PAN-PAN",()=>pick(false));
      H.button(box,"Next 元素 ▶",()=>{if(ans!==null&&step<6){step++;draw();say("第 "+step+" 項："+EL[step-1].slice(3))}});
      H.button(box,"下一題",()=>{si=(si+1)%SC.length;ans=null;step=0;draw();say("Aviate 先，之後 call")});
      draw();say("判斷級別：distress 定 urgency？");
    }},
    {title:"Frequency 轉換流程",hint:"拉滑桿或 Auto-play，睇飛機經每個 station",build(box,H){
      const svg=H.svg(box,700,260),say=H.note(box),g=E("g",{},svg);
      const ST=[
        ["ATIS","聽，唔 call：info 字母、runway、wind、QNH","A"],
        ["Clearance","Ready to copy → 完整 readback → squawk","A"],
        ["Ground","Start-up／taxi：readback route、holding point","A"],
        ["Tower","Ready → line up → cleared for take-off","A"],
        ["Departure","報 level、heading；按指示爬升","F"],
        ["Centre","Position report、contact ___ goodbye","F"],
        ["Approach","Squawk、descend、Established","F"],
        ["Tower","Cleared to land；go-around call","A"],
        ["Ground","Runway vacated → taxi to stand","A"]];
      let idx=0,px=50,auto=false,t0=Date.now();
      const W=72,sx=i=>12+i*(W+4)+W/2;
      ST.forEach((s,i)=>{const x=12+i*(W+4);bx(g,x,80,W,56,s[2]==="A"?"#38bdf8":"#a78bfa");lines(g,x+W/2,104,s[0],10,{fill:"#0f172a",sz:11,w:700,lh:13});tx(g,x+W/2,70,String(i+1),{sz:11,fill:"#94a3b8"})});
      const line=E("path",{d:"M12,170 L688,170",stroke:"#475569","stroke-width":2,"stroke-dasharray":"4 4"},svg);
      const plane=E("path",{d:"M0,-10 L14,0 L0,10 L3,0Z",fill:"#fbbf24"},svg);
      const hl=E("rect",{width:W+8,height:64,rx:10,fill:"none",stroke:"#fff","stroke-width":2,y:76},svg);
      tx(svg,350,225,"淺藍＝機場區；紫＝航路／終端（各機場台數唔同，例如 Parafield 只有 Ground／Tower）",{sz:11,fill:"#94a3b8"});
      H.loop(()=>{plane.setAttribute("transform","translate("+px+",170)");px+=(sx(idx)-px)*0.12;hl.setAttribute("x",12+idx*(W+4)-4);
        if(auto&&Date.now()-t0>2600){t0=Date.now();idx=(idx+1)%ST.length;sl.value=idx;sl.nextSibling&&0;upd()}});
      function upd(){say(ST[idx][0]+"："+ST[idx][1])}
      const sl=H.slider(box,"Station",0,ST.length-1,0,v=>{idx=v;upd();t0=Date.now()});
      H.button(box,"▶ Auto-play",()=>{auto=!auto;t0=Date.now();say(auto?"自動播放中…":"已停止")});
    }},
    {title:"Lost comms 步驟",hint:"揀 VFR／IFR，拉滑桿逐步睇",build(box,H){
      const svg=H.svg(box,700,300),say=H.note(box),g=E("g",{},svg);
      const M={
        VFR:["Aviate：控制飛機，再檢查 radio（頻率、音量、PTT）","Squawk 7600","Transmit blind：callsign、位置、level、意圖","查 ERSA／AIP 無線電故障程序（Parafield：ERSA EMERG-3）","睇 Tower 燈號（穩綠＝cleared to land）","FAA VFR：維持 VFR，盡快落地"],
        IFR:["Squawk 7600","Route：assigned → vectored 直去 → expected → filed","Altitude：assigned／MEA／expected 取最高","離 clearance limit：按 EFC，冇就按 ETA","Approach：喺 EFC 或 ETA 開始下降／進場"]};
      const SRC={VFR:"來源：ENZO Mass briefing 08；BAK p.52；ATP p.7-3 (FAA)",IFR:"來源：ATP Test Prep p.7-3（FAA 14 CFR 91.185）"};
      let mode="VFR",step=1;
      function draw(){clr(g);const L=M[mode];tx(g,350,24,mode+" lost comms（"+(mode==="VFR"?"AU＋FAA 混合":"FAA 教材")+"）",{sz:15,w:700});
        L.forEach((s,i)=>{const y=40+i*40;bx(g,20,y,660,34,i<step?"#f472b6":"none","#64748b",i>=step);tx(g,36,y+22,(i+1)+".",{a:"start",fill:i<step?"#0f172a":"#94a3b8",sz:13,w:700});tx(g,60,y+22,s,{a:"start",fill:i<step?"#0f172a":"#94a3b8",sz:13})});
        tx(g,350,292,SRC[mode],{sz:11,fill:"#94a3b8"})}
      H.button(box,"VFR",()=>{mode="VFR";step=1;sl.value=1;draw();say("VFR：先 aviate，再 7600 同 transmit blind")});
      H.button(box,"IFR (FAA)",()=>{mode="IFR";step=1;sl.value=1;draw();say("IFR：按規則決定 route、altitude、離 clearance limit")});
      const sl=H.slider(box,"步驟",1,6,1,v=>{step=Math.min(v,M[mode].length);draw();say("第 "+step+" 步："+M[mode][step-1])});
    }},
    {title:"Tower 燈號（冇 radio 時）",hint:"揀燈號同空中／地面，睇意思",build(box,H){
      const svg=H.svg(box,700,280),say=H.note(box);
      const AIR={sg:"Cleared to land",sr:"Give way, continue circling",fg:"Return for landing",fr:"Aerodrome unsafe, do not land",fw:"教材：no meaning"};
      const GND={sg:"Cleared for take-off（核對）",sr:"Stop",fg:"Cleared to taxi",fr:"Taxi clear of landing area",fw:"Return to starting point"};
      let k="sg",air=true;
      const LAB={sg:"穩綠",sr:"穩紅",fg:"閃綠",fr:"閃紅",fw:"閃白"};
      const COL={sg:"#4ade80",sr:"#f87171",fg:"#4ade80",fr:"#f87171",fw:"#e2e8f0"};
      const lamp=E("circle",{cx:350,cy:100,r:55,fill:"#4ade80"},svg),title=tx(svg,350,200,"",{sz:20,w:700}),sub=tx(svg,350,230,"",{sz:14,fill:"#94a3b8"});
      function show(){const m=air?AIR:GND;title.textContent=m[k];sub.textContent=(air?"空中 aircraft in flight":"地面 aircraft on the ground")+" · "+LAB[k]+" · 來源 BAK Table 2-9"}
      Object.keys(LAB).forEach(x=>H.button(box,LAB[x],()=>{k=x;show();say(LAB[x]+"："+(air?AIR[x]:GND[x]))}));
      H.button(box,"空中／地面",()=>{air=!air;show();say(air?"空中":"地面")});
      H.loop(()=>{const flash=k[0]==="f",on=!flash||Math.floor(Date.now()/450)%2===0;lamp.setAttribute("fill",on?COL[k]:"#1e293b");lamp.setAttribute("stroke",COL[k]);lamp.setAttribute("stroke-width",3)});
      show();say("闖入：冇 radio 時用燈號溝通");
    }},
    {title:"Parafield call sequence (ENZO)",hint:"拉滑桿睇每個階段嘅 call 同 ATC 回覆",build(box,H){
      const svg=H.svg(box,700,320),say=H.note(box),g=E("g",{},svg);
      const D=[
        ["1 ATIS","120.9","Listen only","Note: info letter, runway, wind, QNH"],
        ["2 Taxi","Ground 119.9","Parafield Ground, Diamond Star NBJ, Eastern Apron, received information D, request taxi","NBJ, taxi to run-up bay Foxtrot"],
        ["3 Further taxi","Ground","NBJ, request further taxi","NBJ, on Bravo enter undershoot of 26R, taxi holding point B5, runway 21R"],
        ["4 Ready","Tower 124.6 / 118.7","Parafield Tower, NBJ, ready runway 21R for St Kilda departure","NBJ, runway 21R clear for take-off"],
        ["5 Inbound","Tower","Parafield Tower, NBJ, Outer Harbour, 1500, received information D, inbound","NBJ, join mid downwind runway 21R, maintain 1500"],
        ["6 Circuit","Tower","NBJ downwind, touch and go / full stop","Traffic info, landing clearance"],
        ["7 Clear","Tower／Ground","Report clear of the runway (all runways if no traffic)","Taxi back to apron: request taxi"]];
      H.slider(box,"階段",0,D.length-1,0,v=>{clr(g);const d=D[v];
        tx(g,350,32,d[0]+" · "+d[1],{sz:17,w:700});
        bx(g,20,50,660,100,"#4ade80");tx(g,32,70,"PILOT",{a:"start",fill:"#0f172a",sz:11,w:700});lines(g,350,100,d[2],70,{fill:"#0f172a",sz:15,lh:20});
        bx(g,20,170,660,100,"#38bdf8");tx(g,32,190,"ATC",{a:"start",fill:"#0f172a",sz:11,w:700});lines(g,350,220,d[3],70,{fill:"#0f172a",sz:15,lh:20});
        tx(g,350,302,"頻率來自 ENZO 教材，請以最新 ERSA 為準",{sz:11,fill:"#94a3b8"});
        say("階段 "+d[0]+"：對照結構 Who–Who–Where–What")});
    }}
  ]
});
})();
