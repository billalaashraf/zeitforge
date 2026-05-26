"use client";

import { useState, useEffect } from "react";

function MarkBrand({ size = 22 }: { size?: number }) {
  const id = `zf-cut-${size}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ display: "block", color: "var(--brass)" }}>
      <defs>
        <mask id={id}>
          <rect width="64" height="64" fill="#fff" />
          <path d="M14 18 L50 18 L24 44 L50 44 L50 50 L14 50 L14 44 L40 44 L14 18 Z" fill="#000" />
        </mask>
      </defs>
      <circle cx="32" cy="32" r="28" fill="currentColor" mask={`url(#${id})`} />
    </svg>
  );
}

function VizBars() {
  const heights = [42, 64, 38, 78, 56, 92, 70];
  return (
    <div className="hv-bars">
      {heights.map((h, i) => (
        <div key={i} className={`b ${i !== 2 && i !== 6 ? "alt" : ""}`} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function VizSpark() {
  const pts: [number, number][] = [[0,60],[30,55],[60,58],[90,42],[120,46],[150,30],[180,34],[210,18],[240,22],[270,8]];
  const d = "M " + pts.map(p => p.join(" ")).join(" L ");
  const a = d + " L 270 80 L 0 80 Z";
  return (
    <svg viewBox="0 0 280 80" preserveAspectRatio="none" className="hv-spark">
      <defs>
        <linearGradient id="sp-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--brass)" }} stopOpacity="0.4" />
          <stop offset="100%" style={{ stopColor: "var(--brass)" }} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20,40,60].map(y => <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="var(--hairline)" strokeDasharray="2 4" />)}
      <path d={a} fill="url(#sp-fill)" />
      <path d={d} fill="none" stroke="var(--brass)" strokeWidth="1.6" />
      {pts.map(([x,y],i) => i === pts.length-1 ? (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="var(--brass)" opacity="0.18" />
          <circle cx={x} cy={y} r="3" fill="var(--brass-bright)" />
        </g>
      ) : null)}
    </svg>
  );
}

function VizFlow() {
  const nodes = [{x:20,y:48,l:"TRIGGER"},{x:108,y:24,l:"ENRICH"},{x:108,y:72,l:"CHECK"},{x:196,y:48,l:"ACTION"}];
  return (
    <svg viewBox="0 0 280 96" preserveAspectRatio="xMidYMid meet" className="hv-flow-svg" style={{width:"100%",height:"100%"}}>
      <defs>
        <marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--brass)" />
        </marker>
      </defs>
      {nodes.map((n,i) => (
        <g key={i}>
          <rect x={n.x-22} y={n.y-12} width="44" height="24" rx="8" fill="var(--ember)" stroke="var(--hairline-strong)" />
          <text x={n.x} y={n.y+3.5} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1" fill="var(--paper)">{n.l}</text>
        </g>
      ))}
      <path d="M 42 44 Q 70 26, 86 26" stroke="var(--brass)" strokeWidth="1" fill="none" markerEnd="url(#ar)" />
      <path d="M 42 52 Q 70 70, 86 72" stroke="var(--hairline-strong)" strokeWidth="1" fill="none" markerEnd="url(#ar)" />
      <path d="M 130 26 Q 160 32, 174 44" stroke="var(--brass)" strokeWidth="1" fill="none" markerEnd="url(#ar)" />
      <path d="M 130 72 Q 160 64, 174 52" stroke="var(--hairline-strong)" strokeWidth="1" fill="none" markerEnd="url(#ar)" />
      <circle cx="240" cy="48" r="3" fill="var(--brass)">
        <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function ArtRings() {
  return (
    <svg className="svc__art" viewBox="0 0 200 200" fill="none">
      {[80,60,40,22].map((r,i) => <circle key={i} cx="160" cy="160" r={r} stroke="var(--brass)" strokeOpacity={0.05+i*0.06} strokeWidth="1" />)}
      <circle cx="160" cy="160" r="6" fill="var(--brass)" />
    </svg>
  );
}
function ArtBezier() {
  return (
    <svg className="svc__art" viewBox="0 0 200 200" fill="none">
      <path d="M 0 180 C 60 120, 100 60, 200 20" stroke="var(--brass)" strokeWidth="1.4" opacity="0.6" />
      <path d="M 0 200 C 80 160, 140 100, 200 60" stroke="var(--brass)" strokeWidth="1" opacity="0.25" />
      <circle cx="160" cy="36" r="4" fill="var(--brass)" />
    </svg>
  );
}
function ArtGrid() {
  return (
    <svg className="svc__art" viewBox="0 0 200 200" fill="none">
      {Array.from({length:6}).map((_,r) => Array.from({length:6}).map((__,c) => {
        const op = (r+c)%7===0 ? 0.55 : 0.1-Math.max(0,c-3)*0.01;
        return <rect key={`${r}-${c}`} x={20+c*30} y={20+r*30} width="14" height="14" fill="var(--brass)" opacity={op} />;
      }))}
    </svg>
  );
}
function ArtCross() {
  return (
    <svg className="svc__art" viewBox="0 0 200 200" fill="none">
      <path d="M 50 50 L 150 150 M 150 50 L 50 150" stroke="var(--brass)" strokeWidth="1" opacity="0.35" />
      <rect x="90" y="90" width="20" height="20" fill="none" stroke="var(--brass)" />
      <rect x="40" y="40" width="120" height="120" fill="none" stroke="var(--brass)" strokeDasharray="2 6" opacity="0.4" />
    </svg>
  );
}

function ProjAI() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{width:"100%",height:"100%"}}>
      <defs>
        <radialGradient id="aiglow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" style={{stopColor:"var(--brass)"}} stopOpacity="0.30" />
          <stop offset="60%" style={{stopColor:"var(--brass)"}} stopOpacity="0.05" />
          <stop offset="100%" style={{stopColor:"var(--brass)"}} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aibr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{stopColor:"var(--brass-bright)"}} />
          <stop offset="100%" style={{stopColor:"var(--bronze)"}} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#aiglow)" />
      <g transform="translate(240,180)">
        {[160,130,100,70,40].map((r,i) => <circle key={i} r={r} fill="none" stroke="var(--hairline-strong)" strokeDasharray={i%2===0?"2 4":""} />)}
        <circle r="20" fill="var(--ember)" stroke="url(#aibr)" strokeWidth="2" />
        <circle r="6" fill="var(--brass)" />
        {[0,40,80,140,200,260,310].map((a,i) => {
          const rad = a*Math.PI/180;
          const x = Math.cos(rad)*100, y = Math.sin(rad)*100;
          const isAcc = i%3===0;
          return (
            <g key={i} transform={`translate(${x},${y})`}>
              <line x1="0" y1="0" x2={-x} y2={-y} stroke="var(--hairline-strong)" strokeWidth="0.6" />
              <circle r={isAcc?6:4} fill={isAcc?"var(--brass)":"var(--ember)"} stroke="var(--brass)" strokeWidth="1" />
            </g>
          );
        })}
      </g>
      <g fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1">
        <text x="20" y="32">MODEL · SAB.v4</text>
        <text x="20" y="48" fill="var(--brass)">● INFERENCE LIVE</text>
        <text x="460" y="32" textAnchor="end">P99 · 142 MS</text>
        <text x="460" y="48" textAnchor="end">31 MODELS</text>
        <text x="20" y="340">QUERIES / D · 8.4M</text>
        <text x="460" y="340" textAnchor="end">COST · −41%</text>
      </g>
    </svg>
  );
}

