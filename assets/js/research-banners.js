(function(){var css=[
/* panels */
'#rb-left,#rb-right{position:fixed;top:0;bottom:0;width:clamp(210px,16vw,280px);z-index:1;display:none;flex-direction:column;align-items:center;justify-content:space-between;padding:70px 0 24px;overflow:hidden;pointer-events:none;}',
/* LLM left — deep purple */
'#rb-left{left:0;background:linear-gradient(to right,rgba(10,2,30,0.9) 0%,rgba(10,2,30,0.55) 68%,transparent 100%);border-right:1px solid rgba(139,92,246,0.12);}',
/* Space right — near-black */
'#rb-right{right:0;background:linear-gradient(to left,rgba(2,3,18,0.92) 0%,rgba(2,3,18,0.55) 68%,transparent 100%);border-left:1px solid rgba(0,210,255,0.08);}',
'@media(min-width:1300px){#rb-left,#rb-right{display:flex;}}',
/* LLM grid — purple tint */
'#rb-left::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px);background-size:20px 20px;pointer-events:none;}',
/* Space grid — invisible (stars instead) */
'#rb-right::before{content:"";position:absolute;inset:0;pointer-events:none;}',
/* LLM scan — purple */
'#rb-left::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(167,139,250,0.6),transparent);animation:rbScanL 5s ease-in-out infinite;}',
/* Space scan — cyan */
'#rb-right::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,210,255,0.4),transparent);animation:rbScanR 6s ease-in-out 1s infinite;}',
'@keyframes rbScanL{0%{top:0;opacity:0}5%{opacity:1}92%{opacity:.35}100%{top:100%;opacity:0}}',
'@keyframes rbScanR{0%{top:0;opacity:0}5%{opacity:1}92%{opacity:.25}100%{top:100%;opacity:0}}',
'@keyframes rbBlink{0%,100%{opacity:1}50%{opacity:.15}}',
'@keyframes rbAttFlow{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}',
'@keyframes rbLayerPulse{0%,100%{opacity:.4}50%{opacity:.9}}',
'@keyframes rbShield{0%,100%{opacity:.15;transform:scale(.93)}50%{opacity:.85;transform:scale(1.05)}}',
'@keyframes rbOrbit1{from{transform:rotate(0deg) translateX(60px) rotate(0deg)}to{transform:rotate(360deg) translateX(60px) rotate(-360deg)}}',
'@keyframes rbOrbit2{from{transform:rotate(130deg) translateX(44px) rotate(-130deg)}to{transform:rotate(490deg) translateX(44px) rotate(-490deg)}}',
'@keyframes rbOrbit3{from{transform:rotate(260deg) translateX(72px) rotate(-260deg)}to{transform:rotate(620deg) translateX(72px) rotate(-620deg)}}',
'@keyframes rbSigOut{0%{r:0;opacity:.8}100%{r:65;opacity:0}}',
'@keyframes rbTwinkle{0%,100%{opacity:.4}50%{opacity:1}}',
/* shared layout */
'.rb-top{display:flex;flex-direction:column;align-items:flex-start;gap:4px;position:relative;z-index:2;width:100%;padding:0 16px;}',
'.rb-lbl{font-size:7.5px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;font-family:"Roboto Mono","Courier New",monospace;}',
'.rb-ttl{font-size:14px;font-weight:600;color:#fff;line-height:1.2;letter-spacing:0.01em;}',
'.rb-sub{font-size:8.5px;font-family:"Roboto Mono","Courier New",monospace;margin-top:2px;}',
'.rb-vis{flex:1;width:100%;display:flex;align-items:center;justify-content:center;position:relative;z-index:2;padding:0 8px;}',
'.rb-bottom{position:relative;z-index:2;width:100%;padding:0 14px;display:flex;flex-direction:column;gap:6px;}',
'.rb-metric{display:flex;justify-content:space-between;align-items:center;}',
'.rb-mlbl{font-size:7px;color:rgba(255,255,255,0.3);font-family:"Roboto Mono","Courier New",monospace;text-transform:uppercase;letter-spacing:.08em;}',
'.rb-mval{font-size:7px;font-family:"Roboto Mono","Courier New",monospace;}',
'.rb-st{display:flex;align-items:center;gap:5px;margin-top:4px;}',
'.rb-dot{width:5px;height:5px;border-radius:50%;animation:rbBlink 1.6s ease-in-out infinite;}',
'.rb-stxt{font-size:8px;font-family:"Roboto Mono","Courier New",monospace;}',
/* LLM-specific colours (purple/magenta) */
'#rb-left .rb-lbl{color:rgba(167,139,250,0.65);}',
'#rb-left .rb-sub{color:rgba(217,70,239,0.5);}',
'#rb-left .rb-mval{color:rgba(216,180,254,0.75);}',
'#rb-left .rb-dot{background:#a855f7;}',
'#rb-left .rb-stxt{color:rgba(167,139,250,0.65);}',
/* Space-specific colours (cyan) */
'#rb-right .rb-lbl{color:rgba(0,210,255,0.55);}',
'#rb-right .rb-sub{color:rgba(0,210,255,0.4);}',
'#rb-right .rb-mval{color:rgba(0,210,255,0.7);}',
'#rb-right .rb-dot{background:#00d4ff;}',
'#rb-right .rb-stxt{color:rgba(0,210,255,0.6);}'
].join('');
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);

/* ── LLM Security SVG — purple/magenta/violet AI palette ── */
var llm='<svg width="100%" viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg"><defs>'
+'<radialGradient id="shMag" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#d946ef" stop-opacity=".4"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>'
+'<radialGradient id="nodePurp" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#7c3aed" stop-opacity=".3"/></radialGradient>'
+'</defs>'
/* Token boxes */
+'<g fill="rgba(88,28,135,0.25)" stroke="rgba(167,139,250,0.45)" stroke-width="0.6">'
+'<rect x="10" y="10" width="30" height="14" rx="3"/><rect x="46" y="10" width="30" height="14" rx="3"/>'
+'<rect x="82" y="10" width="30" height="14" rx="3"/><rect x="118" y="10" width="30" height="14" rx="3"/>'
+'<rect x="154" y="10" width="30" height="14" rx="3"/></g>'
+'<g fill="rgba(216,180,254,0.65)" font-size="6" font-family="Roboto Mono,monospace" text-anchor="middle">'
+'<text x="25" y="20">LLM</text><text x="61" y="20">SEC</text><text x="97" y="20">ATK</text><text x="133" y="20">DEF</text><text x="169" y="20">SHD</text></g>'
/* Attention flows — magenta, violet, cyan */
+'<path d="M25 24 Q61 44 97 24" stroke="rgba(217,70,239,0.75)" stroke-width="1.5" stroke-dasharray="5 3" fill="none" stroke-linecap="round" style="animation:rbAttFlow 1.6s linear infinite"/>'
+'<path d="M97 24 Q133 44 169 24" stroke="rgba(167,139,250,0.65)" stroke-width="1.1" stroke-dasharray="4 2" fill="none" stroke-linecap="round" style="animation:rbAttFlow 2.1s linear infinite reverse"/>'
+'<path d="M46 24 Q97 56 150 24" stroke="rgba(6,182,212,0.45)" stroke-width="0.8" stroke-dasharray="4 4" fill="none" style="animation:rbAttFlow 2.8s linear infinite"/>'
+'<path d="M25 24 Q97 66 169 24" stroke="rgba(236,72,153,0.2)" stroke-width="0.5" stroke-dasharray="2 5" fill="none"/>'
/* Transformer layers — purple shades */
+'<rect x="14" y="58" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out infinite"/>'
+'<text x="100" y="77" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 1</text>'
+'<rect x="14" y="94" width="172" height="30" rx="4" fill="rgba(88,28,135,0.5)" stroke="rgba(192,132,252,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .3s infinite"/>'
+'<text x="100" y="113" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Feed-Forward Layer 1</text>'
+'<rect x="14" y="130" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .6s infinite"/>'
+'<text x="100" y="149" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 2</text>'
+'<rect x="14" y="166" width="172" height="30" rx="4" fill="rgba(88,28,135,0.5)" stroke="rgba(192,132,252,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out .9s infinite"/>'
+'<text x="100" y="185" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Feed-Forward Layer 2</text>'
+'<rect x="14" y="202" width="172" height="30" rx="4" fill="rgba(76,29,149,0.5)" stroke="rgba(167,139,250,0.3)" stroke-width="0.7" style="animation:rbLayerPulse 2s ease-in-out 1.2s infinite"/>'
+'<text x="100" y="221" text-anchor="middle" fill="rgba(216,180,254,0.7)" font-size="7.5" font-family="Roboto Mono,monospace">Self-Attention Layer 3</text>'
+'<rect x="14" y="238" width="172" height="30" rx="4" fill="rgba(107,33,168,0.6)" stroke="rgba(217,70,239,0.4)" stroke-width="0.9" style="animation:rbLayerPulse 1.5s ease-in-out 1.5s infinite"/>'
+'<text x="100" y="257" text-anchor="middle" fill="rgba(240,171,252,0.85)" font-size="7.5" font-family="Roboto Mono,monospace">Output Projection</text>'
/* Connector line */
+'<line x1="100" y1="268" x2="100" y2="288" stroke="rgba(167,139,250,0.25)" stroke-width="0.8" stroke-dasharray="3 3"/>'
/* Magenta attack particle */
+'<circle r="4.5" fill="#d946ef" opacity="0"><animateMotion dur="4s" repeatCount="indefinite" path="M4,100 Q60,75 100,125"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" keyTimes="0;0.08;0.75;0.88;1" values="0;1;0.9;0;0"/></circle>'
/* Defence shield — magenta/purple glow */
+'<g transform="translate(100,310)" style="animation:rbShield 3s ease-in-out infinite">'
+'<path d="M0,-22 L-17,-11 L-17,6 Q-17,22 0,28 Q17,22 17,6 L17,-11 Z" fill="rgba(139,92,246,0.08)" stroke="rgba(217,70,239,0.55)" stroke-width="1.3"/>'
+'<path d="M0,-22 L-17,-11 L-17,6 Q-17,22 0,28 Q17,22 17,6 L17,-11 Z" fill="url(#shMag)"/>'
+'<text x="0" y="8" text-anchor="middle" fill="#d946ef" font-size="13" font-weight="600">&#10003;</text></g>'
+'<text x="100" y="345" text-anchor="middle" fill="rgba(167,139,250,0.4)" font-size="7" font-family="Roboto Mono,monospace">ADVERSARIAL DEFENSE</text>'
+'</svg>';

/* ── Satellite Security SVG — deep space background ── */
var sat='<svg width="100%" viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg"><defs>'
+'<radialGradient id="rbEG3" cx="40%" cy="38%" r="58%"><stop offset="0%" stop-color="#2080c0"/><stop offset="40%" stop-color="#0d5090"/><stop offset="100%" stop-color="#030f22"/></radialGradient>'
+'<radialGradient id="rbAG3" cx="50%" cy="50%" r="50%"><stop offset="78%" stop-color="transparent"/><stop offset="100%" stop-color="rgba(30,100,200,0.3)"/></radialGradient>'
+'<radialGradient id="neb1" cx="30%" cy="25%" r="40%"><stop offset="0%" stop-color="rgba(80,30,160,0.14)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'<radialGradient id="neb2" cx="75%" cy="70%" r="35%"><stop offset="0%" stop-color="rgba(20,60,200,0.1)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'<radialGradient id="neb3" cx="60%" cy="20%" r="30%"><stop offset="0%" stop-color="rgba(100,20,180,0.08)"/><stop offset="100%" stop-color="transparent"/></radialGradient>'
+'<clipPath id="rbEC3"><circle cx="100" cy="180" r="60"/></clipPath>'
+'</defs>'
/* Deep space background */
+'<rect x="0" y="0" width="200" height="380" fill="#010209"/>'
/* Nebula clouds */
+'<rect x="0" y="0" width="200" height="380" fill="url(#neb1)"/>'
+'<rect x="0" y="0" width="200" height="380" fill="url(#neb2)"/>'
+'<rect x="0" y="0" width="200" height="380" fill="url(#neb3)"/>'
/* Milky Way band — faint diagonal glow */
+'<ellipse cx="40" cy="55" rx="45" ry="12" fill="rgba(200,210,255,0.025)" transform="rotate(-35 40 55)"/>'
+'<ellipse cx="90" cy="130" rx="45" ry="12" fill="rgba(200,210,255,0.03)" transform="rotate(-35 90 130)"/>'
+'<ellipse cx="140" cy="230" rx="40" ry="10" fill="rgba(200,210,255,0.025)" transform="rotate(-35 140 230)"/>'
+'<ellipse cx="175" cy="305" rx="35" ry="10" fill="rgba(200,210,255,0.02)" transform="rotate(-35 175 305)"/>'
/* Star field — white stars */
+'<g fill="rgba(255,255,255,0.75)"><circle cx="12" cy="8" r="0.7"/><circle cx="58" cy="6" r="0.6"/><circle cx="106" cy="10" r="0.5"/><circle cx="155" cy="8" r="0.6"/><circle cx="192" cy="6" r="0.7"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="35" cy="15" r="0.5"/><circle cx="82" cy="22" r="0.4"/><circle cx="130" cy="18" r="0.5"/><circle cx="178" cy="20" r="0.4"/><circle cx="20" cy="32" r="0.5"/><circle cx="70" cy="28" r="0.4"/><circle cx="145" cy="42" r="0.5"/><circle cx="188" cy="38" r="0.4"/></g>'
+'<g fill="rgba(255,255,255,0.65)"><circle cx="45" cy="40" r="0.6"/><circle cx="120" cy="35" r="0.5"/><circle cx="168" cy="30" r="0.6"/></g>'
+'<g fill="rgba(255,255,255,0.55)"><circle cx="8" cy="55" r="0.5"/><circle cx="52" cy="70" r="0.4"/><circle cx="98" cy="66" r="0.5"/><circle cx="148" cy="60" r="0.4"/><circle cx="196" cy="55" r="0.5"/><circle cx="28" cy="62" r="0.4"/><circle cx="75" cy="58" r="0.5"/><circle cx="122" cy="72" r="0.4"/><circle cx="172" cy="68" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="15" cy="88" r="0.5"/><circle cx="65" cy="82" r="0.6"/><circle cx="115" cy="88" r="0.5"/><circle cx="165" cy="84" r="0.6"/><circle cx="40" cy="95" r="0.4"/><circle cx="90" cy="100" r="0.5"/><circle cx="140" cy="96" r="0.4"/><circle cx="190" cy="92" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="5" cy="115" r="0.4"/><circle cx="55" cy="110" r="0.5"/><circle cx="105" cy="116" r="0.4"/><circle cx="155" cy="112" r="0.5"/><circle cx="30" cy="122" r="0.4"/><circle cx="80" cy="128" r="0.5"/><circle cx="130" cy="124" r="0.4"/><circle cx="180" cy="120" r="0.5"/><circle cx="198" cy="108" r="0.4"/></g>'
/* Stars beside Earth (left/right margins) */
+'<g fill="rgba(255,255,255,0.6)"><circle cx="5" cy="145" r="0.5"/><circle cx="18" cy="160" r="0.4"/><circle cx="12" cy="175" r="0.6"/><circle cx="22" cy="195" r="0.4"/><circle cx="8" cy="210" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="178" cy="148" r="0.5"/><circle cx="188" cy="162" r="0.4"/><circle cx="194" cy="178" r="0.6"/><circle cx="182" cy="195" r="0.4"/><circle cx="192" cy="212" r="0.5"/></g>'
/* Bottom stars */
+'<g fill="rgba(255,255,255,0.55)"><circle cx="10" cy="255" r="0.5"/><circle cx="60" cy="248" r="0.4"/><circle cx="110" cy="255" r="0.5"/><circle cx="160" cy="252" r="0.4"/><circle cx="35" cy="262" r="0.4"/><circle cx="85" cy="268" r="0.5"/><circle cx="135" cy="265" r="0.4"/><circle cx="185" cy="260" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="15" cy="285" r="0.5"/><circle cx="70" cy="278" r="0.4"/><circle cx="120" cy="282" r="0.5"/><circle cx="170" cy="278" r="0.4"/><circle cx="45" cy="292" r="0.4"/><circle cx="95" cy="295" r="0.5"/><circle cx="145" cy="290" r="0.4"/><circle cx="192" cy="288" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.5)"><circle cx="8" cy="318" r="0.4"/><circle cx="58" cy="312" r="0.5"/><circle cx="108" cy="315" r="0.4"/><circle cx="158" cy="310" r="0.5"/><circle cx="32" cy="325" r="0.4"/><circle cx="84" cy="328" r="0.5"/><circle cx="132" cy="322" r="0.4"/><circle cx="184" cy="320" r="0.5"/></g>'
+'<g fill="rgba(255,255,255,0.6)"><circle cx="20" cy="348" r="0.5"/><circle cx="78" cy="342" r="0.4"/><circle cx="134" cy="345" r="0.5"/><circle cx="190" cy="342" r="0.4"/><circle cx="50" cy="355" r="0.4"/><circle cx="106" cy="352" r="0.5"/><circle cx="162" cy="355" r="0.4"/></g>'
/* Bright sparkle stars */
+'<g fill="rgba(255,255,255,0.95)" style="animation:rbTwinkle 3s ease-in-out infinite"><circle cx="40" cy="22" r="1.1"/></g>'
+'<g fill="rgba(255,255,255,0.9)" style="animation:rbTwinkle 4s ease-in-out 1s infinite"><circle cx="162" cy="68" r="1.0"/></g>'
+'<g fill="rgba(255,255,255,0.95)" style="animation:rbTwinkle 2.5s ease-in-out 0.5s infinite"><circle cx="22" cy="290" r="1.1"/></g>'
+'<g fill="rgba(255,255,255,0.9)" style="animation:rbTwinkle 3.5s ease-in-out 2s infinite"><circle cx="168" cy="318" r="1.0"/></g>'
+'<g fill="rgba(255,255,255,0.95)" style="animation:rbTwinkle 4s ease-in-out 1.5s infinite"><circle cx="108" cy="348" r="1.1"/></g>'
/* Blue-tinted stars */
+'<g fill="rgba(160,200,255,0.7)"><circle cx="3" cy="22" r="0.6"/><circle cx="68" cy="45" r="0.5"/><circle cx="148" cy="28" r="0.6"/><circle cx="182" cy="52" r="0.5"/><circle cx="42" cy="105" r="0.6"/><circle cx="162" cy="98" r="0.5"/><circle cx="25" cy="222" r="0.6"/><circle cx="178" cy="238" r="0.5"/><circle cx="55" cy="330" r="0.6"/><circle cx="145" cy="338" r="0.5"/></g>'
/* Altitude labels */
+'<text x="10" y="18" fill="rgba(0,210,255,0.28)" font-size="6.5" font-family="Roboto Mono,monospace">550 km — LEO</text>'
+'<text x="10" y="56" fill="rgba(0,210,255,0.22)" font-size="6.5" font-family="Roboto Mono,monospace">400 km — ISS</text>'
/* Orbital paths */
+'<ellipse cx="100" cy="180" rx="92" ry="32" fill="none" stroke="rgba(0,210,255,0.14)" stroke-width="1" stroke-dasharray="5 4"/>'
+'<ellipse cx="100" cy="180" rx="72" ry="25" fill="none" stroke="rgba(0,210,255,0.11)" stroke-width="0.8" stroke-dasharray="4 4"/>'
+'<ellipse cx="100" cy="180" rx="108" ry="37" fill="none" stroke="rgba(0,210,255,0.08)" stroke-width="0.7" stroke-dasharray="6 5"/>'
/* Signal rings */
+'<circle cx="100" cy="180" r="60" fill="none" stroke="rgba(0,210,255,0.5)" stroke-width="0.8" style="animation:rbSigOut 3.5s ease-out infinite"/>'
+'<circle cx="100" cy="180" r="60" fill="none" stroke="rgba(0,210,255,0.35)" stroke-width="0.6" style="animation:rbSigOut 3.5s ease-out 1.1s infinite"/>'
+'<circle cx="100" cy="180" r="60" fill="none" stroke="rgba(0,210,255,0.2)" stroke-width="0.4" style="animation:rbSigOut 3.5s ease-out 2.2s infinite"/>'
/* Earth */
+'<circle cx="100" cy="180" r="60" fill="url(#rbEG3)"/>'
+'<g clip-path="url(#rbEC3)" fill="rgba(34,120,55,0.55)"><path d="M72 165 Q84 157 96 164 Q88 176 76 177Z"/><path d="M96 148 Q110 142 120 150 Q112 160 100 157Z"/><path d="M88 185 Q100 179 112 186 Q107 198 94 198Z"/><path d="M118 170 Q128 166 134 174 Q128 180 120 178Z"/><path d="M60 177 Q68 173 74 180 Q68 188 62 185Z"/><path d="M105 160 Q115 155 122 162 Q116 170 108 168Z"/></g>'
+'<circle cx="100" cy="180" r="60" fill="url(#rbAG3)"/>'
+'<circle cx="100" cy="180" r="60" fill="none" stroke="rgba(80,180,255,0.35)" stroke-width="2.5"/>'
/* Satellites */
+'<g style="transform-origin:100px 180px;animation:rbOrbit1 10s linear infinite"><g transform="translate(100,180)"><rect x="-5" y="-4" width="10" height="8" rx="2" fill="#c8e8ff" stroke="rgba(0,210,255,0.7)" stroke-width="0.6"/><rect x="-13" y="-2" width="7" height="4" rx="1" fill="rgba(0,180,255,0.65)"/><rect x="6" y="-2" width="7" height="4" rx="1" fill="rgba(0,180,255,0.65)"/></g></g>'
+'<g style="transform-origin:100px 180px;animation:rbOrbit2 15s linear infinite"><g transform="translate(100,180)"><rect x="-4" y="-3.5" width="8" height="7" rx="1.5" fill="#a8d8f0" stroke="rgba(0,210,255,0.55)" stroke-width="0.5"/><rect x="-10" y="-1.5" width="5" height="3" rx="0.8" fill="rgba(0,160,255,0.55)"/><rect x="5" y="-1.5" width="5" height="3" rx="0.8" fill="rgba(0,160,255,0.55)"/></g></g>'
+'<g style="transform-origin:100px 180px;animation:rbOrbit3 8s linear infinite"><g transform="translate(100,180)"><rect x="-3.5" y="-3" width="7" height="6" rx="1.5" fill="#ddf0ff" stroke="rgba(0,210,255,0.45)" stroke-width="0.5"/><rect x="-9" y="-1.5" width="4.5" height="3" rx="0.8" fill="rgba(0,200,255,0.45)"/><rect x="4.5" y="-1.5" width="4.5" height="3" rx="0.8" fill="rgba(0,200,255,0.45)"/></g></g>'
/* Ground station */
+'<line x1="100" y1="240" x2="100" y2="308" stroke="rgba(0,210,255,0.15)" stroke-width="0.8" stroke-dasharray="4 4"/>'
+'<g transform="translate(100,310)"><line x1="0" y1="0" x2="-14" y2="18" stroke="rgba(0,210,255,0.4)" stroke-width="1.2" stroke-linecap="round"/><line x1="0" y1="0" x2="14" y2="18" stroke="rgba(0,210,255,0.4)" stroke-width="1.2" stroke-linecap="round"/><line x1="0" y1="0" x2="0" y2="20" stroke="rgba(0,210,255,0.4)" stroke-width="1" stroke-linecap="round"/><ellipse cx="0" cy="4" rx="10" ry="5" fill="rgba(0,210,255,0.08)" stroke="rgba(0,210,255,0.4)" stroke-width="0.8"/><circle cx="0" cy="0" r="2.5" fill="#00d4ff" style="animation:rbBlink 2s ease-in-out infinite"/></g>'
+'<text x="100" y="345" text-anchor="middle" fill="rgba(0,210,255,0.35)" font-size="7" font-family="Roboto Mono,monospace">GROUND STATION ACTIVE</text>'
+'<text x="10" y="373" fill="rgba(0,210,255,0.22)" font-size="6" font-family="Roboto Mono,monospace">LAT 46.73N</text>'
+'<text x="128" y="373" fill="rgba(0,210,255,0.22)" font-size="6" font-family="Roboto Mono,monospace">LON 117.00W</text>'
+'</svg>';

function mkPanel(id,lbl,ttl,sub,svg,m1l,m1v,m2l,m2v,m3l,m3v,st,sd){
  var d=document.createElement('div');d.id=id;
  d.innerHTML='<div class="rb-top"><div class="rb-lbl">'+lbl+'</div><div class="rb-ttl">'+ttl+'</div><div class="rb-sub">'+sub+'</div></div>'
    +'<div class="rb-vis">'+svg+'</div>'
    +'<div class="rb-bottom">'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m1l+'</span><span class="rb-mval">'+m1v+'</span></div>'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m2l+'</span><span class="rb-mval">'+m2v+'</span></div>'
    +'<div class="rb-metric"><span class="rb-mlbl">'+m3l+'</span><span class="rb-mval">'+m3v+'</span></div>'
    +'<div class="rb-st"><div class="rb-dot" style="animation-delay:'+sd+'s"></div><span class="rb-stxt">'+st+'</span></div>'
    +'</div>';
  return d;
}
document.body.appendChild(mkPanel('rb-left','CyberSecAI Lab','LLM &amp;<br>AI Security','Adversarial Defense',llm,'Threat level','LOW','Models analyzed','38+','Defense rate','97.3%','Monitoring active','0'));
document.body.appendChild(mkPanel('rb-right','CyberSecAI Lab','LEO Satellite<br>Security','FL Network Defense',sat,'Satellites tracked','3 / 3','Orbital altitude','550 km','FL rounds','247+','Network secured','0.6'));
})();
