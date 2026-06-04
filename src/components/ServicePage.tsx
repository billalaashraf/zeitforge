"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { MarkBrand } from "./MarkBrand";
import { SvcIcons } from "./icons";

interface MetaItem { k: string; v: ReactNode; }
interface Deliverable { icon: string; title: string; desc: string; items?: string[]; }
interface ProcessStep { title: ReactNode; desc: string; facts?: { k: string; v: string }[]; }
interface Outcome { v: string; l: string; d: string; }
interface WorkItem { tag: string; year: string; name: ReactNode; desc: string; metrics: { k: string; v: string }[]; }
interface EngagementTier { name: ReactNode; tag: string; price: string; priceUnit?: string; dur: string; features: string[]; feat?: boolean; }
interface FaqItem { q: string; a: string; }

export interface ServiceConfig {
  id: string;
  n: string;
  kind: string;
  crumbLabel: string;
  title: ReactNode;
  tagline: string;
  primaryCta?: string;
  meta: MetaItem[];
  sideKicker?: string;
  sideTitle: string;
  sideBody: string;
  nextIntake: string;
  deliverablesTitle: ReactNode;
  deliverablesIntro: string;
  deliverables: Deliverable[];
  processTitle: ReactNode;
  processIntro: string;
  process: ProcessStep[];
  outcomesTitle: ReactNode;
  outcomesIntro: string;
  outcomes: Outcome[];
  workTitle: ReactNode;
  workIntro: string;
  work: WorkItem[];
  engagementTitle: ReactNode;
  engagementIntro: string;
  engagement: EngagementTier[];
  faqTitle: ReactNode;
  faqIntro: string;
  faq: FaqItem[];
  ctaH?: ReactNode;
  ctaSub?: string;
}

const ALL_SERVICES = [
  { id: "design", n: "01", t: <>SaaS Product <em>Design</em></>, desc: "End-to-end product design from problem framing to a launched, instrumented interface.", href: "/services/product-design" },
  { id: "mvp",    n: "02", t: <>MVP <em>Development</em></>,    desc: "Whiteboard to launched product in eight weeks. One team. One accountable senior.",            href: "/services/mvp-development" },
  { id: "uiux",   n: "03", t: <>UI/UX <em>Design</em></>,       desc: "Design systems and interfaces that hold up at scale — components, motion, accessibility.",       href: "/services/ui-ux-systems" },
  { id: "ai",     n: "04", t: <>Automation &amp; <em>AI</em></>, desc: "Operational pipelines, copilots, RAG and evaluation in production — wired in, not bolted on.", href: "/services/automation-ai" },
];

function SvcHeader({ current }: { current: string }) {
  return (
    <header className="hdr">
      <div className="hdr__inner">
        <a className="hdr__brand" href="/"><MarkBrand size={22} /><span>ZeitForge</span></a>
        <nav className="hdr__nav">
          <a className="hdr__link" href="/#services">Services</a>
          <a className="hdr__link" href="/#work">Work</a>
          <a className="hdr__link" href="/#about">About</a>
          <a className="hdr__link" href="/#faq">Process</a>
        </nav>
        <div className="hdr__right">
          <a className="btn btn--ghost" href="/#contact">Get In Touch <span className="arr">↗</span></a>
        </div>
      </div>
    </header>
  );
}

function SvcFooter() {
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
            <li><a href="/#faq">Process</a></li>
          </ul>
        </div>
        <div className="ftr__col">
          <h5>SERVICES</h5>
          <ul>
            <li><a href="/services/product-design">SaaS Product Design</a></li>
            <li><a href="/services/mvp-development">MVP Development</a></li>
            <li><a href="/services/ui-ux-systems">UI/UX &amp; Systems</a></li>
            <li><a href="/services/automation-ai">Automation &amp; AI</a></li>
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
        <span>v 7.2 · Last update May 2026</span>
      </div>
    </footer>
  );
}