function ProjClinic() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{width:"100%",height:"100%"}}>
      <defs>
        <linearGradient id="ctile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{stopColor:"var(--raise)"}} />
          <stop offset="100%" style={{stopColor:"var(--ember)"}} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <rect x="0" y="0" width="60" height="360" fill="var(--char)" />
      {[0,1,2,3,4].map(i => <rect key={i} x="18" y={28+i*40} width="24" height="3" fill={i===1?"var(--brass)":"var(--hairline-strong)"} />)}
      <text x="80" y="40" fontFamily="Bricolage Grotesque" fontSize="20" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Operations · Today</text>
      <text x="80" y="60" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">14 CLINICS · 312 APPOINTMENTS</text>
      {[{x:80,l:"NO-SHOW",v:"3.2%",a:true},{x:212,l:"REVENUE",v:"$148K",a:false},{x:344,l:"AUTOMATED",v:"71%",a:true}].map((t,i) => (
        <g key={i}>
          <rect x={t.x} y={80} width="120" height="68" rx="10" fill="url(#ctile)" stroke="var(--hairline)" />
          <text x={t.x+14} y={104} fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">{t.l}</text>
          <text x={t.x+14} y={134} fontFamily="Bricolage Grotesque" fontSize="26" fontWeight="500" letterSpacing="-0.8" fill={t.a?"var(--brass)":"var(--bone)"}>{t.v}</text>
        </g>
      ))}
      <rect x="80" y="164" width="384" height="172" rx="10" fill="url(#ctile)" stroke="var(--hairline)" />
      <text x="94" y="186" fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">WEEK · 18</text>
      {Array.from({length:7}).map((_,d) => Array.from({length:6}).map((__,h) => {
        const x=94+d*52, y=200+h*22;
        const fill=(d===2&&h===1)||(d===4&&h===3)||(d===5&&h===2)?"var(--brass)":(d+h)%3===0?"var(--raise)":"var(--ember)";
        return <rect key={`${d}-${h}`} x={x} y={y} width="42" height="16" rx="3" fill={fill} />;
      }))}
      <g fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">
        {"M T W T F S S".split(" ").map((d,i) => <text key={i} x={94+i*52+1} y={198}>{d}</text>)}
      </g>
    </svg>
  );
}

