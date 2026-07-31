const practice = [
  {
    title: "Platform engineering",
    body: "Shared services, API-first contracts and event-driven backbones that several product teams depend on. The platform is a product; developer experience and extensibility count as much as the feature that shipped this quarter.",
  },
  {
    title: "Payments and regulated systems",
    body: "Card, recurring and e-mandate flows under PCI-DSS and RBI PPI constraints. Idempotency, reconciliation, partner failover and the operational discipline that keeps a payment platform honest at 15K TPS.",
  },
  {
    title: "Cloud-native and FinOps",
    body: "Kubernetes, Terraform and CI/CD on AWS and Azure, with cost treated as a first-class metric — including $660K of annual COGS removed at Acquia and per-transaction logging cost cut by two-thirds at Razorpay.",
  },
  {
    title: "Real-time data",
    body: "Kafka, Spark Streaming and Apache Pinot for operational analytics, plus Databricks pipelines for discovery products. Built for people who need to answer a question before the incident bridge fills up.",
  },
  {
    title: "Org design and GCC build-out",
    body: "Multi-pod organisations of 20–30 engineers, hiring across levels, and turning an offshore office into a Global Capability Center with genuine ownership rather than ticket execution.",
  },
  {
    title: "AI-assisted delivery",
    body: "Claude Code, Cursor and n8n adopted as team practice rather than a pilot — code review, refactoring, documentation and test generation — alongside LLM features shipped into production.",
  },
];

const operatingModel = [
  {
    stage: "Direction",
    inputs: ["Business and compliance goals", "OKRs and quarterly roadmap"],
  },
  {
    stage: "Design",
    inputs: ["Architecture guardrails", "Team design and staffing"],
  },
  {
    stage: "Delivery",
    inputs: ["Pods shipping independently", "FinOps: cost per transaction"],
  },
  {
    stage: "Feedback",
    inputs: ["SLIs, SLOs and error budgets", "Incident review and RCA", "Tech-debt backlog"],
  },
];

export default function About() {
  return (
    <section id="profile" className="border-b border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Profile</p>

        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">What I actually do</h2>
            <p className="mt-5 text-ink-muted">
              Six areas cover most of my work. The through-line is the same in each: make the
              expensive decisions early, keep the boring things reliable, and give engineers a
              system they can reason about.
            </p>
            <p className="mt-5 text-ink-muted">
              I stay close to the code — architecture reviews, design docs, the occasional
              production trace — because leadership decisions get worse the further you drift from
              the thing you&apos;re deciding about.
            </p>
          </div>

          <dl className="border-t border-rule">
            {practice.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <dt className="font-mono text-xs text-ink-subtle sm:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-muted">{item.body}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 border-t border-rule pt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h3 className="text-2xl sm:text-3xl">How the loop runs</h3>
            <p className="eyebrow">Operating model</p>
          </div>
          <p className="mt-4 max-w-2xl text-ink-muted">
            The same cycle at every organisation I&apos;ve led. The step most teams skip is the last
            arrow &mdash; the one that carries incident learnings and cost signals back into the
            next planning round instead of into a document nobody reopens.
          </p>

          <ol className="mt-8 grid gap-px border border-rule bg-rule md:grid-cols-4">
            {operatingModel.map((stage, index) => (
              <li key={stage.stage} className="relative bg-paper px-5 py-6">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -left-[7px] z-10 hidden -translate-y-1/2 bg-paper py-2 text-accent md:block"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                  </span>
                )}
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-2 font-serif text-xl">{stage.stage}</h4>
                <ul className="mt-3 space-y-2 text-[0.9rem] text-ink-muted">
                  {stage.inputs.map((input) => (
                    <li
                      key={input}
                      className="relative pl-4 before:absolute before:top-[0.72em] before:left-0 before:h-px before:w-2.5 before:bg-rule-strong"
                    >
                      {input}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div
            aria-hidden="true"
            className="relative hidden h-11 border-x border-b border-rule-strong md:block"
          >
            <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-paper py-1 text-accent">
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 8l4-4 4 4" />
              </svg>
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-paper px-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-subtle">
              Learnings and cost signals feed the next cycle
            </span>
          </div>

          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-subtle md:hidden">
            Feedback returns to direction — the cycle repeats
          </p>
        </div>
      </div>
    </section>
  );
}
