// 學習筆記 POF（D 組）：Climb & Performance、Left-Turning Tendencies、Ground Effect & Wake。
// 中文為主、tech term 英文；rl＝null（暫時未有課堂）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.climb",k:"pof",n:11,t:"Climb & Performance",g:"Climb & Performance",lesson:null,src:["ENZO Flight Study Guide 04、12–14","PHAK ch5（圖）","Basic Aeronautical Knowledge ch6"],
rec:["Climb 嘅時候，forces 點平衡？Weight 有咩分力？","Vx 同 Vy 有咩分別？幾時用邊個？","Excess thrust 同 excess power 點決定 climb angle 同 rate？","Power curve 嘅 back of the power curve 係咩意思？","Weight、density altitude、wind、flaps 點影響 climb？","Best glide speed 係幾時？Max range 同 max endurance 有咩分別？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Climb 嘅 forces
- Steady climb：flight path 向上，**Thrust 要大過 Drag**，因為 **Weight 有一個向後嘅分力**（沿 flight path 方向）。
- 沿 flight path：**T = D + W sinγ**；γ ＝ climb angle。所以 **sinγ = (T − D) / W**。
- 垂直 flight path：**Lift ≈ W cosγ**，所以 steady climb 嘅 Lift 略細過 Weight（γ 細嘅時候差好少）。
- Descent 就相反：Weight 有向前嘅分力，所以 idle power 都可以維持 speed。

## 2. Power + Attitude = Performance
- **Attitude（pitch）** 主要定 **AoA 同 speed**；**Power** 主要定 **climb／descent rate**。
- 每個 IAS 喺 level flight 只有**一個** pitch attitude（要 Lift = Weight）。
- Climb：加 power 保持 speed、用 pitch 控制 IAS；Descent：pitch 定 speed，power 定 rate of descent。
- 唔好死記「pitch 定高度」：pitch 變咗，speed 先變，之後 flight path 先跟住變。

## 3. Vx、Vy 同 excess thrust／power
| | Vx | Vy |
| 目標 | 最大 climb **angle**（過障礙） | 最大 climb **rate**（最快到 altitude） |
| 來源 | **Excess thrust** (T − D) 最大 | **Excess power** 最大 |
| Speed | 較低 | 較高（Vx < Vy） |
- ENZO 教材數值：DA40 Vx 67 / Vy 76 KIAS；C172SP Vx 62 / Vy 74 KIAS（機型數值以 POH 為準）。
- Altitude 升：**Vx (IAS) 升、Vy (IAS) 降**，兩者喺 **absolute ceiling** 重合，之後 climb rate = 0。
- Service ceiling：FAA 定義為 climb rate 跌到 100 ft/min 嘅 altitude（FAA 體系定義；CASA／ICAO 是否一樣待驗證）。
![CL、CD 同 L/D 隨 AoA 變化（FAA PHAK Fig 5-5）：best L/D 喺某個 AoA。](img/phak/lift-drag-curve.png)

## 4. Power curve 同 back of the power curve
- **Min power speed** ≈ best **endurance**；**Min drag speed (L/Dmax)** ≈ best **range**／best glide。
- 慢過 min power speed：想慢，反而要**更多 power**（因為 induced drag 升得快）—— 呢個區叫 **back of the power curve**（region of reverse command）。
- 實際影響：approach 同 flare 附近，pitch 控制 speed 但 power 控制 descent；低速要預早加 power，唔好等 sink 出現先處理。
- 細節同圖形喺教材外 → 「待驗證」：不同機型 min power 同 min drag speed 嘅實際數值。

## 5. 影響 climb 嘅因素
| 因素 | Climb 表現 | 原因 |
| Weight ↑ | max rate ↓、Vy ↑ | excess power 少咗，要更多 lift |
| 高 density altitude | ↓ | engine power／propeller thrust 減少 |
| Flaps 放出 | ↓ | Drag ↑，excess 少 |
| Headwind | angle over ground ↑，**rate 不變** | rate 係睇時間 |
| Tailwind | angle over ground ↓，rate 不變 | 同上 |
- 同一個 IAS，高 altitude 嘅 TAS 更高，所以 groundspeed 變化唔係單睇 IAS。

## 6. Glide、Range 同 Endurance
- Glide（T = 0）：**sinθ = D / W**；**最細 drag ＝ 最平 glide angle**＝ best L/D speed。
- Weight 唔改 glide **angle／distance**，只係令 best glide speed 提高（rate 變快）。
- Headwind 縮短 glide distance；放 flaps 同 sideslip 都加 drag，令 glide 更陡。
- **Max range**：飛 L/Dmax speed（DA40 教材大約 4° AoA）；揀有 tailwind 嘅 altitude。**Max endurance**：飛最低 power 嘅 speed，piston 機低飛通常 endurance 好啲（待驗證，視機型）。`,
sum:`- Climb：**T > D**，因為 **Weight 有後向分力**；**sinγ = (T − D) / W**。
- Pitch 定 speed／AoA，power 定 rate；每個 IAS 只有一個 level pitch。
- **Vx** ＝ 最大 angle（excess thrust），**Vy** ＝ 最大 rate（excess power）；高 altitude 兩者靠近，absolute ceiling 重合。
- **Back of the power curve**：慢過 min power speed，減速要加 power。
- Headwind 改 climb angle over ground，**唔改 rate**；weight 唔改 glide angle。`,
mcq:[
{q:"In a steady climb along the flight path, which is correct?",o:{A:"Thrust equals Drag",B:"Thrust is greater than Drag because Weight has a rearward component",C:"Lift is much greater than Weight",D:"Drag is greater than Thrust"},a:"B",why:"T = D + W sinγ along the flight path.",zh:"Weight 有後向分力，所以 T > D。"},
{q:"Which speed gives the greatest angle of climb?",o:{A:"Vy",B:"Vne",C:"Best glide speed",D:"Vx"},a:"D",why:"Vx corresponds to maximum excess thrust and therefore the steepest climb gradient.",zh:"Vx 係最大 climb angle。"},
{q:"A headwind will:",o:{A:"Reduce the rate of climb",B:"Increase the climb angle over the ground, without changing rate of climb",C:"Increase the rate of climb",D:"Reduce the climb angle over the ground"},a:"B",why:"Rate of climb is measured against time, and wind only changes groundspeed.",zh:"Rate 睇時間，唔受 wind 影響。"},
{q:"With increasing altitude, Vx and Vy (IAS) tend to:",o:{A:"Both decrease",B:"Vx increases and Vy decreases, converging at the absolute ceiling",C:"Both stay constant",D:"Vx decreases and Vy increases"},a:"B",why:"Excess power falls with altitude, so the two speeds converge until the rate of climb is zero.",zh:"兩者靠近，absolute ceiling 重合。"},
{q:"Flying at the back of the power curve means:",o:{A:"Reducing speed requires more power to maintain level flight",B:"Higher speed requires less power",C:"The aircraft is at maximum range speed",D:"The aircraft cannot stall"},a:"A",why:"Below minimum power speed, induced drag rises rapidly as speed falls.",zh:"愈慢愈食 power。"},
{q:"What does increasing aircraft weight do to the maximum rate of climb?",o:{A:"It increases it",B:"It has no effect",C:"It reduces it",D:"It only affects the angle, not the rate"},a:"C",why:"A heavier aircraft has less excess power available.",zh:"Weight ↑ → excess power ↓。"},
{q:"Which statement about power and pitch attitude is the best summary?",o:{A:"Pitch controls rate and power controls speed in all cases",B:"Power sets altitude and pitch sets heading",C:"Pitch mainly sets speed/AoA and power mainly sets climb or descent rate",D:"Both control only airspeed"},a:"C",why:"Power + Attitude = Performance, and each IAS needs one pitch attitude in level flight.",zh:"pitch 定 speed，power 定 rate。"},
{q:"Which change will make a glide steeper?",o:{A:"A headwind",B:"Extending flaps",C:"Gliding at best L/D speed",D:"Lighter weight only"},a:"B",why:"Flaps add drag, lowering L/D and steepening the glide angle.",zh:"放 flaps 加 drag。"}
]},
{id:"ln.pof.ltt",k:"pof",n:12,t:"Left-Turning Tendencies",g:"Left-Turning Tendencies",lesson:null,src:["PHAK ch5","Airspace POF03","ATP ch3（Critical Engine）"],
rec:["Left-turning tendencies 有邊四個效應？","Torque reaction 點令飛機 roll 同 swerve？","Corkscrew slipstream 點影響 yaw？","Gyroscopic precession 點喺 take-off 出現？","P-factor 點產生？幾時最明顯？","Weathercocking 同 critical engine 係咩？"],
rl:[null,null,null,null,null,null],
notes:`## 1. 總覽
- 呢啲係**單 engine、propeller 順時針（由 cockpit 望）**嘅機常見效應，令 nose 傾向**向左**。
- 四個：**Torque reaction、Corkscrew slipstream、Gyroscopic precession、P-factor**。
- **高 power ＋ 低 speed ＋ 高 pitch attitude** 時最強（take-off、go-around、climb）；用 **rudder**（有時 trim）去修正。
- 若 propeller 轉向相反（例如部分機型），方向會反轉，要睇該機 POH。

## 2. Torque reaction
- Newton 第三定律：propeller 順時針轉，fuselage 受**逆時針反作用** → **roll 向左**。
- 地面：左輪承重多 → 左輪摩擦大 → take-off roll 傾向向左偏。
- 設計上有 offset（例如 engine 微調）或 aileron trim 去減輕；高 power 低速最強。
- 注意 torque 係 **roll** 傾向，同其他三個主要影響 **yaw** 唔同。

## 3. Corkscrew slipstream
- Propeller 令 slipstream 成螺旋形後流，打到 **vertical fin 嘅一邊** → **yaw 向左**。
- 低速高 power：螺旋密、更強；speed 升：螺旋拉長，效應弱。
- 所以 take-off 要踩**右 rudder**，speed 升後所需量變少。

## 4. Gyroscopic precession
- Propeller 似 gyro：有**rigidity**，受力時反應喺**旋轉方向再行 90° 嘅位置**（precession）。
- 例：tailwheel 機 tail 抬起（pitch nose down）→ 力作用喺 disc 頂部，效應喺右側向前 → **yaw 向左**。
- 一般記法（順時針 prop）：**pitch down → yaw left；pitch up → yaw right**。
- Tailwheel 機最明顯；nosewheel 機 take-off 時 pitch 變化細，但 rotation 同 go-around 都要識。

## 5. P-factor（asymmetric thrust）
- Prop disc 對住 relative wind 傾斜（高 pitch attitude）→ **下行 blade（右側，順時針）** 嘅 AoA 較大 → thrust 較大。
- Thrust 中心移向右 → **yaw 向左**。
- 條件：高 pitch attitude、低 speed、高 power（例如 take-off rotation、go-around、slow flight）。
- 處理：加**右 rudder**；速度回升或 pitch 降低，效應減少。

## 6. Weathercocking 同 critical engine
- **Weathercocking**：fin 似 weathervane，crosswind 令 nose 轉向風來嘅方向；take-off 滑跑同空中都有。輕機更明顯。
- **Critical engine（twin）**：失效時對 performance 同 handling 影響最差嘅 engine。順時針 propeller 嘅傳統 twin，一般係**左 engine**，因為 P-factor 令右 engine 嘅 thrust 中心離中線更遠，剩返右 engine 嘅 yaw moment 更大。
- **VMC**：失一邊 engine 後保持 directional control 嘅最低 speed；唔同體系（FAA／CASA／ICAO）定義細節有別 → 「待驗證」；non-turbo engine altitude 升，power 減少，VMC 通常下降。
- 失 engine 時向 **好 engine 一邊 bank 約 5°**（FAA 常用講法）可以減少 sideslip；數值以 POH 為準。`,
sum:`- 順時針 prop 單 engine：**Torque、Corkscrew slipstream、Gyroscopic precession、P-factor** 都令 nose 傾向左。
- **Torque** ＝ roll 左；corkscrew／gyro／P-factor 主要 yaw 左。
- 最強喺 **高 power、低 speed、高 pitch attitude** → 用 **右 rudder**。
- **Pitch down → yaw left；pitch up → yaw right**（gyroscopic，順時針 prop）。
- **Critical engine**：順時針 prop twin 通常係左 engine（P-factor 原因）。`,
mcq:[
{q:"Which of these is NOT one of the four classic left-turning tendencies?",o:{A:"Torque reaction",B:"Corkscrew slipstream",C:"Gyroscopic precession",D:"Ground effect"},a:"D",why:"The four are torque, corkscrew slipstream, gyroscopic precession and P-factor.",zh:"Ground effect 係另一個題目。"},
{q:"Which statement about P-factor is correct for a clockwise propeller?",o:{A:"The ascending blade creates more thrust, yawing the aircraft right",B:"It is strongest at high speed and low power",C:"The descending blade has a larger AoA, shifting thrust to the right and yawing left",D:"It only exists on tailwheel aircraft"},a:"C",why:"With a high pitch attitude the descending (right) blade has more AoA and thrust.",zh:"右 blade AoA 大，thrust 偏右，nose 向左。"},
{q:"Torque reaction causes the aircraft to:",o:{A:"Roll left (with a clockwise propeller)",B:"Roll right",C:"Pitch up",D:"Yaw right"},a:"A",why:"The fuselage reacts opposite to the propeller rotation (Newton's third law).",zh:"prop 順時針，fuselage反作用向左 roll。"},
{q:"These tendencies are strongest when:",o:{A:"High speed and low power",B:"Descending with idle power",C:"Cruising at high speed",D:"High power, low airspeed and high pitch attitude"},a:"D",why:"Slipstream is tight and P-factor large at high power and low speed.",zh:"take-off／go-around 時最明顯。"},
{q:"Gyroscopic precession means that a force applied to the propeller disc acts:",o:{A:"90° ahead in the direction of rotation",B:"At the point of application",C:"90° opposite the direction of rotation",D:"At the centre only"},a:"A",why:"Precession occurs 90° in the direction of rotation from the applied force.",zh:"力喺旋轉方向 90° 後生效。"},
{q:"What does the pilot normally use to counter the left-turning tendencies during take-off?",o:{A:"Right rudder",B:"Left rudder",C:"Left aileron only",D:"Reduce power to idle"},a:"A",why:"Right rudder opposes the yaw to the left.",zh:"踩右 rudder。"},
{q:"On a conventional twin with clockwise propellers, the critical engine is usually the:",o:{A:"Right engine",B:"Left engine",C:"The engine with more fuel",D:"Neither; both are equally critical"},a:"B",why:"P-factor moves the right engine's thrust line outward, giving a larger yaw arm if the left fails.",zh:"P-factor 令右 engine thrust 離中線更遠。"},
{q:"Weathercocking is the tendency of the aircraft to:",o:{A:"Turn its nose away from a crosswind",B:"Roll into a crosswind",C:"Turn its nose into the direction the wind is coming from",D:"Pitch up in turbulence"},a:"C",why:"The fin behind the CG acts like a weathervane.",zh:"nose 轉向風來嘅方向。"}
]},
{id:"ln.pof.ground",k:"pof",n:13,t:"Ground Effect & Wake",g:"Ground Effect & Wake",lesson:null,src:["PHAK ch5","RPL ch6","ATP ch3","Airspace POF03"],
rec:["Ground effect 係咩？大約喺幾高會出現？","Ground effect 點影響 induced drag、lift、AoA？","Take-off 離開 ground effect 時要注意咩？","Wingtip vortices 點形成？轉向點？","邊啲條件令 wake turbulence 最強？","Approach 同 take-off 時點避開前機 wake？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Ground effect 係咩
- wing貼近地面（大約 **1 個 wingspan 以內**）時，地面限制 **downwash 同 wingtip vortices** 嘅發展。
- 結果：**induced drag ↓、lift ↑**（同 AoA 下），wing有效 AoA 增加。
- 越近地面效果越明顯；高過約 1 wingspan 就好細。詳細百分比數字教材未有確定 → 「待驗證」，唔好硬記。
- Low-wing 機通常比 high-wing 機感覺更明顯，因為wing更近地面。

## 2. 點樣影響 flare 同 landing
- Flare 入 ground effect：飛機會**floating**，因為 drag 低、lift 多，speed 降得慢。
- Approach speed 太快 → float 長，runway 可能唔夠；要記住減 power、控制 speed。
- 所以 flare 時唔好強行 hold off 太高，應該按 speed 同 sink rate 控制。

## 3. Take-off 離開 ground effect
- Take-off：未到 safe flying speed 就 rotate／拉起離地，可能靠 ground effect 暫時升空；一爬出 ground effect，**induced drag ↑、需要 AoA ↑**，飛機可能 **sink**，甚至 settle back。
- 所以 take-off 要等足夠 speed 才 rotate，離地後平飛加速到 Vx／Vy 先 climb（以 POH 為準）。
- 呢個風險喺 **重、高 DA、短 runway、soft field** 更嚴重。

## 4. Wingtip vortices
- Wing 下面高 pressure、上面低 pressure → 喺 wingtip 附近空氣由下向上漏 → 形成旋轉嘅 **vortices**。
- 由飛機後面睇：**右翼 vortex 逆時針、左翼順時針**，即係喺兩 vortex 之間向下、向外旋轉。
- 近地面時，vortices 會向兩邊散開；有 crosswind 會令一邊 vortex 留喺 runway 附近更耐。

## 5. Wake turbulence 強度
| 條件 | 為何更強 |
| Heavy／大型機 | lift 多，circulation 大 |
| Slow speed | AoA 大，vortex strength 大 |
| Clean configuration | 沒有 flaps 分散 lift |
| 小風／靜風 | vortex 不容易消散 |
- 影響：後機可能被迫 **roll**、甚至失控；細機最易受影響。
- ICAO 分 wake turbulence category（Light／Medium／Heavy／Super）；separation 時間／距離細節因空域不同，以 ATC 指示同當地規則為準 → 「待驗證」。

## 6. 實際避開方法
- **Approach**：喺前機 **flight path 上方**，著陸點喺前機 touchdown 點**之後**。
- **Take-off**：喺前機 **rotation 點之前**離地，上面飛，轉離 flight path。
- Vortices 會**下沉**，所以保持高過前機 flight path。
- 懷疑有 wake：加 separation，等風吹散，必要時 go-around；唔好硬衝。`,
sum:`- **Ground effect**：離地大約 **1 wingspan** 內，downwash 受限 → **induced drag ↓、lift ↑**。
- Flare 會 float；take-off 離開 ground effect 要小心 **sink**，等足夠 speed 先 rotate。
- **Wingtip vortices** 由 pressure 差形成；右翼 CCW、左翼 CW（由後面望）。
- Wake 最強：**heavy、slow、clean**；近地面 vortices 向兩邊散。
- 避開：approach 喺前機上方，touchdown 喺前機 touchdown 點之後；take-off 喺前機 rotation 點之前離地。`,
mcq:[
{q:"What is the effect of ground effect on a wing?",o:{A:"Increased induced drag and decreased lift",B:"Decreased induced drag and increased lift for a given AoA",C:"No change in lift",D:"Increased stall speed"},a:"B",why:"Ground reduces downwash and vortex strength.",zh:"ground effect → induced drag ↓、lift ↑。"},
{q:"Ground effect is generally significant within about:",o:{A:"10 wingspans of the surface",B:"100 ft AGL for all aircraft",C:"One wingspan of the surface",D:"The cruise altitude"},a:"C",why:"It becomes noticeable when the wing is within about one wingspan of the ground.",zh:"大約 1 wingspan 內。"},
{q:"Why can an aircraft lift off at too low a speed and then settle back after leaving ground effect?",o:{A:"Induced drag increases and a higher AoA is needed outside ground effect",B:"Weight increases",C:"The flaps retract automatically",D:"Wind shear always occurs"},a:"A",why:"Outside ground effect more AoA is needed, increasing induced drag.",zh:"離開 ground effect 後，induced drag ↑。"},
{q:"Wake turbulence is strongest behind an aircraft that is:",o:{A:"Light, fast and flaps down",B:"Heavy, slow and in a clean configuration",C:"Light and in cruise",D:"Heavy but flying fast"},a:"B",why:"High lift and high AoA create strong tip vortices.",zh:"重、慢、clean 最強。"},
{q:"Looking from behind a flying aircraft, the wingtip vortices rotate:",o:{A:"Both clockwise",B:"Both counter-clockwise",C:"Inward from wing tips toward the fuselage",D:"Right-wing vortex counter-clockwise, left-wing vortex clockwise"},a:"D",why:"They rotate outward and upward around the wingtips, downward between them.",zh:"右 CCW、左 CW。"},
{q:"To avoid wake turbulence on approach behind a heavier aircraft, you should:",o:{A:"Fly below its flight path",B:"Fly above its flight path and land beyond its touchdown point",C:"Fly directly in its path",D:"Land short of its touchdown point"},a:"B",why:"Vortices sink, so stay above and beyond.",zh:"喺上方、著陸點更遠。"},
{q:"Ground effect makes an aircraft in the flare:",o:{A:"Descend quickly",B:"Stall at a higher speed",C:"Float with less drag",D:"Lose all lift"},a:"C",why:"Induced drag drops and lift increases near the ground.",zh:"drag 低，會 float。"},
{q:"On take-off behind a heavy aircraft, the recommended technique is to:",o:{A:"Lift off before the preceding aircraft's rotation point and climb above its flight path",B:"Lift off after the heavy's rotation point",C:"Fly below its flight path",D:"Take off directly into its wake"},a:"A",why:"This keeps you above the vortices created after rotation.",zh:"早啲離地，保持高過佢。"}
]}
]);
