"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActiveSection("");
        return;
      }

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let closest = "";
      let closestDistance = Infinity;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const distance = Math.abs(el.getBoundingClientRect().top - 80);
          if (el.getBoundingClientRect().top <= 120 && distance < closestDistance) {
            closestDistance = distance;
            closest = id;
          }
        }
      }

      if (closest) setActiveSection(closest);
    };

    // Run once immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.05)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="relative group">
          <span className="text-xl font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors duration-300">
            FJ
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`relative pb-1 transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-gray-400 transition-all duration-300 group-hover:bg-cyan-400 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-6 h-px bg-gray-400 transition-all duration-300 group-hover:bg-cyan-400 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-gray-400 transition-all duration-300 group-hover:bg-cyan-400 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0b1120]/95 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}