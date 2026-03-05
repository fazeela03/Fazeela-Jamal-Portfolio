"use client";

import { useEffect, useRef, useState } from "react";

const groups = [
  {
    title: "ISO & Governance",
    certs: [
      { name: "ISO/IEC 27001:2022 Info-Sec Associate™", issuer: "Skill Front", date: "Oct 2024", ongoing: false },
      { name: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind Assurance", date: "", ongoing: false },
      { name: "ISO 42001 Lead Auditor & AI Governance", issuer: "Mastermind Assurance", date: "", ongoing: false },
    ],
  },
  {
    title: "Oracle Cloud",
    certs: [
      { name: "OCI Multicloud Architect Professional", issuer: "Oracle", date: "2025", ongoing: false },
      { name: "OCI Architect Associate", issuer: "Oracle", date: "2025", ongoing: false },
      { name: "OCI Certified Networking Professional", issuer: "Oracle", date: "2025", ongoing: false },
    ],
  },
  {
    title: "Security & GRC",
    certs: [
      { name: "VMDR – Vulnerability Management, Detection & Response", issuer: "Qualys", date: "2024", ongoing: false },
      { name: "CASP+: Governance, Risk & Compliance", issuer: "Cybrary", date: "Sep 2024", ongoing: false },
      { name: "Defensive Security & Cyber Risk", issuer: "Cybrary", date: "2024", ongoing: false },
      { name: "Defensive Security Operations", issuer: "Cybrary", date: "Jul 2024", ongoing: false },
      { name: "Security Ticketing", issuer: "Cybrary", date: "Sep 2024", ongoing: false },
    ],
  },
  {
    title: "In Progress & Business",
    certs: [
      { name: "CompTIA Security+ (SY0-701)", issuer: "", date: "Ongoing", ongoing: true },
      { name: "CISM", issuer: "", date: "Ongoing", ongoing: true },
      { name: "CISSP", issuer: "", date: "Ongoing", ongoing: true },
      { name: "Agile Project Management", issuer: "HP LIFE", date: "Sep 2024", ongoing: false },
      { name: "Cybersecurity Awareness", issuer: "HP LIFE", date: "Oct 2024", ongoing: false },
      { name: "Data Science & Analytics", issuer: "HP LIFE", date: "Sep 2024", ongoing: false },
    ],
  },
];

function CertCard({ group, delay }: { group: typeof groups[0]; delay: number }) {
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

  return (
    <div
      ref={ref}
      className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8
        hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(0,255,255,0.07)]
        transition-all duration-500
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms`, transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.5s ease, background 0.5s ease, border-color 0.5s ease" }}
    >
      {/* Top shimmer on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-t-2xl" />

      <h3 className="text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-6">
        {group.title}
      </h3>

      <ul className="space-y-4">
        {group.certs.map((cert) => (
          <li key={cert.name} className="flex items-start gap-3">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${cert.ongoing ? "bg-yellow-400" : "bg-cyan-400"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium leading-snug">{cert.name}</p>
              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                {cert.issuer && <p className="text-gray-500 text-xs">{cert.issuer}</p>}
                {cert.issuer && cert.date && <span className="text-gray-700 text-xs">·</span>}
                {cert.date && (
                  <span className={`text-xs font-medium ${cert.ongoing ? "text-yellow-400/70" : "text-gray-500"}`}>
                    {cert.date}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 flex justify-center">
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
          Certifications
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto text-sm uppercase tracking-widest">
          Governance · Cloud · Security · AI Management
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, i) => (
            <CertCard key={group.title} group={group} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  );
}