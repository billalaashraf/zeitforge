import type { ReactNode, ComponentType } from "react";
import { MarkBrand } from "./MarkBrand";

interface CaseMeta { k: string; v: string; }
interface CaseOutcome { v: string; l: string; d: string; }

export interface CaseConfig {
  crumbLabel: string;
  tags: string[];
  title: ReactNode;
  summary: string;
  meta: CaseMeta[];
  demoUrl: string;
  HeroViz?: ComponentType;
  challengeTitle: ReactNode;
  challenge: string[];
  challengeBullets?: ReactNode[];
  approachTitle: ReactNode;
  approach: { t: string; d: string }[];
  galleryTitle: ReactNode;
  shots: { kind: string; cap: string }[];
  outcomeTitle: ReactNode;
  outcomes: CaseOutcome[];
  stack?: string[];
  quote: ReactNode;
  quoteInitials: string;
  quoteName: string;
  quoteRole: string;
  next: { href: string; tag: string; title: ReactNode };
}

function CaseHeader() {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <a className="hdr__brand" href="/"><MarkBrand size={22} /><span>ZeitForge</span></a>
        <nav className="hdr__nav">
          <a className="hdr__link" href="/#about">About</a>
          <a className="hdr__link" href="/#services">Services</a>
          <a className="hdr__link" href="/#work">Projects</a>
        </nav>
        <div className="hdr__right">
          <a className="btn btn--ghost" href="/#contact">Get In Touch <span className="arr">↗</span></a>
        </div>
      </div>
    </header>
  );
}

function CaseFooter() {
  return (
    <footer className="ftr s-wrap">
      <div className="ftr__grid">
        <div className="ftr__brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MarkBrand size={26} />
            <span style={{ fontFamily: "var(--blackletter)", fontWeight: 700, fontSize: 26, letterSpacing: "0", color: "var(--bone)" }}>ZeitForge</span>
          </div>
          <div className="ftr__wm">ZeitForge<span className="serif">.</span></div>
          <p className="text-body" style={{ maxWidth: "40ch" }}>
            We are a product studio helping SaaS companies design, build, and scale digital products — from strategy through engineering and AI workflows.
          </p>
        </div>
        <div className="ftr__col">
          <h5>STUDIO</h5>
          <ul>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#work">Selected work</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
        <div className="ftr__col">
          <h5>CASE STUDIES</h5>
          <ul>
            <li><a href="/work/ai-saas-platform">AI SaaS Platform</a></li>
            <li><a href="/work/clinic-pulse">Clinic Pulse</a></li>
            <li><a href="/work/ecommerce-growth">E-commerce Growth</a></li>
            <li><a href="/work/operations-dashboard">Operations Dashboard</a></li>
          </ul>
        </div>
        <div className="ftr__col">
          <h5>CONTACT</h5>
          <ul>
            <li>hello@zeitforge.studio</li>
            <li>London · Berlin · NYC</li>
            <li>+44 20 4566 0119</li>
          </ul>
        </div>
      </div>
      <div className="ftr__bar">
        <span>© ZeitForge Product Studio · MMXXVI</span>
        <span>v 7.2 · Last update June 2026</span>
      </div>
    </footer>
  );
}

function Shot({ kind, cap }: { kind: string; cap: string }) {
  const capId = cap.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
  return (
    <div className={`cs-shot ${kind === "wide" ? "is-wide" : ""}`}>
      <svg viewBox="0 0 480 320" preserveAspectRatio="xMidYMid slice">
        <rect width="480" height="320" fill="var(--onyx)" />
        <defs>
          <pattern id={`stripe-${capId}`} patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="480" height="320" fill={`url(#stripe-${capId})`} />
        <rect x="24" y="24" width="180" height="10" rx="3" fill="var(--hairline-strong)" />
        <rect x="24" y="44" width="120" height="8" rx="3" fill="var(--hairline)" />
        <rect x="24" y="80" width="432" height="1" fill="var(--hairline)" />
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={24 + i * 148} y="100" width="132" height="80" rx="6" fill="var(--ember)" stroke="var(--hairline)" />
            <rect x={36 + i * 148} y="116" width="60" height="7" rx="2" fill="var(--hairline-strong)" />
            <rect x={36 + i * 148} y="134" width="40" height="16" rx="3" fill="rgba(var(--accent-rgb),0.5)" />
          </g>
        ))}
        <rect x="24" y="200" width="432" height="96" rx="6" fill="var(--ember)" stroke="var(--hairline)" />
        <polyline points="40,280 100,250 160,265 220,225 280,240 340,205 420,220" fill="none" stroke="rgba(var(--accent-rgb),0.8)" strokeWidth="2" />
      </svg>
      <span className="cs-shot__cap">{cap}</span>
    </div>
  );
}

