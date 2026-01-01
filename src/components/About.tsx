export default function About() {
  const focusAreas = [
    { icon: "👥", title: "Team Building", desc: "Hiring & mentoring engineers" },
    { icon: "🏗️", title: "Architecture", desc: "Microservices & distributed systems" },
    { icon: "📈", title: "Reliability", desc: "SLI/SLO/SLA & incident management" },
    { icon: "💰", title: "Fintech", desc: "Payment systems & compliance" },
    { icon: "☁️", title: "Cloud-Native", desc: "Kubernetes, AWS, Terraform" },
    { icon: "🚀", title: "Delivery", desc: "CI/CD & DevOps excellence" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#58a6ff] font-mono text-sm md:text-base mb-3 tracking-wider">01. About Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0f6fc]">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-[#8b949e] text-lg md:text-xl leading-relaxed">
              I&apos;m a <span className="text-[#f0f6fc] font-semibold">Senior Engineering Manager</span> at{" "}
              <span className="text-[#58a6ff] font-semibold">Razorpay</span>, leading the Cards Recurring & E-Mandate
              and Cards Growth teams. With <span className="text-[#f0f6fc] font-semibold">15+ years</span> of
              experience, I specialize in building high-scale payment platforms.
            </p>

            <p className="text-[#8b949e] text-lg md:text-xl leading-relaxed">
              Currently, I lead <span className="text-[#f0f6fc] font-semibold">21 engineers across 3 pods</span>,
              owning systems that process <span className="text-[#3fb950] font-semibold">15K TPS</span> and handle
              <span className="text-[#d29922] font-semibold"> ₹600-900 Cr</span> in daily card transaction volume.
            </p>

            <p className="text-[#8b949e] text-lg md:text-xl leading-relaxed">
              My journey spans from being a sole developer at Comviva to leading engineering organizations
              at MobiKwik, Acquia, Guidepoint Global, and now Razorpay. I&apos;ve built teams from 0 to 12,
              hired 40+ engineers, and delivered platforms processing billions.
            </p>

            {/* Code Block */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 font-mono text-sm mt-8">
              <div className="flex items-center gap-2 text-[#8b949e] mb-4">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs">bharat.yaml</span>
              </div>
              <pre className="text-[#8b949e] overflow-x-auto text-sm leading-relaxed">
{`location: Pune, India 🇮🇳
education: B.Tech, Jamia Millia Islamia
interests:
  - System Design
  - AI/ML (RAG, LLMs, Agents)
  - Building high-scale platforms
pronouns: He/Him`}
              </pre>
            </div>
          </div>

          {/* Right - Focus Areas */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 md:p-6 card-hover"
              >
                <div className="text-3xl md:text-4xl mb-4">{area.icon}</div>
                <h3 className="text-[#f0f6fc] font-semibold text-base md:text-lg mb-2">{area.title}</h3>
                <p className="text-[#8b949e] text-sm md:text-base">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
