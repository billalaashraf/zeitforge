import { CaseStudyPage, type CaseConfig } from "@/components/CaseStudyPage";
import { ProjAI } from "@/components/viz";

const config: CaseConfig = {
  crumbLabel: "AI SaaS Platform",
  tags: ["AI SaaS", "Inference", "Series B", "Regulated"],
  title: <>The inference platform behind a <em>regulated AI product.</em></>,
  summary: "We stood up the inference, retrieval and guardrail systems behind an AI product now used by fourteen of the world's largest insurers — built to be measured, audited, and trusted in a regulated market.",
  meta: [
    { k: "Role",     v: "Platform · ML · Design" },
    { k: "Timeline", v: "14 weeks + retainer" },
    { k: "Sector",   v: "Insurance · RegTech" },
    { k: "Stage",    v: "Series B" },
  ],
  demoUrl: "app.client-ai.io / inference / console",
  HeroViz: ProjAI,
  challengeTitle: <>A demo that couldn&apos;t <em>survive an audit.</em></>,
  challenge: [
    "The client had a working AI demo and a signed pilot with a top-five insurer — and no way to prove the model behaved the same way twice. Every answer was a black box. Compliance couldn't sign off, and the pilot was three weeks from stalling.",
    "They needed an inference platform that was fast, cheap at scale, and — above all — measurable. In a regulated market, an AI answer you can't explain or reproduce is a liability, not a feature.",
  ],
  challengeBullets: [
    <><strong>No evaluation.</strong> Prompt changes shipped on vibes. No regression safety net.</>,
    <><strong>Runaway cost.</strong> Every query hit the largest model regardless of difficulty.</>,
    <><strong>Zero auditability.</strong> No trace of why a given answer was produced.</>,
    <><strong>No guardrails.</strong> Nothing stopped a hallucinated figure reaching a customer.</>,
  ],
  approachTitle: <>Evaluation first, <em>everything else second.</em></>,
  approach: [
    { t: "Built the eval harness before the feature", d: "We sat with their domain experts and defined a 480-sample golden set with a pass/fail rubric. That number became the contract — nothing shipped unless it moved the pass-rate up." },
    { t: "Cost-aware model router", d: "A routing layer scores each query and sends it to the cheapest model that clears the accuracy bar, with automatic fallback to larger models when confidence drops." },
    { t: "Retrieval with citations", d: "Every grounded answer carries its sources. The RAG layer pulls from a versioned policy corpus and attaches citations the auditor can follow." },
    { t: "Guardrails + observability", d: "Output schemas, hallucination guards, and a live dashboard tracking spend, latency P50/P95/P99, and rolling accuracy against the eval set." },
  ],
  galleryTitle: <>An operator console <em>built for trust.</em></>,
  shots: [
    { kind: "wide", cap: "Inference console · live model routing" },
    { kind: "",     cap: "Eval harness · golden-set pass rate" },
    { kind: "",     cap: "Trace view · per-answer citations" },
  ],
  outcomeTitle: <>Shipped, audited, <em>scaled.</em></>,
  outcomes: [
    { v: "8.4<em>M</em>", l: "QUERIES / DAY",    d: "Sustained production throughput across all customer tenants." },
    { v: "31",            l: "MODELS ORCHESTRATED", d: "Routed across providers by cost and accuracy in real time." },
    { v: "−41<em>%</em>", l: "COST PER QUERY",   d: "Versus the naive single-model baseline, via routing + caching." },
    { v: "94<em>%</em>",  l: "EVAL PASS-RATE",   d: "On the client-defined golden set at production rollout." },
  ],
  stack: ["Python", "LangChain", "Postgres + pgvector", "Redis", "AWS Bedrock", "OpenAI", "Anthropic", "LangSmith", "Terraform"],
  quote: <>They refused to ship a single feature until the evaluation harness was green. It felt slow for a week — then it was the only reason <em>compliance signed off.</em></>,
  quoteInitials: "RM",
  quoteName: "Rachel Maddox",
  quoteRole: "VP ENGINEERING · CLIENT-AI",
  next: { href: "/work/clinic-pulse", tag: "HEALTHCARE", title: <>Clinic <em>Pulse</em></> },
};

export default function Page() {
  return <CaseStudyPage config={config} />;
}
