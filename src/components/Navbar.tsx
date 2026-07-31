"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Profile", href: "#profile" },
  { name: "Experience", href: "#experience" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-paper/90 backdrop-blur-sm border-b border-rule"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Bharat Verma
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="link-rule text-sm text-ink-muted hover:text-ink"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/bharatverma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent link-underlined"
          >
            LinkedIn
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-sm text-ink-muted"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-rule bg-paper md:hidden">
          <div className="mx-auto max-w-5xl px-6 py-2 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-rule py-3 text-sm text-ink-muted last:border-b-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
