// Navigation 補漏（nav_extra）。來源見 coverage/nav.md「補漏 pass」
(function(){
const P=id=>id.indexOf(".")<0?"nav."+id:id;
const T=(id,g,t,d,pts,rel,src,check)=>({id:"nav."+id,g,t,d,pts,rel:rel.map(P),src,check:!!check});
const C=(topic,e,q,a,zh)=>({e,q,a,zh,topic:"nav."+topic,st:"ok"});
const L=(a,b,why)=>[P(a),P(b),why];
const topics=[],cards=[],links=[],anims=[];
const AX="補漏";

// ===================== PART 1：Time & Daylight / Charts / VFR procedures =====================
topics.push(
T("dtg","Time & Daylight","Date-Time Groups","Aviation 用 6／8／10 位日期時間組，最大單位排前面。",["6-fig：日 + hhmm（最常用）","8-fig：加月份（NOTAM）","10-fig：加年份","24 hr 制，通常 UTC"],["utc","timearc"],"Ebook Nav ch2"),
T("arc2time","Time & Daylight","Arc ↔ Time","360° = 24 hr；1 hr = 15°，1° = 4 min，1′ arc = 4 s。",["Arc → time：÷ 15","Time → arc：× 15","例 140°49′ ≈ 9 hr 23 min","AIP GEN 有換算表"],["lmt","timearc"],"Ebook Nav ch2"),
T("lmt","Time & Daylight","Local Mean Time (LMT)","同一條 meridian 嘅 LMT 一樣；愈東愈早。",["East = ahead","Longitude east, UTC least","Longitude west, UTC best","LMT 只屬一條 meridian"],["arc2time","utc"],"Ebook Nav ch2"),
T("stdtime","Time & Daylight","Standard Time Zones","Zone 用中央 meridian 做 standard time，夏令加 1 hr。",["Aus EST 150°E = UTC+10","CST 142°30′E = +9:30","WST 120°E = +8","HK = UTC+8（常識）"],["lmt","utc"],"Ebook Nav ch2（Australia）"),
T("dateline","Time & Daylight","International Date Line","大致沿 180° meridian；改日期唔改時間。",["向東過線：減一日","向西過線：加一日","180°E = 180°W 同一線","LMT 一樣，日期唔同"],["stdtime","timeprob"],"Ebook Nav ch2"),
T("twilight","Time & Daylight","Civil Twilight","太陽中心喺地平線下 6° 之間係 civil twilight。",["Sunrise：upper limb 見地平","Daylight = 晨→晚 civil twilight","Tropics 短；高緯度長","Terminator = 日夜分界線"],["daylight","bodeod"],"Ebook Nav ch2"),
T("bodeod","Time & Daylight","BoD / EoD Planning","用日期＋緯度查 BoD／EoD（LMT），再轉 UTC。",["先 LMT，後轉 UTC","VFR 要喺 EoD 前 ≥ 10 min 到（Aus）","實務留 20–30 min","雲、山、煙令天黑更早"],["twilight","timeprob","daylight"],"Ebook Nav ch2（Australia）"),
T("timeprob","Time & Daylight","Time Problem Method","一律先轉 UTC 計，最後先轉返 local；每行標明時間類型同日期。",["① 轉 UTC","② 加減 flight time","③ 轉返 local","寫埋 date 防跨日"],["dtg","utc"],"Ebook Nav ch2"),

T("projprob","Charts & VFR Nav","Projection Problem","球面壓平一定變形，只可保留最重要嘅 property。",["Orange peel 比喻","Cone → Lambert","Cylinder → Mercator","形狀、距離、角度、面積失真"],["chartprops","lambert"],"Ebook Nav ch3"),
T("chartprops","Charts & VFR Nav","Ideal Chart Properties","理想：真形狀、conformal、恆定 scale、GC 直線、rhumb 直線。",["Conformal 最重要","GC 同 rhumb 唔可以同時直","Lambert 最近理想","> 80° 極區用其他投影"],["projprob","conformal"],"Ebook Nav ch3"),
T("conformal","Charts & VFR Nav","Conformal Projection","角度／bearing 準確：meridian 同 parallel 90° 相交。",["Lambert、Mercator 都係","形狀局部正確","量 bearing 可靠","面積／scale 可能變"],["chartprops","lambert"],"Ebook Nav ch3"),
T("mercator","Charts & VFR Nav","Mercator & Transverse","Cylinder 切 equator；rhumb 係直線；VTC 用 Transverse。",["Meridian 等距直線","Parallel 愈高愈疏","Rhumb = 直線（海航）","Transverse：cylinder 切 meridian"],["lambert","rhumb"],"Ebook Nav ch3"),
T("stdpar","Charts & VFR Nav","Standard Parallels","Cone 接觸球面嘅緯線；Lambert 有兩條。",["Simple conic：1 條","Lambert：2 條，圖角標示","之間輕微 compress","之外輕微 expand"],["lambert","scale"],"Ebook Nav ch3"),
T("convergence","Charts & VFR Nav","Convergence on Lambert","Meridians 向近極收窄；直線橫過各 meridian 角度逐步變。",["GC ≈ 直線","Rhumb 彎，凹向近極","< 200 nm 兩者差異細","方向一樣喺 mid-meridian"],["greatcircle","rhumb","plotter"],"Ebook Nav ch3"),
T("chartroles","Charts & VFR Nav","Chart Roles (Aus VFR)","WAC 計劃；VNC 有 airspace；VTC 只喺終端區；ERC-L 睇 airspace。",["WAC 1:1M Lambert","VNC 1:500k Lambert","VTC 1:250k Transverse Mercator","ERC-L 冇固定 scale"],["scale","chartfeat"],"Ebook Nav ch3（Australia）"),
T("relief","Charts & VFR Nav","Relief Depiction","Contours、tints、spot height、shading／hachures 表達地形。",["Contour 愈密 = 愈斜","Hypsometric：綠→黃→棕","Spot height = 地面，唔係樹","括號 spot = 推算"],["chartfeat","lowlevel"],"Ebook Nav ch3"),
T("plotter","Charts & VFR Nav","Plotter & Chart Measuring","喺 mid-meridian 量 true track；用 1:1M scale 量 nm。",["先估方向（±30°）","True → 轉 magnetic","ERC 唔可以用 scale ruler","冇 scale：lat 1′ = 1 nm"],["convergence","var"],"Ebook Nav ch3"),
T("chartorient","VFR Procedures","Map Reading Method","Track 向上；選 unique checkpoint；先預計時間再望。",["每 10–15 min 一個點","ETA 前 2–3 min 開始搵","Linear feature 輔助","每個 fix 要 verify"],["pilotage","poslines"],"Ebook Nav ch5"),
T("poslines","VFR Procedures","Position Lines & Fix","Position line = 已知喺其上；兩條相交成 fix。",["來源：線狀地物、transit","亦可係 radio bearing","畫箭咀＋UTC","約 90° 相交最好"],["gscheck","dr"],"Ebook Nav ch5"),
T("gscheck","VFR Procedures","GS from Two Position Lines","兩條垂直 track 嘅 PL 距離 ÷ 時間 = GS。",["例 7 nm 用 6 min","GS = 7 × 60 ÷ 6 = 70 kt","PL 要垂直 track","PL 亦可估 drift"],["poslines","gs"],"Ebook Nav ch5"),
T("departure","VFR Procedures","Departure Procedures","起飛後定 initial heading，推算 ATD，核對 track。",["OCTA：1,500 ft AAL／3 nm 先離 circuit","Control zone：500 ft 後 5 nm 內上 track","ATD 要減 overhead 距離時間","DG 要同 compass 對正"],["navlog","workcycle"],"Ebook Nav ch5（Australia）"),
T("cruisechk","VFR Procedures","Cruise Checks","到 cruise：QNH、power、trim、CLEAROF、TAS、早 fix。",["Area QNH 設咗未","First fix 10–20 nm 後再 fix","GS 差好遠 → 改 ETA","DG 對 compass"],["workcycle","trackkeep"],"Ebook Nav ch5"),
T("descentcalc","VFR Procedures","Descent Planning","降多少高度 ÷ ROD = 時間；時間 × GS/60 = 距離。",["Height to lose = cruise − (elev + 1,500)","例：4,000 ft @ 500 fpm = 8 min","Tailwind 令 descent 距離增加","Required ROD = 高度 ÷ 時間"],["tod","windcomp"],"Ebook Nav ch5"),
T("lowlevel","VFR Procedures","Low-Level Navigation","視野窄：多 checkpoint，由 chart 睇落地，高物易認。",["Mast、chimney、silo 有用","Log 要精簡","避 low jet routes","Missing feature = 假設已過"],["pilotage","uncertain"],"Ebook Nav ch5"),
T("reducedvis","VFR Procedures","Reduced Visibility","早決定回頭或改航；減速、加 checkpoint。",["Map reading 唔適合 > BKN","Precautionary config 慢速","Uncertain ≠ lost","10–15 min 冇 fix 先算 uncertain"],["uncertain","imc"],"Ebook Nav ch5"),
T("remote","VFR Procedures","Remote-Area Navigation","冇地標：靠 DR，周全 plan、fuel／time buffer、ELT／HF。",["Flight plan + SARTIME","留 20–30 min last light buffer","早上起飛涼爽、能見度好","唔好跟會斷嘅泥路"],["dr","elt","bodeod"],"Ebook Nav ch5"),
T("elt","VFR Procedures","Emergency Locator Transmitter","ELT 縮窄搜索範圍；書寫 121.5／243.0 MHz。",["現今以 406 MHz 為主（我認為）","Battery 要滿","誤開要通知 ATS／RCC","迫降要主動開"],["remote","lost"],"Ebook Nav ch5",true),
T("lanes","VFR Procedures","Lanes of Entry","VTC 上嘅 VFR 通道，避開鄰近 CTR／軍空域。",["上限高度唔可超過","Keep right","Track 要準、加強 lookout","天氣差：早決定回頭"],["airspace","chartroles"],"Ebook Nav ch5（Australia）"),
T("lostcauses","Diversions & Lost","Common Causes of Being Lost","幾乎都係人為錯誤：計錯、DG 錯位、var 用反。",["DG 同 compass 未對正","Clipboard／camera 影響 compass","Var／drift 方向加錯","太遲決定 divert"],["lost","uncertain"],"Ebook Nav ch5")
);

// ===================== PART 2：Flight Computer / Worked Examples / Rules of thumb =====================
topics.push(
T("cslide","Flight Computer","Circular Slide Rule","對數刻度，加長度 = 乘，減長度 = 除；10 同 100 同一點。",["Time 喺內圈，dist／speed 喺外圈","10 index = 1／10／100","3 位有效數字","先 mental check 定小數點"],["computer","cdst"],"Ebook Nav ch4"),
T("cdst","Flight Computer","Computer: Dist / Speed / Time","把 time 同 distance 對好，所有 D／S／T／fuel 一次過讀。",["60 min 對 GS = 一小時距離","例：16 nm 喺 10 min → 96 kt","Fuel 同一個做法","Endurance = fuel ÷ rate"],["cslide","dst","fuel"],"Ebook Nav ch4"),
T("ctas","Flight Computer","Computer: TAS Window","將 OAT 對 PA，IAS 內圈讀 TAS 外圈。",["例：IAS 115, −10°C, 12,000 ft → 138 kt","反向：TAS → IAS","要用 CAS 更準","Pressure alt = pressure height"],["tas","pa","cslide"],"Ebook Nav ch4; AAEP TAS exercise"),
T("cconv","Flight Computer","Computer: Unit Indices","每個單位有 index mark：對好已知量，讀另一單位。",["nm／sm／km","m／ft（1 m = 3.28 ft）","kg／lb（1 kg = 2.2 lb）","USG／Imp gal／L"],["units","sg","cslide"],"Ebook Nav ch4"),
T("cwind","Flight Computer","Computer: Wind Side","Compass rose + 滑片（speed arcs、drift lines）+ 透明盤。",["Wind 由 heading 吹去 track","全程用 magnetic 或全程 true","Centre dot = 風嘅起點","先標 wind cross"],["computer","windtri"],"Ebook Nav ch4"),
T("cwindsolve","Flight Computer","Solve HDG & GS","已知 track、TAS、W/V → HDG、GS、drift。",["① 設 wind 方向，標 cross","② Track 對 index","③ 移片使 TAS arc 過 cross","④ 讀 drift line → WCA、GS"],["cwind","corrections"],"Ebook Nav ch4"),
T("cwindfind","Flight Computer","Find W/V in Flight","已知 HDG、TAS、TRK、GS → 推算 W/V。",["Track 對 index，GS 對 dot","由 drift 畫 heading 線","TAS arc 同 drift line 相交","Wind 由 dot 指向交點"],["cwind","windfromfix"],"Ebook Nav ch4"),
T("ccross","Flight Computer","Crosswind Component","跑道方向 vs wind 分解成 head／crosswind。",["Runway 對 index","Square grid 直接讀","≈ sin／cos 角","Aircraft crosswind limit"],["windcomp","cwind"],"Ebook Nav ch4"),
T("rulesthumb","Flight Computer","Rules of Thumb","Mental check 用：60 kt = 1 nm/min；1 USG ≈ 4 L。",["90 kt = 1.5 nm/min","120 kt = 2 nm/min","1 nm ≈ 2 km；1 m ≈ 3.3 ft","°C → °F：× 2 + 30（粗略）"],["dst","units","cslide"],"Ebook BAK ch3"),
T("rpmcheck","Flight Computer","Rough Check Habit","先估大約答案，再用 computer，最後定小數點。",["防 ×10 錯誤","Fuel 例：139 L 唔係 13.9","Mental first","電子計算機亦要估"],["cslide","rulesthumb"],"Ebook Nav ch4"),

T("rule1in60","Worked Examples","Turning Multiples of TE","轉 N × TE 就知幾時再合：1×平行、2×同距、3× 半、4× 三份一。",["1 × TE → parallel","2 × TE → 同距離交返","3 × TE → ½ 距離","4 × TE → ⅓ 距離"],["te","ca","corrections"],"AAEP Nav Info 1 p5"),
T("exA","Worked Examples","1-in-60 Part A","轉 HDG 後幾時／幾遠合返 FPT：先 TE → off track → CA。",["A1 2200；A2 0715","A3 50 nm","A4 drift 8° L","步驟：TE → CA → 距離 → 時間"],["rule1in60","te","ca"],"AAEP 1in60 ans r1"),
T("exB","Worked Examples","1-in-60 Part B","兩個 fix 之後直飛 B：WCA = θ1 + θ2。",["θ1 由 off／dist × 60","θ2 由 off／剩餘 dist × 60","B1 18° L；B2 14° R","Ans B1 jpg 步驟"],["corrections","ca"],"AAEP Ans B1.jpg; Info 2"),
T("exC","Worked Examples","1-in-60 Part C","第一個 fix 同第二個 fix 喺 track 兩邊：off 要相加。",["C1 12° R","C2 9° L","θ1 用 (2+3)=5 nm","θ2 用 3 nm over 30 nm"],["exB","corrections"],"AAEP Ans C1.jpg; Info 2"),
T("exD","Worked Examples","1-in-60 Part D","由 TE 推 TMG、drift、GS，再用 computer 反求 W/V。",["D1 179°M/31 kt","D2 054°M/24 kt","D3 204°M/33 kt","4 步：TE → TMG → GS → wind"],["windfromfix","cwindfind"],"AAEP 1in60 Part D"),
T("exvar","Worked Examples","Variation Exercise","T → M：East 減、West 加；反向相反。",["342T 10E → 332M","167T 8W → 175M","006T 11E → 355M","357T 4W → 001M"],["var","tmvdc"],"AAEP Nav Info 1 / Answers"),
T("extas","Worked Examples","TAS Exercise","CAS + PA + OAT → TAS（computer 窗口）。",["80 kt, 4,000, +10 → 85","95, 12,000, −15 → 113","100, 8,000, −20 → 109","TAS 隨高度＋溫度增加"],["ctas","tas"],"AAEP Answers p1"),
T("exwind","Worked Examples","Wind Drift Exercise","VAR 10°E：TR(T) → TR(M)，再用 computer 求 HDG／GS／drift。",["311/25, TR 114T, TAS 140 → HDG 099, GS 162, 5R","261/18, 210T, 145 → 206, 135, 6L","200/35, 157T, 90 → 165, 64, 18L","用 TR(M) 計"],["cwindsolve","windtri"],"AAEP Answers p2"),
T("expada","Worked Examples","PA / DA Exercise","PA = (1013 − QNH)×30 + elev；DA = PA + 120 × ISA dev。",["例：1000, QNH 1015, 20°C → PA 940, DA 1,766","MSL, 1013, 20°C → DA 600","MSL, 1018, 15°C → PA −150, DA −186","ISA at PA = 15 − 2°C/1000 ft"],["pa","da","pada"],"AAEP PADA ans r2")
);

// ===================== PART 3：Radio aids / GNSS / ENZO / clarifications =====================
topics.push(
T("adfpanel","NDB / ADF","ADF Control Panel & Tuning","Mode：OFF／ADF／ANT／BFO／TEST；Tune → Identify → Test。",["ADF 模式先有方位","ANT 只聽 ident，needle 唔動","BFO 俾無調制 NDB","Test：needle 偏開再自動返"],["ndb","adferr"],"Ebook Nav ch6"),
T("adfmb","NDB / ADF","MB = MH + RB","MB to NDB = HDG + RB；MB from = MB to ± 180°。",["例：MH 340 + RB 075 = MB 055 to","> 360 就減 360","RB 290 = −70（簡寫）","Tail of needle = MB from"],["bearings","rbi"],"Ebook Nav ch6"),
T("adfplot","NDB / ADF","Plot an ADF Bearing","MB 轉 TB 用 aircraft 位置嘅 variation，由 NDB 畫出去。",["TB = MB ± var（aircraft）","例：MB from 150°，var 6°W","→ TB = 150 − 6 = 144°","VOR 就用 station variation"],["adfmb","vorplot","var"],"Ebook Nav ch6"),
T("adfintercept","NDB / ADF","ADF Intercept In / Outbound","保持 intercept HDG，等 needle 跌到 intercept angle 先轉。",["Inbound：head 跌到 ± 角度","Outbound：tail 升到角度","例：MH 010 截 055：−45，等 +45","MH ± RB = MB 檢查"],["homing","adfmb","trackkeep"],"Ebook Nav ch6"),
T("adfstn","NDB / ADF","NDB Station Passage","接近時 needle 愈敏感；掠過時由前掃到後。",["近站穩定 heading","正上方：急速轉 180","旁邊過：慢慢跌","Needle 過 090／270 = abeam"],["ndb","adfintercept"],"Ebook Nav ch6"),
T("nightfx","NDB / ADF","Night Effect (Sky Wave)","Ground wave + sky wave 混合，夜間／日出日落 needle 飄。",["Ionosphere 日 ~30 mi、夜 ~200 mi","加 power 都冇用","Locator 低功率較少","ERSA 有 day／night range"],["propag","adferr"],"Ebook Nav ch6"),
T("coastfx","NDB / ADF","Coastal & Terrain Effects","電波斜過海岸被折射，NDB 睇落較近海岸。",["Coastal refraction","垂直海岸最細誤差","水面 range 大；沙／山細","Mountain effect 反射"],["adferr","ndbrange"],"Ebook Nav ch6"),
T("adfacc","NDB / ADF","Overall ADF Accuracy","喺 rated coverage 內以 ground wave 為主，約 ±5°。",["Sky wave／反射令準確度下降","Tune 錯係大風險","要識 ident","Thunderstorm 會拉 needle"],["adferr","ndbrange"],"Ebook Nav ch6"),
T("vorsys","VOR / DME","VOR System Facts","108–118 MHz VHF，160 channels，ident 1,020 Hz 約每 10 s。",["Reference phase（全向）","Variable phase（旋轉 1,800 rpm）","相位差 = radial","Radial = magnetic bearing from"],["vor","cdi"],"Ebook Nav ch7"),
T("vorcmd","VOR / DME","Command OBS Setting","OBS 設成想飛嘅 track，CDI 就指向要轉嘅一邊。",["Outbound：FROM + OBS = track","Inbound：TO + OBS = track","反向飛要重設 OBS","唔 command 會反方向"],["cdi","tofrom"],"Ebook Nav ch7"),
T("vorplot","VOR / DME","Plot a VOR Position Line","OBS 對中、FROM，讀 radial；轉 true 用 station variation。",["CDI 中 + FROM = radial","Bearing 量度喺 station","Var 用 VOR 附近","NDB 相反：用 aircraft var"],["adfplot","vorvar"],"Ebook Nav ch7; RNAV01 slide"),
T("vorabeam","VOR / DME","VOR Abeam Check","OBS 設成垂直 track 嘅 radial；CDI 中 = abeam。",["例：track 350 → set 260／080","CDI 由 full 偏走到另一邊","±10° 範圍移動","可核對 ETA／GS"],["trackkeep","gscheck"],"Ebook Nav ch7"),
T("vorcone","VOR / DME","Zone of Confusion","飛越 VOR 上空：needle 亂、OFF flag、TO→FROM。",["Cone 隨高度擴大","保持 heading","Needle 穩定要時間","VOR 無 night effect"],["vorerr","cdi"],"Ebook Nav ch7"),
T("vorcover","VOR / DME","Rated Coverage Table (AIP)","VOR／DME 按高度：< 5,000 ft 60 nm … ≥ 20,000 ft 180 nm。",["< 5,000 → 60 nm","5,000– → 90","10,000– → 120","15,000– → 150"],["vorrange","radio"],"Ebook Nav ch7（Australia）"),
T("vorerr2","VOR / DME","VOR Error Budget","Ground ±2°，site ±3°，scalloping ±2°，總計約 ±5°。",["Site effect","Course bending／scalloping","Vertical polarisation：壓 bank 先見","Doppler VOR 減 site error"],["vorerr","adfacc"],"Ebook Nav ch7"),
T("dmesys","VOR / DME","DME System Facts","UHF 960–1,215 MHz，252 channels（1–126 X／Y），同 VOR 配對。",["Interrogator + transponder","Secondary radar 原理","TACAN 都得距離","唔需自己 tune frequency"],["dmeprinc","vor"],"Ebook Nav ch8; RNAV01"),
T("dmeacc","VOR / DME","DME Limitations","最大限制 = slant range；overhead 讀數 = 高度（nm）。",["30,000 ft overhead ≈ 5 nm","50 nm 處誤差細","冇 night effect／mountain effect","高地形可擋 UHF"],["slant","dmegs"],"Ebook Nav ch8"),
T("dmefixes","VOR / DME","DME Fix Techniques","DME arc + radial 成 fix；兩個 DME 圓相交都得。",["Semicircular PL","Abeam 時 DME 對 track 冇用","兩 VOR/DME 圓 = fix","Rate of closure = GS 估算"],["dmefix","dmegs"],"Ebook Nav ch8"),
T("vorarc","VOR / DME","VOR/DME Arc Approach","YPAD VOR RWY 12：10 DME arc → R-304 → final 124°。",["DME 同 altitude 表（3° path）","5 nm：1,550 ft","MAPt 後 R-140° 復飛","Chart 係 Airservices Australia"],["vor","dmesys","rod"],"RNAV01 VOR approach slide"),
T("ilschart","ILS","Reading ILS／GLS Charts","Chart 有 DME vs altitude 表，用嚟 cross-check glide path。",["YSSY：5.3 nm → 1,700 ft","3° glide path","MAX／MIN IAS","PRM ops 要 dual VHF"],["glideslope","rod"],"RNAV02 YSSY ILS／GLS slides"),
T("gnsstab","GNSS","Constellation Comparison","GPS 24 sats／20,200 km／55°；GLONASS 19,100 km／65°；Galileo 30。",["GPS：6 planes，11 h 58 m","GLONASS：3 planes，11 h 15 m","Galileo：3 planes，14 h","L1 1,575 MHz（GPS）"],["gnss","gpsseg"],"RNAV02 slide table"),
T("alm","GNSS","Almanac vs Ephemeris","Almanac = 長期粗略；Ephemeris = 短期精確衛星位置。",["Almanac：邊度搵衛星","Ephemeris：精確位置同修正","Nav message 50 bps","C/A code 每 ms 重複"],["gpsseg","trilat"],"Ebook Nav ch9"),
T("maskang","GNSS","Mask Angle","低仰角衛星被忽略；典型 7.5°。",["路徑穿過更多大氣","誤差大","Receiver 自動／固定","減少可用衛星數"],["gpserr","pdop"],"Ebook Nav ch9"),
T("fde","GNSS","RAIM: FD vs FDE","FD 偵測錯誤需 5 sats；FDE 排除需 6 sats。",["4 sats = 有 fix 但無 RAIM","Baro aiding 補一粒","G1000 有 RAIM prediction","唔可靠 → 用其他 nav"],["raim","baro"],"Ebook Nav ch9; RNAV02 slide"),
T("noraim","GNSS","Operations Without RAIM","失 RAIM > 10 min 要通知 ATC，用其他導航核對。",["偏離 > 2 nm 要報","DR mode 超過 1 min 要報","RAIM 返先重新用作 primary","Aus rules"],["raim","fde"],"Ebook Nav ch9（Australia）",true),
T("gpsbudget","GNSS","GPS Error Budget","位置誤差 ≈ pseudorange 誤差 × PDOP：C/A 29 m、DGPS 3 m、P 17 m。",["Ionosphere／troposphere","Multipath、ephemeris","Clock、receiver noise","Ebook 表同 slide 數字唔同"],["sps","gpserr","pdop"],"Ebook Nav ch9",true),
T("gnssbarrier","GNSS","Why GPS Needed Augmentation","民航要求 accuracy、availability、integrity、coverage。",["Availability = 可用時間比例","Integrity = 可信度","RAIM、GBAS、baro aiding","SBAS／WAAS（FAA）"],["raim","dgps","baro"],"RNAV02 slide"),
T("rnavappr","GNSS","RNAV (GNSS) Approach Chart","YKSC RNAV-Z RWY 19：LNAV／VNAV 340 ft、LNAV 600 ft。",["IAF → IF → FAF → MAPt","3° path，TCH 50 ft","Baro-VNAV 要溫度範圍 −5～+61°C","Missed approach DCT KSCNH"],["rnav","gnsstab"],"RNAV02 slide YKSC"),
T("gbas","GNSS","GBAS / GLS","地面站量度誤差，提供 precision approach (GLS) 同 positioning。",["YSSY GLS RWY 16R chart","需要近機場","Precision approach service","唔同 SBAS（衛星廣播）"],["dgps","ilschart"],"RNAV02 slide"),
T("awrctl","Weather Radar","AWR Controls & Safety","Gain、Test、WX／TURB／MAP、Tilt；輻射有危險。",["Tilt ±15°","Scan ±90° 左右","Flat-plate antenna 窄 beam","唔好對住 refuelling／人"],["awr"],"RNAV02 ch7"),
T("awrband","Weather Radar","AWR Band Names (Clarify)","Slide 寫 G 5.44／I 9.33 GHz；標準 band 名稱係 C／X。",["~9 GHz ≈ 3 cm（X-band）","5.4 GHz = C-band","Slide 嘅字母我唔確定","以 GHz 數字記"],["awr","awrctl"],"RNAV02 slide",true),

T("dacoms","Charts & VFR Nav","DA40 Nav Equipment","G1000 PFD／MFD、ACAS、Mode S transponder、AFCS。",["PFD + MFD","ACAS 交通警示","Mode S transponder","Auto pilot controls"],["prep","cta"],"ENZO Nav day 1／OLD 14"),
T("leaning","VFR Procedures","Engine Leaning (ENZO)","由 rich 向 lean 到粗糙再微 rich；Peak EGT = best economy。",["Slide：Peak EGT + 55 = best power","Slide：建議 lean 到 peak + 30","Lean 慳油","按 POH 為準"],["fuel","cruisechk"],"ENZO Nav OLD 14",true),
T("fuelpol","VFR Procedures","Part 91 Fuel Plan (ENZO)","DA40：46 L／hr，taxi 5 L，final reserve 30 min。",["Fuel 表：cruise／alternate／reserve","Final reserve 30 min flow","Contingency 0%（slide）","Full tank ~190 L"],["fuel","navlog"],"ENZO Nav OLD 14",true),
T("navdocs","VFR Procedures","Documents to Carry","Weather、NOTAM、charts、MR、licence、flight plan、W&B。",["ERSA、VTC、VNC","Maintenance release","SARTIME 通知","IMSAFE 先"],["prep","ersa"],"ENZO Nav OLD 14"),
T("navtem","VFR Procedures","TEM on a Nav Flight","Threat／error：traffic、weather、PRD／CTA、fatigue。",["Birds／traffic → lookout","Non-VMC → check forecast","PRD／CTA → situational awareness","Fatigue → hydration"],["workcycle","imc"],"ENZO Nav OLD 14"),
T("holdfaa","NDB / ADF","Holding Entry (FAA Confirm)","FAA 三區：Parallel／Teardrop／Direct；≤14,000 ft 1 min，以上 1.5 min。",["Parallel：先 parallel outbound","Teardrop：30° 或以下","Direct：右轉入 pattern","Holding speed 200／230／265 KIAS"],["holding","holdentry"],"Ebook ATP Test Prep ch6"),
T("padacheck","Altimetry","PA vs DA Wording Check","Slide 句「ISA+ 時 PA 較高」同例子（DA 3,976 > PA 3,496）矛盾。",["Hot：DA > PA","Cold：DA < PA","DA = PA + 120 × ISA dev","用例子公式為準"],["da","pa","expada"],"AAEP Nav Info 1 p6–7",true),
T("sartimerules","VFR Procedures","SARTIME & Flight Notification","Search 開始時間；到達要 cancel。",["Remote 必須 plan","Cancel 要記得","飛行通知內容","AIP ENR 1.10"],["remote","navdocs"],"ENZO Nav OLD 14")
);

// ===================== CARDS =====================
cards.push(
// --- time
C("dtg","🕐","How do you write 3:21 pm on 17 March as a six-figure date-time group?","171521 — day 17, then 24-hour time 1521.","6 位：日 + 24 hr 時間。"),
C("dtg","📅","What is an eight-figure date-time group, and where do you see it?","Month, day, hour, minute (MMDDHHMM), e.g. 3:45 pm on 30 September is 09301545. You see it on NOTAMs.","8 位多咗月份；NOTAM 常見。"),
C("dtg","🗓️","What does a ten-figure group add?","The year in front, e.g. 0209301545. It is used for the period of currency of aviation information.","10 位 = 加年份。"),
C("arc2time","🧮","Convert 45° of longitude to time.","45° ÷ 15°/hr = 3 hr. Every 15° of longitude is one hour.","Arc ÷ 15 = 小時。"),
C("arc2time","🧮","Convert 5 hr 35 min of time to arc. Show steps.","5 hr × 15 = 75°; 35 min ÷ 4 = 8°, remainder 3 min × 15 = 45′. Total 83°45′ of arc.","小時 ×15；分鐘 ÷4 取整，餘數 ×15 = 分角。"),
C("arc2time","🧮","How many minutes of time is 1° of longitude?","4 minutes, because 360° ÷ 24 hr = 15°/hr and 60 ÷ 15 = 4.","1° = 4 min；1′ = 4 s。"),
C("lmt","⏱️","Longitude 138°15′W: what is LMT relative to UTC? Give the rule.","9 hr 13 min behind UTC, so UTC = LMT + 9:13. Rule: longitude west, UTC best; longitude east, UTC least.","西經：UTC = LMT + 偏移。"),
C("lmt","⏱️","If it is noon LMT at Sydney (151°18′E), is noon earlier or later at Canberra to the west?","Later. Canberra is about 2.2° west, roughly 8 min 52 s later. West of you means later sun.","愈西愈遲。"),
C("stdtime","🌏","What is standard time versus LMT?","Standard time is one agreed time for a whole zone, based on a central meridian. LMT belongs to a single meridian.","Zone 共用，唔係單一 meridian。"),
C("stdtime","🌏","At 0400 UTC, what are EST, CST and WST in Australia?","1400 EST (+10), 1330 CST (+9:30), 1200 WST (+8).","+10／+9:30／+8。"),
C("stdtime","☀️","How does summer time affect UTC conversion?","The clock goes forward one hour, e.g. EST becomes ESuT = UTC + 11. UTC itself never changes.","UTC 永遠唔變。"),
C("dateline","🌐","Crossing the International Date Line eastbound — add or subtract a day?","Subtract a day eastbound; add a day westbound. LMT is the same either side but the date differs.","向東減，向西加。"),
C("twilight","🌅","When does civil twilight begin and end?","Morning civil twilight begins when the sun's centre is 6° below the horizon; evening civil twilight ends at the same angle. Daylight lasts from beginning to end of civil twilight.","6° 以下；daylight 即係 civil twilight 之間。"),
C("twilight","🌅","Why is twilight shorter in the tropics?","The sun rises and sets almost vertically, so it crosses the 6° band quickly; at high latitudes the path is oblique, so twilight is long.","路徑近垂直，所以短。"),
C("bodeod","🌇","How do you use the BoD/EoD graph?","Enter with the date, move to the latitude, read LMT, then convert to UTC and standard time. Remember the result is for sea level.","日期 → 緯度 → LMT → 轉 UTC。"),
C("bodeod","🌇","Plan arrival: EoD 0930 UTC, buffer 20 min, flight time 4 h 20 min. Latest ETD?","ETA = 0930 − 0020 = 0910 UTC. ETD = 0910 − 0420 = 0450 UTC (Australian VFR day rules; legal minimum is 10 min before EoD).","倒數：EoD − buffer − flight time。"),
C("timeprob","🧭","Give a safe method for time problems.","Convert everything to UTC, do the arithmetic including the date, then convert back to the required local or standard time. Label each line.","一律 UTC 計。"),
C("timeprob","🧭","Depart Melbourne 150120 EST; flight time 4 hr; what is ETA in WST?","EST is UTC+10, so departure is 141520 UTC. Add 4 hr: ETA 141920 UTC. WST is UTC+8, so ETA is 150320 WST.","先轉 UTC，加時間，再轉 WST（+8）。"),
// --- charts
C("projprob","🗺️","Why can't a chart be perfect?","A sphere cannot be flattened without distortion of shape, area, distance or angle, so the chart-maker chooses which property to preserve.","球面壓平必變形。"),
C("chartprops","📐","List the ideal properties of an aeronautical chart.","True shapes; conformal (correct angles); constant scale; great circles straight; rhumb lines straight. The most vital is conformality.","最重要係 conformal。"),
C("chartprops","📐","Can great circles and rhumb lines both be straight on one chart?","No — they are almost always different lines, so only one can be straight. Lambert makes great circles nearly straight.","兩者唔可以同時直。"),
C("conformal","📐","What does conformal mean?","Angles and bearings measured on the chart equal those on the earth, because parallels and meridians cross at 90°.","角度正確。"),
C("mercator","🧭","Describe the Mercator projection.","A cylinder tangent at the equator: meridians are equally spaced straight lines, parallels get further apart with latitude, rhumb lines are straight. It is conformal.","Cylinder 切赤道；rhumb 直線。"),
C("mercator","🗺️","Which Australian VFR chart uses transverse Mercator, and why different?","The Visual Terminal Chart (VTC). The cylinder is wrapped around a chosen central meridian, so a small area is very accurate.","VTC = Transverse Mercator。"),
C("stdpar","📏","How many standard parallels on a Lambert chart, and effect on scale?","Two. Scale is slightly compressed between them and slightly expanded outside; over a single chart the scale is treated as constant.","兩條；之間 compress，之外 expand。"),
C("lambert","🗺️","On a Lambert chart, how do meridians and a rhumb line look?","Meridians are straight lines converging to the nearer pole; a rhumb line is a curve, concave towards the nearer pole.","Meridian 向極收；rhumb 彎。"),
C("convergence","📐","Where do you measure a track direction on a Lambert chart, and why?","At the mid-meridian between the two points, because a straight line crosses meridians at changing angles and the mid-meridian direction equals the rhumb direction.","喺 mid-meridian 量。"),
C("convergence","📐","When may you ignore the difference between great circle and rhumb line?","Over short distances, less than about 200 nm; the rhumb line then lies slightly on the equatorial side.","<200 nm 差異可略。"),
C("chartroles","🗺️","Name the VFR charts and their scales (Australia).","WAC 1:1,000,000; VNC 1:500,000; VTC 1:250,000; ERC-L has no fixed scale.","WAC／VNC／VTC。"),
C("chartroles","🗺️","Which chart do you use in a terminal area with a VTC?","The VTC only, instead of WAC, VNC and ERC, because it shows topography and airspace together.","終端區只用 VTC。"),
C("relief","⛰️","How is relief shown on a WAC?","Contours, hypsometric tints (green, yellow, then browns), spot heights, and hill shading or hachuring.","Contour + 色 + spot + shading。"),
C("relief","⛰️","What does a spot height in brackets mean?","The elevation is interpreted from contours, not from an accurate ground survey. Spot heights show ground, not tree top.","括號 = 推算。"),
C("plotter","📏","How do you use a plotter to measure true track?","Estimate the direction first, put the plotter centre on the mid-meridian crossing, align its grid with the chart's north-south lines, read the arrow side of travel.","先估大約方向防錯。"),
C("plotter","📏","With no scale line, how do you measure distance?","Compare with the latitude graduations, not longitude: 1′ of latitude = 1 nm, 1° = 60 nm.","用緯度刻度。"),
C("chartorient","👀","How should you orient the chart in the cockpit?","With the required track running bottom to top, so features to the right of track on the chart appear to your right.","Track 向上。"),
C("chartorient","👀","How often should checkpoints be selected and how are they identified?","About one good checkpoint every 10–15 min (20–30 nm at 120 kt); look for a definite feature at a definite time and confirm with nearby features.","10–15 min 一個。"),
C("poslines","📍","What is a position line and how does it make a fix?","A line along which the aircraft is known to be at a given time; two lines crossing at a good angle give a fix.","兩線相交 = fix。"),
C("gscheck","⏱️","Two position lines 7 nm apart are crossed 6 min apart. GS?","GS = 7 nm ÷ 6 min × 60 = 70 kt. The lines should be roughly perpendicular to track.","距離 ÷ 時間 ×60。"),
C("departure","🛫","How do you estimate ATD if you set heading 4 nm from the field at 0234 UTC with GS 120 kt?","4 nm at 2 nm/min is 2 min, so ATD = 0232 UTC.","距離 ÷ GS 倒推。"),
C("departure","🛫","Name three things to do after setting initial heading.","Log ATD and revise ETAs; check final ETA is at least 10 min before last light; make the departure report if required. Then check DG against compass.","ATD、ETA、報告。"),
C("cruisechk","✅","What do you check on reaching cruise level?","Area QNH set, cruise power and trim, a CLEAROF check, TAS check against plan, and then obtain the first fix early.","QNH、power、CLEAROF。"),
C("descentcalc","📉","Descend from 8,500 ft to 1,500 ft AAL at an aerodrome elevation of 1,230 ft, 500 fpm, GS 157 kt. Distance out?","Height = 8,500 − (1,230 + 1,500) = 5,770 ft. Time = 5,770 ÷ 500 = 11.5 min. Distance = 157 × 11.5 ÷ 60 ≈ 30 nm.","高度 ÷ ROD = 時間；× GS/60。"),
C("descentcalc","📉","Required ROD: 4,500 ft to lose in 8 min?","4,500 ft ÷ 8 min ≈ 560 fpm.","高度 ÷ 時間。"),
C("lowlevel","🏞️","How does low-level navigation differ from high-level?","Limited field of view, so more checkpoints, read chart to ground, use tall features, keep brief logs and avoid low jet routes.","視野窄，點要多。"),
C("reducedvis","🌫️","What should you do when visibility reduces?","Decide early to turn back or divert, slow down to a precautionary configuration, add checkpoints near track. Map reading is not practical above BKN cloud.","早回頭，減速。"),
C("remote","🏜️","Name key points in remote-area planning.","Full nav and fuel plan with flight plan and SARTIME, buffer at least 20–30 min before last light, ELT or HF, survival kit, current charts.","計劃、buffer、ELT／HF。"),
C("elt","📻","What does an ELT do?","It transmits a distress signal so a search can be concentrated in a small area. The ebook cites 121.5 and 243.0 MHz; modern beacons use 406 MHz (I believe — verify).","縮窄搜索範圍。"),
C("lanes","🛣️","What are the rules for a lane of entry?","Stay at or below the upper altitude limit, keep accurate track, keep to the right side, maintain a sharp lookout and decide early if weather is marginal.","限高、靠右、準 track。"),
C("lostcauses","❓","Give common causes of becoming lost.","Calculation errors, DG not aligned with compass, magnetic items near compass, variation applied wrongly, drift in wrong sense, wrong fix, late diversion.","人為錯誤為主。"),
C("lostcauses","❓","How often should DG and compass be checked?","Every 10–15 min in steady, unaccelerated flight.","每 10–15 min。")
);

cards.push(
// --- flight computer
C("cslide","🧮","How does a circular slide rule multiply and divide?","The scales are logarithmic, so adding lengths multiplies and subtracting lengths divides. Time is on the inner scale, distance and speed on the outer.","對數刻度：加長度 = 乘。"),
C("cslide","🧮","What three steps for every slide-rule answer?","Do a rough mental check, set up the slide rule for three significant figures, then place the decimal point using the check.","估算 → 讀數 → 小數點。"),
C("cdst","🧮","At GS 140 kt, how far in 30 min? And how long for 65 nm?","30 min: 70 nm. 65 nm: 65 ÷ 140 × 60 ≈ 28 min. Set 60 min against 140 kt, then read.","60 min 對 GS。"),
C("cdst","🧮","You covered 16 nm in 10 min. GS, and distance in the next 5 min?","GS = 16 × 60 ÷ 10 = 96 kt. Next 5 min: 8 nm.","16 nm／10 min → 96 kt。"),
C("cdst","⛽","Fuel 98 L, burn 21 L/hr. Endurance?","98 ÷ 21 = 4.67 hr = 4 hr 40 min (280 min).","Fuel ÷ rate。"),
C("cdst","⛽","4 L burnt in 10 min. Fuel flow and burn in the next 25 min?","Fuel flow = 4 × 6 = 24 L/hr. Next 25 min: 24 × 25 ÷ 60 = 10 L.","10 min × 6 = 1 hr。"),
C("ctas","✈️","How do you find TAS on the computer?","Set OAT against pressure altitude in the TAS window, then read TAS on the outer scale against IAS on the inner scale.","OAT 對 PA，IAS → TAS。"),
C("ctas","✈️","IAS 115 kt, −10 °C, 12,000 ft pressure altitude: TAS?","About 138 kt.","高度愈高 TAS 愈大。"),
C("ctas","✈️","TAS 184 kt at 8,000 ft and +10 °C: what IAS?","About 160 kt. Reverse the same setting: read IAS on the inner scale against TAS on the outer.","反向讀。"),
C("cconv","🔄","How do you convert units on the computer?","Set the known value on the inner scale against its index on the outer scale, then read the answer against the target unit's index.","對 index，讀 index。"),
C("cconv","🔄","Convert 10 nm to statute miles and kilometres.","About 11.5 sm and 18.5 km (1 nm = 1,852 m).","1 nm = 1.852 km。"),
C("cconv","🔄","Convert 37 USG of AVGAS (SG 0.71) to litres, lb and kg.","37 USG ≈ 140 L ≈ 220 lb ≈ 99.5 kg (1 USG = 3.785 L; mass = SG × litres).","L = USG × 3.785。"),
C("cwind","🧭","What is on the wind side of a computer?","A rotatable compass rose, a transparent plotting disc with centre dot, and a slide with speed arcs and radial drift lines.","Rose、disc、slide。"),
C("cwind","🧭","Why use only magnetic or only true on the wind side?","Mixing references gives wrong answers; apply variation to track and wind first, then the answer is magnetic heading.","一致用 M。"),
C("cwindsolve","🧭","Solve: TAS 174 kt, track 290°M, wind 240°M/40. Heading and GS?","Set wind 240 and mark 40 kt; track 290 under index; slide TAS 174 under the cross; drift line gives 10° right, so HDG 280°M; GS ≈ 145 kt.","Wind 吹右 → heading 向左。"),
C("cwindsolve","🧭","Which side do you turn the heading — into or away from wind?","Into the wind: heading = track − drift (right drift) or + (left drift). WCA is equal and opposite to drift.","向風偏。"),
C("cwindfind","🌬️","How do you find wind in flight with the computer?","Set track under the index and GS under the centre dot, mark the drift line for heading, mark TAS along it; wind is from the dot to this mark.","Track + GS + HDG + TAS。"),
C("cwindfind","🌬️","HDG 138°M, TAS 120, TRK 146°M, GS 120 kt: drift?","Drift is 8° right (track is 8° right of heading).","Track − HDG。"),
C("ccross","💨","Wind 050°M/30 kt, runway 180°M. Components?","Angle 130°: headwind negative (tailwind ≈ 19 kt), crosswind ≈ 23 kt. Check with ERSA wind component table.","角度 130°，sin／cos。"),
C("rulesthumb","💡","At 90 kt, how many nm per minute?","1.5 nm/min, so time = distance × ⅔.","90 kt = 1.5 nm/min。"),
C("rulesthumb","💡","Quick conversions to estimate: nm to km; metres to feet.","1 nm ≈ 2 km (exact 1.852); 1 m ≈ 3 ft + 10% (3.28).","粗估。"),
C("rulesthumb","⚖️","What are SG values for AVGAS, AVTUR, water, oil?","AVGAS 0.71, AVTUR 0.8, water 1.0, oil 0.89 (kg per litre).","1 L AVGAS ≈ 0.71 kg。"),
C("rpmcheck","🧠","Why do a rough check before using the computer?","It places the decimal point and catches factor-of-10 errors, e.g. ordering 13.9 L instead of 139 L.","防 ×10。"),
// --- worked examples
C("rule1in60","⏳","What happens if you turn 1 × TE, 2 × TE, 3 × TE and 4 × TE?","1× parallel to track; 2× regain track in the same distance flown; 3× in ½ distance; 4× in ⅓ distance.","1× 平行，2× 同距。"),
C("rule1in60","⏳","Turn 1½ × TE: when do you regain track?","In 2 × the distance flown (1⅓ → 3×; 1¼ → 4×).","1½ → 2× 距離。"),
C("exA","📐","A1: heading changed 9° R at 2140, TE 6° after 30 nm at 2130. When regain FPT?","GS = 30 nm in 10 min = 180 kt. Off track = 3 nm. CA = 9 − 6 = 3°; distance = 3 × 60 ÷ 3 = 60 nm = 20 min. Time 2200.","TE → CA → 時間。"),
C("exA","📐","A3: 5 nm off track at 50 nm TE ≈ 6°; turn 12° L. Distance to regain?","CA = 12 − 6 = 6°. Distance = 5 × 60 ÷ 6 = 50 nm.","CA = 轉角 − TE。"),
C("exA","📐","A4: HDG 093°M, FPT 090°M, 5 nm off after 60 nm. Drift?","TE = 5°, so TMG = 085°M. Drift = 093 − 085 = 8° left.","TMG = FPT − TE；drift = HDG − TMG。"),
C("exB","📐","B1: 3 nm off at 30 nm, then 6 nm off after another 30 nm. Heading change to B?","θ1 = 3 ÷ 30 × 60 = 6°. θ2 = 6 ÷ 30 × 60 = 12°. WCA = θ1 + θ2 = 18° L.","θ1 + θ2。"),
C("exB","📐","B2 answer and the method.","14° R: θ1 from the track error (9°) plus θ2 = 5 nm ÷ 60 nm × 60 = 5°.","兩個角相加（推導係我嘅理解）。"),
C("exC","📐","C1: 2 nm left of track at A, then 3 nm right 50 nm later; 30 nm to B. Heading change?","θ1 = (2+3) ÷ 50 × 60 = 6°; θ2 = 3 ÷ 30 × 60 = 6°; WCA = 12° R.","off 兩邊相加。"),
C("exC","📐","C2 answer?","9° L (θ1 = 4 nm ÷ 40 nm × 60 = 6° plus θ2 = 3° from 2 nm in 40 nm).","6° + 3°。"),
C("exD","💨","D1: HDG 122°M, TAS 165, FPT 120°M, 4 nm off after 30 nm in 12 min. Find W/V.","TE = 4 ÷ 30 × 60 = 8°; TMG = 112°M; drift 10° L; GS = 30 × 60 ÷ 12 = 150 kt. Computer: wind ≈ 179°M/31 kt.","4 步：TE → TMG → GS → wind。"),
C("exD","💨","D2: HDG 082°M, FPT 080°M, TAS 178, 5 nm off after 50 nm in 19 min. Wind?","TMG 086°M; GS = 50 × 60 ÷ 19 = 158 kt; wind ≈ 054°M/24 kt.","同 D1 步驟。"),
C("exD","💨","D3: HDG 330°M, FPT 330, TAS 150, 6 nm off after 40 nm in 14 min. Wind?","TE = 9°; TMG 339°M; GS = 171 kt; wind ≈ 204°M/33 kt.","GS 由時間距離計。"),
C("exvar","🧭","342°T, variation 10°E. Magnetic heading?","332°M — east is least (subtract east).","E 減 W 加（T → M）。"),
C("exvar","🧭","046°T → 034°M. Variation?","12° E (magnetic is less, so variation is east).","M 較細 = E。"),
C("exvar","🧭","006°T with 11°E?","355°M (6 − 11 = −5 → 355).","負數加 360。"),
C("extas","✈️","CAS 95, PA 12,000, OAT −15: TAS?","About 113 kt.","高 + 冷 → TAS 比 CAS 大。"),
C("extas","✈️","CAS 110, PA 9,000, +20: TAS?","About 131 kt.","暖空氣 TAS 更大。"),
C("exwind","💨","W/V 311°M/25, track 114°T, VAR 10°E, TAS 140. HDG(M), GS, drift?","TR(M) = 114 − 10 = 104°M. Computer gives HDG 099°M, GS 162 kt, drift 5° R.","用 TR(M) 計。"),
C("exwind","💨","W/V 095°M/25, TR 099°T, TAS 60 kt, VAR 10°E: result?","HDG 091°M, GS 35 kt, drift 2° L — near headwind.","頭風 GS 細。"),
C("exwind","💨","W/V 200°M/35, TR 157°T, TAS 90, VAR 10°E: result?","HDG 165°M, GS 64 kt, drift 18° L — strong crosswind.","偏流大。"),
C("expada","🌡️","Elevation 1,000 ft, QNH 1015, OAT +20. PA and DA?","PA = (1013 − 1015) × 30 + 1,000 = 940 ft. ISA at PA = 15 − 1.88 = 13.12 °C; ISA dev +6.88; DA = 940 + 120 × 6.88 ≈ 1,766 ft.","PA 先，後 ISA dev。"),
C("expada","🌡️","MSL, QNH 1018, OAT +15. PA and DA?","PA = (1013 − 1018) × 30 = −150 ft; ISA = 15.3; dev −0.3; DA = −150 − 36 = −186 ft.","QNH 高 → PA 負。"),
C("padacheck","❗","Hot day: is DA higher or lower than PA?","Higher (ISA+ gives DA > PA); the AAEP slide wording is contradicted by its own Cooma example (DA 3,976 vs PA 3,496).","Hot → DA 高。")
);

cards.push(
// --- ADF
C("adfpanel","📻","State the safe ADF tuning routine.","Select ADF mode, tune the frequency, identify the Morse ident, then use TEST — the needle should deflect and return. Say: selected, identified, tested.","Tune → Identify → Test。"),
C("adfpanel","📻","Why avoid leaving the ADF in ANT mode?","In ANT only the sense antenna is used, so the needle stays still without any warning. Use it only to improve audio ident.","ANT 無方位，needle 唔動。"),
C("adfpanel","📻","What is BFO for?","It adds a tone to identify NDBs transmitting unmodulated carrier. Rarely needed in Australia; do not leave it on for navigation.","BFO 俾無調制嘅 NDB。"),
C("adfmb","🧭","MH 340°M, ADF RB 075. MB to the NDB and MB from?","MB to = 340 + 075 = 055°M; MB from = 055 + 180 = 235°M.","MH + RB。"),
C("adfmb","🧭","RB 290, MH 120°M: MB to?","120 + 290 = 410 − 360 = 050°M. Shorthand: RB 290 = −70, so 120 − 70 = 050.","超 360 減 360。"),
C("adfplot","📍","MH 280°M, RB 050, variation 6°W at the aircraft. Plot which true bearing?","MB to = 330°M; MB from = 150°M; TB from = 150 − 6 = 144°T. Plot from the NDB at 144°T.","Var 用 aircraft 位置。"),
C("adfplot","📍","Which variation for NDB bearings but another for VOR?","NDB/ADF: variation at the aircraft (bearing measured at aircraft). VOR: variation at the station.","NDB aircraft；VOR station。"),
C("adfintercept","🎯","Intercept inbound track 055 with MH 010. What do you wait for?","Track minus 45°, so wait for RB +045 (needle head falling to 045), then turn onto track with drift allowance.","−45 等 +45。"),
C("adfintercept","🎯","Outbound intercept: MH 340 to join track 280 outbound. Which sign?","Track plus 60°; watch the tail rise to −60 (RB 300), then turn left onto track.","Tail 升到角度。"),
C("adfintercept","🎯","What is the check formula when tracking?","MH ± RB = MB. For example MH 060 + RB 355 (−5) = MB 055 to the NDB.","MH + RB = MB。"),
C("homing","🧭","Why is homing inefficient in a crosswind?","Keeping the needle on the nose makes the aircraft curve downwind; tracking with a drift correction gives a straight path.","Homing 會彎。"),
C("adfstn","📍","How do you recognise station passage and time it?","The needle swings rapidly from the nose to the tail; take the time when it falls through about 090/270 (adjust by WCA).","needle 過 090／270。"),
C("nightfx","🌙","What causes night effect and why can't more power cure it?","Sky waves reflected from the ionosphere mix with the ground wave; more power raises both waves so the ratio stays the same.","Sky wave 比例唔變。"),
C("nightfx","🌙","When is night effect worst?","At night, and around sunrise and sunset when the ionosphere changes quickly; ERSA gives shorter night ranges.","日出日落最差。"),
C("coastfx","🌊","Describe coastal refraction.","NDB waves cross a coastline at an angle and bend, so the NDB appears closer to the coast than it is. Worst for oblique crossing.","NDB 睇落近咗海岸。"),
C("coastfx","⛰️","What is mountain effect?","Reflected waves from terrain mix with the direct wave, giving fluctuating bearings until the area is passed.","反射 → needle 飄。"),
C("adfacc","🎯","How accurate is NDB/ADF in rated coverage?","About ±5° when the signal is mostly ground wave; worse with sky wave or reflections.","±5°。"),
C("ndbrange","📡","What affects NDB range?","Transmitter power, frequency (lower is farther), terrain (water good, dry sand poor), emission type and interference; and day versus night.","Power、頻率、地形。"),
C("ndb","📡","What are NDB frequency band and typical power?","Mostly 200–400 kHz (LF/MF), power 100 W to 3 kW; locators under 100 W with range 25–30 nm.","LF／MF；locator 低功率。"),
// --- VOR/DME
C("vorsys","📡","How does a VOR give a radial?","It transmits an omnidirectional reference phase and a rotating variable phase at 1,800 rpm; the phase difference equals the aircraft's magnetic bearing from the station.","相位差 = radial。"),
C("vorsys","📡","VOR frequency band and ident?","108–118 MHz VHF (160 channels at 50 kHz); Morse ident modulated at 1,020 Hz about every 10 s.","VHF；ident 1,020 Hz。"),
C("vorcmd","🎛️","What is command OBS setting?","Set the OBS to the track you want to fly, with the TO/FROM flag matching your direction; then turning toward the CDI needle always corrects toward track.","向 needle 轉就啱。"),
C("vorcmd","🎛️","Turning around on the same radial, what happens to the display?","It doesn't change because position is the same; but the needle now points away from track, so reset OBS to the reciprocal to restore command sense.","要重設 OBS。"),
C("vorplot","📍","How do you get a VOR position line?","Centre the CDI with FROM; read the OBS as the radial; convert to true using the variation at the station and plot from the VOR.","FROM 對中。"),
C("cdi","🎛️","How many degrees per dot and full-scale?","2° per dot; full scale (5 dots) is 10° or more each side — 20° total arc.","每點 2°；滿格 10°。"),
C("vorabeam","📍","Tracking 350 with VOR off to the right: how check abeam?","Set the radial perpendicular to track (260), then the CDI centres at abeam and moves to the other side; note time.","設垂直 radial。"),
C("vorcone","⚠️","What happens passing over a VOR?","Zone (cone) of confusion: needle oscillates, OFF flag appears and TO changes to FROM; the cone grows with height — hold heading until it settles.","保持 heading。"),
C("vorcover","📡","VOR/DME rated coverage at 12,000 ft and 4,000 ft? (Australia)","12,000 ft: 120 nm; 4,000 ft: 60 nm.","<5k 60；5–10k 90；10–15k 120。"),
C("vorcover","📡","Why does VOR coverage depend on altitude but not night?","It is VHF line-of-sight (range limited by height and terrain) and not reflected by ionosphere, so no night effect.","視線。"),
C("vorerr2","⚠️","VOR error budget?","Ground station ±2°, site effect up to ±3°, scalloping/bending ±2°; aggregate rarely exceeds ±5°.","總計 ±5°。"),
C("vorerr2","⚠️","What is Doppler VOR for?","It almost eliminates site-effect errors using a large antenna array; the aircraft receiver is the same.","減 site error。"),
C("vorcheck","🔧","VOT check results?","CDI centres on 360 FROM or 180 TO within ±4° (FAA). Ground checkpoint ±4°, airborne ±6°, dual VOR ±4°.","FAA 數字。"),
C("dmesys","📶","How does DME measure distance?","The aircraft interrogator sends pulse pairs; the ground transponder replies; the time delay is converted to slant range using the speed of light.","Pulse 來回時間。"),
C("dmesys","📶","DME frequency and channels?","UHF 960–1,215 MHz, 252 channels; normally paired with a VOR so selecting the VOR tunes the DME.","UHF；配 VOR。"),
C("dmeacc","📏","What is the slant range error overhead?","The DME shows height in nm: 30,000 ft overhead reads slightly under 5 nm. Error falls with distance.","Overhead = 高度。"),
C("dmefixes","📍","How can DME give a fix?","With a radial from the same VOR, or two circular position lines from two DME stations; a DME abeam gives no along-track info.","Radial + DME。"),
C("dmefixes","📍","How do you get GS from DME?","Track directly to or from the station; GS = change in DME distance ÷ time; e.g. 35 to 25 nm in 5 min = 120 kt.","距離差 ÷ 時間。"),
C("vorarc","🛬","Describe the YPAD VOR RWY 12 approach in a few words.","From the 10 DME arc, join R-304 inbound, track 124° to the runway; a DME/altitude table gives the 3° path; missed approach track R-140.","Arc → radial → final。"),
C("vorarc","🛬","What does the chart table DME 5 nm 1,550 ft mean?","On the 3° path the aircraft should be near 1,550 ft at 5 DME; use it to cross-check descent.","DME 對高度。"),
C("ilschart","🛬","Why does an ILS chart show a DME/altitude table?","To cross-check the glide path against DME distance (e.g. YSSY 5.3 nm ≈ 1,700 ft).","Cross-check path。"),
C("ils","🛬","Localiser beam width and full-scale?","The localiser is aligned with the runway centreline; the course width is narrow, and full deflection happens at about ±2.5° in the slide.","Slide：±2.5°。"),
C("rod","📉","3° glide path at GS 140 kt: ROD?","ROD = 5 × 140 = 700 fpm (exact: 140 ÷ 60 × 318 ≈ 740).","3° → 5 × GS。"),
// --- GNSS
C("gnsstab","🛰️","Compare GPS, GLONASS and Galileo orbital data.","GPS: 24 sats, 20,200 km, 55°, 6 planes, 11 h 58 min. GLONASS: 24, 19,100 km, 65°, 3 planes, 11 h 15 min. Galileo: 30, 23,222 km, 56°, 3 planes, 14 h.","高度／傾角／平面數。"),
C("gnsstab","🛰️","GPS L1 and L2 frequencies?","L1 = 1,575 MHz and L2 = 1,227 MHz (UHF).","SPS 只用 L1。"),
C("gnss","🛰️","How many satellites for a 2D and 3D fix?","3 for 2D with known altitude; 4 for 3D, because the fourth also solves receiver clock error.","3／4 粒。"),
C("alm","🛰️","What is the difference between almanac and ephemeris?","Almanac is long-term coarse orbit data telling where to look; ephemeris is short-term precise position and corrections for one satellite.","Almanac 粗，ephemeris 精。"),
C("maskang","📐","What is a mask angle?","The minimum elevation angle; satellites lower than it (typically 7.5°) are ignored because the long path through atmosphere gives larger errors.","低仰角唔用。"),
C("fde","🛰️","How many satellites for RAIM FD and FDE?","5 for fault detection; 6 for fault detection and exclusion. With 4 you have a fix but no integrity check.","5 detect；6 exclude。"),
C("fde","🛰️","What if fewer than 5 satellites are visible?","Barometric aiding can substitute for one satellite range, allowing RAIM with fewer satellites.","Baro aiding。"),
C("noraim","⚠️","What if RAIM is lost for more than 10 minutes? (Aus)","Treat GPS as unreliable, use other navigation, tell ATC if in controlled airspace; use GPS as primary again only after notifying ATC.","唔可再信 GPS。"),
C("gpsbudget","📊","Typical total GPS position error (ebook)?","C/A code ≈ 29 m, DGPS ≈ 3 m, P-code ≈ 17 m (assuming PDOP 3).","與 slide ±30／±6 m 並存。"),
C("pdop","📉","PDOP limits?","Below 6 en route; below 3 for non-precision approach.","<6 enroute；<3 NPA。"),
C("gnssbarrier","🛰️","Why was GPS not approved as sole means?","Concerns over accuracy, availability, integrity and coverage; solved with RAIM, GBAS, baro aiding.","Availability／integrity。"),
C("gnssbarrier","🛰️","Define availability and integrity.","Availability is the fraction of time a system is usable; integrity is trust in the correctness of its information.","可用時間比 vs 可信度。"),
C("rnavappr","🛬","Read the YKSC RNAV (GNSS) RWY 19 minima.","LNAV/VNAV 340 ft (319 above threshold), LNAV 600 ft (576), circling 840/1,070 ft by category.","Chart 數字。"),
C("rnavappr","🛬","What do LNAV/VNAV approaches need beyond GNSS?","A vertical path from the barometric altimeter, with temperature limits (−5 to +61 °C on this chart).","Baro-VNAV 受溫度限。"),
C("gbas","🛰️","What is GBAS?","Ground stations at known positions measure GNSS errors and send corrections for precision approach (GLS) and RNAV positioning.","地面修正。"),
C("rnav","🛰️","RNAV versus RNP.","RNAV allows flying any desired path using waypoints; RNP adds on-board performance monitoring and alerting, permitting narrower obstacle clearance.","RNP = RNAV + monitoring。"),
C("wgs84","🌍","Why must charts and GPS use the same datum?","Different datums place the same coordinates at different spots; GPS uses WGS 84.","Datum 要一致。"),
C("awrctl","🌧️","Name the AWR control settings.","Gain, Test, WX/TURB, MAP and Tilt; tilt ±15°, antenna stabilised in pitch and roll.","Tilt ±15°。"),
C("awrctl","☢️","Safety rules for weather radar on the ground?","Don't operate near other aircraft being refuelled, fuel tanks, hangars or people; radiation can harm or ignite fuel.","地面唔好開。"),
C("awr","🌧️","What can't weather radar detect?","Clear-air turbulence — no water droplets to return.","CAT 睇唔到。"),
C("awrband","🌧️","The slide lists G 5.44 GHz and I 9.33 GHz — standard names?","Slide letters unclear; 5.4 GHz is C-band and about 9.3 GHz is X-band. Most radars use ~9 GHz (3 cm).","唔確定字母，記 GHz。"),
// --- ENZO & others
C("dacoms","🛩️","What navigation equipment is in the DA40?","G1000 (PFD and MFD), ACAS traffic advisory, Mode S transponder and autopilot (AFCS).","G1000 + ACAS。"),
C("leaning","⛽","How do you lean the engine for economy (ENZO slide)?","Lean from rich until rough, then enrich slightly to smooth running. Peak EGT is best economy; slide says lean to about peak + 30. Follow the POH.","以 POH 為準。"),
C("fuelpol","⛽","DA40 fuel numbers in ENZO's plan?","Flow 46 L/hr (12 USG), taxi/start 5 L, final reserve 30 min flow (6 USG), full tank 50 USG (190 L).","slide 數字。"),
C("navdocs","📁","List documents to carry on a nav flight.","Weather and NOTAMs, charts (ERSA, VTC, VNC), maintenance release, licence and medical, flight plan, W&B and performance, SARTIME/flight notification.","文件清單。"),
C("sartimerules","🆘","What is SARTIME?","The time after which search action starts if the flight is not closed; you must cancel on arrival.","到埗要 cancel。"),
C("navtem","⚠️","Give two nav-flight threats and mitigations.","Traffic and birds: lookout, ACAS, radio. Weather into non-VMC: check forecast and have a plan to divert.","Threat → mitigation。"),
C("holdfaa","🔁","FAA holding entries?","Parallel, teardrop (30° or less to hold course) and direct, by sector relative to the inbound course; 1 min legs up to 14,000 ft, 1.5 min above.","三種；FAA。"),
C("holding","🔁","Why 1 min inbound leg and rate-one turns?","Standard pattern: right turns, rate one (3°/s) and 1 minute still-air leg; ICAO 1.5 min above 14,000 ft.","標準 pattern。")
);

// ===================== LINKS =====================
links.push(
L("arc2time","timearc","1 hr = 15° 係 time／arc 換算基礎"),
L("lmt","stdtime","Standard time 係將 LMT 統一做 zone 時間"),
L("stdtime","timeprob","換 zone 先可以做 UTC 計算"),
L("dateline","timeprob","過 date line 要改日期，否則 ETA 日子錯"),
L("twilight","bodeod","Daylight 起止 = civil twilight 邊界"),
L("bodeod","dtg","ETD／ETA 計算用 date-time group 記錄"),
L("bodeod","lowlevel","日光不足令低空導航更危險"),
L("projprob","chartprops","唔可能完美 → 要揀最重要嘅 property"),
L("chartprops","conformal","Conformal 係最重要嘅 property"),
L("conformal","lambert","Lambert 保持角度，所以適合航圖"),
L("mercator","rhumb","Mercator 上 rhumb line 係直線"),
L("stdpar","scale","兩條 standard parallels 令 scale 近乎恆定"),
L("convergence","greatcircle","Lambert 近似直線 = GC，meridian 收窄"),
L("convergence","plotter","要喺 mid-meridian 量 track"),
L("plotter","var","量到 true，要加／減 variation 先成 magnetic"),
L("chartroles","airspace","VNC／VTC／ERC 先有 airspace 資料"),
L("relief","lowlevel","地形圖解讀幫低空認路"),
L("chartorient","poslines","由 map reading 取得 position line"),
L("poslines","gscheck","兩條 PL 之間距離／時間 = GS"),
L("gscheck","vorabeam","VOR abeam 時間可用作 GS 檢查"),
L("departure","navlog","ATD 要寫入 nav log 再改 ETA"),
L("cruisechk","trackkeep","首個 fix 檢查 track 同 GS"),
L("descentcalc","tod","Descent 計算結果 = top of descent 位置"),
L("reducedvis","imc","能見度差可能演變成 inadvertent IMC"),
L("remote","elt","Remote 區要靠 ELT 縮窄搜索"),
L("lostcauses","lost","分析成因可避免迷路"),
L("lanes","airspace","Lane of entry 係避開 control zone 嘅 VFR 通道"),
L("cslide","cdst","對數刻度令 D／S／T 一次過解"),
L("ctas","tas","Computer 窗口將 CAS／IAS 轉做 TAS"),
L("cconv","sg","單位換算要識 SG"),
L("cwind","cwindsolve","同一個 wind side 解 HDG／GS"),
L("cwindsolve","windtri","Computer 係 wind triangle 嘅機械版"),
L("cwindfind","windfromfix","由 fix 資料反推風"),
L("ccross","windcomp","Computer 方格解 head／crosswind"),
L("rulesthumb","rpmcheck","Rules of thumb 用嚟做 mental check"),
L("rule1in60","te","轉倍數由 TE 同 1 in 60 派生"),
L("exA","ca","Part A 練習 CA 同距離"),
L("exD","cwindfind","Part D 最後一步用 computer 反求風"),
L("exwind","cwindsolve","Wind exercise 用 wind side 解"),
L("exvar","var","變 T→M 練習"),
L("expada","pada","PA／DA 練習"),
L("padacheck","da","DA 同 PA 嘅方向要澄清"),
L("adfpanel","ndb","正確 tune 同 ident 先有可靠方位"),
L("adfmb","bearings","MB = MH + RB 係 bearing 基本關係"),
L("adfplot","var","ADF 轉 TB 用 aircraft variation"),
L("adfplot","vorplot","兩者 variation 位置相反"),
L("adfintercept","adfmb","MH ± RB = MB 作截 track 檢查"),
L("nightfx","propag","Sky wave 混 ground wave = night effect"),
L("coastfx","adferr","折射係 ADF 限制之一"),
L("adfacc","nightfx","Sky wave 令準確度由 ±5° 變差"),
L("vorsys","vor","Phase difference 決定 radial"),
L("vorcmd","cdi","Command OBS 令 CDI 方向直覺"),
L("vorabeam","trackkeep","Abeam 時間檢查 progress"),
L("vorcone","vorerr","Cone of confusion 係系統局限"),
L("vorcover","vorrange","高度決定 VHF 視線範圍"),
L("vorerr2","vorerr","合併誤差約 ±5°"),
L("dmesys","dmeprinc","UHF pulse 來回 = 距離"),
L("dmeacc","slant","Slant range 係 DME 主要限制"),
L("dmefixes","dmefix","DME + radial 或兩個 DME 圓"),
L("vorarc","dmesys","Arc approach 靠 DME 距離"),
L("ilschart","rod","Chart 嘅高度表同 ROD 公式互相核對"),
L("gnsstab","gpsseg","Constellation 屬於 space segment"),
L("alm","trilat","Ephemeris 精確位置先可三角定位"),
L("maskang","gpserr","低仰角增加 atmospheric 誤差"),
L("fde","raim","FD／FDE 係 RAIM 兩個層次"),
L("noraim","fde","失 RAIM 就失 integrity 保證"),
L("gpsbudget","pdop","總誤差 = range error × PDOP"),
L("gnssbarrier","dgps","GBAS／DGPS 係解決 integrity／accuracy"),
L("rnavappr","rnav","RNAV approach 係 RNAV 應用"),
L("gbas","dgps","GBAS 係 differential 一種"),
L("awrctl","awr","控制同安全屬 AWR 系統"),
L("holdfaa","holdentry","FAA 教材確認 entry 三區概念"),
L("dacoms","prep","DA40 設備係 nav prep 一部分"),
L("leaning","fuelpol","Leaning 影響 fuel flow 假設"),
L("navdocs","sartimerules","文件包括 flight notification")
);

// ===================== ANIMATIONS =====================
anims.push(
{title:"UTC ↔ Local：Time Zone、LMT、Date Line", hint:"拉 UTC 時間同經度", build(box,H){
  const svg=H.svg(box,700,300), say=H.note(box), el=H.el;
  const X=lon=>30+(lon+180)/360*640;
  const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
  for(let i=-12;i<=12;i++){
    const x0=Math.max(30,X(i*15-7.5)),x1=Math.min(670,X(i*15+7.5));
    el("rect",{x:x0,y:95,width:Math.max(1,x1-x0),height:90,fill:(i%2?"#1e293b":"#243449"),stroke:"#334155"},svg);
    if(i%2===0)txt((x0+x1)/2,88,"#94a3b8",(i>0?"+":"")+i,11);
  }
  const night1=el("rect",{y:95,height:90,fill:"#0b1220","fill-opacity":0.65},svg);
  const night2=el("rect",{y:95,height:90,fill:"#0b1220","fill-opacity":0.65},svg);
  el("line",{x1:X(180),y1:90,x2:X(180),y2:190,stroke:"#f43f5e","stroke-width":2,"stroke-dasharray":"4 3"},svg);
  el("line",{x1:X(-180),y1:90,x2:X(-180),y2:190,stroke:"#f43f5e","stroke-width":2,"stroke-dasharray":"4 3"},svg);
  txt(670,205,"#f43f5e","Date line 180°",11,"end");
  txt(X(0),205,"#94a3b8","0° Greenwich",11);
  const hk=el("circle",{cx:X(114),cy:140,r:4,fill:"#34d399"},svg);txt(X(114),160,"#34d399","HK 114°E",11);
  const sun=el("circle",{cy:75,r:9,fill:"#fbbf24"},svg);
  const ac=el("circle",{cy:140,r:7,fill:"#38bdf8",stroke:"#fff"},svg);
  const t1=txt(30,235,"#e2e8f0","",15,"start"),t2=txt(30,258,"#f59e0b","",15,"start"),t3=txt(30,281,"#34d399","",15,"start");
  let utc=3,lon=114;
  const wrap=a=>{while(a>180)a-=360;while(a<-180)a+=360;return a};
  const fmt=h=>{const d=Math.floor(h/24);const m=Math.round((h-24*d)*60);let hh=Math.floor(m/60),mm=m%60;if(hh>=24){hh-=24;}return String(hh).padStart(2,"0")+":"+String(mm).padStart(2,"0")+(d>0?" (+1 day)":d<0?" (−1 day)":"")};
  function shade(r,a,b){r.setAttribute("x",X(a));r.setAttribute("width",Math.max(0,X(b)-X(a)))}
  function upd(){
    const sub=wrap((12-utc)*15);sun.setAttribute("cx",X(sub));
    const nc=wrap(sub+180),l=nc-90,r=nc+90;
    if(l<-180){shade(night1,-180,r);shade(night2,l+360,180)}
    else if(r>180){shade(night1,l,180);shade(night2,-180,r-360)}
    else{shade(night1,l,r);shade(night2,0,0)}
    ac.setAttribute("cx",X(lon));
    const off=Math.round(lon/15), lmt=utc+lon/15, std=utc+off;
    t1.textContent="UTC "+fmt(utc)+"    經度 "+Math.abs(lon)+"°"+(lon>=0?"E":"W");
    t2.textContent="LMT = UTC + "+(lon/15).toFixed(2)+" hr → "+fmt(lmt);
    t3.textContent="Zone 約 UTC"+(off>=0?"+":"")+off+" → 標準時間 "+fmt(std);
    say(lon>=0?"經度向東 → 時間較早（UTC + 值）：Longitude east, UTC least":"經度向西 → 時間較遲：Longitude west, UTC best");
  }
  H.slider(box,"UTC 小時",0,23.75,3,v=>{utc=v;upd()},0.25);
  H.slider(box,"經度 °（東＋／西－）",-180,180,114,v=>{lon=v;upd()});
  upd();
}},

{title:"Chart Projection：Mercator vs Lambert 變形", hint:"拉緯度，同 standard parallel", build(box,H){
  const svg=H.svg(box,700,330), say=H.note(box), el=H.el;
  const rad=d=>d*Math.PI/180;
  const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
  const px=lat=>40+lat/80*320, py=k=>300-Math.min(k,6)/6*250;
  el("line",{x1:40,y1:300,x2:370,y2:300,stroke:"#64748b"},svg);el("line",{x1:40,y1:300,x2:40,y2:45,stroke:"#64748b"},svg);
  txt(205,322,"#94a3b8","Latitude 0° → 80°",12);txt(22,170,"#94a3b8","scale k",12);
  el("line",{x1:40,y1:py(1),x2:370,y2:py(1),stroke:"#475569","stroke-dasharray":"4 3"},svg);txt(380,py(1)+4,"#94a3b8","k = 1",11,"start");
  const mp=el("polyline",{fill:"none",stroke:"#fb7185","stroke-width":3},svg);
  const lp=el("polyline",{fill:"none",stroke:"#34d399","stroke-width":3},svg);
  txt(300,60,"#fb7185","Mercator k = sec φ",13,"end");txt(300,80,"#34d399","Lambert (2 std parallels)",13,"end");
  const mark=el("line",{y1:45,y2:300,stroke:"#fbbf24","stroke-width":2},svg);
  const circR=el("circle",{cx:480,cy:190,r:14,fill:"none",stroke:"#94a3b8","stroke-dasharray":"3 3"},svg);
  const circL=el("circle",{cx:620,cy:190,r:14,fill:"none",stroke:"#94a3b8","stroke-dasharray":"3 3"},svg);
  const cm=el("circle",{cx:480,cy:190,r:14,fill:"#fb7185","fill-opacity":0.5,stroke:"#fb7185"},svg);
  const cl=el("circle",{cx:620,cy:190,r:14,fill:"#34d399","fill-opacity":0.5,stroke:"#34d399"},svg);
  txt(480,65,"#fb7185","Mercator",14);txt(620,65,"#34d399","Lambert",14);
  const rm=txt(480,300,"#e2e8f0","",12),rl=txt(620,300,"#e2e8f0","",12);
  let lat=45,s1=30;
  const kM=p=>1/Math.cos(rad(p));
  function kL(p,a,b){
    const t=q=>Math.tan(Math.PI/4+rad(q)/2);
    const n=Math.log(Math.cos(rad(a))/Math.cos(rad(b)))/Math.log(t(b)/t(a));
    return Math.cos(rad(a))*Math.pow(t(a),n)/(Math.cos(rad(p))*Math.pow(t(p),n));
  }
  function upd(){
    const s2=s1+15;
    let a="",b="";
    for(let p=0;p<=80;p+=2){a+=px(p)+","+py(kM(p))+" ";b+=px(p)+","+py(kL(p,s1,s2))+" "}
    mp.setAttribute("points",a);lp.setAttribute("points",b);
    mark.setAttribute("x1",px(lat));mark.setAttribute("x2",px(lat));
    const m=kM(lat),l=kL(lat,s1,s2);
    cm.setAttribute("r",14*m);cl.setAttribute("r",14*l);
    rm.textContent="k = "+m.toFixed(2)+"，面積 ×"+(m*m).toFixed(1);
    rl.textContent="k = "+l.toFixed(2)+"，面積 ×"+(l*l).toFixed(1);
    say("Std parallels "+s1+"° / "+s2+"°：Lambert 喺之間略細、之外略大；Mercator 愈高緯度愈放大，但兩者都 conformal（圓保持圓形）");
  }
  H.slider(box,"緯度 °",0,80,45,v=>{lat=v;upd()});
  H.slider(box,"Lambert 低 standard parallel °（高 = +15°）",10,50,30,v=>{s1=v;upd()});
  upd();
}},

{title:"Flight Computer：滑尺式 D／S／T", hint:"拉 GS 同時間，睇內圈轉動", build(box,H){
  const svg=H.svg(box,700,350), say=H.note(box), el=H.el;
  const CX=210,CY=175,RO=150,RI=108;
  const ang=v=>360*(Math.log10(v)-1);
  const pt=(a,r)=>[CX+Math.sin(a*Math.PI/180)*r,CY-Math.cos(a*Math.PI/180)*r];
  const txtIn=(p,x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||11,"text-anchor":an||"middle"},p);e.textContent=t;return e};
  el("circle",{cx:CX,cy:CY,r:RO,fill:"#1e293b",stroke:"#38bdf8","stroke-width":2},svg);
  const labs=[10,12,15,20,25,30,40,50,60,70,80,90];
  for(let v=10;v<100;v++){const a=ang(v),p1=pt(a,RO),p2=pt(a,RO-(labs.indexOf(v)>=0?10:5));el("line",{x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1],stroke:"#38bdf8"},svg)}
  labs.forEach(v=>{const q=pt(ang(v),RO-20);txtIn(svg,q[0],q[1]+4,"#38bdf8",v)});
  const inner=el("g",{},svg);
  el("circle",{cx:CX,cy:CY,r:RI,fill:"#0f172a",stroke:"#f59e0b","stroke-width":2},inner);
  for(let v=10;v<100;v++){const a=ang(v),p1=pt(a,RI),p2=pt(a,RI-(labs.indexOf(v)>=0?10:5));el("line",{x1:p1[0],y1:p1[1],x2:p2[0],y2:p2[1],stroke:"#f59e0b"},inner)}
  labs.forEach(v=>{const q=pt(ang(v),RI-20);const e=txtIn(inner,q[0],q[1]+4,"#f59e0b",v);e.setAttribute("transform","rotate("+ang(v)+" "+q[0]+" "+(q[1]+4)+")")});
  const m60=pt(ang(60),RI+4);
  const mk60=el("circle",{cx:m60[0],cy:m60[1],r:5,fill:"#fff"},inner);
  txtIn(svg,CX,CY-6,"#94a3b8","外圈：distance／speed",11);txtIn(svg,CX,CY+10,"#f59e0b","內圈：time (min)",11);
  const rd=el("line",{stroke:"#34d399","stroke-width":3},svg);
  const gsm=el("line",{stroke:"#fff","stroke-width":2,"stroke-dasharray":"3 3"},svg);
  const t1=txtIn(svg,430,110,"#e2e8f0","",16,"start"),t2=txtIn(svg,430,140,"#38bdf8","",16,"start"),t3=txtIn(svg,430,170,"#f59e0b","",16,"start"),t4=txtIn(svg,430,200,"#34d399","",18,"start");
  txtIn(svg,430,240,"#94a3b8","口訣：60 min 對 GS，",13,"start");txtIn(svg,430,260,"#94a3b8","time 揀咩，外圈就讀 distance。",13,"start");
  let gs=140,tm=30;
  function upd(){
    const rot=ang(gs)-ang(60);
    inner.setAttribute("transform","rotate("+rot+" "+CX+" "+CY+")");
    const d=gs*tm/60;
    const pa=pt(ang(gs),RO),pb=pt(ang(tm)+rot,RO+8);
    gsm.setAttribute("x1",CX);gsm.setAttribute("y1",CY);gsm.setAttribute("x2",pa[0]);gsm.setAttribute("y2",pa[1]);
    rd.setAttribute("x1",CX);rd.setAttribute("y1",CY);rd.setAttribute("x2",pb[0]);rd.setAttribute("y2",pb[1]);
    t1.textContent="① 60 min 對住 GS "+gs+" kt";
    t2.textContent="② 內圈 "+tm+" min …";
    t3.textContent="③ 外圈讀出 distance";
    t4.textContent="= "+(Math.round(d*10)/10)+" nm";
    say("Log 加減 = 乘除：time "+tm+" min × GS "+gs+" ÷ 60 = "+(Math.round(d*10)/10)+" nm。先估：每 min 約 "+(Math.round(gs/60*10)/10)+" nm");
  }
  H.slider(box,"GS kt",40,300,140,v=>{gs=v;upd()});
  H.slider(box,"Time min",5,99,30,v=>{tm=v;upd()});
  upd();
}},

