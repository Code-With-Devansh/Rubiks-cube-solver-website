"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated cube grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#ffffff"];

    const drawCubeFace = (x: number, y: number, size: number, opacity: number) => {
      const cell = size / 3;
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const colorIdx = Math.floor(((row * 3 + col + Math.floor(t / 60)) % 6 + 6) % 6);
          ctx.fillStyle =
            COLORS[colorIdx] +
            Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0");
          ctx.beginPath();
          ctx.roundRect(x + col * cell + 1, y + row * cell + 1, cell - 2, cell - 2, 2);
          ctx.fill();
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;

      const size = 60;
      const gap = 120;
      const cols = Math.ceil(canvas.width / gap) + 2;
      const rows = Math.ceil(canvas.height / gap) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap - 30;
          const y = r * gap - 30;
          const wave = Math.sin(t / 80 + r * 0.5 + c * 0.3) * 0.5 + 0.5;
          drawCubeFace(x, y, size, wave * 0.06);
        }
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b0f14]/80 via-[#0b0f14]/40 to-[#0b0f14]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.08),transparent)]" />

      {/* Scanning line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent z-0 animate-[scan_6s_linear_infinite]" style={{ top: "30%" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Award badge */}
        <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-300 font-mono text-xs tracking-wider">
          <span>🥇</span>
          1ST PLACE — EMR EMBEDX COMPETITION
        </div>

        {/* Title */}
        <h1 className="fade-in-up fade-in-up-delay-1 font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Rubik&apos;s Cube
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-cyan-text">
            Solver Bot
          </span>
        </h1>

        {/* Subtitle */}
        <p className="fade-in-up fade-in-up-delay-2 text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          A full-stack hardware + software system combining{" "}
          <span className="text-cyan-300">OpenCV computer vision</span>,{" "}
          <span className="text-blue-300">Kociemba&apos;s two-phase algorithm</span>, and a{" "}
          <span className="text-cyan-300">custom mechanical translation engine</span> to physically
          solve a Rubik&apos;s Cube using Arduino-driven servo motors.
        </p>

        {/* CTA buttons */}
        <div className="fade-in-up fade-in-up-delay-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/code-with-devansh/rubiks-cube-solver"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-400/10 border border-cyan-400/50 rounded-lg text-cyan-400 font-mono text-sm hover:bg-cyan-400/20 hover:border-cyan-400 transition-all glow-cyan"
          >
            <GitHubIcon />
            View GitHub
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm hover:bg-white/10 transition-all"
          >
            <PlayIcon />
            Watch Demo
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-in-up fade-in-up-delay-4 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "~20", label: "Moves to solve" },
            { value: "54", label: "Character state string" },
            { value: "3", label: "Servo mechanisms" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-mono text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</p>
              <p className="font-mono text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-600">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
