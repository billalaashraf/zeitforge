export function ProjAI() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <radialGradient id="aiglow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" style={{ stopColor: "var(--brass)" }} stopOpacity="0.30" />
          <stop offset="60%" style={{ stopColor: "var(--brass)" }} stopOpacity="0.05" />
          <stop offset="100%" style={{ stopColor: "var(--brass)" }} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aibr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--brass-bright)" }} />
          <stop offset="100%" style={{ stopColor: "var(--bronze)" }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#aiglow)" />
      <g transform="translate(240,180)">
        {[160, 130, 100, 70, 40].map((r, i) => (
          <circle key={i} r={r} fill="none" stroke="var(--hairline-strong)" strokeDasharray={i % 2 === 0 ? "2 4" : ""} />
        ))}
        <circle r="20" fill="var(--ember)" stroke="url(#aibr)" strokeWidth="2" />
        <circle r="6" fill="var(--brass)" />
        {[0, 40, 80, 140, 200, 260, 310].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          const x = Math.cos(rad) * 100;
          const y = Math.sin(rad) * 100;
          const isAcc = i % 3 === 0;
          return (
            <g key={i} transform={`translate(${x},${y})`}>
              <line x1="0" y1="0" x2={-x} y2={-y} stroke="var(--hairline-strong)" strokeWidth="0.6" />
              <circle r={isAcc ? 6 : 4} fill={isAcc ? "var(--brass)" : "var(--ember)"} stroke="var(--brass)" strokeWidth="1" />
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

export function ProjClinic() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="ctile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--raise)" }} />
          <stop offset="100%" style={{ stopColor: "var(--ember)" }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <rect x="0" y="0" width="60" height="360" fill="var(--char)" />
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} x="18" y={28 + i * 40} width="24" height="3" fill={i === 1 ? "var(--brass)" : "var(--hairline-strong)"} />
      ))}
      <text x="80" y="40" fontFamily="JetBrains Mono" fontSize="18" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Operations · Today</text>
      <text x="80" y="60" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">14 CLINICS · 312 APPOINTMENTS</text>
      {[
        { x: 80, l: "NO-SHOW", v: "3.2%", a: true },
        { x: 212, l: "REVENUE", v: "$148K", a: false },
        { x: 344, l: "AUTOMATED", v: "71%", a: true },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={80} width="120" height="68" rx="10" fill="url(#ctile)" stroke="var(--hairline)" />
          <text x={t.x + 14} y={104} fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">{t.l}</text>
          <text x={t.x + 14} y={134} fontFamily="JetBrains Mono" fontSize="24" fontWeight="500" letterSpacing="-0.8" fill={t.a ? "var(--brass)" : "var(--bone)"}>{t.v}</text>
        </g>
      ))}
      <rect x="80" y="164" width="384" height="172" rx="10" fill="url(#ctile)" stroke="var(--hairline)" />
      <text x="94" y="186" fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">WEEK · 18</text>
      {Array.from({ length: 7 }).map((_, d) =>
        Array.from({ length: 6 }).map((_, h) => {
          const x = 94 + d * 52;
          const y = 200 + h * 22;
          const fill = (d === 2 && h === 1) || (d === 4 && h === 3) || (d === 5 && h === 2)
            ? "var(--brass)" : (d + h) % 3 === 0 ? "var(--raise)" : "var(--ember)";
          return <rect key={`${d}-${h}`} x={x} y={y} width="42" height="16" rx="3" fill={fill} />;
        })
      )}
      <g fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">
        {"M T W T F S S".split(" ").map((d, i) => <text key={i} x={94 + i * 52 + 1} y={198}>{d}</text>)}
      </g>
    </svg>
  );
}