function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq__list">
      {items.map((it, i) => (
        <div key={i} className={`faq__item ${i === open ? "is-open" : ""}`} onClick={() => setOpen(i === open ? -1 : i)}>
          <div className="faq__q">
            <span className="faq__n">{String(i + 1).padStart(2, "0")}/</span>
            <span className="qt">{it.q}</span>
            <span className="faq__plus">
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" /></svg>
            </span>
          </div>
          <div className="faq__a"><div><p>{it.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}

export function ServicePage({ config }: { config: ServiceConfig }) {
  const cfg = config;
  const adj = ALL_SERVICES.filter(s => s.id !== cfg.id);

  return (
    <>
      <div className="s-bg" />
      <div className="s-page">
        <SvcHeader current={cfg.id} />

        {/* HERO */}
        <section className="s-wrap sp-hero">
          <div className="sp-crumb">
            <a href="/">ZeitForge</a>
            <span className="sep">/</span>
            <a href="/#services">Services</a>
            <span className="sep">/</span>
            <span className="cur">{cfg.crumbLabel}</span>
          </div>
          <div className="sp-hero__grid">
            <div>
              <span className="eyebrow"><span className="pip" />{cfg.n} · {cfg.kind}</span>
              <h1 className="sp-hero__h1" style={{ marginTop: 18 }}>{cfg.title}</h1>
              <p className="sp-hero__sub">{cfg.tagline}</p>
              <div className="hero__cta">
                <button className="btn btn--lg">{cfg.primaryCta || "Start a project"} <span className="arr">↗</span></button>
                <a className="btn btn--ghost btn--lg" href="/#work">See the work</a>
              </div>
              <div className="sp-hero__meta">
                {cfg.meta.map((m, i) => (
                  <div key={i} className="sp-hero__meta-item">
                    <span className="k">{m.k}</span>
                    <span className="v">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sp-hero__side">
              <span className="lbl">{cfg.sideKicker || "ENGAGEMENT BRIEF"}</span>
              <h4>{cfg.sideTitle}</h4>
              <p className="body">{cfg.sideBody}</p>
              <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--hairline)" }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fog)", marginBottom: 6 }}>NEXT INTAKE</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 16, letterSpacing: "-0.01em", color: "var(--bone)" }}>{cfg.nextIntake}</div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">01 · WHAT&apos;S INCLUDED</span>
              <h2 className="sp-sec-h__t">{cfg.deliverablesTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.deliverablesIntro}</div>
          </div>
          <div className="sp-deliv">
            {cfg.deliverables.map((d, i) => (
              <div key={i} className="sp-deliv__card">
                <div className="sp-deliv__head">
                  <div className="sp-deliv__ic">{SvcIcons[d.icon]}</div>
                  <span className="sp-deliv__num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="sp-deliv__t">{d.title}</h3>
                <p className="sp-deliv__d">{d.desc}</p>
                {d.items && (
                  <ul className="sp-deliv__list">
                    {d.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">02 · PROCESS</span>
              <h2 className="sp-sec-h__t">{cfg.processTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.processIntro}</div>
          </div>
          <div className="sp-process">
            {cfg.process.map((p, i) => (
              <div key={i} className="sp-phase">
                <div className="sp-phase__num">{String(i + 1).padStart(2, "0")}</div>
                <div className="sp-phase__l">
                  <h3 className="sp-phase__t">{p.title}</h3>
                  <p className="sp-phase__d">{p.desc}</p>
                </div>
                <div className="sp-phase__r">
                  {p.facts && p.facts.map((f, j) => (
                    <div key={j} className="row">
                      <span className="k">{f.k}</span>
                      <span className="v">{f.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">03 · OUTCOMES</span>
              <h2 className="sp-sec-h__t">{cfg.outcomesTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.outcomesIntro}</div>
          </div>
          <div className="sp-outcomes">
            {cfg.outcomes.map((o, i) => (
              <div key={i} className="sp-outcomes__cell">
                <div className="sp-outcomes__v" dangerouslySetInnerHTML={{ __html: o.v }} />
                <div className="sp-outcomes__l">{o.l}</div>
                <p className="sp-outcomes__d">{o.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">04 · SELECTED WORK</span>
              <h2 className="sp-sec-h__t">{cfg.workTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.workIntro}</div>
          </div>
          <div className="sp-work">
            {cfg.work.map((w, i) => (
              <div key={i} className="sp-work__card">
                <div className="sp-work__head">
                  <span className="sp-work__tag">{w.tag}</span>
                  <span className="sp-work__tag">{w.year}</span>
                </div>
                <div>
                  <h3 className="sp-work__name">{w.name}</h3>
                  <p className="sp-work__desc">{w.desc}</p>
                </div>
                <div className="sp-work__metrics">
                  {w.metrics.map((m, j) => (
                    <div key={j} className="sp-work__metric">
                      <div className="k">{m.k}</div>
                      <div className="v" dangerouslySetInnerHTML={{ __html: m.v }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENGAGEMENT */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">05 · ENGAGEMENT</span>
              <h2 className="sp-sec-h__t">{cfg.engagementTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.engagementIntro}</div>
          </div>
          <div className="sp-eng">
            {cfg.engagement.map((e, i) => (
              <div key={i} className={`sp-eng__card ${e.feat ? "is-feat" : ""}`}>
                <div className="sp-eng__head">
                  <h3 className="sp-eng__name">{e.name}</h3>
                  <span className={`sp-eng__tag ${e.feat ? "is-on" : ""}`}>{e.tag}</span>
                </div>
                <div className="sp-eng__price">{e.price}<span className="u">{e.priceUnit || "fixed"}</span></div>
                <div className="sp-eng__dur">{e.dur}</div>
                <ul className="sp-eng__list">
                  {e.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">06 · FAQ</span>
              <h2 className="sp-sec-h__t">{cfg.faqTitle}</h2>
            </div>
            <div className="sp-sec-h__r">{cfg.faqIntro}</div>
          </div>
          <FaqList items={cfg.faq} />
        </section>

        {/* ADJACENT SERVICES */}
        <section className="s-wrap sp-section">
          <div className="sp-sec-h">
            <div className="sp-sec-h__l">
              <span className="sp-sec-h__num">07 · ADJACENT</span>
              <h2 className="sp-sec-h__t">Often paired <em>with this.</em></h2>
            </div>
            <div className="sp-sec-h__r">Services that combine well — most clients commission two or three together for a single engagement.</div>
          </div>
          <div className="sp-adj">
            {adj.map((s, i) => (
              <a key={i} className="sp-adj__card" href={s.href}>
                <span className="sp-adj__num">{s.n} · SERVICE</span>
                <h3 className="sp-adj__t">{s.t}</h3>
                <p className="sp-adj__d">{s.desc}</p>
                <span className="sp-adj__arr">Learn more ↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="s-wrap sp-section">
          <div className="fcta__card">
            <div>
              <span className="eyebrow"><span className="pip" />NEXT STEP</span>
              <h2 className="fcta__h" style={{ marginTop: 18 }}>{cfg.ctaH || <>Ready to start? <em>Let&apos;s talk.</em></>}</h2>
            </div>
            <div className="fcta__side">
              <p className="fcta__sub">{cfg.ctaSub || "A 30-minute call. We'll tell you whether we're the right partner — or who is."}</p>
              <button className="btn btn--lg">Get In Touch <span className="arr">↗</span></button>
              <span className="eyebrow">Or reach us · hello@zeitforge.studio</span>
            </div>
          </div>
        </section>

        <SvcFooter />
      </div>
    </>
  );
}
