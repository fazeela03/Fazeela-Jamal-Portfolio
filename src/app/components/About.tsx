"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(7, 1200, inView);
  const countries = useCountUp(3, 1000, inView);
  const frameworks = useCountUp(8, 1400, inView);

  return (
    <section id="about" className="py-24 flex justify-center" ref={ref}>
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">About</h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto text-sm uppercase tracking-widest">
          Background & Profile
        </p>

        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Main card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_60px_rgba(0,255,255,0.04)] overflow-hidden">

            {/* Left glow accent */}
            <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />

            {/* Top-right decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -z-0" />

            <div className="relative z-10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Information Security & Cybersecurity Professional with extensive experience
                across SOC operations, compliance frameworks, risk quantification, and
                audit readiness. Proven ability to align ISO 27001, NIST CSF, GDPR, and
                FAIR methodologies with business objectives, ensuring secure-by-design
                implementation across technical and governance domains.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Experienced in executive reporting, cross-functional collaboration,
                and international consulting engagements across Europe, the Middle East,
                and South Asia. Open to relocation in Europe, Australia, New Zealand,
                and the Middle East.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-6">
            {[
              { value: years, suffix: "+", label: "Years Experience" },
              { value: countries, suffix: "", label: "Countries" },
              { value: frameworks, suffix: "+", label: "Frameworks & Standards" },
            ].map(({ value, suffix, label }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <p className="text-3xl font-extrabold text-cyan-400 mb-1">
                  {value}{suffix}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "🌍 Open to Relocation", color: "cyan" },
              { label: "🇵🇰 Karachi, Pakistan", color: "gray" },
              { label: "🗣 English & Urdu", color: "gray" },
              { label: "🔐 Security Clearance Eligible", color: "cyan" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className={`text-sm px-4 py-2 rounded-full border ${
                  color === "cyan"
                    ? "bg-cyan-400/10 border-cyan-400/20 text-cyan-300"
                    : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}