export function ProjEcom() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <text x="32" y="40" fontFamily="JetBrains Mono" fontSize="18" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Growth · Q2</text>
      <text x="32" y="60" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">CONVERSION FUNNEL · LIVE</text>
      <g transform="translate(32,80)">
        {[
          { w: 200, l: "VISIT", v: "284,012" },
          { w: 160, l: "CART", v: "42,118" },
          { w: 120, l: "CHECKOUT", v: "19,407" },
          { w: 84, l: "PURCHASE", v: "8,212" },
        ].map((f, i) => (
          <g key={i}>
            <rect x="0" y={i * 42} width={f.w} height="28" rx="4" fill={i === 3 ? "var(--brass)" : "var(--ember)"} stroke="var(--hairline-strong)" />
            <text x={f.w + 12} y={i * 42 + 18} fontFamily="JetBrains Mono" fontSize="11" fill={i === 3 ? "var(--brass)" : "var(--paper)"} letterSpacing="1.2">{f.l} · {f.v}</text>
          </g>
        ))}
      </g>
      <g transform="translate(32,260)">
        <text x="0" y="-8" fontFamily="JetBrains Mono" fontSize="10" fill="var(--fog)" letterSpacing="1.5">REVENUE · 90 D · +2.4×</text>
        <rect x="0" y="0" width="416" height="78" rx="6" fill="var(--char)" stroke="var(--hairline)" />
        <path d="M 12 60 L 60 50 L 110 56 L 160 42 L 210 46 L 260 32 L 310 28 L 360 14 L 404 8" fill="none" stroke="var(--brass)" strokeWidth="1.6" />
        <path d="M 12 60 L 60 50 L 110 56 L 160 42 L 210 46 L 260 32 L 310 28 L 360 14 L 404 8 L 404 68 L 12 68 Z" fill="var(--brass)" opacity="0.12" />
        {[12, 60, 110, 160, 210, 260, 310, 360, 404].map((x, i) => (
          <circle key={i} cx={x} cy={[60, 50, 56, 42, 46, 32, 28, 14, 8][i]} r={i === 8 ? 3.5 : 1.8} fill="var(--brass)" />
        ))}
      </g>
    </svg>
  );
}

export function ProjOps() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="opstile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--raise)" }} />
          <stop offset="100%" style={{ stopColor: "var(--ember)" }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="var(--onyx)" />
      <text x="32" y="36" fontFamily="JetBrains Mono" fontSize="18" fill="var(--bone)" fontWeight="500" letterSpacing="-0.5">Operations · Today</text>
      <text x="32" y="54" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--fog)" letterSpacing="1.5">FLEET · FINANCE · FIELD OPS · UNIFIED</text>
      {[
        { x: 32, c: "var(--brass)", l: "FLEET · LIVE" },
        { x: 152, c: "var(--fog)", l: "FINANCE · SYNC" },
        { x: 272, c: "var(--brass)", l: "FIELD · 41 ACTIVE" },
        { x: 392, c: "var(--fog)", l: "DEPLOY · OK" },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={66} width="110" height="22" rx="11" fill="var(--char)" stroke="var(--hairline)" />
          <circle cx={p.x + 12} cy={77} r="3" fill={p.c} />
          <text x={p.x + 22} y={80} fontFamily="JetBrains Mono" fontSize="9" fill="var(--paper)" letterSpacing="1.2">{p.l}</text>
        </g>
      ))}
      {[
        { x: 32, l: "ON-TIME", v: "96.4%", a: true },
        { x: 174, l: "REVENUE", v: "$2.4M", a: false },
        { x: 316, l: "INCIDENTS", v: "3", a: false },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={102} width="130" height="68" rx="10" fill="url(#opstile)" stroke="var(--hairline)" />
          <text x={t.x + 14} y={124} fontFamily="JetBrains Mono" fontSize="9" fill="var(--fog)" letterSpacing="1.5">{t.l}</text>
          <text x={t.x + 14} y={156} fontFamily="JetBrains Mono" fontSize="26" fontWeight="500" letterSpacing="-0.8" fill={t.a ? "var(--brass)" : "var(--bone)"}>{t.v}</text>
        </g>
      ))}
      <rect x="32" y="186" width="414" height="150" rx="10" fill="url(#opstile)" stroke="var(--hairline)" />
      <text x="48" y="208" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--fog)" letterSpacing="1.5">ACTIVITY · 24 H</text>
      <text x="430" y="208" textAnchor="end" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--brass)" letterSpacing="1.5">● LIVE</text>
      {Array.from({ length: 24 }).map((_, i) => {
        const h = 14 + Math.abs(Math.sin(i * 0.9)) * 64 + (i % 5 === 0 ? 12 : 0);
        const x = 50 + i * 16;
        const acc = i === 14 || i === 21;
        return <rect key={i} x={x} y={324 - h} width="9" height={h} rx="2" fill={acc ? "var(--brass)" : "var(--hairline-strong)"} />;
      })}
      {Array.from({ length: 8 }).map((_, i) => (
        <text key={i} x={50 + i * 48} y={336} fontFamily="JetBrains Mono" fontSize="8" fill="#6a624f" letterSpacing="1">{String(i * 3).padStart(2, "0")}h</text>
      ))}
    </svg>
  );
}