function ProjEcom() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{width:"100%",height:"100%"}}>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <text x="32" y="40" fontFamily="Bricolage Grotesque" fontSize="20" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Growth · Q2</text>
      <text x="32" y="60" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">CONVERSION FUNNEL · LIVE</text>
      <g transform="translate(32,80)">
        {[{w:200,l:"VISIT",v:"284,012"},{w:160,l:"CART",v:"42,118"},{w:120,l:"CHECKOUT",v:"19,407"},{w:84,l:"PURCHASE",v:"8,212"}].map((f,i) => (
          <g key={i}>
            <rect x="0" y={i*42} width={f.w} height="28" rx="4" fill={i===3?"var(--brass)":"var(--ember)"} stroke="var(--hairline-strong)" />
            <text x={f.w+12} y={i*42+18} fontFamily="JetBrains Mono" fontSize="11" fill={i===3?"var(--brass)":"var(--paper)"} letterSpacing="1.2">{f.l} · {f.v}</text>
          </g>
        ))}
      </g>
      <g transform="translate(32,260)">
        <text x="0" y="-8" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">REVENUE · 90 D · +2.4×</text>
        <rect x="0" y="0" width="416" height="78" rx="6" fill="var(--char)" stroke="var(--hairline)" />
        <path d="M 12 60 L 60 50 L 110 56 L 160 42 L 210 46 L 260 32 L 310 28 L 360 14 L 404 8" fill="none" stroke="var(--brass)" strokeWidth="1.6" />
        <path d="M 12 60 L 60 50 L 110 56 L 160 42 L 210 46 L 260 32 L 310 28 L 360 14 L 404 8 L 404 68 L 12 68 Z" fill="var(--brass)" opacity="0.12" />
        {[12,60,110,160,210,260,310,360,404].map((x,i) => (
          <circle key={i} cx={x} cy={[60,50,56,42,46,32,28,14,8][i]} r={i===8?3.5:1.8} fill="var(--brass)" />
        ))}
      </g>
    </svg>
  );
}

