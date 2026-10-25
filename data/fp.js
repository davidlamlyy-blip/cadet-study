// Flight Planning & Procedures — 來源見 coverage/fp.md
(function(){
const C=(topic,e,q,a,zh)=>({e,q,a,zh,topic,st:"ok"});
const T=(id,g,t,d,pts,rel,src,check)=>({id:"fp."+id,g,t,d,pts,rel:rel.map(r=>r.indexOf(".")<0?"fp."+r:r),src,check:!!check});
const topics=[
// ---- Planning Basics
T("why","Planning Basics","Why Plan",
 "PIC 負責確保開飛前一切夠安全：油、天氣、航線、備降。",
 ["Fuel enough for distance + weather","Allow diversion, delay, re-route","Plan = threat analysis (TEM)","Plan done BEFORE start-up"],
 ["flow","fuel-why","threats"],"Airspace FP02 (photo 032754916); Basic Aero Knowledge ch Flight Planning"),
T("flow","Planning Basics","Pre-flight Planning Flow",
 "由 currency 到 notification，一步一步，唔可以跳。",
 ["Currency → charts → Wx + NOTAM","Route, altitude, last light","W&B + take-off/landing perf","Fuel plan → flight notification","Documents + pre-flight inspect"],
 ["currency","wxnotam","wb-fuel","notif","docs"],"YPPF Visual Pilot Guide p3-4; Basic Aero Knowledge (Flight Planning & Notification)"),
T("currency","Planning Basics","Pilot Currency Check",
 "未 current 就唔好飛：medical、flight review、90 日 3 次起降。",
 ["Medical current? else no solo","Flight review current?","3 T/O & landings in 90 days → pax","Charts current","(Australia CASA rules)"],
 ["flow","pax-brief"],"YPPF VPG p4; PPL flight test questions Q1",),
T("wxnotam","Planning Basics","Weather & NOTAM Check",
 "開飛前一定睇 forecast 同 NOTAM；佢哋會改變 threat。",
 ["Forecast: TAF / ARFOR","NOTAM: runway, navaid, airspace","Does Wx change threat analysis?","Brief before EVERY flight"],
 ["notam","alt-minima","flow"],"VPG p2; Basic Aero Knowledge"),
T("wb-fuel","Planning Basics","Weight vs Fuel",
 "油愈多、人同行李就愈少；唔一定可以加滿。",
 ["Payload vs fuel trade-off","Fuel weight = SG 0.71 x litres (AVGAS)","MLW check: burn off before landing","Example DA40 TOW 1200 vs MLW 1150 kg"],
 ["fuel-conv","fuel-fta","flow"],"VPG p4; Nav ebook (SG); PPL test Q29",),
T("notif","Planning Basics","Flight Notification & SARTIME",
 "遞交 flight notification 或設 SARTIME，等人知你喺邊。",
 ["Submit via NAIPS / phone","SARTIME = time SAR starts if no cancel","Or leave flight note with person","Cancel SARTIME on landing"],
 ["sar-phases","flow"],"VPG p5; Basic Aero Knowledge (SARTIME); Airspace FP03 flight notification screens"),
T("sar-phases","Planning Basics","SAR Emergency Phases",
 "三級緊急階段：Uncertainty → Alert → Distress。",
 ["INCERFA: doubt about safety","ALERFA: apprehension, no news","DETRESFA: reasonably certain danger","No fuel to reach safety = Distress"],
 ["notif"],"Basic Aero Knowledge p179-180"),
T("docs","Planning Basics","Documents to Carry",
 "licence、medical、checklist、AFM/POH、maintenance release。",
 ["Pilot licence + medical","Approved checklist","AFM / POH","Maintenance release valid","Check hours + required maint"],
 ["flow"],"VPG p5"),
T("pubs","Planning Basics","Aeronautical Publications",
 "AIP、ERSA、NOTAM、AIC、CAAP：各有用途，開飛前要睇。",
 ["AIP: lasting procedures","ERSA: aerodrome + PRD + procedures","NOTAM: time-critical changes","AIC: admin / future info","CAAP: advice e.g. fuel policy"],
 ["notam","ersa-lesson"],"Basic Aero Knowledge p149-151 (Australia)"),
T("notam","Planning Basics","NOTAM Decode",
 "NOTAM 有 Q-line、A) 地點、B/C) 時間、E) 內容、F/G) 高度。",
 ["Q) FIR/code/traffic/scope/limits","A) location, B) from, C) to","E) plain language text","F/G) lower/upper limits","Abbreviations: ACT, CLSD, U/S, HLDG"],
 ["wxnotam","pubs"],"ENZO NOTAM codes (abbreviation lists, FAA/ICAO/AIS); Basic Aero Knowledge NOTAM contents; ICAO format = general knowledge"),
T("ersa-lesson","Planning Basics","ERSA Lesson (Zoo Overflight)",
 "學生冇睇 ERSA，飛過要避開嘅地方。讀晒 Additional Info。",
 ["Read ERSA of every aerodrome","Note restrictions on map / nav log","Brief instructor even if solo","Avoid Monarto Zoo below 2000 ft AMSL"],
 ["pubs","wxnotam"],"Scenario Based Training 25 Jun 2024"),
T("threats","Planning Basics","Threat Analysis in Planning",
 "TEM：預先諗 expected / unexpected / latent threats。",
 ["Expected: Wx, terrain, fatigue","Unexpected: delays, forecast wrong","Latent: old charts, worn kit","Counter each one before flying","Post-flight review"],
 ["why","agrade"],"Basic Aero Knowledge ch8 TEM / Flight Planning"),
// ---- Fuel Planning
T("fuel-why","Fuel Planning","Why Fuel Planning",
 "PIC 要確保油夠：距離、天氣、改降、等候、重新路由。",
 ["Know capacity vs usable fuel","Know consumption rate","Know fuel system","Know fuel availability en route","Never plan to use reserves"],
 ["fuel-layers","never-reserve","why"],"Airspace FP02 (photos 032754916, 032915892)"),
T("fuel-layers","Fuel Planning","Fuel Plan Layers",
 "Taxi + Trip + Variable + Alternate + Final Reserve + Holding。",
 ["Taxi: start/taxi/run-up","Trip: climb + cruise (+descent)","Variable: 10% of trip (school)","Alternate fuel","Fixed reserve + holding","Fuel required vs margin"],
 ["taxi","trip","variable","alt-fuel","final-res","hold-fuel","margin"],"Airspace FP02 slides; VPG p8 worked example"),
T("taxi","Fuel Planning","Taxi Fuel",
 "開機到起飛前用嘅油；看本地情況（滑行時間、擠塞）。",
 ["DA40 FCOM: 2 USG","Engine start, taxi, run-up","Airliner: includes APU","Local congestion matters"],
 ["fuel-layers","fuel-fta"],"Airspace FP02 photo 035814781, 034854705"),
T("trip","Fuel Planning","Trip Fuel (Climb + Cruise)",
 "起飛到目的地所需油；爬升同巡航用唔同 burn rate。",
 ["Climb burn higher (DA40 14 USG/hr)","Cruise burn lower (9.8 USG/hr)","Every 2000 ft climb add 1 min ETI","Use wind-corrected GS for time"],
 ["fuel-layers","climb-fuel","fuel-fta"],"Airspace FP02 exercise photo 040747438; CPL Knowledge"),
T("climb-fuel","Fuel Planning","Climb Fuel Rule of Thumb",
 "課堂簡化：每爬 2000 ft 加 1 分鐘 ETI，按 climb burn 計。",
 ["Climb time from altitude gain","Use climb burn rate","Rest of leg at cruise rate","Or use POH climb chart (VPG)"],
 ["trip"],"Airspace FP02 exercise; VPG p8"),
T("variable","Fuel Planning","Variable / Contingency Fuel",
 "應付想像不到嘅因素，通常 trip fuel 嘅百分比。",
 ["School policy 10% of trip","CASA Part 91 VFR piston: N/A","5% of trip: >5700 kg piston","Part 135: 10% (CPL notes)","Different system, different %"],
 ["fuel-layers","fuel-reqs"],"Airspace FP02 photos 034100093, 035105836; CPL Knowledge",true),
T("final-res","Fuel Planning","Fixed / Final Reserve Fuel",
 "1500 ft AAL、ISA、holding speed 飛一段時間嘅油，唔可用。",
 ["1500 ft above aerodrome, ISA","Day VFR piston <=5700 kg: 30 min","Night VFR / IFR: 45 min","DA40: 3.5 USG VFR / 5 USG IFR","Never plan to use it"],
 ["fuel-layers","never-reserve","fuel-reqs"],"Airspace FP02 photos 034631492, 035105836, 034854705; CPL Knowledge"),
T("hold-fuel","Fuel Planning","Holding Fuel",
 "預計要 holding 嘅時間 x 飛機 holding burn。",
 ["DA40: 6.6 USG/hr","Time from TAF INTER/TEMPO","INTER 30 min, TEMPO 60 min","Alternative to carrying alternate"],
 ["inter-tempo","fuel-layers"],"Airspace FP02 photo 035222097; CPL Knowledge; VPG p5,p9"),
T("alt-fuel","Fuel Planning","Alternate Fuel",
 "由目的地飛去 alternate 所需油（加 approach）。",
 ["Needed if alt-minima triggered","From missed approach to alternate","Use alternate wind + level","No alt: Day VFR within 50 nm (CASA)"],
 ["alt-minima","fuel-layers"],"CPL Knowledge Alternate Minima; VPG p5"),
T("margin","Fuel Planning","Fuel Margin & Endurance",
 "Margin = 實際可用油 - 需要油；Endurance = 可用油換做時間。",
 ["Margin = usable - required","Endurance = usable fuel / burn","DA40 std 40.2 USG, LR 50 USG","Margin = extra, not reserve","Compare with plan in flight"],
 ["fuel-layers","fuel-tank","inflight-fuel"],"Airspace FP02 photos 040109734, 040211704"),
T("fuel-tank","Fuel Planning","DA40 Tanks",
 "標準 tank 40.2 USG usable，Long range 50 USG。",
 ["Std: 40.2 USG usable (2x17 indicated)","LR: 50 USG usable (2x16 indicated)","Max diff between tanks 10 / 8 USG","Capacitance fuel quantity system"],
 ["margin","fuel-fta"],"Airspace FP02 photo 040211704; CPL Knowledge"),
T("fuel-fta","Fuel Planning","DA40 Fuel Consumption (FCOM)",
 "Taxi 2 USG；Climb 14；Cruise 9.8；Hold 6.6 USG/hr。",
 ["Cruise 65% power, best power","Hold 45% power, best economy","Final res 5 USG IFR / 3.5 VFR","Variable 10%"],
 ["taxi","trip","hold-fuel","final-res"],"Airspace FP02 photos 034854705, 040643510; CPL Knowledge"),
T("fuel-reqs","Fuel Planning","Fuel Requirements by Rule",
 "Final reserve 同 contingency 按飛機重量同 flight rules 而變。",
 ["CASA Part 91: piston <=5700 kg 30 min Day VFR","Night VFR / IFR 45 min","Piston >5700 kg: 45 min + 5%","Old CAAP 234-1: piston 45 min fixed","Check current rules!"],
 ["variable","final-res","far-fuel"],"Airspace FP02 photo 035105836; CPL Knowledge; VPG p9 (CAAP 234-1)",true),
T("far-fuel","Fuel Planning","FAA Part 121 Fuel (Domestic)",
 "FAA 國內：目的地 + 最遠 alternate + 45 分鐘。",
 ["Fly to dispatch airport","Then to farthest alternate","Then 45 min normal cruise","No alternate: dest + 2 hr","Prop flag: 30 min + 15% or 90 min"],
 ["fuel-reqs","isolated"],"ATP Test Prep ch1 Fuel Requirements (14 CFR 121.639)"),
T("isolated","Fuel Planning","Isolated Aerodrome",
 "最近 alternate 超過 1.5 小時：冇 alternate，要特別油量。",
 ["Isolated = >1.5 hr to alternate","Piston: 2 hr cruise OR","45 min + 15% flight time","Whichever is less","(per Airspace slide)"],
 ["alt-fuel","pdp"],"Airspace FP02 photo 050445944",true),
T("pdp","Fuel Planning","Pre-Determined Point (PDP)",
 "油只夠去目的地或 alternate 其中一個，經 PDP 決定。",
 ["Fuel for dest OR alternate via PDP","Plan fuel = greater of A or B","Decide at PDP where to go","Used to cut contingency fuel"],
 ["era","isolated"],"Airspace FP02 photo 050733551",true),
T("era","Fuel Planning","En-route Alternate Region",
 "ERA 位置：離目的地 25% 距離或 20%+50NM（取大）。",
 ["Example total 500 NM","25% = 125 NM, 20%+50 = 150 NM","Use the larger: 150 NM","ERA radius 20% = 100 NM"],
 ["pdp"],"Airspace FP02 photo 050556389",true),
T("never-reserve","Fuel Planning","Never Plan to Use Reserve",
 "Fixed / variable reserve 係後備，唔係計劃油量。",
 ["Plan to land with reserves intact","Use of reserve = report/Mayday?","Below final reserve: declare MAYDAY","Reserve is for the unexpected"],
 ["final-res","mayday-fuel"],"VPG p4; PPL test Q20"),
T("mayday-fuel","Fuel Planning","Fuel Emergency Call",
 "預計降落時油少於 final reserve：要 MAYDAY。",
 ["Calculated fuel < min reserve on landing","Declare MAYDAY (CASA)","Insufficient fuel = DETRESFA","Don't wait until empty"],
 ["never-reserve","sar-phases"],"PPL flight test questions Q20; Basic Aero Knowledge p180"),
T("inflight-fuel","Fuel Planning","In-flight Fuel Management",
 "每 30 分鐘及 turning point 比較實際同計劃油量。",
 ["Compare gauge vs fuel log","Measured by time (mins)","Check tank selection","Fuel margin comparison","Can't replace pre-flight planning"],
 ["margin","fuel-check"],"Airspace FP02 photos 050027273, 050327714; VPG p4"),
T("fuel-check","Fuel Planning","Pre-flight Fuel Check",
 "Dip tank、兩種方法 cross-check，差 >3% 用低數。",
 ["Refuel on level ground","Dip each tank","Cross-check by 2 methods","Use lowest if diff >3%","Drains closed, vents clear, cap sealed"],
 ["water","refuel","inflight-fuel"],"VPG p4"),
T("water","Fuel Planning","Fuel Water Contamination",
 "水三種形態；每日首飛、每次加油後 sample。",
 ["Dissolved, suspended, free water","Condensation in part-empty tank","Settle 15 min per 300 mm (avgas)","Drain lowest point","Sense of smell alone unreliable"],
 ["fuel-check","refuel"],"Scenario Based 04 Jun 2024 (AC 91-25 extract); CPL Knowledge"),
T("refuel","Fuel Planning","Refuelling Safety",
 "Bonding 先開 cap；avgas 加油時唔准乘客喺機上。",
 ["Earth lead to bare metal, nozzle first","No pax on board with AVGAS","Cease if spill within 15 m","Sample after each refuel","Jerry-can: sample + filter"],
 ["fuel-check","water"],"CPL Knowledge 2(l); PPL test Q21-23"),
T("fuel-conv","Fuel Planning","Fuel Unit Conversions",
 "Litre / USG / kg：AVGAS SG 0.71。",
 ["kg = L x 0.71 (AVGAS)","1 USG = 3.8 L","1 USG = 2.72 kg (approx)","162 L = 117 kg","Water SG = 1.0"],
 ["wb-fuel"],"VPG p5; Nav ebook (SG)"),
T("range-end","Fuel Planning","Best Range vs Best Endurance",
 "Range = 最遠距離；Endurance = 最長時間（等候用）。",
 ["Best range config: max distance","Best endurance: max time","Lost with low fuel → best range","Waiting for Wx → endurance"],
 ["hold-fuel","lost"],"Nav ebook ch5 (Maximum Range and Endurance Flying)"),
T("airline-fpl","Fuel Planning","Airline Flight Plan Check",
 "睇 plan：taxi、trip、contingency、alternate、final reserve、extra。",
 ["Contingency 5% of trip (example)","Final reserve 30 min at 1500 ft","Gross error check on totals","Extra fuel = company/crew decision","Compare ramp weight vs limits"],
 ["fuel-layers","alt-summ"],"Airspace FP02 photos 050826186, 051021209, 051451031"),
T("alt-summ","Fuel Planning","Alternate Summary Table",
 "各 alternate 比距離、風、時間、油，揀最合適。",
 ["Distance, FL, wind component","Time + fuel to each alternate","Headwind adds fuel","Choose by Wx + fuel + facilities"],
 ["airline-fpl","alt-fuel"],"Airspace FP02 photo 051451031"),
T("pnr","Fuel Planning","Point of No Return (PNR)",
 "過咗 PNR 就返唔到出發地；取決於風同 safe endurance。",
 ["T = E x H / (O + H)","E = safe endurance, O/H = GS out/home","Headwind out → PNR nearer","Not in provided notes — general knowledge"],
 ["etp","range-end"],"General aviation knowledge (not in feed); Nav ebook lists PNR abbreviation",true),
T("etp","Fuel Planning","Equal Time Point (ETP)",
 "兩個機場等時間嘅點；風改變位置。",
 ["d = D x H / (O + H) from A","H = GS toward A, O = GS toward B","Headwind to B → ETP shifts toward B","General knowledge — not in feed"],
 ["pnr","pdp"],"General aviation knowledge (not in feed)",true),
// ---- Weather & Alternate
T("alt-minima","Weather & Alternate","Alternate Required (CASA)",
 "四個天氣條件觸發：雲、能見度、風、雷暴。",
 ["Cloud > SCT below 1500 ft","Vis < 8 km or fog/mist prob","X/tailwind > aircraft limit","TS >= 30% prob / provisional","±30 min of forecast period"],
 ["inter-tempo","alt-fuel","taf3"],"CPL Knowledge Alternate Minima; VPG p7"),
T("inter-tempo","Weather & Alternate","INTER / TEMPO Holding",
 "INTER 要 30 分鐘 holding 油，TEMPO 要 60 分鐘。",
 ["Else carry alternate","Holding until improvement +30 min","30 min buffer before/after period","See VPG TAF examples"],
 ["alt-minima","hold-fuel"],"CPL Knowledge; VPG p5,p9"),
T("taf3","Weather & Alternate","TAF3 Concession",
 "TAF3 機場頭 3 小時：30 分鐘 buffer 同 PROB30/40 TS holding 不適用。",
 ["Only first 3 hr of validity","No 30-min FM/BECMG buffer","No holding for PROB30/40 TS","(CASA)"],
 ["alt-minima"],"CPL Knowledge TAF3",true),
T("no-fcst","Weather & Alternate","No Forecast Available",
 "冇 forecast 要有 alternate；或限返航時間。",
 ["Need alternate with a forecast","Depart if return within 1 hr","Dest forecast within 30 min of dep","Cover ETA -30 to +60 min"],
 ["alt-minima"],"CPL Knowledge forecast requirements"),
T("vmc","Weather & Alternate","VMC Minima",
 "VMC 取決於 airspace class 同高度。",
 ["Below 10000 ft: 5000 m vis","At/above 10000 ft: 8000 m","1500 m horiz / 1000 ft vert from cloud","Class D: 600 m / 500 below, 1000 above","Class G low: clear of cloud (CASA)"],
 ["svfr","vfr-on-top"],"CPL Knowledge; Basic Aero Knowledge"),
T("svfr","Weather & Alternate","Special VFR",
 "ATC 容許 CTR 內低於 VMC；要 clear of cloud。",
 ["Class C/D only, pilot request","1600 m vis (800 m helicopters)","Clear of cloud","Must not delay IFR","(CASA)"],
 ["vmc"],"CPL Knowledge; Basic Aero Knowledge"),
T("vfr-on-top","Weather & Alternate","VFR on Top",
 "VFR 喺雲上面：要保持 VMC，30 分鐘 fix。",
 ["More than SCT cloud below","VMC throughout + at destination/alternate","Position fix every 30 min visual","2 hr if radio nav","FAA VFR-On-Top = IFR clearance"],
 ["vmc"],"CPL Knowledge; ATP Test Prep ch6",true),
// ---- IFR basics
T("vfr-ifr","IFR Basics","VFR vs IFR",
 "IFR 可入雲、更準確、壞天氣可飛、高空更慳油。",
 ["Fly in cloud","More accurate tracking","Suboptimal Wx","Jets efficient at altitude","Needs rating + equipped aircraft"],
 ["hk-airspace","ifr-vfr-mix"],"Airspace FP03 photo 032500577"),
T("hk-airspace","IFR Basics","HK Airspace Classes",
 "HK FIR 分 A、C、G；A 只限 IFR。",
 ["A: IFR only, clearance needed","C: IFR + VFR, ATC separation","G: FIS only","250 KIAS below 10000 ft AMSL","Continuous two-way radio in A/C"],
 ["vfr-ifr"],"Airspace FP03 photo 034237328 (HK AIP ENR 1.4)"),
T("ifr-vfr-mix","IFR Basics","IFR/VFR Transition",
 "同一航班可 VFR 轉 IFR，要喺 flight plan 寫清楚。",
 ["Specify transition point","ATC may downgrade IFR→VFR","Only if in suitable VMC","Class of airspace matters"],
 ["vfr-ifr"],"Airspace FP03 photo 034954074"),
T("ifr-required","IFR Basics","When Instrument Rating Needed (FAA)",
 "IFR、Class A、低於 VFR minima、night SVFR 需要。",
 ["Operating under IFR","Class A airspace","Weather below VFR minimums","FAA Part 61/91 (slide)"],
 ["vfr-ifr"],"Airspace FP03 photo 033619189",true),
T("ats-routes","IFR Basics","ATS Routes",
 "Airways = 天空高速公路；亦有 advisory、arrival、departure routes。",
 ["Airways, advisory routes","Controlled / uncontrolled","SID / STAR also routes","IFR mostly on ATS routes"],
 ["route-entry","sid","star"],"Airspace FP03 photos 040521132, 040648949"),
T("route-entry","IFR Basics","Route in Flight Plan",
 "DCT、經 navaid、或經點；SID/STAR/airway 串連。",
 ["DCT = direct","Via navaids: DCT ROM CMU DCT","Via published/non-published points","Structure: SID-airway-STAR"],
 ["ats-routes","icao-fpl"],"Airspace FP03 photo 041115678"),
T("icao-fpl","IFR Basics","ICAO Flight Plan Fields",
 "FPL：aircraft ID、equipment、dep、route、dest、alternates、other info。",
 ["Example VHHH-RJFF flight","Cruise speed + level N0469F390","Equipment / PBN / SUR codes","Alternate e.g. RJTT","DOF, REG, EET in item 18"],
 ["route-entry","pbn"],"Airspace FP03 photo 035526362"),
T("ifr-fpl-time","IFR Basics","FAA IFR Filing Timing",
 "至少 ETD 前 30 分鐘 file；taxi 前 10 分鐘內叫 clearance。",
 ["File >= 30 min before ETD","Clearance <= 10 min before taxi","List all fixes off-airway","Random RNAV needs radar","FAA, not CASA/HK"],
 ["icao-fpl"],"ATP Test Prep ch6 Flight Plans"),
T("pbn","IFR Basics","RNAV vs RNP",
 "RNP = RNAV + 機載監察同警告。",
 ["RNAV: be on course","RNP: on course + monitor + alert","RNP 1: TSE +/-1 nm 95%","Containment +/-2 nm 99.999%"],
 ["sid-hk","rnp-app"],"Airspace FP03 photo 061233583"),
T("min-alt","IFR Basics","IFR Minimum Altitudes",
 "MEA、MOCA、OROCA、MSA 提供障礙物空間。",
 ["MSA: 1000 ft clearance, 25 NM sector","OROCA: 1000/2000 ft buffer (FAA)","MOCA: nav signal only within 22 NM","MVA used by radar ATC"],
 ["msa","sid"],"Airspace FP03 photo 060908784; ATP Test Prep ch6"),
T("msa","IFR Basics","Minimum Sector Altitude",
 "25 NM 半徑 sector 內最低高度，障礙以上 1000 ft。",
 ["Radius 25 NM (30 if needed)","Centered on radio navaid","1000 ft above highest obstacle","Emergency use on approach chart"],
 ["min-alt"],"Airspace FP03 photo 060908784; ATP Test Prep"),
// ---- SID STAR Approach
T("sid","SID / STAR / Approach","SID",
 "標準儀表離場：機場跑道連到航路點。",
 ["Links runway to enroute point","Choose by runway + exit direction","Examine BEFORE start-up request","Obstacle + altitude restrictions"],
 ["sid-types","sid-hk","climb-grad"],"Airspace FP03 photo 041433953"),
T("sid-types","SID / STAR / Approach","Radar vs Procedural SID",
 "Radar SID 靠 ATC vector；procedural 有固定路線。",
 ["Radar: initial heading + alt only","ATC gives routing to airway","Procedural: waypoints + legs","Reproducible track"],
 ["sid"],"Airspace FP03 photos 043221612, 043858630"),
T("sid-hk","SID / STAR / Approach","HK SIDs (DALOL, RAMEN)",
 "VHHH RNAV SID：DALOL 1Y、RAMEN 1C、DUMEP 1T。",
 ["DALOL 1Y: RNAV GNSS, RF leg","PBN fail → contact ATC","Exempt from RNP1: RAMEN 1C","RAMEN 1C min 3.8% gradient","Speed limits at ROVER (205 kt)"],
 ["sid","pbn","climb-grad"],"Airspace FP03 photos 044128274, 044900794, 045710204",true),
T("climb-grad","SID / STAR / Approach","Climb Gradient",
 "SID 要求最低 gradient (%)；ft/min = GS x gradient。",
 ["Example 3.4% / 3.8% in HK SIDs","ROC ~ GS(kt) x gradient% (ft/min)","250 kt, 3% ~ 760 ft/min","Weight, temp, density affect"],
 ["sid-hk","grad-factors"],"Airspace FP03 photos 050433575, 060908784"),
T("grad-factors","SID / STAR / Approach","What Affects Climb Gradient",
 "重量、溫度、density altitude；考慮 one-engine-out。",
 ["Heavier → worse","Hotter/higher → worse","Headwind helps gradient","Plan engine-out gradient"],
 ["climb-grad","to-perf"],"Airspace FP03 photo 060908784"),
T("star","SID / STAR / Approach","STAR",
 "標準到達航線，由航路連到 approach。",
 ["ABBEY 4A (HK arrival from east)","Transitions: FISHA, MAGOG, ENPE","Speed + level restrictions","Do not descend w/o ATC clearance"],
 ["sid","approach"],"Airspace FP03 photos 054334074, 055752215; ATP Test Prep",true),
T("pilot-nav","SID / STAR / Approach","Pilot NAV vs Vector DP",
 "Pilot NAV: 機師自導；Vector: ATC 雷達引導。",
 ["Pilot NAV DP: pilot navigates","Vector DP: radar guidance","Vector DP has lost-comms text","FAA terminology"],
 ["sid-types"],"ATP Test Prep ch6 Charts"),
T("approach","SID / STAR / Approach","Instrument Approach Overview",
 "Initial → intermediate → final → missed approach。",
 ["ILS 07L: precision (HK example)","RNP Z 25R: PBN","Initial + missed approach speed limits","MSA protects"],
 ["dh-mda","missed","app-lights"],"Airspace FP03 photos 052134611, 061830202; ATP Test Prep"),
T("dh-mda","SID / STAR / Approach","DA/DH vs MDA",
 "Precision: DA/DH；non-precision: MDA；到點未見跑道就 missed approach。",
 ["DH/DA: decision to land or go-around","MDA: lowest altitude, don't descend below","Need required visual reference","Visual segment must be clear"],
 ["approach","missed","cat"],"ATP Test Prep ch1-ch6 approach questions"),
T("missed","SID / STAR / Approach","Missed Approach",
 "MAPt 未見就爬升跟 missed approach procedure。",
 ["Climb on published track","If unable RNP1, continue published MISAP","Min climb gradient on chart","Don't turn early below MAPt"],
 ["approach","dh-mda"],"Airspace FP03 photo 052134611, 061830202"),
T("rnp-app","SID / STAR / Approach","RNP APCH (RNP Z 25R)",
 "HK RNP Z 25R：LNAV 同 LNAV/VNAV。",
 ["Baro VNAV not authorised below 0 °C","Cross RUNSU at 180 kt","Simultaneous dependent ops with 25L","Check QNH limit via ATC"],
 ["pbn","approach"],"Airspace FP03 photo 061830202",true),
T("cat","SID / STAR / Approach","CAT I / II / III",
 "CAT I DH>=200 ft；CAT II 100-200 ft；CAT III <100 ft。",
 ["CAT I RVR >=1800 ft (550 m)","CAT II RVR >=1200 ft (350 m)","CAT III DH<100 ft or none","FAA definitions"],
 ["dh-mda","app-lights"],"ATP Test Prep ch1 (9329-2)"),
T("app-lights","SID / STAR / Approach","PAPI / VASI",
 "PAPI 4 粒燈：2 紅 2 白係 on glidepath。",
 ["High: 4 white","Slightly high 3W 1R","On path: 2R 2W","Low: 4 red","VASI: stay on/above slope"],
 ["approach","cat"],"ATP Test Prep ch2 Approach Lighting"),
T("hold","SID / STAR / Approach","Holding Pattern",
 "兩個 turn + 兩條 straight leg；標準右轉 1 分鐘。",
 ["<=14000 ft: 1 min legs","Above 14000 ft: 1.5 min","Max speed 200/230/265 KIAS (FAA)","Slow down 3 min before fix","Report time over fix"],
 ["hold-entry","hold-fuel"],"ATP Test Prep ch6 Holding"),
T("hold-entry","SID / STAR / Approach","Holding Entries",
 "Direct / parallel / teardrop 看從邊個 sector 來。",
 ["Direct: turn right to hold","Parallel: fly outbound parallel then back","Teardrop: 30° off outbound track","Three sectors A/B/C"],
 ["hold"],"ATP Test Prep ch6 Holding"),
T("no-pt","SID / STAR / Approach","Procedure Turn Rules",
 "Radar vector、timed approach、No PT：唔做 procedure turn。",
 ["Not if radar vectored to final","Not if timed from hold","Not if 'No PT' charted","FAA"],
 ["approach"],"ATP Test Prep ch6 Instrument Approaches"),
T("vis-app","SID / STAR / Approach","Visual / Contact Approach",
 "Visual: VFR + 見到機場；Contact: 機師要求，1 mile vis。",
 ["Visual: ATC may offer; Wx VFR","Contact: pilot-initiated only","Clear of cloud, 1 mi vis","FAA IFR authorisations"],
 ["approach"],"ATP Test Prep ch6"),
T("app-alt","SID / STAR / Approach","Alternate Planning Minima (FAA)",
 "Alternate 預報 minima：precision 600-2, non-precision 800-2。",
 ["No alt if navaid unmonitored/GPS-only","Planning minima only","Real divert use chart minima","FAA air carrier"],
 ["alt-minima"],"ATP Test Prep ch6 Alternate Airport Planning"),
// ---- Performance
T("to-perf","Performance & Briefing","Take-off Performance Factors",
 "Density altitude、weight、wind、surface 影響滑跑距離。",
 ["High DA → longer roll","Heavier → longer","Headwind shortens, tailwind lengthens","Safety factor 1.15 (MTOW<5700 kg)","Use max weight + no wind for planning"],
 ["grad-factors"],"Scenario Based 18 Jun 2026 Take-Off Performance"),
T("to-example","Performance & Briefing","Take-off Chart Example",
 "QNH 1010, OAT 20, elev 57 → PA 147 ft; roll 320 m → x1.15.",
 ["PA = elev + (1013-QNH) x 30","Ground roll 320 m → 368 m","Over obstacle 470 m → 540.5 m","DA40 chart, no wind"],
 ["to-perf"],"Scenario Based 18 Jun 2026"),
T("to-min","Performance & Briefing","Take-off Minima (FAA)",
 "冇公佈：2 引擎或以下 1 SM；3 或以上 1/2 SM。",
 ["Air carrier alternate: 800-2/900-1.5/1000-1","V1 = abort or continue speed","VR >= V1","FAA 121/91"],
 ["to-perf"],"ATP Test Prep ch6 Takeoff Procedures"),
T("pax-brief","Performance & Briefing","Passenger Briefing",
 "No smoking、exits、seatbelt、control seat、emergency kit。",
 ["Hi-vis jacket, apron hazard","Seatbelts on always","Don't touch controls","Sick bag, extinguisher, life jackets","Follow my instructions"],
 ["flow"],"Passenger briefing / Briefing Instructions"),
T("ppl-test","Performance & Briefing","PPL Flight Test Planning Task",
 "考官俾 task：flight plan、W&B、performance、fuel plan。",
 ["Route with intermediate stops","Prepare load sheet + perf charts","Fuel plan with 2 passengers","Ground knowledge assessed first"],
 ["flow","fuel-layers"],"PPL Flight test / FER workbook"),
T("vpg","Performance & Briefing","Visual Pilot Guide (YPPF)",
 "CASA VPG：class D 程序、VFR 進出點、通訊。",
 ["Plan with VPG + ERSA + NOTAM","Departure/arrival visual points","Radio calls per runway","Not replacing current charts"],
 ["pubs","class-d"],"YPPF Visual Pilot Guide; YPPF departure/arrival procedures"),
T("class-d","Performance & Briefing","Stay Outside Class D",
 "ATC 叫你留喺 Class D 外：唔好入，亦唔好亂 orbit。",
 ["Don't enter controlled airspace","Orbit only after checking traffic","Have plan before arriving","Use correct frequency per runway"],
 ["vpg"],"Scenario Based 25 Apr 2025, 04 Jun 2025"),
// ---- Decision making
T("agrade","Decision Making","A-GRADE",
 "Aviate → Gather → Review → Analyse → Decide → Evaluate。",
 ["Aviate first","Gather multiple sources","Review into 2-3 chunks","Analyse options (fuel, Wx)","Decide + Evaluate (NOTAMs!)"],
 ["mnemonics","divert"],"Scenario Based 2023 (CASA Human Factors booklet 7)"),
T("mnemonics","Decision Making","Decision Mnemonics",
 "DODAR、DECIDE、SAFE、NMATE、RAISE：流程化決策。",
 ["DODAR: Diagnose Options Decide Assign Review","DECIDE (FAA)","SAFE: State Analyse Fix Evaluate","NMATE (Boeing)"],
 ["agrade"],"CASA Human Factors booklet 7"),
T("traps","Decision Making","Decision Traps",
 "Get-there-itis、macho、time pressure、assumptions。",
 ["Get-there-itis","Macho attitude","Stress / time pressure","Jumping to assumptions","Not communicating"],
 ["agrade","push-on"],"CASA Human Factors booklet 7"),
T("push-on","Decision Making","Push-on Mindset",
 "VFR into IMC 風險隨飛行時間上升；早啲決定。",
 ["Longer flight → higher VFR-into-IMC risk","Decide to divert early","Options reduce the longer you wait","Precautionary landing better than IMC"],
 ["traps","divert"],"Scenario Based 30 Jun 2026 (ATSB brief); 2023 booklet"),
T("divert","Decision Making","Diversion Planning",
 "Divert：用 1-in-60 rule、揀 checkpoint、算新 heading 同 ETA。",
 ["Decision point within 5 min","Measure track + distance","Compute heading, GS, ETI","Check fuel + last light","Brief passengers"],
 ["agrade","range-end"],"Nav ebook ch5 Diversion Procedures"),
T("lost","Decision Making","Lost Procedure",
 "唔好 panic；log、check DG、MPP、10% 規則、求助 ATC。",
 ["Maintain heading + 10% time","Find most probable position","Climb / follow linear feature","Best-range config","Ask ATC; don't hide"],
 ["divert","range-end"],"Nav ebook ch5 Procedures When Lost"),
T("precaution","Decision Making","Precautionary Search & Landing",
 "天氣差或燃料少：低飛檢查、揀 landing area。",
 ["Allow time/fuel for 2-3 inspections","Low pass to check surface","Longer you wait, fewer options","Tell ATC; secure aircraft after"],
 ["push-on","divert"],"Scenario Based 30 Jun 2026; Nav ebook"),
T("conf-bias","Decision Making","Confirmation Bias",
 "只睇符合自己想法嘅資料：NBJ 誤解為 clearance。",
 ["'NBJ' = wait, stay clear","Confirm any unclear clearance","Don't taxi onto runway w/o clearance","Pressure to pass check"],
 ["traps"],"Scenario Based 20 Mar 2024"),
T("time-pressure","Decision Making","Time Pressure Error",
 "趕時間漏咗 chocks：checklist 唔好跳。",
 ["Chocks left on nose wheel","Instructor also missed it","Booking slots pressure","Use full walk-around + checklist"],
 ["traps"],"Scenario Based 27 Sep 2025")
];
const links=[
["fp.fuel-layers","fp.taxi","Taxi 係 fuel stack 第一層"],
["fp.trip","fp.climb-fuel","Climb 要用較高 burn → trip 多油"],
["fp.variable","fp.final-res","兩個 reserve 唔可混為一談"],
["fp.alt-minima","fp.alt-fuel","Wx 觸發 alternate → 要 alternate fuel"],
["fp.inter-tempo","fp.hold-fuel","INTER/TEMPO 決定 holding 時間"],
["fp.hold-fuel","fp.fuel-fta","Holding burn 6.6 USG/hr 來自 FCOM"],
["fp.margin","fp.inflight-fuel","Margin 比較 plan 同實際"],
["fp.fuel-check","fp.water","Sample 就係為咗檢查水"],
["fp.refuel","fp.water","加油後水混懸浮，要 settle 才驗"],
["fp.wb-fuel","fp.fuel-conv","kg 同 litre 轉換靠 SG"],
["fp.isolated","fp.pdp","冇 alternate 時用 PDP 概念"],
["fp.pdp","fp.era","PDP 要有 ERA"],
["fp.pnr","fp.etp","兩者都用 GS out/home"],
["fp.range-end","fp.lost","迷路時 best range"],
["fp.never-reserve","fp.mayday-fuel","食 reserve 要 MAYDAY"],
["fp.sid","fp.sid-types","SID 分 radar / procedural"],
["fp.sid-hk","fp.pbn","DALOL 1Y 要 RNP1"],
["fp.climb-grad","fp.grad-factors","Gradient 受重量/溫度影響"],
["fp.grad-factors","fp.to-perf","同一套 density altitude 原理"],
["fp.star","fp.approach","STAR 銜接 approach"],
["fp.dh-mda","fp.missed","到 DA/MDA 未見跑道就 missed"],
["fp.cat","fp.dh-mda","CAT 級數決定 DH"],
["fp.app-lights","fp.approach","燈光幫助 visual segment"],
["fp.hold","fp.hold-entry","入 hold 方式"],
["fp.hold","fp.hold-fuel","Hold 時間 = 用油"],
["fp.agrade","fp.mnemonics","同屬流程化決策"],
["fp.traps","fp.push-on","Push-on 係 get-there-itis"],
["fp.push-on","fp.precaution","早決定→precautionary landing"],
["fp.divert","fp.alt-fuel","改降要有油去 alternate"],
["fp.threats","fp.agrade","Threat analysis 後用決策工具"],
["fp.wxnotam","fp.alt-minima","Wx 決定要否 alternate"],
["fp.notif","fp.sar-phases","SARTIME 失敗 → 緊急階段"],
["fp.conf-bias","fp.traps","Confirmation bias 屬 trap"],
["fp.time-pressure","fp.traps","Time pressure → 漏 checklist"],
["fp.airline-fpl","fp.alt-summ","Plan 內有 alternate 摘要"],
["fp.fuel-reqs","fp.variable","Rule 決定 contingency %"],
["fp.fuel-reqs","fp.final-res","Rule 決定 final reserve 分鐘"],
["fp.far-fuel","fp.fuel-reqs","FAA vs CASA 對照"],
["fp.vmc","fp.svfr","SVFR 係 VMC 例外"],
["fp.msa","fp.min-alt","MSA 屬最低高度家族"]
];
const cards=[
C("fp.notam","📟","What does NOTAM item A) and E) mean?","A) is the location indicator; E) is the plain-language text of the notice.","地點 / 內容。"),
C("fp.notam","📟","What do B) and C) show in a NOTAM?","B) is start of validity and C) is end of validity, in UTC.","時間 UTC。"),
C("fp.notam","📟","Decode: RWY 07L CLSD.","Runway 07 Left is closed.","CLSD=closed。"),
C("fp.notam","📟","What does U/S mean?","Unserviceable.","唔可用。"),

C("fp.why","❓","Why do we do fuel and flight planning?","The PIC must ensure enough fuel and a safe route considering distance, weather, diversion and delay.","PIC 責任。"),
C("fp.why","📋","What can force extra fuel use in flight?","Diversion to an alternate, delay awaiting landing clearance, and re-routing.","改降、等候、重新路由。"),
C("fp.flow","🧭","List the steps of pre-flight planning.","Currency, charts, weather and NOTAM, route and altitude, W&B, performance, fuel, notification, documents, aircraft inspection.","按 VPG 流程。"),
C("fp.currency","🪪","When can you carry passengers? (CASA)","You need 3 take-offs and landings in the last 90 days.","90 日 3 次。"),
C("fp.currency","🏥","What if medical is not current?","You must not fly solo.","VPG。"),
C("fp.wxnotam","🌦️","Why check NOTAMs before flight?","They give time-critical changes to runways, navaids and airspace that can change the plan.","時間敏感資訊。"),
C("fp.wb-fuel","⚖️","Why can't you always fill tanks?","Fuel weight reduces payload and may exceed weight limits, so you balance payload against fuel.","Weight limit。"),
C("fp.wb-fuel","🧮","TOW 1200 kg, MLW 1150 kg, 1 hr flight. Okay?","No. You must burn off 50 kg before landing is possible; plan lower TOW.","MLW 限制。"),
C("fp.notif","📨","What is a SARTIME?","A time nominated by the pilot at which search and rescue starts if no cancellation is received.","取消先安全。"),
C("fp.notif","📞","How can you submit flight notification?","Through NAIPS online, by phone, or radio as last preference; or leave a flight note.","VPG。"),
C("fp.sar-phases","🆘","Name the three SAR emergency phases.","INCERFA (uncertainty), ALERFA (alert) and DETRESFA (distress).","三級。"),
C("fp.sar-phases","⛽","Is lack of fuel a distress phase trigger?","Yes. Insufficient fuel to reach safety is a DETRESFA criterion.","Basic Aero。"),
C("fp.docs","📄","What documents must you carry?","Licence, medical, approved checklist, AFM/POH and valid maintenance release.","VPG。"),
C("fp.pubs","📚","What does ERSA contain?","Aerodrome info, PRD areas, local procedures, flight plan requirements, emergency procedures.","ERSA。"),
C("fp.pubs","📣","What is a NOTAM?","A notice with time-critical information that may affect operations, such as obstructions or navaid outages.","NOTAM。"),
C("fp.ersa-lesson","🦒","Student overflew a zoo below 2000 ft AMSL. Lesson?","Read the ERSA fully, note restrictions on the nav log, brief the instructor.","讀 ERSA。"),
C("fp.threats","⚠️","What are the three threat types in TEM?","Expected, unexpected and latent threats.","三類。"),
C("fp.fuel-why","❓","What must you know before a flight about fuel?","Capacity vs usable fuel, consumption rate, fuel system, and fuel availability en route.","四項。"),
C("fp.fuel-layers","🧱","List the layers of a fuel plan.","Taxi, trip (climb and cruise), variable, alternate, fixed reserve, holding.","疊成 bar。"),
C("fp.fuel-layers","➕","How do you get Fuel Required?","Add taxi, trip, variable, alternate, final reserve and holding. Margin is extra beyond that.","總和。"),
C("fp.taxi","🚕","What is taxi fuel?","Fuel used before take-off: start, taxi and run-up; DA40 uses 2 USG.","開機到起飛。"),
C("fp.trip","🛫","How do you compute trip fuel?","Climb time x climb burn plus cruise time x cruise burn, using wind-corrected groundspeed.","Burn rate x time。"),
C("fp.climb-fuel","⏱️","Training shortcut for climb time?","Add 1 min to ETI for every 2000 ft climbed.","課堂簡化。"),
C("fp.trip","🧪","Calc: cruise 45 min at 9.8 USG/hr?","45/60 x 9.8 = 7.35 USG.","時間 x burn。"),
C("fp.trip","🧪","Calc: climb 8 min at 14 USG/hr?","8/60 x 14 = 1.87 USG.","約 1.9。"),
C("fp.variable","➗","What is variable (contingency) fuel?","Fuel to cover unforeseen factors, usually a percentage of trip fuel (school 10%).","Trip x 10%。"),
C("fp.variable","🧪","Trip fuel 12 USG. Contingency at 10%?","1.2 USG.","12 x 0.1。"),
C("fp.final-res","🛑","How is final reserve defined?","Fuel to fly at holding speed at 1500 ft above aerodrome elevation in ISA for the required time.","1500 ft ISA。"),
C("fp.final-res","⏲️","Final reserve for day VFR piston <=5700 kg?","30 minutes (CASA Part 91).","Day VFR。"),
C("fp.final-res","🌙","Final reserve for night VFR or IFR piston?","45 minutes.","夜 / IFR。"),
C("fp.final-res","🧪","DA40 hold 6.6 USG/hr; 45 min reserve?","0.75 x 6.6 = 4.95, about 5 USG.","與 FCOM 5 USG 一致。"),
C("fp.hold-fuel","⏳","How do you calculate holding fuel?","Anticipated holding time x holding burn from the FCOM.","時間 x burn。"),
C("fp.hold-fuel","🧪","Hold 30 min at 6.6 USG/hr?","3.3 USG.","0.5 x 6.6。"),
C("fp.alt-fuel","🛬","When do you need alternate fuel?","When weather at ETA triggers alternate minima, unless holding fuel is carried instead.","Alt minima。"),
C("fp.margin","📏","What is fuel margin?","Usable fuel on board minus fuel required.","額外油。"),
C("fp.margin","⏳","What is endurance?","Total usable fuel converted into time at the burn rate.","油換時間。"),
C("fp.margin","🧪","DA40 std tank 40.2 USG at 9.8 USG/hr: endurance?","40.2/9.8 = 4.1 hr (about 4 h 6 min).","忽略 reserve。"),
C("fp.fuel-tank","🛢️","DA40 usable fuel: standard vs long-range?","Standard 40.2 USG; long-range 50.0 USG.","兩種 tank。"),
C("fp.fuel-fta","📊","DA40 cruise and climb burn (FCOM)?","Cruise 9.8 USG/hr at 65% power; climb 14 USG/hr.","FCOM。"),
C("fp.fuel-fta","📊","DA40 holding burn and power?","6.6 USG/hr at 45% power, best economy.","Hold。"),
C("fp.fuel-reqs","⚖️","Contingency for piston >5700 kg (CASA table)?","5% of trip fuel with 45 min final reserve.","5%。"),
C("fp.fuel-reqs","⚠️","Does CAAP 234-1 differ from Part 91 for piston private?","The older CAAP recommended 45 min fixed reserve; Part 91 table gives 30 min Day VFR. Check current rules.","我唔確定最新。"),
C("fp.far-fuel","🇺🇸","FAA 121 domestic fuel requirement?","Fly to the destination, then to the most distant alternate, then 45 min at normal cruise.","FAA。"),
C("fp.far-fuel","🇺🇸","FAA reserve if no alternate required (domestic)?","Fuel to destination plus two hours at normal cruise.","2 小時。"),
C("fp.isolated","🏝️","What is an isolated aerodrome?","One where flying time to the nearest suitable alternate is more than 1.5 hours.","孤立機場。"),
C("fp.isolated","⛽","Fuel for isolated aerodrome (piston)?","Fuel for 2 hr cruise, or 45 min plus 15% of planned time, whichever is less.","取較少。"),
C("fp.pdp","📍","What is the pre-determined point procedure?","Fuel is enough for only one of destination or alternate via the PDP; plan the greater of the two requirements.","取大。"),
C("fp.era","🗺️","ERA centre location rule?","25% of plan distance or 20% plus 50 NM from destination, whichever is greater.","150 vs 125。"),
C("fp.era","🧪","Total 500 NM. Where's ERA centre?","25% = 125; 20%+50 = 150; so 150 NM from destination.","取大。"),
C("fp.never-reserve","🚫","Should you plan to use reserve fuel?","Never; reserves are for the unexpected and must remain intact.","計劃不用。"),
C("fp.mayday-fuel","📻","Fuel will land below minimum reserve. What call?","Declare MAYDAY.","CASA。"),
C("fp.inflight-fuel","🔁","How often compare fuel to plan?","At least every 30 minutes and at turning points.","VPG。"),
C("fp.inflight-fuel","❌","Can in-flight management replace pre-flight planning?","No; it only allows re-analysis and adjustment so final reserve isn't used.","補充。"),
C("fp.fuel-check","📏","Two fuel measures disagree by >3%?","Use the lowest figure.","取低。"),
C("fp.fuel-check","💧","What to look for in a fuel sample?","Correct colour and grade, no water or particles; keep draining until clear.","水。"),
C("fp.fuel-check","🧯","Water globules in sample?","Drain until no indication; if in doubt do not fly and seek engineering advice.","停飛。"),
C("fp.water","💦","Three forms of water in fuel?","Dissolved, suspended and free water.","三種。"),
C("fp.water","⏱️","Why wait before testing after refuel?","Agitation suspends water; settle about 15 min per 300 mm depth for avgas.","等沉澱。"),
C("fp.refuel","🔌","Bonding order when refuelling?","Attach earth to bare metal and nozzle before removing the cap.","先接地。"),
C("fp.refuel","🚷","Can passengers be on board during AVGAS refuelling?","No.","CASA。"),
C("fp.fuel-conv","🔄","Convert 162 L avgas to kg.","About 117 kg (x0.72).","SG。"),
C("fp.fuel-conv","🔄","1 USG in litres?","About 3.8 L.","換算。"),
C("fp.range-end","🎯","Range vs endurance configuration?","Range gives maximum distance; endurance gives maximum time.","不同速度。"),
C("fp.airline-fpl","✈️","Gross error check on airline plan?","Check totals and sanity, e.g. contingency 5% trip and final reserve 30 min at 1500 ft.","Check。"),
C("fp.airline-fpl","➕","Ramp weight vs ZFW difference?","Ramp weight is ZFW plus all fuel on board.","加油。"),
C("fp.alt-summ","📑","What's in an alternate summary?","Distance, level, wind component, time and fuel to each alternate.","比較表。"),
C("fp.pnr","🔙","What is PNR?","The furthest point you can fly and still return to departure with safe endurance.","回不去點。"),
C("fp.pnr","🧪","PNR time formula?","t = E x H / (O + H), with E safe endurance, O GS out, H GS home.","公式。"),
C("fp.pnr","💨","Headwind outbound effect on PNR?","Lower O makes PNR time shorter, so PNR is nearer.","風。"),
C("fp.etp","⚖️","ETP definition?","The point from which flight time to two aerodromes is equal.","等時點。"),
C("fp.etp","🧪","ETP distance formula?","d = D x H / (O + H) from the start, with H GS toward the start.","公式。"),
C("fp.alt-minima","🌥️","Cloud trigger for alternate (CASA)?","More than SCT cloud continuously below 1500 ft at ETA.","雲。"),
C("fp.alt-minima","👁️","Visibility trigger?","Less than 8 km, or probability of fog, mist or dust reducing it.","能見度。"),
C("fp.alt-minima","🌬️","Wind trigger?","Crosswind or tailwind above aircraft maximum.","風。"),
C("fp.alt-minima","⛈️","Thunderstorm trigger?","TS or severe turbulence with 30% or more probability.","雷暴。"),
C("fp.alt-minima","🕐","Time window for applying forecast conditions?","From 30 minutes before to 30 minutes after.","30 分鐘。"),
C("fp.alt-minima","✅","When is no alternate needed?","Day VFR within 50 nm of departure.","50 nm。"),
C("fp.inter-tempo","⏳","Holding required for INTER vs TEMPO?","INTER 30 minutes; TEMPO 60 minutes.","INTER/TEMPO。"),
C("fp.taf3","3️⃣","TAF3 concession?","First 3 hours: no 30-min buffer and no holding for PROB30/40 TS.","TAF3。"),
C("fp.no-fcst","🚫","No forecast available: can you depart?","Only if return to departure within 1 hr; destination forecast needed within 30 min of departure.","CASA。"),
C("fp.vmc","☁️","Class D VMC minima?","5000 m visibility, 600 m horizontal, 500 ft below and 1000 ft above cloud.","Class D。"),
C("fp.vmc","☁️","VMC below 10000 ft in A/C/E/G?","5000 m visibility, 1500 m horizontally and 1000 ft vertically from cloud.","<10000。"),
C("fp.svfr","🟨","Special VFR conditions?","Class C/D only, pilot request, clear of cloud, 1600 m visibility, no delay to IFR.","SVFR。"),
C("fp.vfr-on-top","⬆️","VFR on top fix requirement?","Visual fix every 30 min, or 2 hr by radio nav; VMC maintained.","30 min。"),
C("fp.vfr-ifr","🆚","Benefits of IFR?","Can fly in cloud, more accurate tracking, suboptimal weather, and efficient high altitude.","IFR。"),
C("fp.hk-airspace","🇭🇰","HK airspace classes?","A, C and G; Class A is IFR only.","HK。"),
C("fp.hk-airspace","💨","HK speed limit?","250 KIAS below 10000 ft AMSL.","速度。"),
C("fp.ifr-vfr-mix","🔀","Can a GA flight be VFR and IFR?","Yes; the transition must be specified in the flight plan; ATC can downgrade.","混合。"),
C("fp.ifr-required","🎓","When IR required (FAA)?","Under IFR, Class A, weather below VFR minima.","FAA。"),
C("fp.ats-routes","🛣️","What's an ATS route?","A route designated to channel traffic for ATS; includes airways, advisory, arrival and departure routes.","Airway。"),
C("fp.route-entry","📝","Route entry for direct flight?","DCT.","直飛。"),
C("fp.icao-fpl","📜","Item 18 examples?","PBN, DOF, REG, EET, SEL, CODE, PER and RM.","Other info。"),
C("fp.ifr-fpl-time","🕐","FAA IFR filing time?","File 30 min before ETD; request clearance no more than 10 min before taxi.","FAA。"),
C("fp.pbn","📡","RNAV vs RNP?","RNP adds on-board monitoring and alerting to RNAV.","監察。"),
C("fp.pbn","📏","RNP 1 containment?","95% within 1 nm TSE; containment 2 nm 99.999%.","數字。"),
C("fp.min-alt","🏔️","MSA definition?","Lowest altitude for 1000 ft clearance within 25 NM sector.","MSA。"),
C("fp.msa","🗻","MSA radius?","25 NM, extended to 30 NM if needed.","半徑。"),
C("fp.sid","🛫","What's a SID?","A standard instrument departure linking the aerodrome to a point where enroute phase begins.","SID。"),
C("fp.sid","⏰","When to review SID?","Before requesting start-up clearance at the latest.","起動前。"),
C("fp.sid-types","📡","Radar SID vs procedural SID?","Radar SID gives initial heading and altitude then ATC vectors; procedural is a fixed waypoint route.","分別。"),
C("fp.sid-hk","🇭🇰","HK SIDs from VHHH examples?","DALOL 1Y, RAMEN 1C and DUMEP 1T.","VHHH。"),
C("fp.sid-hk","⚠️","PBN fail on DALOL 1Y?","Contact ATC immediately; RF-incapable aircraft request non-RF SID.","PBN fail。"),
C("fp.climb-grad","📐","Required ROC for 3% at 250 kt?","About 760 ft/min.","GS x %。"),
C("fp.climb-grad","🧪","Quick formula for ROC from gradient?","ROC (ft/min) ~ GS (kt) x gradient (%).","約。"),
C("fp.grad-factors","🌡️","What degrades climb gradient?","Higher weight, higher temperature and density altitude.","Weight/temp。"),
C("fp.star","🛬","What's a STAR?","A standard arrival route linking the enroute structure to the approach.","STAR。"),
C("fp.star","🇭🇰","HK STAR example?","ABBEY 4A from the east.","ABBEY。"),
C("fp.pilot-nav","🧭","Pilot NAV vs Vector DP?","Pilot NAV: pilot navigates; Vector: ATC radar guidance.","FAA。"),
C("fp.approach","🛬","What's the structure of an approach?","Initial, intermediate, final, then missed approach.","段。"),
C("fp.dh-mda","📉","DA/DH vs MDA?","DA/DH is for precision approaches; MDA is the lowest allowed altitude on non-precision approaches.","分別。"),
C("fp.dh-mda","👀","At DH you do not see runway. Action?","Execute missed approach.","復飛。"),
C("fp.missed","🔄","If unable RNP1 during MISAP?","Continue on the published MISAP track and climb.","復飛程序。"),
C("fp.rnp-app","🌡️","RNP Z 25R temp restriction?","Baro VNAV not authorised below 0 °C.","溫度。"),
C("fp.cat","🅲","CAT I / II / III?","CAT I DH>=200 ft; CAT II 100-200 ft with RVR>=1200 ft; CAT III below 100 ft or none.","級數。"),
C("fp.app-lights","💡","PAPI indications?","4 white high; 3W1R slightly high; 2W2R on path; 1W3R slightly low; 4R low.","PAPI。"),
C("fp.hold","🔁","Standard holding pattern?","Right turns, 1 minute outbound at or below 14000 ft, 1.5 minutes above.","Hold。"),
C("fp.hold","🐢","When reduce to holding speed?","When 3 minutes or less from fix and no further clearance.","3 min。"),
C("fp.hold-entry","↪️","Three holding entries?","Direct, parallel and teardrop.","三種。"),
C("fp.no-pt","🚫","When no procedure turn?","If radar vectored, timed from hold, or charted No PT.","FAA。"),
C("fp.vis-app","👁️","Visual vs contact approach?","Visual: VFR weather and airport in sight; contact: pilot-initiated, 1 mi vis, clear of cloud.","分別。"),
C("fp.app-alt","📉","FAA alternate planning minima?","Precision 600 ft and 2 SM; non-precision 800 ft and 2 SM.","FAA。"),
C("fp.to-perf","🔥","What affects take-off performance?","Density altitude, weight, wind and surface.","四項。"),
C("fp.to-perf","🧮","Why multiply take-off distance by 1.15?","Safety factor for aircraft under 5700 kg.","1.15。"),
C("fp.to-example","🧪","PA at elev 57 ft, QNH 1010?","57 + (1013-1010)x30 = 147 ft.","公式。"),
C("fp.to-min","📋","FAA take-off minima if none published?","1 SM for two engines or fewer; 1/2 SM for three or more.","FAA。"),
C("fp.pax-brief","🧑‍✈️","Passenger briefing items?","No smoking, exits, seatbelts, control seat, emergency equipment.","簡報。"),
C("fp.ppl-test","📝","What do you prepare for PPL test?","Flight plan, W&B, performance and fuel plan.","測試。"),
C("fp.vpg","📖","What's the Visual Pilot Guide?","CASA guide for planning into and out of class D and non-towered aerodromes.","VPG。"),
C("fp.class-d","🛑","Told to remain outside class D. Action?","Stay outside, check traffic, don't orbit blindly.","留外面。"),
C("fp.agrade","🅰️","A-GRADE steps?","Aviate, Gather, Review, Analyse, Decide, Evaluate.","A-GRADE。"),
C("fp.mnemonics","🔤","DODAR stands for?","Diagnose, Options, Decide, Assign, Review.","DODAR。"),
C("fp.mnemonics","🔤","DECIDE (FAA)?","Detect, Estimate, Choose, Identify, Do, Evaluate.","DECIDE。"),
C("fp.traps","🪤","Common decision traps?","Get-there-itis, macho attitude, time pressure, assumptions.","Traps。"),
C("fp.push-on","⏳","Why is push-on dangerous?","VFR-into-IMC risk increases as the flight progresses.","越飛越險。"),
C("fp.divert","↪️","How soon should divert planning be done?","A checkpoint within about 5 minutes allows unhurried planning.","5 min。"),
C("fp.divert","📐","Diversion heading tool?","1-in-60 rule or compute new heading/GS from a DR position.","1 in 60。"),
C("fp.lost","🌫️","First action if lost?","Don't panic; maintain heading, log, check compass/DG.","唔好驚。"),
C("fp.lost","⭕","MPP circle radius?","10% of distance flown since last fix.","10%。"),
C("fp.precaution","🛬","Precautionary landing planning?","Allow fuel/time for 2-3 inspections; decide early.","早決定。"),
C("fp.conf-bias","🧠","What's confirmation bias?","Favouring information that agrees with what you already believe.","偏見。"),
C("fp.conf-bias","📻","What does 'NBJ' mean from ATC?","Wait and stay clear; not take-off clearance.","等。"),
C("fp.time-pressure","⛓️","Chocks left on due to time pressure. Lesson?","Never skip checks; use checklist.","checklist。")
];
const anims=[
{title:"Fuel Stack: 拉參數睇 margin",hint:"拉 trip／alternate／holding 滑桿，睇油量疊 bar 夠唔夠 tank",build(box,H){
 const svg=H.svg(box,700,250),say=H.note(box);
 const names=["Taxi","Trip","Variable","Alternate","Final res","Holding"],cols=["#94a3b8","#38bdf8","#a78bfa","#fb923c","#ef4444","#facc15"];
 const rects=names.map((n,i)=>H.el("rect",{y:50,height:50,fill:cols[i]},svg));
 const marg=H.el("rect",{y:50,height:50,fill:"#22c55e","fill-opacity":".35",stroke:"#22c55e"},svg);
 const tl=H.el("line",{y1:38,y2:112,stroke:"#fff","stroke-width":3},svg);
 const tt=H.el("text",{y:30,fill:"#fff","font-size":13,"text-anchor":"middle"},svg);
 const leg=names.concat(["Margin"]).map((n,i)=>{const col=i%4,row=Math.floor(i/4);const x=40+col*160,y=150+row*40;
  H.el("rect",{x:x,y:y-11,width:12,height:12,fill:i<6?cols[i]:"#22c55e"},svg);
  return H.el("text",{x:x+18,y:y,fill:"#e2e8f0","font-size":13},svg)});
 const s={trip:90,cont:10,alt:20,fr:30,hold:0,tank:40.2};
 function update(){
  const trip=(10*14+Math.max(s.trip-10,0)*9.8)/60;
  const v=[2,trip,trip*s.cont/100,s.alt*9.8/60,s.fr*6.6/60,s.hold*6.6/60];
  const total=v.reduce((a,b)=>a+b,0),sc=620/Math.max(s.tank,total);let x=40;
  v.forEach((a,i)=>{rects[i].setAttribute("x",x);rects[i].setAttribute("width",Math.max(a*sc,0));x+=a*sc;leg[i].textContent=names[i]+" "+a.toFixed(1)+" USG"});
  const m=s.tank-total;marg.setAttribute("x",x);marg.setAttribute("width",Math.max(m*sc,0));
  leg[6].textContent="Margin "+m.toFixed(1)+" USG";
  const tx=40+s.tank*sc;tl.setAttribute("x1",tx);tl.setAttribute("x2",tx);tt.setAttribute("x",tx);tt.textContent="Tank "+s.tank+" USG";
  const end=s.tank/9.8*60;
  say(m<0?"超出 tank "+(-m).toFixed(1)+" USG：減 trip／alternate 或換 long-range tank":"Fuel required "+total.toFixed(1)+" USG，margin "+m.toFixed(1)+" USG（endurance 約 "+Math.round(end)+" min @cruise）")};
 H.slider(box,"Trip time (min)",30,240,90,v=>{s.trip=v;update()},5);
 H.slider(box,"Contingency %",0,15,10,v=>{s.cont=v;update()},1);
 H.slider(box,"Alternate (min)",0,60,20,v=>{s.alt=v;update()},5);
 H.slider(box,"Final reserve (min)",30,45,30,v=>{s.fr=v;update()},15);
 H.slider(box,"Holding (min)",0,60,0,v=>{s.hold=v;update()},15);
 H.slider(box,"Tank 0=std 1=LR",0,1,0,v=>{s.tank=v?50:40.2;update()},1);
}},
{title:"SID → Airway → STAR → Approach",hint:"飛機沿 leg 飛，睇每段名稱（示意圖，唔係比例）",build(box,H){
 const svg=H.svg(box,700,280),say=H.note(box);
 const P=[["RWY",60,230,"SID"],["ROVER",120,190,"SID"],["RAMEN",200,150,"SID"],["VEDVO",290,110,"SID"],["SEGPO",380,70,"SID"],["DALOL",470,50,"Airway"],["ABBEY",560,90,"STAR"],["IAF",600,150,"STAR"],["FAF",540,210,"Approach"],["RWY",440,235,"Approach"]];
 const col={SID:"#38bdf8",Airway:"#94a3b8",STAR:"#4ade80",Approach:"#fb923c"};
 const txt={SID:"SID：跟 waypoint、速度同 gradient 限制",Airway:"Enroute airway：ATS route",STAR:"STAR：標準到達路線，無 ATC 許可唔好落",Approach:"Approach：final → DA／MDA → land 或 missed"};
 for(let i=0;i<P.length-1;i++)H.el("line",{x1:P[i][1],y1:P[i][2],x2:P[i+1][1],y2:P[i+1][2],stroke:col[P[i+1][3]],"stroke-width":3},svg);
 P.forEach((p,i)=>{H.el("circle",{cx:p[1],cy:p[2],r:5,fill:"#fff"},svg);const t=H.el("text",{x:p[1]+8,y:p[2]-8,fill:"#e2e8f0","font-size":12},svg);t.textContent=p[0]});
 const plane=H.el("polygon",{points:"12,0 -8,-7 -4,0 -8,7",fill:"#facc15"},svg);
 let seg=0,f=0,sp=0.012,paused=false;
 function place(){const a=P[seg],b=P[seg+1];const x=a[1]+(b[1]-a[1])*f,y=a[2]+(b[2]-a[2])*f;const ang=Math.atan2(b[2]-a[2],b[1]-a[1])*180/Math.PI;plane.setAttribute("transform","translate("+x+","+y+") rotate("+ang+")");say(txt[b[3]]+"  →  "+b[0])}
 H.loop(()=>{if(paused)return;f+=sp;if(f>=1){f=0;seg++;if(seg>=P.length-1)seg=0}place()});
 H.slider(box,"Speed",1,5,2,v=>{sp=v*0.006},1);
 H.button(box,"Pause／Resume",()=>{paused=!paused});
 H.button(box,"Restart",()=>{seg=0;f=0});
 place();
}},
{title:"Holding Pattern 同 leg 長度",hint:"拉高度：>14000 ft 之後 inbound leg 變 1.5 min（FAA）",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const path=H.el("polyline",{fill:"none",stroke:"#38bdf8","stroke-width":3},svg);
 H.el("circle",{cx:300,cy:60,r:6,fill:"#fff"},svg);
 const fx=H.el("text",{x:312,y:55,fill:"#fff","font-size":13},svg);fx.textContent="FIX（inbound 向北）";
 const plane=H.el("polygon",{points:"12,0 -8,-7 -4,0 -8,7",fill:"#facc15"},svg);
 let pts=[],cum=[],tot=0,d=0,alt=6000,leg=1;
 function mk(){const L=leg*60;pts=[];
  for(let i=0;i<=10;i++)pts.push([300,60+L-L*i/10]);
  for(let i=1;i<=20;i++){const th=Math.PI*(1-i/20);pts.push([340+40*Math.cos(th),60-40*Math.sin(th)])}
  for(let i=1;i<=10;i++)pts.push([380,60+L*i/10]);
  for(let i=1;i<=20;i++){const th=Math.PI*i/20;pts.push([340+40*Math.cos(th),60+L+40*Math.sin(th)])}
  cum=[0];for(let i=1;i<pts.length;i++)cum.push(cum[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));tot=cum[cum.length-1];
  path.setAttribute("points",pts.map(p=>p.join(",")).join(" "))}
 H.loop(()=>{d=(d+1.4)%tot;let i=1;while(i<cum.length-1&&cum[i]<d)i++;const a=pts[i-1],b=pts[i];const f=(d-cum[i-1])/Math.max(cum[i]-cum[i-1],0.001);
  plane.setAttribute("transform","translate("+(a[0]+(b[0]-a[0])*f)+","+(a[1]+(b[1]-a[1])*f)+") rotate("+(Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI)+")")});
 H.slider(box,"Altitude (ft)",2000,20000,6000,v=>{alt=v;leg=v>14000?1.5:1;mk();
  const spd=v<=6000?200:v<=14000?230:265;say("Leg "+leg+" min · 最高 holding speed "+spd+" KIAS（FAA，我唔確定 HK／ICAO 數字）· 右轉為標準")},500);
}},
{title:"Holding Entry：Direct／Teardrop／Parallel",hint:"拉飛機 heading，睇用邊種 entry",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);const cx=350,cy=150,R=125;
 const pt=(b,r)=>[cx+r*Math.sin(b*Math.PI/180),cy-r*Math.cos(b*Math.PI/180)];
 function wedge(a,b,c,lab){const p1=pt(a,R),p2=pt(b,R);const large=((b-a+360)%360)>180?1:0;
  H.el("path",{d:"M"+cx+","+cy+" L"+p1[0]+","+p1[1]+" A"+R+","+R+" 0 "+large+",1 "+p2[0]+","+p2[1]+" Z",fill:c,"fill-opacity":".25",stroke:c},svg);
  const m=pt(((a+((b-a+360)%360)/2)%360),R*0.65);const t=H.el("text",{x:m[0],y:m[1],fill:c,"font-size":13,"text-anchor":"middle"},svg);t.textContent=lab}
 wedge(70,250,"#4ade80","DIRECT");wedge(250,360,"#fb923c","TEARDROP");wedge(0,70,"#38bdf8","PARALLEL");
 H.el("line",{x1:cx,y1:cy,x2:cx,y2:cy+90,stroke:"#fff","stroke-width":3},svg);
 H.el("path",{d:"M"+cx+","+cy+" C"+(cx+10)+","+(cy-45)+" "+(cx+75)+","+(cy-45)+" "+(cx+75)+","+cy+" L"+(cx+75)+","+(cy+90)+" C"+(cx+75)+","+(cy+130)+" "+cx+","+(cy+130)+" "+cx+","+(cy+90),fill:"none",stroke:"#fff","stroke-width":2,"stroke-dasharray":"5 4"},svg);
 const lb=H.el("text",{x:cx+8,y:cy+8,fill:"#fff","font-size":12},svg);lb.textContent="FIX";
 const pl=H.el("polygon",{points:"14,0 -9,-8 -4,0 -9,8",fill:"#facc15"},svg);
 H.slider(box,"Aircraft heading to fix (°)",0,359,180,d=>{const b=(d+180)%360;const p=pt(b,R-10);pl.setAttribute("transform","translate("+p[0]+","+p[1]+") rotate("+(d-90)+")");
  let k;if(d>=250||d<70)k="DIRECT：直接入，右轉入 hold";else if(d<180)k="TEARDROP：outbound 偏 30° 再右轉 intercept inbound";else k="PARALLEL：平行 outbound，再左轉返 inbound";
  say("Heading "+d+"°（inbound course 360°、右轉 hold）→ "+k+"（FAA 70° line sectors，我唔確定 ICAO 分界完全一樣）")},1);
}},
{title:"DA／MDA：見唔見跑道？",hint:"調 DA 同 cloud base，撳 Fly approach",build(box,H){
 const svg=H.svg(box,700,260),say=H.note(box);const gy=220,Y=a=>gy-0.15*a,X=nm=>560-60*nm;
 const cloud=H.el("rect",{x:0,y:0,width:700,fill:"#64748b","fill-opacity":".6"},svg);
 H.el("rect",{x:0,y:gy,width:700,height:40,fill:"#334155"},svg);H.el("rect",{x:560,y:gy-2,width:120,height:5,fill:"#fff"},svg);
 H.el("line",{x1:X(4),y1:Y(319*4),x2:560,y2:gy,stroke:"#4ade80","stroke-dasharray":"6 4"},svg);
 const dl=H.el("line",{x1:0,x2:700,stroke:"#ef4444","stroke-dasharray":"4 4"},svg),dt=H.el("text",{x:8,fill:"#ef4444","font-size":12},svg);
 const plane=H.el("polygon",{points:"12,0 -8,-7 -4,0 -8,7",fill:"#facc15"},svg);
 let da=200,cb=500,nm=4,alt=319*4,state=0,ang=0;
 function setup(){nm=4;alt=319*4;state=0;ang=0;cloud.setAttribute("height",Y(cb));dl.setAttribute("y1",Y(da));dl.setAttribute("y2",Y(da));dt.setAttribute("y",Y(da)-4);dt.textContent="DA／MDA "+da+" ft";draw();say("Final approach 3°…")}
 function draw(){plane.setAttribute("transform","translate("+X(nm)+","+Y(alt)+") rotate("+ang+")")}
 H.loop(()=>{if(state===0||state===3||state===4)return;
  if(state===1){nm-=0.012;alt=319*nm;ang=18;if(alt<=da){if(cb>da){state=2;say("DA：見到 runway environment → 繼續落")}else{state=5;say("DA：未見跑道（cloud base "+cb+" ft 低過 DA）→ MISSED APPROACH")}}}
  else if(state===2){nm-=0.012;alt=Math.max(319*nm,0);ang=18;if(nm<=0){state=3;say("Landed")}}
  else if(state===5){nm-=0.012;alt+=2.2;ang=-35;if(nm<-3){state=3}}
  draw()});
 H.slider(box,"DA／MDA (ft)",100,600,200,v=>{da=v;setup()},25);
 H.slider(box,"Cloud base (ft)",100,800,500,v=>{cb=v;setup()},25);
 H.button(box,"Fly approach",()=>{setup();state=1});
 setup();
}},
{title:"PNR 同 ETP 隨風變",hint:"拉風：tailwind out（正）／headwind out（負）",build(box,H){
 const svg=H.svg(box,700,220),say=H.note(box);
 H.el("line",{x1:50,y1:110,x2:650,y2:110,stroke:"#94a3b8","stroke-width":4},svg);
 const lab=(x,t,c)=>{const e=H.el("text",{x:x,y:96,fill:c,"font-size":13,"text-anchor":"middle"},svg);e.textContent=t;return e};
 lab(50,"A (dep)","#fff");const bl=lab(650,"B (dest)","#fff");
 const pm=H.el("circle",{cy:110,r:9,fill:"#ef4444"},svg),pt=H.el("text",{y:140,fill:"#ef4444","font-size":13,"text-anchor":"middle"},svg);
 const em=H.el("circle",{cy:110,r:9,fill:"#38bdf8"},svg),et=H.el("text",{y:170,fill:"#38bdf8","font-size":13,"text-anchor":"middle"},svg);
 const ws=H.el("text",{x:350,y:40,fill:"#facc15","font-size":14,"text-anchor":"middle"},svg);
 const s={w:0,E:4,D:400};const TAS=120;
 function update(){const O=TAS+s.w,Hh=TAS-s.w;const sc=600/s.D;
  const tPNR=s.E*Hh/(O+Hh),dPNR=O*tPNR,dETP=s.D*Hh/(O+Hh);
  const px=50+Math.min(dPNR,s.D)*sc,ex=50+dETP*sc;
  pm.setAttribute("cx",px);pt.setAttribute("x",px);pt.textContent="PNR "+Math.round(dPNR)+" nm";
  em.setAttribute("cx",ex);et.setAttribute("x",ex);et.textContent="ETP "+Math.round(dETP)+" nm";
  ws.textContent=s.w===0?"Nil wind":(s.w>0?"→ Tailwind A→B "+s.w+" kt":"← Headwind A→B "+(-s.w)+" kt");
  say("TAS 120 kt · GS out "+O+" / home "+Hh+" kt · PNR time "+(tPNR*60).toFixed(0)+" min"+(dPNR>s.D?"（PNR 超過 B：夠油去到再返）":"")+" · 逆風 out → PNR、ETP 都移向 A")};
 H.slider(box,"Wind A→B (kt)",-50,50,0,v=>{s.w=v;update()},5);
 H.slider(box,"Safe endurance (hr)",1,8,4,v=>{s.E=v;update()},0.5);
 H.slider(box,"Route A–B (nm)",150,800,400,v=>{s.D=v;update()},10);
}},
{title:"Climb Gradient ↔ ROC ↔ 障礙物",hint:"拉 GS／gradient，睇 ft/min 同有冇 clear 障礙",build(box,H){
 const svg=H.svg(box,700,240),say=H.note(box);
 H.el("rect",{x:40,y:200,width:620,height:20,fill:"#334155"},svg);
 const line=H.el("line",{x1:40,y1:200,stroke:"#38bdf8","stroke-width":3},svg);
 const hill=H.el("polygon",{fill:"#a16207"},svg);
 const pl=H.el("polygon",{points:"12,0 -8,-7 -4,0 -8,7",fill:"#facc15"},svg);
 const s={gs:150,g:3.3,h:600};const X=nm=>40+nm*100,Y=ft=>200-ft*0.05;
 function update(){const hAt=s.g*6076/100*5,ang=Math.atan2(Y(0)-Y(hAt),X(5)-X(0));
  line.setAttribute("x2",X(6));line.setAttribute("y2",Y(s.g*6076/100*6));
  hill.setAttribute("points",[X(4.7)+","+200,X(5)+","+Y(s.h),X(5.3)+","+200].join(" "));
  pl.setAttribute("transform","translate("+X(3)+","+Y(s.g*6076/100*3)+") rotate("+(Math.atan2(Y(s.g*60.76)-Y(0),100)*180/Math.PI)+")");
  const roc=s.gs*s.g*1.013;
  say("ROC ≈ "+Math.round(roc)+" ft/min（GS×gradient%）· 5 nm 時高度 "+Math.round(hAt)+" ft vs 障礙 "+s.h+" ft → "+(hAt>=s.h?"CLEAR":"唔 clear：要更高 gradient"))};
 H.slider(box,"Groundspeed (kt)",80,300,150,v=>{s.gs=v;update()},10);
 H.slider(box,"Gradient (%)",1,10,3.3,v=>{s.g=v;update()},0.1);
 H.slider(box,"Obstacle height @5nm (ft)",200,1500,600,v=>{s.h=v;update()},50);
}},
{title:"NOTAM Decode",hint:"撳欄位睇意思（樣本，唔係真 NOTAM）",build(box,H){
 const f=[["Q","Q) VHHK/QMRLC/IV/NBO/A/000/999/2218N11352E005","Q-line：FIR／subject／status code（QMRLC = runway closed）／scope／上下限／座標"],
  ["A","A) VHHH","A：location indicator（機場）"],["B","B) 2610260100","B：生效時間 UTC（YYMMDDHHMM）"],["C","C) 2610261000","C：完結時間 UTC"],
  ["E","E) RWY 07L CLSD DUE MAINT","E：plain language；CLSD = closed，DUE = because"],["FG","F) SFC G) UNL","F／G：下限（surface）／上限（unlimited）"]];
 const pre=document.createElement("div");pre.style.cssText="font-family:monospace;font-size:14px;line-height:1.9;background:#0b1224;padding:12px;border-radius:10px";box.appendChild(pre);
 const say=H.note(box);const spans={};
 f.forEach(r=>{const d=document.createElement("div");d.textContent=r[1];pre.appendChild(d);spans[r[0]]=d});
 f.forEach(r=>H.button(box,r[0]==="FG"?"F／G":r[0],()=>{f.forEach(q=>{spans[q[0]].style.background="transparent"});spans[r[0]].style.background="#854d0e";say(r[2])}));
 say("撳掣睇每個欄位");
}}
];
Cadet.add({key:"fp",name:"Flight Planning & Procedures",emoji:"🗺️",color:"#fbbf24",
 src:"Airspace FP02 Fuel Planning · FP03 IFR SID STAR · ENZO (NOTAM, PPL/CPL test, YPPF, briefings, scenarios) · ATP Test Prep · Basic Aero Knowledge · Nav ebook",
 topics,links,cards,anims});
})();
