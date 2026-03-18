import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

const TECH_BADGES = [
  { name: "Python", color: "#3776AB", icon: "🐍" },
  { name: "OpenCV", color: "#5C3EE8", icon: "👁" },
  { name: "Arduino", color: "#00979D", icon: "⚡" },
  { name: "C++", color: "#00599C", icon: "⚙" },
  { name: "NumPy", color: "#013243", icon: "🔢" },
  { name: "kociemba", color: "#4A154B", icon: "🔣" },
  { name: "pyserial", color: "#2B5BE0", icon: "🔌" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: "🎨" },
];

export default function GitHubSection() {
  return (
    <SectionWrapper id="github">
      <div className="section-reveal">
        <Card gradient glow="electric" className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />

          <div className="relative z-10">
            {/* GitHub icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>

            <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-3">
              View Source Code
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Full source code including OpenCV pipeline, Kociemba integration, custom translation
              algorithm, Arduino firmware, and wiring schematics.
            </p>

            {/* Repo link */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#0b0f14]/60 border border-[#1e2a38] rounded-xl font-mono text-sm text-slate-400 mb-8">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-slate-600">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              github.com/<span className="text-white">code-with-devansh</span>/rubiks-cube-solver
            </div>

            <div className="mb-8">
              <a
                href="https://github.com/code-with-devansh/rubiks-cube-solver"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-400/10 border border-cyan-400/40 rounded-lg text-cyan-400 font-mono text-sm hover:bg-cyan-400/20 hover:border-cyan-400 transition-all glow-cyan"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Open Repository
              </a>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge.name}
                  className="tech-badge"
                >
                  {badge.icon} {badge.name}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
