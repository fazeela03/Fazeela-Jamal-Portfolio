"use client";

import { useEffect, useState } from "react";

const roles = [
  "Cybersecurity Analyst",
  "Information Security Officer",
  "GRC Specialist",
  "SOC & Threat Operations Lead",
  "ISO 27001 Lead Auditor",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow centre */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div
        className={`max-w-3xl text-center px-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8"
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities · Open to relocation
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #67e8f9 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Fazeela Jamal
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl text-cyan-400 font-medium">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 animate-pulse align-middle" />
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ transitionDelay: "400ms" }}
        >
          7+ years of international experience in GRC, ISO 27001, GDPR,
          SOC operations, risk management, and security architecture.
          Driving compliance, audit readiness, and proactive risk mitigation
          across global enterprises.
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mb-10 text-sm"
          style={{ transitionDelay: "500ms" }}
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "3", label: "Countries" },
            { value: "ISO 27001", label: "Lead Auditor" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-gray-500 text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col md:flex-row gap-4 justify-center"
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href="/fazeela-jamal-cv.pdf"
            download="Fazeela_Jamal_CV.pdf"
            className="relative group bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)]"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/fazeela-jamal-553619200"
            target="_blank"
            className="border border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>

    </section>
  );
}