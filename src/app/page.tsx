"use client";

import { useState } from "react";

const initiatives = [
  {
    category: "COMMUNITY",
    title: "Clean Water for Our Neighborhood",
    description:
      "Help provide a community water filter and cleaner drinking water for local families.",
    raised: 9200,
    goal: 15000,
    supporters: 24,
    color: "blue",
  },
  {
    category: "EDUCATION",
    title: "School Supplies for Every Child",
    description:
      "Fund essential notebooks, stationery, and learning materials for students in need.",
    raised: 6800,
    goal: 10000,
    supporters: 18,
    color: "purple",
  },
  {
    category: "ENVIRONMENT",
    title: "A Greener Street Project",
    description:
      "Support native saplings, planting supplies, and neighborhood green spaces.",
    raised: 4500,
    goal: 8000,
    supporters: 12,
    color: "green",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All initiatives");

  const filteredInitiatives =
    activeTab === "All initiatives"
      ? initiatives
      : initiatives.filter((item) => item.category === activeTab.toUpperCase());

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-xl font-black text-slate-950">
            P
          </span>
          <span className="text-xl font-bold tracking-tight">
            Proof<span className="text-cyan-300">Fund</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#initiatives" className="hover:text-cyan-300">
            Explore initiatives
          </a>
          <a href="#how-it-works" className="hover:text-cyan-300">
            How it works
          </a>
        </div>

        <a
          href="/create"
          className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
        >
          Start an initiative ↗
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-2 md:pb-28 md:pt-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            COMMUNITY FUNDING, WITH MORE CONTEXT
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Good ideas deserve{" "}
            <span className="text-cyan-300">proof.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Help local initiatives turn funding requests into transparent
            plans, track contributions, and share expense evidence along the
            way.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#initiatives"
              className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              Explore initiatives →
            </a>
            <a
              href="/create"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-cyan-300/60"
            >
              Create a funding request
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>✦ AI-assisted planning</span>
            <span>✦ Expense evidence</span>
            <span>✦ PayPal checkout (Sandbox planned)</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/10 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#101625] p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">FEATURED INITIATIVE</p>
                <h2 className="mt-2 text-2xl font-bold">
                  Clean Water Project
                </h2>
              </div>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                Demo data
              </span>
            </div>

            <div className="my-7 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20">
              <div className="text-center">
                <div className="text-6xl">💧</div>
                <p className="mt-3 text-sm text-cyan-100">
                  A healthier neighborhood starts here
                </p>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">₹9,200</p>
                <p className="mt-1 text-sm text-slate-400">of ₹15,000 goal</p>
              </div>
              <p className="text-sm text-slate-400">61% funded</p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[61%] rounded-full bg-cyan-300" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold">24</p>
                <p className="mt-1 text-xs text-slate-400">Demo supporters</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold">3</p>
                <p className="mt-1 text-xs text-slate-400">Planned evidence updates</p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Illustrative figures only. No funds have been collected.
            </p>
          </div>
        </div>
      </section>

      <section
        id="initiatives"
        className="border-t border-white/5 bg-[#0b0f1b] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Small actions. Visible progress.
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Explore community initiatives
              </h2>
              <p className="mt-3 max-w-2xl text-slate-400">
                Discover sample projects, review their funding goals, and see
                how ProofFund is designed to make progress easier to follow.
              </p>
            </div>
            <a
              href="/create"
              className="text-sm font-semibold text-cyan-300 hover:text-cyan-100"
            >
              Have an idea? Start here →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["All initiatives", "Community", "Education", "Environment"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition ${
                    activeTab === tab
                      ? "border-cyan-300 bg-cyan-300 text-slate-950"
                      : "border-white/10 text-slate-300 hover:border-cyan-300/50"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredInitiatives.map((item) => {
              const progress = Math.round((item.raised / item.goal) * 100);

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#101625] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-widest text-cyan-300">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      Demo
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-bold">
                        ₹{item.raised.toLocaleString("en-IN")}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        of ₹{item.goal.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <p className="text-sm text-slate-400">{progress}%</p>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
                    <span>{item.supporters} sample supporters</span>
                    <span>Illustrative data</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Designed for transparency
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            From funding request to evidence
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            ProofFund is being built around three connected steps. AI will
            assist with planning and expense comparisons, while people remain
            responsible for reviewing the information.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Plan with AI",
              description:
                "Draft a funding request, break down a budget, and identify missing details before publishing.",
            },
            {
              number: "02",
              title: "Support securely",
              description:
                "Use PayPal Sandbox checkout during development to demonstrate a payment flow without real money.",
            },
            {
              number: "03",
              title: "Share evidence",
              description:
                "Attach expense records and use AI to flag possible budget differences for human review.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="text-sm font-bold text-cyan-300">{step.number}</p>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 ProofFund · Built as a hackathon prototype.
          </p>
          <p>
            AI assessments are advisory. Evidence uploads do not independently
            verify outcomes.
          </p>
        </div>
      </footer>
    </main>
  );
}