{title:"ADF：RBI vs RMI 指針讀法", hint:"拉 heading 同 NDB 方位", build(box,H){
  const svg=H.svg(box,700,320), say=H.note(box), el=H.el;
  const R=115,cy=165,cxA=175,cxB=525;
  const txt=(p,x,y,c,t,sz)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":"middle"},p);e.textContent=t;return e};
  const pt=(cx,a,r)=>[cx+Math.sin(a*Math.PI/180)*r,cy-Math.cos(a*Math.PI/180)*r];
  function card(g,cx,labels){
    el("circle",{cx,cy,r:R,fill:"#0f172a",stroke:"#64748b","stroke-width":2},g);
    for(let a=0;a<360;a+=30){const p=pt(cx,a,R),q=pt(cx,a,R-9),l=pt(cx,a,R-24);el("line",{x1:p[0],y1:p[1],x2:q[0],y2:q[1],stroke:"#94a3b8"},g);txt(g,l[0],l[1]+4,"#94a3b8",labels?labels[a/30]:String(a),11)}
  }
  txt(svg,cxA,35,"#38bdf8","RBI（fixed card）：指針 = Relative Bearing",14);
  txt(svg,cxB,35,"#a78bfa","RMI（card 隨 heading 轉）：指針 = Magnetic Bearing",14);
  card(svg,cxA,["0","30","60","90","120","150","180","210","240","270","300","330"].map((x,i)=>i%3===0?["HDG","R","tail","L"][i/3]:x));
  const gB=el("g",{},svg);
  card(gB,cxB,["N","30","60","E","120","150","S","210","240","W","300","330"]);
  [[cxA],[cxB]].forEach(a=>{el("path",{d:"M"+a[0]+","+(cy-14)+" L"+(a[0]+9)+","+(cy+12)+" L"+a[0]+","+(cy+6)+" L"+(a[0]-9)+","+(cy+12)+"Z",fill:"#e2e8f0"},svg)});
  const nA=el("line",{stroke:"#f59e0b","stroke-width":4,"marker-end":"url(#adfm)"},svg),tA=el("line",{stroke:"#f59e0b","stroke-width":2,"stroke-dasharray":"4 3"},svg);
  const nB=el("line",{stroke:"#f59e0b","stroke-width":4},svg),tB=el("line",{stroke:"#f59e0b","stroke-width":2,"stroke-dasharray":"4 3"},svg);
  const hb=el("polygon",{points:"0,0",fill:"#34d399"},svg);
  H.marker(svg,"adfm","#f59e0b");
  const hd=txt(svg,cxB,cy-R-8,"#34d399","",13);
  const r1=txt(svg,350,285,"#e2e8f0","",15),r2=txt(svg,350,306,"#fbbf24","",15);
  let hdg=40,mb=120;
  const wrap=a=>((a%360)+360)%360;
  function setL(l,cx,a,r){const p=pt(cx,a,r);l.setAttribute("x1",cx);l.setAttribute("y1",cy);l.setAttribute("x2",p[0]);l.setAttribute("y2",p[1])}
  function upd(){
    const rb=wrap(mb-hdg);
    setL(nA,cxA,rb,R-8);setL(tA,cxA,rb+180,R-30);
    gB.setAttribute("transform","rotate("+(-hdg)+" "+cxB+" "+cy+")");
    setL(nB,cxB,mb-hdg,R-8);setL(tB,cxB,mb-hdg+180,R-30);
    const p=pt(cxB,0,R+2);hb.setAttribute("points",(p[0]-6)+","+(p[1]-10)+" "+(p[0]+6)+","+(p[1]-10)+" "+p[0]+","+p[1]);
    hd.textContent="HDG "+String(Math.round(hdg)).padStart(3,"0")+"°M";
    r1.textContent="RBI 讀 RB "+String(Math.round(rb)).padStart(3,"0")+"；RMI 頭讀 MB to "+String(Math.round(mb)).padStart(3,"0")+"°，尾 = MB from "+String(Math.round(wrap(mb+180))).padStart(3,"0")+"°";
    r2.textContent="MB = MH + RB = "+Math.round(hdg)+" + "+Math.round(rb)+" = "+Math.round(wrap(hdg+rb));
    say("RBI 要自己加 heading；RMI 直接讀 magnetic bearing（尾 = 你喺 NDB 嘅 radial 方向）");
  }
  H.slider(box,"Heading °M",0,359,40,v=>{hdg=v;upd()});
  H.slider(box,"MB to NDB °M",0,359,120,v=>{mb=v;upd()});
  upd();
}},

