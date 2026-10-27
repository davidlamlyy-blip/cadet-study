// 學習筆記（Recall → Notes → Summary → MCQ）。中文為主、tech term 英文；圖來自 FAA PHAK（美國政府著作，公有領域）。
// rl＝每條 Recall 對應嘅 Duolingo 課堂 id（null＝暫時未有課堂）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.lift",k:"pof",n:2,t:"Lift Generation 升力點嚟",g:"Lift Generation",lesson:"pof-1-1",src:["PHAK ch4–5（圖）","Airspace POF","Lecture 13a (What causes lift?)"],
rec:["四個力 (4 forces) 幾時平衡？","升力點樣產生？壓力角度同動量角度有咩分別？","「Equal transit time」點解係錯嘅？","攻角 (AoA) 係咩？AoA 變咗，升力點變？","升力公式 L = ½ρV²SCL 講咩？","Parasite drag 同 Induced drag 有咩分別？"],
rl:["pof-1-1","pof-1-2","pof-1-2","pof-1-3",null,null],
notes:`## 1. 四個力 (The four forces)
- **Lift（升力）**：垂直於 relative wind；**Weight（重力）**：指向地心；**Thrust（推力）**：向前；**Drag（阻力）**：平行於 relative wind，向後。
- 平飛、速度唔變 (steady level flight)：**Lift = Weight**，同時 **Thrust = Drag**。兩對力各自平衡。
- Lift **唔一定垂直向上**：爬升或轉彎時 lift 會傾斜，所以之後先有 load factor 呢個概念。
![圖 5-1 概念：Angle of attack 喺唔同速度下嘅變化（FAA PHAK Fig 5-3）](img/phak/aoa-speeds.png)

## 2. 升力點產生：兩個角度，講同一件事
- **壓力角度 (Bernoulli)**：機翼上面氣流較快 → 靜壓 (static pressure) 較低；下面壓力相對高。**壓力差 × 面積 = 升力**，大約三分之二升力係上翼面「抽」出嚟。
- **動量角度 (Newton)**：機翼將空氣向**下**推（**downwash**），空氣反過嚟向**上**推機翼，就係 lift。
- 兩個唔係競爭理論，而係**同一個現象**：壓力差同氣流轉向係同時發生。

## 3. 常見誤解：Equal transit time
- 誤解：「上面路程長，所以氣流要行快啲，咁先可以同下面嘅空氣**同時**去到後緣。」
- 事實：兩股空氣**冇理由要同時到**，上面嘅空氣其實**更早**到達。
- 面試時**唔好**用呢個解釋，用「壓力差＋氣流向下偏轉」。

## 4. 攻角 (AoA) 同升力曲線
- **AoA** ＝ **chord line**（前緣至後緣嗰條線）同 **relative wind** 之間嘅夾角。**唔係**機頭指向（嗰個叫 pitch attitude）。
- AoA 增加 → 升力大致線性上升，到 **critical AoA（約 15–18°）** 就 **stall**，升力反而跌。呢條曲線叫 **CL–α curve**。
- 有彎度 (camber) 嘅機翼，即使 AoA = 0° 都有升力。
![升力係數 CL、阻力係數 CD 同 L/D 隨攻角變化（FAA PHAK Fig 5-5）。CL max 之後就係 stall。](img/phak/lift-drag-curve.png)

## 5. 升力公式
**L = ½ × ρ × V² × S × CL**
| 符號 | 意思 | 機師點改變 |
| ρ | 空氣密度 (density) | 高度、氣溫（高＋熱 = 密度低 = 升力少） |
| V | 真空速 (TAS) | 油門 (power)、機頭 (pitch) |
| S | 機翼面積 | 放 flaps（等效增加面積） |
| CL | 升力係數 | AoA、flaps、翼型 (airfoil) |
- 升力同 **V² 成正比**：速度減半，要大約 **4 倍 CL** 先維持同樣升力。

## 6. 阻力兩部分 (Drag)
- **Parasite drag（寄生阻力）**：形狀、表面摩擦、干擾，隨速度 **V²** 上升。
- **Induced drag（誘導阻力）**：升力嘅「副作用」（翼尖渦流），喺 **低速、大 AoA** 最大。
- 總阻力最細嗰點 ＝ **best L/D speed**（約 Vmd）。低過呢個速度就喺「power curve 後半段」(back of the power curve)。`,
sum:`- 平飛：**L = W**、**T = D**。
- 升力＝**壓力差＋氣流向下偏轉**，兩個角度都啱；**Equal transit time 係錯**。
- **AoA** 係翼對氣流嘅角度，升力隨 AoA 升到 critical AoA 就 stall。
- **L = ½ρV²SCL**：密度、速度、面積、CL 決定升力；高＋熱要更高嘅 TAS。
- **Induced drag 低速最大**、parasite drag 高速最大；兩者相加最細嘅位置就係 **best L/D**。`,
mcq:[
{q:"In steady level flight, which is correct?",o:{A:"Lift = Weight and Thrust = Drag",B:"Lift = Thrust",C:"Lift is greater than Weight",D:"Drag = Weight"},a:"A",why:"Each pair is balanced.",zh:"兩對力各自平衡。"},
{q:"Which explanation of lift is a common myth?",o:{A:"The wing deflects air downwards",B:"Lower pressure above the wing",C:"Top and bottom air must reach the trailing edge at the same time",D:"Pressure difference acts on the wing area"},a:"C",why:"Equal transit time has no physical basis.",zh:"上面氣流其實更早到達後緣。"},
{q:"Angle of attack is measured between:",o:{A:"Chord line and relative wind",B:"Nose and horizon",C:"Wing and fuselage",D:"Flight path and horizon"},a:"A",why:"It is the wing against the airflow.",zh:"AoA 係翼對氣流，唔係機頭對地平線。"},
{q:"If the airspeed halves at the same lift and density, the CL must become about:",o:{A:"Half",B:"The same",C:"Double",D:"Four times"},a:"D",why:"Lift ∝ V², so CL must increase by 4.",zh:"升力同 V² 成正比。"},
{q:"Induced drag is greatest:",o:{A:"At high speed in a dive",B:"At low speed with a high angle of attack",C:"At the speed of minimum drag",D:"In the clean configuration only"},a:"B",why:"It is a by-product of lift and falls as speed rises.",zh:"低速、大 AoA 時最大。"},
{q:"Which change INCREASES lift at a given speed and AoA?",o:{A:"Higher density altitude",B:"Higher air density",C:"Smaller wing area",D:"Lower CL"},a:"B",why:"L = ½ρV²SCL, so a higher ρ gives more lift.",zh:"密度愈高，升力愈大。"},
{q:"On a hot, high-altitude airfield, to get the same lift you need:",o:{A:"A lower true airspeed",B:"A higher true airspeed",C:"The same true airspeed",D:"Less flap"},a:"B",why:"Thin air (lower ρ) must be compensated by a higher TAS.",zh:"空氣薄，要更高 TAS。"},
{q:"The best L/D speed is where:",o:{A:"Parasite drag is highest",B:"Total drag is lowest",C:"Induced drag is zero",D:"Thrust is zero"},a:"B",why:"Best L/D = minimum total drag.",zh:"總阻力最細嗰點。"}
]},
{id:"ln.pof.stall",k:"pof",n:3,t:"Stall & Spin 失速同螺旋",g:"Stall & Spin",lesson:"pof-1-4",src:["PHAK ch5（圖）","ENZO Flight Study Guide 06","Airspace POF03","Lecture 14 (separation)"],
rec:["Stall 係咩？真正原因係咩？","Boundary layer 係咩？「Flow separation」係點發生？","點解任何速度、任何姿態都可以 stall？","邊啲因素改變 stall **速度**，但唔改變 critical AoA？","Stall 嘅警告徵兆同標準改出 (recovery)？","Accelerated stall 係咩？","Stall 點變成 spin？點改出？"],
rl:["pof-1-4","pof-1-4","pof-1-4","pof-1-5","pof-1-5","pof-1-4",null],
notes:`## 1. 核心概念
- **Stall（失速）** ＝ 機翼嘅攻角超過 **critical angle of attack (AoA)**，上翼面氣流分離 (flow separation)，**升力驟減、阻力上升**。
- Stall 時機翼**仲有啲升力**，只係唔夠托住重量，所以機頭下沉、飛機下墜。
- Stall 睇嘅係 **AoA，唔係速度**：快或慢、爬升、俯衝、轉彎都可以 stall。
![CL 隨 AoA 上升，到 CL max 之後 stall，升力下跌（FAA PHAK Fig 5-5）](img/phak/lift-drag-curve.png)

## 2. 氣流點解會分離 (Boundary layer separation)
- AoA 細至中等：空氣貼住機翼流，形成薄薄嘅 **boundary layer**（先層流 laminar，再轉為亂流 turbulent）。
- AoA 增加 → 上翼面空氣被加速，之後要喺**逐漸升高嘅壓力**下減速（**adverse pressure gradient**）。
- 過咗 critical AoA，boundary layer 追唔到機翼表面 → **flow separation** → 亂流尾跡 → 升力崩潰。
- 一般簡單機翼 critical AoA 大約 **15–18°**（視翼型、flaps、污染而定）。
![Boundary layer：層流 → 轉變區 → 亂流（FAA PHAK Fig 5-66）](img/phak/boundary-layer.png)

## 3. Stall 速度 vs critical AoA
- **Critical AoA（幾乎）固定**：由機翼形狀同形態決定。
- **Stall 速度**＝去到 critical AoA 嗰一刻嘅速度，會變：

| 因素 | 對 stall 速度 | 點解 |
| 重量 (Weight) ↑ | ↑ | 要更多升力，同速度下 AoA 要更大 |
| 放 flaps | ↓ | 增加彎度同面積，低速都有升力 |
| 開油門 (power-on) | ↓ | 螺旋槳氣流吹過機翼＋推力分量 |
| Load factor n ↑（轉彎／拉機頭） | ↑ √n 倍 | 升力要等於 n × 重量 |
| 冰／霜／污垢 | ↑ | 表面變粗糙，critical AoA 同升力下降 |
| 高度 | IAS 約相同 | Stall 嘅 IAS 變化好細；TAS 較高 |

- 速記：**Vs（轉彎） = Vs（平飛） × √n**。60° 坡度 n = 2 → Vs × 1.41。
![轉彎時由重力同離心力合成 load factor（FAA PHAK Fig 5-52）](img/phak/turn-forces.png)
![坡度 (bank angle) 愈大，load factor 升得愈快；過 60° 之後急升（FAA PHAK Fig 5-53）](img/phak/load-factor-bank.png)
![Load factor 對 stall speed 嘅影響：例如 3 G 時 stall speed 約 ×1.7（FAA PHAK Fig 5-54）](img/phak/stall-speed-load.png)

## 4. 警告徵兆 (Warning signs)
- Stall warning（警告喇叭或燈），通常設喺 stall 之前幾 knots。
- 操縱變「軟」(mushy)，要大幅度先有反應。
- **Buffet**：分離嘅氣流打到尾翼，機身抖動。
- 機頭下沉 (nose drop)，可能伴隨單邊機翼下墜 (wing drop)。

## 5. 標準改出 (Stall recovery)
1. **減 AoA**：降機頭、放鬆拉桿。
2. **全油門 (full power)**（平順）。
3. 用 **rudder** 保持平衡、止 yaw。**唔好**喺失速時用 aileron 抬翼。
4. 機翼重新有升力之後，先用 aileron **水平機翼 (level wings)**，再輕輕拉返爬升。
5. 按手冊收返 flaps／起落架。
- 第一步**永遠係減 AoA**。先拉桿或用 aileron，可能令 stall 更深，甚至變 spin。

## 6. Stall 嘅種類
| 種類 | 意思 | 常見情況 |
| Clean (Vs1) | Flaps、起落架收起 | 巡航形態慢飛 |
| Dirty / landing (Vs0) | Flaps／起落架放出 | 進場同降落 |
| Accelerated | n > 1 時 stall，速度更高 | 急轉彎、突然拉機頭 |
| Power-on | 有油門下 stall | 起飛、復飛 (go-around) |
| Secondary | 第一次改出太急，再 stall | 改出時大力拉桿 |
| Deep stall | 尾流遮住尾翼，升降舵失效 | 主要係 T-tail、尾置引擎噴射機 |

## 7. 由 Stall 到 Spin
- **Spin（螺旋）** ＝ stall ＋ **yaw**：一邊機翼 stall 得更深 (**autorotation**)，機身一邊旋轉一邊急降。
- 常見原因：stall 時**唔協調 (uncoordinated)** —— rudder 太多或太少、低高度打滑轉彎 (slipping/skidding turn)。
- 標準改出（以機型 POH 為準）：**油門收 idle、aileron 中立、全力反向 rudder (full opposite rudder)、推桿向前**，直至旋轉停止，再改出俯衝。
- 最危險：**base-to-final 轉彎時低高度入 spin**，改出需要嘅高度唔夠。`,
sum:`- Stall ＝ **超過 critical AoA**，唔係某個速度。
- Critical AoA 基本固定；**stall 速度**受重量、flaps、power、load factor、污染影響。
- 改出次序：**減 AoA → 全油門 → rudder 保持平衡 → 水平機翼**。
- Spin ＝ stall ＋ yaw；低速時一定要保持**協調 (coordinated)**。
- C172S 參考（以 POH 為準）：Vs1 約 53 kt、Vs0 約 48 kt。`,
mcq:[
{q:"A wing stalls when:",o:{A:"The airspeed falls below the green arc",B:"The critical angle of attack is exceeded",C:"The engine power is reduced",D:"The aircraft is above a certain altitude"},a:"B",why:"Stall is defined by AoA. Speed is only an indirect indicator.",zh:"Stall 由 AoA 決定，速度只係間接指標。"},
{q:"Which statement about the critical angle of attack is correct?",o:{A:"It increases with aircraft weight",B:"It is lower at high altitude",C:"It is basically fixed for a given wing and configuration",D:"It depends on engine power"},a:"C",why:"Weight and altitude change the stall speed, not the critical AoA.",zh:"重量同高度改變嘅係 stall 速度。"},
{q:"What is the FIRST action in a stall recovery?",o:{A:"Apply full power",B:"Reduce the angle of attack",C:"Level the wings with aileron",D:"Raise the flaps"},a:"B",why:"The cause is excess AoA, so reduce it first, then add power.",zh:"成因係 AoA 太大，所以先減 AoA。"},
{q:"Which change DECREASES the stall speed?",o:{A:"Increasing weight",B:"Ice on the wing",C:"Extending flaps",D:"Entering a steep turn"},a:"C",why:"Flaps increase lift at low speed. The others raise the stall speed.",zh:"放 flaps 令 stall 速度下降。"},
{q:"In a level 60° bank turn (load factor 2), the stall speed is about:",o:{A:"The same as level flight",B:"1.4 × level stall speed",C:"2 × level stall speed",D:"0.7 × level stall speed"},a:"B",why:"Vs × √n = Vs × √2 ≈ 1.41.",zh:"√2 ≈ 1.41。"},
{q:"Which is NOT a normal stall warning sign?",o:{A:"Stall warning horn",B:"Buffet",C:"Increasing control effectiveness",D:"Nose drop"},a:"C",why:"Control effectiveness decreases as the wing approaches the stall.",zh:"接近 stall 時操縱反而變軟。"},
{q:"On base-to-final you tighten a turn and pull back; the horn sounds and a wing starts to drop. Best action?",o:{A:"Pull back more to stop the descent",B:"Aileron against the dropping wing, keep the back pressure",C:"Lower the nose, add power, use rudder to stay balanced",D:"Reduce power to idle"},a:"C",why:"Reduce AoA first. Aileron on a stalled wing can aggravate the drop.",zh:"先減 AoA，用 rudder 而唔係 aileron。"},
{q:"A spin is best described as:",o:{A:"A stall with symmetric airflow over both wings",B:"A stall with yaw, where one wing is more stalled and the aircraft autorotates",C:"A very high speed dive with rotation",D:"A turn with too little bank"},a:"B",why:"Spin = stall + yaw → autorotation.",zh:"Spin ＝ stall ＋ yaw。"},
{q:"Why is an accelerated stall dangerous in a steep turn?",o:{A:"The critical AoA is much lower",B:"The stall speed rises, so a stall can occur at a higher airspeed than expected",C:"Flaps are required",D:"It only happens in the clean configuration"},a:"B",why:"Load factor raises the stall speed by √n while the critical AoA is unchanged.",zh:"速度你以為安全，其實已經喺新嘅 stall 速度之下。"},
{q:"Frost is on the wings before take-off. What is the effect?",o:{A:"None, if it is thin",B:"Higher stall speed and reduced lift",C:"Lower stall speed",D:"Only an increase in drag"},a:"B",why:"Surface roughness lowers the critical AoA and reduces lift.",zh:"薄霜都可以令 stall 速度上升。"}
]}
]);
