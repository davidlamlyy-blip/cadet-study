// Performance & Mass/Balance — 來源見 coverage/perf.md
(function(){
function tx(H,p,x,y,s,str,fill,anc){const t=H.el("text",{x:x,y:y,"font-size":s,fill:fill||"#e2e8f0","text-anchor":anc||"start"},p);t.textContent=str;return t}
Cadet.add({
key:"perf", name:"Performance & Mass/Balance", emoji:"📊", color:"#f59e0b",
src:"Airspace PERF02 · MB01 · AAEP PERF exercises · CASA workbook · BAK ch10-11 · ATP Test Prep · C172S POH · DA40 AFM",
topics:[
// ---------- Mass Basics
{id:"perf.massweight",g:"Mass Basics",t:"Mass vs Weight",d:"Mass 係物質量；Weight 係weight拉力。輕飛機日常混用。",pts:["Mass: kg / lb","Weight = mass x g (N)","Light a/c 習慣講 weight"],rel:["perf.units"],src:"MB01; BAK ch10"},
{id:"perf.units",g:"Mass Basics",t:"Units & Conversions",d:"kg、lb、litre、US gal 要識轉；fuel 要換成weight。",pts:["1 kg = 2.205 lb","1 US gal = 3.785 L","Avgas 0.72 kg/L (CASA)","1 lb = 0.454 kg"],rel:["perf.fuelsg"],src:"MB01; CASA workbook p3"},
{id:"perf.fuelsg",g:"Mass Basics",t:"Fuel Density",d:"Avgas 比水輕。CASA 考試統一用 0.72 kg/L。",pts:["Avgas ~0.71-0.72 kg/L","6 lb/US gal (C172 POH)","Jet A-1 較重 (~0.8)"],rel:["perf.units","perf.fuelburn"],src:"CASA workbook p3; BAK p362; C172S POH",check:true},
{id:"perf.overweight",g:"Mass Basics",t:"Effects of Overweight",d:"超重令性能同操控全面變差，仲可能損壞結構。",pts:["Vs 同 takeoff speed 升","Takeoff run 變長","Climb 差、ceiling 低","Range 同 endurance 減","Landing roll 長"],rel:["perf.limittypes","perf.todweight","perf.climbfactors"],src:"MB01; BAK p360"},
{id:"perf.limittypes",g:"Mass Basics",t:"Structural vs Performance Limit",d:"質量限制有兩種來源：結構強度，同當日性能。",pts:["Structural: MTOW, MLW, MZFM","Performance: runway, obstacle, DA","用較細嗰個"],rel:["perf.mtowmlw","perf.perflimited"],src:"MB01; BAK p361-362"},
// ---------- Mass Terms
{id:"perf.bem",g:"Mass Terms",t:"Basic Empty Mass",d:"fuselage+engine+固定設備+unusable fuel+全滿 oil。",pts:["唔包 crew、payload、usable fuel","每架機唔同","喺 AFM / W&B report"],rel:["perf.dom","perf.oilcorr"],src:"MB01; BAK p361"},
{id:"perf.dom",g:"Mass Terms",t:"Dry Operating Mass",d:"BEM + 為某任務準備嘅 variable load，未計 fuel 同 traffic load。",pts:["Crew + 行李","Catering、potable water","唔包 usable fuel"],rel:["perf.bem","perf.zfm"],src:"MB01 slides"},
{id:"perf.zfm",g:"Mass Terms",t:"Zero Fuel Mass",d:"DOM + traffic load，即係除咗 usable fuel 之外全部。",pts:["ZFM = BEM + crew + pax + bag","喺 fuel 之前計"],rel:["perf.mzfm","perf.tom"],src:"MB01; BAK p361"},
{id:"perf.mzfm",g:"Mass Terms",t:"Maximum Zero Fuel Mass",d:"結構限制，同 wing root bending moment 有關。",pts:["超出部分只可以係 wing fuel","Fuel 喺翼weight抵消 lift 彎矩","DA40: 1150 kg"],rel:["perf.zfm","perf.limittypes"],src:"MB01; DA40 W&B sheet"},
{id:"perf.tom",g:"Mass Terms",t:"Take-off Mass & Ramp Mass",d:"TOM = ZFM + take-off fuel。Ramp = TOM + start/taxi fuel。",pts:["Gross weight = ZFM + fuel","Ramp 可略高過 MTOW","C172S: ramp 2558 / MTOW 2550 lb"],rel:["perf.zfm","perf.mtowmlw","perf.blockfuel"],src:"MB01; BAK p361; C172S POH"},
{id:"perf.mtowmlw",g:"Mass Terms",t:"MTOW & MLW",d:"最大take-off／着陸質量。有啲機 MLW 低過 MTOW，要燒夠油。",pts:["C172S: both 2550 lb","DA40: MTOW 1200 kg","DA40 MLW 1150 kg","Landing 唔准超 MLW"],rel:["perf.tom","perf.perflimited"],src:"C172S POH s2; DA W&B sheet; BAK p362",check:true},
{id:"perf.blockfuel",g:"Mass Terms",t:"Block Fuel",d:"Ramp mass = ZFM + block fuel（全部計劃油量）。",pts:["Taxi + Trip","Contingency + Alternate","Final reserve","+ Additional / Extra"],rel:["perf.tom"],src:"MB01 slide"},
{id:"perf.ballast",g:"Mass Terms",t:"Ballast",d:"用嚟調 CG 嘅死重（沙包、鉛），唔係 payload。",pts:["例：空機 ferry 加後箱 ballast","加完要再查 mass 同 CG"],rel:["perf.cgaddremove"],src:"BAK p362; AAEP Alpha 5"},
// ---------- Moment & CG
{id:"perf.datumarm",g:"Moment & CG",t:"Datum & Arm",d:"Datum 係量度基準線；arm 係物件距 datum 嘅距離。",pts:["C172S datum: firewall 前面","DA40 datum: 前於 stub wing root rib 2.194 m","Aft of datum 為正"],rel:["perf.moment"],src:"MB01; C172S POH s2; DA40 AFM s2"},
{id:"perf.moment",g:"Moment & CG",t:"Moment",d:"Moment = weight x arm，即係旋轉效果。",pts:["kg.m、lb.in、kg.mm","天秤兩邊 moment 相等先平衡"],rel:["perf.datumarm","perf.cgcalc"],src:"MB01; BAK p363"},
{id:"perf.cgcalc",g:"Moment & CG",t:"CG Calculation",d:"CG = total moment / total weight。",pts:["逐項 W x arm","全部 moment 加埋","除以 total weight"],rel:["perf.moment","perf.envelope"],src:"MB01; BAK p365"},
{id:"perf.lateral",g:"Moment & CG",t:"Lateral CG",d:"一般只關心 longitudinal CG；橫向由fuselage設計限制。",pts:["特殊情況先要理 (軍機)","大型機 cargo 都有限重"],rel:["perf.cgcalc"],src:"MB01"},
{id:"perf.index",g:"Moment & CG",t:"Index Units",d:"Moment 除以固定數，數字細啲易計。",pts:["Charlie: IU = kg.mm / 100","CG(mm) = IU x 100 / weight","Bravo: moment/1000"],rel:["perf.loadsys","perf.cgcalc"],src:"CASA workbook p13; BAK"},
{id:"perf.mac",g:"Moment & CG",t:"MAC & %MAC",d:"用 Mean Aerodynamic Chord 表達 CG。大型機用。",pts:["%MAC = (CG-LEMAC)/MAC x100","MAC = LEMAC 至 TEMAC","CG 常見 10-35% MAC"],rel:["perf.cgcalc","perf.envelope"],src:"MB01"},
{id:"perf.cgshift",g:"Moment & CG",t:"Load to Shift",d:"搬貨令 CG 移位：移動weight x 距離 = GW x CG 變化。",pts:["w x d = GW x ΔCG","GW 唔變","d = 兩個 station 距離"],rel:["perf.cgaddremove","perf.cgcalc"],src:"BAK p371"},
{id:"perf.cgaddremove",g:"Moment & CG",t:"Add / Remove Weight",d:"加減weight：新 CG = 新總 moment / 新總 weight。",pts:["例: 450000 N, 15.6 m +10000 N@12 m","新 CG 15.52 m = 56% MAC"],rel:["perf.cgshift","perf.ballast"],src:"MB01 MAC question; BAK p371"},
{id:"perf.fuelburn",g:"Moment & CG",t:"CG Shift with Fuel Burn",d:"燒油會改變 CG，所以 ZFW 同 TOW 兩點都要喺 envelope 入面。",pts:["Fuel arm 通常近 CG","兩點連線 = fuel軌跡"],rel:["perf.zfwtow","perf.envelope"],src:"AAEP Alpha 6; CASA workbook"},
// ---------- Envelope & Loading
{id:"perf.envelope",g:"CG Envelope & Loading",t:"CG Envelope",d:"Weight vs CG 圖，限定許可範圍（前限、後限、MTOW）。",pts:["前限隨 weight 變","後限常固定","出界 = 唔准飛"],rel:["perf.cgcalc","perf.zfwtow","perf.fwdcg","perf.aftcg"],src:"MB01; C172S POH s2/s6; DA40 AFM s2"},
{id:"perf.zfwtow",g:"CG Envelope & Loading",t:"Check ZFW and TOW",d:"兩個點（零油、take-off）都要喺 envelope 入面。",pts:["先畫 ZFW 點","再畫 TOW 點","有時用weight限制先剔答案"],rel:["perf.fuelburn","perf.loadsteps"],src:"AAEP Loading Answer Key (Alpha 6)"},
{id:"perf.loadsteps",g:"CG Envelope & Loading",t:"Loading Calculation Steps",d:"列表 weight/arm/moment → 加總 → 查 envelope。",pts:["BEW + oil 修正","Pax、bag、fuel","計 ZFW, TOW","檢查 limits + CG"],rel:["perf.zfwtow","perf.loadsys"],src:"BAK ch10; C172S POH s6"},
{id:"perf.loadsys",g:"CG Envelope & Loading",t:"CASA Loading Systems",d:"CASA 考試有 Alpha（圖表）、Bravo（moment/1000）、Charlie（IU）。",pts:["Alpha: 6/7 seats, IU 刻度","Bravo: 4 seats, lb/in","Charlie: 4 seats, kg/mm IU","Fuel 0.72 kg/L"],rel:["perf.index","perf.loadsteps"],src:"CASA workbook p9-14; AAEP PERF 2"},
{id:"perf.exfuel",g:"CG Envelope & Loading",t:"Max Fuel / Max Baggage Problems",d:"考試常問：滿載下尚可加幾多 fuel 或行李？",pts:["MTOW - 已載weight","再驗 CG 有冇出界","Alpha 2: 158 kg fuel"],rel:["perf.loadsteps","perf.zfwtow"],src:"AAEP Alpha 1-6, Bravo 1-2, Charlie 1-3"},
{id:"perf.utility",g:"CG Envelope & Loading",t:"Normal vs Utility Category",d:"Utility 有較高 load factor，但 MTOW 低、後限前移。",pts:["C172S normal 2550 lb","C172S utility 2200 lb","Utility: 行李箱空、後座唔坐人"],rel:["perf.envelope"],src:"C172S POH s2; BAK p371"},
{id:"perf.c172wb",g:"CG Envelope & Loading",t:"C172S W&B Data",d:"Cessna 172S 嘅 limits（ENZO 機隊）。",pts:["MTOW 2550 lb","Bag 1 120 lb, Bag 2 50 lb (合共 120)","CG fwd 35.0-41.0 in, aft 47.3 in","Fuel arm 48.0 in"],rel:["perf.envelope","perf.mtowmlw"],src:"C172S POH s2, s6"},
{id:"perf.da40wb",g:"CG Envelope & Loading",t:"DA40 XLT W&B Data",d:"DA40 XLT 嘅 limits（ENZO 機隊，見 W&B sheet）。",pts:["MTOW 1200 / MZFM 1150 kg","Arms: seat 2.30, rear 3.25 m","Fuel 2.63 m, bag 3.89/4.54 m","CG aft limit 2.59 m (std tank)"],rel:["perf.envelope","perf.mzfm"],src:"DA40 W&B Updated; DA40 AFM s2",check:true},
{id:"perf.oilcorr",g:"CG Envelope & Loading",t:"Oil Correction",d:"BEW 當油滿。若 dipstick 低過標準，要扣返缺油weight。",pts:["DA40: 8 quarts 滿","缺 2 qt ~1.7 kg","Charlie 8 qt = 7 kg"],rel:["perf.bem","perf.loadsteps"],src:"DA40 W&B sheet note; CASA workbook p14"},
// ---------- CG Effects
{id:"perf.tailforce",g:"CG Effects",t:"Tail Force & Longitudinal Balance",d:"CG 通常喺 CP 前面，tail 要向下壓去平衡。",pts:["Weight@CG vs Lift@CP","Tail 產生 downforce","CG 越前，downforce 越大"],rel:["perf.fwdcg","perf.aftcg","perf.trimdrag"],src:"MB01 slides"},
{id:"perf.fwdcg",g:"CG Effects",t:"Forward CG",d:"穩定但笨重：nose-down、stall speed 高、range 減。",pts:["Nose-down tendency","Elevator authority 減","Vs 升 (apparent weight)","Climb、range 差","Nose wheel 受力大"],rel:["perf.tailforce","perf.trimdrag","perf.range"],src:"MB01"},
{id:"perf.aftcg",g:"CG Effects",t:"Aft CG",d:"省油但不穩：pitch-up、stick 輕、易 overcontrol。",pts:["Pitch-up tendency","Stability 減","Vs 降","Range/endurance 增","Stick forces 輕，易 overstress"],rel:["perf.tailforce","perf.range"],src:"MB01"},
{id:"perf.trimdrag",g:"CG Effects",t:"Trim Drag",d:"Tail 下壓越大，額外 drag 越大，耗油。",pts:["Fwd CG 增加 trim drag","導致 range 減"],rel:["perf.fwdcg","perf.tailforce"],src:"MB01"},
{id:"perf.rss",g:"CG Effects",t:"Relaxed Static Stability",d:"現代客機將 CG 接近後限，用 fly-by-wire 補stability。",pts:["Tail downforce 細","tail 可以輕啲、細啲","B777 / MD-11 例子"],rel:["perf.aftcg","perf.trimdrag"],src:"MB01 slides"},
{id:"perf.a350",g:"CG Effects",t:"A350 Trim Minimisation",d:"盡量唔郁 stabiliser 減 trim drag；DFS／variable camber 輔助。",pts:["DFS max 4°","Variable camber cruise","減 wing root 負荷"],rel:["perf.trimdrag"],src:"MB01 slides"},
// ---------- Atmosphere
{id:"perf.isa",g:"Atmosphere & Density",t:"ISA",d:"標準大氣：性能圖表嘅基準。",pts:["SL: 1013.2 hPa, +15°C","Lapse 2°C / 1000 ft","1 hPa ~ 30 ft","1°C ~ 120 ft density"],rel:["perf.pa","perf.da"],src:"BAK p381"},
{id:"perf.pa",g:"Atmosphere & Density",t:"Pressure Altitude",d:"PA = elevation + (1013 - QNH) x 30。",pts:["Elev 1500, QNH 1000 → 1890 ft","QNH 低 → PA 高","altimeter set 1013 即 PA"],rel:["perf.isa","perf.da"],src:"BAK p382; AAEP PERF 1; ENZO scenario"},
{id:"perf.da",g:"Atmosphere & Density",t:"Density Altitude",d:"DA = PA + 120 x (OAT - ISA temp)。越高越熱，性能越差。",pts:["ISA temp = 15 - 2 x PA/1000","ENZO 簡化用 ISA 15","DA 高 = 空氣稀"],rel:["perf.pa","perf.hothigh","perf.engdensity"],src:"BAK p381; ENZO scenario p2",check:true},
{id:"perf.hothigh",g:"Atmosphere & Density",t:"Hot, High, Humid",d:"高海拔、高溫、高濕、低 QNH → density 低 → 性能差。",pts:["Engine 少 power","Prop 少 thrust","Wing 少 lift","Chart 唔計humidity，要自己留餘"],rel:["perf.da","perf.todda","perf.climbfactors"],src:"BAK p384-385; ENZO scenario"},
// ---------- Take-off & Landing
{id:"perf.todr",g:"Take-off & Landing",t:"Take-off Distance Required",d:"由靜止到 50 ft screen height 嘅距離；要 ≤ TODA。",pts:["Ground roll + clearance","Chart 以 ground roll / 50 ft 兩條線","TODR ≤ TODA"],rel:["perf.toss","perf.tsafety"],src:"BAK p383; DA40 AFM 5.3.6"},
{id:"perf.toss",g:"Take-off & Landing",t:"Take-off Safety Speed",d:"50 ft 時要達到嘅speed，至少 1.2 Vs（單發）。",pts:["C172S short field: 56 KIAS @50 ft","DA40 climb-out 67 KIAS (1200 kg)","多發叫 V2"],rel:["perf.todr","perf.vspeeds"],src:"BAK p383; C172S POH; DA40 AFM"},
{id:"perf.tsafety",g:"Take-off & Landing",t:"Safety Factor 1.15",d:"Chart 距離再乘 1.15（CASA，MTOW <5700 kg）。",pts:["Ground roll 320 → 368 m","Over 50 ft 470 → 540.5 m","每張 CASA chart 都標 factor"],rel:["perf.todr","perf.chartuse"],src:"ENZO scenario p2; CASA workbook p5-8",check:true},
{id:"perf.todweight",g:"Take-off & Landing",t:"Weight Effect on Take-off",d:"重啲：加速慢、Vs 高、TOSS 高 → 距離長。",pts:["+10% weight → +25% distance","口訣參考，唔係精確"],rel:["perf.overweight","perf.todr"],src:"BAK p383",check:true},
{id:"perf.todwind",g:"Take-off & Landing",t:"Wind Effect",d:"Headwind 縮短，tailwind 延長；chart 唔計 tailwind 對 climb gradient 影響。",pts:["Gust: headwind 用最細","Crosswind 用最大 gust"],rel:["perf.todr","perf.slope","perf.xwind"],src:"BAK p384"},
{id:"perf.slope",g:"Take-off & Landing",t:"Runway Slope & Surface",d:"Upslope、濕草、長草、軟地都令 TODR 增加。",pts:["DA40: 2% up ≈ +10%","DA40 草 <5 cm: +10% roll","草 5-10 cm: +15%；>10 cm: ≥+25%","濕草再 +10%；>25 cm 唔好take-off"],rel:["perf.todr","perf.todwind"],src:"BAK p385; DA40 AFM 5.3.6"},
{id:"perf.slopewind",g:"Take-off & Landing",t:"Slope vs Tailwind",d:"若 tailwind ≤5 kt，順坡take-off可能比 headwind 逆坡好。",pts:["兩者要同時對照 chart","AAEP B5: RWY 13 tailwind 太大"],rel:["perf.slope","perf.todwind"],src:"BAK p385; AAEP Ex Answer Key B5"},
{id:"perf.todda",g:"Take-off & Landing",t:"Density Effect on TODR",d:"DA 越高，TODR 越長：C172S 4000 ft 20°C 比 SL 長好多。",pts:["C172S SL 20°C: 1690 ft @50 ft","8000 ft 20°C: 3880 ft","(2550 lb, flaps 10, 零風)"],rel:["perf.da","perf.todr"],src:"C172S POH s5 fig 5-5",check:true},
{id:"perf.climblimit",g:"Take-off & Landing",t:"Climb Limit Weight",d:"Chart 另一條限制：take-off後要有足夠 climb gradient。",pts:["Take-off weight ≤ min(A, B)","B = climb limit","小機 gradient 常 6% (CASA)"],rel:["perf.perflimited","perf.climbfactors"],src:"BAK p395; CASA workbook p5, p7",check:true},
{id:"perf.perflimited",g:"Take-off & Landing",t:"Performance-Limited TOM / LM",d:"短runway、障礙、熱、高 DA → 可用最大質量低過結構 MTOW。",pts:["Runway, obstacle","Wind, slope, DA","Landing: 要留 go-around climb"],rel:["perf.limittypes","perf.climblimit","perf.chartuse"],src:"BAK p362"},
{id:"perf.chartuse",g:"Take-off & Landing",t:"Using a Take-off Chart",d:"PA → OAT → weight/ wind/ slope/ surface → TODR 或 MATOW。",pts:["先計 PA 同 OAT","跟 reference line 修正","Weight chart: 取較細嗰個"],rel:["perf.pa","perf.tsafety","perf.perflimited"],src:"AAEP PERF 1; CASA workbook; ENZO scenario"},
{id:"perf.landdist",g:"Take-off & Landing",t:"Landing Distance",d:"受 DA、風、坡、地面、approach speed 影響；與 weight 關係較細。",pts:["Factor 1.15","Vref 高 → roll 長","Landing chart 另一個 climb limit"],rel:["perf.vref","perf.todda"],src:"CASA workbook p6, p8; BAK"},
{id:"perf.vref",g:"Take-off & Landing",t:"Vref",d:"Final approach 參考speed，一般 1.3 Vso。",pts:["CASA chart: 58-65 KIAS 視機型","高 DA → GS 高"],rel:["perf.landdist","perf.vspeeds"],src:"ATP Test Prep ch4; CASA workbook"},
{id:"perf.xwind",g:"Take-off & Landing",t:"Crosswind Component",d:"Xwind = V x sin(角)；headwind = V x cos(角)。",pts:["30°≈0.5, 45°≈0.7, 60°≈0.9","C172S demonstrated 15 kt","DA40 demonstrated 20 kt","CASA charts: max 15 kt"],rel:["perf.todwind","perf.driftangle"],src:"C172S POH s4; DA40 AFM; CASA workbook"},
{id:"perf.driftangle",g:"Take-off & Landing",t:"Drift Angle Rule",d:"TAS 120 kt 時 drift ≈ crosswind 一半。",pts:["1-in-60: drift = 60 x xw / TAS"],rel:["perf.xwind"],src:"ENZO briefing 09"},
{id:"perf.shortfield",g:"Take-off & Landing",t:"Short-field Technique",d:"Short-field takeoff 用 flap、Vx 過障礙，之後轉 Vy。",pts:["C172S: flaps 10°, 56 KIAS @50 ft","清完障礙先收 flap","Landing: 重 brake"],rel:["perf.vx","perf.toss"],src:"ENZO 09; C172S POH"},
// ---------- Thrust & Power
{id:"perf.trequired",g:"Thrust & Power",t:"Thrust Required / Available",d:"Treq = drag（level flight）；Tav = engine提供嘅 thrust。",pts:["Treq = Drag","Treq > Tav → level flight唔到","Treq = Tav 都爬唔到"],rel:["perf.excess","perf.propthrust"],src:"PERF02 slides"},
{id:"perf.propthrust",g:"Thrust & Power",t:"Propeller Thrust vs Speed",d:"speed越高，blade AoA 越細，thrust 越少。",pts:["低速 thrust 最大","Prop efficiency 同speed有關"],rel:["perf.trequired","perf.prequired"],src:"PERF02 slides"},
{id:"perf.prequired",g:"Thrust & Power",t:"Power Required / Available",d:"Power = Force x Velocity，所以 Preq = Drag x TAS。",pts:["Pav 同 prop efficiency 有關","最低 Preq = min power speed"],rel:["perf.trequired","perf.excess"],src:"PERF02 slides"},
{id:"perf.excess",g:"Thrust & Power",t:"Excess Thrust & Excess Power",d:"climb靠剩餘：thrust 決定角度，power 決定速率。",pts:["Excess T = Tav - Treq","Excess P = Pav - Preq"],rel:["perf.vx","perf.vy"],src:"PERF02 slides"},
{id:"perf.dragcurve",g:"Thrust & Power",t:"Drag Curve",d:"Drag = parasite + induced；最低 drag speed即 best L/D。",pts:["Vmd = min drag = best L/D","Vmd 以下 induced 主導","以上 parasite 主導"],rel:["perf.bestglide","perf.rangeprop"],src:"BAK ch6; PERF02; ATP ch4"},
// ---------- Climb
{id:"perf.climbtypes",g:"Climb",t:"Types of Climb",d:"Best angle、best rate、cruise、zoom 四種。",pts:["Vx: altitude/距離","Vy: altitude/時間","Cruise climb 較快、涼、睇得遠","Zoom: 換speed做altitude"],rel:["perf.vx","perf.vy"],src:"PERF02; ENZO 04"},
{id:"perf.vx",g:"Climb",t:"Vx — Best Angle of Climb",d:"最短水平距離爬最多高；最大 excess thrust。",pts:["過障礙、short field","Vx < Vmd","C172S 62 KIAS (SL)","DA40 67 KIAS (T/O flap)"],rel:["perf.excess","perf.shortfield"],src:"PERF02; ENZO 04; C172S POH s4"},
{id:"perf.vy",g:"Climb",t:"Vy — Best Rate of Climb",d:"最短時間爬最多高；最大 excess power。",pts:["日常訓練用 Vy","Vy > Vmd (教材)","C172S 74 KIAS (SL)","DA40 76 KIAS (flap up)"],rel:["perf.excess","perf.climbformula"],src:"PERF02; ENZO 04; C172S POH",check:true},
{id:"perf.climbformula",g:"Climb",t:"Climb Formulas",d:"sin γ = (T - D)/W；RoC = excess power / W。",pts:["Angle ← excess thrust","Rate ← excess power","RoC 單位 fpm (VSI)"],rel:["perf.vx","perf.vy"],src:"PERF02 slides"},
{id:"perf.climbfactors",g:"Climb",t:"Factors Affecting Climb",d:"altitude、weight、temperature、flap、load factor → 都令 AoC 同 RoC 減。",pts:["Altitude, weight, temp ↑ → 差","Flap / gear drag → 差","Bank 增 induced drag"],rel:["perf.da","perf.overweight","perf.windclimb"],src:"PERF02; BAK p223"},
{id:"perf.windclimb",g:"Climb",t:"Wind & Climb",d:"風唔影響 RoC，但影響 AoC（over ground）。",pts:["Headwind: 角度大啲","Tailwind: 角度細啲","時間不變 → RoC 不變"],rel:["perf.climbfactors"],src:"PERF02; BAK p223"},
{id:"perf.ceiling",g:"Climb",t:"Service & Absolute Ceiling",d:"Absolute ceiling RoC=0；service ceiling 係剩餘小量 RoC。",pts:["Absolute: 0 fpm","Service: 100 fpm (prop)","Service: 500 fpm (jet)","Vx 同 Vy 向 ceiling 靠攏"],rel:["perf.climbfactors","perf.vx"],src:"PERF02; C172S POH s4"},
{id:"perf.climbvalues",g:"Climb",t:"Climb Speeds by Type",d:"ENZO 簡報／POH 數值（標明機型）。",pts:["C172S: Vx 62, Vy 74, cruise ~80","DA40: Vx 67, Vy 76, cruise 80","單位 KIAS"],rel:["perf.vx","perf.vy"],src:"ENZO 04 slide 13-14",check:true},
// ---------- Glide
{id:"perf.bestglide",g:"Glide & Descent",t:"Best Glide Speed",d:"最佳 L/D 角度 → 同樣altitude滑最遠。",pts:["~4° AoA (BAK)","Best glide = Vmd","C172S 68 KIAS","DA40 76-60 KIAS (視weight)"],rel:["perf.dragcurve","perf.glideratio"],src:"BAK p227; C172S POH fig 3-1; DA40 AFM 3.4"},
{id:"perf.glideratio",g:"Glide & Descent",t:"Glide Ratio",d:"DA40 8.8:1 即每 1000 ft 約 1.45 NM。",pts:["Windmilling prop: 8.8","Stopped prop: 10.3 (1.70 NM)","Flap up"],rel:["perf.bestglide","perf.glideflap"],src:"DA40 AFM 3.4"},
{id:"perf.glideweight",g:"Glide & Descent",t:"Weight in a Glide",d:"weight唔改變 glide angle，只提高最佳speed。",pts:["DA40: 76 kt @1200 kg","73 @1150, 68 @1000, 60 @850","實際：保持 best glide speed"],rel:["perf.bestglide"],src:"ENZO 04 slide 30-31; DA40 AFM 3.4"},
{id:"perf.glideflap",g:"Glide & Descent",t:"Flap in a Glide",d:"Flap 增加 drag，glide 變陡、距離縮短。",pts:["確定到 field 先放 flap"],rel:["perf.glideratio"],src:"ENZO 04; BAK p228"},
{id:"perf.glidewind",g:"Glide & Descent",t:"Wind in a Glide",d:"風只改 descent angle over ground 同 range。",pts:["Headwind: 角度大、range 短","Tailwind: 角度細、range 長"],rel:["perf.bestglide"],src:"ENZO 04 slide 33"},
{id:"perf.glidestretch",g:"Glide & Descent",t:"Don't Stretch the Glide",d:"拉高nose想滑遠只會更差：太慢 mush，太快 drag 大。",pts:["低於 undershoot 要加 power","每 1000 ft 暖engine"],rel:["perf.bestglide"],src:"BAK p228"},
{id:"perf.descentfactors",g:"Glide & Descent",t:"Descent Factors Summary",d:"weight、flap、wind、power 對 angle / rate / range 的影響。",pts:["Flap down: 角度↑ range↓","H/W: 角度↑ range↓","Power↑: rate↓ range↑","Weight: rate↑, 角度不變"],rel:["perf.glidewind","perf.glideflap","perf.glideweight"],src:"ENZO 04 slide 35"},
// ---------- Range & Endurance
{id:"perf.rangeprop",g:"Range & Endurance",t:"Max Range (Propeller)",d:"最大航程喺 L/D max（最佳 glide speed）。",pts:["Speed = Vmd","Range = 每單位 fuel 距離"],rel:["perf.dragcurve","perf.bestglide","perf.range"],src:"ATP ch4 cruise; BAK"},
{id:"perf.endurance",g:"Range & Endurance",t:"Max Endurance",d:"最長滯空：用最少 power，即 min power speed，比 Vmd 慢。",pts:["Min Preq / min fuel flow","慢過 max range speed"],rel:["perf.prequired","perf.rangeprop"],src:"ATP ch4; PERF02 curves",check:true},
{id:"perf.range",g:"Range & Endurance",t:"Range vs Weight/CG",d:"weight重、forward CG → range 同 endurance 減。",pts:["Overweight 減 range","Aft CG 增加 range"],rel:["perf.overweight","perf.fwdcg","perf.aftcg"],src:"MB01"},
{id:"perf.windcruise",g:"Range & Endurance",t:"Wind & Cruise Speed",d:"Headwind 要加速；tailwind 可減速。",pts:["縮短headwind時間","tailwind令 GS 補償"],rel:["perf.rangeprop"],src:"ATP ch4 cruise"},
{id:"perf.weightcruise",g:"Range & Endurance",t:"Optimum Speed as Fuel Burns",d:"機愈輕，最佳speed愈低（或altitude愈高，噴射機）。",pts:["Optimum AoA 不變","Jet: 升 altitude 或減速"],rel:["perf.rangeprop"],src:"ATP ch4 Q8381, 9077"},
{id:"perf.jetrange",g:"Range & Endurance",t:"Jet Best Range",d:"噴射機最佳 range speed 高過 L/Dmax。",pts:["高空更有效率","Mach cruise 常用"],rel:["perf.rangeprop"],src:"ATP ch4 cruise"},
{id:"perf.engdensity",g:"Range & Endurance",t:"Engine Power & Density",d:"DA 升高，power 減；活塞機尤其受影響。",pts:["Normally aspirated: MAP 跌","DA40: ISA+15°C → power -3%","Turbo: critical altitude"],rel:["perf.da","perf.climbfactors"],src:"ATP ch4; DA40 AFM 5.2"},
{id:"perf.vspeeds",g:"Range & Endurance",t:"Key V-Speeds",d:"Vs, Vso, Va, Vno, Vne, Vfe, Vref…",pts:["Va: 全舵面唔 overstress","Vno: 只可喺 smooth air 超過","Vne: 絕不超過","Vfe: flaps extended 最大"],rel:["perf.toss","perf.vref"],src:"BAK p382"}
],
links:[
["perf.overweight","perf.todweight","超重 → Vs 高、加速慢 → 距離長"],
["perf.overweight","perf.climbfactors","重 → Preq 升 → excess power 減"],
["perf.da","perf.todda","DA 高 → density 低 → 加速慢"],
["perf.hothigh","perf.climbfactors","空氣稀 → power 同 lift 少 → climb差"],
["perf.excess","perf.vx","最大 excess thrust → Vx"],
["perf.excess","perf.vy","最大 excess power → Vy"],
["perf.propthrust","perf.trequired","Prop thrust 隨speed跌 → Tav 線向下"],
["perf.prequired","perf.vy","Power 視角 → Vy"],
["perf.dragcurve","perf.bestglide","Min drag = best L/D = best glide"],
["perf.dragcurve","perf.rangeprop","Prop 最大 range 喺 L/Dmax"],
["perf.prequired","perf.endurance","Min power speed → max endurance"],
["perf.fwdcg","perf.trimdrag","前 CG → tail down force → trim drag"],
["perf.trimdrag","perf.range","Trim drag → 耗油 → range 減"],
["perf.aftcg","perf.range","後 CG tail load 細 → drag 少 → range 增"],
["perf.tailforce","perf.fwdcg","CG 越前，tail 要壓越大"],
["perf.cgcalc","perf.envelope","CG 結果要畫入 envelope"],
["perf.fuelburn","perf.zfwtow","燒油改變 CG → 要驗兩點"],
["perf.moment","perf.cgshift","搬貨 = moment 轉移"],
["perf.index","perf.loadsys","Charlie 用 IU 簡化計算"],
["perf.pa","perf.da","DA 由 PA 再加temperature修正"],
["perf.slopewind","perf.todwind","坡同風互相抵消"],
["perf.climblimit","perf.perflimited","Climb limit 令 TOM 低過 MTOW"],
["perf.tsafety","perf.todr","chart x 1.15 → TODR"],
["perf.toss","perf.todweight","重 → Vs 高 → TOSS 高 → 距離長"],
["perf.glideflap","perf.glideratio","Flap → L/D 減 → 滑唔遠"],
["perf.glidewind","perf.windcruise","風改變 GS，同一原理"],
["perf.weightcruise","perf.glideweight","weight改最佳speed，唔改 L/D"],
["perf.vx","perf.shortfield","Vx 用於過障礙"],
["perf.xwind","perf.driftangle","Xwind 大 → drift 大"],
["perf.windclimb","perf.todwind","風影響距離，唔影響時間"],
["perf.engdensity","perf.da","DA 高 → engine power 低"],
["perf.ceiling","perf.climbfactors","altitude升 → excess power 減 → ceiling"],
["perf.mzfm","perf.zfm","MZFM 限制 ZFM"],
["perf.limittypes","perf.mtowmlw","MTOW/MLW 係 structural 一類"],
["perf.oilcorr","perf.bem","BEM 假設油滿"],
["perf.ballast","perf.cgaddremove","Ballast 就係加重改 CG"],
["perf.rss","perf.aftcg","後移 CG 省油，靠 FBW 補償"],
["perf.landdist","perf.vref","Vref 高 → 滑跑長"],
["perf.exfuel","perf.zfwtow","求餘量後要驗 CG"],
["perf.chartuse","perf.pa","Chart 由 PA 開始"],
["perf.da40wb","perf.mzfm","DA40 sheet 有 MZFM 1150 kg"],
["perf.c172wb","perf.utility","C172S normal/utility limits"],
["perf.mac","perf.cgcalc","%MAC 由 CG 位置換算"]
],
cards:[
// Mass basics
{e:"⚖️",q:"What is the difference between mass and weight?",a:"Mass is the amount of matter; weight is the force of gravity acting on that mass.",zh:"Mass 係量，weight 係力。",topic:"perf.massweight",st:"ok"},
{e:"⚖️",q:"Why do pilots say weight when they mean mass?",a:"On light aircraft near the earth's surface g is effectively constant, so the two are used interchangeably.",zh:"習慣用法。",topic:"perf.massweight",st:"ok"},
{e:"🔢",q:"Convert 1 kg to lb, and 1 US gallon to litres.",a:"1 kg = 2.205 lb; 1 US gal = 3.785 L.",zh:"最常用轉換。",topic:"perf.units",st:"ok"},
{e:"🔢",q:"Calculation: 30 US gal of avgas at 0.72 kg/L weighs how much?",a:"30 x 3.785 = 113.6 L; x 0.72 = 81.8 kg.",zh:"先換 L，再乘density。",topic:"perf.units",st:"ok"},
{e:"⛽",q:"What density of avgas is used in CASA exams?",a:"0.72 kg per litre for all loading systems.",zh:"2021 workbook 統一。",topic:"perf.fuelsg",st:"ok"},
{e:"⛽",q:"Why must fuel quantity be converted to weight in W&B?",a:"Mass limits and moments are based on weight, not volume.",zh:"Limit 用weight。",topic:"perf.fuelsg",st:"ok"},
{e:"📉",q:"List five effects of an overweight aircraft.",a:"Higher stall and take-off speed, longer take-off run, reduced climb, lower ceiling, shorter range and longer landing roll.",zh:"全面變差。",topic:"perf.overweight",st:"ok"},
{e:"📉",q:"Why is an overweight aircraft dangerous apart from performance?",a:"It can be overstressed structurally, and flying it is illegal and may void insurance.",zh:"結構同法律。",topic:"perf.overweight",st:"ok"},
{e:"🧱",q:"What are the two reasons for mass limitations?",a:"Structural limitation and performance limitation.",zh:"結構／性能。",topic:"perf.limittypes",st:"ok"},
{e:"🧱",q:"Is MZFM a structural or performance limit?",a:"Structural: it relates to wing root bending moment.",zh:"wing root彎矩。",topic:"perf.limittypes",st:"ok"},
// Mass terms
{e:"📋",q:"What is included in Basic Empty Mass?",a:"Airframe, engine, fixed equipment, unusable fuel and fluids, and full oil.",zh:"唔包 crew、payload。",topic:"perf.bem",st:"ok"},
{e:"📋",q:"Does BEM include usable fuel?",a:"No. Only unusable fuel; usable fuel is added later.",zh:"Usable fuel 另計。",topic:"perf.bem",st:"ok"},
{e:"📋",q:"What is Dry Operating Mass?",a:"Mass of the aircraft ready for a specific operation, excluding usable fuel and traffic load.",zh:"含 crew、catering。",topic:"perf.dom",st:"ok"},
{e:"📋",q:"Define Zero Fuel Mass.",a:"Basic empty mass plus crew, passengers, baggage and cargo, but no usable fuel.",zh:"除油之外全部。",topic:"perf.zfm",st:"ok"},
{e:"📋",q:"Formula: Gross weight?",a:"Gross weight = Zero fuel weight + fuel.",zh:"ZFW + fuel。",topic:"perf.zfm",st:"ok"},
{e:"🏗️",q:"Why can extra mass above MZFM only be fuel?",a:"Fuel in the wings relieves wing root bending moment, while extra payload in the fuselage increases it.",zh:"翼油抵消彎矩。",topic:"perf.mzfm",st:"ok"},
{e:"🏗️",q:"State the DA40 XLT MZFM and MTOW.",a:"MZFM 1150 kg and MTOW 1200 kg (per the W&B sheet in the ENZO material).",zh:"DA40 XLT 數據。",topic:"perf.mzfm",st:"check"},
{e:"🛫",q:"What is ramp mass?",a:"Take-off mass plus start-up and taxi fuel; it may exceed MTOW by that allowance.",zh:"C172S ramp 2558 vs MTOW 2550 lb。",topic:"perf.tom",st:"ok"},
{e:"🛫",q:"Take-off mass = ?",a:"Zero fuel mass + take-off fuel.",zh:"ZFM + TO fuel。",topic:"perf.tom",st:"ok"},
{e:"🛬",q:"Why might MLW be lower than MTOW?",a:"For structural reasons; fuel burn must bring the aircraft below MLW before landing.",zh:"要燒夠油。",topic:"perf.mtowmlw",st:"ok"},
{e:"🛬",q:"State C172S MTOW and maximum landing weight.",a:"Both 2550 lb in the normal category.",zh:"Cessna 172S POH。",topic:"perf.mtowmlw",st:"ok"},
{e:"⛽",q:"What does block fuel include?",a:"Taxi, trip, contingency, alternate and final reserve fuel, plus any additional or extra fuel.",zh:"全部計劃油。",topic:"perf.blockfuel",st:"ok"},
{e:"⛽",q:"Ramp mass = ?",a:"Zero fuel mass + block fuel.",zh:"ZFM + block。",topic:"perf.blockfuel",st:"ok"},
{e:"🪨",q:"What is ballast and why is it used?",a:"Dead weight, such as lead shot or sandbags, used to bring the CG within limits.",zh:"調 CG 用。",topic:"perf.ballast",st:"ok"},
{e:"🪨",q:"AAEP Alpha 5: ferrying an empty aircraft; why might ballast be needed?",a:"A light aircraft with only the pilot can have the CG too far forward, so weight is added in the rear locker (answer: 45 kg rear).",zh:"空機 CG 偏前。",topic:"perf.ballast",st:"ok"},
// Moment & CG
{e:"📍",q:"What is the datum?",a:"A reference line or plane from which all arms are measured.",zh:"C172S：firewall 前面。",topic:"perf.datumarm",st:"ok"},
{e:"📍",q:"What is a moment arm?",a:"The horizontal distance from the datum to the item's CG.",zh:"Aft of datum 為正。",topic:"perf.datumarm",st:"ok"},
{e:"🔁",q:"Define moment.",a:"Moment = force (or weight) x arm; it is a measure of rotational effect.",zh:"旋轉效果。",topic:"perf.moment",st:"ok"},
{e:"🔁",q:"Calculation: 20 kg at 80 cm vs what at 40 cm to balance?",a:"20 x 80 = 1600; 1600 / 40 = 40 kg.",zh:"Moment 相等。",topic:"perf.moment",st:"ok"},
{e:"🎯",q:"How is CG found?",a:"CG = total moment divided by total weight, measured from the datum.",zh:"總 moment / 總重。",topic:"perf.cgcalc",st:"ok"},
{e:"🎯",q:"Calculation: 100 kg at 0, 20 kg at 100 cm, 50 kg at 120 cm. Find CG.",a:"Moments = 0 + 2000 + 6000 = 8000 kg.cm; weight 170 kg; CG = 8000/170 = 47.06 cm.",zh:"MB01 例。",topic:"perf.cgcalc",st:"ok"},
{e:"🎯",q:"Calculation: nosewheel 230 kg at 98 cm, mains 827 kg at 308 cm. Find CG.",a:"22,540 + 254,716 = 277,256; /1057 kg = 262.3 cm aft of datum.",zh:"MB01 例。",topic:"perf.cgcalc",st:"ok"},
{e:"↔️",q:"Why is lateral CG usually ignored?",a:"Loads are distributed along the longitudinal axis, so lateral imbalance is small except in special cases.",zh:"設計限制。",topic:"perf.lateral",st:"ok"},
{e:"🧮",q:"What are index units?",a:"A scaled-down moment (moment divided by a constant) to make numbers smaller.",zh:"例：kg.mm/100。",topic:"perf.index",st:"ok"},
{e:"🧮",q:"Charlie formula for CG in mm?",a:"CG (mm aft of datum) = index units x 100 / weight (kg).",zh:"CASA Charlie。",topic:"perf.index",st:"ok"},
{e:"🧮",q:"Calculation: Charlie ZFW 1014 kg, 30,060.1 IU. CG?",a:"30,060.1 x 100 / 1014 = 2964.5 mm.",zh:"CASA example。",topic:"perf.index",st:"ok"},
{e:"📏",q:"What is MAC?",a:"The chord of an imaginary rectangular wing with the same aerodynamic characteristics; the average chord for a swept, tapered wing.",zh:"Mean Aerodynamic Chord。",topic:"perf.mac",st:"ok"},
{e:"📏",q:"Calculation: CG 857 mm, LEMAC 537 mm, TEMAC 1766 mm. %MAC?",a:"(857-537)/(1766-537) x 100 = 320/1229 = 26%.",zh:"MB01 題。",topic:"perf.mac",st:"ok"},
{e:"📏",q:"What is the usual CG range as %MAC for transport aircraft?",a:"About 10-35% MAC.",zh:"A330 圖示。",topic:"perf.mac",st:"ok"},
{e:"↕️",q:"How do you calculate load to shift for a required CG movement?",a:"Load to shift = GW x change of CG / distance moved.",zh:"GW 不變。",topic:"perf.cgshift",st:"ok"},
{e:"↕️",q:"Calculation: GW 1000 kg, CG must move 10 mm aft; shift distance is 2000 mm. Weight?",a:"1000 x 10 / 2000 = 5 kg moved aft.",zh:"代入公式。",topic:"perf.cgshift",st:"ok"},
{e:"➕",q:"Calculation: 440,000 N, CG 15.6 m; add 10,000 N at 12 m. New CG?",a:"(440000x15.6 + 10000x12)/450000 = 15.52 m (56% MAC for datum 13 m, MAC 4.5 m).",zh:"MB01 題。",topic:"perf.cgaddremove",st:"ok"},
{e:"➕",q:"New CG formula when adding or removing weight?",a:"New CG = (original moments +/- added moments) / (original weight +/- added weight).",zh:"BAK p371。",topic:"perf.cgaddremove",st:"ok"},
{e:"🔥",q:"Why must both ZFW and TOW be plotted?",a:"CG moves as fuel burns, so the aircraft must be within the envelope throughout the flight.",zh:"燒油軌跡。",topic:"perf.fuelburn",st:"ok"},
// Envelope & loading
{e:"📈",q:"What is a CG envelope?",a:"A weight vs CG diagram showing the permitted CG range at each weight.",zh:"出界唔准飛。",topic:"perf.envelope",st:"ok"},
{e:"📈",q:"What does the DA40 forward CG limit look like?",a:"2.40 m aft of datum from 780-980 kg, increasing linearly to 2.46 m at 1150 kg (2.48 m at 1200 kg with modification).",zh:"AFM 2.8。",topic:"perf.envelope",st:"check"},
{e:"✅",q:"Why do exam questions sometimes allow a quick weight check first?",a:"Eliminating answers that exceed weight limits can save time; if several remain, plot ZFW and TOW CG.",zh:"AAEP 提示。",topic:"perf.zfwtow",st:"ok"},
{e:"✅",q:"What if ZFW CG is in envelope but TOW CG is not?",a:"The loading is unacceptable; reorganise the load or reduce fuel.",zh:"兩點都要入。",topic:"perf.zfwtow",st:"ok"},
{e:"📝",q:"State the steps of a loading calculation.",a:"List weights and arms, add oil correction, sum for ZFW and TOW, calculate CG, check limits and envelope.",zh:"標準流程。",topic:"perf.loadsteps",st:"ok"},
{e:"📝",q:"Calculation: Bravo ZFW 1950 lb moment 174.88; fuel 221 lb moment 20.11. TOW CG?",a:"Moment 194.99 / 2171 lb x 1000 = 89.8 in.",zh:"CASA example。",topic:"perf.loadsteps",st:"ok"},
{e:"🧾",q:"Name the three CASA loading systems and their units.",a:"Alpha (graph scales, kg), Bravo (moment/1000, lb and inches), Charlie (index units, kg and mm).",zh:"考試重點。",topic:"perf.loadsys",st:"ok"},
{e:"🧾",q:"What is Bravo's maximum take-off weight (normal category)?",a:"2200 lb (1000 kg).",zh:"CASA workbook。",topic:"perf.loadsys",st:"ok"},
{e:"⛽",q:"Calculation (Alpha 2): MTOW 1633, BEW 998, pilot 55, pax 60+60+70+72+80, bags 80. Max fuel?",a:"1633-998-55-342-80 = 158 kg.",zh:"AAEP key。",topic:"perf.exfuel",st:"ok"},
{e:"⛽",q:"Calculation (Bravo 1): MTOW 2200 lb, EW 1265, oil 15, occupants 610, bag 95. Max fuel?",a:"2200-1265-15-170-180-260-95 = 215 lb.",zh:"AAEP key。",topic:"perf.exfuel",st:"ok"},
{e:"⛽",q:"Calculation (Charlie 3): which fuel quantity keeps CG in envelope, 160 L or 150 L?",a:"150 L (108 kg); 160 L puts TOW CG outside the envelope.",zh:"AAEP key。",topic:"perf.exfuel",st:"ok"},
{e:"⛽",q:"Calculation (Alpha 6): weight allowed for fuel+bags = 1633-900-77x6. How much?",a:"271 kg; only option (d) 300L (216 kg)+45+8 = 269 kg fits.",zh:"AAEP key。",topic:"perf.exfuel",st:"ok"},
{e:"🅿️",q:"What is different in the utility category?",a:"Higher load-factor limit but lower MTOW, forward-shifted aft CG limit, and restrictions on baggage and rear seats.",zh:"C172S 2200 lb。",topic:"perf.utility",st:"ok"},
{e:"🅿️",q:"C172S utility category loading restrictions?",a:"Baggage compartment empty and rear seat not occupied; MTOW 2200 lb.",zh:"POH s2。",topic:"perf.utility",st:"ok"},
{e:"🛩️",q:"C172S baggage limits?",a:"Area 1 120 lb, area 2 50 lb, with a combined maximum of 120 lb.",zh:"POH s2。",topic:"perf.c172wb",st:"ok"},
{e:"🛩️",q:"C172S CG limits (normal category)?",a:"Forward 35.0 in up to 1950 lb, to 41.0 in at 2550 lb; aft 47.3 in at all weights.",zh:"Datum: firewall。",topic:"perf.c172wb",st:"ok"},
{e:"🛩️",q:"DA40 XLT arms for seats and fuel?",a:"Front seats 2.30 m, rear seats 3.25 m, fuel 2.63 m (W&B sheet).",zh:"ENZO sheet。",topic:"perf.da40wb",st:"check"},
{e:"🛩️",q:"DA40 extended baggage limits?",a:"45 kg total (forward part 45 kg, aft part 18 kg).",zh:"W&B sheet。",topic:"perf.da40wb",st:"check"},
{e:"🛢️",q:"Why is an oil correction needed on the DA40?",a:"BEW includes full oil (8 quarts); if less, subtract the missing oil weight (about 1.7 kg per 2 quarts).",zh:"Dipstick 檢查。",topic:"perf.oilcorr",st:"ok"},
// CG effects
{e:"⚖️",q:"Why does the tailplane normally push down?",a:"CG is ahead of the centre of pressure, so a tail downforce balances the nose-down moment.",zh:"縱向平衡。",topic:"perf.tailforce",st:"ok"},
{e:"⚖️",q:"Why must the CG have a permitted range?",a:"Tailplane authority and arm limit how far CG can move while the aircraft remains stable and controllable.",zh:"控制面有限。",topic:"perf.tailforce",st:"ok"},
{e:"⬅️",q:"List effects of a forward CG.",a:"Nose-down tendency, less elevator authority, higher stall speed, more trim drag, lower range and climb.",zh:"穩但笨。",topic:"perf.fwdcg",st:"ok"},
{e:"⬅️",q:"Why is stall speed higher with forward CG?",a:"Tail downforce adds to apparent weight, so the wing must generate more lift.",zh:"Apparent weight。",topic:"perf.fwdcg",st:"ok"},
{e:"➡️",q:"List effects of an aft CG.",a:"Pitch-up tendency, reduced stability, lower stall speed, increased range, light stick forces risk of overstress.",zh:"省油但不穩。",topic:"perf.aftcg",st:"ok"},
{e:"➡️",q:"Why is recovery from a stall or spin harder with aft CG?",a:"Reduced stability and pitch authority make it harder to lower the nose.",zh:"一般 AGK 知識。",topic:"perf.aftcg",st:"check"},
{e:"🛞",q:"What is trim drag?",a:"Extra drag from tailplane/elevator deflection needed to balance the aircraft.",zh:"Fwd CG 更大。",topic:"perf.trimdrag",st:"ok"},
{e:"🛞",q:"Why does forward CG reduce range?",a:"More trim drag means more power and fuel for the same speed.",zh:"耗油。",topic:"perf.trimdrag",st:"ok"},
{e:"🖥️",q:"What is relaxed static stability?",a:"Designing with CG closer to the aft limit for lower tail load and drag, with flight control computers adding artificial stability.",zh:"B777 / MD-11。",topic:"perf.rss",st:"ok"},
{e:"🖥️",q:"Benefit of RSS?",a:"Lower trim drag, better cruise fuel burn, lighter and smaller horizontal stabiliser.",zh:"省油。",topic:"perf.rss",st:"ok"},
{e:"✈️",q:"How does the A350 reduce trim drag?",a:"By minimising stabiliser trim; Differential Flap Setting and Variable Camber also optimise the load and lower drag.",zh:"DFS max 4°。",topic:"perf.a350",st:"ok"},
// Atmosphere
{e:"🌍",q:"State ISA sea level values.",a:"1013.2 hPa, +15°C, lapse rate 2°C per 1000 ft.",zh:"標準大氣。",topic:"perf.isa",st:"ok"},
{e:"🌍",q:"Approximate pressure and temperature rules of thumb?",a:"1 hPa ~ 30 ft; 1°C deviation ~ 120 ft of density altitude.",zh:"BAK p381。",topic:"perf.isa",st:"ok"},
{e:"🧮",q:"Calculation: elevation 1500 ft, QNH 1000. Pressure altitude?",a:"1500 + (1013-1000) x 30 = 1890 ft.",zh:"AAEP 表 1。",topic:"perf.pa",st:"ok"},
{e:"🧮",q:"Calculation: elevation 210 ft, QNH 1030. Pressure altitude?",a:"210 + (1013-1030) x 30 = -300 ft.",zh:"QNH 高 → PA 低。",topic:"perf.pa",st:"ok"},
{e:"🧮",q:"Calculation: elevation 4605 ft, QNH 1025. PA?",a:"4605 + (1013-1025) x 30 = 4245 ft.",zh:"AAEP B5。",topic:"perf.pa",st:"ok"},
{e:"🌡️",q:"Define density altitude.",a:"The altitude in the ISA that corresponds to the actual air density; PA corrected for non-standard temperature.",zh:"DA 高 = 空氣稀。",topic:"perf.da",st:"ok"},
{e:"🌡️",q:"Calculation: PA 147 ft, OAT 20°C. DA?",a:"ENZO simplification: 147 + 120 x (20-15) = 747 ft.",zh:"嚴格 ISA 約 14.7°C。",topic:"perf.da",st:"check"},
{e:"🌡️",q:"Does humidity appear on performance charts?",a:"No, but high humidity further degrades performance, so allow extra margin.",zh:"BAK p385。",topic:"perf.hothigh",st:"ok"},
{e:"🌡️",q:"Name conditions of low air density.",a:"High elevation, high temperature, low QNH and high humidity.",zh:"Hot, high, humid。",topic:"perf.hothigh",st:"ok"},
// T/O & landing
{e:"🛫",q:"Define take-off distance required (TODR).",a:"Distance from brake release to reaching 50 ft at take-off safety speed.",zh:"≤ TODA。",topic:"perf.todr",st:"ok"},
{e:"🛫",q:"What must TODR not exceed?",a:"The take-off distance available on the runway to be used.",zh:"TODR ≤ TODA。",topic:"perf.todr",st:"ok"},
{e:"🚀",q:"What is the take-off safety speed?",a:"The speed to achieve by 50 ft, at least 1.2 times stall speed.",zh:"多發叫 V2。",topic:"perf.toss",st:"ok"},
{e:"🚀",q:"DA40 climb-out speed after take-off at 1200 kg?",a:"67 KIAS (66 KIAS at 1150 kg).",zh:"AFM。",topic:"perf.toss",st:"ok"},
{e:"1️⃣",q:"What is the CASA safety factor on take-off charts?",a:"1.15 for aircraft below 5700 kg MTOW, as stated on each chart.",zh:"+15%。",topic:"perf.tsafety",st:"ok"},
{e:"1️⃣",q:"Calculation: chart ground roll 320 m. With safety factor?",a:"320 x 1.15 = 368 m.",zh:"ENZO scenario。",topic:"perf.tsafety",st:"ok"},
{e:"📦",q:"Why does extra weight lengthen the take-off run?",a:"Slower acceleration, higher stall speed and so higher lift-off and safety speeds.",zh:"三重影響。",topic:"perf.todweight",st:"ok"},
{e:"📦",q:"Rule of thumb for weight increase and take-off distance?",a:"A 10% increase in weight may increase take-off distance by about 25%.",zh:"BAK 圖 11-2。",topic:"perf.todweight",st:"ok"},
{e:"🌬️",q:"How does wind affect take-off distance?",a:"Headwind shortens it; tailwind lengthens it.",zh:"最重要因素。",topic:"perf.todwind",st:"ok"},
{e:"🌬️",q:"How do you treat gusts in performance calculations?",a:"Use the lowest gust speed for headwind and the highest for crosswind.",zh:"BAK p384。",topic:"perf.todwind",st:"ok"},
{e:"⛰️",q:"Effect of 2% upslope on DA40 take-off?",a:"Increases take-off distance by about 10%.",zh:"AFM 5.3.6。",topic:"perf.slope",st:"ok"},
{e:"🌱",q:"DA40 grass runway corrections?",a:"Up to 5 cm: +10% roll; 5-10 cm: +15%; over 10 cm: at least +25%; wet grass a further +10%; over 25 cm do not attempt.",zh:"AFM。",topic:"perf.slope",st:"ok"},
{e:"🔀",q:"When might a downslope take-off be better?",a:"If tailwind is 5 kt or less; compare both directions using the chart.",zh:"AAEP B5。",topic:"perf.slopewind",st:"ok"},
{e:"🔀",q:"Why did AAEP B5 reject runway 13?",a:"The tailwind (and 2% downslope) gave too long a distance versus runway 31 into wind.",zh:"Tailwind 太強。",topic:"perf.slopewind",st:"ok"},
{e:"🔥",q:"Compare C172S take-off at SL vs 8000 ft at 20°C (2550 lb, flaps 10).",a:"Total over 50 ft is about 1690 ft at sea level and 3880 ft at 8000 ft.",zh:"DA 影響大。",topic:"perf.todda",st:"check"},
{e:"🔥",q:"Why do we plan with maximum weight and no wind?",a:"To plan for the worst case.",zh:"ENZO scenario。",topic:"perf.todda",st:"ok"},
{e:"⛔",q:"Climb limit weight: how is the maximum take-off weight chosen?",a:"The lesser of the structural MTOW, the distance-limited weight (A) and climb-limit weight (B).",zh:"CASA chart notes。",topic:"perf.climblimit",st:"ok"},
{e:"⛔",q:"Typical required climb gradient for small aircraft in the text?",a:"Usually 6%.",zh:"BAK；體系視乎",topic:"perf.climblimit",st:"check"},
{e:"🧱",q:"List performance limits on take-off mass.",a:"Short runway, obstacles, wind, slope, high temperature or high DA.",zh:"可能低過 MTOW。",topic:"perf.perflimited",st:"ok"},
{e:"🧱",q:"Why does landing weight also have climb limit?",a:"The aircraft must be able to go around after an occupied runway or a balked landing.",zh:"Landing climb limit。",topic:"perf.perflimited",st:"ok"},
{e:"📊",q:"General order for using a take-off chart?",a:"Find pressure altitude, enter OAT, apply weight/wind/slope/surface, then read TODR or MATOW.",zh:"跟 reference lines。",topic:"perf.chartuse",st:"ok"},
{e:"📊",q:"AAEP B1: PA 5000 ft, 0°C, TODA 1300 m, sealed, 2% up, 12 kt headwind. MATOW?",a:"1090 kg (chart answer key).",zh:"圖表讀數。",topic:"perf.chartuse",st:"ok"},
{e:"📊",q:"AAEP B4: PA 3000 ft, 925 kg, 25°C, long wet grass, 3% down, 5 kt tailwind. TODR?",a:"About 1000 m.",zh:"Answer key。",topic:"perf.chartuse",st:"ok"},
{e:"🛬",q:"What affects landing distance?",a:"Density altitude, wind, slope, surface and approach speed; weight has less effect.",zh:"CASA chart。",topic:"perf.landdist",st:"ok"},
{e:"🛬",q:"AAEP C1: PA 4250 ft, 25°C, 3% up, 3 kt tailwind. LDR / MALW?",a:"575 m and 1080 kg.",zh:"Answer key。",topic:"perf.landdist",st:"ok"},
{e:"🎯",q:"What is Vref and how is it set?",a:"The reference final approach speed, normally 1.3 x Vso.",zh:"ATP。",topic:"perf.vref",st:"ok"},
{e:"↗️",q:"How do you calculate crosswind component?",a:"Crosswind = wind speed x sin(angle between wind and runway).",zh:"headwind 用 cos。",topic:"perf.xwind",st:"ok"},
{e:"↗️",q:"Calculation: wind 270/20, runway 30 (300°). Crosswind?",a:"Angle 30°; 20 x sin 30° = 10 kt crosswind; headwind = 20 x cos 30° = 17 kt.",zh:"用 0.5 口訣。",topic:"perf.xwind",st:"ok"},
{e:"↗️",q:"Demonstrated crosswind limits for C172S and DA40?",a:"C172S 15 kt; DA40 20 kt (demonstrated, not limiting in POH sense).",zh:"CASA chart 15 kt。",topic:"perf.xwind",st:"check"},
{e:"📐",q:"What is the drift angle rule at 120 kt TAS?",a:"Drift angle is about half the crosswind speed.",zh:"1-in-60。",topic:"perf.driftangle",st:"ok"},
{e:"🧗",q:"How is a short-field take-off flown?",a:"Flaps as per POH, hold Vx/safety speed to clear the obstacle, then lower the nose to Vy and retract flap.",zh:"過障礙。",topic:"perf.shortfield",st:"ok"},
// Thrust & Power
{e:"💪",q:"What must thrust required equal in level flight?",a:"Drag.",zh:"Treq = D。",topic:"perf.trequired",st:"ok"},
{e:"💪",q:"What if Treq exceeds Tav?",a:"The aircraft cannot maintain level flight at that speed.",zh:"高過 max speed。",topic:"perf.trequired",st:"ok"},
{e:"💪",q:"Why do we need excess thrust to climb?",a:"With Treq = Tav the aircraft can only fly level; excess is needed to climb.",zh:"剩餘先爬得。",topic:"perf.trequired",st:"ok"},
{e:"🌀",q:"Why does propeller thrust fall with speed?",a:"Blade angle of attack decreases as airspeed increases.",zh:"所以 Tav 線向下。",topic:"perf.propthrust",st:"ok"},
{e:"⚡",q:"What is power required?",a:"Power required = drag x TAS in level flight.",zh:"Force x velocity。",topic:"perf.prequired",st:"ok"},
{e:"⚡",q:"What does power available depend on?",a:"Engine output and propeller efficiency.",zh:"PERF02。",topic:"perf.prequired",st:"ok"},
{e:"➕",q:"Define excess thrust and excess power.",a:"Tav-Treq and Pav-Preq respectively.",zh:"climb來源。",topic:"perf.excess",st:"ok"},
{e:"📉",q:"What makes up the drag curve?",a:"Parasite drag (rises with speed) plus induced drag (falls with speed); minimum total drag is at best L/D.",zh:"Vmd。",topic:"perf.dragcurve",st:"ok"},
{e:"📉",q:"Which speed gives minimum drag?",a:"Vmd, the speed for best lift-to-drag ratio.",zh:"同 best glide 一致。",topic:"perf.dragcurve",st:"ok"},
// Climb
{e:"📈",q:"Name the four types of climb.",a:"Best angle, best rate, cruise climb and zoom climb.",zh:"PERF02。",topic:"perf.climbtypes",st:"ok"},
{e:"📈",q:"Why use a cruise climb?",a:"Better engine cooling and visibility and faster progress along track, at the cost of slower height gain.",zh:"Vy+5 約 80 kt。",topic:"perf.climbtypes",st:"ok"},
{e:"📈",q:"What is Vx and when used?",a:"Best angle of climb speed; greatest height for horizontal distance, used to clear obstacles and in short-field takeoffs.",zh:"最大 excess thrust。",topic:"perf.vx",st:"ok"},
{e:"📈",q:"Where is Vx relative to Vmd?",a:"Vx is below Vmd (per Airspace PERF02).",zh:"Vx < Vmd < Vy。",topic:"perf.vx",st:"ok"},
{e:"📈",q:"What is Vy and when used?",a:"Best rate of climb speed; greatest height in least time, used in normal climbs.",zh:"最大 excess power。",topic:"perf.vy",st:"ok"},
{e:"📈",q:"What is the relationship between Vx, Vmd and Vy?",a:"Vx < Vmd < Vy.",zh:"Airspace 教材。",topic:"perf.vy",st:"check"},
{e:"📈",q:"C172S Vx and Vy at sea level?",a:"Vx 62 KIAS and Vy 74 KIAS (flaps up, 2550 lb).",zh:"POH。",topic:"perf.vy",st:"ok"},
{e:"📈",q:"Which factors give the climb gradient and the climb rate?",a:"Gradient: sin γ = (T-D)/W. Rate: excess power / W.",zh:"PERF02。",topic:"perf.climbformula",st:"ok"},
{e:"🧮",q:"If excess power is 20 kW and weight is 10,000 N, find rate of climb.",a:"RoC = 20,000 W / 10,000 N = 2 m/s (about 394 fpm).",zh:"P/W。",topic:"perf.climbformula",st:"ok"},
{e:"⬇️",q:"How do altitude, weight, temperature and flap affect climb?",a:"They all reduce angle and rate of climb by reducing excess power or thrust.",zh:"PERF3 summary。",topic:"perf.climbfactors",st:"ok"},
{e:"⬇️",q:"Why does weight reduce climb performance?",a:"A higher AoA is needed so induced drag and Preq rise, reducing excess power.",zh:"PERF02。",topic:"perf.climbfactors",st:"ok"},
{e:"🌬️",q:"How does wind affect angle and rate of climb?",a:"Rate unchanged; headwind increases ground angle, tailwind reduces it.",zh:"時間唔變。",topic:"perf.windclimb",st:"ok"},
{e:"⛰️",q:"Define service ceiling and absolute ceiling.",a:"Absolute: RoC = 0. Service: RoC of 100 fpm for propeller aircraft (500 for jets).",zh:"PERF02。",topic:"perf.ceiling",st:"ok"},
{e:"⛰️",q:"What happens to Vx and Vy as altitude increases?",a:"They move closer together (C172S Vx 62→67 and Vy 74→72 KIAS from SL to 10,000 ft), meeting at the ceiling.",zh:"POH 趨勢。",topic:"perf.ceiling",st:"ok"},
{e:"🔢",q:"DA40 climb speeds from ENZO briefing?",a:"Vx 67 KIAS, Vy 76 KIAS, cruise climb Vy+5 = 80 KIAS.",zh:"標明 DA40。",topic:"perf.climbvalues",st:"check"},
// Glide
{e:"🪂",q:"What is best glide speed and why?",a:"Speed at best L/D (about 4° AoA), giving the greatest distance for altitude lost.",zh:"BAK。",topic:"perf.bestglide",st:"ok"},
{e:"🪂",q:"C172S best glide speed?",a:"68 KIAS, flaps up, propeller windmilling (POH Fig 3-1).",zh:"ENZO 簡報。",topic:"perf.bestglide",st:"ok"},
{e:"📐",q:"DA40 glide ratio?",a:"8.8:1, or 1.45 NM per 1000 ft with a windmilling propeller.",zh:"AFM 3.4。",topic:"perf.glideratio",st:"ok"},
{e:"📐",q:"Calculation: DA40 engine failure at 4000 ft AGL, no wind. Glide distance?",a:"4 x 1.45 = 5.8 NM (about 5.8 NM).",zh:"Flaps up。",topic:"perf.glideratio",st:"ok"},
{e:"⚖️",q:"How does weight affect glide angle and speed?",a:"Angle unchanged, but a heavier aircraft needs a higher speed for best glide.",zh:"DA40 76 → 60 kt。",topic:"perf.glideweight",st:"ok"},
{e:"🛬",q:"Why delay lowering flap in a glide?",a:"Flap reduces L/D and steepens the descent; lower only when the field is assured.",zh:"BAK。",topic:"perf.glideflap",st:"ok"},
{e:"🌬️",q:"How does a headwind change glide?",a:"The angle over the ground is steeper and the range shorter.",zh:"Tailwind 相反。",topic:"perf.glidewind",st:"ok"},
{e:"🚫",q:"What happens if you raise the nose to stretch the glide?",a:"Speed falls, drag rises and the descent steepens; distance is worse.",zh:"唔好拉。",topic:"perf.glidestretch",st:"ok"},
{e:"🔥",q:"Why clear the engine during a long glide?",a:"The engine cools and plugs may foul; add climb power briefly every 1000 ft.",zh:"BAK。",topic:"perf.glidestretch",st:"ok"},
{e:"📋",q:"Effect of flap down on angle/rate/range in a descent?",a:"Angle increases, rate increases, range decreases.",zh:"ENZO table。",topic:"perf.descentfactors",st:"ok"},
{e:"📋",q:"Effect of more power on a descent (constant speed)?",a:"Rate decreases and range increases.",zh:"Shallower descent。",topic:"perf.descentfactors",st:"ok"},
// Range & endurance
{e:"🏁",q:"At what speed is propeller range maximum?",a:"At L/Dmax (best glide speed).",zh:"ATP ch4。",topic:"perf.rangeprop",st:"ok"},
{e:"🏁",q:"Jet vs prop max range speed?",a:"A jet's best range speed is higher than L/Dmax; a propeller aircraft uses L/Dmax.",zh:"ATP。",topic:"perf.rangeprop",st:"ok"},
{e:"⏱️",q:"At what speed is propeller endurance maximum?",a:"At the minimum power required speed, which is lower than the maximum range speed.",zh:"最低 fuel flow。",topic:"perf.endurance",st:"check"},
{e:"📏",q:"How does CG position affect range?",a:"Forward CG increases trim drag and reduces range; aft CG increases range.",zh:"MB01。",topic:"perf.range",st:"ok"},
{e:"💨",q:"Should you speed up or slow down in a headwind for best range?",a:"Speed up; in a tailwind slow down.",zh:"ATP。",topic:"perf.windcruise",st:"ok"},
{e:"⛽",q:"As fuel burns, what happens to the optimum cruise speed or altitude?",a:"Optimum speed decreases, or optimum altitude increases; optimum AoA is unchanged.",zh:"ATP Q8381。",topic:"perf.weightcruise",st:"ok"},
{e:"🛩️",q:"Max range procedure for a turbojet as weight falls?",a:"Increase altitude or decrease speed.",zh:"ATP Q9077。",topic:"perf.jetrange",st:"ok"},
{e:"🔧",q:"How does density altitude affect engine power?",a:"Higher density altitude means less oxygen so less power; normally aspirated MAP falls with altitude.",zh:"ATP。",topic:"perf.engdensity",st:"ok"},
{e:"🔧",q:"DA40 power correction for non-standard temperature?",a:"At ISA+15°C power falls by about 3%; at ISA-15°C it rises by about 3%.",zh:"AFM 5.2。",topic:"perf.engdensity",st:"ok"},
{e:"🔧",q:"What is critical altitude?",a:"The highest altitude at which a turbocharged engine can maintain the desired manifold pressure.",zh:"ATP。",topic:"perf.engdensity",st:"ok"},
{e:"🅰️",q:"Define Va.",a:"Manoeuvring speed: highest speed at which full control deflection will not overstress the aircraft; the aircraft stalls first.",zh:"BAK。",topic:"perf.vspeeds",st:"ok"},
{e:"🅰️",q:"Difference between Vno and Vne?",a:"Vno is the top of the green arc, only exceeded in smooth air; Vne must never be exceeded.",zh:"ASI arcs。",topic:"perf.vspeeds",st:"ok"},
{e:"🅰️",q:"What is Vfe?",a:"Maximum speed with flaps extended; top of white arc.",zh:"BAK。",topic:"perf.vspeeds",st:"ok"}
],
anims:[
{title:"CG & Moment Calculator (DA40 XLT sample)",hint:"拉weight／油量滑桿，睇 ZFW 同 TOW 點喺唔喺 envelope",build(box,H){
 const svg=H.svg(box,700,340),say=H.note(box);
 const BEW=843.7,BM=2095.75,LIM=1200,MZ=1150;
 const x0=60,cw=360,y0=300,ch=280;
 const xs=c=>x0+(c-2.30)/0.40*cw, ys=w=>y0-(w-760)/490*ch;
 H.el("rect",{x:x0,y:y0-ch,width:cw,height:ch,fill:"#0f172a",stroke:"#475569"},svg);
 H.el("polygon",{points:[[2.40,780],[2.40,980],[2.48,1200],[2.59,1200],[2.59,780]].map(p=>xs(p[0])+","+ys(p[1])).join(" "),fill:"#14532d",stroke:"#4ade80","stroke-width":2,opacity:.85},svg);
 H.el("line",{x1:x0,x2:x0+cw,y1:ys(MZ),y2:ys(MZ),stroke:"#fbbf24","stroke-dasharray":"5 4"},svg);
 tx(H,svg,x0+cw-2,ys(MZ)-3,10,"MZFM 1150","#fbbf24","end");
 tx(H,svg,x0+cw-2,ys(LIM)-3,10,"MTOW 1200","#4ade80","end");
 [2.3,2.4,2.5,2.6,2.7].forEach(c=>{tx(H,svg,xs(c),y0+14,10,c.toFixed(1),"#94a3b8","middle")});
 [800,900,1000,1100,1200].forEach(w=>{tx(H,svg,x0-6,ys(w)+3,10,w,"#94a3b8","end")});
 tx(H,svg,x0+cw/2,y0+30,11,"CG (m aft of datum)","#cbd5e1","middle");
 tx(H,svg,14,y0-ch/2,11,"kg","#cbd5e1","middle");
 const track=H.el("line",{stroke:"#94a3b8","stroke-width":2},svg);
 const dz=H.el("circle",{r:7,fill:"#38bdf8",stroke:"#fff"},svg),dt=H.el("circle",{r:7,fill:"#fb923c",stroke:"#fff"},svg);
 const info=[0,1,2,3,4,5].map(i=>tx(H,svg,450,50+i*24,12,"","#e2e8f0"));
 let f=150,r=0,b=20,fu=80;
 const inEnv=(c,w)=>{if(w>LIM||w<780)return false;const fw=w<=980?2.40:2.40+(w-980)/220*0.08;return c>=fw&&c<=2.59};
 function upd(){const fk=fu*0.72,zw=BEW+f+r+b,zm=BM+f*2.30+r*3.25+b*3.89,tw=zw+fk,tm=zm+fk*2.63,zc=zm/zw,tc=tm/tw;
  dz.setAttribute("cx",xs(zc));dz.setAttribute("cy",ys(zw));dt.setAttribute("cx",xs(tc));dt.setAttribute("cy",ys(tw));
  track.setAttribute("x1",xs(zc));track.setAttribute("y1",ys(zw));track.setAttribute("x2",xs(tc));track.setAttribute("y2",ys(tw));
  const zok=inEnv(zc,zw)&&zw<=MZ,tok=inEnv(tc,tw);
  info[0].textContent="BEW "+BEW+" kg @ "+(BM/BEW).toFixed(3)+" m";
  info[1].textContent="ZFW "+zw.toFixed(0)+" kg, CG "+zc.toFixed(3)+" m "+(zok?"OK":"OUT");
  info[2].textContent="Fuel "+fk.toFixed(0)+" kg ("+fu+" L x 0.72)";
  info[3].textContent="TOW "+tw.toFixed(0)+" kg, CG "+tc.toFixed(3)+" m "+(tok?"OK":"OUT");
  info[4].textContent="藍點=ZFW  橙點=TOW";
  info[5].textContent=(zok&&tok)?"結果：兩點都入 envelope":"結果：唔合格 → 重新分配";
  info[1].setAttribute("fill",zok?"#4ade80":"#f87171");info[3].setAttribute("fill",tok?"#4ade80":"#f87171");
  say("CG = total moment / total weight。燒油時 TOW 點沿線移向 ZFW 點。數據: DA40 XLT W&B sheet；fuel 範圍為示意")}
 H.slider(box,"Front seats kg",70,200,150,v=>{f=v;upd()},5);
 H.slider(box,"Rear seats kg",0,160,0,v=>{r=v;upd()},5);
 H.slider(box,"Fwd ext. bag kg",0,45,20,v=>{b=v;upd()},1);
 H.slider(box,"Fuel L",0,150,80,v=>{fu=v;upd()},5);
}},
{title:"Forward vs Aft CG: Tail Force",hint:"拉 CG 位置，睇 tail downforce 同影響",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const cp=330,tail=600;
 const ac=H.el("g",{},svg);
 H.el("path",{d:"M90,150 L560,140 L600,125 L600,155 L560,160 Z",fill:"#64748b"},ac);
 H.el("rect",{x:290,y:150,width:90,height:8,fill:"#cbd5e1"},ac);
 H.el("polygon",{points:"585,125 605,125 600,95 585,95",fill:"#94a3b8"},ac);
 const cgm=H.el("circle",{cy:150,r:8,fill:"#f59e0b",stroke:"#fff"},ac);
 H.el("circle",{cx:cp,cy:150,r:6,fill:"#38bdf8"},ac);
 tx(H,ac,cp,176,11,"CP (lift)","#38bdf8","middle");
 const cgl=tx(H,ac,0,176,11,"CG (weight)","#f59e0b","middle");
 const wA=H.el("line",{y1:150,y2:215,stroke:"#f59e0b","stroke-width":4},ac);
 const lA=H.el("line",{x1:cp,x2:cp,y1:150,y2:80,stroke:"#38bdf8","stroke-width":4},ac);
 const tA=H.el("line",{x1:592,x2:592,y1:140,y2:190,stroke:"#f87171","stroke-width":4},ac);
 const bars=["Stability","Tail downforce / trim drag","Stall speed","Range"].map((n,i)=>{tx(H,svg,30,238+i*16,11,n,"#cbd5e1");return H.el("rect",{x:230,y:229+i*16,height:10,width:10,fill:["#4ade80","#f87171","#fbbf24","#38bdf8"][i]},svg)});
 let s=50,t0=0;
 function upd(){const cgx=235+s*0.9;cgm.setAttribute("cx",cgx);cgl.setAttribute("x",cgx);wA.setAttribute("x1",cgx);wA.setAttribute("x2",cgx);
  const arm=cp-cgx;const Ft=arm/(tail-cp)*100;
  const tl=Math.max(2,Ft*1.15);tA.setAttribute("y2",140+tl);
  const stab=arm/95, vs=Math.sqrt(1+Ft*0.012)/1.18, rng=1-Ft*0.004;
  const v=[stab,Ft/42,vs,rng];
  bars.forEach((b,i)=>b.setAttribute("width",Math.max(4,Math.min(1,v[i])*300)));
  say(s<30?"Forward CG: 穩但 nose-heavy，tail 壓大、Vs 高、range 減":s>70?"Aft CG: stability低、stick 輕，Vs 低、range 增，易 pitch-up":"CG 喺中間範圍")}
 H.slider(box,"CG 位置 (0=前 100=後)",0,100,50,v=>{s=v;upd()},1);
 H.loop(()=>{t0+=0.05;const a=Math.sin(t0)*(0.6+s/25)*(s>60?1:0.4);ac.setAttribute("transform","rotate("+a+" 330 150)")});
}},
{title:"Thrust & Power Curves: Vx and Vy",hint:"拉speed／altitude／weight，睇 excess thrust 同 power",build(box,H){
 const svg=H.svg(box,700,360),say=H.note(box);
 const W0=9.81;let spd=70,alt=0,mass=1000;
 const L={x:45,w:270,y:30,h:200,tmax:3200,x2:385,pmax:110000};
 const xk=(k,x)=>x+(k-40)/100*L.w;
 [[L.x,"Thrust (N)"],[L.x2,"Power (kW)"]].forEach(a=>{H.el("rect",{x:a[0],y:L.y,width:L.w,height:L.h,fill:"#0f172a",stroke:"#475569"},svg);tx(H,svg,a[0]+L.w/2,L.y-8,12,a[1],"#cbd5e1","middle");
  [40,70,100,130].forEach(k=>tx(H,svg,xk(k,a[0]),L.y+L.h+14,10,k,"#94a3b8","middle"));tx(H,svg,a[0]+L.w/2,L.y+L.h+28,10,"KIAS~TAS (kt)","#94a3b8","middle")});
 const p1=H.el("path",{fill:"none",stroke:"#f87171","stroke-width":2.5},svg),p2=H.el("path",{fill:"none",stroke:"#4ade80","stroke-width":2.5},svg);
 const p3=H.el("path",{fill:"none",stroke:"#f87171","stroke-width":2.5},svg),p4=H.el("path",{fill:"none",stroke:"#4ade80","stroke-width":2.5},svg);
 tx(H,svg,L.x+6,L.y+14,10,"Treq (drag)","#f87171");tx(H,svg,L.x+6,L.y+27,10,"Tav","#4ade80");
 tx(H,svg,L.x2+6,L.y+14,10,"Preq","#f87171");tx(H,svg,L.x2+6,L.y+27,10,"Pav","#4ade80");
 const cur1=H.el("line",{stroke:"#fbbf24","stroke-dasharray":"4 3"},svg),cur2=H.el("line",{stroke:"#fbbf24","stroke-dasharray":"4 3"},svg);
 const mk=[["Vx","#38bdf8"],["Vmd","#e2e8f0"],["Vy","#f59e0b"]].map(a=>[H.el("line",{stroke:a[1],"stroke-width":2},svg),tx(H,svg,0,0,10,a[0],a[1],"middle")]);
 const out=[0,1,2,3].map(i=>tx(H,svg,45+i*165,290+(i>1?0:0),12,"","#e2e8f0"));
 const ex=H.el("rect",{fill:"#fbbf24",opacity:.5},svg);
 function model(){const sg=Math.pow(Math.max(0.05,1-6.8756e-6*alt),4.2561),rho=1.225*sg,W=mass*W0;
  const D=V=>0.5*rho*V*V*16.2*0.034+2*0.06*W*W/(rho*16.2*V*V);
  const Pav=V=>0.8*(1-Math.exp(-V/35))*130000*sg;return {rho,W,sg,D,Pav,Tav:V=>Pav(V)/V}}
 function upd(){const m=model(),K=0.5144;let bx=-1e9,vx=0,by=-1e9,vy=0;
  for(let k=42;k<=140;k+=0.5){const V=k*K,et=m.Tav(V)-m.D(V),ep=m.Pav(V)-m.D(V)*V;if(et>bx){bx=et;vx=k}if(ep>by){by=ep;vy=k}}
  const vmd=Math.pow(4*0.06*m.W*m.W/(m.rho*m.rho*16.2*16.2*0.034),0.25)/K;
  let d1="",d2="",d3="",d4="";
  for(let k=40;k<=140;k+=2){const V=k*K,c=k===40?"M":"L";const y=t=>L.y+L.h-Math.max(-5,Math.min(L.tmax,t))/L.tmax*L.h,yp=p=>L.y+L.h-Math.max(0,Math.min(L.pmax,p))/L.pmax*L.h;
   d1+=c+xk(k,L.x)+","+y(m.D(V));d2+=c+xk(k,L.x)+","+y(m.Tav(V));d3+=c+xk(k,L.x2)+","+yp(m.D(V)*V);d4+=c+xk(k,L.x2)+","+yp(m.Pav(V))}
  p1.setAttribute("d",d1);p2.setAttribute("d",d2);p3.setAttribute("d",d3);p4.setAttribute("d",d4);
  cur1.setAttribute("x1",xk(spd,L.x));cur1.setAttribute("x2",xk(spd,L.x));cur1.setAttribute("y1",L.y);cur1.setAttribute("y2",L.y+L.h);
  cur2.setAttribute("x1",xk(spd,L.x2));cur2.setAttribute("x2",xk(spd,L.x2));cur2.setAttribute("y1",L.y);cur2.setAttribute("y2",L.y+L.h);
  [[vx,0],[vmd,1],[vy,2]].forEach(a=>{const x=xk(Math.max(40,Math.min(140,a[0])),L.x2);mk[a[1]][0].setAttribute("x1",x);mk[a[1]][0].setAttribute("x2",x);mk[a[1]][0].setAttribute("y1",L.y+L.h);mk[a[1]][0].setAttribute("y2",L.y+L.h-14);mk[a[1]][1].setAttribute("x",x);mk[a[1]][1].setAttribute("y",L.y+L.h-18)});
  const V=spd*K,et=m.Tav(V)-m.D(V),ep=m.Pav(V)-m.D(V)*V;
  const ang=Math.asin(Math.max(-1,Math.min(1,et/m.W)))*57.3,roc=ep/m.W*196.85;
  out[0].textContent="Excess thrust "+et.toFixed(0)+" N";out[1].textContent="Climb angle "+ang.toFixed(1)+"°";
  out[2].textContent="Excess power "+(ep/1000).toFixed(1)+" kW";out[3].textContent="RoC "+roc.toFixed(0)+" fpm";
  out[0].setAttribute("fill",et>0?"#4ade80":"#f87171");out[2].setAttribute("fill",ep>0?"#4ade80":"#f87171");
  const hh=Math.max(0,Math.min(120,et/L.tmax*L.h));ex.setAttribute("x",xk(spd,L.x)-3);ex.setAttribute("width",6);ex.setAttribute("y",L.y+L.h-hh);ex.setAttribute("height",hh);
  say("Vx="+vx.toFixed(0)+" kt (max excess thrust) < Vmd="+vmd.toFixed(0)+" < Vy="+vy.toFixed(0)+" kt (max excess power)。教材:Vx<Vmd<Vy；本模型 Vy 只係接近 Vmd (prop 效率簡化)，非任何機型數據。"+(by<=0?" 已到 ceiling：RoC=0":""))}
 H.slider(box,"Speed kt",40,140,70,v=>{spd=v;upd()},1);
 H.slider(box,"Altitude ft",0,15000,0,v=>{alt=v;upd()},500);
 H.slider(box,"Mass kg",800,1100,1000,v=>{mass=v;upd()},25);
}},
{title:"Glide Range: Speed, Wind, Flap, Weight",hint:"改speed／風／flap，睇滑翔距離",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const gy=260,x0=50,pxNM=32,pxFT=0.028;
 H.el("rect",{x:0,y:gy,width:700,height:40,fill:"#3f6212"},svg);
 const refP=H.el("line",{stroke:"#64748b","stroke-dasharray":"5 4","stroke-width":2},svg);
 const path=H.el("line",{stroke:"#38bdf8","stroke-width":3},svg);
 const ac=H.el("circle",{r:7,fill:"#fbbf24",stroke:"#fff"},svg);
 const out=[0,1,2,3].map(i=>tx(H,svg,380,28+i*20,12,"","#e2e8f0"));
 const flapN=["Flap UP","T/O flap","LDG flap"],flapF=[1,0.85,0.7];
 let alt=4000,wind=0,spd=73,wt=1150,fl=0,t=0,range=0;
 const vbg=w=>{const T=[[850,60],[1000,68],[1150,73],[1200,76]];if(w<=850)return 60;for(let i=1;i<4;i++)if(w<=T[i][0])return T[i-1][1]+(w-T[i-1][0])/(T[i][0]-T[i-1][0])*(T[i][1]-T[i-1][1]);return 76};
 function calc(){const vb=vbg(wt),x=spd/vb,ld=8.8*flapF[fl]/(0.5*(x*x+1/(x*x))),gs=Math.max(1,spd+wind);return {vb,ld,gs,rng:alt/6076*ld*gs/spd,rod:spd*101.3/ld}}
 function upd(){const c=calc();range=c.rng;path.setAttribute("x1",x0);path.setAttribute("y1",gy-alt*pxFT);path.setAttribute("x2",x0+c.rng*pxNM);path.setAttribute("y2",gy);
  const r0=alt/6076*8.8;refP.setAttribute("x1",x0);refP.setAttribute("y1",gy-alt*pxFT);refP.setAttribute("x2",x0+r0*pxNM);refP.setAttribute("y2",gy);
  out[0].textContent="Best glide IAS (this mass): "+c.vb.toFixed(0)+" kt";out[1].textContent="Glide ratio in air: "+c.ld.toFixed(1)+":1";
  out[2].textContent="Range over ground: "+c.rng.toFixed(1)+" NM";out[3].textContent="Rate of descent: ~"+c.rod.toFixed(0)+" fpm";
  say("虛線=無風 best glide。偏離 best speed、放 flap、頂風都縮短距離；weight只改最佳speed。DA40 L/D 8.8 (AFM)，flap 係數為示意。 "+flapN[fl])}
 H.slider(box,"Altitude AGL ft",1000,8000,4000,v=>{alt=v;upd()},500);
 H.slider(box,"IAS kt",50,110,73,v=>{spd=v;upd()},1);
 H.slider(box,"Wind (+tail / -head) kt",-30,30,0,v=>{wind=v;upd()},1);
 H.slider(box,"Mass kg",850,1200,1150,v=>{wt=v;upd()},10);
 H.button(box,"Cycle flap",()=>{fl=(fl+1)%3;upd()});
 H.loop(()=>{t=(t+0.004)%1;const e=range*pxNM*t;ac.setAttribute("cx",x0+e);ac.setAttribute("cy",gy-alt*pxFT*(1-t))});
}},
{title:"Range & Endurance vs Speed (propeller)",hint:"拉speed同風，睇 range／endurance 指數",build(box,H){
 const svg=H.svg(box,700,330),say=H.note(box);
 const L={x:50,y:30,w:380,h:230,xmin:40,xmax:120,pmax:100};
 const xk=k=>L.x+(k-L.xmin)/(L.xmax-L.xmin)*L.w,yk=p=>L.y+L.h-p/L.pmax*L.h;
 H.el("rect",{x:L.x,y:L.y,width:L.w,height:L.h,fill:"#0f172a",stroke:"#475569"},svg);
 [40,60,80,100,120].forEach(k=>tx(H,svg,xk(k),L.y+L.h+14,10,k,"#94a3b8","middle"));
 tx(H,svg,L.x+L.w/2,L.y+L.h+28,10,"TAS kt","#94a3b8","middle");tx(H,svg,L.x+6,L.y+14,11,"Power required (kW)","#f87171");
 const curve=H.el("path",{fill:"none",stroke:"#f87171","stroke-width":2.5},svg);
 const ray=H.el("line",{stroke:"#38bdf8","stroke-width":1.5,"stroke-dasharray":"5 3"},svg);
 const bR=H.el("circle",{r:6,fill:"#38bdf8"},svg),bE=H.el("circle",{r:6,fill:"#4ade80"},svg),cu=H.el("circle",{r:7,fill:"none",stroke:"#fbbf24","stroke-width":3},svg);
 tx(H,svg,0,0,1,"");
 const lab=[tx(H,svg,0,0,10,"max range","#38bdf8","middle"),tx(H,svg,0,0,10,"max endurance","#4ade80","middle")];
 const out=[0,1,2,3].map(i=>tx(H,svg,450,50+i*24,12,"","#e2e8f0"));
 let spd=80,wind=0,mass=1000;const K=0.5144;
 const P=(k,W)=>{const V=k*K,rho=1.225;return (0.5*rho*V*V*16.2*0.034+2*0.06*W*W/(rho*16.2*V*V))*V/1000};
 function upd(){const W=mass*9.81;let d="";let bestR=0,vR=0,bestE=1e9,vE=0;
  for(let k=40;k<=120;k+=1){const p=P(k,W);d+=(k===40?"M":"L")+xk(k)+","+yk(Math.min(p,100));const r=(k+wind)/p;if(r>bestR){bestR=r;vR=k}if(p<bestE){bestE=p;vE=k}}
  curve.setAttribute("d",d);const pR=P(vR,W),pE=P(vE,W);
  bR.setAttribute("cx",xk(vR));bR.setAttribute("cy",yk(pR));bE.setAttribute("cx",xk(vE));bE.setAttribute("cy",yk(pE));
  lab[0].setAttribute("x",xk(vR));lab[0].setAttribute("y",yk(pR)-12);lab[1].setAttribute("x",xk(vE));lab[1].setAttribute("y",yk(pE)+22);
  const ys=pR*(40+wind)/(vR+wind);ray.setAttribute("x1",xk(-wind<40?40:-wind));ray.setAttribute("y1",yk(-wind<40?ys:0));ray.setAttribute("x2",xk(vR));ray.setAttribute("y2",yk(pR));
  const p=P(spd,W);cu.setAttribute("cx",xk(spd));cu.setAttribute("cy",yk(p));
  const ri=(spd+wind)/p/bestR*100,ei=bestE/p*100;
  out[0].textContent="Max-range speed "+vR+" kt";out[1].textContent="Max-endurance speed "+vE+" kt";
  out[2].textContent="你的 range index "+ri.toFixed(0)+"%";out[3].textContent="你的 endurance index "+ei.toFixed(0)+"%";
  say("Range = groundspeed/耗油；max endurance 係最低 power 點(較慢)，max range 係由風原點引切線。headwind加速、機輕(燒咗油)最佳speed降。power 用簡化模型，指數為相對值。")}
 H.slider(box,"Speed kt",40,120,80,v=>{spd=v;upd()},1);
 H.slider(box,"Wind (+tail / -head) kt",-30,30,0,v=>{wind=v;upd()},1);
 H.slider(box,"Mass kg (fuel burns →)",700,1000,1000,v=>{mass=v;upd()},25);
}},
{title:"Density Altitude & Take-off Distance",hint:"改 QNH／temperature／weight，睇 PA、DA 同 TODR",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const out=[0,1,2,3,4].map(i=>tx(H,svg,30,30+i*24,13,"","#e2e8f0"));
 const bx=30,bw=620;
 H.el("rect",{x:bx,y:190,width:bw,height:26,fill:"#334155"},svg);
 const rwy=H.el("rect",{x:bx,y:190,width:bw,height:26,fill:"#475569",stroke:"#e2e8f0"},svg);
 const gr=H.el("rect",{x:bx,y:192,height:22,fill:"#38bdf8"},svg),ov=H.el("rect",{x:bx,y:222,height:16,fill:"#fb923c"},svg);
 const lab=[tx(H,svg,bx,184,11,"Ground roll","#38bdf8"),tx(H,svg,bx,252,11,"Over 50 ft","#fb923c"),tx(H,svg,bx+bw,184,11,"","#e2e8f0","end")];
 let el=0,qnh=1013,oat=15,wt=2550,sf=1,tora=1200;
 function upd(){const pa=el+(1013-qnh)*30,isa=15-2*pa/1000,da=pa+120*(oat-isa);
  const pc=Math.max(0,Math.min(8000,pa))/8000,tf=Math.max(0,Math.min(40,oat)),k=tf/40;
  const sl=1465+(1945-1465)*k,hi=3265+(4615-3265)*k,tot0=sl*Math.pow(hi/sl,pc);
  const tot=tot0*Math.pow(wt/2550,2.4)*(sf?1.15:1),gnd=tot*0.57;
  const totM=tot*0.3048,gM=gnd*0.3048,sc=bw/ Math.max(1400,totM*1.05);
  gr.setAttribute("width",gM*sc);ov.setAttribute("width",totM*sc);
  const rl=tora*sc;rwy.setAttribute("width",Math.min(bw,rl));lab[2].textContent="Runway "+tora+" m";
  out[0].textContent="Pressure altitude = elev + (1013-QNH)x30 = "+pa.toFixed(0)+" ft";
  out[1].textContent="ISA temp "+isa.toFixed(1)+"°C → DA = PA + 120x(OAT-ISA) = "+da.toFixed(0)+" ft";
  out[2].textContent="Ground roll ~ "+gM.toFixed(0)+" m";
  out[3].textContent="Over 50 ft ~ "+totM.toFixed(0)+" m"+(sf?" (incl. x1.15)":"");
  out[4].textContent=totM<=tora?"GO：TODR ≤ TODA":"NO GO：TODR > TODA";out[4].setAttribute("fill",totM<=tora?"#4ade80":"#f87171");
  say("近似：C172S short-field 圖 (2550 lb, flap 10, 零風) SL 同 8000 ft 兩行以指數內插；weight 用 BAK 口訣 (+10%→+25%)。只供概念，唔好代替真 chart。")}
 H.slider(box,"Elevation ft",0,8000,0,v=>{el=v;upd()},100);
 H.slider(box,"QNH hPa",980,1040,1013,v=>{qnh=v;upd()},1);
 H.slider(box,"OAT °C",-10,45,15,v=>{oat=v;upd()},1);
 H.slider(box,"Weight lb",2000,2550,2550,v=>{wt=v;upd()},50);
 H.slider(box,"Runway m",400,1500,1200,v=>{tora=v;upd()},50);
 H.button(box,"Toggle x1.15 factor",()=>{sf=sf?0:1;upd()});
}},
{title:"Crosswind Component",hint:"改wind directionwind speed，睇 crosswind／headwind",build(box,H){
 const svg=H.svg(box,700,320),say=H.note(box);
 const cx=180,cy=160;
 H.el("rect",{x:cx-14,y:20,width:28,height:280,fill:"#475569"},svg);
 H.el("line",{x1:cx,y1:30,x2:cx,y2:290,stroke:"#e2e8f0","stroke-dasharray":"12 10"},svg);
 H.marker(svg,"ar1","#38bdf8");H.marker(svg,"ar2","#f87171");H.marker(svg,"ar3","#fbbf24");
 const wind=H.el("line",{stroke:"#38bdf8","stroke-width":4,"marker-end":"url(#ar1)"},svg);
 const cr=H.el("line",{stroke:"#f87171","stroke-width":3,"marker-end":"url(#ar2)"},svg),hd=H.el("line",{stroke:"#fbbf24","stroke-width":3,"marker-end":"url(#ar3)"},svg);
 H.el("polygon",{points:(cx)+","+(cy-14)+" "+(cx-9)+","+(cy+10)+" "+(cx+9)+","+(cy+10),fill:"#f59e0b"},svg);
 const out=[0,1,2,3].map(i=>tx(H,svg,400,60+i*26,13,"","#e2e8f0"));
 let rw=13,wd=150,ws=15,lim=15;
 function upd(){const rel=((wd-rw*10)%360)*Math.PI/180,R=130;
  const sx=cx+R*Math.sin(rel),sy=cy-R*Math.cos(rel);wind.setAttribute("x1",sx);wind.setAttribute("y1",sy);wind.setAttribute("x2",cx);wind.setAttribute("y2",cy);
  const xw=ws*Math.sin(rel),hw=ws*Math.cos(rel);
  cr.setAttribute("x1",cx+Math.sign(xw)*60);cr.setAttribute("y1",cy+110);cr.setAttribute("x2",cx);cr.setAttribute("y2",cy+110);
  hd.setAttribute("x1",cx+70);hd.setAttribute("y1",cy-Math.sign(hw)*50);hd.setAttribute("x2",cx+70);hd.setAttribute("y2",cy+Math.sign(hw)*(Math.abs(hw)>0.5?50:0));
  const ang=Math.abs(Math.round(((wd-rw*10+540)%360)-180));
  out[0].textContent="Runway "+rw+" ("+rw*10+"°), wind "+wd+"/"+ws;
  out[1].textContent="Angle off runway "+ang+"°";
  out[2].textContent="Crosswind = "+Math.abs(xw).toFixed(1)+" kt;  "+(hw>=0?"Headwind ":"TAILWIND ")+Math.abs(hw).toFixed(1)+" kt";
  const ok=Math.abs(xw)<=lim;out[3].textContent=ok?"≤ "+lim+" kt limit":"超過 "+lim+" kt → 換 runway";out[3].setAttribute("fill",ok?"#4ade80":"#f87171");
  say("Xwind = V x sin(角)；Headwind = V x cos(角)。口訣 30°≈0.5、45°≈0.7、60°≈0.9。C172S demonstrated 15 kt、DA40 20 kt (POH/AFM)，CASA chart 最大 15 kt")}
 H.slider(box,"Runway (x10°)",1,36,13,v=>{rw=v;upd()},1);
 H.slider(box,"Wind from °",0,355,150,v=>{wd=v;upd()},5);
 H.slider(box,"Wind kt",0,40,15,v=>{ws=v;upd()},1);
 H.button(box,"Limit 15/20 kt",()=>{lim=lim===15?20:15;upd()});
}},
{title:"Mass Terms Build-up",hint:"撳 Next 逐層加：BEM → Ramp",build(box,H){
 const svg=H.svg(box,700,320),say=H.note(box);
 const rows=[["Basic Empty Mass",1000,"#94a3b8"],["+ Variable load (crew etc.) = Dry Operating Mass",80,"#a78bfa"],["+ Traffic load (pax, bag, cargo) = Zero Fuel Mass",320,"#38bdf8"],["+ Take-off fuel = Take-off Mass",250,"#fb923c"],["+ Start/taxi fuel = Ramp Mass",10,"#f87171"]];
 const sc=0.38,x0=30;let step=0,trip=150;
 const bars=rows.map((r,i)=>[H.el("rect",{x:x0,y:20+i*38,height:26,width:0,fill:r[2]},svg),tx(H,svg,x0,14+i*38,11,r[0],"#e2e8f0")]);
 const lim=[["MZFM 1450",1450,"#fbbf24"],["MTOM 1700",1700,"#4ade80"]];
 lim.forEach(l=>{H.el("line",{x1:x0+l[1]*sc,x2:x0+l[1]*sc,y1:6,y2:210,stroke:l[2],"stroke-dasharray":"4 3"},svg);tx(H,svg,x0+l[1]*sc,222,10,l[0],l[2],"middle")});
 const lm=tx(H,svg,x0,262,13,"","#e2e8f0"),lm2=tx(H,svg,x0,284,12,"","#e2e8f0");
 function upd(){let cum=0;rows.forEach((r,i)=>{cum+=r[1];bars[i][0].setAttribute("width",i<step?cum*sc:0);bars[i][1].setAttribute("opacity",i<step?1:0.3)});
  const tom=1650,land=tom-trip;lm.textContent="Landing mass = TOM - trip fuel = "+land+" (MLM 1600 示意)";
  lm2.textContent=land<=1600?"OK: ≤ MLM":"超 MLM → 要燒夠油／減載";lm2.setAttribute("fill",land<=1600?"#4ade80":"#f87171");
  say(step?rows[Math.min(step,5)-1][0]:"Step 0：由 Basic Empty Mass 開始。數字為示意 kg，只表達結構")}
 H.button(box,"Next",()=>{step=Math.min(5,step+1);upd()});
 H.button(box,"Reset",()=>{step=0;upd()});
 H.slider(box,"Trip fuel burn kg",0,250,150,v=>{trip=v;upd()},10);
}}
]
});
})();
