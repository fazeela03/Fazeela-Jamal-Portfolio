"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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
    <section id="contact" className="py-24 flex justify-center" ref={ref}>
      <div className="max-w-3xl w-full text-center">

        {/* Availability badge */}
        <div
          className={`inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Open to new opportunities
        </div>

        <h2
          className={`text-4xl font-bold mb-4 tracking-tight transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-gray-400 text-lg mb-12 max-w-xl mx-auto transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Open to cybersecurity roles, consulting engagements, and relocation
          opportunities across Europe, Australia, New Zealand, and the Middle East.
        </p>

        {/* Contact cards */}
        <div
          className={`grid sm:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="mailto:Fazeelajamal03@gmail.com"
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3
              hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]
              hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-t-2xl" />
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform duration-300">
              ✉
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
            <p className="text-white text-sm font-medium break-all group-hover:text-cyan-400 transition-colors duration-300">
              Fazeelajamal03@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/fazeela-jamal-553619200"
            target="_blank"
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3
              hover:border-cyan-400/30 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]
              hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-t-2xl" />
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:scale-110 transition-transform duration-300">
              in
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
            <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300">
              fazeela-jamal
            </p>
          </a>

          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3
            hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500 rounded-t-2xl" />
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-lg group-hover:scale-110 transition-transform duration-300">
              ⌖
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Location</p>
            <p className="text-white text-sm font-medium">Karachi, Pakistan</p>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="mailto:Fazeelajamal03@gmail.com"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-10 py-3 rounded-lg
              shadow-[0_0_20px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.45)]
              transition-all duration-300"
          >
            Send a Message
          </a>
        </div>

      </div>
    </section>
  );
}