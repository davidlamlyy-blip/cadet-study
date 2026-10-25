// Navigation 科（nav）。來源見 coverage/nav.md
(function(){
const T=(id,g,t,d,pts,rel,src,check)=>({id:"nav."+id,g,t,d,pts,rel:rel.map(r=>r.indexOf(".")<0?"nav."+r:r),src,check:!!check});
const C=(topic,e,q,a,zh)=>({e,q,a,zh,topic:"nav."+topic,st:"ok"});
Cadet.add({
  key:"nav", name:"Navigation", emoji:"🧭", color:"#a78bfa",
  src:"Airspace GNAV01/02 · RNAV01/02 · Compass & VFR Nav · AAEP NAV · ENZO Nav · Ebook Navigation (Aviation Theory Centre) · ATP Test Prep ch2",
  topics:[
  // ===== Earth & Position
  T("earth","Earth & Position","Earth Shape","Earth 係 ellipsoid（兩極扁），導航當 perfect sphere。",["Equatorial dia 12751 km","Polar dia 12713 km","Maps / GPS 要用 ellipsoid","日常原理當球體"],["greatcircle","wgs84"],"GNAV01 ch1"),
  T("greatcircle","Earth & Position","Great Circle","切開地球成兩半嘅圓，兩點間最短路線。",["Equator + 所有 meridian 都係","最短距離、慳油慳時間","方向要不斷改","Parallel（除 Equator）係 small circle"],["rhumb","latlong"],"GNAV01 ch1"),
  T("rhumb","Earth & Position","Rhumb Line","切每條 meridian 角度相同嘅線，方向恆定。",["Constant track 易飛","比 great circle 長","除正南北東西，會螺旋向極點","Parallel 係 rhumb line"],["greatcircle","lambert"],"GNAV01 ch1"),
  T("latlong","Earth & Position","Latitude & Longitude","用角度定位：Lat 由 Equator 起，Long 由 Prime Meridian 起。",["Lat 0–90 N/S","Long 0–180 E/W","Prime Meridian = Greenwich","Meridian 指 true N-S"],["nm","timearc"],"GNAV01 ch1"),
  T("nm","Earth & Position","Nautical Mile","地心 1 分角對應嘅弧長；1° = 60 nm。",["1 nm = 1852 m = 1.852 km","1 nm = 1.15 statute mile","沿 meridian 量 lat 即 nm","高緯度 1° long 距離變短"],["latlong","units","1in60"],"GNAV01 ch2"),
  T("timearc","Earth & Position","Time & Arc","地球 24h 轉 360°，即 15° = 1 hr，1° = 4 min。",["East 時間較早（加）","West 時間較遲（減）","UTC 係全球基準","Date line 喺太平洋"],["utc","daylight"],"Ebook Nav ch2"),
  T("utc","Earth & Position","UTC & Local Time","UTC 係參考時間；local = UTC ± zone offset。",["Flight plan / ETA 用 UTC","Local = UTC + 東 / − 西","HK = UTC+8","SARTIME 亦用 UTC"],["timearc","navlog"],"Ebook Nav ch2; ENZO Nav log"),
  T("daylight","Earth & Position","Sunrise, Last Light","VFR 要計 last light，日落後仍有 twilight。",["Last light 限制 VFR 日間飛行","Nav log 要寫 Last Light","Darker at ground earlier","Tropics twilight 好短"],["utc","prep"],"Ebook Nav ch2; ENZO Nav log; Nav checklist"),
  // ===== Direction
  T("tmvdc","Direction","True / Magnetic / Compass","四個北：True N、Magnetic N、Compass N，逐層轉換。",["T → V → M → D → C","Chart 用 True","Compass 指 Compass N","Var 加 Dev 先由 T 到 C"],["var","dev","thdw"],"GNAV01 ch3 (T V M D C)"),
  T("var","Direction","Magnetic Variation","True N 同 Magnetic N 嘅夾角，視乎地點。",["West is Best, East is Least","T − E = M；T + W = M","Agonic line = Var 0","Magnetic pole 緩慢移動"],["tmvdc","isogonic","dev"],"GNAV01 ch3; ENZO Nav day 1; AAEP exercise"),
  T("isogonic","Direction","Isogonic / Agonic Lines","連接相同 Var 嘅線叫 isogonic；Var=0 叫 agonic。",["Chart 上有標示","VTC 上 VOR 有當地 Var","Var 隨年份變","Station Var vs Aircraft Var 要分"],["var","vorvar"],"GNAV01 ch3; RNAV01 (VOR Var question)"),
  T("dev","Direction","Compass Deviation","飛機內電路同金屬令 compass 偏差，叫 Deviation。",["M → C 之間嘅誤差","Compass correction card 提供","隨 heading 變","Compass swing 量度同修正"],["tmvdc","swing","compass"],"GNAV01 ch3; GNAV02 ch4"),
  T("thdw","Direction","Track, Heading, Drift, WCA","Track = 飛去邊；Heading = 機頭指邊；差即 drift。",["Drift 由 wind 引起","WCA = 抵消 drift 嘅角度","Heading 要向 wind 方向偏","Track 用 TMG（made good）"],["windtri","1in60","tmvdc"],"GNAV01 ch3; Compass & VFR Nav"),
  T("bearings","Direction","Relative Bearing & QDM etc.","RB 由機頭順時針量；MB = MH + RB。",["QDM 磁方位 to station","QDR 磁方位 from station","QUJ true to；QTE true from","Reciprocal = ±180°"],["rbi","vor"],"GNAV01 ch3 slides"),
  T("swing","Direction","Compass Swing","喺一系列 heading 量 deviation、修正、記錄 residual。",["量度 deviation","修正（compensate）","記 residual dev 入 card","磁性物件會影響"],["dev"],"GNAV02 ch4"),
  // ===== Compass errors
  T("compass","Compass Errors","Standby Compass","獨立簡單磁羅盤，靠 Earth 磁場水平分量。",["無電源獨立","Float magnet + liquid","受 dip 影響","高緯度不可靠"],["dip","turnerr","accerr"],"GNAV02 ch4"),
  T("dip","Compass Errors","Magnetic Dip","磁力線有垂直分量，磁針會傾；用 CG 偏移補償。",["Dip 近極點最大","Magnet CG 偏低於 pivot","引致 turn / accel error","Equator 附近 dip ≈ 0"],["compass","turnerr"],"GNAV02 ch4"),
  T("turnerr","Compass Errors","Turning Error (UNOS)","轉彎時 compass 滯後或超前，北半球 UNOS。",["Undershoot North / Overshoot South","最明顯喺 N/S heading","轉向 N 要提早改平","南半球 ONUS"],["turnrule","accerr","dip"],"GNAV02 ch4"),
  T("turnrule","Compass Errors","Compass Turn Rule","只睇最終 heading：北象限 undershoot，南象限 overshoot。",["Final 喺 N 側：提早改平","Final 喺 S 側：遲啲改平","E / W 最終：唔使","例：210→360 undershoot"],["turnerr"],"GNAV02 ch4 (Compass Turns)"),
  T("accerr","Compass Errors","Acceleration Error (ANDS)","E/W heading 加速 / 減速令 compass 假轉向。",["Accelerate North / Decelerate South","最明顯喺 E / W","北半球加速→似轉 N","南半球 SAND"],["turnerr","dip"],"GNAV02 ch4"),
  // ===== Speed & Units
  T("speeds","Speed & Units","Airspeed Types","IAS → CAS → EAS → TAS，再加 wind 得 GS。",["ICET Is Pretty Cool Drink","TAS 用嚟計導航","TAS 距離 = NAM","GS 距離 = NGM"],["tas","gs","mach"],"GNAV02 ch5"),
  T("tas","Speed & Units","True Airspeed (TAS)","相對氣團嘅速度；高度越高 TAS 比 CAS 越大。",["Flight computer 用 PA + OAT","粗略 ~2% / 1000 ft","TAS 轉 GS 要加 wind","TAS 轉 Mach 要 LSS"],["speeds","gs","pada"],"AAEP TAS exercise; Ebook Nav ch1/4"),
  T("gs","Speed & Units","Ground Speed","相對地面嘅速度；TAS ± wind component。",["Headwind −；tailwind +","ETI = Dist / GS","DME 可量 GS","Wind triangle 求得"],["windtri","tas","dmegs"],"GNAV02 ch5"),
  T("mach","Speed & Units","Mach Number","Mach = TAS / LSS；LSS 只靠 OAT。",["LSS = 38.945 √T(K)","越凍 LSS 越細","高空巡航用 Mach","Sonic = 1.0"],["tas"],"GNAV02 ch5"),
  T("units","Speed & Units","Unit Conversions","距離、質量、體積要識快轉，尤其 fuel。",["1 kg = 2.2 lb","1 imp gal = 4.546 L = 1.2 US gal","1 US gal = 3.785 L","km/h ÷ 1.852 = kt"],["sg","nm"],"GNAV02 ch5"),
  T("sg","Speed & Units","Specific Gravity & Fuel Mass","Mass = Volume × SG；avgas / Jet 約 0.7–0.82。",["Water SG = 1.0","kg = L × SG","lb = L × SG × 2.2","Fuel uplift 單位要核對"],["units","fuel"],"GNAV02 ch5"),
  T("dst","Speed & Units","Distance–Speed–Time","D = S × T；T = D ÷ S；S = D ÷ T。",["ETI(min) = D / GS × 60","60 knots = 1 nm / min","Mental math 先估答案","Fuel = time × flow"],["gs","fuel","tod"],"AAEP Nav Info 2; ENZO Nav day 1"),
  // ===== Altimetry
  T("qnh","Altimetry","QNH, QFE, Standard","QNH 令 altimeter 讀 AMSL；1013 讀 pressure alt。",["QNH → elevation at aerodrome","Std 1013.2 hPa 用於 FL","Area QNH 俾 en-route","亂設 → 高度錯"],["pa","areaqnh","hemis"],"Ebook Nav ch1"),
  T("areaqnh","Altimetry","Area QNH","一個區域嘅 forecast QNH，確保大家同一個基準。",["Min value for region","向 FIS / ATC 問","低 QNH → 實際飛低","Transition 用 std"],["qnh"],"Ebook Nav ch1; ENZO Nav"),
  T("pa","Altimetry","Pressure Altitude","altimeter 設 1013 讀到嘅高度。",["PA = (1013 − QNH) × 30 + Elev","QNH 低 → PA 高過 elev","30 ft / hPa（教材近似）","DA 嘅起點"],["da","pada","qnh"],"AAEP PADA; Nav Info 1"),
  T("da","Altimetry","Density Altitude","PA 按溫度修正：DA = PA + 120 × (OAT − ISA)。",["ISA = 15 − 2°C / 1000 ft","熱 → DA 高 → 性能差","120 ft / °C","Hot & high 起飛距離長"],["pa","pada","topdist"],"AAEP PADA; ENZO Scenario TO perf"),
  T("pada","Altimetry","PA / DA Worked Example","例：Elev 2500, QNH 980, OAT 18°C → PA 3490, DA ≈ 4688。",["ΔQNH = 33 hPa → +990 ft","ISA at PA = 15 − 6.98 = 8.02°C","ISA var = +9.98°C","DA = 3490 + 120 × 9.98"],["pa","da"],"AAEP PADA Ex Ans r2"),
  T("topdist","Altimetry","Take-off Distance Chart","用 PA + OAT 入圖；最大重、無風、再乘 1.15。",["DA 唔使計出數，圖已包","Headwind 減；tailwind 加","Safety factor 1.15（< 5700 kg）","例：320 m → 368 m"],["da","windcomp"],"ENZO Scenario Based TO Perf (CASA)"),
  T("hemis","Altimetry","Hemispherical Rule (VFR)","Track 000–179M 用 odd + 500；180–359M 用 even + 500。",["Australia AIP ENR 1.7","用 Magnetic track","例：4500 ft 向東","其他體系要睇本地 AIP"],["qnh","prep"],"ENZO Nav day 1 slide 8 (CASA)", true),
  // ===== Wind & DR
  T("windtri","Wind & DR","Wind Triangle","TAS 向量 + wind 向量 = GS 向量。",["求 Heading + GS","WCA 向 wind 偏","Flight computer 或計算","Wind 以 From 報"],["thdw","windcomp","gs"],"AAEP Heading/GS/Drift exercise; Ebook ch4"),
  T("windcomp","Wind & DR","Wind Components","Headwind / crosswind = W × cos / sin(角)。",["角 = wind from − track","Cross = W sin θ","Head = W cos θ","60° → head 0.5, cross 0.87"],["windtri","gs"],"Ebook Nav ch4"),
  T("dr","Wind & DR","Dead Reckoning","由已知位置、heading、TAS、時間推算現位置。",["Time–Map–Ground","改 heading / GS / ETA","要定期用 fix 校正","±12° 追蹤準確度"],["pilotage","tmg","trackkeep"],"GNAV02 ch6; Ebook Nav ch5"),
  T("pilotage","Wind & DR","Pilotage","低空低速用河、路、鐵路等地標對圖定位。",["VFR 基本技巧","Time–Map–Ground","對圖要 read ground → chart","唔好 track crawl"],["dr","tmg","chartfeat"],"GNAV02 ch6"),
  T("tmg","Wind & DR","Time–Map–Ground","估時間→圖上位置→對地面驗證，確認 fix。",["最後 known position","GS × time = 距離","圖上睇符號","Fix 符號 = dot in circle"],["pilotage","workcycle"],"ENZO Nav day 1 slide 24"),
  T("trackkeep","Wind & DR","Track-keeping","Actual wind ≠ forecast，一定有 off-track，要喺 checkpoint 改 heading。",["Fix every 5–10 min","時間改 ETA","計 TE + CA","唔好等偏太遠"],["1in60","dr","tolerance"],"GNAV02 ch6; ENZO Nav day 1"),
  T("computer","Wind & DR","Flight Computer","Circular slide rule 計 TAS、wind、time、fuel。",["Wind 面 → HDG + GS","Calc 面 → D/S/T","Wind 要轉 Magnetic","Equipment checklist 必備"],["windtri","dst"],"ENZO Nav day 1; Ebook Nav ch4"),
  T("fuel","Wind & DR","Fuel Plan","Taxi + cruise + alternate + reserve + holding + contingency。",["Final reserve 30 min（ENZO）","Holding 30 min / 每個機場","Taxi 5 min","Margin = FOB − total"],["dst","sg","navlog"],"ENZO Nav day 1 slides 18-19"),
  T("tod","Wind & DR","Top of Descent","由巡航高度下降至 arrival alt，算 TOD 距離。",["Arrival alt = elev + circuit + 500","Descent 500 ft/min","Time = Δalt / 500","Dist = time × (GS/60)"],["dst","arrival"],"ENZO Nav day 1 slide 9"),
  T("navlog","Wind & DR","Navigation Log","逐段記 TRK、wind、HDG、GS、dist、ETI、ETA、fuel。",["Planned vs actual","Revised ETA","SARTIME / Last light","Fuel actual vs min"],["fuel","workcycle","computer"],"ENZO Nav log v2.0"),
  // ===== 1 in 60
  T("1in60","1 in 60 Rule","1 in 60 Rule","60 nm 外 1 nm = 1°；任何單位都得。",["Angle(°) ≈ off / dist × 60","Max angle ≈ 15°","距離或速度單位都可","Wingtip：1000 ft ≈ 1 nm（ENZO）"],["te","ca","corrections"],"Compass & VFR Nav ch6; AAEP Nav Info 2"),
  T("te","1 in 60 Rule","Track Error (TE)","計劃 track 同 TMG 嘅夾角 = off ÷ flown × 60。",["TE = Off × 60 / Flown","例：2 nm @ 40 nm = 3°","TE 即 drift 嘅一部分","看 fix 同起點"],["1in60","ca","drift"],"GNAV02 ch6 Exercise 2"),
  T("ca","1 in 60 Rule","Closing Angle (CA)","向 destination 返 track 嘅角 = off ÷ remaining × 60。",["CA = Off × 60 / To go","改 heading = TE + CA","例 5 nm off，120 nm 前後 → 2.5 + 2.5","改後需追蹤確認"],["te","corrections"],"GNAV02 ch6; AAEP Nav Info 2"),
  T("corrections","1 in 60 Rule","Correction Methods","1×TE 平行；2×TE 同距離相交；3×TE 半程返。",["1×TE → parallel","2×TE → regain 同距離","3×TE → ½ distance","1½×TE → 2× distance"],["te","ca","trackkeep"],"AAEP Nav Info 1 p5"),
  T("drift","1 in 60 Rule","Drift from Fixes","Heading 同 TMG 之差 = drift；例 HDG 093 / TMG 085 = 8°L。",["TE + heading offset","Drift 向左：track < heading","Part D：先 TE 再 TMG 再 GS","再反推 W/V"],["te","windtri"],"AAEP 1in60 ans A4, Part D"),
  T("windfromfix","1 in 60 Rule","Find Wind from Two Fixes","用 HDG、TAS、TMG、GS 向量三角形反求 W/V。",["TE → TMG","GS = Dist / Time","TAS 同 HDG 已知","圖解或計 W/V"],["drift","windtri"],"AAEP 1in60 Part D"),
  T("tolerance","1 in 60 Rule","Navigation Tolerances","CTA 內要貼近 ATC track，用 AIP tolerance。",["0–2000 ft ±1 nm","2001–5000 ft ±2 nm","5001–10000 ft ±4 nm","夜間每級再 +1 nm（Aus）"],["trackkeep","airspace"],"Ebook Nav ch5 (AIP ENR 1.1, Australia)"),
  // ===== Charts & VFR Nav
  T("lambert","Charts & VFR Nav","Lambert Conformal Conic","航圖常用投影：conformal，角度正確，scale 近乎恆定。",["Conformal = 角度唔變","Great circle ≈ 直線","Standard parallels 令 scale 準","Meridians 收斂"],["rhumb","scale"],"Ebook Nav ch3"),
  T("scale","Charts & VFR Nav","Chart Scale & Types","VTC 1:250,000；VNC 1:500,000；WAC 1:1,000,000。",["Scale 愈大細節愈多","1 cm @ 1:250k = 2.5 km","用對應 scale ruler","VTC / VNC 配 10 cent / 20 cent coin 畫圈"],["lambert","chartfeat"],"Ebook Nav ch3; ENZO Nav day 1"),
  T("chartfeat","Charts & VFR Nav","Chart Features","Contour、spot elevation、hypsometric tint、水、路、鐵路、障礙物。",["Contour 愈密愈斜","AMSL / AGL 同時標","Layer tint 顯示 relief","Silo, power line 作 pinpoint"],["pilotage","scale"],"GNAV02 ch7"),
  T("airspace","Charts & VFR Nav","Airspace Classes","A–G：控制空域 vs 非控制。VFR 入 C/D 要 clearance。",["A：只限 IFR","C/D：IFR/SVFR/VFR","E：VFR 非控制","G：完全非控制"],["cta","tolerance"],"GNAV02 ch7 (Australia style)", true),
  T("ersa","Charts & VFR Nav","ERSA / AIP","ERSA 有 aerodrome、NAVAID、frequency；AIP 有規則。",["VOR / NDB 位置、ident","Aerodrome 資料","Rated coverage 見 AIP GEN 1.5","要用最新版"],["prep","vorrange"],"Ebook Nav ch3/7; ENZO checklist"),
  T("prep","Charts & VFR Nav","Nav Preparation","地圖、log、天氣、W&B、flight notification 要齊。",["Equipment checklist","TOD + 1-in-60 markings","TAF, GAF, NOTAM, GPWT","Lodge flight plan + SARTIME"],["navlog","ctwo","daylight"],"ENZO Nav checklist V2.1; Nav day 1"),
  T("ctwo","Charts & VFR Nav","CTWO Departure Brief","Chart、Terrain、Weather、Operational 四項 brief。",["Chart / SID","Terrain 高度","Weather 風","Operational：traffic"],["prep","workcycle"],"ENZO Nav day 1 slide 21-22"),
  T("workcycle","Charts & VFR Nav","Nav Work Cycle & CLEAROFF","巡航循環：fix、log、ETA、fuel、下一個 TP。",["Fix 每 5–10 min","Time / Turn / Orientate","CLEAROFF：C L E A R O F F 八項檢查","唔好一路睇圖"],["tmg","navlog","fuel"],"ENZO Nav day 1 slides 23-28"),
  T("arrival","Charts & VFR Nav","Approaching an Aerodrome","TOD 前 CLEAROFF + brief；10 nm inbound call。",["Arrival brief：elev, join, alt","Overhead = elev + circuit + 500","Dead side join","Base / upwind calls"],["tod","cta"],"ENZO Nav day 1 slides 29-31; OCTA radio call"),
  T("cta","Charts & VFR Nav","CTA Clearance Call","入 CTA 前要 clearance；出 CTA 要 frequency / squawk change。",["Request code + clearance","Squawk 先 ident","VFR 可能被 approach 忘記","離開前通知 approach"],["airspace","arrival"],"ENZO CTA radio call (Australia)"),
  // ===== Diversions & Lost
  T("divminor","Diversions & Lost","Minor Diversion (60° rule)","繞開天氣：離 track 60°，之後轉返 120°。",["60° out / 120° back","ETA delay = X（60°）","45° → X/2；30° → X/4","Wind 要另計"],["divmajor","trackkeep"],"ENZO Nav day 1 slide 32; Ebook ch5"),
  T("divmajor","Diversions & Lost","Major Diversion","由已知 pinpoint 轉：Heading、Altitude、Time、Check。",["Heading 由圖量 − Var","Alt 要 terrain safe","ETA 重算","用 pinpoint / 1-in-60 check"],["divminor","1in60"],"ENZO Nav day 1 slide 34"),
  T("uncertain","Diversions & Lost","Uncertain of Position","10–15 min 見唔到 checkpoint；先 check compass / DG。",["Log heading, time","DG vs compass","計 DR position","唔等於 lost"],["lost","dr"],"Ebook Nav ch5"),
  T("lost","Diversions & Lost","Lost Procedure","唔好亂飛：定計劃、MPP、10% 範圍、線形地標。",["Maintain heading","MPP + 10% 圓","爬高睇多啲","通知 ATC / FIS"],["uncertain","mpp"],"ENZO slide 35; Ebook ch5"),
  T("mpp","Diversions & Lost","Most Probable Position","用 last fix + track + GS 推 MPP，周圍畫 ±10% 區。",["Arc ±30° × ±10% dist","或圓半徑 10%","搵安全高度","再擴大 10–20%"],["lost"],"Ebook Nav ch5"),
  T("imc","Diversions & Lost","Inadvertent IMC","入雲：轉去儀表、最短路線出雲、Pitot heat on。",["通常 180° turn","Aviate, Navigate, Communicate","Autopilot 可用","Pitot heat 防結冰"],["lost"],"ENZO Nav day 1 slide 36"),
  // ===== Radio basics
  T("radio","Radio Aids","Radio Wave Basics","Wave 有 amplitude、frequency；Hz → kHz → MHz → GHz。",["Cycle, amplitude, freq","Direct / surface / sky wave","VHF line of sight","Refraction, diffraction"],["propag","ndb","vor"],"RNAV01 basic radio"),
  T("propag","Radio Aids","Propagation Types","Direct 視線；Surface 沿地面；Sky 經 ionosphere 反射。",["VLF/LF 地波","HF 天波","VHF/UHF 直線","Diffraction 小幅沿地"],["radio","adferr"],"RNAV01 slides"),
  // ===== NDB/ADF
  T("ndb","NDB / ADF","NDB & ADF","NDB 發射，ADF 收；指針指向 station。",["NDB 位於 LF/MF","ADF 顯示 RBI / RMI","需 ident Morse","無 failure flag"],["rbi","ndbrange","adferr"],"RNAV01 ch3; Ebook ch6"),
  T("rbi","NDB / ADF","RBI vs RMI","RBI 示 relative bearing；RMI 示 magnetic bearing。",["RBI 固定卡","RMI 結合 compass","MB = MH + RB","RMI 針尾 = QDR"],["bearings","ndb","hsi"],"RNAV01 ch3"),
  T("ndbrange","NDB / ADF","NDB Range Factors","Power、frequency、terrain、emission、interference。",["Power ↑ range ↑","Freq ↓ range ↑","水面 range 大","日 / 夜 range 唔同"],["ndb","adferr"],"RNAV01 ch3; Ebook ch6"),
  T("adferr","NDB / ADF","ADF Limitations","Static、night effect、coastal refraction 等。",["Night effect（skywave）","Coastal refraction","Mountain effect","Quadrantal / dip error"],["propag","ndb","ndbrange"],"RNAV01 ch3; Ebook ch6"),
  T("homing","NDB / ADF","Homing vs Tracking","Homing 針永遠指 0 → 風令路徑彎；Tracking 加 WCA 保持 track。",["Homing 簡單低效","Tracking：圖像、intercept、maintain","需 WCA","Crosswind 令 homing 彎曲"],["ndb","thdw"],"RNAV01 ch3; Ebook ch6"),
  T("holding","NDB / ADF","Holding Pattern","等候用 racetrack：standard right turns、rate one、1 min legs。",["Rate one turn（3°/s）","Still-air inbound 60 s","Standard 右轉","> 14000 ft 通常 1.5 min（ICAO）"],["holdentry","ndb"],"RNAV01 NDB holding slide; ICAO general", true),
  T("holdentry","NDB / ADF","Holding Entry","按到達 heading 分 Direct、Parallel、Teardrop 三區（70° 線）。",["Direct：250°→360°→070°","Parallel：070°→180°","Teardrop：180°→250°","以 inbound=360、右轉計"],["holding"],"ICAO general (not in course notes)", true),
  // ===== VOR / DME
  T("vor","VOR / DME","VOR Principle","VHF 108–118 MHz；比較 reference 同 rotating phase 得 radial。",["360 radials（magnetic）","Reference + variable phase","Ident ~每 10 s","Station 非 heading-sensitive"],["cdi","vorerr","vorrange"],"Ebook Nav ch7; RNAV01"),
  T("cdi","VOR / DME","OBS, CDI, TO/FROM","OBS 設 course；CDI 示偏差；flag 示 TO / FROM。",["5 dots × 2° = 10° full scale","Needle 示 course 喺邊","TO/FROM 解決歧義","Heading 唔影響"],["vor","tofrom","hsi"],"Ebook Nav ch7; RNAV01 cockpit display"),
  T("tofrom","VOR / DME","TO / FROM Logic","CDI centred 時：OBS 同 radial 同向 = FROM；反向 = TO。",["090 FROM = 270 TO","Radial = 離開 station","OFF flag = 唔用","先 ident 再用"],["cdi"],"Ebook Nav ch7"),
  T("vorrange","VOR / DME","VOR / DME Rated Coverage","<5000 ft 60 nm；5000–10000 90；10000–15000 120；15000–20000 150；≥20000 180。",["Line of sight","高度愈高 range 愈大","日夜相同（VHF）","AIP GEN 1.5（Australia）"],["vor","dmeprinc"],"Ebook Nav ch7 (AIP GEN 1.5)"),
  T("vorerr","VOR / DME","VOR Errors","Ground ±2°、site ±3°、scalloping ±2°；總體 ≤ ±5°。",["Doppler VOR 減 site error","Vertical polarisation：banking","Scalloping 針快抖","VOR 唔受 night effect"],["vor","vorcheck"],"Ebook Nav ch7"),
  T("vorvar","VOR / DME","Which Variation for VOR?","VOR radial 以 station 嘅 Var 為準；其他 VFR 計算用 aircraft/area Var。",["Radial = magnetic from station","圖上 compass rose 標示 station Var","轉 true 要用 station Var","Chart 對 plot 要小心"],["isogonic","vor"],"RNAV01 slide 120108", true),
  T("vorcheck","VOR / DME","VOR Accuracy Check (FAA)","VOT ±4°；airborne checkpoint ±6°；dual VOR 差 ≤ 4°。",["IFR 30 日內檢查","記錄日期 / 地點 / 誤差","VOT 發 360 radial","FAA 要求"],["vorerr"],"ATP Test Prep ch2 (FAA)"),
  T("hsi","VOR / DME","RMI & HSI","RMI 針尾 = radial；HSI 圖像化 CDI + heading。",["RMI 頭 = to station","HSI 似 plan view","Course arrow + bar","Heading bug"],["rbi","cdi"],"Ebook Nav ch7; ATP ch2"),
  T("dmeprinc","VOR / DME","DME Principle","UHF 960–1215 MHz；aircraft interrogator 同 ground transponder。",["Secondary radar","252 channels","配對 VOR 頻率","量時間 → 距離"],["slant","dmegs","dmefix"],"RNAV01 ch4; Ebook ch8"),
  T("slant","VOR / DME","DME Slant Range","DME 量斜距，永遠 ≥ ground distance。",["Overhead 示高度 (nm)","30000 ft → ~4.9 nm","遠距誤差細","有 null zone"],["dmeprinc","dmegs"],"Ebook Nav ch8; ATP ch2"),
  T("dmegs","VOR / DME","GS from DME","直接飛向或離開 DME：GS = Δdist / Δtime。",["36 s 嘅距離 × 100 = GS","Abeam 唔準","高 + 近唔準","例：10 nm / 5 min = 120 kt"],["slant","gs","dst"],"Ebook Nav ch8"),
  T("dmefix","VOR / DME","Position Fixing","DME 係圓形 position line；配 VOR radial 得 fix。",["Co-located 交 90°","非同站要 ≥ 45° 交角","兩個 DME 圓 → 兩點歧義","第三 position line 解決"],["dmeprinc","vor"],"Ebook Nav ch8"),
  // ===== ILS
  T("ils","ILS","ILS Overview","Localiser 橫向 + Glide slope 縱向 + markers。",["LOC 108.1–111.95 MHz VHF","GS UHF paired","Markers 75 MHz","Cockpit：scan rate 重要"],["loc","glideslope","markers"],"RNAV01 ILS; ATP ch2"),
  T("loc","ILS","Localiser","對準跑道中線，full-scale 約 ±2.5°。",["VHF band 同 VOR","Ident I + 3 letters","Front / back course","Reverse sensing 於 back course"],["ils","cdi"],"RNAV01 slide 123637; ATP ch2"),
  T("glideslope","ILS","Glide Slope","約 3° 下滑道；pointer 低 = 飛機高於 path。",["UHF 頻率","Needle below = too high","Fly toward the needle","Full scale ±0.7°（approx）"],["ils","rod"],"RNAV01 ILS; ATP ch2", true),
  T("rod","ILS","Rate of Descent Check","ROD = angle × GS / 60 × 100；3° → 約 5 × GS。",["GS 120 → ROD ~600","對照 GS 變","用作 cross-check","GS 越快 ROD 越大"],["glideslope","gs"],"RNAV01 slide 124619; ATP ch2"),
  T("markers","ILS","Marker Beacons","Outer 藍、Middle 琥珀、Inner 白；75 MHz。",["Outer：continuous dashes","Middle：dot-dash","Inner：continuous dots","Compass locator 可代"],["ils"],"ATP Test Prep ch2 (FAA)"),
  T("ilscat","ILS","ILS Categories","Cat I DH 200 ft, RVR 1800 ft；Cat II DH 100 ft, RVR 1200 ft（FAA）。",["Cat II 需額外 ground equip","Approach light 等","Cat III 更低","不同體系數值略異"],["ils"],"ATP Test Prep ch2 (FAA)", true),
  // ===== GNSS
  T("gnss","GNSS","GNSS vs GPS","GNSS 係統稱；GPS 係美國嗰套。",["GPS (US)","GLONASS (RU)","Galileo (EU)","BeiDou (CN)"],["gpsseg","wgs84"],"RNAV02 GNSS"),
  T("gpsseg","GNSS","GPS Segments","Space、Control、User；24 sats @ ~20,200 km。",["55° inclination","~12 hr orbit","Control：monitor + master","至少 5 sats in view 目標"],["gnss","trilat"],"RNAV02; Ebook ch9"),
  T("trilat","GNSS","Trilateration","由到衛星距離（時間 × c）定位；3D 要 4 sats。",["3 sats → 2D（已知 alt）","4th sat → clock bias","Range = Δt × c","兩球相交 → 兩點"],["clock","pdop","raim"],"RNAV02; Ebook ch9"),
  T("clock","GNSS","Clock Error","Receiver clock 不準；第 4 粒衛星令 receiver 消除偏差。",["Sat 用 atomic clock","Receiver 便宜 clock","Timing 即 range","Trimming 令 fix 收斂"],["trilat"],"Ebook ch9; RNAV02"),
  T("pdop","GNSS","PDOP","Satellite 太集中 → PDOP 高 → 準確度差。",["En route < 6","NPA < 3","分散 = 好","Mask angle ~7.5°"],["trilat","raim","gpserr"],"RNAV02 ch6; Ebook ch9"),
  T("raim","GNSS","RAIM","Receiver 自檢 integrity：5 sats 偵測，6 sats 排除。",["FD = 5 sats","FDE = 6 sats","Baro aiding 可補","失去 RAIM 要通知 ATC"],["pdop","baro","gpshf"],"RNAV02 ch6; Ebook ch9"),
  T("baro","GNSS","Barometric Aiding","用 altimeter 數據當額外 satellite 範圍。",["少一粒 sat 都得","加強 RAIM","唔同於 alt = GPS alt","Altimeter 設定要啱"],["raim"],"RNAV02; Ebook ch9"),
  T("gpserr","GNSS","GPS Errors","Iono / tropo、multipath、clock、ephemeris、receiver noise。",["Iono 慢信號","Multipath 反射","Datum 差異","Interference"],["pdop","wgs84"],"RNAV02; Ebook ch9"),
  T("sps","GNSS","SPS vs PPS","SPS 民用 C/A (L1)；PPS 軍用 P code (L1+L2)。",["SA 2000 年關","Ebook typical: C/A ~29 m","Slides: SPS ±30 m / PPS ±6 m","DGPS ~3 m"],["gpserr","dgps"],"RNAV02 slide; Ebook ch9", true),
  T("wgs84","GNSS","WGS 84 Datum","GPS 同 ICAO 都用 WGS 84；其他 datum 差好遠。",["Datum 不同 → 位置偏數百 m","圖資料要核對","ICAO 採用","GLONASS 用 PE-90"],["gnss","gpserr"],"RNAV02; Ebook ch9"),
  T("dgps","GNSS","DGPS / GBAS","地面站量度誤差，傳修正俾飛機。",["GBAS：Precision Approach Service","GBAS Positioning Service","Accuracy ~ metres","Airport 附近"],["sps","raim"],"RNAV02; Ebook ch9"),
  T("gpshf","GNSS","GPS Human Factors","Mode error、data entry error、complacency。",["Cross-check 其他 navaid","驗證 waypoint","Current database","保持 situational awareness"],["raim"],"Ebook ch9"),
  T("rnav","GNSS","RNAV & RNP","RNAV 容許任意航點；RNP 加 on-board monitoring + alerting。",["Conventional → RNAV → RNP","Curved paths","Narrow obstacle clearance","RNAV(RNP) approach 例子"],["gnss","raim"],"RNAV02 slide; ATP ch2", true),
  // ===== Radar
  T("awr","Weather Radar","Airborne Weather Radar","Primary radar，探測降水 / convective cloud，避亂流。",["~9 GHz（3 cm）","Detect rain，唔係 CAT","Tilt ±15°","地面輻射有危險"],["radio"],"RNAV02 ch7"),
  ],
  links:[
    ["nav.greatcircle","nav.lambert","Great circle 喺 Lambert chart 近乎直線"],
    ["nav.rhumb","nav.thdw","Rhumb line 即 constant track direction"],
    ["nav.nm","nav.1in60","1° = 60 nm 係 1-in-60 嘅基礎"],
    ["nav.timearc","nav.utc","15°/hr 令 longitude 同 time zone 掛鉤"],
    ["nav.var","nav.tmvdc","Var 係 T→M 嗰一步"],
    ["nav.dev","nav.swing","Swing 用嚟量 deviation"],
    ["nav.dip","nav.turnerr","Dip 令 magnet CG 偏移 → turning error"],
    ["nav.dip","nav.accerr","同一個 CG 偏移令加速產生 error"],
    ["nav.windtri","nav.gs","Wind triangle 結果之一係 GS"],
    ["nav.thdw","nav.windtri","Drift 同 WCA 由 wind 引起"],
    ["nav.windcomp","nav.topdist","Headwind 減起飛距離"],
    ["nav.pa","nav.da","DA 由 PA 加溫度修正"],
    ["nav.da","nav.topdist","DA 愈高 → 引擎 / 翼 / 螺旋槳效率愈低 → 起飛愈長"],
    ["nav.qnh","nav.pa","改 QNH → PA 改變"],
    ["nav.te","nav.corrections","Correction 方法由 TE 倍數決定"],
    ["nav.ca","nav.te","改 heading = TE + CA"],
    ["nav.drift","nav.windfromfix","由 drift 推 wind"],
    ["nav.trackkeep","nav.1in60","Off-track 就用 1-in-60 改"],
    ["nav.workcycle","nav.tmg","Work cycle 包括 Time–Map–Ground"],
    ["nav.tod","nav.arrival","TOD 決定幾時 brief arrival"],
    ["nav.fuel","nav.sg","Fuel 質量由 SG 轉換"],
    ["nav.divminor","nav.trackkeep","Diversion 後 ETA 要重新計"],
    ["nav.lost","nav.mpp","Lost 先要 MPP"],
    ["nav.uncertain","nav.lost","Uncertain 未解決就 lost"],
    ["nav.propag","nav.adferr","Skywave 令 night effect"],
    ["nav.ndb","nav.rbi","ADF 用 RBI / RMI 顯示"],
    ["nav.homing","nav.thdw","Homing 因 drift 路徑彎"],
    ["nav.holding","nav.holdentry","到達 heading 決定 entry"],
    ["nav.vor","nav.cdi","VOR 靠 OBS / CDI 顯示"],
    ["nav.cdi","nav.tofrom","Flag 解決歧義"],
    ["nav.vorerr","nav.vorcheck","要定期檢查誤差"],
    ["nav.slant","nav.dmegs","Slant 令 GS check 失準"],
    ["nav.dmeprinc","nav.dmefix","DME 圓 + VOR radial = fix"],
    ["nav.loc","nav.cdi","Localiser 同 VOR 一樣用 CDI"],
    ["nav.glideslope","nav.rod","ROD 係 glide path cross-check"],
    ["nav.trilat","nav.clock","需要第 4 粒 sat 解 clock"],
    ["nav.pdop","nav.raim","Geometry 差 → RAIM 難達標"],
    ["nav.raim","nav.baro","Baro aiding 補 RAIM"],
    ["nav.wgs84","nav.gpserr","Datum 不同會令座標錯位"],
    ["nav.gpshf","nav.raim","自動化不能取代 integrity check"],
    ["nav.hemis","nav.qnh","Hemispherical 用 altitude，要 altimeter 啱"],
    ["nav.ersa","nav.vorrange","Rated coverage 喺 AIP / ERSA"],
    ["nav.airspace","nav.cta","入控制空域要 clearance"],
    ["nav.tolerance","nav.airspace","Tolerance 防止 infringement"],
    ["nav.tas","nav.pada","TAS 計算用 PA"],
    ["nav.computer","nav.windtri","Flight computer 解 wind triangle"],
    ["nav.vorvar","nav.isogonic","Station Var 見 isogonic"],
    ["nav.bearings","nav.rbi","MB = MH + RB"],
    ["nav.ilscat","nav.ils","Category 取決於 ILS 設備"],
    ["nav.markers","nav.ils","Marker 提供 range"],
    ["nav.rnav","nav.gnss","RNAV 靠 GNSS"],
    ["nav.dmeprinc","nav.slant","DME 量時間 → 得斜距"],
    ["nav.sps","nav.gpserr","SPS 無雙頻，iono error 較大"],
    ["nav.adferr","nav.ndbrange","夜晚 sky wave 令可用 range 縮短"],
    ["nav.vor","nav.vorrange","VHF 視線 → range 受高度限制"],
    ["nav.dr","nav.trackkeep","DR 估算同實際風有差 → 要 track-keeping"],
    ["nav.speeds","nav.gs","TAS + wind = GS"]
  ],
  cards:[
    C("earth","🌍","What shape is the Earth for navigation purposes?","An oblate ellipsoid, flattened at the poles, but treated as a perfect sphere for basic navigation.","Equatorial 12751 km，polar 12713 km。"),
    C("earth","🗺️","Why does the Earth's real shape matter?","Map production and satellite systems such as GPS depend on an accurate ellipsoid model.","GPS 用 WGS84 ellipsoid。"),
    C("greatcircle","⭕","What is a great circle?","A circle whose plane passes through the centre of the Earth, dividing it into two equal halves.","兩點最短路線。"),
    C("greatcircle","⭕","Name two properties of a great circle.","It is the shortest path between two points on a sphere and has the same circumference as every other great circle.","圓周全部相同。"),
    C("greatcircle","📏","Advantage and disadvantage of flying a great circle?","It is the shortest, so less time and fuel, but the track direction must be continuously adjusted.","方向不斷改變。"),
    C("rhumb","🧭","What is a rhumb line?","A line crossing every meridian at the same angle, so it has a constant direction.","Constant track。"),
    C("rhumb","🧭","Advantage and disadvantage of a rhumb line?","It keeps a constant track, but is longer than the great circle between the same two points.","易飛但較長。"),
    C("rhumb","❓","Which is shorter between Dubai and Tokyo: great circle, parallel of latitude, or rhumb line?","The great circle route is the shortest.","Great circle 最短。"),
    C("latlong","📍","Define latitude and longitude.","Latitude is the angle north or south of the Equator; longitude is the angle east or west of the Prime Meridian.","Lat 由 Equator，Long 由 Greenwich。"),
    C("latlong","📍","Give Hong Kong's approximate coordinates.","About 22.3° N, 114.2° E.","教材：22.32°N, 114.17°E。"),
    C("nm","📐","How is a nautical mile defined?","The arc length on the Earth's surface subtended by one minute of angle at the centre, 1852 m.","1 minute = 1 nm。"),
    C("nm","🧮","Convert: 1 nm in km and statute miles.","1 nm = 1.852 km = about 1.15 statute miles.","1 SM = 1.609 km。"),
    C("nm","🧮","How many nautical miles from the Equator to the Pole?","90° × 60 = 5400 nm, which is about 10,000 km.","Calculation: 90×60。"),
    C("nm","🌐","Why does 1° of longitude get shorter at high latitude?","Meridians converge toward the poles, so the east-west distance shrinks with the cosine of latitude.","高緯度 long 距離縮短。"),
    C("timearc","⏰","How much does the Earth rotate per hour?","15°, because 360° in 24 hours; so 1° corresponds to 4 minutes.","15°/hr。"),
    C("timearc","⏰","Convert 45° of longitude into time.","45 ÷ 15 = 3 hours.","Calculation。"),
    C("utc","🕒","What time standard is used in flight plans?","UTC, Coordinated Universal Time.","一律 UTC。"),
    C("daylight","🌅","Why note last light on the nav log?","VFR flight must be completed before last light; it limits endurance and route planning.","日落後 VFR 受限。"),
    C("tmvdc","🧭","State the sequence from True to Compass.","True, Variation, Magnetic, Deviation, Compass (T V M D C).","T-V-M-D-C。"),
    C("tmvdc","🧭","Which north do charts use and which does the compass use?","Charts use True North; the magnetic compass uses Compass North after variation and deviation.","圖係 True。"),
    C("var","🧲","Define magnetic variation.","The angle between True North and Magnetic North at a given place.","T 與 M 之差。"),
    C("var","🧲","State the rule for applying variation.","West is best, east is least: Magnetic = True + West or True − East.","T−E=M，T+W=M。"),
    C("var","🧮","True heading 342, variation 10°E. Find magnetic heading.","342 − 10 = 332°M.","AAEP exercise。"),
    C("var","🧮","True 167, variation 8°W. Find magnetic.","167 + 8 = 175°M.","AAEP exercise。"),
    C("var","🧮","True 006, variation 11°E. Find magnetic.","006 − 11 = 355°M.","Wrap around 360。"),
    C("isogonic","📈","What is an agonic line?","A line joining places with zero magnetic variation.","Isogonic = 相同 Var。"),
    C("dev","🧲","What causes compass deviation?","Aircraft electrical circuits and magnetised metal parts disturbing the compass.","飛機自己嘅磁場。"),
    C("dev","🗒️","How does a pilot know the deviation?","From the compass correction card produced after a compass swing.","Correction card。"),
    C("swing","🔄","What is a compass swing?","Measuring deviation on a series of headings, correcting for it, and recording residual deviation.","量、修、記。"),
    C("thdw","🛩️","Differentiate track and heading.","Track is the path over the ground; heading is where the nose points.","Track vs heading。"),
    C("thdw","💨","What is drift and what causes it?","The angle between heading and track, caused by wind.","Wind 造成。"),
    C("thdw","🎯","What is wind correction angle?","The angle applied into wind to counter drift and maintain the desired track.","向 wind 偏。"),
    C("bearings","📡","Define QDM, QDR, QUJ, QTE.","QDM magnetic to station; QDR magnetic from; QUJ true to; QTE true from.","D=Magnetic，U/T=True。"),
    C("bearings","🧮","Heading 090M, relative bearing 045. What is the magnetic bearing to the station?","MB = MH + RB = 135°M.","Calculation。"),
    C("compass","🧭","What is the standby compass?","A simple independent compass powered only by the Earth's magnetic field.","唔靠電。"),
    C("dip","⬇️","Why does the magnet dip?","Magnetic field lines have a vertical component; the compass is made pendulous to compensate.","磁針傾向地。"),
    C("turnerr","🔄","What does UNOS mean?","Undershoot North, Overshoot South (northern hemisphere turning error).","北半球轉彎。"),
    C("turnerr","🔄","Turning from north to 030: when do you roll out?","Before 030, about 010 in the example, because the compass lags.","提早改平。"),
    C("turnerr","🔄","Turning from south to 150: when do you roll out?","After 150, about 130 in the example, as the compass leads.","遲啲改平。"),
    C("turnrule","🎯","What do you consider when applying compass turn rule?","Only the final heading, not the initial heading.","睇最終 heading。"),
    C("turnrule","🎯","Does a turn to east or west need correction?","No, turning error is negligible on east and west headings.","E/W 無事。"),
    C("accerr","⚡","What does ANDS mean?","Accelerate North, Decelerate South: acceleration error on east/west headings.","北半球加速。"),
    C("speeds","⏱️","List the airspeed chain.","IAS, CAS, EAS, TAS, then ground speed with wind.","ICET Is Pretty Cool Drink。"),
    C("tas","🧮","Why is TAS higher than CAS at altitude?","Air density is lower, so for a given indicated airspeed the true speed through the air is higher.","高空空氣疏。"),
    C("tas","🧮","CAS 80, PA 4000 ft, OAT +10. What is TAS?","About 85 kt (using the flight computer).","AAEP key。"),
    C("tas","🧮","CAS 95, PA 12000 ft, OAT −15. TAS?","About 113 kt.","AAEP key。"),
    C("gs","➕","How is ground speed derived from TAS?","Ground speed = TAS ± wind component along track; headwind subtracts, tailwind adds.","Head −，tail +。"),
    C("mach","⚡","Define Mach number.","The ratio of true airspeed to the local speed of sound; LSS depends only on temperature.","M = TAS/LSS。"),
    C("mach","🧮","Formula for local speed of sound?","LSS = 38.945 × √T (kelvin), in knots.","教材公式。"),
    C("units","⚖️","Convert 1900 lb to kg.","1900 ÷ 2.2 = about 863 kg.","Slides exercise。"),
    C("units","🧮","MTOW 6.8 t, ZFW 4500 kg, fuel 1900 lb. Within limit?","Fuel 863 kg, TOW 5363 kg < 6800 kg, so yes.","Calculation。"),
    C("units","🧮","Convert 80 imp gal to litres.","80 × 4.546 = 363.7 L.","1 imp gal = 4.546 L。"),
    C("units","🧮","Convert 175 km in 25 min to NM per hour.","175 ÷ 25 × 60 = 420 km/h; ÷ 1.852 = 227 kt.","Calculation。"),
    C("sg","⛽","How do you convert litres to kg for fuel?","Mass in kg = litres × specific gravity.","SG 0.7–0.82。"),
    C("sg","🧮","740 US gal at SG 0.74. Mass in kg?","740 × 3.785 = 2801 L; × 0.74 = 2073 kg.","Calculation。"),
    C("dst","⏳","Time to fly 90 nm at ground speed 120 kt?","90 ÷ 120 × 60 = 45 minutes.","Calculation。"),
    C("dst","⏳","What distance does an aircraft cover in 6 minutes at 120 kt GS?","12 nm.","2 nm/min。"),
    C("qnh","📟","What does QNH do?","It makes the altimeter read elevation above mean sea level at the aerodrome.","QNH → AMSL。"),
    C("qnh","📟","What setting gives pressure altitude?","1013 hPa (standard pressure) on the altimeter subscale.","Standard setting。"),
    C("areaqnh","📟","Why use area QNH?","So aircraft in a region share one forecast setting and have consistent vertical separation.","同一基準。"),
    C("pa","🧮","Formula for pressure altitude.","PA = (1013 − QNH) × 30 ft + elevation.","30 ft/hPa 近似。"),
    C("pa","🧮","Elev 1000 ft, QNH 1015. PA?","(1013 − 1015) × 30 + 1000 = 940 ft.","AAEP key。"),
    C("da","🧮","Formula for density altitude.","DA = PA + 120 × (OAT − ISA temperature at PA).","120 ft/°C。"),
    C("da","🌡️","What is ISA temperature at 3500 ft?","15 − 2 × 3.5 = 8°C.","−2°C per 1000 ft。"),
    C("da","🌡️","How does a hot day affect performance?","Higher temperature raises density altitude, reducing engine power, propeller thrust and lift.","熱 → DA ↑。"),
    C("pada","🧮","Elev 2500 ft, QNH 980, OAT 18°C. Find PA and DA.","PA = 33×30 + 2500 = 3490 ft; ISA = 8.02°C; DA ≈ 3490 + 120 × 9.98 = 4688 ft.","AAEP key。"),
    C("pada","🧮","Elev 700, QNH 1010, OAT 32°C. PA?","(1013−1010)×30 + 700 = 790 ft.","AAEP key。"),
    C("topdist","✈️","Steps to use the take-off distance chart?","Compute PA from QNH and elevation, enter OAT, find the intercept, then read ground roll and distance over obstacle.","PA+OAT → DA。"),
    C("topdist","🧮","Ground roll 320 m; MTOW below 5700 kg. Planned distance?","320 × 1.15 = 368 m.","Safety factor 1.15。"),
    C("hemis","⬆️","State the hemispherical rule for VFR (Australia).","Magnetic track 000–179 uses odd thousands + 500 ft; 180–359 uses even thousands + 500 ft.","本地 AIP。"),
    C("windtri","🔺","What does the wind triangle solve for?","Heading and ground speed given track, TAS and wind.","三角形向量。"),
    C("windtri","🧮","W/V 311/25 (M), track 104M, TAS 140. Heading and GS?","Heading about 099M, GS about 162 kt, drift 5° right.","AAEP key。"),
    C("windtri","🧮","W/V 270/10, track 035M, TAS 70. Heading and GS?","Heading 028M, GS 75 kt.","AAEP key。"),
    C("windtri","🧮","W/V 095/25, track 089M, TAS 60. Heading and GS?","Heading 091M, GS about 35 kt.","AAEP key。"),
    C("windcomp","🧮","60° off the nose, 20 kt wind. Components?","Headwind 10 kt; crosswind about 17 kt.","cos 60=0.5。"),
    C("dr","🗺️","What is dead reckoning?","Estimating position from known start point, heading, airspeed and time.","推算位置。"),
    C("pilotage","🏞️","What is pilotage?","Navigating by visual reference to ground features compared with the chart.","看地標。"),
    C("tmg","⏱️","Explain Time–Map–Ground.","Know last position, compute time, locate position on map, then verify on ground features.","時間→圖→地面。"),
    C("trackkeep","🎯","Why will an aircraft go off track even with a good plan?","Actual wind differs from forecast, so heading must be adjusted at checkpoints.","風唔同預報。"),
    C("trackkeep","🎯","How often should you fix your position?","Every 5–10 minutes; avoid track crawling.","5–10 min。"),
    C("computer","🖥️","What does the wind side of the flight computer give?","Heading, ground speed and drift from track, TAS and wind.","wind 面。"),
    C("fuel","⛽","List fuel plan components.","Taxi, cruise, alternate, final reserve, holding, contingency.","ENZO 例：final 30 min。"),
    C("tod","🛬","Calculate TOD: cruise 4500 ft, arrival 1600 ft, descent 500 ft/min, GS 120.","Time 2900/500 = 5.8 ≈ 6 min; distance ≈ 12 nm.","ENZO example。"),
    C("tod","🛬","What is the arrival altitude formula?","Elevation + circuit altitude + 500 ft.","overhead altitude。"),
    C("navlog","📝","What goes in a nav log?","Waypoints, track, wind, heading, GS, distance, ETI, ETA, fuel, notes and clearances.","逐段記。"),
    C("1in60","📐","State the 1-in-60 rule.","At 60 nm, 1 nm off track corresponds to 1°.","60 nm = 1°。"),
    C("1in60","📐","What is the maximum angle for 1-in-60 accuracy?","About 15°.","小角度近似。"),
    C("1in60","👀","Wingtip trick for 1 nm.","The ground under the wingtip is approximately the number of 1000 ft in nm.","4000 ft ≈ 4 nm。"),
    C("te","🧮","Define track error.","Angle between planned track and track made good.","TE。"),
    C("te","🧮","2 nm left of track after 40 nm. TE?","2 × 60 ÷ 40 = 3° left.","Slides Ex.2。"),
    C("ca","🧮","Define closing angle.","The angle to turn toward track to regain it at a chosen point.","CA。"),
    C("ca","🧮","5 nm left after 120 nm of 240 nm. Heading 320. New heading?","TE 2.5° + CA 2.5° = 5° right: 325°.","Slides Ex.2。"),
    C("corrections","🔁","Turn 1×TE: what happens?","The aircraft flies parallel to the planned track.","Parallel。"),
    C("corrections","🔁","Turn 2×TE: what happens?","The aircraft regains track after the same distance already flown.","Same distance。"),
    C("corrections","🔁","Turn 3×TE: where do you regain track?","In half the distance flown.","½ distance。"),
    C("drift","🧮","Heading 093M, TMG 085M. Drift?","8° left.","AAEP A4。"),
    C("drift","🧮","Heading 093, FPT 090; 5 nm left after 60 nm. Drift?","TE 5° + 3° = 8° left.","AAEP A4。"),
    C("windfromfix","🔍","Steps to find wind from fix.","TE with 1-in-60, then TMG, then GS, then vector solution of heading, TAS and TMG.","Part D。"),
    C("tolerance","📏","VFR navigation tolerance at 3000 ft?","±2 nm (Australia, day).","夜 +1。"),
    C("tolerance","📏","Track-keeping with DR vs radio aids?","DR ±12°; with radio aids around ±6°.","Ebook。"),
    C("lambert","🗺️","Why use Lambert conformal conic charts?","They preserve angles (conformal) and have near constant scale, with great circles close to straight lines.","角度準確。"),
    C("scale","🗺️","Scales of VTC, VNC, WAC?","1:250,000; 1:500,000; 1:1,000,000.","Australia。"),
    C("chartfeat","⛰️","What do closely spaced contours indicate?","Steep slope.","等高線密 = 斜。"),
    C("chartfeat","⛰️","What are hypsometric tints?","Colours between contours showing relief.","分層設色。"),
    C("airspace","🛡️","Can VFR enter Class C without clearance?","No, a clearance is required.","ATC。"),
    C("ersa","📘","Where to find VOR/NDB details in Australia?","ERSA, en route charts and VNC/VTC.","圖與 ERSA。"),
    C("prep","📋","Name items on a nav preparation checklist.","Charts, nav log, weather, NOTAMs, W&B, performance, flight notification.","ENZO checklist。"),
    C("ctwo","🗣️","What is CTWO?","Chart, Terrain, Weather, Operational: departure briefing structure.","Brief 格式。"),
    C("workcycle","🔁","What does CLEAROFF stand for?","Compass, Log, Engine, Altimetry, Radio, Orientation, Fuel, Forced landing.","ENZO。"),
    C("workcycle","🔁","What is Time/Turn/Orientate?","At a turning point note time, turn to new heading, orient with features.","TP 動作。"),
    C("arrival","🛬","What is the 10 nm call?","A CTAF call giving callsign, position, intentions and ETA.","10 nm inbound。"),
    C("cta","📻","Before leaving CTA?","Inform approach, change frequency and transponder to 1200 after approval.","Australia VFR。"),
    C("divminor","🌩️","Minor diversion method?","Turn 60° off track, fly X minutes, turn 120° back, fly X minutes.","等邊三角形。"),
    C("divminor","🌩️","ETA delay for a 60° diversion leg of X min?","X minutes.","45° → X/2。"),
    C("divmajor","🛫","Major diversion steps?","Heading, altitude, time, check.","HATC。"),
    C("uncertain","❓","Uncertain vs lost?","Uncertain: no fix for 10–15 min but DR position known; lost: cannot obtain position.","唔係 lost。"),
    C("lost","🆘","First actions when lost?","Maintain heading, check compass/DG, DR position, form plan; do not fly aimlessly.","定計劃。"),
    C("lost","🆘","How big is the area of uncertainty?","Typically ±10% of distance flown since last fix.","10%。"),
    C("mpp","🎯","Define MPP.","Most probable position from last fix, track and GS.","最可能位置。"),
    C("imc","☁️","Inadvertent IMC response?","Fly on instruments, turn the shortest way out of cloud (normally 180°), pitot heat on.","Aviate first。"),
    C("radio","📶","Define frequency.","Number of cycles per second, in Hertz.","Hz。"),
    C("radio","📶","VHF propagation mode?","Direct (space) wave, line of sight.","視線。"),
    C("propag","📶","How does sky wave propagate?","It refracts and reflects off the ionosphere.","天波。"),
    C("ndb","📻","What does an ADF display?","The bearing to an NDB station via RBI or RMI.","ADF 指向。"),
    C("rbi","📻","RBI vs RMI?","RBI shows relative bearing; RMI shows magnetic bearing.","RMI 有 compass。"),
    C("ndbrange","📻","Factors affecting NDB range?","Power, frequency, terrain, emission type, interference.","5 項。"),
    C("adferr","📻","List ADF limitations.","Static, station interference, night effect, mountain effect, coastal refraction, no failure warning, quadrantal and dip error.","清單。"),
    C("adferr","🌙","What is night effect?","Skywave interference at night causing bearing fluctuations.","夜晚 sky wave。"),
    C("homing","📻","Why is homing inefficient?","Wind makes the path curved.","路徑彎。"),
    C("holding","⭕","Standard holding pattern turns?","Right turns at rate one, 1 minute inbound legs (to 14,000 ft).","3°/s。"),
    C("holdentry","⭕","Name three holding entries.","Direct, parallel, teardrop.","按 70° 線。"),
    C("vor","📡","VOR frequency band?","VHF 108–118 MHz.","VHF。"),
    C("vor","📡","What is a radial?","Magnetic bearing from the VOR station.","Radial = from。"),
    C("vor","📡","What signals does the VOR transmit?","A reference phase and a rotating variable phase; their phase difference gives the radial.","Phase comparison。"),
    C("cdi","🎚️","CDI dot value?","Each dot is 2°; full scale is 10°.","5 dots。"),
    C("cdi","🎚️","Does heading affect CDI?","No, VOR display is not heading sensitive.","Heading 無關。"),
    C("tofrom","🎚️","On the 235 radial, CDI centred. What displays?","235 FROM or 055 TO.","Reciprocal。"),
    C("vorrange","📏","VOR rated coverage at 12,000 ft?","120 nm (Australia AIP).","Band 10–15k。"),
    C("vorerr","⚠️","Aggregate VOR error?","Normally within ±5°.","Ebook。"),
    C("vorcheck","✅","FAA VOT tolerance?","±4°.","FAA。"),
    C("vorcheck","✅","VOR checkpoint tolerance on ground/air?","±4° ground, ±6° airborne.","FAA。"),
    C("hsi","🖼️","HSI?","Combined heading indicator and VOR/ILS course deviation display.","Plan view。"),
    C("dmeprinc","📡","DME principle?","Aircraft interrogator sends pulses; ground transponder replies; time gives distance.","Secondary radar。"),
    C("dmeprinc","📡","DME frequency band?","UHF 960–1215 MHz.","UHF。"),
    C("slant","📐","What does DME display directly overhead?","Height above the station in nm.","12,000 ft ≈ 2 nm。"),
    C("dmegs","🧮","10 nm in 5 min toward station: GS?","120 kt.","Calculation。"),
    C("dmegs","🧮","DME rises 1.8 nm in 36 s. GS?","1.8 ×100 = 180 kt.","36 s rule。"),
    C("dmefix","📍","Fix accuracy using co-located VOR/DME?","Excellent, position lines intersect at 90°.","90°。"),
    C("ils","🛬","ILS components?","Localiser, glide slope, marker beacons and approach lighting.","LOC GS markers。"),
    C("loc","🛬","Full-scale localiser deflection?","About 2.5° each side of centre.","slides。"),
    C("glideslope","🛬","Needle below centre means?","Aircraft is above the glide slope.","Fly down。"),
    C("rod","🧮","ROD for 3° at 120 kt GS?","About 600 fpm (5 × GS).","Rule。"),
    C("markers","🔊","Marker colours?","Outer blue, middle amber, inner white.","OMI。"),
    C("ilscat","🛬","Cat I minima (FAA)?","DH 200 ft, RVR 1800 ft.","FAA。"),
    C("gnss","🛰️","GNSS vs GPS?","GNSS is the umbrella term; GPS is the US system.","GNSS 包 GPS。"),
    C("gpsseg","🛰️","GPS segments?","Space, control, user.","三部分。"),
    C("gpsseg","🛰️","GPS orbit?","About 20,200 km, 55° inclination, ~12 hr period.","24 sats。"),
    C("trilat","🛰️","Why 4 satellites for 3D?","Three for position and one for receiver clock bias.","4 unknowns。"),
    C("clock","⏱️","How does receiver fix clock error?","Using extra satellite range to solve time offset.","trimming。"),
    C("pdop","📉","Good geometry?","Widely spaced satellites give low PDOP.","分散。"),
    C("pdop","📉","ICAO PDOP limits?","<6 en route; <3 non-precision approach.","Ebook。"),
    C("raim","🛰️","RAIM purpose?","Checks satellite integrity and warns of faulty satellites.","Integrity。"),
    C("raim","🛰️","Satellites for FD and FDE?","5 for fault detection, 6 for exclusion.","handwritten slide。"),
    C("baro","🛰️","Barometric aiding?","Uses altimeter as extra range source.","補一粒 sat。"),
    C("gpserr","⚠️","List GPS errors.","Ionospheric, tropospheric, multipath, clock, ephemeris, receiver noise, datum.","清單。"),
    C("sps","🛰️","SPS vs PPS?","SPS civil C/A code; PPS authorised users with P code.","民用 vs 軍用。"),
    C("wgs84","🌍","Datum used by GPS/ICAO?","WGS 84.","WGS84。"),
    C("dgps","🛰️","DGPS idea?","A ground station of known position broadcasts corrections.","GBAS。"),
    C("gpshf","🧠","GPS human factors?","Mode error, data entry error, complacency.","清單。"),
    C("rnav","🛰️","RNAV vs RNP?","RNP adds on-board performance monitoring and alerting.","Monitoring。"),
    C("awr","🌩️","Does AWR detect CAT?","No, it detects precipitation, not clear air turbulence.","唔見 CAT。"),
    C("awr","🌩️","AWR frequency?","SHF ~9 GHz, 3 cm wavelength.","X band。")
  ],
  anims:[
    {title:"Wind Triangle：Heading / GS / Drift", hint:"拉 track、TAS、風向、風速", build(box,H){
      const svg=H.svg(box,700,440), say=H.note(box), el=H.el;
      const rad=d=>d*Math.PI/180, wrap=a=>((a%360)+360)%360, dir=a=>[Math.sin(rad(a)),-Math.cos(rad(a))];
      ["navbl","navor","navgr","navwh"].forEach((id,i)=>H.marker(svg,id,["#38bdf8","#f59e0b","#34d399","#e2e8f0"][i]));
      const P0=[350,220], s=0.75;
      const txt=(x,y,c,t,sz)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":"middle"},svg);e.textContent=t;return e};
      const trk=el("line",{stroke:"#94a3b8","stroke-dasharray":"6 5","stroke-width":1.5},svg);
      const tas=el("line",{stroke:"#38bdf8","stroke-width":4,"marker-end":"url(#navbl)"},svg);
      const wnd=el("line",{stroke:"#f59e0b","stroke-width":4,"marker-end":"url(#navor)"},svg);
      const gsl=el("line",{stroke:"#34d399","stroke-width":4,"marker-end":"url(#navgr)"},svg);
      el("line",{x1:60,y1:80,x2:60,y2:30,stroke:"#e2e8f0","stroke-width":2,"marker-end":"url(#navwh)"},svg);txt(60,22,"#e2e8f0","N");
      const t1=txt(120,410,"#38bdf8","",14),t2=txt(300,410,"#f59e0b","",14),t3=txt(480,410,"#34d399","",14),t4=txt(620,410,"#e2e8f0","",14);
      const dot=el("circle",{r:6,fill:"#fff"},svg);
      const lab=txt(0,0,"#e2e8f0","",12);
      let st={};
      function upd(){
        const {trkA,TAS,wf,W}=st; if(trkA===undefined||TAS===undefined||wf===undefined||W===undefined)return;
        const wa=wf-trkA, x=W*Math.sin(rad(wa))/TAS;
        const ok=Math.abs(x)<=1; const wca=ok?Math.asin(x)*180/Math.PI:0;
        const hdg=wrap(trkA+wca), gs=TAS*Math.cos(rad(wca))-W*Math.cos(rad(wa));
        const d1=dir(hdg),d3=dir(trkA),dw=dir(wf+180);
        const A=[P0[0]+d1[0]*TAS*s,P0[1]+d1[1]*TAS*s];
        const G=[P0[0]+d3[0]*Math.max(gs,0)*s,P0[1]+d3[1]*Math.max(gs,0)*s];
        const tl=dir(trkA);
        trk.setAttribute("x1",P0[0]-tl[0]*190);trk.setAttribute("y1",P0[1]-tl[1]*190);trk.setAttribute("x2",P0[0]+tl[0]*210);trk.setAttribute("y2",P0[1]+tl[1]*210);
        tas.setAttribute("x1",P0[0]);tas.setAttribute("y1",P0[1]);tas.setAttribute("x2",A[0]);tas.setAttribute("y2",A[1]);
        wnd.setAttribute("x1",A[0]);wnd.setAttribute("y1",A[1]);wnd.setAttribute("x2",A[0]+dw[0]*W*s);wnd.setAttribute("y2",A[1]+dw[1]*W*s);
        gsl.setAttribute("x1",P0[0]);gsl.setAttribute("y1",P0[1]);gsl.setAttribute("x2",G[0]);gsl.setAttribute("y2",G[1]);
        st.G=G;
        t1.textContent="HDG "+Math.round(hdg)+"° / TAS "+TAS;
        t2.textContent="Wind "+Math.round(wrap(wf))+"° / "+W;
        t3.textContent="TRK "+Math.round(trkA)+"° / GS "+Math.round(gs);
        const dr=Math.round(wca*10)/10; t4.textContent="Drift "+Math.abs(dr)+"° "+(dr>0?"R":dr<0?"L":"");
        say(ok?("Wind from "+Math.round(wf)+"° 推機尾，要向風偏 "+Math.abs(dr)+"° → HDG "+Math.round(hdg)+"°，GS "+Math.round(gs)+" kt（藍+橙=綠）"):"風太強，TAS 唔夠保持呢條 track");
      }
      let ph=0;
      H.loop(()=>{ if(!st.G)return; ph=(ph+0.01)%1; dot.setAttribute("cx",P0[0]+(st.G[0]-P0[0])*ph);dot.setAttribute("cy",P0[1]+(st.G[1]-P0[1])*ph)});
      H.slider(box,"Track °",0,359,104,v=>{st.trkA=v;upd()});
      H.slider(box,"TAS kt",60,200,140,v=>{st.TAS=v;upd()});
      H.slider(box,"Wind from °",0,359,311,v=>{st.wf=v;upd()});
      H.slider(box,"Wind kt",0,60,25,v=>{st.W=v;upd()});
    }},
    {title:"1 in 60：TE、CA 同改 Heading", hint:"拉總距離、已飛距離、偏離", build(box,H){
      const svg=H.svg(box,700,300), say=H.note(box), el=H.el;
      H.marker(svg,"navg1","#34d399");
      const A=[60,150],B=[640,150];
      const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
      el("line",{x1:A[0],y1:A[1],x2:B[0],y2:B[1],stroke:"#94a3b8","stroke-dasharray":"6 5","stroke-width":2},svg);
      txt(A[0],A[1]+25,"#e2e8f0","A");txt(B[0],B[1]+25,"#e2e8f0","B");
      const made=el("line",{stroke:"#fb7185","stroke-width":3},svg);
      const direct=el("line",{stroke:"#34d399","stroke-width":3,"marker-end":"url(#navg1)"},svg);
      const par=el("line",{stroke:"#f59e0b","stroke-width":2,"stroke-dasharray":"4 4"},svg);
      const ac=el("circle",{r:7,fill:"#38bdf8"},svg);
      const l1=txt(350,230,"#fb7185","",15),l2=txt(350,252,"#34d399","",15),l3=txt(350,274,"#f59e0b","",14);
      txt(350,25,"#94a3b8","（角度畫面有誇大，數字係真實計算）",12);
      let D=100,F=40,O=2;
      function upd(){
        const f=Math.min(F,D-5), x=A[0]+f/D*(B[0]-A[0]), y=A[1]-O*14;
        ac.setAttribute("cx",x);ac.setAttribute("cy",y);
        made.setAttribute("x1",A[0]);made.setAttribute("y1",A[1]);made.setAttribute("x2",x);made.setAttribute("y2",y);
        direct.setAttribute("x1",x);direct.setAttribute("y1",y);direct.setAttribute("x2",B[0]);direct.setAttribute("y2",B[1]);
        par.setAttribute("x1",x);par.setAttribute("y1",y);par.setAttribute("x2",B[0]);par.setAttribute("y2",y);
        const TE=Math.abs(O)*60/f, CA=Math.abs(O)*60/(D-f);
        const side=O>0?"左":"右", turn=O>0?"右":"左";
        l1.textContent="TE = "+Math.abs(O)+" × 60 ÷ "+f+" = "+TE.toFixed(1)+"° "+side;
        l2.textContent="CA = "+Math.abs(O)+" × 60 ÷ "+(D-f)+" = "+CA.toFixed(1)+"°  →  向"+turn+"轉 TE+CA = "+(TE+CA).toFixed(1)+"° 直飛 B";
        l3.textContent="只轉 1×TE = "+TE.toFixed(1)+"° → 平行；2×TE = "+(2*TE).toFixed(1)+"° → 同距離（約 "+f+" nm）後返 track";
        say(O===0?"on track":"偏 "+Math.abs(O)+" nm（"+side+"）；剩 "+(D-f)+" nm，改 "+(TE+CA).toFixed(1)+"° 向"+turn+"，飛直線去 B");
      }
      H.slider(box,"總距離 nm",50,240,100,v=>{D=v;upd()});
      H.slider(box,"已飛 nm",10,200,40,v=>{F=v;upd()});
      H.slider(box,"偏離 nm（+左 / −右）",-10,10,2,v=>{O=v;upd()},0.5);
    }},
    {title:"T → V → M → D → C 轉換", hint:"拉 True heading、Var、Dev", build(box,H){
      const svg=H.svg(box,700,360), say=H.note(box), el=H.el;
      const rad=d=>d*Math.PI/180, wrap=a=>((a%360)+360)%360, C=[200,180], R=130;
      el("circle",{cx:C[0],cy:C[1],r:R,fill:"none",stroke:"#475569","stroke-width":2},svg);
      const ln=(c,w)=>el("line",{stroke:c,"stroke-width":w},svg);
      const tn=ln("#e2e8f0",3),mn=ln("#f59e0b",3),cn=ln("#fb7185",3),ah=ln("#38bdf8",5);
      const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||14,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
      const lt=txt(0,0,"#e2e8f0","TN",13),lm=txt(0,0,"#f59e0b","MN",13),lc=txt(0,0,"#fb7185","CN",13),lh=txt(0,0,"#38bdf8","Heading",13);
      const r1=txt(420,80,"#e2e8f0","",17,"start"),r2=txt(420,120,"#f59e0b","",17,"start"),r3=txt(420,160,"#fb7185","",17,"start");
      txt(420,230,"#94a3b8","West is best, East is least",14,"start");
      txt(420,255,"#94a3b8","T − E = M ；T + W = M",14,"start");
      txt(420,280,"#94a3b8","C 去 T：Compass → Add East → True (CADET)",14,"start");
      function setLine(e,ang,len,label){const x=C[0]+Math.sin(rad(ang))*len,y=C[1]-Math.cos(rad(ang))*len;e.setAttribute("x1",C[0]);e.setAttribute("y1",C[1]);e.setAttribute("x2",x);e.setAttribute("y2",y);if(label){label.setAttribute("x",C[0]+Math.sin(rad(ang))*(len+16));label.setAttribute("y",C[1]-Math.cos(rad(ang))*(len+16)+4)}}
      let T=60,V=10,D=-3;
      const f=n=>(n>0?n+"E":n<0?(-n)+"W":"0");
      function upd(){
        const M=wrap(T-V), Cc=wrap(M-D);
        setLine(tn,0,R+4,lt);setLine(mn,V,R-20,lm);setLine(cn,V+D,R-45,lc);setLine(ah,T,R-8,lh);
        r1.textContent="True  "+String(Math.round(T)).padStart(3,"0")+"°";
        r2.textContent="Var "+f(V)+" → Magnetic "+String(Math.round(M)).padStart(3,"0")+"°";
        r3.textContent="Dev "+f(D)+" → Compass "+String(Math.round(Cc)).padStart(3,"0")+"°";
        say("Var 令 TN→MN 偏 "+f(V)+"；Dev 令 MN→CN 再偏 "+f(D)+"。T "+Math.round(T)+" → M "+Math.round(M)+" → C "+Math.round(Cc));
      }
      H.slider(box,"True heading °",0,359,60,v=>{T=v;upd()});
      H.slider(box,"Var °（+E / −W）",-25,25,10,v=>{V=v;upd()});
      H.slider(box,"Dev °（+E / −W）",-10,10,-3,v=>{D=v;upd()});
    }},
    {title:"VOR：Radial / OBS / CDI / TO-FROM", hint:"拉飛機 radial、OBS、heading", build(box,H){
      const svg=H.svg(box,700,380), say=H.note(box), el=H.el;
      const rad=d=>d*Math.PI/180, wrap=a=>((a%360)+360)%360, w180=a=>{a=wrap(a);return a>180?a-360:a};
      const S=[170,190];
      for(let a=0;a<360;a+=30){el("line",{x1:S[0],y1:S[1],x2:S[0]+Math.sin(rad(a))*150,y2:S[1]-Math.cos(rad(a))*150,stroke:"#334155"},svg);const t=el("text",{x:S[0]+Math.sin(rad(a))*163,y:S[1]-Math.cos(rad(a))*163+4,fill:"#64748b","font-size":11,"text-anchor":"middle"},svg);t.textContent=String(a).padStart(3,"0")}
      el("circle",{cx:S[0],cy:S[1],r:8,fill:"#a78bfa"},svg);
      const crs=el("line",{stroke:"#facc15","stroke-width":3},svg);
      const ac=el("polygon",{points:"0,-12 8,10 -8,10",fill:"#38bdf8"},svg);
      // CDI
      const CX=520,CY=190; el("circle",{cx:CX,cy:CY,r:105,fill:"#0f172a",stroke:"#94a3b8","stroke-width":3},svg);
      for(let i=-5;i<=5;i++){if(i)el("circle",{cx:CX+i*17,cy:CY,r:4,fill:"#e2e8f0"},svg)}
      const needle=el("line",{y1:CY-70,y2:CY+70,stroke:"#facc15","stroke-width":5},svg);
      el("line",{x1:CX,y1:CY-95,x2:CX,y2:CY-72,stroke:"#e2e8f0","stroke-width":2},svg);
      const flag=el("text",{x:CX+55,y:CY-40,fill:"#34d399","font-size":18,"text-anchor":"middle","font-weight":700},svg);
      const obsT=el("text",{x:CX,y:CY+95,fill:"#e2e8f0","font-size":16,"text-anchor":"middle"},svg);
      const st={};
      function upd(){
        if(st.r===undefined||st.d===undefined||st.o===undefined||st.h===undefined)return;
        const x=S[0]+Math.sin(rad(st.r))*st.d*4, y=S[1]-Math.cos(rad(st.r))*st.d*4;
        ac.setAttribute("transform","translate("+x+","+y+") rotate("+st.h+")");
        crs.setAttribute("x1",S[0]-Math.sin(rad(st.o))*150);crs.setAttribute("y1",S[1]+Math.cos(rad(st.o))*150);crs.setAttribute("x2",S[0]+Math.sin(rad(st.o))*150);crs.setAttribute("y2",S[1]-Math.cos(rad(st.o))*150);
        const d1=w180(st.r-st.o); let from=Math.abs(d1)<=90, delta=from?d1:w180(st.r-st.o-180);
        let needleDeg=from?-delta:delta; const dots=Math.max(-5,Math.min(5,needleDeg/2));
        needle.setAttribute("x1",CX+dots*17);needle.setAttribute("x2",CX+dots*17);
        flag.textContent=from?"FROM":"TO"; obsT.textContent="OBS "+String(Math.round(st.o)).padStart(3,"0");
        const side=needleDeg>0?"右":"左";
        say("Aircraft 喺 "+Math.round(st.r)+" radial；OBS "+Math.round(st.o)+" → "+(from?"FROM":"TO")+"，離 course "+Math.abs(Math.round(delta))+"°，needle 偏"+(Math.abs(needleDeg)<0.5?"中":side)+"（"+Math.min(5,Math.abs(needleDeg/2)).toFixed(1)+" dots）。Heading 轉 CDI 唔會變。");
      }
      H.slider(box,"Aircraft radial °",0,359,75,v=>{st.r=v;upd()});
      H.slider(box,"Distance nm",5,35,20,v=>{st.d=v;upd()});
      H.slider(box,"OBS course °",0,359,90,v=>{st.o=v;upd()});
      H.slider(box,"Aircraft heading °",0,359,30,v=>{st.h=v;upd()});
    }},
    {title:"ILS：Localiser + Glide Slope 偏差", hint:"拉橫向偏、高度、距離、GS", build(box,H){
      const svg=H.svg(box,700,430), say=H.note(box), el=H.el;
      const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
      txt(240,18,"#94a3b8","Top view（橫向）",12);txt(240,228,"#94a3b8","Side view（縱向）",12);
      // top view: runway at x=450, baseline y=110
      el("rect",{x:450,y:102,width:30,height:16,fill:"#64748b"},svg);
      el("line",{x1:30,y1:110,x2:450,y2:110,stroke:"#94a3b8","stroke-dasharray":"6 5"},svg);
      const acT=el("polygon",{points:"0,-9 -7,8 7,8",fill:"#38bdf8",transform:"rotate(90)"},svg);
      // side view baseline y=400
      el("line",{x1:30,y1:400,x2:480,y2:400,stroke:"#64748b","stroke-width":2},svg);
      const gp=el("line",{x1:450,y1:400,stroke:"#34d399","stroke-width":2},svg);
      const acS=el("circle",{r:7,fill:"#38bdf8"},svg);
      // instrument
      const CX=585,CY=215; el("rect",{x:510,y:110,width:150,height:210,rx:12,fill:"#0f172a",stroke:"#94a3b8","stroke-width":3},svg);
      for(let i=-2;i<=2;i++){if(i){el("circle",{cx:CX+i*28,cy:CY,r:4,fill:"#e2e8f0"},svg);el("circle",{cx:CX,cy:CY+i*28,r:4,fill:"#e2e8f0"},svg)}}
      const loc=el("line",{y1:CY-65,y2:CY+65,stroke:"#facc15","stroke-width":5},svg);
      const gsn=el("line",{x1:CX-65,x2:CX+65,stroke:"#facc15","stroke-width":5},svg);
      txt(CX,345,"#e2e8f0","需要「飛向針」方向",12);
      const r1=txt(585,372,"#e2e8f0","",13),r2=txt(585,392,"#e2e8f0","",13),r3=txt(585,412,"#38bdf8","",13);
      const st={};
      function upd(){
        if(st.d===undefined||st.o===undefined||st.h===undefined||st.g===undefined)return;
        const dft=st.d*6076, lat=Math.atan(st.o/dft)*180/Math.PI, ang=Math.atan(st.h/dft)*180/Math.PI;
        const x=450-st.d*40;
        acT.setAttribute("transform","translate("+x+","+(110+st.o*0.08)+") rotate(90)");
        const gpH=st.d*6076*Math.tan(3*Math.PI/180);
        gp.setAttribute("x2",30);gp.setAttribute("y2",400-(450-30)/40*6076*Math.tan(3*Math.PI/180)*0.05);
        acS.setAttribute("cx",x);acS.setAttribute("cy",400-st.h*0.05);
        const ld=Math.max(-2,Math.min(2,-lat/2.5*2)); loc.setAttribute("x1",CX+ld*28);loc.setAttribute("x2",CX+ld*28);
        const gd=ang-3, gdd=Math.max(-2,Math.min(2,gd/0.7*2)); gsn.setAttribute("y1",CY+gdd*28);gsn.setAttribute("y2",CY+gdd*28);
        r1.textContent="LOC "+lat.toFixed(2)+"° "+(st.o>0?"右":st.o<0?"左":"中")+"（滿偏 ±2.5°）";
        r2.textContent="GP 實際 "+ang.toFixed(2)+"°（目標 3°）";
        r3.textContent="ROD ≈ 5 × "+st.g+" = "+(5*st.g)+" fpm";
        say((Math.abs(lat)<0.2?"LOC 正中":"飛機喺跑道中線"+(st.o>0?"右":"左")+"邊，needle 偏"+(st.o>0?"左":"右")+" → 向針飛")+"；"+(Math.abs(gd)<0.1?"GS 正中":(gd>0?"高過 GS，needle 向下 → 加大 ROD":"低過 GS，needle 向上 → 減 ROD"))+"；此處 3° path 高度 ≈ "+Math.round(gpH)+" ft");
      }
      H.slider(box,"距離 nm",1,10,5,v=>{st.d=v;upd()},0.5);
      H.slider(box,"橫向偏 ft（+右 / −左）",-1000,1000,300,v=>{st.o=v;upd()},50);
      H.slider(box,"高度 ft（above threshold）",100,3500,1800,v=>{st.h=v;upd()},50);
      H.slider(box,"GS kt",60,160,120,v=>{st.g=v;upd()});
    }},
    {title:"DME：Slant Range 同 GS Check", hint:"揀高度、abeam 距離，撳 Fly", build(box,H){
      const svg=H.svg(box,700,320), say=H.note(box), el=H.el;
      const txt=(x,y,c,t,sz,an)=>{const e=el("text",{x,y,fill:c,"font-size":sz||13,"text-anchor":an||"middle"},svg);e.textContent=t;return e};
      const SX=350,SY=130;
      el("polygon",{points:SX+","+SY+" "+(SX-8)+","+(SY+16)+" "+(SX+8)+","+(SY+16),fill:"#a78bfa"},svg);
      txt(SX,SY+32,"#a78bfa","DME station",12);
      el("line",{x1:30,y1:SY+16,x2:670,y2:SY+16,stroke:"#64748b"},svg);
      const slant=el("line",{stroke:"#fb7185","stroke-width":2},svg), hor=el("line",{stroke:"#34d399","stroke-width":2,"stroke-dasharray":"4 4"},svg);
      const ac=el("circle",{r:7,fill:"#38bdf8"},svg);
      const rd=txt(350,25,"#e2e8f0","",16);
      const rg=txt(350,48,"#facc15","",14);
      // graph
      el("line",{x1:40,y1:300,x2:660,y2:300,stroke:"#475569"},svg);
      const curve=el("polyline",{fill:"none",stroke:"#fb7185","stroke-width":2},svg);
      const gdot=el("circle",{r:5,fill:"#fff"},svg);
      txt(60,175,"#94a3b8","DME 讀數 vs 位置",12,"start");
      let alt=20000,off=0,x=-30,run=false;
      const dist=xx=>Math.sqrt(xx*xx+off*off+Math.pow(alt/6076,2));
      function curveUpd(){let p="";for(let i=-30;i<=30;i+=1){p+=(40+(i+30)/60*620)+","+(300-dist(i)*3.5)+" "}curve.setAttribute("points",p)}
      function pos(){
        const d=dist(x), px=SX+x*10, py=SY+16-(alt/6076)*10;
        ac.setAttribute("cx",px);ac.setAttribute("cy",py);
        slant.setAttribute("x1",SX);slant.setAttribute("y1",SY+16);slant.setAttribute("x2",px);slant.setAttribute("y2",py);
        hor.setAttribute("x1",SX);hor.setAttribute("y1",SY+16);hor.setAttribute("x2",px);hor.setAttribute("y2",SY+16);
        gdot.setAttribute("cx",40+(x+30)/60*620);gdot.setAttribute("cy",300-d*3.5);
        const e=0.2, dd=Math.abs(dist(x+e)-dist(x-e))/(2*e)*120;
        rd.textContent="DME "+d.toFixed(1)+" nm（地面水平 "+Math.sqrt(x*x+off*off).toFixed(1)+" nm）";
        rg.textContent="用 DME 變化率計 GS = "+Math.round(dd)+" kt（真 GS 120 kt）";
        say(Math.abs(x)<2&&off<1?"飛越台上面：DME 只讀到高度 "+(alt/6076).toFixed(1)+" nm，GS 讀數亂":off>=5?"Abeam 偏遠：距離變化慢，GS check 失準":"距離越遠，slant 同水平越接近，GS check 越準");
      }
      H.slider(box,"高度 ft",1000,40000,20000,v=>{alt=v;curveUpd();pos()},1000);
      H.slider(box,"Abeam 偏距 nm",0,20,0,v=>{off=v;curveUpd();pos()});
      H.button(box,"Fly / Pause",()=>{run=!run;if(run&&x>=30)x=-30});
      H.loop(()=>{if(!run)return;x+=0.12;if(x>30){x=30;run=false}pos()});
    }},
    {title:"GPS：Satellite Geometry、PDOP、RAIM", hint:"拉分散度，加減衛星", build(box,H){
      const svg=H.svg(box,700,340), say=H.note(box), el=H.el;
      const rad=d=>d*Math.PI/180, R=[350,300], rr=220;
      el("path",{d:"M"+(R[0]-rr)+","+R[1]+" A"+rr+","+rr+" 0 0 1 "+(R[0]+rr)+","+R[1],fill:"none",stroke:"#334155","stroke-width":2,"stroke-dasharray":"6 5"},svg);
      el("line",{x1:60,y1:R[1],x2:640,y2:R[1],stroke:"#64748b"},svg);
      el("circle",{cx:R[0],cy:R[1],r:6,fill:"#34d399"},svg);
      const g=el("g",{},svg), box2=el("rect",{fill:"rgba(251,113,133,.25)",stroke:"#fb7185"},svg);
      const t1=el("text",{x:350,y:28,fill:"#e2e8f0","font-size":17,"text-anchor":"middle"},svg), t2=el("text",{x:350,y:52,fill:"#facc15","font-size":14,"text-anchor":"middle"},svg);
      let N=4,W=100;
      function inv3(m){const [a,b,c,d,e,f,g2,h,i]=m;const A=e*i-f*h,B=-(d*i-f*g2),Cc=d*h-e*g2;const det=a*A+b*B+c*Cc;if(Math.abs(det)<1e-9)return null;return [A/det,-(b*i-c*h)/det,(b*f-c*e)/det,B/det,(a*i-c*g2)/det,-(a*f-c*d)/det,Cc/det,-(a*h-b*g2)/det,(a*e-b*d)/det]}
      function upd(){
        g.innerHTML="";
        const ph=[];for(let i=0;i<N;i++)ph.push(90-W/2+(N>1?W*i/(N-1):0));
        const G=[0,0,0,0,0,0,0,0,0];
        ph.forEach(p=>{const u=[-Math.cos(rad(p)),Math.sin(rad(p)),1];for(let r=0;r<3;r++)for(let c=0;c<3;c++)G[r*3+c]+=u[r]*u[c]});
        const iv=inv3(G); const dop=iv?Math.sqrt(Math.max(0,iv[0]+iv[4])):99;
        ph.forEach(p=>{const x=R[0]-Math.cos(rad(p))*rr,y=R[1]-Math.sin(rad(p))*rr;
          el("line",{x1:R[0],y1:R[1],x2:x,y2:y,stroke:"#38bdf8","stroke-width":1.5,"stroke-dasharray":"3 4"},g);
          el("circle",{cx:x,cy:y,r:9,fill:"#38bdf8"},g);
          const ux=-Math.cos(rad(p)),uy=Math.sin(rad(p));
          el("line",{x1:R[0]-uy*35,y1:R[1]-ux*35,x2:R[0]+uy*35,y2:R[1]+ux*35,stroke:"#a78bfa","stroke-width":1},g)});
        const s=Math.min(180,dop*12);
        box2.setAttribute("x",R[0]-s/2);box2.setAttribute("y",R[1]-s/2-20);box2.setAttribute("width",s);box2.setAttribute("height",s);
        const rs=N>=6?"RAIM 可偵測 + 排除故障星（FDE）":N===5?"RAIM 只可偵測故障（FD）":N===4?"可 3D fix，冇 RAIM":"只夠 2D fix（要已知高度）";
        t1.textContent="Satellites "+N+" / 簡化 DOP ≈ "+(dop>=99?"∞":dop.toFixed(1));
        t2.textContent=rs+"；"+(dop<3?"DOP<3：NPA 都得":dop<6?"DOP<6：en route 得":"DOP 太高：精度差");
        say(W<50?"星擠喺一邊 → 位置線近乎平行 → 紅框（誤差）好大":"星分散 → 位置線交角大 → 紅框細，DOP 低");
      }
      H.slider(box,"衛星分散角度 °",20,170,100,v=>{W=v;upd()},5);
      H.button(box,"+ 衛星",()=>{N=Math.min(8,N+1);upd()});
      H.button(box,"− 衛星",()=>{N=Math.max(3,N-1);upd()});
    }},
    {title:"Holding Entry：Direct / Parallel / Teardrop", hint:"拉到達 heading，撳 Left/Right 轉手", build(box,H){
      const svg=H.svg(box,700,430), say=H.note(box), el=H.el;
      const rad=d=>d*Math.PI/180, wrap=a=>((a%360)+360)%360, CX=350,CY=215,L=110,r=32;
      let m=1, psi=300, path=[], len=[], tot=0, t=0;
      const P=(x,y)=>[CX+m*x,CY-y];
      const sect=el("g",{},svg), race=el("polyline",{fill:"none",stroke:"#e2e8f0","stroke-width":2,"stroke-dasharray":"5 4"},svg);
      const trail=el("polyline",{fill:"none",stroke:"#38bdf8","stroke-width":2,opacity:.7},svg);
      el("circle",{cx:CX,cy:CY,r:6,fill:"#facc15"},svg);
      const pl=el("polygon",{points:"0,-11 8,9 -8,9",fill:"#fff"},svg);
      const lab=el("text",{x:350,y:28,fill:"#e2e8f0","font-size":17,"text-anchor":"middle"},svg), lab2=el("text",{x:350,y:50,fill:"#94a3b8","font-size":13,"text-anchor":"middle"},svg);
      function turtle(x,y,h){const pts=[[x,y]];return {pts,get h(){return h},
        st(d){x+=Math.sin(rad(h))*d;y+=Math.cos(rad(h))*d;pts.push([x,y])},
        to(a,b){x=a;y=b;pts.push([x,y])},
        tn(dh,rr){if(!dh)return;const s=dh>0?1:-1,cx=x+s*rr*Math.cos(rad(h)),cy=y-s*rr*Math.sin(rad(h)),n=Math.ceil(Math.abs(dh)/6);for(let i=1;i<=n;i++){const hh=h+dh*i/n;pts.push([cx-s*rr*Math.cos(rad(hh)),cy+s*rr*Math.sin(rad(hh))])}const hh=h+dh;x=pts[pts.length-1][0];y=pts[pts.length-1][1];h=wrap(hh)}}}
      const minTurn=(a,b)=>((b-a+540)%360)-180;
      function type(p){return (p>=250||p<=70)?"Direct":(p>70&&p<=180)?"Parallel":"Teardrop"}
      function build(){
        const tp=type(psi), ty=turtle(-200*Math.sin(rad(psi)),-200*Math.cos(rad(psi)),psi);
        ty.st(200);
        if(tp==="Direct"){ty.tn(wrap(180-psi),r)}
        else if(tp==="Teardrop"){ty.tn(minTurn(psi,150),r);ty.st(L);ty.tn(210,r);ty.to(0,0)}
        else{ty.tn(minTurn(psi,180),r);ty.st(L);ty.tn(-210,r);ty.to(0,0)}
        if(tp==="Direct"){ty.st(L);ty.tn(180,r);ty.to(0,0)}
        const rc=turtle(0,0,0);rc.tn(180,r);rc.st(L);rc.tn(180,r);rc.to(0,0);
        const full=ty.pts.concat(rc.pts).concat(rc.pts);
        path=full; len=[0];tot=0;for(let i=1;i<path.length;i++){tot+=Math.hypot(path[i][0]-path[i-1][0],path[i][1]-path[i-1][1]);len.push(tot)}
        t=0;
        race.setAttribute("points",rc.pts.map(p=>P(p[0],p[1]).join(",")).join(" "));
        sect.innerHTML="";
        const sec=(b0,b1,c)=>{const a=P(Math.sin(rad(b0))*120,Math.cos(rad(b0))*120),b=P(Math.sin(rad(b1))*120,Math.cos(rad(b1))*120);const sw=m===1?1:0;el("path",{d:"M"+CX+","+CY+" L"+a.join(",")+" A120,120 0 0 "+sw+" "+b.join(",")+" Z",fill:c,opacity:.18},sect)};
        sec(70,250,"#38bdf8");sec(250,360,"#34d399");sec(0,70,"#f59e0b");
        lab.textContent=tp+" entry"+(m===1?"（右手 pattern）":"（左手 pattern）");
        lab2.textContent="Heading(以 inbound=360 計) "+Math.round(psi)+"° · 藍=Direct 綠=Parallel 橙=Teardrop";
        say(tp==="Direct"?"Direct：到 fix 直接轉入 pattern，向 holding side 轉":tp==="Parallel"?"Parallel：喺 non-holding side 平行 outbound，之後向 holding side 轉大彎回 inbound":"Teardrop：喺 holding side 偏 30° outbound，再轉返 inbound");
      }
      H.loop(()=>{ if(!path.length)return; t=(t+1.6)%tot; let i=1;while(i<len.length-1&&len[i]<t)i++;
        const f=(t-len[i-1])/Math.max(1e-6,len[i]-len[i-1]), a=path[i-1],b=path[i], x=a[0]+(b[0]-a[0])*f,y=a[1]+(b[1]-a[1])*f;
        const p=P(x,y), hd=Math.atan2(m*(b[0]-a[0]),(b[1]-a[1]))*180/Math.PI;
        pl.setAttribute("transform","translate("+p[0]+","+p[1]+") rotate("+hd+")");
        trail.setAttribute("points",path.slice(0,i).map(q=>P(q[0],q[1]).join(",")).join(" ")+" "+p.join(","))});
      H.button(box,"Right / Left 手",()=>{m=-m;build()});
      H.button(box,"Replay",()=>{t=0});
      H.slider(box,"到達 heading °（右手 frame）",0,359,300,v=>{psi=m===1?v:wrap(360-v);build()},5);
    }},
  ]
});
})();