{title:"NDB／VOR 交叉定位：Position Lines", hint:"拉飛機位置同 bearing 誤差", build(box,H){
  const svg=H.svg(box,700,360), say=H.note(box), el=H.el;
  const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
  el("rect",{x:15,y:15,width:490,height:330,fill:"#0f172a",stroke:"#334155"},svg);
  txt(30,34,"#94a3b8","N ↑",12,"start");
  const S1=[150,90],S2=[400,110];
  el("polygon",{points:"150,78 160,98 140,98",fill:"#f59e0b"},svg);txt(150,72,"#f59e0b","NDB",12);
  el("rect",{x:392,y:102,width:16,height:16,fill:"#a78bfa"},svg);txt(400,96,"#a78bfa","VOR",12);
  const w1=el("polygon",{fill:"#f59e0b","fill-opacity":0.25},svg),w2=el("polygon",{fill:"#a78bfa","fill-opacity":0.25},svg);
  const l1=el("line",{stroke:"#f59e0b","stroke-width":2},svg),l2=el("line",{stroke:"#a78bfa","stroke-width":2},svg);
  const ac=el("circle",{r:7,fill:"#38bdf8",stroke:"#fff"},svg);
  const t1=txt(520,80,"#f59e0b","",14,"start"),t2=txt(520,110,"#a78bfa","",14,"start"),t3=txt(520,150,"#e2e8f0","",14,"start"),t4=txt(520,180,"#fbbf24","",14,"start");
  txt(520,230,"#94a3b8","Fix = 兩條 position line 相交",12,"start");
  txt(520,250,"#94a3b8","交角愈近 90° 愈準；",12,"start");txt(520,270,"#94a3b8","bearing 誤差令交點變成一個區域。",12,"start");
  let ax=260,ay=270,err=5;
  const brg=(s)=>{const a=Math.atan2(ax-s[0],-(ay-s[1]))*180/Math.PI;return (a+360)%360};
  function wedge(s,b,e){
    const L=Math.hypot(ax-s[0],ay-s[1])+60;
    const pa=[s[0]+Math.sin((b-e)*Math.PI/180)*L,s[1]-Math.cos((b-e)*Math.PI/180)*L];
    const pb=[s[0]+Math.sin((b+e)*Math.PI/180)*L,s[1]-Math.cos((b+e)*Math.PI/180)*L];
    return s[0]+","+s[1]+" "+pa[0]+","+pa[1]+" "+pb[0]+","+pb[1];
  }
  function upd(){
    const b1=brg(S1),b2=brg(S2);
    ac.setAttribute("cx",ax);ac.setAttribute("cy",ay);
    l1.setAttribute("x1",S1[0]);l1.setAttribute("y1",S1[1]);l1.setAttribute("x2",ax);l1.setAttribute("y2",ay);
    l2.setAttribute("x1",S2[0]);l2.setAttribute("y1",S2[1]);l2.setAttribute("x2",ax);l2.setAttribute("y2",ay);
    w1.setAttribute("points",wedge(S1,b1,err));w2.setAttribute("points",wedge(S2,b2,err));
    let cut=Math.abs(b1-b2);cut=cut>180?360-cut:cut;if(cut>90)cut=180-cut;
    t1.textContent="NDB：MB from "+String(Math.round(b1)).padStart(3,"0")+"°";
    t2.textContent="VOR：radial "+String(Math.round(b2)).padStart(3,"0")+"°";
    t3.textContent="交角 "+Math.round(cut)+"°";
    t4.textContent=cut<30?"交角太細：fix 唔可靠":cut<60?"一般":"好 fix（近 90°）";
    say("兩條 PL 相交 = fix；誤差 ±"+err+"°（ADF 約 ±5°，VOR 約 ±5°）令位置變成一個區域，交角細時區域拉長");
  }
  H.slider(box,"飛機 X",40,480,260,v=>{ax=v;upd()});
  H.slider(box,"飛機 Y",150,330,270,v=>{ay=v;upd()});
  H.slider(box,"Bearing 誤差 ±°",0,10,5,v=>{err=v;upd()});
  upd();
}}
);

Cadet.extend("nav",{topics:topics,cards:cards,links:links,anims:anims,src:"補漏：Ebook Nav ch1–9 · AAEP NAV Info 1／2、答案 · RNAV01／02 slide 原圖 · ENZO Nav OLD ppt · BAK ch3 · ATP ch6"});
})();
