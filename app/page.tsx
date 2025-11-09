"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Zap,
  Clock,
  Bot,
  ArrowRight,
  Shield,
  Sparkles,
  Instagram,
  Mail,
  LineChart,
} from "lucide-react";

export default function Home() {
  const featureItems = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Wins",
      desc:
        "Simple automations that save hours each week—delivered in days, not months.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI, Done For You",
      desc:
        "Custom assistants for DMs, content, lead follow-ups, and price checks—tuned to your brand.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Back",
      desc: "Free your calendar so you can create, sell, and live more.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Human + Secure",
      desc:
        "You get a real partner with a privacy-first mindset—not a faceless bot shop.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Free Audit",
      text:
        "Tell us what drains your time. We map 2–3 automations with impact estimates.",
    },
    {
      n: 2,
      title: "Prototype",
      text:
        "We build a quick win (1–2 workflows) so you see value immediately.",
    },
    {
      n: 3,
      title: "Scale",
      text:
        "Layer advanced AI, dashboards, and monitoring. Ongoing tweaks via subscription.",
    },
  ];

  const tiers = [
    {
name: "Starter",
price: "$19",
cadence: "/week",
blurb: "Best for trying your first automation win.",
items: [
"30‑min audit call",
"1 simple workflow (e.g., content planner or auto‑reply)",
"Basic documentation",
],
cta: "Book Starter",
},
{
name: "Creator",
price: "$49",
cadence: "/week",
highlight: true,
blurb: "Ongoing support + 2–3 active workflows maintained.",
items: [
"Priority chat support",
"2–3 active workflows maintained",
"Monthly tune‑ups + reports",
],
cta: "Start Subscription",
},
{
name: "Pro",
price: "$99",
cadence: "/week",
blurb: "Serious leverage for small teams.",
items: [
"Custom AI assistants",
"Dashboards + alerts",
"Quarterly strategy sprint",
],
cta: "Talk to Us",
},
];
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-slate-800 to-teal-700 shadow-[0_0_0_3px_rgba(15,23,42,0.6)]" />
            <span className="font-extrabold text-xl tracking-tight">DoLess</span>
            <span className="ml-2 rounded-full border border-teal-600/30 bg-teal-500/10 px-2 py-0.5 text-xs text-teal-300">
              Live More
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#process" className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="https://calendly.com/doless-live-moree/free-automation-audit-20-min"
            className="group inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-4 py-2 text-slate-950 font-semibold shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40"
          >
            Free Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(45,212,191,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Do Less. <span className="text-teal-300">Live More.</span>
          </motion.h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            We build personalized automations for creators and small brands so you can
            focus on growth—not grunt work. From content scheduling and DM replies to
            price checking and dashboards, we handle the busywork.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/doless-live-moree/free-automation-audit-20-min"
              className="rounded-2xl bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100"
            >
              Book your free audit
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-slate-800 px-5 py-3 text-slate-200 hover:bg-slate-900"
            >
              See what we automate
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-slate-400 text-sm">
            <LineChart className="h-4 w-4" />
            <span>Typical clients save 3–10 hrs/week within 14 days.</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-inner"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-slate-300">Simple path to real results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 font-bold">
                  {s.n}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/40 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Results you can feel</h3>
              <p className="mt-2 max-w-xl text-slate-300">
                “DoLess automated our inbound DMs and content pipeline. We saved
                6 hours/week and booked 30% more calls in a month.” —{" "}
                <span className="text-slate-200">Beta client</span>
              </p>
            </div>
            <a
              href="https://calendly.com/doless-live-moree/free-automation-audit-20-min"
              className="rounded-2xl bg-teal-500 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-teal-500/30 hover:bg-teal-400"
            >
              Get your free audit
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Simple pricing</h2>
          <p className="mt-2 text-slate-300">Start small, scale as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 ${
                t.highlight ? "border-teal-600 bg-slate-900/60" : "border-slate-800 bg-slate-900/40"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="rounded-full border border-teal-600/30 bg-teal-500/10 px-2 py-0.5 text-xs text-teal-300">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-extrabold">{t.price}</span>
                <span className="text-slate-400">{t.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-teal-300" />{" "}
                    <span className="text-slate-300">{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/doless-live-moree/free-automation-audit-20-min"
                className="mt-6 inline-block w-full rounded-xl bg-white px-4 py-2 text-center font-semibold text-slate-900 hover:bg-slate-100"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">What tools do you use?</h3>
            <p className="mt-2 text-sm text-slate-300">
              ChatGPT, Zapier/Make, Google Sheets/Airtable, Notion, and lightweight
              code when needed. We choose the simplest tool that works.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">Is my data safe?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Yes. We follow least-access principles and can sign NDAs. You control the
              accounts; we build inside your workspace.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">Who is DoLess for?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Creators, coaches, freelancers, and small brands that want leverage
              without hiring a full team.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="font-semibold">What’s the typical outcome?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Most clients reclaim 3–10 hours/week and see faster response times,
              smoother posting, and fewer missed leads.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Ready to work smarter?</h3>
              <p className="mt-2 text-slate-300">
                Grab a free audit or drop a note—let’s map your first automation win.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:doless.live.moree@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
              >
                <Mail className="h-4 w-4" /> doless.live.moree@gmail.com
              </a>
              <a
                href="https://instagram.com/doless_live_more"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
              >
                <Instagram className="h-4 w-4" /> @doless_live_more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-teal-300" />
            <span>DoLess • Built for creators</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-200">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