function ProjOps() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{width:"100%",height:"100%"}}>
      <defs>
        <linearGradient id="opstile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{stopColor:"var(--raise)"}} />
          <stop offset="100%" style={{stopColor:"var(--ember)"}} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <text x="32" y="36" fontFamily="Bricolage Grotesque" fontSize="18" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Operations · Today</text>
      <text x="32" y="54" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--fog)" letterSpacing="1.5">FLEET · FINANCE · FIELD OPS · UNIFIED</text>
      {[{x:32,c:"var(--brass)",l:"FLEET · LIVE"},{x:152,c:"var(--fog)",l:"FINANCE · SYNC"},{x:272,c:"var(--brass)",l:"FIELD · 41 ACTIVE"},{x:392,c:"var(--fog)",l:"DEPLOY · OK"}].map((p,i) => (
        <g key={i}>
          <rect x={p.x} y={66} width="110" height="22" rx="11" fill="var(--char)" stroke="var(--hairline)" />
          <circle cx={p.x+12} cy={77} r="3" fill={p.c} />
          <text x={p.x+22} y={80} fontFamily="JetBrains Mono" fontSize="9" fill="var(--paper)" letterSpacing="1.2">{p.l}</text>
        </g>
      ))}
      {[{x:32,l:"ON-TIME",v:"96.4%",a:true},{x:174,l:"REVENUE",v:"$2.4M",a:false},{x:316,l:"INCIDENTS",v:"3",a:false}].map((t,i) => (
        <g key={i}>
          <rect x={t.x} y={102} width="130" height="68" rx="10" fill="url(#opstile)" stroke="var(--hairline)" />
          <text x={t.x+14} y={124} fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">{t.l}</text>
          <text x={t.x+14} y={156} fontFamily="Bricolage Grotesque" fontSize="28" fontWeight="500" letterSpacing="-0.8" fill={t.a?"var(--brass)":"var(--bone)"}>{t.v}</text>
        </g>
      ))}
      <rect x="32" y="186" width="414" height="150" rx="10" fill="url(#opstile)" stroke="var(--hairline)" />
      <text x="48" y="208" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--fog)" letterSpacing="1.5">ACTIVITY · 24 H</text>
      <text x="430" y="208" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--brass)" letterSpacing="1.5">● LIVE</text>
      {Array.from({length:24}).map((_,i) => {
        const h=14+Math.abs(Math.sin(i*0.9))*64+(i%5===0?12:0);
        const acc=i===14||i===21;
        return <rect key={i} x={50+i*16} y={324-h} width="9" height={h} rx="2" fill={acc?"var(--brass)":"var(--hairline-strong)"} />;
      })}
      {Array.from({length:8}).map((_,i) => (
        <text key={i} x={50+i*48} y={336} fontFamily="JetBrains Mono" fontSize="8" fill="var(--ash)" letterSpacing="1">{String(i*3).padStart(2,"0")}h</text>
      ))}
    </svg>
  );
}

