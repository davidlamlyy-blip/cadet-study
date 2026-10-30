// 學習筆記（Recall → Notes → Summary → MCQ）：Stability、Turning & Load Factor。中文為主、tech term 英文；圖來自 FAA PHAK（公有領域）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.stability",k:"pof",n:9,t:"Stability",g:"Stability",lesson:null,src:["PHAK ch5","ATP ch3 (Ebook)","RPL ch1","BAK ch6"],
rec:["Static stability 同 dynamic stability 有咩分別？","Longitudinal stability 點樣由 horizontal stabiliser 提供？CG 位置點影響？","Forward CG 同 aft CG 各有咩好處同風險？","Lateral stability 靠咩？Dihedral 點運作？","Directional stability 靠咩？點解會有 spiral instability？","Dutch roll 係咩？同 phugoid 有咩分別？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Static vs Dynamic stability
- **Static stability**：飛機被擾動之後，**第一下**傾向點反應。
  - **Positive**：傾向返回原來 equilibrium。
  - **Neutral**：停喺新位置，唔返亦唔走。
  - **Negative**：愈偏愈遠。
- **Dynamic stability**：之後**隨時間**嘅振盪變點。
| 類型 | 振盪幅度 | 結果 |
| Positive dynamic (damped) | 愈來愈細 | 最後返回 equilibrium |
| Neutral dynamic | 不變 | 一直擺 |
| Negative dynamic (divergent) | 愈來愈大 | 危險 |
- **Positive static 唔等於 positive dynamic**：飛機返正時可以「過頭」，之後擺幅變大。

## 2. Stability vs Control
- 愈 stable 愈難改變 attitude（要出更大力）；愈唔 stable 愈易 manoeuvre，但 pilot workload 高。
- Airliner 揀 stable；戰機可以用 relaxed stability ＋ fly-by-wire 換 manoeuvrability（教材 RPL ch1，標「待驗證」嘅部分只係概念層面）。

## 3. Longitudinal stability (Pitch)
- 主要來源：**horizontal stabiliser**。Wing 嘅 lift 作用點通常喺 CG 後面，會令 nose 向下，**tail 要出 download** 平衡。
- **CG 要喺 neutral point 前面**：飛機被抬頭 → tail AoA 變化 → 恢復力矩把 nose 拉返落。
- Speed 升 → downwash 同 tail download 都變大；慢嘅時候 nose 傾向下垂（所以 trim 要跟 speed 變）。
- **Thrust line**：thrust line 高過 CG → 加 power 會低頭；低過 CG → 加 power 會抬頭。設計上令 thrust 大致過 CG，PHAK 提到 CG 約喺 **20% MAC** 附近係設計目標（具體位置視機型，以 AFM／POH 為準）。
![PHAK 圖：airflow 同 AoA 隨 speed 變化，tail 同 wing 嘅 AoA 會一齊變](img/phak/aoa-speeds.png)

## 4. CG location
| | Forward CG | Aft CG |
| Stability | 較 stable | 較唔 stable |
| Tail load | Download 大 → 要更多 AoA | Download 細 |
| Vs | 略高 | 略低 |
| Cruise | 略慢（trim drag 多） | 略快（trim drag 少） |
| 風險 | Flare 時 elevator 可能唔夠力 | 超過後限：stall／spin recovery 困難，pitch 過敏 |
- CG 一定要喺 **POH／AFM 限制範圍**內，前後限都係。

## 5. Lateral stability (Roll)
- 目標：被擾動 roll 之後，wing自動回到水平。
- **Dihedral**：wing向上斜。Sideslip 時低嗰邊 wing AoA 較大 → lift 多 → 把 wing 抬返。
- **Sweepback**：產生 dihedral effect。
- **High wing／keel effect**：fuselage 喺 wing 下面似 keel，sideslip 時把 longitudinal axis 轉入 relative wind；CG 低過 wing 有 pendulum effect。Low wing 通常要多啲 dihedral。

## 6. Directional stability (Yaw)
- 主要來源：**vertical fin**。Sideslip 時 fin 受 relative wind 出 lift，把 nose 轉返朝 relative wind，同 weathercock 同原理。
- 後 fuselage 嘅 keel surface 亦有份。
- **Directional 太強 vs lateral 太弱 → spiral instability**：bank 之後 nose 跟住 turn 方向，外翼較快 → bank 愈來愈斜、speed 加、nose 下，慢慢變 spiral dive。
- 所以**唔好放手唔理**；recovery：先 level wings，再慢慢拉返 pitch，唔好喺 bank 度硬拉桿（會收緊 spiral）。

## 7. Dutch roll vs Phugoid
- **Dutch roll**：roll 同 yaw 耦合嘅振盪，nose 畫 figure-8。Directional stability 強、lateral 弱時較易出現；sweptwing jet 常見，由 **yaw damper** 處理。
- **Phugoid（long-period oscillation）**：speed 同 pitch 互換嘅慢擺動，AoA 大致不變；擺幅遞減就係 dynamic stable。PHAK 只描述現象，名稱用法標「待驗證」。
- 比較：Dutch roll 係 **lateral-directional**、較快；phugoid 係 **longitudinal**、好慢，pilot 通常有時間處理。`,
sum:`- **Static** ＝ 第一反應（返正／停／發散）；**dynamic** ＝ 振盪隨時間變細／不變／變大。
- **Longitudinal**：tail 出 download；**CG 要喺 neutral point 前**，forward CG 較 stable，aft CG 較快但危險。
- **Lateral**：dihedral、sweepback、high wing keel effect；**directional**：vertical fin（weathercock）。
- Fin 強、dihedral 弱 → **spiral instability**；兩者耦合振盪 → **Dutch roll**。
- CG 一定要喺 POH／AFM 限制內。`,
mcq:[
{q:"An aircraft displaced from equilibrium tends to return to its original attitude. This is:",o:{A:"Neutral static stability",B:"Positive static stability",C:"Negative static stability",D:"Positive dynamic stability only"},a:"B",why:"Returning toward equilibrium is the definition of positive static stability.",zh:"傾向返正＝positive static。"},
{q:"The oscillations of an aircraft grow larger with time. This is:",o:{A:"Negative dynamic stability",B:"Positive dynamic stability",C:"Neutral dynamic stability",D:"Positive static stability"},a:"A",why:"Increasing amplitude is divergent, i.e. dynamically unstable.",zh:"擺幅變大＝divergent。"},
{q:"What is the main source of longitudinal stability?",o:{A:"Vertical fin",B:"Dihedral",C:"Horizontal stabiliser",D:"Ailerons"},a:"C",why:"The tail provides the restoring pitching moment.",zh:"Pitch 穩定靠 tail。"},
{q:"Moving the CG forward generally:",o:{A:"Reduces stability",B:"Increases stability but raises the tail download needed",C:"Has no effect on stability",D:"Lowers the stall speed noticeably"},a:"B",why:"A forward CG is more stable, needs more tail download and raises Vs slightly.",zh:"Forward CG 較 stable，tail load 大。"},
{q:"Which is a hazard of an aft CG beyond the limit?",o:{A:"Elevator too heavy to flare",B:"Reduced cruise speed",C:"Difficult stall or spin recovery",D:"Higher stall speed"},a:"C",why:"Too little stability makes the aircraft pitch-sensitive and recovery hard.",zh:"超後限，recovery 困難。"},
{q:"Dihedral increases lateral stability because, in a sideslip:",o:{A:"The lower wing has a higher angle of attack",B:"The upper wing stalls first",C:"The fin produces a rolling moment",D:"The drag on both wings is equal"},a:"A",why:"More AoA on the lower wing gives more lift and rolls the wings level.",zh:"低翼 AoA 大，lift 多。"},
{q:"Strong directional stability combined with weak lateral stability is most likely to cause:",o:{A:"Phugoid",B:"Spiral instability",C:"Pitch-up",D:"Tail stall"},a:"B",why:"The bank tightens while the nose follows the turn, giving a spiral dive.",zh:"Fin 強、dihedral 弱→ spiral。"},
{q:"A Dutch roll is a coupled oscillation in:",o:{A:"Pitch and speed",B:"Pitch and roll",C:"Roll and yaw",D:"Yaw and airspeed only"},a:"C",why:"Dutch roll couples rolling and yawing motion, damped by a yaw damper on many jets.",zh:"Roll 同 yaw 耦合。"}
]},
{id:"ln.pof.turning",k:"pof",n:10,t:"Turning & Load Factor",g:"Turning & Load Factor",lesson:null,src:["POF03 (Airspace)","PHAK ch5（圖）","ENZO 05","ATP ch3 (Ebook)","RPL ch6"],
rec:["Turn 入面 lift 點樣分成兩個 component？","Load factor 公式係咩？60° bank 係幾多 g？","Slip 同 skid 有咩分別？ball 點睇？","Turn radius 同 rate 由咩決定？Rate 1 係幾多？","VA 係咩？V-g diagram 左右兩邊限制係咩？","Limit load 同 ultimate load 有咩分別？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Forces in a turn
- Bank 之後 **lift vector 傾斜**：
  - **垂直分力** L·cos φ 托住 weight。
  - **水平分力** L·sin φ ＝ **centripetal force**，令機轉彎。
- 要保持 altitude：L·cos φ ＝ W → 要**加 AoA**（拉桿）令總 lift 大過 weight。
- **Centrifugal force** 係 reaction（Newton 第三定律），唔係令機轉嘅力。Rudder 用嚟 coordinate，唔係 turn 嘅主力。
![Turn 時 weight 同 lift 嘅分量（FAA PHAK Fig 5-52）](img/phak/turn-forces.png)

## 2. Load factor (n)
- **n ＝ Lift ÷ Weight**。Level coordinated turn：**n ＝ 1 / cos φ**。
| Bank angle | n |
| 0° | 1.0 |
| 30° | 約 1.15 |
| 45° | 約 1.41 |
| 60° | 2.0 |
| 75° | 約 3.9 |
| 80° | 約 5.76 |
- Level turn 嘅 n **只由 bank 決定**，同 speed、weight 無關。過 60° 之後急升。
- 結果：stall speed × √n（例：60° → ×1.41）；structure 承受 n × weight。
![Load factor 隨 bank angle 變化（FAA PHAK Fig 5-53）](img/phak/load-factor-bank.png)
![Load factor 對 stall speed 嘅影響（FAA PHAK Fig 5-54）](img/phak/stall-speed-load.png)

## 3. Balanced turn: slip & skid
- Ball 喺中間 ＝ **balanced (coordinated)**。
| 狀況 | Ball | 原因 | 處理 |
| Slip | 偏向 turn 內側 | Bank 多過該 rate 所需 | 減 bank 或加外側 rudder 修正 |
| Skid | 偏向 turn 外側 | Rate 多過該 bank 所需（rudder 過多） | 減 rudder |
- 口訣「**Step on the ball**」：踩 ball 偏向嗰邊 rudder。
- 低速 skidding 或 slipping turn 同 stall／spin 有關，要小心。

## 4. Rate & radius of turn
- **r ＝ V² / (g · tan φ)**；rate ＝ g·tan φ / V。
- 同 bank：**TAS ↑ → radius ↑、rate ↓**；同 TAS：**bank ↑ → radius ↓、rate ↑**。
- **機型大細唔影響**：747 同 DA40 如果 TAS、bank 一樣，radius 一樣；747 嘅 radius 大只因為佢飛得快。
- **Rate 1 ＝ 3°/s ＝ 360° 用 2 分鐘**。Rule of thumb：Rate 1 嘅 bank ≈ TAS/10 + 7（近似，非精確）。
- 例：TAS 120 kt、rate 1 → radius 約 1.2 km（V ≈ 61.7 m/s，ω ≈ 0.0524 rad/s，r ＝ V/ω）。

## 5. Overbanking & underbanking
- 外翼行較遠、較快 → lift 較多 → 傾向 **overbank**（bank 愈傾愈斜），level turn 要略向外 aileron。
- Climbing turn 外翼 AoA 較大，overbank 更明顯；descending turn 內翼 AoA 較大，傾向 underbank。
- ENZO 話 descent 兩者大致抵消；呢點同教材其他部分唔完全一致，標「待驗證」。

## 6. Manoeuvring speed VA
- **VA ＝ 以下單一舵面全偏轉一次，機先 stall，再超 limit load factor**（stall 係保護）。
- 教材話舊輕機 VA 約 1.7 × Vs（待驗證），以 POH 為準；weight 輕 → VA 降。
- **唔保護**多軸或反覆輸入；turbulence 入面減到 VA 以下。

## 7. V-g diagram & Limit/Ultimate load
- **V-g diagram**（flight envelope）：橫軸 speed，縱軸 load factor。
  - 左邊曲線 ＝ stall 限（Vs·√n）。
  - Corner ＝ **VA**；右邊 ＝ **VNE**／VNO。
  - 包絡外 ＝ 可能 structural damage。
- **Limit load**：最大預期 load，超過會永久變形。FAA normal category 常見 **+3.8 g**（utility +4.4、acrobatic +6.0），negative 例如 −1.52。具體以機型 POH 為準。
- **Ultimate load ＝ limit × 1.5**（safety factor 1.5，FAA）：此限度前結構唔應該 fail。
- 懷疑超 limit load → 當成 damage，report 並檢查。`,
sum:`- Turn：lift 分垂直（托 weight）同水平（**centripetal force**）；要加 AoA 維持 altitude。
- **n ＝ 1/cos φ**；60° → 2 g、stall speed ×1.41；level turn 嘅 n 只睇 bank。
- **Slip**＝ball 偏內；**skid**＝ball 偏外；step on the ball。
- Radius **r ＝ V²/(g tan φ)**：同 bank，speed ↑ radius ↑；**Rate 1 ＝ 3°/s**。
- **VA** 係 corner speed，保護單一輸入；**limit load → ultimate ＝ ×1.5**，V-g diagram 包絡外有 structural 風險。`,
mcq:[
{q:"In a level coordinated turn at 60° bank, the load factor is:",o:{A:"1.15",B:"1.41",C:"3.0",D:"2.0"},a:"D",why:"n = 1/cos 60° = 2.",zh:"60° bank，n = 2。"},
{q:"A level turn at constant altitude requires an increase in angle of attack because:",o:{A:"The vertical component of lift must still equal weight",B:"The drag decreases in a turn",C:"The CG moves aft",D:"The airspeed rises automatically"},a:"A",why:"Lift is tilted, so total lift must rise so that L cos φ = W.",zh:"垂直分力要仍然等於 weight。"},
{q:"The ball is displaced to the outside of the turn. This is a:",o:{A:"Slip",B:"Balanced turn",C:"Skid",D:"Stall"},a:"C",why:"A skid means the rate of turn is too high for the bank, usually from excess rudder.",zh:"Ball 偏外＝skid。"},
{q:"Which change DECREASES the radius of turn?",o:{A:"Reduce bank angle",B:"Increase TAS",C:"Increase weight",D:"Increase bank angle at the same TAS"},a:"D",why:"r = V²/(g tan φ); a larger bank gives a smaller radius.",zh:"Bank ↑，radius ↓。"},
{q:"A Boeing 747 and a DA40 fly at the same TAS and bank angle. Their turn radius is:",o:{A:"Larger for the 747",B:"Larger for the DA40",C:"The same",D:"Dependent on the engine power"},a:"C",why:"Radius depends only on TAS and bank angle.",zh:"只由 TAS 同 bank 決定。"},
{q:"A standard rate (rate 1) turn is:",o:{A:"1°/s",B:"3°/s",C:"6°/s",D:"10°/s"},a:"B",why:"3 degrees per second gives 360° in 2 minutes.",zh:"Rate 1 = 3°/s。"},
{q:"The stall speed in level flight is 50 kt. In a level 60° bank the stall speed is about:",o:{A:"71 kt",B:"50 kt",C:"100 kt",D:"35 kt"},a:"A",why:"50 × √2 ≈ 71 kt.",zh:"× 1.41。"},
{q:"The design manoeuvring speed VA is the speed below which:",o:{A:"Full single-control deflection will stall the wing before exceeding the limit load factor",B:"Any control input is structurally safe",C:"Flaps may be extended",D:"The aircraft cannot stall"},a:"A",why:"VA protects against a single full control input, not combined or repeated inputs.",zh:"只保護單一輸入。"}
]}
]);
