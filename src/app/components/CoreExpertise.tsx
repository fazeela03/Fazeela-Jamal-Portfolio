"use client";

import { useEffect, useRef, useState } from "react";

const expertise = [
  {
    number: "01",
    title: "GRC & Compliance",
    description:
      "Leading governance, risk, and compliance programs aligned with international standards and business objectives.",
    tags: ["ISO 27001", "NIST CSF", "GDPR", "HIPAA", "FAIR", "ISMS"],
  },
  {
    number: "02",
    title: "SOC & Threat Operations",
    description:
      "Running security operations, monitoring SIEM platforms, triaging alerts, and leading incident response workflows.",
    tags: ["Splunk", "Wazuh", "QRadar", "EDR", "XDR", "IDS/IPS"],
  },
  {
    number: "03",
    title: "Offensive Security",
    description:
      "Executing penetration tests, vulnerability assessments, and exploit validation across applications and infrastructure.",
    tags: ["Burp Suite", "Nmap", "Metasploit", "VAPT", "Bug Bounty"],
  },
  {
    number: "04",
    title: "Cloud & Infrastructure Security",
    description:
      "Securing cloud environments with IAM controls, risk assessments, and network security architecture across major providers.",
    tags: ["Oracle Cloud", "AWS", "Azure", "IAM", "Cloud Risk"],
  },
  {
    number: "05",
    title: "Risk & Audit Management",
    description:
      "Conducting risk quantification, gap analyses, and audit readiness programs with executive-level reporting.",
    tags: ["Risk Quantification", "Gap Analysis", "Archer GRC", "Audit Cycles"],
  },
  {
    number: "06",
    title: "Technical Stack",
    description:
      "Hands-on expertise across security tooling, scripting, network protocols, and enterprise directory services.",
    tags: ["Linux", "Python", "Active Directory", "Wireshark", "TCP/IP", "Jira"],
  },
];

export default function CoreExpertise() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="py-32 flex justify-center" ref={ref}>
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
          Core Expertise
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto text-sm uppercase tracking-widest">
          Strategic cybersecurity leadership across governance, risk,
          compliance, offensive testing, and enterprise security operations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className={`group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8
                flex flex-col gap-4
                hover:border-cyan-400/40 hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(0,255,255,0.10)]
                hover:bg-white/[0.08]
                transition-all duration-500
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top edge shimmer on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500 rounded-t-3xl" />

              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-cyan-400/40 group-hover:text-cyan-400/70 transition-colors duration-300">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/10 px-2.5 py-1 rounded-full group-hover:border-cyan-400/25 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}