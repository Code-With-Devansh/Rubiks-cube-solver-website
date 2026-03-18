export default function Footer() {
  return (
    <footer className="relative border-t border-[#1e2a38] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div>
          <p className="font-mono text-sm font-bold text-cyan-400 mb-1">
            <span className="text-slate-600">{"// "}</span>CUBE_SOLVER
          </p>
          <p className="font-mono text-xs text-slate-600">
            EMR Embedx 2024 — 1st Place
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: "Problem", href: "#problem" },
            { label: "System", href: "#system" },
            { label: "Algorithm", href: "#algorithm" },
            { label: "Hardware", href: "#hardware" },
            { label: "Demo", href: "#demo" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="text-right">
          <p className="font-mono text-xs text-slate-600">Built with</p>
          <p className="font-mono text-xs text-slate-500">Next.js · Tailwind CSS</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 max-w-7xl mx-auto border-t border-[#1e2a38] pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-slate-700">
          © {new Date().getFullYear()} — Rubik&apos;s Cube Solver Bot Portfolio
        </p>
        <p className="font-mono text-xs text-slate-700">
          [ Your Name ] · [ your@email.com ]
        </p>
      </div>
    </footer>
  );
}
