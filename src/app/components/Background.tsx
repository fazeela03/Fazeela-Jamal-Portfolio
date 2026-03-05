"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Orbs
    const orbs = [
      { x: 0.15, y: 0.05, r: 350, color: "rgba(0,255,255,0.045)", dx: 0.00012, dy: 0.00008 },
      { x: 0.85, y: 0.12, r: 300, color: "rgba(139,92,246,0.04)", dx: -0.00010, dy: 0.00006 },
      { x: 0.5,  y: 0.35, r: 280, color: "rgba(0,255,255,0.025)", dx: 0.00007, dy: -0.00009 },
      { x: 0.2,  y: 0.6,  r: 320, color: "rgba(139,92,246,0.035)", dx: 0.00009, dy: 0.00007 },
      { x: 0.8,  y: 0.75, r: 300, color: "rgba(0,255,255,0.03)", dx: -0.00008, dy: -0.00006 },
      { x: 0.5,  y: 0.9,  r: 260, color: "rgba(139,92,246,0.03)", dx: 0.00006, dy: 0.00005 },
    ];

    // Particles
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.25 + 0.05,
      dx: (Math.random() - 0.5) * 0.00004,
      dy: -Math.random() * 0.00006 - 0.00002,
    }));

    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.dx * Math.sin(t * 0.5);
        orb.y += orb.dy * Math.cos(t * 0.3);
        orb.x = ((orb.x % 1) + 1) % 1;
        orb.y = ((orb.y % 1) + 1) % 1;

        const grd = ctx.createRadialGradient(
          orb.x * w, orb.y * h, 0,
          orb.x * w, orb.y * h, orb.r
        );
        grd.addColorStop(0, orb.color);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(orb.x * w, orb.y * h, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < 0) { p.y = 1; p.x = Math.random(); }
        if (p.x < 0 || p.x > 1) { p.x = Math.random(); }

        const pulse = Math.sin(t * 0.02 + p.x * 10) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,255,${p.opacity * pulse})`;
        ctx.fill();
      });

      t++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}