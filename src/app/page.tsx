import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreExpertise from "./components/CoreExpertise";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import RevealWrapper from "./components/RevealWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120]">
      <Background />
      <Navbar />
      <main className="relative bg-transparent text-white px-6 overflow-hidden" style={{ zIndex: 1 }}>

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <Hero />
        <div className="section-divider" />

        {/* ─── ABOUT ────────────────────────────────────────────────────── */}
        <RevealWrapper direction="up">
          <About />
        </RevealWrapper>
        <div className="section-divider" />

        {/* ─── CORE EXPERTISE ───────────────────────────────────────────── */}
        <RevealWrapper direction="up" delay={100}>
          <CoreExpertise />
        </RevealWrapper>
        <div className="section-divider" />

        {/* ─── EXPERIENCE ───────────────────────────────────────────────── */}
        <RevealWrapper direction="up" delay={100}>
          <Experience />
        </RevealWrapper>
        <div className="section-divider" />

        {/* ─── CERTIFICATIONS ───────────────────────────────────────────── */}
        <RevealWrapper direction="up" delay={100}>
          <Certifications />
        </RevealWrapper>
        <div className="section-divider" />

        {/* ─── PROJECTS ─────────────────────────────────────────────────── */}
        <RevealWrapper direction="up" delay={100}>
          <Projects />
        </RevealWrapper>
        <div className="section-divider" />

        {/* ─── CONTACT ──────────────────────────────────────────────────── */}
        <RevealWrapper direction="up" delay={100}>
          <Contact />
        </RevealWrapper>

        {/* ─── FOOTER ───────────────────────────────────────────────────── */}
        <footer className="py-8 border-t border-white/10 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Fazeela Jamal · Cybersecurity Professional</p>
        </footer>

      </main>
    </div>
  );
}