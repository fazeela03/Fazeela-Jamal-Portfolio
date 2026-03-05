"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "Jan 2026 – Ongoing",
    location: "Poland · Remote",
    title: "Cybersecurity Specialist",
    company: "Exact Solution Electronics",
    sub: "GDPR & GRC Security Operations",
    bullets: [
      "Implemented GDPR security controls ensuring compliance with Articles 5, 25, 30 & 32.",
      "Supported DPIAs and maintained ROPA to meet regulatory requirements.",
      "Conducted VAPT on applications and infrastructure to identify data protection risks.",
      "Enforced least privilege, MFA, and IAM to reduce insider and external threats.",
      "Aligned security operations with ISO 27001, NIST, and CIS Controls.",
    ],
    current: true,
  },
  {
    period: "Feb 2024 – Dec 2025",
    location: "Doha, Qatar · Hybrid",
    title: "ICT & Cybersecurity Solution Architect",
    company: "Dico-Tech Corvit",
    sub: "",
    bullets: [
      "Performed business impact analyses (IT/OT/Cloud) and cyber risk quantification using FAIR & ISO 27001.",
      "Designed technical and functional mitigation plans, monitoring risk remediation progress.",
      "Delivered cybersecurity awareness sessions and developed security documentation for SMEs.",
      "Supported clients during ISO 27001 and GDPR audit cycles, RFP, and PoC.",
    ],
    current: false,
  },
  {
    period: "Feb 2022 – Jan 2024",
    location: "Karachi, Pakistan · Onsite",
    title: "Information Security Officer",
    company: "XTOL Pvt. Corp.",
    sub: "",
    bullets: [
      "Managed SOC operations and incident response using Splunk, Wazuh, IDS/IPS, and EDR.",
      "Conducted risk assessments aligned with ISO 27001 and NIST CSF.",
      "Executed penetration tests using Nmap, Metasploit, and Burp Suite.",
      "Prepared audit reports, risk registers, and presented findings to senior management.",
    ],
    current: false,
  },
  {
    period: "Oct 2021 – Jan 2022",
    location: "Karachi, Pakistan · Onsite",
    title: "Junior Cybersecurity Analyst",
    company: "CyberRace Institute",
    sub: "",
    bullets: [
      "Monitored SIEM alerts and investigated phishing attempts.",
      "Conducted offensive security assessments and web application penetration tests.",
      "Contributed to compliance mapping for ISO 27001, NIST, and PCI DSS.",
      "Performed vulnerability scanning via Burp Suite, Nmap, and Metasploit.",
    ],
    current: false,
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`md:grid md:grid-cols-2 md:gap-12 items-start transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Date column — left side for even, right side for odd */}
      <div className={`text-right hidden md:block pr-8 ${!isLeft ? "md:order-2 text-left pl-8 pr-0" : ""}`}>
        <span className="text-cyan-400 font-medium text-sm">{exp.period}</span>
        <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
      </div>

      {/* Card */}
      <div
        className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8 
          hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]
          transition-all duration-500
          ${!isLeft ? "md:order-1" : ""}`}
      >
        {/* Timeline dot */}
        <div
          className={`hidden md:flex absolute top-8 w-3 h-3 rounded-full border-2 border-[#0b1120] transition-all duration-300
            ${exp.current ? "bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]" : "bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.6)]"}
            ${isLeft ? "-left-[calc(1.5rem+1px)]" : "-right-[calc(1.5rem+1px)]"}`}
        />

        {/* Mobile date */}
        <div className="md:hidden mb-3 flex items-center gap-2 flex-wrap">
          <span className="text-cyan-400 font-medium text-xs">{exp.period}</span>
          <span className="text-gray-600 text-xs">·</span>
          <span className="text-gray-500 text-xs">{exp.location}</span>
        </div>

        {/* Current badge */}
        {exp.current && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Current
          </div>
        )}

        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 pr-16">
          {exp.title}
        </h3>
        <p className="text-cyan-400/70 text-sm mt-1 mb-4">
          {exp.company}{exp.sub ? ` — ${exp.sub}` : ""}
        </p>

        <ul className="space-y-2">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
              <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400/50 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 flex justify-center">
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
          Experience
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto text-sm uppercase tracking-widest">
          7+ years across cybersecurity operations, GRC consulting, and
          information security leadership.
        </p>

        <div className="relative">
          {/* Glowing timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,255,255,0.2) 20%, rgba(0,255,255,0.2) 80%, transparent)" }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.title} exp={exp} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}