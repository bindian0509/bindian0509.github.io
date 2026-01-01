"use client";

import { useEffect, useState } from "react";

const roles = [
  "Senior Engineering Manager",
  "Backend Architect",
  "Distributed Systems Expert",
  "Fintech Platform Builder",
  "Engineering Leader",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a371f7]/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#f0f6fc 1px, transparent 1px), linear-gradient(90deg, #f0f6fc 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center stagger-children">
        {/* Greeting */}
        <p className="text-[#58a6ff] font-mono text-lg mb-4">
          👋 Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Bharat Verma</span>
        </h1>

        {/* Typing Animation */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <span className="text-2xl md:text-4xl text-[#8b949e] font-light">
            {displayText}
            <span className="animate-pulse text-[#58a6ff]">|</span>
          </span>
        </div>

        {/* Current Role */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-full mb-8">
          <span className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse" />
          <span className="text-[#8b949e] text-sm">
            Currently at <span className="text-[#f0f6fc] font-medium">Razorpay</span> 💳
          </span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#58a6ff]">15+</div>
            <div className="text-[#8b949e] text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3fb950]">15K</div>
            <div className="text-[#8b949e] text-sm">TPS Scale</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#a371f7]">₹900Cr</div>
            <div className="text-[#8b949e] text-sm">Daily Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#d29922]">21+</div>
            <div className="text-[#8b949e] text-sm">Engineers Led</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#1f6feb] hover:bg-[#58a6ff] text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] border border-[#30363d] rounded-lg font-medium transition-all hover:scale-105"
          >
            View Experience
          </a>
          <a
            href="https://github.com/bindian0509"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] border border-[#30363d] rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-[#8b949e]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

