(function(){var css=[
'#rb-left,#rb-right{position:fixed;top:0;bottom:0;width:clamp(210px,16vw,280px);z-index:1;display:none;flex-direction:column;pointer-events:none;}',
'@media(min-width:1300px){#rb-left,#rb-right{display:flex;}}',
'#rb-left{left:0;background:linear-gradient(to right,rgba(10,2,30,0.92) 0%,rgba(10,2,30,0.6) 68%,transparent 100%);border-right:1px solid rgba(139,92,246,0.12);}',
'#rb-right{right:0;background:#010209;border-left:1px solid rgba(0,210,255,0.1);}',
'#rb-left::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px);background-size:20px 20px;pointer-events:none;z-index:0;}',
'#rb-left::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(167,139,250,0.6),transparent);animation:rbScanL 5s ease-in-out infinite;z-index:3;}',
'#rb-right::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,210,255,0.4),transparent);animation:rbScanR 6s ease-in-out 1s infinite;z-index:3;}',
'@keyframes rbScanL{0%{top:0;opacity:0}5%{opacity:1}92%{opacity:.35}100%{top:100%;opacity:0}}',
'@keyframes rbScanR{0%{top:0;opacity:0}5%{opacity:1}92%{opacity:.25}100%{top:100%;opacity:0}}',
'@keyframes rbBlink{0%,100%{opacity:1}50%{opacity:.15}}',
'@keyframes rbAttFlow{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}',
'@keyframes rbLayerPulse{0%,100%{opacity:.4}50%{opacity:.9}}',
'@keyframes rbShield{0%,100%{opacity:.15;transform:scale(.93)}50%{opacity:.85;transform:scale(1.05)}}',
'@keyframes rbO1{from{transform:rotate(0deg) translateX(55px) rotate(0deg)}to{transform:rotate(360deg) translateX(55px) rotate(-360deg)}}',
'@keyframes rbO2{from{transform:rotate(130deg) translateX(40px) rotate(-130deg)}to{transform:rotate(490deg) translateX(40px) rotate(-490deg)}}',
'@keyframes rbO3{from{transform:rotate(255deg) translateX(66px) rotate(-255deg)}to{transform:rotate(615deg) translateX(66px) rotate(-615deg)}}',
'@keyframes rbSigOut{0%{r:0;opacity:.8}100%{r:62;opacity:0}}',
'.rb-wrap{position:relative;z-index:2;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:70px 0 24px;}',
'.rb-top{display:flex;flex-direction:column;align-items:flex-start;gap:4px;width:100%;padding:0 16px;}',
'.rb-lbl{font-size:7.5px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;font-family:"Roboto Mono","Courier New",monospace;}',
'.rb-ttl{font-size:14px;font-weight:600;color:#fff;line-height:1.2;letter-spacing:0.01em;}',
'.rb-sub{font-size:8.5px;font-family:"Roboto Mono","Courier New",monospace;margin-top:2px;}',
'.rb-vis{flex:1;width:100%;display:flex;align-items:center;justify-content:center;padding:0 8px;}',
'.rb-bottom{width:100%;padding:0 14px;display:flex;flex-direction:column;gap:6px;}',
'.rb-metric{display:flex;justify-content:space-between;align-items:center;}',
'.rb-mlbl{font-size:7px;color:rgba(255,255,255,0.3);font-family:"Roboto Mono","Courier New",monospace;text-transform:uppercase;letter-spacing:.08em;}',
'.rb-mval{font-size:7px;font-family:"Roboto Mono","Courier New",monospace;}',
'.rb-st{display:flex;align-items:center;gap:5px;margin-top:4px;}',
'.rb-dot{width:5px;height:5px;border-radius:50%;animation:rbBlink 1.6s ease-in-out infinite;}',
'.rb-stxt{font-size:8px;font-family:"Roboto Mono","Courier New",monospace;}',
'#rb-left .rb-lbl{color:rgba(167,139,250,0.65);}#rb-left .rb-sub{color:rgba(217,70,239,0.5);}#rb-left .rb-mval{color:rgba(216,180,254,0.75);}#rb-left .rb-dot{background:#a855f7;}#rb-left .rb-stxt{color:rgba(167,139,250,0.65);}',
'#rb-right .rb-lbl{color:rgba(0,210,255,0.55);}#rb-right .rb-sub{color:rgba(0,210,255,0.4);}#rb-right .rb-mval{color:rgba(0,210,255,0.7);}#rb-right .rb-dot{background:#00d4ff;}#rb-right .rb-stxt{color:rgba(0,210,255,0.6);}'
].join('');
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ── Full-panel space background (covers entire right panel) ── */
var spBg='<svg width="100%" height="100%" viewBox="0 0 220 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs>'
+'<radialGradient id="sn1" cx="25%" cy="20%" r="40%"><stop offset="0%" stop-color="rgba(80,30,160,0.14)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'<radialGradient id="sn2" cx="80%" cy="75%" r="35%"><stop offset="0%" stop-color="rgba(20,60,200,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'<radialGradient id="sn3" cx="60%" cy="45%" r="30%"><stop offset="0%" stop-color="rgba(100,20,180,0.07)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'</defs>'
+'<rect fill="#010209" width="220" height="500"/>'
+'<rect fill="url(#sn1)" width="220" height="500"/><rect fill="url(#sn2)" width="220" height="500"/><rect fill="url(#sn3)" width="220" height="500"/>'
/* Milky Way */
+'<ellipse cx="45" cy="70" rx="50" ry="14" fill="rgba(200,210,255,0.025)" transform="rotate(-35 45 70)"/>'
+'<ellipse cx="100" cy="175" rx="50" ry="13" fill="rgba(200,210,255,0.028)" transform="rotate(-35 100 175)"/>'
+'<ellipse cx="158" cy="285" rx="45" ry="12" fill="rgba(200,210,255,0.025)" transform="rotate(-35 158 285)"/>'
+'<ellipse cx="200" cy="390" rx="40" ry="11" fill="rgba(200,210,255,0.02)" transform="rotate(-35 200 390)"/>'
/* Stars row by row across full 220×500 */
+'<g fill="rgba(255,255,255,0.8)"><circle cx="14" cy="10" r="0.7"/><circle cx="62" cy="8" r="0.6"/><circle cx="112" cy="12" r="0.5"/><circle cx="162" cy="9" r="0.6"/><circle cx="210" cy="8" r="0.7"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="38" cy="20" r="0.5"/><circle cx="88" cy="27" r="0.4"/><circle cx="138" cy="22" r="0.5"/><circle cx="188" cy="24" r="0.4"/><circle cx="22" cy="40" r="0.5"/><circle cx="72" cy="34" r="0.4"/><circle cx="152" cy="47" r="0.5"/><circle cx="202" cy="42" r="0.4"/></g>'
+'<g fill="rgba(255,255,255,0.65)"><circle cx="48" cy="52" r="0.6"/><circle cx="128" cy="44" r="0.5"/><circle cx="178" cy="38" r="0.6"/></g>'
+'<g fill="rgba(255,255,255,0.55)"><circle cx="10" cy="65" r="0.5"/><circle cx="55" cy="80" r="0.4"/><circle cx="102" cy="74" r="0.5"/><circle cx="155" cy="68" r="0.4"/><circle cx="208" cy="62" r="0.5"/><circle cx="30" cy="70" r="0.4"/><circle cx="78" cy="65" r="0.5"/><circle cx="128" cy="80" r="0.4"/><circle cx="178" cy="74" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="18" cy="98" r="0.5"/><circle cx="68" cy="90" r="0.6"/><circle cx="118" cy="97" r="0.5"/><circle cx="168" cy="92" r="0.6"/><circle cx="42" cy="106" r="0.4"/><circle cx="92" cy="110" r="0.5"/><circle cx="142" cy="106" r="0.4"/><circle cx="195" cy="100" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="8" cy="128" r="0.4"/><circle cx="58" cy="120" r="0.5"/><circle cx="108" cy="124" r="0.4"/><circle cx="158" cy="120" r="0.5"/><circle cx="32" cy="135" r="0.4"/><circle cx="82" cy="138" r="0.5"/><circle cx="132" cy="132" r="0.4"/><circle cx="182" cy="130" r="0.5"/><circle cx="215" cy="118" r="0.4"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="8" cy="158" r="0.5"/><circle cx="22" cy="172" r="0.4"/><circle cx="14" cy="186" r="0.6"/><circle cx="25" cy="204" r="0.4"/><circle cx="10" cy="222" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="196" cy="158" r="0.5"/><circle cx="208" cy="172" r="0.4"/><circle cx="215" cy="186" r="0.6"/><circle cx="204" cy="204" r="0.4"/><circle cx="210" cy="222" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.55)"><circle cx="12" cy="268" r="0.5"/><circle cx="62" cy="260" r="0.4"/><circle cx="112" cy="268" r="0.5"/><circle cx="162" cy="262" r="0.4"/><circle cx="38" cy="276" r="0.4"/><circle cx="88" cy="282" r="0.5"/><circle cx="138" cy="276" r="0.4"/><circle cx="192" cy="272" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="18" cy="300" r="0.5"/><circle cx="72" cy="292" r="0.4"/><circle cx="122" cy="296" r="0.5"/><circle cx="172" cy="292" r="0.4"/><circle cx="48" cy="308" r="0.4"/><circle cx="98" cy="312" r="0.5"/><circle cx="148" cy="306" r="0.4"/><circle cx="198" cy="302" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="10" cy="335" r="0.4"/><circle cx="62" cy="328" r="0.5"/><circle cx="112" cy="332" r="0.4"/><circle cx="162" cy="326" r="0.5"/><circle cx="34" cy="342" r="0.4"/><circle cx="86" cy="346" r="0.5"/><circle cx="134" cy="340" r="0.4"/><circle cx="188" cy="336" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="22" cy="368" r="0.5"/><circle cx="80" cy="360" r="0.4"/><circle cx="136" cy="364" r="0.5"/><circle cx="195" cy="358" r="0.4"/><circle cx="52" cy="376" r="0.4"/><circle cx="108" cy="380" r="0.5"/><circle cx="164" cy="374" r="0.4"/></g>'
+'<g fill="rgba(255,255,255,0.55)"><circle cx="15" cy="405" r="0.5"/><circle cx="65" cy="398" r="0.4"/><circle cx="115" cy="402" r="0.5"/><circle cx="165" cy="396" r="0.4"/><circle cx="40" cy="414" r="0.4"/><circle cx="90" cy="418" r="0.5"/><circle cx="140" cy="412" r="0.4"/><circle cx="190" cy="408" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="28" cy="440" r="0.5"/><circle cx="80" cy="432" r="0.4"/><circle cx="130" cy="436" r="0.5"/><circle cx="185" cy="430" r="0.4"/><circle cx="55" cy="448" r="0.4"/><circle cx="108" cy="452" r="0.5"/><circle cx="162" cy="446" r="0.4"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="12" cy="474" r="0.4"/><circle cx="62" cy="468" r="0.5"/><circle cx="112" cy="472" r="0.4"/><circle cx="162" cy="466" r="0.5"/><circle cx="38" cy="482" r="0.4"/><circle cx="88" cy="486" r="0.5"/><circle cx="138" cy="480" r="0.4"/><circle cx="192" cy="476" r="0.5"/></g>'
/* Sparkle stars */
+'<circle cx="42" cy="28" r="1.1" fill="rgba(255,255,255,0.95)"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>'
+'<circle cx="168" cy="78" r="1.0" fill="rgba(255,255,255,0.9)"><animate attributeName="opacity" values="1;0.4;1" dur="4s" repeatCount="indefinite"/></circle>'
+'<circle cx="25" cy="310" r="1.1" fill="rgba(255,255,255,0.95)"><animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/></circle>'
+'<circle cx="172" cy="344" r="1.0" fill="rgba(255,255,255,0.9)"><animate attributeName="opacity" values="1;0.4;1" dur="3.5s" repeatCount="indefinite"/></circle>'
+'<circle cx="110" cy="388" r="1.1" fill="rgba(255,255,255,0.95)"><animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite"/></circle>'
+'<circle cx="55" cy="460" r="1.0" fill="rgba(255,255,255,0.9)"><animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite"/></circle>'
/* Blue-tinted stars */
+'<g fill="rgba(160,200,255,0.7)"><circle cx="5" cy="30" r="0.6"/><circle cx="72" cy="52" r="0.5"/><circle cx="155" cy="34" r="0.6"/><circle cx="198" cy="60" r="0.5"/><circle cx="45" cy="115" r="0.6"/><circle cx="168" cy="108" r="0.5"/><circle cx="28" cy="240" r="0.6"/><circle cx="185" cy="256" r="0.5"/><circle cx="58" cy="358" r="0.6"/><circle cx="150" cy="368" r="0.5"/><circle cx="92" cy="438" r="0.6"/><circle cx="175" cy="492" r="0.5"/></g>'
+'</svg>';

/* ── LLM Security SVG ── */
var llm='<svg width="100%" viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="shMag" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d946ef" stop-opacity=".4"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/></radialGradient></defs>'
+'<g fill="rgba(88,28,135,0.25)" stroke="rgba(167,139,250,0.45)" stroke-width="0.6"><rect x="10" y="10" width="30" height="14" rx="3"/><rect x="46" y="10" width="30" height="14" rx="3"/><rect x="82" y="10" width="30" height="14" rx="3"/><rect x="118" y="10" width="30" height="14" rx="3"/><rect x="154" y="10" width="30" height="14" rx="3"/></g>'
+'<g fill="rgba(216,180,254,0.65)" font-size="6" font-family="Roboto Mono,monospace" text-anchor="middle"><text x="25" y="20">LLM</text><text x="61" y="20">SEC</text><text x="97" y="20">ATK</text><text x="133" y="20">DEF</text><text x="169" y="20">SHD</text></g>'
+'<path d="M25 24 Q61 44 97 24" stroke="rgba(217,70,239,0.75)" stroke-width="1.5" stroke-dasharray="5 3" fill="none" stroke-linecap="round" style="animation:rbAttFlow 1.6s linear infinite"/>'
+'<path d="M97 24 Q133 44 169 24" stroke="rgba(167,139,250,0.65)" stroke-width="1.1" stroke-dasharray="4 2" fill="none" stroke-linecap="round" style="animation:rbAttFlow 2.1s linear infinite reverse"/>'
+'<path d="M46 24 Q97 56 150 24" stroke="rgba(6,182,212,0.45)" stroke-width="0.8" stroke-dasharray="4 4" fill="none" style="animation:rbAttFlow 2.8s linear infinite"/>'
+'<path d="M25 24 Q97 66 169 24" stroke="rgba(236,72,153,0.2)" stroke-width="0.5" stroke-dasharray="2 5" fill="none"/>'
+'<rect x="14" y="58" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out infinite"/><text x="100" y="77" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 1</text>'
+'<rect x="14" y="94" width="172" height="30" rx="4" fill="rgba(88,28,135,0.5)" stroke="rgba(192,132,252,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .3s infinite"/><text x="100" y="113" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Feed-Forward Layer 1</text>'
+'<rect x="14" y="130" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .6s infinite"/><text x="100" y="149" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 2</text>'
+'<rect x="14" y="166" width="172" height="30" rx="4" fill="rgba(88,28,135,0.5)" stroke="rgba(192,132,252,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .9s infinite"/><text x="100" y="185" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Feed-Forward Layer 2</text>'
+'<rect x="14" y="202" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out 1.2s infinite"/><text x="100" y="221" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 3</text>'
+'<rect x="14" y="238" width="172" height="30" rx="4" fill="rgba(107,33,168,0.6)" stroke="rgba(217,70,239,0.4)" stroke-width="0.9" style="animation:rbLayerPulse 1.5s ease-in-out 1.5s infinite"/><text x="100" y="257" text-anchor="middle" fill="rgba(240,171,252,0.85)" font-size="7.5" font-family="Roboto Mono,monospace">Output Projection</text>'
+'<line x1="100" y1="268" x2="100" y2="288" stroke="rgba(167,139,250,0.25)" stroke-width="0.8" stroke-dasharray="3 3"/>'
+'<circle r="4.5" fill="#d946ef" opacity="0"><animateMotion dur="4s" repeatCount="indefinite" path="M4,100 Q60,75 100,125"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0;0.08;0.75;0.88;1" values="0;1;0.9;0;0"/></circle>'
+'<g transform="translate(100,310)" style="animation:rbShield 3s ease-in-out infinite"><path d="M0,-22 L-17,-11 L-17,6 Q-17,22 0,28 Q17,22 17,6 L17,-11 Z" fill="rgba(139,92,246,0.08)" stroke="rgba(217,70,239,0.55)" stroke-width="1.3"/><path d="M0,-22 L-17,-11 L-17,6 Q-17,22 0,28 Q17,22 17,6 L17,-11 Z" fill="url(#shMag)"/><text x="0" y="8" text-anchor="middle" fill="#d946ef" font-size="13" font-weight="600">&#10003;</text></g>'
+'<text x="100" y="345" text-anchor="middle" fill="rgba(167,139,250,0.4)" font-size="7" font-family="Roboto Mono,monospace">ADVERSARIAL DEFENSE</text>'
+'</svg>';

/* ── Satellite FL Workflow SVG (transparent — stars show through) ── */
var sat='<svg width="100%" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg"><defs>'
+'<radialGradient id="eG" cx="40%" cy="38%" r="58%"><stop offset="0%" stop-color="#2080c0"/><stop offset="40%" stop-color="#0d5090"/><stop offset="100%" stop-color="#030f22"/></radialGradient>'
+'<radialGradient id="aG" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="100%" stop-color="rgba(30,100,200,0.3)"/></radialGradient>'
+'<clipPath id="eC"><circle cx="100" cy="118" r="52"/></clipPath>'
+'</defs>'
/* Step labels */
+'<text x="6" y="18" fill="rgba(0,255,180,0.5)" font-size="6" font-family="Roboto Mono,monospace">① EARTH OBSERVATION</text>'
+'<text x="6" y="210" fill="rgba(167,139,250,0.5)" font-size="6" font-family="Roboto Mono,monospace">② ON-BOARD TRAINING</text>'
+'<text x="6" y="228" fill="rgba(0,210,255,0.5)" font-size="6" font-family="Roboto Mono,monospace">③ SECURE TRANSMISSION</text>'
/* Altitude labels */
+'<text x="6" y="52" fill="rgba(0,210,255,0.28)" font-size="6" font-family="Roboto Mono,monospace">550 km — LEO</text>'
/* Orbital ellipses around (100,118) */
+'<ellipse cx="100" cy="118" rx="85" ry="30" fill="none" stroke="rgba(0,210,255,0.13)" stroke-width="0.8" stroke-dasharray="5 4"/>'
+'<ellipse cx="100" cy="118" rx="68" ry="24" fill="none" stroke="rgba(0,210,255,0.1)" stroke-width="0.7" stroke-dasharray="4 4"/>'
+'<ellipse cx="100" cy="118" rx="100" ry="34" fill="none" stroke="rgba(0,210,255,0.08)" stroke-width="0.6" stroke-dasharray="6 5"/>'
/* Signal/data rings from Earth */
+'<circle cx="100" cy="118" r="52" fill="none" stroke="rgba(0,210,255,0.5)" stroke-width="0.8"><animate attributeName="r" values="52;100;52" dur="3.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.7;0;0.7" dur="3.5s" repeatCount="indefinite"/></circle>'
+'<circle cx="100" cy="118" r="52" fill="none" stroke="rgba(0,210,255,0.4)" stroke-width="0.6"><animate attributeName="r" values="52;100;52" dur="3.5s" begin="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" begin="1.1s" repeatCount="indefinite"/></circle>'
/* Earth surface scan line — IMAGE CAPTURE animation */
+'<rect y="126" height="3" rx="1" fill="rgba(0,255,180,0.0)" stroke="rgba(0,255,180,0.0)" stroke-width="0.8"><animate attributeName="x" values="58;58;115;115;58" dur="7s" repeatCount="indefinite" keyTimes="0;0.08;0.45;0.52;1"/><animate attributeName="width" values="0;52;0;0;0" dur="7s" repeatCount="indefinite" keyTimes="0;0.08;0.45;0.52;1"/><animate attributeName="fill-opacity" values="0;0.5;0;0;0" dur="7s" repeatCount="indefinite" keyTimes="0;0.08;0.45;0.52;1"/><animate attributeName="stroke-opacity" values="0;0.8;0;0;0" dur="7s" repeatCount="indefinite" keyTimes="0;0.08;0.45;0.52;1"/></rect>'
/* Captured image thumbnail (flashes on Earth) */
+'<rect x="68" y="112" width="14" height="14" rx="1.5" fill="rgba(0,0,0,0)" stroke="rgba(0,255,180,0)" stroke-width="0.8"><animate attributeName="fill-opacity" values="0;0.35;0;0;0" dur="7s" begin="0.5s" repeatCount="indefinite" keyTimes="0;0.1;0.5;0.55;1"/><animate attributeName="stroke-opacity" values="0;0.9;0;0;0" dur="7s" begin="0.5s" repeatCount="indefinite" keyTimes="0;0.1;0.5;0.55;1"/></rect>'
/* Earth globe */
+'<circle cx="100" cy="118" r="52" fill="url(#eG)"/>'
+'<g clip-path="url(#eC)" fill="rgba(34,120,55,0.55)"><path d="M76 105 Q86 98 97 104 Q90 115 78 116Z"/><path d="M96 90 Q108 84 118 92 Q110 100 99 97Z"/><path d="M88 123 Q99 117 110 124 Q105 136 93 136Z"/><path d="M116 110 Q124 106 130 114 Q124 120 118 118Z"/><path d="M62 116 Q68 112 74 118 Q68 126 63 123Z"/><path d="M104 100 Q113 95 120 102 Q114 110 106 108Z"/></g>'
+'<circle cx="100" cy="118" r="52" fill="url(#aG)"/>'
+'<circle cx="100" cy="118" r="52" fill="none" stroke="rgba(80,180,255,0.35)" stroke-width="2"/>'
/* SAT 1 — Image Capture (green scan dot below body) */
+'<g style="transform-origin:100px 118px;animation:rbO1 10s linear infinite"><g transform="translate(100,118)"><rect x="-5" y="-4" width="10" height="8" rx="2" fill="#c8e8ff" stroke="rgba(0,210,255,0.7)" stroke-width="0.6"/><rect x="-13" y="-2" width="7" height="4" rx="1" fill="rgba(0,180,255,0.65)"/><rect x="6" y="-2" width="7" height="4" rx="1" fill="rgba(0,180,255,0.65)"/><circle cx="0" cy="7" r="1.8" fill="rgba(0,255,180,0.8)"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/></circle></g></g>'
/* SAT 2 — On-board Training (purple neural net above body) */
+'<g style="transform-origin:100px 118px;animation:rbO2 14s linear infinite"><g transform="translate(100,118)"><rect x="-4" y="-3.5" width="8" height="7" rx="1.5" fill="#a8d8f0" stroke="rgba(0,210,255,0.55)" stroke-width="0.5"/><rect x="-10" y="-1.5" width="5" height="3" rx="0.8" fill="rgba(0,160,255,0.55)"/><rect x="5" y="-1.5" width="5" height="3" rx="0.8" fill="rgba(0,160,255,0.55)"/><circle cx="-3" cy="-10" r="2.2" fill="#a855f7"><animate attributeName="opacity" values="0.3;0.95;0.3" dur="1.4s" repeatCount="indefinite"/></circle><circle cx="3" cy="-10" r="2.2" fill="#d946ef"><animate attributeName="opacity" values="0.95;0.3;0.95" dur="1.4s" repeatCount="indefinite"/></circle><circle cx="0" cy="-15.5" r="2.6" fill="#8b5cf6"><animate attributeName="r" values="2;2.8;2" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite"/></circle><line x1="-3" y1="-7.8" x2="0" y2="-13" stroke="#a855f7" stroke-width="0.6" opacity="0.5"/><line x1="3" y1="-7.8" x2="0" y2="-13" stroke="#d946ef" stroke-width="0.6" opacity="0.5"/></g></g>'
/* SAT 3 — Transmitting (downward pulsing beam from body) */
+'<g style="transform-origin:100px 118px;animation:rbO3 8s linear infinite"><g transform="translate(100,118)"><rect x="-3.5" y="-3" width="7" height="6" rx="1.5" fill="#ddf0ff" stroke="rgba(0,210,255,0.5)" stroke-width="0.5"/><rect x="-9" y="-1.5" width="4.5" height="3" rx="0.8" fill="rgba(0,200,255,0.45)"/><rect x="4.5" y="-1.5" width="4.5" height="3" rx="0.8" fill="rgba(0,200,255,0.45)"/><line x1="0" y1="4" x2="0" y2="13" stroke="rgba(0,210,255,0.7)" stroke-width="1.2" stroke-dasharray="2 1" stroke-linecap="round"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.2s" repeatCount="indefinite"/></line></g></g>'
/* Separation dashed line */
+'<line x1="8" y1="204" x2="192" y2="204" stroke="rgba(0,210,255,0.08)" stroke-width="0.5" stroke-dasharray="4 4"/>'
/* Encrypted transmission beam (from orbit bottom to ground station) */
+'<path id="txP" d="M100,172 L100,298" fill="none"/>'
+'<line x1="100" y1="172" x2="100" y2="298" stroke="rgba(0,210,255,0.2)" stroke-width="2" stroke-dasharray="6 5"/>'
/* Animated data packets flowing down */
+'<g><rect width="11" height="6" rx="2" fill="rgba(0,210,255,0.9)" stroke="rgba(0,255,255,0.4)" stroke-width="0.5"><animateMotion dur="2.5s" repeatCount="indefinite"><mpath href="#txP"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite"/></rect></g>'
+'<g><rect width="11" height="6" rx="2" fill="rgba(0,180,255,0.75)" stroke="rgba(0,230,255,0.3)" stroke-width="0.5"><animateMotion dur="2.5s" begin="0.9s" repeatCount="indefinite"><mpath href="#txP"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.5s" begin="0.9s" repeatCount="indefinite"/></rect></g>'
+'<g><rect width="11" height="6" rx="2" fill="rgba(0,150,255,0.65)" stroke="rgba(0,200,255,0.3)" stroke-width="0.5"><animateMotion dur="2.5s" begin="1.8s" repeatCount="indefinite"><mpath href="#txP"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" dur="2.5s" begin="1.8s" repeatCount="indefinite"/></rect></g>'
/* Lock icon at beam midpoint */
+'<g transform="translate(116,235)"><rect x="-6" y="0" width="12" height="10" rx="2" fill="rgba(0,15,40,0.85)" stroke="rgba(0,210,255,0.65)" stroke-width="0.8"/><path d="M-3,0 L-3,-4 Q-3,-7 0,-7 Q3,-7 3,-4 L3,0" fill="none" stroke="rgba(0,210,255,0.65)" stroke-width="1" stroke-linecap="round"/><circle cx="0" cy="5.5" r="2" fill="rgba(0,210,255,0.85)"/><line x1="0" y1="7.5" x2="0" y2="9" stroke="rgba(0,210,255,0.85)" stroke-width="1" stroke-linecap="round"/></g>'
+'<text x="100" y="258" text-anchor="middle" fill="rgba(0,210,255,0.4)" font-size="6.5" font-family="Roboto Mono,monospace">FL MODEL ENCRYPTED</text>'
/* Ground station (enhanced receive state) */
+'<g transform="translate(100,310)"><line x1="0" y1="0" x2="-16" y2="20" stroke="rgba(0,210,255,0.5)" stroke-width="1.3" stroke-linecap="round"/><line x1="0" y1="0" x2="16" y2="20" stroke="rgba(0,210,255,0.5)" stroke-width="1.3" stroke-linecap="round"/><line x1="0" y1="0" x2="0" y2="22" stroke="rgba(0,210,255,0.5)" stroke-width="1.1" stroke-linecap="round"/><ellipse cx="0" cy="4" rx="12" ry="6" fill="rgba(0,210,255,0.08)" stroke="rgba(0,210,255,0.5)" stroke-width="0.9"/><circle cx="0" cy="0" r="3" fill="#00d4ff"><animate attributeName="r" values="2.5;4.5;2.5" dur="1.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite"/></circle></g>'
+'<rect x="93" y="330" width="14" height="8" rx="1" fill="rgba(0,30,60,0.7)" stroke="rgba(0,210,255,0.3)" stroke-width="0.5"/>'
+'<text x="100" y="352" text-anchor="middle" fill="rgba(0,255,180,0.7)" font-size="7" font-family="Roboto Mono,monospace">MODEL AGGREGATED</text>'
+'<text x="100" y="366" text-anchor="middle" fill="rgba(0,210,255,0.6)" font-size="7.5" font-family="Roboto Mono,monospace">FL SECURED &#10003;</text>'
+'<text x="12" y="390" fill="rgba(0,210,255,0.22)" font-size="6" font-family="Roboto Mono,monospace">LAT 46.73N  LON 117.00W</text>'
+'</svg>';

function mkPanel(id,lbl,ttl,sub,svg,m1l,m1v,m2l,m2v,m3l,m3v,st2,sd,bg){
  var d=document.createElement('div');d.id=id;
  var inner='<div class="rb-wrap">'
    +'<div class="rb-top"><div class="rb-lbl">'+lbl+'</div><div class="rb-ttl">'+ttl+'</div><div class="rb-sub">'+sub+'</div></div>'
    +'<div class="rb-vis">'+svg+'</div>'
    +'<div class="rb-bottom">'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m1l+'</span><span class="rb-mval">'+m1v+'</span></div>'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m2l+'</span><span class="rb-mval">'+m2v+'</span></div>'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m3l+'</span><span class="rb-mval">'+m3v+'</span></div>'
    +'<div class="rb-st"><div class="rb-dot" style="animation-delay:'+sd+'s"></div><span class="rb-stxt">'+st2+'</span></div>'
    +'</div></div>';
  if(bg){var b=document.createElement('div');b.style.cssText='position:absolute;inset:0;z-index:0;overflow:hidden;';b.innerHTML=bg;d.appendChild(b);}
  var w=document.createElement('div');w.innerHTML=inner;while(w.firstChild)d.appendChild(w.firstChild);
  return d;
}
document.body.appendChild(mkPanel('rb-left','CyberSecAI Lab','LLM &amp;<br>AI Security','Adversarial Defense',llm,'Threat level','LOW','Models analyzed','38+','Defense rate','97.3%','Monitoring active','0',null));
document.body.appendChild(mkPanel('rb-right','CyberSecAI Lab','LEO Satellite<br>Security','FL in Orbit',sat,'Satellites active','3 / 3','Orbital altitude','550 km','FL rounds','247+','Network secured','0.6',spBg));
})();
