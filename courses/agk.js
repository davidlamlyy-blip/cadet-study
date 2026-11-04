// Duolingo 式課程：Aircraft General Knowledge（Must know chapters）。內容來源：data/agk.js 嘅 topic 同 data/notes/agk_*.js。Q／A 英文；教學用廣東話、tech term 英文。
Cadet.course({key:"agk",name:"Aircraft General Knowledge",emoji:"⚙️",color:"#d9bcff",units:[
{id:"agk-u1",title:"Unit 1 · 機身同 piston engine",desc:"Airframe → engine → ignition → fuel → oil → prop",lessons:[
 {id:"agk-1-1",title:"結構受力",icon:"🏗️",topic:"agk.stress",topics:["agk.stress","agk.loads"],steps:[
  {t:"teach",title:"五種 stress",say:"飛機結構受五種力：<b>tension</b>（拉）、<b>compression</b>（壓）、<b>bending</b>（彎）、<b>torsion</b>（扭）、<b>shear</b>（剪）。",terms:[["Tension","拉"],["Compression","壓"],["Bending","彎"],["Torsion","扭"],["Shear","剪"]]},
  {t:"match",q:"Match each stress with its action",pairs:[["Tension","Pulling"],["Compression","Squeezing"],["Torsion","Twisting"],["Shear","Sliding layers apart"]]},
  {t:"teach",title:"Limit 同 ultimate",say:"<b>Limit load</b> ＝ 設計者預期服役時最大嘅 load。<b>Ultimate load</b> ＝ <b>1.5 × limit load</b>，結構要頂到唔散。",tip:"1.5 倍係安全系數，唔係俾你用嘅餘量。"},
  {t:"mcq",q:"The design ultimate load equals:",opts:["1.5 × limit load","1.0 × limit load","3.8 × limit load"],a:0,why:"The structure must survive ultimate load without collapse."},
  {t:"tf",q:"Limit load is the maximum load expected in service.",a:true,why:"Ultimate load adds the 1.5 safety factor on top."},
  {t:"fill",text:"A twisting force is called ___, and pulling is called ___.",bank:["torsion","tension","shear","bending"],a:["torsion","tension"],why:"Torsion twists; tension pulls."}
 ]},
 {id:"agk-1-2",title:"Four-stroke engine",icon:"🔧",topic:"agk.fourstroke",topics:["agk.fourstroke","agk.compratio","agk.sixsys","agk.detonation"],steps:[
  {t:"teach",title:"四個 stroke",say:"<b>Intake → Compression → Power → Exhaust</b>。一個 cycle 曲軸轉 <b>2 圈（720°）</b>。Spark plug 喺 <b>TDC 之前</b>點火。",viz:{k:"agk",t:"Four-Stroke"}},
  {t:"order",q:"Put the strokes in order",items:["Intake","Compression","Power","Exhaust"],why:"Two crankshaft revolutions complete the cycle."},
  {t:"mcq",q:"One four-stroke cycle takes how many crankshaft revolutions?",opts:["One","Two","Four"],a:1,why:"Two revolutions, or 720 degrees."},
  {t:"teach",title:"Compression ratio",say:"<b>CR = total volume ÷ clearance volume</b>。CR 高 power 大，但要更高 octane，否則 detonation。",tip:"IO-360-L2A 係 8.5:1。"},
  {t:"mcq",q:"What is the downside of a high compression ratio?",opts:["It needs higher-octane fuel to avoid detonation","It stops the magnetos working","It lowers oil pressure"],a:0,why:"Higher pressure and temperature make detonation more likely."},
  {t:"teach",title:"六個 system",say:"燃燒要 <b>Air + Fuel + Heat</b>。六個 system：Ignition、Induction、Fuel、Lubrication、Cooling、Exhaust。"},
  {t:"tf",q:"Detonation is the uncontrolled, explosive burning of the mixture.",a:true,why:"It causes a pressure spike, vibration, overheating and piston damage."},
  {t:"mcq",q:"Which set can cause detonation?",opts:["Low-octane fuel and overheating","Cool engine at idle","Rich mixture at low power"],a:0,why:"Excess pressure and temperature cause it."}
 ]},
 {id:"agk-1-3",title:"Ignition",icon:"⚡",topic:"agk.magneto",topics:["agk.magneto","agk.dualign","agk.ignswitch"],steps:[
  {t:"teach",title:"Magneto 自給自足",say:"Magneto 用旋轉 magnet 發電，<b>唔靠 aircraft electrical</b>。Alternator 同 battery 壞晒，engine 都繼續運行。"},
  {t:"tf",q:"The engine stops if the alternator and battery both fail.",a:false,why:"Magnetos are self-contained."},
  {t:"teach",title:"Dual ignition",say:"兩個 magneto、每缸兩粒 plug：<b>redundancy</b>，同埋<b>燃燒更完全</b>。"},
  {t:"mcq",q:"Why have two magnetos?",opts:["Redundancy and better combustion","To charge the battery","To drive the fuel pump"],a:0,why:"Two sparks burn the mixture faster and more completely."},
  {t:"teach",title:"OFF 其實係接地",say:"Switch 打 OFF ＝ 將 magneto <b>primary circuit 接地</b>。<b>P-lead 斷</b>就接唔到地，變 <b>hot magneto</b>。",tip:"永遠當 prop 係 live。"},
  {t:"mcq",q:"A broken P-lead means:",opts:["The magneto may stay live with the switch OFF","The engine will not start","The battery goes flat"],a:0,why:"The primary circuit cannot be grounded."},
  {t:"fill",text:"OFF ___ the primary circuit. A broken P-lead gives a ___ magneto.",bank:["grounds","hot","opens","cold"],a:["grounds","hot"],why:"Treat every propeller as live."}
 ]},
 {id:"agk-1-4",title:"Fuel system 同 carb ice",icon:"⛽",topic:"agk.fuelsys",topics:["agk.fuelsys","agk.carb","agk.carbice","agk.carbheat","agk.mixture","agk.egtcht"],steps:[
  {t:"order",q:"Trace the fuel from tank to engine",items:["Tank","Selector valve","Strainer","Auxiliary pump","Engine-driven pump","Carburettor or injection"],why:"Know this flow for interviews."},
  {t:"teach",title:"Carburettor",say:"<b>Venturi</b> 令空氣加速、pressure 跌，抽油出嚟。<b>Throttle</b> 控量，<b>mixture</b> 控比例。"},
  {t:"match",q:"Match the control to what it sets",pairs:[["Throttle","Quantity of mixture"],["Mixture","Fuel-to-air ratio"],["Venturi","Low pressure draws fuel"]]},
  {t:"teach",title:"Carb ice",say:"三種：<b>impact、fuel evaporation、throttle ice</b>。Fuel 蒸發同 venturi 減壓會降溫，所以<b>暖濕天都會結冰</b>。",viz:{k:"agk",t:"Carburettor Icing"}},
  {t:"tf",q:"Carburettor ice can form when the OAT is well above 0°C.",a:true,why:"Vaporisation and pressure drop cool the air."},
  {t:"teach",title:"Carb heat",say:"開 carb heat：<b>RPM 先跌後升</b> ＝ 有冰融緊。熱空氣密度低，所以 power 跌。C172SP 係 fuel injected，冇 carb heat。"},
  {t:"mcq",q:"You apply carb heat and RPM drops then rises. This means:",opts:["Ice was present and is melting","There was no ice","The magneto failed"],a:0,why:"The rise shows ice has melted."},
  {t:"mcq",q:"Which instrument is the most accurate guide to the mixture setting?",opts:["EGT","Oil pressure","Ammeter"],a:0,why:"EGT is a very accurate indicator of mixture."},
  {t:"tf",q:"Mixture is normally set to full rich before descent and landing.",a:true,why:"Extra fuel helps cool the engine at high power, such as a go-around. Follow the POH."}
 ]},
 {id:"agk-1-5",title:"Fuel 管理同污染",icon:"🧪",topic:"agk.octane",topics:["agk.octane","agk.fuelcontam","agk.fuelselector"],steps:[
  {t:"teach",title:"Octane",say:"Octane 係<b>抗 detonation</b>，<b>唔係能量</b>。顏色：80 紅、100 綠、100LL 藍；Jet A 無色或草黃。",terms:[["80","Red"],["100","Green"],["100LL","Blue"],["Jet A","Straw"]]},
  {t:"match",q:"Match the fuel with its colour",pairs:[["AVGAS 80","Red"],["AVGAS 100","Green"],["AVGAS 100LL","Blue"],["Jet A","Colourless or straw"]]},
  {t:"tf",q:"Jet A can be used in a piston engine that needs AVGAS.",a:false,why:"Never put Jet A in a piston engine."},
  {t:"teach",title:"Fuel 入面有水",say:"最常見污染係<b>水</b>。每次飛前由 <b>strainer 同各 tank sump</b> 抽到透明容器檢查。Tank 入滿過夜，condensation 較少。"},
  {t:"mcq",q:"You find water in the fuel sample. What next?",opts:["Keep draining until it is clean","Ignore a small amount","Start the engine to clear it"],a:0,why:"Repeat the drain until the sample is clean."},
  {t:"teach",title:"Tank 管理",say:"揀錯 tank 係 <b>fuel starvation</b> 常見原因。唔好飛乾 tank，以免 <b>vapour lock</b>。轉 tank 前開 boost pump，之後睇 fuel pressure。"},
  {t:"mcq",q:"What should you do before switching tanks?",opts:["Turn on the boost pump and monitor fuel pressure","Lean the mixture fully","Turn the magnetos off"],a:0,why:"This protects the fuel supply during the change."},
  {t:"fill",text:"Octane measures resistance to ___. The most common contaminant is ___.",bank:["detonation","water","energy","sand"],a:["detonation","water"],why:"Check both at every preflight."}
 ]},
 {id:"agk-1-6",title:"Oil 同 cooling",icon:"🌡️",topic:"agk.lubfun",topics:["agk.lubfun","agk.oilind","agk.oilprob","agk.cowlflap","agk.comon"],steps:[
  {t:"teach",title:"Oil 五大功能",say:"<b>Lube、Cool、Clean、Seal、Protect</b>。最重要特性係 <b>viscosity</b>。15W50 係 multigrade。"},
  {t:"mcq",q:"Which is the most important property of engine oil?",opts:["Viscosity","Colour","Smell"],a:0,why:"Viscosity decides how it flows hot and cold."},
  {t:"teach",title:"睇組合判斷",say:"<b>低壓 + 正常溫度</b>：可能 gauge 壞。<b>高溫 + 低壓</b>：嚴重，可能失油。起動 <b>30 秒內</b>冇 pressure → shut down。"},
  {t:"match",q:"Match the indication with the likely meaning",pairs:[["Low pressure, normal temperature","Possibly a faulty gauge"],["High temperature, low pressure","Serious oil loss"],["No pressure 30 s after start","Shut down"]]},
  {t:"mcq",q:"Oil temperature is high and oil pressure is low in flight. You should:",opts:["Reduce power and land as soon as possible","Climb at full power","Ignore it until landing"],a:0,why:"Treat it as oil loss."},
  {t:"teach",title:"CHT 高點算",say:"高 power 低速最難冷卻。做法：<b>開 cowl flaps、enrich、加速、減 power</b>。"},
  {t:"mcq",q:"Which does NOT reduce CHT?",opts:["Leaning the mixture at high power","Opening cowl flaps","Increasing airspeed"],a:0,why:"A richer mixture cools; leaning at high power does not."},
  {t:"tf",q:"Carbon monoxide can be smelled easily, so a detector is not needed.",a:false,why:"CO is colourless and odourless. Shut off heat, open vents and land."}
 ]},
 {id:"agk-1-7",title:"Propeller",icon:"🌀",topic:"agk.fixedprop",topics:["agk.fixedprop","agk.csu"],steps:[
  {t:"teach",title:"Fixed pitch",say:"一個 blade angle，只喺<b>一個 speed／RPM 最高效</b>。Fixed-pitch 機嘅 RPM 就係 power 指示。"},
  {t:"tf",q:"A fixed-pitch propeller is efficient at every speed.",a:false,why:"It is a compromise, optimal at only one speed and RPM."},
  {t:"teach",title:"CSU",say:"Governor 調 oil 去 hub 改 pitch，<b>保持揀定嘅 RPM</b>。<b>Prop lever → RPM</b>；<b>throttle → MAP</b>。",viz:{k:"agk",t:"Constant Speed Prop"}},
  {t:"match",q:"Match the lever with what it sets",pairs:[["Propeller lever","RPM"],["Throttle","Manifold pressure"]]},
  {t:"mcq",q:"Which is a governor part?",opts:["Speeder spring","Float chamber","Venturi"],a:0,why:"Pilot valve, speeder spring, flyweights and governor oil pump."},
  {t:"fill",text:"The governor changes pitch using ___ pressure to hold the selected ___.",bank:["oil","RPM","fuel","MAP"],a:["oil","RPM"],why:"That is why it is called constant speed."}
 ]},
 {id:"agk-1-s",title:"Real-life scenarios",icon:"🎯",scenario:true,steps:[
  {t:"scenario",sit:"You cruise a carburettor-equipped trainer on a humid 15°C day. RPM slowly drops and the engine feels slightly rough.",q:"What do you do first?",opts:["Apply full carburettor heat","Lean the mixture","Switch the magnetos off"],a:0,fb:["Correct. RPM falls, then recovers as the ice melts.","Leaning does not clear ice, and rough running may worsen.","Never do this as a first action; you would stop the engine."],why:"Carb ice forms well above freezing in humid air."},
  {t:"scenario",sit:"After start, the oil pressure gauge stays at zero. Thirty seconds have passed.",q:"What do you do?",opts:["Shut down the engine","Taxi out and let it warm up","Increase RPM to raise the pressure"],a:0,fb:["Correct. Investigate before running it again.","Running without pressure can destroy the engine.","More RPM with no oil does more damage."],why:"Oil pressure should rise within about 30 seconds."},
  {t:"scenario",sit:"During preflight, a friend leans on the propeller while the ignition switch is OFF.",q:"What do you tell them?",opts:["Step away; treat every propeller as live","It is fine because the switch is OFF","It is fine if the battery is off"],a:0,fb:["Correct. A broken P-lead can leave a magneto hot.","A broken P-lead means OFF may not work.","Magnetos do not need the battery."],why:"Hot magnetos are the reason for this rule."},
  {t:"scenario",sit:"In a long climb on a hot day, CHT is rising toward the red line.",q:"Which action is best?",opts:["Lower the nose slightly, open cowl flaps and enrich","Climb steeper to get to cooler air","Lean the mixture to save fuel"],a:0,fb:["Correct. More airflow and fuel cool the engine.","Slower speed reduces cooling airflow.","Leaning at high power can make it hotter."],why:"High power and low speed are the hardest to cool."}
 ]},
 {id:"agk-1-q",title:"Unit quiz",icon:"🏆",quiz:true,steps:[
  {t:"mcq",q:"Ultimate load is:",opts:["1.5 × limit load","2 × limit load","Equal to limit load"],a:0,why:"The structure must survive it."},
  {t:"tf",q:"Spark occurs before TDC on the compression stroke.",a:true,why:"Ignition is timed before top dead centre."},
  {t:"mcq",q:"Compression ratio is:",opts:["Total volume ÷ clearance volume","Clearance volume ÷ total volume","MAP ÷ RPM"],a:0,why:"Total divided by clearance."},
  {t:"mcq",q:"Magnetos depend on:",opts:["Their own rotating magnet","The battery","The alternator"],a:0,why:"They are self-contained."},
  {t:"mcq",q:"The throttle in a carburettor controls:",opts:["Quantity of mixture","Fuel-to-air ratio","Spark timing"],a:0,why:"The mixture control sets the ratio."},
  {t:"tf",q:"The C172SP needs carburettor heat.",a:false,why:"It is fuel injected."},
  {t:"mcq",q:"AVGAS 100LL is coloured:",opts:["Blue","Red","Green"],a:0,why:"80 red, 100 green, 100LL blue."},
  {t:"mcq",q:"Running a tank dry can cause:",opts:["Vapour lock","Detonation of the magneto","Hot start only"],a:0,why:"Air enters the fuel system."},
  {t:"mcq",q:"Which is one of the five oil functions?",opts:["Seal","Ignite","Pressurise the cabin"],a:0,why:"Lube, cool, clean, seal, protect."},
  {t:"mcq",q:"With a CSU, the throttle sets:",opts:["Manifold pressure","RPM","Mixture"],a:0,why:"The propeller lever sets RPM."}
 ]}
]},
{id:"agk-u2",title:"Unit 2 · Systems 同 instruments",desc:"Gas turbine → electrical → gear → pressurisation → instruments → autopilot",lessons:[
 {id:"agk-2-1",title:"Gas turbine",icon:"✈️",topic:"agk.brayton",topics:["agk.brayton","agk.turbtypes","agk.compressor","agk.combustor","agk.turbine"],steps:[
  {t:"teach",title:"Brayton cycle",say:"<b>Intake → Compression → Combustion → Expansion</b>，四步同時喺唔同位置發生。<b>T = m(Vj − Vi)</b>。",viz:{k:"agk",t:"Gas Turbine"}},
  {t:"order",q:"Put the gas path in order",items:["Intake","Compressor","Combustor","Turbine","Exhaust"],why:"Air is compressed, burned, then expanded."},
  {t:"match",q:"Match the engine with its use",pairs:[["Turbofan","Bypass fan adds thrust"],["Turboprop","Drives a propeller"],["Turboshaft","Drives a rotor"],["Turbojet","All thrust from the jet"]]},
  {t:"teach",title:"Compressor",say:"<b>Axial</b>：高效、高 ratio，但易 surge 同 FOD。<b>Centrifugal</b>：robust，但 overall ratio 低。"},
  {t:"mcq",q:"Why do axial compressors need many stages?",opts:["Each stage raises pressure only a little","Each stage burns fuel","To reduce mass flow"],a:0,why:"Many small rises give a high overall ratio."},
  {t:"teach",title:"Combustor 同 turbine",say:"<b>Diffuser</b> 減速增壓，係全 engine 最高 pressure。Turbine 抽熱氣能量驅動 compressor。<b>Impulse</b> 似水車，<b>reaction</b> 靠 blade lift。"},
  {t:"mcq",q:"Where is the pressure highest?",opts:["Diffuser","Intake","Jet pipe"],a:0,why:"It prepares the air for combustion."},
  {t:"tf",q:"The turbine drives the compressor.",a:true,why:"They share a shaft."}
 ]},
 {id:"agk-2-2",title:"Electrical",icon:"🔋",topic:"agk.elecbasic",topics:["agk.elecbasic","agk.c172elec","agk.elecfail","agk.cbreset"],steps:[
  {t:"teach",title:"基本公式",say:"<b>V = IR</b>，<b>P = VI</b>。導線長、細、熱，resistance 就大。"},
  {t:"mcq",q:"A 24 V circuit has 6 Ω resistance. The current is:",opts:["4 A","144 A","30 A"],a:0,why:"I = V ÷ R = 24 ÷ 6 = 4 A."},
  {t:"mcq",q:"A 28 V bus supplies 10 A. The power is:",opts:["280 W","38 W","2.8 W"],a:0,why:"P = V × I = 28 × 10."},
  {t:"teach",title:"C172SP",say:"<b>28 V DC</b>、belt-driven <b>50 A alternator</b>、<b>24 V battery</b>。Avionics master 隔離 transient。",viz:{k:"agk",t:"C172SP DC System"}},
  {t:"tf",q:"The avionics master protects electronics from transients, such as during start.",a:true,why:"It isolates the avionics bus."},
  {t:"teach",title:"Alternator 壞咗",say:"靠 battery → <b>shed load、盡快落地</b>。CB：等 <b>90 秒</b>，只 reset <b>一次</b>，有煙唔 reset。"},
  {t:"mcq",q:"What is the circuit breaker rule?",opts:["Wait about 90 s and reset once if no smoke","Reset repeatedly until it holds","Never touch it in flight under any condition"],a:0,why:"A second trip means a real fault."},
  {t:"mcq",q:"Ammeter shows excessive charge on the C172SP. You:",opts:["Turn the alternator off and land soon","Turn the battery off","Add more electrical load"],a:0,why:"Keep BAT on, shed load and land as soon as practical."}
 ]},
 {id:"agk-2-3",title:"Gear 同 hydroplaning",icon:"🛞",topic:"agk.brakes",topics:["agk.brakes","agk.gearcfg","agk.hydroplane"],steps:[
  {t:"teach",title:"Brakes",say:"細機：single disc，pilot 踩 pedal 增壓。大機：multi-disc，用 hydraulic。<b>Fusible plug</b> 防 tyre burst。"},
  {t:"mcq",q:"What does a fusible plug do?",opts:["Prevents tyre burst from overheating","Stores brake fluid","Locks the gear"],a:0,why:"It melts and releases pressure."},
  {t:"tf",q:"A tricycle aircraft can nose over under heavy braking as easily as a tail-gear aircraft.",a:false,why:"Heavy braking cannot nose over a tricycle in the same way."},
  {t:"teach",title:"Hydroplaning",say:"三種：<b>dynamic</b>（水楔）、<b>reverted rubber</b>（鎖死生蒸氣）、<b>viscous</b>（薄水層）。教材 rule：<b>約 9√psi kt</b>。"},
  {t:"match",q:"Match the hydroplaning type",pairs:[["Dynamic","Water wedge"],["Reverted rubber","Locked wheel steam"],["Viscous","Thin film"]]},
  {t:"mcq",q:"Using 9√psi, a 64 psi tyre hydroplanes at about:",opts:["72 kt","54 kt","576 kt"],a:0,why:"9 × 8 = 72 kt."}
 ]},
 {id:"agk-2-4",title:"Pressurisation",icon:"🧳",topic:"agk.pressurisation",topics:["agk.pressurisation"],steps:[
  {t:"teach",title:"點樣控 cabin altitude",say:"Air-con 供氣，<b>CPC</b> 調 <b>outflow valve</b>。典型 max cabin altitude 約 <b>8,000 ft</b>，新機約 6,000 ft。",viz:{k:"agk",t:"Cabin Altitude"}},
  {t:"mcq",q:"Which component controls cabin altitude?",opts:["Outflow valve","Pitot tube","Fuel pump"],a:0,why:"The CPC modulates outflow."},
  {t:"tf",q:"A typical maximum cabin altitude is about 8,000 ft.",a:true,why:"Some newer types keep about 6,000 ft."},
  {t:"match",q:"Match each valve",pairs:[["Safety relief","Prevents over-pressure"],["Negative relief","Prevents outside pressure exceeding cabin"],["Outflow valve","Controls cabin altitude"]]}
 ]},
 {id:"agk-2-5",title:"Instruments 基礎",icon:"🧭",topic:"agk.pitotstatic",topics:["agk.pitotstatic","agk.asi","agk.altvsi","agk.attind","agk.compass","agk.altsetting","agk.stallwarn"],steps:[
  {t:"teach",title:"Pitot-static",say:"<b>ASI</b> 用 pitot + static；<b>ALT、VSI</b> 只用 static。ASI 量 total − static ＝ dynamic pressure。"},
  {t:"match",q:"Match each instrument with its source",pairs:[["ASI","Pitot and static"],["Altimeter","Static"],["VSI","Static"]]},
  {t:"teach",title:"Altimeter 陷阱",say:"設定<b>太高 → 讀數太高</b>。<b>比標準凍 → true altitude 低過 indicated</b>，呢個方向最危險。"},
  {t:"mcq",q:"The altimeter setting is too high. The altimeter reads:",opts:["Higher than actual","Lower than actual","Correctly"],a:0,why:"About 1,000 ft per 1 inHg."},
  {t:"tf",q:"In colder-than-standard air, true altitude is lower than indicated.",a:true,why:"This reduces your real terrain clearance."},
  {t:"teach",title:"Compass",say:"Dip 令 turn 同加速出錯。北半球記 <b>UNOS</b>（Undershoot North, Overshoot South）同 <b>ANDS</b>（Accelerate North, Decelerate South）。"},
  {t:"mcq",q:"In the northern hemisphere, UNOS tells you to:",opts:["Undershoot north, overshoot south","Overshoot north, undershoot south","Ignore the compass in turns"],a:0,why:"Dip causes the turning error."},
  {t:"mcq",q:"On the C172SP, which is electric?",opts:["Turn coordinator","Attitude indicator","Directional indicator"],a:0,why:"AI and DI are vacuum driven."},
  {t:"tf",q:"A stall warning typically sounds about 5 to 10 kt above the stall.",a:true,why:"It gets louder as the stall gets closer."}
 ]},
 {id:"agk-2-6",title:"Pitot／static 塞咗",icon:"🚫",topic:"agk.blockage",topics:["agk.blockage"],steps:[
  {t:"teach",title:"Pitot 塞",say:"Ram + drain 塞：pitot 困住，climb 時 static 跌 → 差壓大 → <b>over-read</b>。Ram 塞但 drain 通：pitot 漏走 → ASI <b>跌到 0</b>。",viz:{k:"agk",t:"Pitot"}},
  {t:"mcq",q:"Ram and drain blocked, climbing. The ASI:",opts:["Over-reads","Under-reads","Reads zero"],a:0,why:"Pitot stays constant while static falls."},
  {t:"mcq",q:"Ram blocked but drain open. The ASI:",opts:["Falls to zero","Over-reads","Reads correctly"],a:0,why:"Pitot pressure leaks out through the drain."},
  {t:"teach",title:"Static 塞",say:"Static 困住：<b>ALT 凍結、VSI 0</b>；climb 時 ASI <b>under-read</b>，descent 時 over-read。"},
  {t:"match",q:"Static port blocked: match the result",pairs:[["Altimeter","Frozen"],["VSI","Zero"],["ASI in a climb","Under-reads"],["ASI in a descent","Over-reads"]]},
  {t:"tf",q:"Pitot blockage affects the altimeter.",a:false,why:"The altimeter uses static only."},
  {t:"mcq",q:"On the C172SP, the static port is blocked. You can use:",opts:["The alternate static source","More pitot heat","The avionics master"],a:0,why:"It takes cabin air."}
 ]},
 {id:"agk-2-7",title:"Autopilot 同 FMA",icon:"🤖",topic:"agk.afcs",topics:["agk.afcs","agk.fd","agk.ap","agk.fma"],steps:[
  {t:"teach",title:"AFCS",say:"目的：<b>減疲勞、提升 stability、騰出 capacity 做決策</b>。流程：Sensors → Computers → Output → Feedback。"},
  {t:"order",q:"Put the AFCS flow in order",items:["Sensors measure","Computers analyse","Outputs move the surfaces","Feedback compares the result"],why:"It is a closed loop."},
  {t:"teach",title:"FD 同 AP",say:"<b>FD</b> 只顯示 command bar，<b>唔控制飛機</b>。<b>AP</b> 先至郁 control surfaces。冇 guidance 時 AP 入 basic mode。"},
  {t:"tf",q:"A flight director moves the control surfaces.",a:false,why:"It only shows commands."},
  {t:"teach",title:"FMA",say:"<b>綠 = active；藍 = armed</b>。每次改 mode 都要讀 FMA。"},
  {t:"mcq",q:"Why check the FMA after a mode change?",opts:["It shows what the aircraft is actually doing","It sets the fuel load","It tests the magnetos"],a:0,why:"The FMA confirms the active modes."},
  {t:"mcq",q:"Green on the FMA means:",opts:["Active","Armed","Failed"],a:0,why:"Blue means armed."}
 ]},
 {id:"agk-2-s",title:"Real-life scenarios",icon:"🎯",scenario:true,steps:[
  {t:"scenario",sit:"Climbing through cloud in cold air, your airspeed slowly increases even though your attitude and power are unchanged.",q:"What is the most likely cause?",opts:["Pitot ram and drain blocked by ice","Static port open","The alternator has failed"],a:0,fb:["Correct. Check pitot heat and cross-check attitude and power.","An open static port is normal.","That would not change the ASI."],why:"A blocked pitot makes the ASI act like an altimeter in a climb."},
  {t:"scenario",sit:"In cruise the VOLTS light comes on in a C172SP and the ammeter shows discharge.",q:"What is the right plan?",opts:["Follow the checklist, shed load and land soon if it recurs","Turn off the battery","Carry on to the destination two hours away"],a:0,fb:["Correct. The battery has limited endurance.","The battery may be your only source.","You may lose avionics before you arrive."],why:"Battery time is limited once the alternator fails."},
  {t:"scenario",sit:"A breaker pops in flight and you notice a faint burning smell.",q:"What do you do?",opts:["Leave it out and consider landing","Reset it immediately","Reset it twice"],a:0,fb:["Correct. A burning smell means do not reset.","That could feed an electrical fire.","Never reset repeatedly."],why:"Smoke or smell overrides the reset rule."},
  {t:"scenario",sit:"You are heavy on a wet runway with a high approach speed. Braking feels ineffective after touchdown.",q:"What might be happening?",opts:["Hydroplaning","Hot magneto","Carburettor ice"],a:0,fb:["Correct. Use aerodynamic drag and reverse if available, and avoid locking wheels.","That is an ignition issue.","That is an engine issue."],why:"Locked wheels can lead to reverted rubber hydroplaning."}
 ]},
 {id:"agk-2-q",title:"Unit quiz",icon:"🏆",quiz:true,steps:[
  {t:"mcq",q:"The Brayton cycle is:",opts:["Continuous","Intermittent like a piston","Only for turboprops"],a:0,why:"Combustion is continuous."},
  {t:"mcq",q:"Thrust is proportional to:",opts:["Mass flow × velocity change","Fuel colour","Oil pressure"],a:0,why:"T = m(Vj − Vi)."},
  {t:"tf",q:"Axial compressors are more prone to FOD than centrifugal ones.",a:true,why:"Centrifugal designs are more robust."},
  {t:"mcq",q:"Resistance increases with:",opts:["Longer, thinner, hotter conductors","Shorter, thicker, colder conductors","Lower voltage"],a:0,why:"These three factors raise resistance."},
  {t:"mcq",q:"The C172SP electrical system is:",opts:["28 V DC","14 V AC","115 V AC"],a:0,why:"Older slides show 14 V; the C172SP is 28 V."},
  {t:"mcq",q:"Cabin altitude is held by the:",opts:["Outflow valve","Fusible plug","Static port"],a:0,why:"The CPC modulates it."},
  {t:"mcq",q:"The ASI measures:",opts:["Dynamic pressure","Static pressure only","Manifold pressure"],a:0,why:"Total minus static."},
  {t:"tf",q:"With a static blockage the altimeter freezes.",a:true,why:"Trapped static cannot change."},
  {t:"mcq",q:"ANDS applies on which headings?",opts:["East or west","North or south only","Any heading on the ground"],a:0,why:"Acceleration error is greatest on east and west headings."},
  {t:"mcq",q:"Blue on the FMA means:",opts:["Armed","Active","Failed"],a:0,why:"Green is active."}
 ]}
]},
{id:"agk-u3",title:"Unit 3 · Warnings 同 controls",desc:"Warnings → C172SP → flight controls → oxygen",lessons:[
 {id:"agk-3-1",title:"Warning systems",icon:"🚨",topic:"agk.warnclass",topics:["agk.warnclass","agk.fire","agk.gpws","agk.tcas","agk.windshear"],steps:[
  {t:"teach",title:"三級 alert",say:"<b>Warning</b> 紅色，即時行動。<b>Caution</b> 琥珀色，盡快。<b>Advisory</b> 方便時處理。"},
  {t:"match",q:"Match the alert with the response",pairs:[["Warning","Immediate action"],["Caution","Action soon"],["Advisory","When convenient"]]},
  {t:"teach",title:"GPWS 同 EGPWS",say:"GPWS 靠 <b>radio altimeter</b>，睇唔到前面。<b>EGPWS 加 look-ahead terrain</b>。"},
  {t:"mcq",q:"Which adds a look-ahead terrain function?",opts:["EGPWS","Basic GPWS","Yaw damper"],a:0,why:"Basic GPWS cannot see ahead."},
  {t:"teach",title:"TCAS",say:"<b>TA</b>（約 40 秒）：「Traffic」，冇動作指令。<b>RA</b>（約 25 秒）：「Climb」／「Descend」。"},
  {t:"match",q:"Match the TCAS symbol",pairs:[["Open diamond","Other traffic"],["Solid diamond","Proximate"],["Amber circle","TA"],["Red square","RA"]]},
  {t:"tf",q:"A TCAS RA gives a vertical manoeuvre.",a:true,why:"A TA gives no manoeuvre."},
  {t:"teach",title:"Windshear escape",say:"<b>AP off、TO/GA、max thrust、wings level、pitch 約 15°、收 speedbrakes、唔郁 gear 同 flap</b>。"},
  {t:"mcq",q:"Which belongs in a windshear escape?",opts:["Keep gear and flaps as set","Retract flaps immediately","Reduce thrust"],a:0,why:"Configuration changes can cost lift or add drag."}
 ]},
 {id:"agk-3-2",title:"C172SP 數字",icon:"🛩️",topic:"agk.c172sp",topics:["agk.c172sp"],steps:[
  {t:"teach",title:"要記嘅數字",say:"<b>IO-360-L2A</b>、<b>180 BHP @ 2700 RPM</b>、fuel injected、fixed pitch。<b>56 gal total、53 usable</b>。"},
  {t:"mcq",q:"The C172SP engine produces:",opts:["180 BHP at 2700 RPM","160 BHP at 2400 RPM","300 BHP at 2800 RPM"],a:0,why:"From the POH."},
  {t:"mcq",q:"Usable fuel is:",opts:["53 US gal","56 US gal","28 US gal"],a:0,why:"56 total less 3 unusable."},
  {t:"tf",q:"The C172SP is fuel injected.",a:true,why:"So there is no carburettor heat."},
  {t:"match",q:"Match the C172SP figure",pairs:[["Oil sump","8 qt"],["Vacuum","4.5–5.5 inHg"],["Electrical","28 V DC"],["Propeller","76 in"]]}
 ]},
 {id:"agk-3-3",title:"Flight controls",icon:"🕹️",topic:"agk.fcprimary",topics:["agk.fcprimary","agk.fcsecondary","agk.flaptypes","agk.spoilers"],steps:[
  {t:"teach",title:"Primary 同 secondary",say:"<b>Primary</b>：aileron、elevator、rudder。<b>Secondary</b>：tabs、flaps、slats、spoilers。"},
  {t:"mcq",q:"Which is a secondary control?",opts:["Flap","Rudder","Aileron"],a:0,why:"Primary controls are aileron, elevator and rudder."},
  {t:"tf",q:"A stabilator is an all-moving tailplane.",a:true,why:"It serves as the elevator."},
  {t:"teach",title:"High-lift devices",say:"目的：<b>CLmax 上升、stall speed 下降</b>。<b>Fowler</b> 後移加面積又加 camber；<b>slat</b> 開 gap 延遲 stall。"},
  {t:"match",q:"Match the device",pairs:[["Fowler flap","Adds area and camber"],["Slotted flap","Delays separation through a slot"],["Slat","Lets energised air over the wing"],["Krueger","Leading-edge camber"]]},
  {t:"teach",title:"Spoilers",say:"Flight：單邊助 roll，同時升減速。Ground：破壞 lift，brake 更有效。"},
  {t:"mcq",q:"Why deploy ground spoilers?",opts:["To put weight on the wheels","To add lift","To cool the brakes"],a:0,why:"Weight on wheels improves braking."}
 ]},
 {id:"agk-3-4",title:"Oxygen",icon:"🫁",topic:"agk.o2req",topics:["agk.o2req"],steps:[
  {t:"teach",title:"Hypoxia",say:"Altitude 高 → <b>oxygen partial pressure</b> 低。FAA 例子：12,500–14,000 ft 超 30 分鐘、14,000 ft 以上持續、15,000 ft 以上全部乘員。",tip:"CASA 同 HK CAD 數字唔同，要對官方 regulation。"},
  {t:"tf",q:"The percentage of oxygen in the air falls sharply at altitude.",a:false,why:"The percentage stays about the same; partial pressure falls."},
  {t:"mcq",q:"In the FAA example, above 15,000 ft oxygen must be available to:",opts:["All occupants","The pilot only","No one"],a:0,why:"Crew use it continuously above 14,000 ft."}
 ]},
 {id:"agk-3-s",title:"Real-life scenarios",icon:"🎯",scenario:true,steps:[
  {t:"scenario",sit:"On approach, the aural warning says 'Terrain' with no visual contact in cloud.",q:"What do you do?",opts:["Follow the terrain escape procedure immediately","Wait to see the ground","Silence it and continue"],a:0,fb:["Correct. Treat it as real.","You may not have time to see the ground.","Never ignore it in cloud."],why:"GPWS gives seconds of warning."},
  {t:"scenario",sit:"TCAS calls 'Climb, climb' while ATC has just told you to descend.",q:"What do you do?",opts:["Follow the RA and tell ATC","Follow ATC","Do nothing"],a:0,fb:["Correct. The RA is coordinated with the other aircraft.","Opposing an RA can cause a collision.","An RA needs prompt action."],why:"An RA takes priority over an ATC instruction."},
  {t:"scenario",sit:"Below 1,000 ft on final, airspeed suddenly drops 15 kt and you hear a windshear warning.",q:"What is your action?",opts:["Windshear escape: TO/GA, max thrust, about 15° pitch","Retract the gear first","Continue and land"],a:0,fb:["Correct. Keep the configuration.","Changing the configuration costs time and may reduce lift.","Do not continue."],why:"Escape first, then report."},
  {t:"scenario",sit:"You feel light-headed and a little too happy at 13,500 ft after 40 minutes without oxygen.",q:"What should you do?",opts:["Descend and use oxygen","Keep going, you feel fine","Lean the mixture"],a:0,fb:["Correct. Euphoria is a classic hypoxia symptom.","Feeling fine is part of the danger.","That has no effect on hypoxia."],why:"Hypoxia dulls self-awareness."}
 ]},
 {id:"agk-3-q",title:"Unit quiz",icon:"🏆",quiz:true,steps:[
  {t:"mcq",q:"A warning under CS 25.1322 is coloured:",opts:["Red","Amber","Green"],a:0,why:"Red means immediate action."},
  {t:"mcq",q:"Basic GPWS relies mainly on:",opts:["Radio altimeter","Compass","Fuel flow"],a:0,why:"It cannot look ahead."},
  {t:"tf",q:"A TCAS TA commands a climb.",a:false,why:"Only an RA gives a manoeuvre."},
  {t:"mcq",q:"An RA is shown as a:",opts:["Red square","Amber circle","White diamond"],a:0,why:"An amber circle is a TA."},
  {t:"mcq",q:"Windshear pitch target is about:",opts:["15°","2°","45°"],a:0,why:"Then follow the guidance."},
  {t:"mcq",q:"C172SP total fuel is:",opts:["56 US gal","53 US gal","40 US gal"],a:0,why:"53 is usable."},
  {t:"mcq",q:"Ruddervators are:",opts:["Primary controls","Secondary controls","Trim tabs only"],a:0,why:"They combine rudder and elevator."},
  {t:"mcq",q:"High-lift devices lower:",opts:["Stall speed","Structural limits","Oil pressure"],a:0,why:"They raise CLmax."},
  {t:"tf",q:"Spoilers increase lift.",a:false,why:"They reduce lift and add drag."},
  {t:"mcq",q:"Hypoxia is caused by falling oxygen:",opts:["Partial pressure","Colour","Temperature"],a:0,why:"The percentage is roughly constant."}
 ]}
]}
]});
