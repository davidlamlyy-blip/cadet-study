// 學習筆記（Notion 風格：Recall → Notes → Summary → MCQ）。來源：PHAK ch4–5、Airspace POF 課件、ENZO Flight Study Guide、Lecture 13a、yno Notion POF 筆記（風格同部分內容）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.stall",k:"pof",n:3,t:"Stall & Spin",g:"Stall & Spin",src:["PHAK ch5","ENZO Flight Study Guide 06","Airspace POF03","Lecture 14 (separation)"],
rec:["What is a stall, and what actually causes it?","What is the boundary layer, and what is flow separation?","Why can a wing stall at any speed or attitude?","What changes the stall SPEED but not the critical AoA?","Stall warning signs and the standard recovery","What is an accelerated stall?","How does a stall become a spin, and how do you recover?"],
notes:`## 1. Core idea
- A **stall** = the wing exceeds its **critical angle of attack (AoA)**. Airflow over the upper surface separates and **lift drops sharply** while **drag rises**.
- The wing still makes *some* lift in a stall, but not enough to support the weight, so the aircraft sinks or the nose drops.
- Stall is about **AoA, not airspeed**. A wing can stall fast or slow, in a climb, a dive, or a turn.

## 2. Why the flow separates
- Low to moderate AoA: air stays attached in a thin **boundary layer** (smooth, laminar then turbulent) and follows the wing.
- Increasing AoA → upper-surface air is accelerated more, then must slow down against rising pressure (an **adverse pressure gradient**).
- Past the critical AoA the boundary layer can no longer follow the surface → **flow separation** → turbulent wake → lift collapses.
- Typical critical AoA is about **15–18°** for a simple wing (varies with airfoil, flaps and contamination).

## 3. Stall SPEED vs critical AoA
- The **critical AoA is (almost) fixed** for a given wing shape and configuration.
- The **stall speed** is the speed at which you reach that AoA, and it changes:

| Factor | Effect on stall speed | Why |
| Weight ↑ | ↑ | More lift needed, so higher AoA at the same speed |
| Flaps down | ↓ | More camber and area, so more lift at low speed |
| Power on (propeller slipstream) | ↓ | Extra airflow over the wing and thrust component |
| Load factor n ↑ (turn or pull-up) | ↑ by √n | Lift must equal n × weight |
| Ice / frost / dirt | ↑ | Rough surface lowers critical AoA and lift |
| Altitude (IAS) | Same IAS | Stall IAS is almost unchanged; TAS is higher |
| CG aft | ↓ slightly | Less tail download needed |

- Quick rule: **Vs (turn) = Vs (level) × √(load factor)**. At 60° bank, n = 2, so Vs × 1.41.

## 4. Warning signs
- Stall warning horn or light (set a few knots above the stall).
- Reduced control effectiveness (mushy, large inputs needed).
- Buffet (airframe shake) as the separated wake hits the tail.
- Nose drop, and possibly a wing drop.

## 5. Standard recovery
1. **Reduce the AoA**: lower the nose, release back pressure.
2. **Apply full power** (smoothly) while unstalling.
3. Use **rudder** to keep the aircraft balanced and stop yaw. Do not fight a wing drop with aileron while stalled.
4. When the wing is flying again, **level the wings** and ease back to a climb.
5. Clean up flaps and gear as the manual requires.
- First action is **always** reduce AoA. Pulling back, or using aileron first, can deepen the stall or start a spin.

## 6. Types of stall
| Type | Idea | Typical situation |
| Clean (Vs1) | Stall with flaps and gear up | Slow flight in cruise configuration |
| Dirty / landing (Vs0) | Flaps and gear down | Approach and landing |
| Accelerated | Stall at n > 1, so higher speed | Steep turn, abrupt pull-up |
| Power-on | Stall with engine power | Take-off and go-around |
| Secondary | Stall after a rushed recovery | Pulling hard after the first stall |
| Deep stall | Wake blankets the tail | Mostly T-tail, rear-engine aircraft |

## 7. Stall to spin
- A **spin** = a stall with **yaw**: one wing stalls deeper (**autorotation**), so the aircraft rotates and descends steeply.
- Usual cause: **uncoordinated flight** at the stall (too little or too much rudder, slipping or skidding turns at low height).
- Standard recovery (check the POH): **power idle, ailerons neutral, full opposite rudder, control column forward** until rotation stops, then level and recover from the dive.
- Spin entries close to the ground (base-to-final turns) are the classic accident pattern: the height lost in recovery is too much.`,
sum:`- A stall is caused by **exceeding the critical AoA**, not by a specific speed.
- Critical AoA is fixed; **stall speed** changes with weight, flaps, power, load factor and contamination.
- Recovery order: **reduce AoA → full power → rudder to balance → level wings**.
- A spin needs a stall **and** yaw: keep the aircraft coordinated at low speed.
- C172S reference (verify with the POH): Vs1 about 53 kt, Vs0 about 48 kt.`,
mcq:[
{q:"A wing stalls when:",o:{A:"The airspeed falls below the green arc",B:"The critical angle of attack is exceeded",C:"The engine power is reduced",D:"The aircraft is above a certain altitude"},a:"B",why:"Stall is defined by AoA. Speed is only an indirect indicator."},
{q:"Which statement about the critical angle of attack is correct?",o:{A:"It increases with aircraft weight",B:"It is lower at high altitude",C:"It is basically fixed for a given wing and configuration",D:"It depends on engine power"},a:"C",why:"Weight and altitude change the stall speed, not the critical AoA."},
{q:"What is the FIRST action in a stall recovery?",o:{A:"Apply full power",B:"Reduce the angle of attack",C:"Level the wings with aileron",D:"Raise the flaps"},a:"B",why:"The cause is excess AoA, so reduce it first, then add power."},
{q:"Which change DECREASES the stall speed?",o:{A:"Increasing weight",B:"Ice on the wing",C:"Extending flaps",D:"Entering a steep turn"},a:"C",why:"Flaps increase lift at low speed. The others raise the stall speed."},
{q:"In a level 60° bank turn (load factor 2), the stall speed is about:",o:{A:"The same as level flight",B:"1.4 × level stall speed",C:"2 × level stall speed",D:"0.7 × level stall speed"},a:"B",why:"Vs × √n = Vs × √2 ≈ 1.41."},
{q:"Which is NOT a normal stall warning sign?",o:{A:"Stall warning horn",B:"Buffet",C:"Increasing control effectiveness",D:"Nose drop"},a:"C",why:"Control effectiveness decreases as the wing approaches the stall."},
{q:"On base-to-final you tighten a turn and pull back; the horn sounds and a wing starts to drop. Best action?",o:{A:"Pull back more to stop the descent",B:"Aileron against the dropping wing, keep the back pressure",C:"Lower the nose, add power, use rudder to stay balanced",D:"Reduce power to idle"},a:"C",why:"Reduce AoA first. Aileron on a stalled wing can aggravate the drop, and idle power loses recovery energy."},
{q:"A spin is best described as:",o:{A:"A stall with symmetric airflow over both wings",B:"A stall with yaw, where one wing is more stalled and the aircraft autorotates",C:"A very high speed dive with rotation",D:"A turn with too little bank"},a:"B",why:"Spin = stall + yaw → autorotation."},
{q:"Why is an accelerated stall dangerous in a steep turn?",o:{A:"The critical AoA is much lower",B:"The stall speed rises, so a stall can occur at a higher airspeed than expected",C:"Flaps are required",D:"It only happens in the clean configuration"},a:"B",why:"Load factor raises the stall speed by √n while the critical AoA is unchanged."},
{q:"Frost is on the wings before take-off. What is the effect?",o:{A:"None, if it is thin",B:"Higher stall speed and reduced lift",C:"Lower stall speed",D:"Only an increase in drag"},a:"B",why:"Surface roughness lowers the critical AoA and reduces lift, so the stall speed increases."}
]},
{id:"ln.pof.lift",k:"pof",n:2,t:"Lift Generation",g:"Lift Generation",src:["PHAK ch4–5","Airspace POF","Lecture 13a (What causes lift?)"],
rec:["What are the four forces and when are they balanced?","How is lift generated: pressure view and momentum view","What is the equal-transit-time myth?","What is angle of attack and how does lift change with it?","What does the lift formula L = ½ρV²SCL tell you?","Parasite vs induced drag"],
notes:`## 1. The four forces
- **Lift** (⟂ relative wind), **Weight** (towards the Earth), **Thrust** (forward), **Drag** (parallel to relative wind, backwards).
- Straight and level, constant speed: **Lift = Weight** and **Thrust = Drag**.
- Lift does not have to point straight up. In a climb or turn it is tilted, which is why load factor matters later.

## 2. Two correct views of lift
- **Pressure view (Bernoulli):** faster flow over the upper surface → lower static pressure. The pressure difference × area = lift (about two thirds comes from the suction on top).
- **Momentum view (Newton):** the wing turns the air **downward** (downwash). The reaction on the wing is upward lift.
- These are the **same effect**, not rival theories. Pressure differences and flow turning happen together.

## 3. The equal-transit-time myth
- Myth: the top air has farther to go, so it must be faster to meet the bottom air at the trailing edge.
- Wrong: there is no rule that the two parcels meet. The top air actually arrives **earlier**.
- Do not use this explanation in an interview. Use the pressure plus momentum explanation.

## 4. Angle of attack and the lift curve
- **AoA** = angle between the **chord line** and the **relative wind** (not the nose attitude).
- Lift increases roughly linearly with AoA until the **critical AoA**, then drops (stall).
- The graph of **CL against α** is the lift curve. A cambered wing makes lift even at 0° AoA.

## 5. Lift formula
- **L = ½ × ρ × V² × S × CL**
| Term | Meaning | How a pilot changes it |
| ρ | Air density | Altitude, temperature (high and hot = lower lift) |
| V | True airspeed | Power, pitch |
| S | Wing area | Flaps (increase effective area) |
| CL | Lift coefficient | AoA, flaps, airfoil shape |
- Because lift ∝ V², halving speed needs about four times the CL to keep lift constant.

## 6. Drag in two parts
- **Parasite drag** (form, skin friction, interference) rises with V².
- **Induced drag** (a by-product of lift: wingtip vortices) is largest at **low speed, high AoA**.
- Total drag is lowest at the speed of **best L/D** (about Vmd). Below it you are on the "back of the power curve".`,
sum:`- Four forces: L = W and T = D in steady level flight.
- Lift = pressure difference **and** downward deflection of air. Equal transit time is wrong.
- AoA is wing against airflow, and lift rises with AoA until the critical AoA.
- L = ½ρV²SCL: density, speed, area and CL set the lift.
- Induced drag is highest at low speed; parasite drag rises with speed. Best L/D is where they balance.`,
mcq:[
{q:"In steady level flight, which is correct?",o:{A:"Lift = Weight and Thrust = Drag",B:"Lift = Thrust",C:"Lift is greater than Weight",D:"Drag = Weight"},a:"A",why:"Each pair is balanced."},
{q:"Which explanation of lift is a common myth?",o:{A:"The wing deflects air downwards",B:"Lower pressure above the wing",C:"Top and bottom air must reach the trailing edge at the same time",D:"Pressure difference acts on the wing area"},a:"C",why:"Equal transit time has no physical basis."},
{q:"Angle of attack is measured between:",o:{A:"Chord line and relative wind",B:"Nose and horizon",C:"Wing and fuselage",D:"Flight path and horizon"},a:"A",why:"It is the wing against the airflow."},
{q:"If the airspeed halves at the same lift and density, the CL must become about:",o:{A:"Half",B:"The same",C:"Double",D:"Four times"},a:"D",why:"Lift ∝ V², so CL must increase by 4."},
{q:"Induced drag is greatest:",o:{A:"At high speed in a dive",B:"At low speed with a high angle of attack",C:"At the speed of minimum drag",D:"In the clean configuration only"},a:"B",why:"It is a by-product of lift and falls as speed rises."},
{q:"Which change INCREASES lift at a given speed and AoA?",o:{A:"Higher density altitude",B:"Higher air density",C:"Smaller wing area",D:"Lower CL"},a:"B",why:"L = ½ρV²SCL, and a higher ρ gives more lift."},
{q:"On a hot, high-altitude airfield, to get the same lift you need:",o:{A:"A lower true airspeed",B:"A higher true airspeed",C:"The same true airspeed",D:"Less flap"},a:"B",why:"Thin air (lower ρ) must be compensated by a higher TAS."},
{q:"The best L/D speed is where:",o:{A:"Parasite drag is highest",B:"Total drag is lowest",C:"Induced drag is zero",D:"Thrust is zero"},a:"B",why:"Best L/D = minimum total drag."}
]}
]);
