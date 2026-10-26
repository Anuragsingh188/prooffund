"use client";

import { useState } from "react";

type Review = {
  summary: string;
  missingDetails: string[];
  budgetIssues: string[];
  suggestions: string[];
  budgetTotal: number | null;
  goalMatchesBudget: boolean | null;
  disclaimer: string;
};

export default function CreateInitiative() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("15000");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [review, setReview] = useState<Review | null>(null);
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAIReview() {
    setMessage("");
    setReview(null);
    setMode("");

    if (!title.trim() || !description.trim() || Number(goal) <= 0) {
      setMessage("Enter a title, description, and valid funding goal first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/ai/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, goal, budget }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI review failed.");
      }

      setReview(data.review);
      setMode(data.mode || "review");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not complete the review. Check your server.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#080b14] px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="text-cyan-300 hover:text-cyan-100">
          ← Back to ProofFund
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-cyan-300">
          Start something meaningful
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Create a funding request
        </h1>

        <p className="mt-4 leading-7 text-slate-400">
          Describe your community initiative and planned expenses.
          Our reviewer can help identify missing details and budget issues.
        </p>

        <form
  onSubmit={(e) => e.preventDefault()}
  className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-[#101625] p-6 md:p-8"
>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Initiative title *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={100}
              placeholder="Clean Water for Our Neighborhood"
              className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 outline-none focus:border-cyan-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Community need and plan *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength={2000}
              rows={5}
              placeholder="What is needed, who benefits, and how will the project work?"
              className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 outline-none focus:border-cyan-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Funding goal (INR) *
            </label>
            <input
              type="number"
              min="1"
              max="10000000"
              step="1"
              required
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 outline-none focus:border-cyan-300"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Planned budget breakdown
            </label>
            <textarea
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              maxLength={2000}
              rows={4}
              placeholder={"Water filter: ₹8000\nInstallation: ₹4000\nMaintenance: ₹3000"}
              className="w-full rounded-xl border border-white/10 bg-[#080b14] px-4 py-3 outline-none focus:border-cyan-300"
            />
            <p className="mt-2 text-sm text-slate-500">
              List each planned expense and its estimated cost.
            </p>
          </div>

          
<button
  type="button"
  onClick={() => {
    console.log("AI review button clicked");
    void handleAIReview();
  }}
  disabled={loading}
  className="relative z-10 w-full cursor-pointer rounded-full bg-cyan-300 px-6 py-4 font-bold text-slate-950 hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60"
>
  {loading ? "Reviewing request..." : "✦ Review with AI"}
</button>


          {message && (
            <p
              role="alert"
              className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-100"
            >
              {message}
            </p>
          )}

          {review && (
            <section
              aria-live="polite"
              className="space-y-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5"
            >
              <h2 className="text-xl font-bold text-cyan-200">
                Review results
              </h2>

              <p className="text-sm text-slate-400">
                Review method:{" "}
                {mode === "gemini"
                  ? "Gemini AI"
                  : mode === "rule-based-fallback"
                    ? "Rule-based fallback (not AI)"
                    : mode}
              </p>

              <p className="leading-7 text-slate-200">{review.summary}</p>

              <div>
                <h3 className="font-semibold">Missing details</h3>
                {review.missingDetails.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {review.missingDetails.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-400">
                    No obvious omissions identified.
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-semibold">Budget observations</h3>
                {review.budgetTotal !== null && (
                  <p className="mt-2 text-sm text-slate-300">
                    Calculated total: ₹
                    {review.budgetTotal.toLocaleString("en-IN")}
                  </p>
                )}

                {review.budgetIssues.length > 0 ? (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {review.budgetIssues.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-400">
                    No budget issues returned.
                  </p>
                )}

                {review.goalMatchesBudget !== null && (
                  <p className="mt-2 text-sm text-slate-300">
                    Budget matches funding goal:{" "}
                    {review.goalMatchesBudget ? "Yes" : "No"}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-semibold">Suggestions</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {review.suggestions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <p className="border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
                {review.disclaimer} This review does not verify a project,
                organizer, receipt, or outcome.
              </p>
            </section>
          )}

          <p className="text-xs leading-5 text-slate-500">
            This is a draft demo. Requests are not saved or published yet.
            Do not enter sensitive personal information.
          </p>
        </form>
      </div>
    </main>
  );
}
