const figures = [
  { value: "16 yrs", label: "Engineering, 10 of them leading teams" },
  { value: "15K TPS", label: "Peak throughput on payment systems owned" },
  { value: "$60–90M", label: "Daily transaction volume under ownership" },
  { value: "40+", label: "Engineers hired across levels since 2016" },
];

const domains = [
  "Payments & fintech platforms",
  "Distributed & event-driven systems",
  "Cloud-native platform engineering",
  "GCC build-out & site scaling",
  "SRE, observability & FinOps",
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Pune, India · Working across IST and US hours</p>

        <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
          Bharat Verma
        </h1>

        <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-accent sm:text-3xl">
          I build the platform organisations that financial-grade systems run on.
        </p>

        <div className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-1 border border-rule-strong bg-accent-soft px-4 py-2.5 text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-ink">Open to Director / Head of Engineering roles</span>
          <span aria-hidden="true" className="text-rule-strong">
            |
          </span>
          <span className="text-ink-muted">India · Singapore · UAE</span>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <div className="space-y-5 text-ink-muted">
            <p>
              Sixteen years across payments, enterprise SaaS and cloud infrastructure. I&apos;ve
              taken PHP monoliths into Go and Java services, stood up real-time data platforms, and
              run card payment systems where a two-second regression is a business incident rather
              than a graph.
            </p>
            <p>
              Most of my work sits where architecture meets organisation design: deciding what a
              platform team owns, what it exposes to other teams, and how it stays reliable when the
              company grows faster than the codebase.
            </p>
          </div>

          <dl className="space-y-4 border-t border-rule pt-6 text-sm md:border-t-0 md:border-l md:border-rule md:pt-0 md:pl-8">
            <div>
              <dt className="eyebrow">Currently</dt>
              <dd className="mt-1 text-ink">
                Director, Platform Engineering — AssetMark
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Previously</dt>
              <dd className="mt-1 text-ink-muted">
                Razorpay · Guidepoint · Acquia · MobiKwik · Naukri.com
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Reach me</dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                <a href="mailto:bharatv@outlook.in" className="link-underlined text-ink">
                  bharatv@outlook.in
                </a>
                <a
                  href="https://linkedin.com/in/bharatverma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underlined text-ink"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bindian0509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underlined text-ink"
                >
                  GitHub
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px border border-rule bg-rule lg:grid-cols-4">
          {figures.map((figure) => (
            <div key={figure.value} className="bg-paper px-5 py-6">
              <dt className="font-serif text-3xl text-ink sm:text-4xl">{figure.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-ink-muted">{figure.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-6">
          {domains.map((domain) => (
            <li key={domain} className="eyebrow">
              {domain}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