function Header() {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <a className="hdr__brand" href="#top"><MarkBrand size={22} /><span>ZeitForge</span></a>
        <nav className="hdr__nav">
          <a className="hdr__link" href="#about">About</a>
          <a className="hdr__link" href="#services">Services</a>
          <a className="hdr__link" href="#work">Projects</a>
        </nav>
        <div className="hdr__right">
          <span className="eyebrow"><span className="dot live" /> AVAILABLE · Q3</span>
          <button className="btn btn--lg">Get Started <span className="arr">↗</span></button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero s-wrap" id="top">
      <div className="hero__grid">
        <div className="hero__col-l">
          <div className="hero__cap">
            <span className="pill"><span className="dot" /> DESIGN &amp; DEVELOPMENT STUDIO</span>
            <span className="eyebrow">Remote-first · Global</span>
          </div>
          <h1 className="hero__h1 rv">Partner with a<br />product studio<br />built for SaaS <em>growth.</em></h1>
          <p className="hero__sub rv d1">We help SaaS companies design, build, and scale digital products with sharp strategy, clean interfaces, automation, and reliable development.</p>
          <div className="hero__cta rv d2">
            <button className="btn btn--lg">Get Started <span className="arr">↗</span></button>
            <button className="btn btn--ghost btn--lg">View Projects <span className="arr">↗</span></button>
          </div>
          <div className="hero__meta rv d3">
            <div className="hero__meta-item"><span className="k">Shipped</span><span className="v">20<em>+</em></span></div>
            <span className="sep" />
            <div className="hero__meta-item"><span className="k">Avg MVP</span><span className="v">8 wks</span></div>
            <span className="sep" />
            <div className="hero__meta-item"><span className="k">Satisfaction</span><span className="v">95%</span></div>
          </div>
        </div>
        <div className="hero__col-r rv d2">
          <div className="hero__vis">
            <div className="hv-card hv-dash">
              <div className="hd"><span className="ttl">Product · MRR Pulse</span><span className="tag acc">● LIVE</span></div>
              <VizBars />
              <div className="hv-stat-row">
                <div className="hv-stat"><div className="l">MRR</div><div className="v">$182<em>K</em></div></div>
                <div className="hv-stat"><div className="l">Growth</div><div className="v">+24%</div></div>
                <div className="hv-stat"><div className="l">Trial → Paid</div><div className="v">38%</div></div>
              </div>
            </div>
            <div className="hv-card hv-growth">
              <div className="hd"><span className="ttl">Growth · 90d</span><span className="tag">FORECAST</span></div>
              <VizSpark />
              <div className="hd"><span className="tag">Q3 PROJ</span><span className="tag acc">+ 2.4×</span></div>
            </div>
            <div className="hv-card hv-flow">
              <div className="hd"><span className="ttl">Automation · Loop 04</span><span className="tag acc">● ACTIVE</span></div>
              <VizFlow />
              <div className="hd"><span className="tag">SAVED · 1,420 h / mo</span><span className="tag">RUNS · 41K</span></div>
            </div>
            <div className="hv-card hv-code">
              <div className="ln"><span className="n">01</span><span><span className="c">{"// zf · forge pipeline"}</span></span></div>
              <div className="ln"><span className="n">02</span><span><span className="k">export const</span> forge = <span className="k">async</span> ({"{"}product{"}"}) <span className="k">{"=>"}</span> {"{"}</span></div>
              <div className="ln"><span className="n">03</span><span>{"  "}<span className="k">await</span> design.system(product, <span className="s">&quot;v2&quot;</span>);</span></div>
              <div className="ln"><span className="n">04</span><span>{"  "}<span className="k">await</span> build.platform({"{"} flags: [<span className="s">&quot;growth&quot;</span>] {"}"});</span></div>
              <div className="ln"><span className="n">05</span><span>{"  "}<span className="k">return</span> launch();{"   "}<span className="c">{"// ↳ 8w mvp"}</span></span></div>
              <div className="ln"><span className="n">06</span><span>{"}"};  </span></div>
            </div>
            <div className="hv-floater"><span className="dot live" /><span>BUILD · ZF-OS 7.2.4</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedSection() {
  const items = ["SaaS Teams","Startup Founders","Product Leaders","Growth Teams","Series A / B","YC Alumni","RevOps","CTOs at Scale"];
  const track = [...items,...items];
  return (
    <section className="trust s-wrap">
      <div className="trust__head">
        <span className="eyebrow"><span className="pip" /> TRUSTED BY</span>
        <div className="trust__line" />
        <span style={{fontFamily:"var(--mono)",fontSize:11.5,letterSpacing:"0.18em",color:"var(--fog)"}}>Closed roster · referral led · 2019—present</span>
      </div>
      <div className="trust__marquee">
        <div className="trust__track">
          {track.map((t,i) => (
            <span key={i} className={`trust__item trust__item--${i%8}`}>
              <span className="ic" /><span>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="sec about s-wrap" id="about">
      <div className="sec-hd rv">
        <div className="sec-hd__l">
          <span className="eyebrow"><span className="pip" /> 02 · ABOUT OUR STUDIO</span>
          <h2 className="h-2">Designing scalable<br />SaaS products that<br />help companies <span className="serif">stand out.</span></h2>
        </div>
        <div />
        <div className="sec-hd__r"><p>Closed engagements, embedded teams, ten-year operating discipline.</p></div>
      </div>
      <div className="about__grid">
        <div className="about__copy rv d1">
          <p className="text-body-lg">We combine product strategy, design, development, and automation to create software experiences that look polished, perform fast, and support real business growth.</p>
          <p className="text-body">Our work is taken on referral. We embed alongside in-house teams, ship into the same codebase under the same standards, and exit with a runbook, a paved path, and operators trained to run the product for the next order of magnitude.</p>
          <div style={{display:"flex",gap:12,alignItems:"center",marginTop:18}}>
            <button className="btn">Meet the studio <span className="arr">↗</span></button>
            <span className="eyebrow">14 yrs · 24 operators · remote-first</span>
          </div>
        </div>
        <div className="about__stats about__stats--3 rv d2">
          {[
            {v:<>20<em>+</em></>,l:"Projects Completed",d:"Across SaaS, fintech, healthcare, and growth-stage AI."},
            {v:<>12<em>+</em></>,l:"Years Experience",d:"A senior bench. No juniors fronting client work."},
            {v:<>95<em>%</em></>,l:"Client Satisfaction",d:"Measured at exit + 90 days. We retain to fix any gap."},
          ].map((s,i) => (
            <div key={i} className="stat">
              <div className="stat__v">{s.v}</div>
              <div><div style={{fontFamily:"var(--display)",fontWeight:500,fontSize:18,letterSpacing:"-0.015em",color:"var(--bone)"}}>{s.l}</div></div>
              <div className="stat__d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const cards = [
    {n:"01",t:<>SaaS Product <em>Design</em></>,d:"End-to-end product design — from problem framing to a launched, instrumented interface ready for ten times the users.",Art:ArtRings},
    {n:"02",t:<>MVP <em>Development</em></>,d:"From whiteboard to a launched product in eight weeks. One sprint, one team, one accountable senior on the codebase.",Art:ArtBezier},
    {n:"03",t:<>UI/UX <em>Design</em></>,d:"Design systems and interfaces that hold up at scale — component libraries, motion, accessibility, dark + light pairs.",Art:ArtGrid},
    {n:"04",t:<>Automation &amp; <em>AI Workflows</em></>,d:"Operational pipelines, internal copilots, RAG and evaluation in production — wired into the product, not bolted on.",Art:ArtCross},
  ];
  return (
    <section className="sec svc s-wrap" id="services">
      <div className="sec-hd rv">
        <div className="sec-hd__l">
          <span className="eyebrow"><span className="pip" /> 03 · SERVICES</span>
          <h2 className="h-2">Four capabilities,<br />one connected <span className="serif">surface.</span></h2>
        </div>
        <div />
        <div className="sec-hd__r"><p>Services compose. Most engagements pull from three of these at once — we do not bill them as separate retainers.</p></div>
      </div>
      <div className="svc__grid svc__grid--4">
        {cards.map((c,i) => (
          <div key={c.n} className={`svc__card rv d${(i%4)+1}`}>
            <div className="svc__head">
              <span className="svc__num">{c.n} · SERVICE</span>
              <div className="svc__pic">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="16" height="16" rx="3" stroke="var(--brass-bright)" strokeWidth="1.5" />
                  <circle cx="11" cy="11" r="3" fill="var(--brass-bright)" />
                </svg>
              </div>
            </div>
            <h3 className="svc__title">{c.t}</h3>
            <p className="svc__desc">{c.d}</p>
            <span className="svc__arr">Learn more <span>↗</span></span>
            <c.Art />
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  const projects = [
    {id:"01",k:"FEATURED · 2025",tags:["AI SaaS","Inference","Series B"],title:<>AI SaaS <em>Platform</em></>,line:"Stood up the inference, retrieval and guardrail platforms behind a regulated AI product used by fourteen of the world's largest insurers.",metrics:[["Queries / day","8.4M"],["Models","31"],["Cost",<>−41<em>%</em></>]],Viz:ProjAI},
    {id:"02",k:"FEATURED · 2024",tags:["Healthcare","Dashboard","Automation"],title:<>Clinic <em>Pulse</em></>,line:"Replaced a fragile clinic-management spreadsheet stack with a unified dashboard that automates scheduling, no-show recovery, and revenue ops across 14 sites.",metrics:[["Automation","71%"],["No-show",<>−62<em>%</em></>],["Hours saved / mo","1,420"]],Viz:ProjClinic},
    {id:"03",k:"FEATURED · 2024",tags:["E-commerce","Growth","Conversion"],title:<>E-commerce <em>Growth Engine</em></>,line:"Designed and shipped a growth engine — funnel instrumentation, experimentation, pricing — that compounded revenue 2.4× in 90 days.",metrics:[["Revenue",<>2.4<em>×</em></>],["CVR",<>+38<em>%</em></>],["AOV",<>+22<em>%</em></>]],Viz:ProjEcom},
    {id:"04",k:"FEATURED · 2025",tags:["Operations","Internal Platform","Logistics"],title:<>Operations <em>Dashboard</em></>,line:"Built a single operations surface for a 220-person logistics business — fleet, finance and field ops on one canvas, replacing seven separate tools.",metrics:[["Tools replaced","7"],["On-time delivery",<>+18<em>pp</em></>],["Toil saved / wk","640 h"]],Viz:ProjOps},
  ];
  return (
    <section className="sec s-wrap" id="work">
      <div className="sec-hd rv">
        <div className="sec-hd__l">
          <span className="eyebrow"><span className="pip" /> 04 · RECENT PROJECTS</span>
          <h2 className="h-2">Products we<br />didn&apos;t just<br /><span className="serif">design.</span> We shipped.</h2>
        </div>
        <div />
        <div className="sec-hd__r"><p>Four engagements from the last twenty-four months. Names changed where the work is still in stealth.</p></div>
      </div>
      <div className="work__grid">
        {projects.map((p,i) => (
          <article key={p.id} className={`proj rv ${i%2===1?"even":""}`}>
            <div className="proj__copy">
              <div className="proj__top">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span className="eyebrow"><span className="pip" /> {p.k}</span>
                  <span className="eyebrow">{p.id} / 04</span>
                </div>
                <div className="proj__tag">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__line">{p.line}</p>
              </div>
              <div className="proj__metrics">
                {p.metrics.map(([l,v],mi)=>(
                  <div key={mi} className="proj__m">
                    <div className="l">{l}</div>
                    <div className="v">{v}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="proj__cta">View Case Study <span className="arr">→</span></a>
            </div>
            <div className="proj__vis"><p.Viz /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const items = [
    {n:"01",q:"What does ZeitForge do?",a:"We are a design and development studio for SaaS companies. We design, build, and scale digital products — from product strategy and UI/UX through engineering, automation, and AI workflows — under a single accountable team."},
    {n:"02",q:"Can you build MVPs?",a:"Yes — MVP is our most common engagement. We ship a launched, production-grade product in eight weeks with a senior team embedded against your codebase, exiting with the operator who will own it post-launch."},
    {n:"03",q:"What makes ZeitForge different?",a:"A senior bench (no juniors fronting client work), engagements taken only on referral, and an exit checklist that includes a runbook and a trained operator — not just a deployed product."},
    {n:"04",q:"Do you provide ongoing support?",a:"Every engagement includes a 30-day parallel period after launch at no charge. Beyond that, teams can take a quarterly retainer for platform decisions, hiring input, and the next round of feature work."},
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="sec s-wrap" id="faq">
      <div className="sec-hd rv">
        <div className="sec-hd__l">
          <span className="eyebrow"><span className="pip" /> 07 · FAQs</span>
          <h2 className="h-2">Common<br /><span className="serif">questions.</span></h2>
        </div>
        <div />
        <div className="sec-hd__r"><p>Five of the most-asked. Everything else is on the discovery call.</p></div>
      </div>
      <div className="faq__grid">
        <div className="rv d1">
          <h3 className="h-3">Direct answers,<br /><span className="serif">no hedging.</span></h3>
          <p className="text-body" style={{marginTop:20}}>We take a small number of engagements per year and prefer to be candid about scope and price before the first call. If a question isn&apos;t covered here, ask it on the call — we&apos;ll answer the same way.</p>
          <button className="btn" style={{marginTop:24}}>Ask a question <span className="arr">↗</span></button>
        </div>
        <div className="faq__list rv d2">
          {items.map((it,i) => (
            <div key={i} className={`faq__item ${open===i?"is-open":""}`} onClick={()=>setOpen(open===i?-1:i)}>
              <div className="faq__q">
                <span className="faq__n">{it.n}/</span>
                <span className="qt">{it.q}</span>
                <span className="faq__plus">
                  <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" /></svg>
                </span>
              </div>
              <div className="faq__a"><div><p>{it.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="fcta s-wrap" id="contact">
      <div className="fcta__card rv">
        <h2 className="fcta__h">Have a SaaS<br />product <span className="serif">idea</span><br />in your mind?</h2>
        <div className="fcta__side">
          <p className="fcta__sub">A 30-minute call. We&apos;ll tell you whether we&apos;re the right partner — or who is.</p>
          <button className="btn btn--lg">Get In Touch <span className="arr">↗</span></button>
          <span className="eyebrow">Or reach us · hello@zeitforge.studio</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ftr s-wrap">
      <div className="ftr__grid">
        <div className="ftr__brand">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <MarkBrand size={26} />
            <span style={{fontFamily:"var(--display)",fontWeight:600,fontSize:20,letterSpacing:"-0.015em",color:"var(--bone)"}}>ZeitForge</span>
          </div>
          <div className="ftr__wm">ZeitForge<span className="serif">.</span></div>
          <p className="text-body" style={{maxWidth:"40ch"}}>We are a product studio helping SaaS companies design, build, and scale better digital products.</p>
        </div>
        <div className="ftr__col"><h5>SERVICES</h5><ul><li>SaaS Product Design</li><li>MVP Development</li><li>UI/UX Design</li><li>Automation &amp; AI Workflows</li></ul></div>
        <div className="ftr__col"><h5>STUDIO</h5><ul><li>About</li><li>Projects</li><li>Field notes</li><li>Careers · invitational</li></ul></div>
        <div className="ftr__col"><h5>CONTACT</h5><ul><li>hello@zeitforge.studio</li><li>Remote-first · Serving SaaS teams globally</li><li>Book a call</li></ul></div>
        <div className="ftr__bar">
          <span>© ZeitForge Product Studio · MMXXVI</span>
          <span><span className="dot live" /> AVAILABLE · Q3 ROSTER · 2 SLOTS</span>
          <span>v 7.2 · Last update May 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="s-bg" />
      <div className="s-page">
        <Header />
        <HeroSection />
        <TrustedSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </div>
    </>
  );
}
