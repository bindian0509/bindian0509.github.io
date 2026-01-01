const achievements = [
  {
    icon: "⚡",
    metric: "10s → 2s",
    title: "Latency Reduction",
    description: "Reduced card transaction latency by 80% through re-architecture at Razorpay",
    color: "#58a6ff",
  },
  {
    icon: "📈",
    metric: "99.9%",
    title: "Uptime SLA",
    description: "Achieved effective uptime for standing-instruction repeat card payment flows",
    color: "#3fb950",
  },
  {
    icon: "💰",
    metric: "$660K",
    title: "Cost Savings",
    description: "Annual COGS savings by migrating customers from Cloud Classic to Cloud Next at Acquia",
    color: "#d29922",
  },
  {
    icon: "📦",
    metric: "3x",
    title: "Throughput Boost",
    description: "Increased product ingestion from 30K to 100K products/day at ShopClues",
    color: "#a371f7",
  },
  {
    icon: "💳",
    metric: "₹29Cr",
    title: "GMV Growth",
    description: "Grew monthly GMV from ₹181Cr to ₹210Cr through Bug-a-thon initiative at MobiKwik",
    color: "#db61a2",
  },
  {
    icon: "⏰",
    metric: "4hrs",
    title: "SLA Improvement",
    description: "Optimized email/SMS pipelines from 3PM to 11AM SLA for 1M+ users at Naukri",
    color: "#58a6ff",
  },
  {
    icon: "👥",
    metric: "40+",
    title: "Engineers Hired",
    description: "Built and scaled engineering teams from scratch across multiple organizations",
    color: "#3fb950",
  },
  {
    icon: "🔄",
    metric: "9p → 3p",
    title: "Cost Optimization",
    description: "Reduced logging costs per transaction by 66% for card payment systems",
    color: "#d29922",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-20 bg-[#161b22]/50">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#58a6ff] font-mono text-sm md:text-base mb-3 tracking-wider">04. Achievements</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0f6fc]">
            Impact & Results
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#21262d] border border-[#30363d] rounded-xl p-6 md:p-8 card-hover text-center group"
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center text-3xl md:text-4xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${achievement.color}15` }}
              >
                {achievement.icon}
              </div>

              <div
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: achievement.color }}
              >
                {achievement.metric}
              </div>

              <h3 className="text-[#f0f6fc] font-semibold text-base md:text-lg mb-3">
                {achievement.title}
              </h3>

              <p className="text-[#8b949e] text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Integrations */}
        <div className="mt-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#f0f6fc] mb-8">
            Key Integrations Delivered
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cred Pay", "Apple Pay", "Google Pay", "RBI PPI Compliance", "SOC2 Compliance"].map(
              (integration, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-[#21262d] border border-[#30363d] rounded-full text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#58a6ff] transition-all cursor-default font-medium"
                >
                  {integration}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
