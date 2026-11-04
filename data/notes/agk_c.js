// 學習筆記 AGK Level 3（Warning Systems → Oxygen）。內容整理自 data/agk.js 嘅 Must know topics（AGK11、C172SP POH、PHAK、ATP）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.agk.warn",k:"agk",n:13,t:"Warning Systems",g:"Warning Systems",lesson:"agk-3-1",src:["AGK11 Warning System"],
rec:["三級 alert 係咩？各要幾快行動？","CS 25.1322 嘅顏色係咩？","GPWS 同 EGPWS 有咩分別？","TCAS TA 同 RA 有咩分別？","Windshear escape manoeuvre 係點做？"],
rl:["agk-3-1","agk-3-1","agk-3-1","agk-3-1","agk-3-1"],
notes:`## 1. Warning classes
| Level | 顏色 | 行動 |
| Warning | Red | 即時 |
| Caution | Amber | 盡快 |
| Advisory | － | 方便時 |
- CS 25.1322：red warning、amber caution、green safe operation。
- 通常 aural + visual。

## 2. Fire 同 yaw damper
- Engine fire：受影響 engine **steady red light + bell**。
- Fire bell 喺部分機型 take-off 至 400 ft AGL 有 inhibit（以 FCOM 為準）。
- Yaw damper inop：amber light，即 dutch roll 控制有故障。

## 3. GPWS 同 EGPWS
- 警告**接近地形**：take-off 後 sink、clearance 不足、closure rate、below glideslope。
- Inputs：airspeed、baro、**radio altimeter**、G/S、flap。
- GPWS 靠 radio altimeter，**睇唔到前面**；**EGPWS 加 look-ahead terrain** alert 同 display。

## 4. TCAS
- **TA**（約 40 秒前）：「Traffic」，**唔指令動作**。
- **RA**（約 25 秒前）：「Climb」／「Descend」，**vertical manoeuvre**。
- 解除：「Clear of Conflict」。
| Symbol | 意思 |
| 白色空心 diamond | Other traffic |
| 白色實心 diamond | Proximate |
| Amber circle | TA |
| Red square | RA |

## 5. Windshear
- 分 **predictive** 同 **reactive**（GPWS Mode 7）。
- 徵兆：siren／call，或超出限度，例如 15 kt、500 fpm、5° pitch。
- **Escape**：**AP off、TO/GA、max thrust、wings level、pitch 約 15°、收 speedbrakes、唔好郁 gear 同 flap**。`,
sum:`- **Warning 紅即時；caution 琥珀盡快；advisory 方便時**。
- EGPWS 比 GPWS 多 look-ahead。
- **TA 只提示；RA 指令 vertical manoeuvre**。
- Windshear：AP off、TO/GA、max thrust、約 15°、唔郁 gear／flap。`,
mcq:[
{q:"A TCAS Traffic Advisory (TA):",o:{A:"Commands a climb",B:"Commands a descent",C:"Alerts the crew with no manoeuvre commanded",D:"Is shown as a red square"},a:"C",why:"An RA gives the manoeuvre; a TA only alerts.",zh:"TA 只提示，唔指令動作。"},
{q:"EGPWS differs from basic GPWS because it:",o:{A:"Has no radio altimeter input",B:"Adds look-ahead terrain alerting",C:"Works only on the ground",D:"Replaces TCAS"},a:"B",why:"Basic GPWS cannot see ahead.",zh:"EGPWS 加咗 look-ahead。"},
{q:"During a windshear escape you should:",o:{A:"Retract flaps at once",B:"Retract gear at once",C:"Keep gear and flaps as they are",D:"Engage the autopilot"},a:"C",why:"AP off, TO/GA, max thrust, and do not change gear or flaps.",zh:"唔好改 gear 同 flap。"}
]},
{id:"ln.agk.c172",k:"agk",n:14,t:"Aircraft Types",g:"Aircraft Types",lesson:"agk-3-2",src:["C172SP POH"],
rec:["C172SP 用咩 engine？幾多 hp？","C172SP fuel capacity 係幾多？","Oil sump、vacuum 同 electrical 數字係咩？"],
rl:["agk-3-2","agk-3-2","agk-3-2"],
notes:`## C172SP 快速數字
| 項目 | 數字 |
| Engine | Lycoming **IO-360-L2A**，fuel injected，水平對置四缸 |
| Power | **180 BHP @ 2700 RPM** |
| Propeller | Fixed pitch，two-blade，76 in |
| Fuel | **56 US gal total、53 usable**、3 unusable；每邊 28 gal |
| Oil sump | 8 qt |
| Electrical | 28 V DC、24 V battery、50 A alternator |
| Vacuum | 4.5–5.5 inHg |

- Fuel injected → **冇 carburettor，亦都冇 carb heat**。
- 以上數字來自 POH，唔同年份機身要對返該機 POH。`,
sum:`- **IO-360-L2A、180 BHP @ 2700 RPM**、fuel injected、fixed pitch。
- **56 gal total、53 usable**。
- 28 V DC；vacuum 4.5–5.5 inHg；oil 8 qt。`,
mcq:[
{q:"C172SP usable fuel is:",o:{A:"28 US gal",B:"50 US gal",C:"53 US gal",D:"56 US gal"},a:"C",why:"56 total, 53 usable, 3 unusable.",zh:"Usable 係 53 gal。"}
]},
{id:"ln.agk.fc",k:"agk",n:15,t:"Flight Controls",g:"Flight Controls",lesson:"agk-3-3",src:["PHAK","ATP"],
rec:["Primary flight controls 有邊啲？","Secondary controls 有邊啲？","Stabilator 同 ruddervator 係咩？","Fowler flap 點解最有效？Slat 點樣延遲 stall？","Ground spoiler 點解幫到刹車？"],
rl:["agk-3-3","agk-3-3","agk-3-3","agk-3-3","agk-3-3"],
notes:`## 1. Primary controls
- **Aileron、elevator、rudder**。
- 連接：cable + pulley 或 push-pull rod；操作用 column、yoke、side-stick。
- **Stabilator**：全動 tailplane，當 elevator 用。
- **Ruddervator** 都算 primary。
- 泊機用 control lock 防風；flight control check 係 preflight 最重要之一。

## 2. Secondary controls
- **Tabs、flaps、slats、spoilers**。
- Tabs：減操作力或 trim。
- High-lift device：**CLmax 上升、stall speed 下降**。

## 3. Flap 同 slat
| Device | 原理 |
| Plain | 簡單向下折 |
| Split | 下面一片向下 |
| Slotted | 氣流過 slot，延遲 separation |
| Fowler | **後移 + 下折**：加面積又加 camber |
| Slat | 開 gap，高能量氣流上翼面，延遲 stall |
| Krueger | 前緣向下增 camber |

## 4. Spoilers
- **Flight spoiler**：單邊升助 roll；同時升減速或急降。
- **Ground spoiler**：靠 gear 感應；破壞 lift，將重量壓落 wheels，brake 更有效。
- Spoiler **唔增加 lift**。`,
sum:`- Primary：**aileron、elevator、rudder**。
- Secondary：**tabs、flaps、slats、spoilers**。
- Fowler：加面積 + camber。Slat：延遲 stall。
- Ground spoiler：破壞 lift，brake 更有效。`,
mcq:[
{q:"Which is a primary flight control?",o:{A:"Flap",B:"Spoiler",C:"Rudder",D:"Slat"},a:"C",why:"Primary controls are ailerons, elevator and rudder.",zh:"Rudder 係 primary。"},
{q:"A Fowler flap increases lift mainly by:",o:{A:"Adding only drag",B:"Increasing wing area and camber",C:"Reducing wing area",D:"Blowing engine air over the wing"},a:"B",why:"It moves aft and down.",zh:"Fowler 後移加面積，下折加 camber。"},
{q:"Ground spoilers help braking because they:",o:{A:"Add thrust",B:"Destroy lift and put weight on the wheels",C:"Cool the brakes",D:"Increase tyre pressure"},a:"B",why:"More weight on the wheels makes the brakes work better.",zh:"破壞 lift，令 wheels 受力。"}
]},
{id:"ln.agk.oxy",k:"agk",n:16,t:"Oxygen & Cabin Pressure",g:"Oxygen & Cabin Pressure",lesson:"agk-3-4",src:["PHAK","FAA 例子（未核對 CASA／HK CAD）"],
rec:["點解 altitude 高會 hypoxia？","FAA 例子嘅 oxygen 要求係點？","PHAK 建議幾高用 oxygen？"],
rl:["agk-3-4","agk-3-4","agk-3-4"],
notes:`## 1. Hypoxia 原因
- Altitude 越高，**oxygen partial pressure 越低**，就算 oxygen 比例冇變。

## 2. FAA 例子
| Cabin altitude | 要求 |
| 12,500–14,000 ft | Crew 超過 **30 分鐘**要用 |
| 14,000 ft 以上 | Crew **持續**用 |
| 15,000 ft 以上 | **所有乘員**都要有 |

- PHAK 建議：日間 10,000 ft、夜間 5,000 ft 以上考慮用。

> 我唔確定：呢度係 FAA 例子。CASA 同 HK CAD 數字唔同，考試前要對返官方 regulation。`,
sum:`- Hypoxia 因為 **oxygen partial pressure** 跌。
- FAA：12,500–14,000 ft 超 30 分鐘；14,000 ft 以上持續；15,000 ft 以上全部乘員。
- CASA／HK CAD 要另外核對。`,
mcq:[
{q:"In the FAA example, crew must use oxygen continuously above:",o:{A:"10,000 ft",B:"12,500 ft",C:"14,000 ft",D:"18,000 ft"},a:"C",why:"Above 14,000 ft cabin altitude crew use it continuously.",zh:"14,000 ft 以上持續用。"}
]}
]);
