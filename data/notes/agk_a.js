// 學習筆記 AGK Level 1（Airframe → Propeller）。中文為主、tech term 英文；內容整理自 data/agk.js 嘅 Must know topics（AGK01–05、C172SP POH、DA40 AFM）。
// rl＝每條 Recall 對應嘅課堂 id。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.agk.airframe",k:"agk",n:1,t:"Airframe",g:"Airframe",lesson:"agk-1-1",src:["AGK01 Intro"],
rec:["飛機結構受邊五種 stress？","Limit load 同 ultimate load 有咩分別？","Ultimate load 係 limit load 幾多倍？"],
rl:["agk-1-1","agk-1-1","agk-1-1"],
notes:`## 1. 五種 structural stress
結構永遠同時受幾種力，但考試要識分：
| Stress | 意思 | 例子 |
| Tension | 拉 | Lift 令下翼面被拉 |
| Compression | 壓 | Lift 令上翼面被壓 |
| Bending | 彎 | 翼根受彎 |
| Torsion | 扭 | Roll 時 wing 或 fuselage 被扭 |
| Shear | 剪 | 兩層相鄰材料向相反方向滑 |

## 2. Design loads
- **Limit load**：設計者預期飛機服役期間會遇到嘅最大 load。
- **Ultimate load** = **1.5 × limit load**。
- 結構要頂到 ultimate load **唔散**；所以 1.5 倍係安全系數，唔係俾你用嘅餘量。`,
sum:`- 五種 stress：**tension、compression、bending、torsion、shear**。
- **Ultimate = 1.5 × limit**；結構要頂到 ultimate load 唔散。`,
mcq:[
{q:"The design ultimate load is:",o:{A:"1.0 × limit load",B:"1.5 × limit load",C:"2.0 × limit load",D:"3.8 × limit load"},a:"B",why:"Ultimate load is 1.5 times the design limit load.",zh:"Ultimate load 係 limit load 嘅 1.5 倍。"},
{q:"A twisting force on the fuselage is called:",o:{A:"Shear",B:"Tension",C:"Torsion",D:"Compression"},a:"C",why:"Torsion is a twisting force.",zh:"扭嘅力叫 torsion。"}
]},
{id:"ln.agk.piston",k:"agk",n:2,t:"Piston Engine",g:"Piston Engine",lesson:"agk-1-2",src:["AGK01 Intro","Lycoming IO-360 手冊"],
rec:["Four-stroke cycle 四個 stroke 係咩？曲軸轉幾圈？","Compression ratio 點計？太高有咩代價？","燃燒要咩？六個 engine system 係邊六個？","Detonation 係咩？咩原因會引致？"],
rl:["agk-1-2","agk-1-2","agk-1-2","agk-1-2"],
notes:`## 1. Four-stroke cycle
次序：**Intake → Compression → Power → Exhaust**，一個 cycle 曲軸轉 **2 圈（720°）**。
1. **Intake**：intake valve 開，piston 向下，吸入 fuel-air mixture。
2. **Compression**：兩個 valve 閂，piston 向上壓縮。
3. **Power**：spark plug 喺 **TDC 之前**點火，燃氣推 piston 向下。
4. **Exhaust**：exhaust valve 開，piston 向上排氣。

## 2. Compression ratio
- **Compression ratio = total volume ÷ clearance volume**。
- 越高 → power 越大，但要**更高 octane** fuel 防 detonation。
- 例子：IO-360-L2A 係 **8.5:1**。

## 3. 六個 engine system
燃燒要 **Air + Fuel + Heat**，所以有：
- **Ignition**、**Induction**、**Fuel**、**Lubrication**、**Cooling**、**Exhaust**

## 4. Detonation
- Mixture **未受控咁爆燃**，pressure 突然飆高。
- 成因：**低 octane fuel、manifold pressure 過高、mixture 太 lean、過熱**、compression ratio 高。
- 後果：震動、過熱、損壞 piston。`,
sum:`- **Intake → Compression → Power → Exhaust**；720° crank。
- **CR = total ÷ clearance volume**；CR 高要高 octane。
- 六系統：Ignition、Induction、Fuel、Lubrication、Cooling、Exhaust。
- **Detonation**：爆燃，由高壓高溫引致。`,
mcq:[
{q:"How many crankshaft revolutions complete one four-stroke cycle?",o:{A:"One",B:"Two",C:"Three",D:"Four"},a:"B",why:"Two revolutions, or 720 degrees.",zh:"一個 cycle 曲軸轉兩圈。"},
{q:"Compression ratio is:",o:{A:"Clearance volume ÷ total volume",B:"Total volume ÷ clearance volume",C:"Manifold pressure ÷ ambient pressure",D:"Fuel mass ÷ air mass"},a:"B",why:"Total cylinder volume divided by clearance volume.",zh:"總容積除以 clearance volume。"},
{q:"Which is a likely cause of detonation?",o:{A:"Rich mixture and low power",B:"Low-octane fuel and overheating",C:"Using carburettor heat on the ground",D:"A cold engine at idle"},a:"B",why:"Detonation comes from excess pressure and temperature in the cylinder.",zh:"低 octane 同過熱都會引致 detonation。"}
]},
{id:"ln.agk.ignition",k:"agk",n:3,t:"Ignition",g:"Ignition",lesson:"agk-1-3",src:["AGK02","C172SP POH"],
rec:["點解 magneto 唔靠 aircraft electrical？","點解要 dual ignition？","Ignition switch 打 OFF 實際做咗咩？","Hot magneto 係咩？點解危險？"],
rl:["agk-1-3","agk-1-3","agk-1-3","agk-1-3"],
notes:`## 1. Magneto
- 旋轉 magnet 喺 coil 感應電流；**primary circuit** 加 breaker、condenser，**secondary circuit** 升到高壓，經 **distributor** 分配去 spark plug。
- **Self-contained**：唔連 aircraft electrical，alternator 同 battery 壞晒 engine 都繼續運行。

## 2. Dual ignition
兩個 magneto、每個 cylinder 兩粒 plug。
- **Redundancy**：壞一個都仲有 spark。
- **燃燒更完全更快** → 更好 performance。
- C172SP：**R mag** 燒 lower right + upper left；**L mag** 燒 lower left + upper right。

## 3. Ignition switch 同 P-lead
> 重點：Switch 唔係「接通」magneto，而係**將 primary circuit 接地（ground）令佢停**。
- 檔位：OFF／R／L／BOTH／START。
- **Mag check**：揀 R／L 時睇 RPM drop。
- **P-lead 斷** → 打 OFF 都接唔到地 → **hot magneto**：有人郁 prop 都可能點火。所以永遠當 prop 係 live。`,
sum:`- Magneto **self-contained**，唔靠 aircraft electrical。
- Dual ignition：**redundancy + 更好燃燒**。
- OFF = **ground primary circuit**。
- P-lead 斷 = **hot mag**，當 prop live。`,
mcq:[
{q:"Turning the ignition switch OFF:",o:{A:"Disconnects the battery",B:"Grounds the magneto primary circuit",C:"Closes the fuel selector",D:"Opens the secondary circuit at the plugs"},a:"B",why:"Grounding the primary circuit stops the spark.",zh:"OFF 係將 primary circuit 接地。"},
{q:"If the P-lead is broken, the magneto:",o:{A:"Cannot produce a spark",B:"May stay live even with the switch OFF",C:"Drains the battery",D:"Runs only on the left bank"},a:"B",why:"It can no longer be grounded, so the propeller could fire if turned.",zh:"接唔到地，所以打 OFF 都可能有電。"}
]},
{id:"ln.agk.fuel",k:"agk",n:4,t:"Fuel & Induction",g:"Fuel & Induction",lesson:"agk-1-4",src:["AGK01–02","C172SP POH","DA40 AFM","PHAK"],
rec:["由 tank 到 engine，fuel 行咩路線？","Carburettor 入面 throttle 同 mixture 各控制咩？","Carb ice 有邊三種？點解暖天都會有？","Carb heat 點用？點解 power 會跌？","Octane 量度咩？AVGAS 各色係咩？","Preflight 喺邊度抽 fuel？點解要 drain？","轉 tank 要注意咩？"],
rl:["agk-1-4","agk-1-4","agk-1-4","agk-1-4","agk-1-5","agk-1-5","agk-1-5"],
notes:`## 1. Fuel system
**Tank → selector → strainer → electric aux／boost pump → engine-driven pump → carburettor 或 fuel injection**
- **Aux pump**：prime、engine pump 壞時供壓、幫手處理 vapour。
- **Strainer**：濾水同雜質。
- **Vent**：防 tank 內形成真空。

## 2. Carburettor
- **Venturi** 令空氣加速 → pressure 跌 → 由 discharge nozzle 抽油。
- **Throttle** = butterfly valve，控**混合氣數量**。
- **Mixture** = needle，控 **fuel-air ratio**。
- Float chamber 控油面。

## 3. Carburettor icing
三種：**impact (induction) ice、fuel evaporation ice、throttle ice**。
- Fuel 蒸發同 venturi 減壓都會**降溫**，所以**暖天濕空氣都會結冰**（OAT 高過 0°C 幾度都可以）。
- 症狀：RPM 跌、engine rough。

## 4. Carburettor heat
- 用熱空氣融冰，hot air **繞過 air filter**。
- 熱空氣密度低，mixture 變 rich，**power 跌**。
- 開 carb heat 後 **RPM 先跌後升 = 有冰而家融緊**。
- C172SP 係 fuel injected，**冇 carb heat**（冇 carburettor）。

## 5. Mixture、EGT、CHT
- **Rich**：冷卻好，耗油多。**Lean**：慳油，EGT 升。
- 下降、落地、go-around、高 power 之前 **full rich**（以機型 POH／AFM 為準）。
- **EGT**：排氣溫度，最準反映 mixture。
- **CHT**：缸頭溫度，反映 power stroke 熱量。DA40 CHT max 500°F。

## 6. Octane 同 fuel grade
Octane 係**抗 detonation 能力**，唔係能量。
| Grade | 顏色 |
| AVGAS 80 | Red |
| AVGAS 100 | Green |
| AVGAS 100LL | Blue |
| Jet A | Colourless／straw |
- **Jet A 唔可以入 piston engine**。用錯低 octane → detonation。
- MOGAS 揮發性高，除非有批准唔用。

## 7. Fuel contamination
- 最常見係**水**。每次飛前由 **strainer 同各 tank sump** 抽到透明容器檢查。
- 見到水：重複 drain 到清，必要時搖翼。
- 夜晚 tank 入滿啲 → 空間少 → **condensation 少**。

## 8. Fuel selector 同 tank management
- 揀錯 tank 係 **fuel starvation** 常見原因。
- 唔好飛乾一個 tank：空氣入 system，可引致難以清除嘅 **vapour lock**。
- 轉 tank 前開 boost pump，之後睇 fuel pressure；唔好喺低空轉。
- 留意 placard（例如 level flight only）。`,
sum:`- **Tank → selector → strainer → aux pump → engine pump → carb／injection**。
- **Throttle** 控量，**mixture** 控比例。
- Carb ice：暖濕天都會有；**RPM 跌、rough**；carb heat 後 **RPM 先跌後升**。
- **Octane = 抗 detonation**：80 紅、100 綠、100LL 藍。
- 飛前 drain 水；唔好飛乾 tank。`,
mcq:[
{q:"Applying carburettor heat with ice present, RPM will typically:",o:{A:"Rise immediately and stay high",B:"Fall, then rise as the ice melts",C:"Stay exactly the same",D:"Fall and stay low permanently"},a:"B",why:"Hot air reduces power first; recovery comes as the ice melts.",zh:"先跌後升代表有冰喺度融。"},
{q:"Octane rating measures:",o:{A:"Energy content",B:"Resistance to detonation",C:"Fuel density",D:"Flash point only"},a:"B",why:"Octane is resistance to detonation, not energy content.",zh:"Octane 係抗 detonation，唔係能量。"},
{q:"The colour of AVGAS 100LL is:",o:{A:"Red",B:"Green",C:"Blue",D:"Straw"},a:"C",why:"100LL is dyed blue.",zh:"100LL 係藍色。"},
{q:"Why keep tanks full overnight?",o:{A:"To raise octane",B:"To reduce condensation",C:"To warm the fuel",D:"To improve vapour pressure"},a:"B",why:"Less air space means less water forming in the tank.",zh:"空間少，condensation 就少。"}
]},
{id:"ln.agk.oil",k:"agk",n:5,t:"Oil, Cooling, Exhaust",g:"Oil, Cooling, Exhaust",lesson:"agk-1-6",src:["AGK02","C172SP POH","PHAK"],
rec:["Engine oil 五大功能係咩？","15W50 係咩意思？","Oil pressure 低但 temperature 正常代表咩？又高溫又低壓呢？","CHT 高，空中可以做咩？","Cabin heat 點解有 CO 風險？"],
rl:["agk-1-6","agk-1-6","agk-1-6","agk-1-6","agk-1-6"],
notes:`## 1. Oil 功能
五大功能：**Lubricate、Cool、Clean、Seal、Protect**（防 corrosion）。
- **Viscosity** 係最重要特性：高溫變稀、低溫變稠。
- **15W50**：multigrade，凍時似 15-weight，熱時唔會稀過 50-weight。

## 2. 睇 indication
- 三樣：**oil pressure、temperature、quantity**。
- C172SP：pressure min 20 psi、green **50–90 psi**、max 115 psi；temperature max 245°F。

| 情況 | 可能原因 |
| 低壓 | 油少、漏油、pump 弱、PRV 卡開 |
| 高溫 | 油少、cooler 塞、cylinder 過熱 |
| 低壓 + temperature 正常 | 可能係 gauge 壞，繼續監察兩樣 |
| 高溫 + 低壓 | **嚴重**：可能失油，減 power、盡快落地 |
- 起動後大約 **30 秒內**冇 oil pressure → **shut down**。
- 漸漸漏油：temperature 先升，之後 pressure 突然跌。

## 3. Cooling
- **高 power + 低速**最難冷卻，所以 take-off 同 climb 最危險。
- CHT 高時：**開 cowl flaps、enrich mixture、加 airspeed（lower the nose）、減 power**。

## 4. Exhaust 同 CO
- Cabin heat 常用 exhaust muff 加熱；**muff 裂 → carbon monoxide 入 cabin**。
- CO **無色無味**，靠 detector（例如 dark spot）。
- 懷疑時：**關 heat、開風、盡快落地**。`,
sum:`- Oil：**Lube、Cool、Clean、Seal、Protect**；viscosity 最重要。
- **高溫 + 低壓 = 嚴重**：減 power、盡快落地。
- 起動 30 秒無 oil pressure → 關機。
- CHT 高：**cowl flaps、rich、加速、減 power**。
- CO 無色無味：關 heat、開風、落地。`,
mcq:[
{q:"High oil temperature with low oil pressure most likely indicates:",o:{A:"A normal cold start",B:"A serious problem such as oil loss",C:"Too rich a mixture",D:"A faulty magneto"},a:"B",why:"Reduce power and land as soon as possible.",zh:"又高溫又低壓好大機會失油。"},
{q:"To reduce high CHT in flight you should:",o:{A:"Lean the mixture and slow down",B:"Close cowl flaps and add power",C:"Open cowl flaps, enrich and increase airspeed",D:"Climb at low speed"},a:"C",why:"More airflow and richer mixture cool the engine.",zh:"多氣流加 rich mixture 幫手冷卻。"}
]},
{id:"ln.agk.prop",k:"agk",n:6,t:"Propeller",g:"Propeller",lesson:"agk-1-7",src:["AGK04–05","C172SP POH"],
rec:["點解 fixed-pitch prop 效率有限？","CSU 點樣保持 RPM？","Throttle 同 prop lever 各控制咩？"],
rl:["agk-1-7","agk-1-7","agk-1-7"],
notes:`## 1. Fixed-pitch propeller
- Blade 只有一個角度，**只喺一個 speed／RPM 最高效**，其餘時間都係妥協。
- Ground-adjustable 都算 fixed。
- Fixed-pitch 機：**RPM 就係 power 指示**。
- C172SP：two-blade、**76 in** McCauley。

## 2. Constant Speed Unit (CSU)
Governor 調 oil 去 hub 改 pitch，**保持你揀嘅 RPM**。
- 零件：**pilot valve、speeder spring、flyweights、governor oil pump**（engine-driven）。
- **Prop lever** 設 **RPM**。
- **Throttle** 設 **MAP**（manifold pressure）。`,
sum:`- Fixed pitch：只喺一個 speed 最高效；RPM = power。
- CSU：governor 用 oil pressure 改 pitch，保持 RPM。
- **Prop lever → RPM；throttle → MAP**。`,
mcq:[
{q:"With a constant speed propeller, the propeller lever selects:",o:{A:"Manifold pressure",B:"RPM",C:"Mixture",D:"Fuel flow"},a:"B",why:"The governor holds the selected RPM; the throttle sets MAP.",zh:"Prop lever 揀 RPM，throttle 設 MAP。"},
{q:"Which is NOT a main governor part?",o:{A:"Pilot valve",B:"Speeder spring",C:"Flyweights",D:"Float chamber"},a:"D",why:"A float chamber belongs to a carburettor.",zh:"Float chamber 係 carburettor 嘅零件。"}
]}
]);