export function CaseStudyPage({ config: c }: { config: CaseConfig }) {
  const HeroViz = c.HeroViz;
  return (
    <>
      <div className="s-bg" />
      <div className="s-page">
        <CaseHeader />

        {/* HERO */}
        <section className="s-wrap cs-hero">
          <div className="cs-crumb">
            <a href="/">ZeitForge</a>
            <span className="sep">/</span>
            <a href="/#work">Work</a>
            <span className="sep">/</span>
            <span className="cur">{c.crumbLabel}</span>
          </div>
          <div className="cs-hero__tags">
            {c.tags.map((t, i) => <span key={i} className="cs-hero__tag">{t}</span>)}
          </div>
          <h1 className="cs-hero__h1">{c.title}</h1>
          <p className="cs-hero__sub">{c.summary}</p>
          <div className="cs-hero__meta">
            {c.meta.map((m, i) => (
              <div key={i} className="cs-hero__meta-cell">
                <span className="k">{m.k}</span>
                <span className="v">{m.v}</span>
              </div>
            ))}
          </div>
          <div className="cs-hero__vis">
            <div className="cs-hero__vis-chrome">
              <span className="d" /><span className="d" /><span className="d" />
              <span className="u">{c.demoUrl}</span>
            </div>
            <div className="cs-hero__vis-body">
              {HeroViz && <HeroViz />}
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="s-wrap cs-section">
          <div className="cs-sec-grid">
            <div className="cs-sec-label">
              <span className="num">01 · THE CHALLENGE</span>
              <h2>{c.challengeTitle}</h2>
            </div>
            <div>
              <div className="cs-prose">
                {c.challenge.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {c.challengeBullets && (
                <ul className="cs-bullets">
                  {c.challengeBullets.map((b, i) => (
                    <li key={i}>
                      <span className="b-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="b-t">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="s-wrap cs-section">
          <div className="cs-sec-grid">
            <div className="cs-sec-label">
              <span className="num">02 · THE APPROACH</span>
              <h2>{c.approachTitle}</h2>
            </div>
            <div className="cs-steps">
              {c.approach.map((s, i) => (
                <div key={i} className="cs-step">
                  <div className="cs-step__n">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="cs-step__t">{s.t}</h3>
                    <p className="cs-step__d">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="s-wrap cs-section">
          <div className="cs-sec-grid">
            <div className="cs-sec-label">
              <span className="num">03 · WHAT WE SHIPPED</span>
              <h2>{c.galleryTitle}</h2>
            </div>
            <div className="cs-gallery">
              {c.shots.map((s, i) => <Shot key={i} kind={s.kind} cap={s.cap} />)}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="s-wrap cs-section">
          <div className="cs-sec-grid">
            <div className="cs-sec-label">
              <span className="num">04 · THE OUTCOME</span>
              <h2>{c.outcomeTitle}</h2>
            </div>
            <div>
              <div className="cs-outcomes">
                {c.outcomes.map((o, i) => (
                  <div key={i} className="cs-outcome">
                    <div className="v" dangerouslySetInnerHTML={{ __html: o.v }} />
                    <div className="l">{o.l}</div>
                    <p className="d">{o.d}</p>
                  </div>
                ))}
              </div>
              {c.stack && (
                <div style={{ marginTop: 32 }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--fog)", marginBottom: 14 }}>STACK &amp; TOOLS</div>
                  <div className="cs-stack">
                    {c.stack.map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="s-wrap cs-quote">
          <div className="cs-quote__inner">
            <p className="cs-quote__q">{c.quote}</p>
            <div className="cs-quote__by">
              <div className="cs-quote__av">{c.quoteInitials}</div>
              <div>
                <div className="cs-quote__name">{c.quoteName}</div>
                <div className="cs-quote__role">{c.quoteRole}</div>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT */}
        <section className="s-wrap cs-next">
          <a className="cs-next__card" href={c.next.href}>
            <div>
              <div className="cs-next__k">NEXT CASE STUDY · {c.next.tag}</div>
              <h3 className="cs-next__t">{c.next.title}</h3>
            </div>
            <div className="cs-next__arr">→</div>
          </a>
        </section>

        {/* CTA */}
        <section className="s-wrap cs-section">
          <div className="fcta__card">
            <div>
              <span className="eyebrow"><span className="pip" />START A PROJECT</span>
              <h2 className="fcta__h" style={{ marginTop: 18 }}>Want results <em>like these?</em></h2>
            </div>
            <div className="fcta__side">
              <p className="fcta__sub">A 30-minute call. We&apos;ll tell you whether we&apos;re the right partner — or who is.</p>
              <button className="btn btn--lg">Get In Touch <span className="arr">↗</span></button>
              <span className="eyebrow">Or reach us · hello@zeitforge.studio</span>
            </div>
          </div>
        </section>

        <CaseFooter />
      </div>
    </>
  );
}
