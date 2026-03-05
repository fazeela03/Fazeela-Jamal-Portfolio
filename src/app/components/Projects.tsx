"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    status: "Ongoing",
    statusColor: "yellow",
    year: "2026 –",
    title: "Active Directory Home Lab",
    description:
      "Built a simulated enterprise domain environment integrating Splunk and Atomic Red Team telemetry for real-world SIEM analysis. Designed to replicate attack scenarios and validate detection capabilities in a controlled lab setting.",
    tags: ["Active Directory", "Splunk", "Atomic Red Team", "SIEM", "Threat Detection"],
  },
  {
    status: "Completed",
    statusColor: "cyan",
    year: "2024",
    title: "Petal-o-BOT Detection",
    description:
      "Developed a Python-based machine learning model for image recognition applied to secure e-commerce data handling. Incorporated data privacy principles and secure processing pipelines to ensure compliance with data protection standards.",
    tags: ["Python", "Machine Learning", "Image Recognition", "Data Privacy", "e-Commerce"],
  },
];

export default function Projects() {
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
    <section id="projects" className="py-24 flex justify-center" ref={ref}>
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">Projects</h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto text-sm uppercase tracking-widest">
          Hands-on security research & engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5
                hover:border-cyan-400/30 hover:-translate-y-2 hover:bg-white/[0.08]
                hover:shadow-[0_0_50px_rgba(0,255,255,0.09)]
                transition-all duration-500
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top shimmer */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-t-2xl" />

              {/* Header row */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${
                    project.statusColor === "yellow"
                      ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
                      : "text-cyan-400 bg-cyan-400/10 border-cyan-400/20"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-gray-600 text-xs font-mono">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/10 px-2.5 py-1 rounded-full group-hover:border-cyan-400/25 group-hover:text-cyan-400 transition-all duration-300"
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