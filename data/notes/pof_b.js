// 學習筆記 POF 第二批：Flight Controls、High-Lift & Trim。中文為主、tech term 英文。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.controls",k:"pof",n:7,t:"Flight Controls",g:"Flight Controls",lesson:null,src:["ENZO 02 / 11 / 14","Airspace POF02–03","PHAK ch5–6","ATP Test Prep ch3","RPL ch6"],
rec:["三條 axis 係咩？每條對應邊個 control 同 motion？","Aileron 嘅 primary、secondary effect 係咩？Adverse yaw 點解出現？","點樣減少 adverse yaw？（pilot 同設計兩方面）","Rudder 嘅 primary 同 secondary effect 係咩？Rudder 係咪用嚟 turn？","Control effectiveness 受咩影響？接近 stall 時點變？","Jet 點解用 hydraulic flight controls？Spoilers 做咩？"],
rl:[null,null,null,null,null,null],
notes:`## 1. 三條 axis 同 control
| Axis | Motion | Control | 備註 |
| Longitudinal（nose 至 tail） | Roll | Aileron | 圍繞 CG |
| Lateral（wingtip 至 wingtip） | Pitch | Elevator | 圍繞 CG |
| Normal / vertical | Yaw | Rudder | 圍繞 CG |
- 三條 axis 全部穿過 **CG**。Control surface 產生 force，force × arm ＝ **moment**，moment 令飛機繞 axis 轉。
- Control 動得愈遠、愈快，moment 愈大，rate 愈高。

## 2. Primary、secondary、further effect
| Control | Primary | Secondary | Further（唔糾正會發生） |
| Elevator | Pitch | AoA、IAS、altitude 變 | Speed／attitude 持續漂移 |
| Aileron | Roll | Adverse yaw | Bank 持續 → spiral dive |
| Rudder | Yaw | Roll（外側 wing 快啲，lift 多啲） | Bank 增加 → spiral dive |
| Power | Pitch、yaw（slipstream、torque 等） | IAS 變 | 要 re-trim |
- 重點：**一個 control 好少只有一個 effect**，所以飛行時要識「預期 secondary effect 並抵消」。
- Rudder **唔係** turn 嘅力：turn 靠 bank 令 lift 傾斜；rudder 係令 turn 保持 coordinated。

## 3. Aileron 同 Adverse yaw
- Aileron 差動：一邊 aileron 向下（該邊 lift 多、camber 大），另一邊向上（lift 少）。
- **Adverse yaw**：向下 aileron 嘅 wing lift 多 → **induced drag 都多** → 該 wing 被拖後 → nose yaw 向 turn **相反**方向。
- 低速、大 AoA、大 aileron 動作時最明顯。
- 處理：
  - Pilot：**coordinated rudder**（向 turn 方向踩 rudder），睇 ball 同 slip indicator。
  - 設計：**Differential ailerons**（向上偏轉多過向下）、**Frise ailerons**（向上 aileron 前緣突出，增加 drag 去平衡）、coupled aileron-rudder。
- 部分機型用 differential 或 Frise aileron，以機型 POH 為準。

## 4. Elevator、Rudder 同 tail 設計
- Elevator：back stick → nose up。Level flight 時 tail 通常出 **downforce** 平衡 wing 嘅 pitching moment。
- Rudder 同 elevator 喺 propeller 機會受 **slipstream** 影響，所以低速大 power 時都仲有 authority；aileron 就唔係。
| Tail 種類 | 重點 |
| Conventional | 最普遍 |
| T-tail | 避開 wing wake；高 AoA 要留意 tail 受 disturbed airflow（deep stall 風險） |
| Stabilator | 整塊 horizontal stabilizer pivot 做 elevator |
| Canard | 前翼都出 lift |
| V-tail | Ruddervator 同時做 pitch 同 yaw |
- 「待驗證」：個別 tail 嘅 stall 特性要睇 POH／教材原文。

## 5. Control effectiveness
- **IAS 愈高**，舵面受嘅 dynamic pressure 愈大 → 愈有效；低速要用更大動作。
- 接近 stall：control 變軟（mushy）、response 慢，因為 airflow 慢同開始 separate。
- 高速：細動作就夠，防 overstress（過大 load factor）。
- Propeller slipstream 增強 rudder 同 elevator，aileron 通常唔受益。

## 6. Jet：Powered controls 同 Spoilers
- Jet 嘅 aerodynamic load 大，人力推唔郁，用 **hydraulic actuator** 推舵面；通常有 backup 或 **manual reversion**（用 tab 輔助）。
- 常見設計（ATP 教材）：inboard aileron 全程用，**outboard aileron 只喺 flaps 放出（低速）時用**，高速鎖住以防 aileron reversal 同 wing twist（以機型為準）。
- **Spoilers**：減 lift 同加 drag，同 high-lift device 相反。
  - Flight spoiler：單邊升起幫 roll，雙邊升起做 speedbrake。
  - Ground spoiler：着陸後 dump lift，令 wheel brake 更有效。
- Sideslip／slipping turn（cross controls）：bank 加反向 rudder，加 drag 令下降更陡而唔加速；用於 forced landing 或無 flaps 嘅機。`,
sum:`- 三軸：**Roll（aileron／longitudinal）、Pitch（elevator／lateral）、Yaw（rudder／normal）**，全部過 **CG**。
- **Adverse yaw** 來自向下 aileron 嘅 induced drag；用 coordinated rudder 或 differential／Frise ailerons 減。
- **Rudder** 控制 yaw，secondary effect 係 roll；turn 靠 bank，rudder 負責 coordinated。
- Control effectiveness 隨 **IAS** 同 **slipstream** 升；接近 stall 變軟。
- Jet 用 **hydraulic actuators**；**spoilers** 減 lift 加 drag，可做 roll 同 speedbrake。`,
mcq:[
{q:"Which axis does the aileron rotate the aircraft about?",o:{A:"Lateral axis",B:"Longitudinal axis",C:"Normal axis",D:"Vertical axis through the wingtip"},a:"B",why:"Ailerons produce roll, which is rotation about the longitudinal axis.",zh:"Aileron 係 roll，圍繞 longitudinal axis。"},
{q:"What is the primary effect of the elevator?",o:{A:"Roll",B:"Yaw",C:"Pitch",D:"Spiral dive"},a:"C",why:"The elevator changes pitch about the lateral axis.",zh:"Elevator 控制 pitch。"},
{q:"Adverse yaw is mainly caused by:",o:{A:"The rudder being too large",B:"Higher induced drag on the wing with the down-going aileron",C:"Propeller torque only",D:"The CG being too far forward"},a:"B",why:"The wing producing more lift also produces more induced drag, so it is pulled back and the nose yaws opposite to the turn.",zh:"向下 aileron 嘅 wing induced drag 多。"},
{q:"Which design feature helps reduce adverse yaw?",o:{A:"Frise ailerons",B:"Spoilers on both wings",C:"A T-tail",D:"Larger flaps"},a:"A",why:"A Frise aileron's protruding nose on the up-going side adds drag to balance the down-going side. Differential ailerons work in a similar way.",zh:"Frise aileron 令向上嗰邊 drag 增加。"},
{q:"What is the secondary effect of applying rudder?",o:{A:"Pitch down",B:"No secondary effect",C:"Increase in lift on both wings",D:"Roll in the direction of yaw"},a:"D",why:"The outer wing moves faster and makes more lift, producing roll.",zh:"Yaw 令外側 wing 快啲，所以產生 roll。"},
{q:"A turn is initiated primarily by:",o:{A:"Rudder",B:"Elevator",C:"Banking so that lift is tilted",D:"Increasing thrust"},a:"C",why:"Tilted lift provides the horizontal component. Rudder only keeps the turn coordinated.",zh:"Turn 靠 bank 令 lift 傾斜。"},
{q:"As an aircraft approaches the stall, control effectiveness generally:",o:{A:"Increases",B:"Stays the same",C:"Decreases and the controls feel soft",D:"Is lost only on the rudder"},a:"C",why:"Lower airspeed and starting flow separation reduce control authority.",zh:"接近 stall，control 變軟。"},
{q:"Which statement about spoilers is correct?",o:{A:"They increase lift and reduce drag",B:"They reduce lift and increase drag",C:"They only work on the ground",D:"They replace the elevator"},a:"B",why:"Spoilers disrupt the airflow over the wing, dumping lift and adding drag. Flight spoilers can also assist roll.",zh:"Spoilers 減 lift 加 drag。"}
]},
{id:"ln.pof.highlift",k:"pof",n:8,t:"High-Lift & Trim",g:"High-Lift & Trim",lesson:null,src:["Airspace POF02","ENZO 02 / 11","AGK10 slides","PHAK ch6","ATP Test Prep ch3"],
rec:["Flaps 點樣改變 lift 同 drag？對 stall speed 同 stall AoA 有咩影響？","Plain、split、slotted、Fowler flaps 有咩分別？","Slats、slots、Krueger flap 做咩？點解 swept-wing jet 需要？","放 flaps 時為何 nose 會 balloon？點處理？","Trim tab 點運作？點解 tab 動向同 control surface 相反？","Servo、balance、anti-servo tab 分別係咩？Select–Hold–Trim 係咩？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Flaps 做咩
- 放 flaps 令 wing **camber** 增加（部分類型亦加 **wing area**）→ **CLmax 上升** → 同一 weight 嘅 **stall speed 下降**。
- 代價：**drag 上升**；而且 **critical AoA 通常下降**（CL–α curve 上移，但 stall 嘅 α 較細）。
- 結果：approach 可以用較低 speed、較斜 glide path，landing roll 縮短。
![flaps 令 CL 上移；stall AoA 通常較細（FAA PHAK Fig 5-5 係 clean wing 基本 curve）](img/phak/lift-drag-curve.png)

## 2. Take-off flap vs Landing flap
| 位置 | 特性 | 用途 |
| Take-off flap（細角度） | lift 增加多、drag 增加少 | 縮短 ground roll，保持 climb performance |
| Landing flap（大角度） | drag 增加多 | 令 approach 更斜、更低速 |
- 每個 flap setting 都有自己嘅 **VFE**（最大 flap 延伸速度），數值以機型 POH 為準，唔好記死。
- 操作：先查 speed 喺 **VFE** 以下 → 選 → 確認 flaps 位置。逐格放，唔好一次放曬。

## 3. Flap 類型
| 類型 | 結構 | 效果 |
| Plain | 後緣 hinge 向下 | 最簡單，CLmax 增加最少 |
| Split | 只有下表面向下 | 加 camber，drag 大 |
| Slotted | 向下時留縫，高能量 airflow 經縫 | 延遲 separation，增益較大 |
| Fowler | 後滑加 wing area + camber（可 slotted） | 增益最大，大型機常用 triple-slotted Fowler |
- 一般排序：Plain < Split < Slotted < Fowler（CLmax 增益）。

## 4. 前緣 device
- **Slat**：前緣可動，向前開出縫，高能量 airflow 經縫流過上翼面 → 延遲 separation → **stall AoA 升高**。
- **Fixed slot／leading-edge cuff**：固定嘅縫或加大前緣。
- **Krueger flap**：由前緣下面伸出，增加 camber。
- **Swept-wing jet** 嘅 CLmax 本身較低，需要強勁嘅 slats + slotted／Fowler flaps，起降 speed 先唔會太高。

## 5. 放／收 flaps 嘅 pitch 變化
- 放 flaps 時 lift 突然增加 → fuselage **balloon**（上飄），同時 pitching moment 改變（nose 上或下視乎機型，「待驗證」，睇 POH）。
- 處理：預期並推桿／配合 power，**之後 re-trim**；唔好靠 trim 去即時壓低 nose。
- 收 flaps：要確認 **positive rate of climb** 同 speed 夠，否則 lift 降低會 sink。
- Power、IAS、flap 改變都會令 trim 變；Piston 單發機 power 加通常 nose up 同向左 yaw（視機型）。

## 6. Trim tabs 同其他 tabs
- **Trim tab**：細舵面裝喺大舵面後緣，**動向同大舵面相反**，令 airflow 力矩幫手將大舵面保持喺要嘅位置 → 消除 control force，唔使一直用力。
  - 例：要 nose-up trim → elevator 要向上 → trim tab 向下。
- **Servo tab**：由 pilot 直接動，tab 嘅力推動主舵面。
- **Balance tab**：同主舵面反向動，減輕 pilot 所需嘅力。
- **Anti-servo tab**：同主舵面同向動，加重 control force（stabilator 常見，增加穩定感）。
- **Control tab**：manual reversion 時 pilot 用嚟動舵面。
- **Ground-adjustable tab**：地面調較，空中唔郁。
- **Select–Hold–Trim**：先揀 attitude + power → hold 到 speed 穩定 → trim 消除力。**唔好用 trim 改 attitude**；改 power／IAS／config 就再 trim。
- 好多輕型機只有 elevator trim（以機型 POH 為準）。`,
sum:`- **Flaps**：camber（或 area）增加 → **CLmax 升、stall speed 降**，但 **drag 升、stall AoA 通常降**。
- T/O flap lift 多 drag 少；LDG flap drag 多。放之前查 **VFE**，逐格放。
- 類型：**Plain < Split < Slotted < Fowler**；**Slats／Krueger** 延遲前緣 separation。
- 放 flaps 會 balloon，要推桿並 re-trim；收 flaps 要有 positive climb。
- **Trim tab** 反向動去消除 control force；用 **Select–Hold–Trim**，唔好用 trim 去改 attitude。`,
mcq:[
{q:"Extending flaps normally has which effect?",o:{A:"Increases stall speed",B:"Decreases CLmax",C:"Increases CLmax and decreases stall speed",D:"Reduces drag"},a:"C",why:"More camber (and area) gives more lift at low speed but also more drag.",zh:"CLmax 升，stall speed 降，drag 升。"},
{q:"Compared with a take-off flap setting, a landing flap setting mainly produces:",o:{A:"More lift and less drag",B:"More drag to allow a steeper approach",C:"No change in drag",D:"A higher stall speed"},a:"B",why:"Large flap angles add significant drag so the approach can be steeper at low speed.",zh:"Landing flap 主要增加 drag。"},
{q:"Which flap type increases both camber and wing area?",o:{A:"Plain flap",B:"Split flap",C:"Fowler flap",D:"Fixed slot"},a:"C",why:"A Fowler flap slides rearward as it deflects.",zh:"Fowler 後滑，加 area。"},
{q:"What does a leading-edge slat do?",o:{A:"Increases parasite drag only",B:"Delays flow separation so the stall AoA is higher",C:"Dumps lift on landing",D:"Lowers the critical AoA"},a:"B",why:"The slot directs high-energy air over the upper surface.",zh:"延遲 separation。"},
{q:"Why do swept-wing jets need powerful slats and slotted flaps?",o:{A:"Sweep increases maximum CL",B:"Sweep reduces maximum CL, so take-off and landing speeds would otherwise be too high",C:"They have no ailerons",D:"To reduce Mach number"},a:"B",why:"High-lift devices recover the CLmax lost to sweep.",zh:"Sweep 令 CLmax 下降。"},
{q:"Applying flaps in flight typically causes the aircraft to:",o:{A:"Balloon because lift suddenly increases",B:"Sink immediately",C:"Roll to the left",D:"Increase its stall speed"},a:"A",why:"Lift increases, so the pilot must anticipate it and re-trim.",zh:"Lift 增加，所以 balloon。"},
{q:"For a nose-up trim input on an elevator trim tab, the tab moves:",o:{A:"Up, same as the elevator",B:"Not at all",C:"Sideways",D:"Down, opposite to the desired elevator movement"},a:"D",why:"The tab moves opposite so the elevator is aerodynamically pushed up.",zh:"Tab 與舵面反向。"},
{q:"Which statement about Select–Hold–Trim is correct?",o:{A:"Select attitude and power, hold it, then trim away the control force",B:"Use trim to change the aircraft's attitude",C:"Trim first, then choose power",D:"Trim is not needed with flaps"},a:"A",why:"Trim only removes control force after the attitude and power are set.",zh:"先 select、hold，之後 trim。"}
]}
]);
