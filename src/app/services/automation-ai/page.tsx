import { ServicePage, type ServiceConfig } from "@/components/ServicePage";

const config: ServiceConfig = {
  id: "ai",
  n: "04",
  kind: "AUTOMATION",
  crumbLabel: "Automation & AI Workflows",
  title: <>Automation &amp; <em>AI workflows.</em></>,
  tagline: "Operational pipelines, internal copilots, RAG and evaluation in production — wired into the product, not bolted on. We ship AI you can measure.",
  primaryCta: "Brief an automation",
  meta: [
    { k: "Timeline", v: <>8–12 <em>weeks</em></> },
    { k: "Team",     v: "1 senior · 1 ML · ops" },
    { k: "Starting", v: <>From $<em>54K</em></> },
    { k: "Output",   v: "Live in prod" },
  ],
  sideKicker: "ENGAGEMENT · WHO IT'S FOR",
  sideTitle: "Companies past the demo and into the part where AI features need to behave the same way ten thousand times in a row.",
  sideBody: "Best fit if you have a workflow inside your product that's expensive in human time, has clear inputs and outputs, and a domain-expert who'd grade the AI's answers. We engineer for that grade.",
  nextIntake: "Q4 · 2026 · 3 SLOTS",
  deliverablesTitle: <>What we build, <em>literally.</em></>,
  deliverablesIntro: "Six artifacts that turn 'we tried a prompt' into 'we have an evaluated, measurable system in production.' Each is checked into your repo at handoff.",
  deliverables: [
    { icon: "eval",    title: "Evaluation harness", desc: "A test suite for your prompts and tools — pass/fail on golden datasets, regression-tested on every change.", items: ["100–500 golden samples", "Run in CI", "Drift detection"] },
    { icon: "router",  title: "Model & tool router", desc: "Routing logic that picks the cheapest model that hits your accuracy bar — with fallback paths when it doesn't.", items: ["Multi-provider", "Cost-aware", "Auto-fallback"] },
    { icon: "prompt",  title: "Prompt & tool inventory", desc: "Versioned, parameterized, and tested. No more prompts buried in code as one-line strings.", items: ["Git-tracked", "A/B-able", "Eval-bound"] },
    { icon: "monitor", title: "Observability dashboard", desc: "Per-call logs, traces, token spend, latency P50/P95/P99, accuracy on the running eval set.", items: ["LangSmith or Helicone", "Slack alerts", "Spend caps"] },
    { icon: "copilot", title: "Embedded UI surfaces", desc: "The UI for human-in-the-loop — review queues, override controls, confidence cues. AI you can supervise.", items: ["Approval queue", "Override + audit", "Confidence UI"] },
    { icon: "guard",   title: "Guardrails & ops runbook", desc: "Output validation, hallucination guards, abuse rate limits, and a written runbook for the five common ops events.", items: ["Output schemas", "Rate limits", "Runbook + training"] },
  ],
  processTitle: <>Frame · evaluate · ship · <em>operate.</em></>,
  processIntro: "AI projects fail at scope and they fail at evaluation. We over-invest in both. Building the model wrapper is the easy part — and the last part.",
  process: [
    { title: <>Frame.</>, desc: "Two weeks. We sit with your team and your domain expert. We pick one workflow, define its inputs and outputs, and write the evaluation criteria together. No model picked yet.", facts: [{ k: "Duration", v: "2 weeks" }, { k: "Artifact", v: "Eval criteria" }, { k: "Owner", v: "Domain expert" }] },
    { title: <><em>Evaluate.</em></>, desc: "We build the eval harness before the feature. Golden dataset, scoring rubric, baseline pass-rate. Now we have a number that has to go up.", facts: [{ k: "Duration", v: "2 weeks" }, { k: "Artifact", v: "Eval harness" }, { k: "Baseline", v: "Established" }] },
    { title: <>Build.</>, desc: "Prompts, tools, retrieval, routing — built against the eval harness. Every change runs through eval before merge. The pass-rate is the truth.", facts: [{ k: "Duration", v: "4 weeks" }, { k: "Artifact", v: "Working pipeline" }, { k: "Cadence", v: "Weekly Fri demo" }] },
    { title: <>Ship.</>, desc: "Wire to production behind a feature flag. Roll out to 1% / 10% / 50% / 100% with the eval running in shadow against live traffic.", facts: [{ k: "Duration", v: "Week 9" }, { k: "Artifact", v: "Live feature" }, { k: "Rollout", v: "Staged" }] },
    { title: <><em>Operate.</em></>, desc: "Operator trained, runbooks written, observability live in your channel. We stay 30 days as on-call backup, then we hand the keys over cleanly.", facts: [{ k: "Duration", v: "Weeks 10–12 + 30d" }, { k: "Artifact", v: "Trained operator" }, { k: "Support", v: "30d included" }] },
  ],
  outcomesTitle: <>Numbers from <em>shipped systems.</em></>,
  outcomesIntro: "Aggregated across eight AI engagements that went to production in the last twelve months. We publish the full per-engagement breakdown under NDA.",
  outcomes: [
    { v: "94<em>%</em>",  l: "PASS-RATE ON EVAL",     d: "Median accuracy on the client-defined golden set at production rollout." },
    { v: "-68<em>%</em>", l: "COST PER WORKFLOW",      d: "Reduction in cost-per-task vs. the naive single-model baseline, via routing and caching." },
    { v: "3.8<em>×</em>", l: "WORKFLOW THROUGHPUT",    d: "Tasks handled per operator per day after the AI surface went live." },
    { v: "0",             l: "P0 INCIDENTS POST-SHIP", d: "Severity-zero AI incidents across the eight engagements after 30-day shadow rollout." },
  ],
  workTitle: <>AI work <em>recently shipped.</em></>,
  workIntro: "Four of the last eight engagements. Eval harness samples and architecture diagrams shared under NDA on the discovery call.",
  work: [
    { tag: "FOLIO · KNOWLEDGE", year: "2026 Q1", name: <>Internal <em>RAG copilot</em></>, desc: "RAG copilot over a 14k-document policy archive for an enterprise customer-service org. Replaced 60% of tier-1 lookups with grounded answers and citations.", metrics: [{ k: "Pass-rate", v: "94%" }, { k: "Lookups Δ", v: "-60%" }, { k: "P95 latency", v: "1.8s" }] },
    { tag: "ASCEND · MARKETING", year: "2025 Q4", name: <>Brief-to-asset <em>pipeline</em></>, desc: "Multi-step brief → variation pipeline for a marketing platform — turning a written brief into 12 channel-specific asset variations with human review.", metrics: [{ k: "Pass-rate", v: "91%" }, { k: "Cost / brief", v: "-72%" }, { k: "Throughput", v: "4.2×" }] },
    { tag: "REGENT · COMPLIANCE", year: "2025 Q3", name: <>SOC-2 <em>evidence agent</em></>, desc: "Evidence-collection agent for a compliance platform — pulls from 14 sources, scores against control map, generates auditor-ready packets.", metrics: [{ k: "Sources", v: "14" }, { k: "Auditor pass", v: "100%" }, { k: "Time saved", v: "38h / mo" }] },
    { tag: "PARALLEL · OPERATIONS", year: "2025 Q2", name: <>Operations <em>triage</em></>, desc: "Ticket-triage and routing for a logistics ops desk — classify, prioritize, route. Shadow-deployed against live traffic for a month before flip.", metrics: [{ k: "Pass-rate", v: "96%" }, { k: "Routing Δ", v: "-44s" }, { k: "Day-1 P0", v: "0" }] },
  ],
  engagementTitle: <>Right-sized, <em>fixed fee.</em></>,
  engagementIntro: "Pick a scope with us on the discovery call. We size to the workflow, not the duration — but every scope is fixed-fee and time-boxed.",
  engagement: [
    { name: <>Probe.</>, tag: "4 WEEKS", price: "$32K", priceUnit: "fixed", dur: "4 weeks · 1 senior", features: ["One workflow, evaluated end-to-end", "Eval harness + golden dataset", "Baseline + post-fix pass-rate", "Written feasibility report", "Best for: a hypothesis you want to validate cheaply"] },
    { name: <><em>Build &amp; Ship.</em></>, tag: "FLAGSHIP · 10 WEEKS", feat: true, price: "$84K", priceUnit: "fixed", dur: "10 weeks · 1 senior + 1 ML", features: ["Full pipeline: eval, routing, prompts, tools", "Observability + cost dashboards", "Embedded UI surface for review queue", "Staged rollout from 1% to 100%", "Operator training + runbook", "30-day post-ship on-call", "Best for: production-bound workflow with a measurable outcome"] },
    { name: <>Embedded.</>, tag: "12 WEEKS + RETAINER", price: "$120K", priceUnit: "+ retainer", dur: "12 weeks build · ongoing ops", features: ["Two workflows shipped to production", "Multi-tenant ready, fine-tuning optional", "Eval-as-CI integrated with your pipelines", "Quarterly model & eval reviews", "Continued ops support at monthly rate", "Best for: AI-native products with multiple workflows"] },
  ],
  faqTitle: <>AI <em>questions.</em></>,
  faqIntro: "The honest answers to questions we hear most. The dishonest answers to questions we hear most are everywhere else.",
  faq: [
    { q: "Do you build your own models?", a: "Almost never. Foundation models do 90% of the work; fine-tuning gets us another 8%; building from scratch is rarely worth it for the workflows clients ask about. We focus on the eval, the routing, the tooling, and the UX — the parts that determine whether the AI is usable in production." },
    { q: "What's the deal with evaluation?", a: "Evaluation is the difference between a demo and a system. We define pass/fail criteria with your domain expert in week one. Every prompt change runs through eval. The pass-rate on the golden set is the only number that gets us to ship." },
    { q: "Can you work on top of LangChain / LlamaIndex / DSPy?", a: "Yes, and we usually do. We're framework-pragmatic. Default is whatever's cleanest for your team — most engagements end up on LangChain or a thin custom orchestrator. We don't insist on a framework." },
    { q: "What about data privacy?", a: "We deploy on your cloud and your model accounts by default. We don't process your data on our infrastructure. Where you need an on-prem or private-cloud model, we'll work with that constraint from day one." },
    { q: "How do you price the inference cost?", a: "Inference cost is your operational cost, not part of our fee. We do build the cost dashboards and the routing logic to keep it predictable — most clients land around 30–40% of their initial cost estimate after we tune routing." },
  ],
  ctaH: <>Got an AI workflow to ship? <em>Brief us.</em></>,
  ctaSub: "30 minutes on a call. We'll tell you what's measurable, what's not, and whether the workflow is ready for AI — or whether the fix is somewhere else entirely.",
};

export default function Page() {
  return <ServicePage config={config} />;
}
