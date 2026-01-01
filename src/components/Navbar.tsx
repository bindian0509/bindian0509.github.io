"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            BV
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#8b949e] hover:text-[#f0f6fc] transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://linkedin.com/in/bharatverma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1f6feb] hover:bg-[#58a6ff] text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8b949e] hover:text-[#f0f6fc] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#30363d] pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#8b949e] hover:text-[#f0f6fc] transition-colors text-base font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://linkedin.com/in/bharatverma"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1f6feb] hover:bg-[#58a6ff] text-white rounded-lg text-sm font-semibold transition-colors text-center mt-2"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
