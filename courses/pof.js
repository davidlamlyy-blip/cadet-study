// Duolingo 式課程：Principles of Flight（示範 Unit 1）。內容來源：data/pof.js 嘅 topic（PHAK ch5／RPL ch6／ENZO 06／Lecture 13a）
Cadet.course({key:"pof",name:"Principles of Flight",emoji:"🛩️",color:"#7dd3fc",units:[
{id:"pof-u1",title:"Unit 1 · 機翼點樣托起架機",desc:"四力 → lift 邊度嚟 → AoA → stall",lessons:[
 {id:"pof-1-1",title:"四力",icon:"⚖️",topic:"pof.fourforces",topics:["pof.fourforces"],steps:[
  {t:"teach",title:"飛機受四個力",say:"一架飛機喺空中永遠受 <b>4 個力</b>。兩個係「機自己搞出嚟」，兩個係「自然施加」。",terms:[["Lift","升力"],["Weight","重力"],["Thrust","推力"],["Drag","阻力"]],tip:"先記住：Lift 同 Weight 一對，Thrust 同 Drag 一對。"},
  {t:"teach",title:"邊個向邊？",say:"<b>Weight</b> 一直指向地心。<b>Lift</b> 垂直於 relative wind（氣流）。<b>Thrust</b> 向前推，<b>Drag</b> 向後拖，兩者平行於 relative wind。",viz:{k:"pof",t:"Four Forces"}},
  {t:"mcq",q:"Which two forces are a pair?",opts:["Lift and Weight","Lift and Thrust","Weight and Drag"],a:0,why:"Lift balances Weight (up/down). Thrust balances Drag (forward/back)."},
  {t:"teach",title:"平衡 = 勻速平飛",say:"Straight and level、速度唔變嗰陣：<b>Lift = Weight</b>，同時 <b>Thrust = Drag</b>。有一對唔平衡，飛機就會加速、減速、爬升或下降。",tip:"唔係「冇力」，係「力平衡」。"},
  {t:"fill",text:"In steady level flight, Lift ___ Weight and Thrust ___ Drag.",bank:["=","=","＞","＜"],a:["=","="],why:"Each pair is balanced, so speed and height stay constant."},
  {t:"tf",q:"If Thrust is greater than Drag (everything else unchanged), the aircraft accelerates.",a:true,why:"There is a net force forward. It accelerates until Drag rises to equal Thrust."},
  {t:"mcq",q:"To start climbing, which force must be bigger?",opts:["Lift bigger than Weight","Weight bigger than Lift","Drag bigger than Thrust"],a:0,why:"A net upward force is needed. In practice you raise AoA and add thrust."},
  {t:"order",q:"Put the chain of events in order. Thrust is reduced:",items:["Thrust is less than Drag","The aircraft slows down","Lift decreases","The aircraft descends unless AoA is increased"],why:"Less thrust, then less speed, then less lift."},
  {t:"match",q:"Match each force with its direction",pairs:[["Weight","Towards the Earth"],["Drag","Backwards"],["Thrust","Forwards"],["Lift","Perpendicular to the relative wind"]]}
 ]},
 {id:"pof-1-2",title:"Lift 邊度嚟",icon:"🌬️",topic:"pof.bernoulli",topics:["pof.bernoulli","pof.newton","pof.liftmyth"],steps:[
  {t:"teach",title:"兩個講法，講同一件事",say:"解釋 lift 常見有兩個講法：<b>Bernoulli</b>（壓力）同 <b>Newton</b>（動量）。兩個都啱，只係講唔同角度。",terms:[["Bernoulli","流速快 → 壓力低"],["Newton's 3rd law","作用同反作用"]]},
  {t:"teach",title:"Bernoulli：壓力差",say:"機翼上面流速較高 → 靜壓較低；下面壓力相對高。<b>壓力差 × 面積 = lift</b>。大約三分之二嘅 lift 係上翼面「抽」出嚟。"},
  {t:"teach",title:"Newton：向下偏轉",say:"機翼將空氣向下推（<b>downwash</b>）。空氣獲得向下動量，機翼受到向上嘅反作用力，就係 lift。",viz:{k:"pof",t:"Four Forces"},tip:"兩個講法其實係同一個現象：壓力差同氣流偏轉係同時發生。"},
  {t:"mcq",q:"Bernoulli says: where the airspeed is higher, the pressure is...",opts:["Lower","Higher","The same"],a:0,why:"Faster flow means lower static pressure."},
  {t:"mcq",q:"From Newton's point of view, lift is...",opts:["The reaction to the wing pushing air downward","A form of gravity","A type of friction"],a:0,why:"The wing deflects air down (downwash), so the air pushes the wing up."},
  {t:"teach",title:"常見誤解",say:"「<b>Equal transit time</b>」講法話：上面氣流要行多啲路，所以要行得快，同時到達後緣。<b>呢個係錯嘅</b>：氣流唔會同時到後緣，上面氣流實際到得更早。",terms:[["Equal transit time","✗ 錯"]]},
  {t:"tf",q:"The air above and below the wing must reach the trailing edge at the same time (equal transit time).",a:false,why:"This is a common myth. The air over the top actually arrives earlier."},
  {t:"fill",text:"Lift comes from a pressure difference and from air being ___ downward. The pressure above the wing is ___.",bank:["deflected","lower","higher","stopped"],a:["deflected","lower"],why:"Pressure and momentum are two views of the same effect."},
  {t:"match",q:"Match the idea with its meaning",pairs:[["Bernoulli","Faster flow, lower pressure"],["Newton","Downwash gives an upward reaction"],["Equal transit time","A common myth"]]}
 ]},
 {id:"pof-1-3",title:"攻角 AoA",icon:"📐",topic:"pof.aoa",topics:["pof.aoa","pof.clcurve"],steps:[
  {t:"teach",title:"AoA 係邊個角？",say:"<b>Angle of Attack (AoA)</b> ＝ 機翼嘅 <b>chord line</b>（前緣到後緣條線）同 <b>relative wind</b>（相對氣流）之間嘅夾角。",terms:[["Chord line","弦線"],["Relative wind","相對氣流"]],tip:"AoA 唔係機頭指向地平線嘅角（嗰個叫 pitch attitude）。"},
  {t:"mcq",q:"Angle of attack is the angle between which two lines?",opts:["The chord line and the relative wind","The fuselage and the horizon","The nose and the runway"],a:0,why:"It depends on the wing and the airflow, not on where the nose points."},
  {t:"teach",title:"AoA 越大，lift 越大（到某個點）",say:"AoA 增加，機翼令氣流偏轉得更多，lift 上升。<b>但係</b>過咗 <b>critical AoA</b>（大約 16–20°，細飛機常見約 16°），氣流離開機翼表面，lift 反而跌。",viz:{k:"pof",t:"Lift → AoA"}},
  {t:"mcq",q:"As angle of attack increases (below the critical angle), lift...",opts:["Increases","Decreases","Stays the same"],a:0,why:"The wing turns more air downward, so lift grows until the stall."},
  {t:"tf",q:"Angle of attack is the same as the pitch attitude of the aircraft.",a:false,why:"Pitch attitude is nose versus horizon. AoA is wing versus airflow."},
  {t:"teach",title:"點解要識 AoA？",say:"因為 <b>stall 只同 AoA 有關</b>。細飛機多數冇 AoA indicator，所以你要靠 attitude、speed、感覺同 stall warning 嚟估 AoA。"},
  {t:"order",q:"Put these in order as the angle of attack keeps increasing:",items:["Angle of attack increases","Lift increases","The critical angle is reached","Airflow separates and lift drops (stall)"],why:"Lift rises first, then falls after the critical angle."},
  {t:"fill",text:"Lift ___ as AoA increases, until the ___ angle of attack is passed. Then the wing will ___.",bank:["increases","critical","stall","decreases","accelerate"],a:["increases","critical","stall"],why:"This rise-then-fall shape is the lift curve (CL against alpha)."}
 ]},
 {id:"pof-1-4",title:"Stall",icon:"🛑",topic:"pof.stall",topics:["pof.stall","pof.stallsym","pof.accstall"],steps:[
  {t:"teach",title:"Stall 係咩？",say:"Stall ＝ <b>AoA 超過 critical angle</b>，氣流喺上翼面分離（<b>flow separation</b>），lift 驟跌、drag 上升。",terms:[["Stall","失速"],["Critical AoA","臨界攻角"]],viz:{k:"pof",t:"Lift → AoA"}},
  {t:"teach",title:"重點：同速度無直接關係",say:"Stall <b>可以喺任何 attitude、任何速度</b>發生。「低速」只係令你要用更大 AoA 去維持 lift，所以更易去到 critical AoA。",tip:"機頭向下、高速，一樣可以 stall（例如急拉）。"},
  {t:"tf",q:"A stall can only happen at low airspeed.",a:false,why:"A wing stalls whenever the critical AoA is exceeded, at any speed (for example, a sharp pull-up)."},
  {t:"mcq",q:"What is the direct cause of a stall?",opts:["The angle of attack is too high and the airflow separates","The engine has failed","The airspeed is too high"],a:0,why:"Stall = exceeding the critical angle of attack."},
  {t:"teach",title:"Stall 嘅徵兆",say:"通常見到：<b>stall warning</b> 響、操縱感變軟、buffet（抖動）、機頭下沉（nose drops）。Nose drops 因為 CP 喺 CG 後面。",terms:[["Buffet","抖動"],["Stall warning","警告"]]},
  {t:"match",q:"Match the stall sign with its meaning",pairs:[["Stall warning","An audible or visual alert"],["Buffet","The airframe shakes"],["Nose drop","The nose pitches down"],["Flow separation","Air leaves the wing surface"]]},
  {t:"fill",text:"A stall is caused by too high an ___ of attack, past the ___ angle, not by low ___.",bank:["angle","critical","airspeed","altitude"],a:["angle","critical","airspeed"],why:"Low speed only means you need a higher AoA to keep lift."},
  {t:"mcq",q:"You pull up sharply at high speed. Can the wing stall?",opts:["Yes, if the critical AoA is exceeded","No, the speed is too high","Only with flaps extended"],a:0,why:"This is an accelerated stall. The stall speed rises with load factor."}
 ]},
 {id:"pof-1-5",title:"Stall 改出同影響因素",icon:"🔧",topic:"pof.stallrec",topics:["pof.stallrec","pof.stallfactors"],steps:[
  {t:"teach",title:"改出：先減 AoA",say:"Stall recovery 順序：① <b>降機頭／向前推 control column（減 AoA）</b> ② <b>加 full power</b> ③ 用 rudder 止 yaw、wing drop ④ 機翼 unstall 之後先用 aileron 水平 ⑤ 小心拉返出嚟。",terms:[["Unstall","解除失速"]]},
  {t:"order",q:"Put the stall recovery actions in order:",items:["Lower the nose (reduce AoA)","Apply full power","Use rudder to stay balanced","Level the wings with aileron after the wing has unstalled","Ease back into a climb"],why:"First reduce the angle of attack."},
  {t:"mcq",q:"What is the first step in a stall recovery?",opts:["Reduce the angle of attack (lower the nose)","Apply full power and pull back","Use aileron to lift the wing"],a:0,why:"The problem is too much AoA, so reduce it first."},
  {t:"teach",title:"邊啲因素令 stall speed 變？",say:"<b>Stall AoA 唔變</b>，但 <b>stall speed</b> 會變：重量 ↑ → Vs ↑；<b>Flap</b> 放出 → Vs ↓；<b>Power on</b> → Vs ↓；<b>Load factor n</b> ↑ → Vs ×√n；<b>冰／霜／污垢</b> → Vs ↑。",viz:{k:"pof",t:"Turn: Bank"}},
  {t:"match",q:"Match each factor with its effect on stall speed",pairs:[["More weight","Stall speed goes up"],["Flaps down","Stall speed goes down"],["Steep turn (higher load factor)","Stall speed goes up"],["Ice on the wing","Stall speed goes up"]]},
  {t:"tf",q:"A steep turn increases the stall speed.",a:true,why:"Load factor goes up, so stall speed rises by the square root of the load factor."},
  {t:"mcq",q:"What happens to the critical angle of attack in practice?",opts:["It is basically fixed for a given wing","It changes with weight","It changes with airspeed"],a:0,why:"Wing shape sets it (ice can lower it). Weight and speed change the stall speed instead."},
  {t:"fill",text:"Stall recovery: first ___ the AoA, then add ___, and use ___ to stop yaw.",bank:["reduce","power","rudder","increase","aileron"],a:["reduce","power","rudder"],why:"Order: unstall, power, balance, then level the wings."}
 ]},
 {id:"pof-1-s",title:"Real-life scenarios",icon:"🎯",scenario:true,steps:[
  {t:"scenario",sit:"You are flying a Cessna 172 straight and level at 3,000 ft. ATC asks you to slow down to 80 kt to space you behind traffic, but to keep your altitude.",q:"You reduce power. What do you do to hold 3,000 ft at the lower speed?",opts:["Increase the angle of attack slightly (raise the nose a little)","Keep the same pitch and wait","Lower the nose to keep the speed up"],a:0,fb:["Lift stays equal to weight, so you hold your altitude.","With less airspeed and the same AoA, lift falls below weight and you start to descend.","The nose-down attitude makes you descend and speed up again, so you cannot hold altitude or the lower speed."],why:"Lift depends on speed and angle of attack. When speed falls, you need more AoA to keep lift equal to weight."},
  {t:"scenario",sit:"You are climbing out after take-off. The nose is 10° above the horizon on the attitude indicator, and your instructor says: 'Tell me your angle of attack.'",q:"What is the best answer?",opts:["I cannot tell it from the pitch alone; AoA is the wing against the relative wind","It is 10°, the same as the pitch","It is always about 5° in a climb"],a:0,fb:["Correct thinking: the flight path is also climbing, so the AoA is smaller than the pitch.","In a climb the aircraft moves upward, so the relative wind also comes from slightly below the horizon. AoA is less than pitch.","There is no fixed AoA for a climb; it depends on speed, weight and configuration."],why:"Pitch attitude and AoA are different angles. Pitch = nose against horizon. AoA = wing against the relative wind."},
  {t:"scenario",sit:"You turn base to final at 500 ft AGL. You are a little high, so you tighten the turn and pull back. The stall warning sounds and you feel a light buffet.",q:"What is your first action?",opts:["Lower the nose to reduce the angle of attack","Pull back more to stop the descent","Roll the wings level with aileron only"],a:0,fb:["The wing flies again. Then add power, keep balanced and recover.","Pulling back increases the AoA even more, and the wing stalls fully at low height.","Aileron on a nearly stalled wing can make a wing drop worse. Reduce the AoA first."],why:"A stall is caused by too much angle of attack. The first recovery action is always to reduce it."},
  {t:"scenario",sit:"It is a frosty morning. There is a thin layer of frost on the wings. Your passenger says, 'It is thin, it will blow off when we take off.'",q:"What do you decide?",opts:["Remove all frost before flight","Take off, since the layer is thin","Take off but use a longer take-off run"],a:0,fb:["Correct. A clean wing is required before take-off.","Frost makes the surface rough, which lowers the critical AoA and raises the stall speed. The wing could stall right after lift-off.","A longer run does not fix the rough surface; the wing can still stall at a much lower AoA."],why:"Frost, ice and dirt reduce lift and raise the stall speed. Always fly with a clean wing."},
  {t:"scenario",sit:"You are doing a steep turn at 60° of bank (load factor about 2 g). Your 1 g stall speed is 50 kt. You are at 65 kt.",q:"Is the wing close to stalling?",opts:["Yes, the stall speed is now about 71 kt, so it will stall","No, 65 kt is above the 50 kt stall speed","No, a turn does not change the stall speed"],a:0,fb:["Stall speed = 50 × √2 ≈ 71 kt. At 65 kt, the wing is already below it.","The 50 kt value is only for 1 g. In the turn the stall speed is higher.","Load factor increases in a turn, so the stall speed increases too."],why:"Stall speed increases with the square root of the load factor: Vs × √n."}
 ]},
 {id:"pof-1-q",title:"Unit quiz",icon:"🏆",quiz:true,steps:[
  {t:"mcq",q:"In steady level flight, which statement is correct?",opts:["Lift = Weight and Thrust = Drag","Lift = Thrust and Weight = Drag","Lift is greater than Weight"],a:0,why:"The two pairs are balanced."},
  {t:"tf",q:"Increasing thrust alone always makes an aircraft climb.",a:false,why:"It can simply make the aircraft accelerate. Climbing needs lift greater than weight."},
  {t:"mcq",q:"Which explanation of lift is a common myth?",opts:["The air above and below must meet at the trailing edge at the same time","The wing deflects air downward","Pressure is lower above the wing"],a:0,why:"Equal transit time is wrong. The upper air arrives earlier."},
  {t:"mcq",q:"The angle of attack is measured between:",opts:["The chord line and the relative wind","The nose and the horizon","The wing and the fuselage"],a:0,why:"It is the wing against the airflow."},
  {t:"tf",q:"The critical angle of attack changes with aircraft weight.",a:false,why:"It is mostly fixed by wing shape. Weight changes the stall speed."},
  {t:"mcq",q:"A wing stalls when:",opts:["The critical angle of attack is exceeded","The airspeed is below 60 kt","The engine power is too low"],a:0,why:"A stall can happen at any speed or attitude."},
  {t:"fill",text:"The first step of a stall recovery is to ___ the angle of attack, then add ___.",bank:["reduce","power","increase","flaps"],a:["reduce","power"],why:"Unstall first, then power."},
  {t:"order",q:"Put the stall recovery in order:",items:["Lower the nose","Apply full power","Stop yaw with rudder","Level the wings after unstalling"],why:"AoA first, wings level last."},
  {t:"match",q:"Match the factor with the effect on stall speed",pairs:[["More weight","Higher"],["Flaps extended","Lower"],["Ice on wing","Higher"],["Steep turn","Higher"]]},
  {t:"mcq",q:"Your 1 g stall speed is 60 kt. In a 2 g turn, the stall speed is about:",opts:["85 kt","60 kt","42 kt"],a:0,why:"60 × √2 ≈ 85 kt."}
 ]}
]}
]});
