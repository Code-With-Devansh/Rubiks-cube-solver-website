import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";

const PIPELINE = [
  {
    step: "01",
    title: "Scan",
    tech: "OpenCV + Webcam",
    icon: "📷",
    color: "cyan",
    desc: "Webcam captures each of the 6 cube faces. OpenCV detects color regions using HSV masking. Each of 54 stickers is classified into one of 6 colors and encoded into a positional string.",
    output: "54-char state string",
    details: ["HSV color masking", "Contour detection", "Color classification", "Face ordering logic"],
  },
  {
    step: "02",
    title: "Solve",
    tech: "Kociemba Algorithm",
    icon: "🧠",
    color: "blue",
    desc: "The 54-character cube state is passed to a Python implementation of Kociemba's Two-Phase Algorithm. Phase 1 reduces the cube to a subgroup; Phase 2 solves within that subgroup optimally in ≤20 moves.",
    output: "Move sequence string",
    details: ["Two-phase search", "Pruning tables", "≤20 move guarantee", "God's Number bound"],
  },
  {
    step: "03",
    title: "Translate",
    tech: "Custom Stack Algorithm",
    icon: "⚙️",
    color: "orange",
    desc: "The KEY INNOVATION. Maps abstract moves (U, R, F, D, L, B) to physically valid servo operations. Uses cost-based optimization and stack-based cancellation to minimize redundant flip operations.",
    output: "Serial command list",
    details: ["Move-to-servo mapping", "Stack cancellation", "Cost optimization", "Constraint solving"],
    highlight: true,
  },
  {
    step: "04",
    title: "Execute",
    tech: "Arduino + Servos",
    icon: "🤖",
    color: "green",
    desc: "Optimized commands are sent over USB serial to an Arduino Uno. The Arduino interprets each command and drives the three servo motors — flipper, blocker, and rotator — in precise timed sequences.",
    output: "Physical cube solved",
    details: ["Serial protocol", "Servo PWM control", "Timing sequences", "State feedback"],
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
  blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  orange: "border-orange-500/30 bg-orange-500/5 text-orange-400",
  green: "border-green-500/30 bg-green-500/5 text-green-400",
};

const dotMap: Record<string, string> = {
  cyan: "bg-cyan-400",
  blue: "bg-blue-400",
  orange: "bg-orange-400",
  green: "bg-green-400",
};

export default function SystemOverview() {
  return (
    <SectionWrapper id="system">
      <SectionLabel
        tag="02 / PIPELINE"
        title="System Overview"
        subtitle="Four-stage pipeline from physical cube to solved state — vision, cognition, translation, and execution."
      />

      {/* Pipeline diagram */}
      <div className="relative">
        {/* Horizontal connector (desktop) */}
        <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-green-400/20 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIPELINE.map((step, i) => (
            <div key={step.step} className="section-reveal relative" style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Mobile connector */}
              {i < PIPELINE.length - 1 && (
                <div className="lg:hidden absolute left-10 top-full w-px h-6 bg-gradient-to-b from-slate-600 to-transparent z-0" />
              )}

              <div
                className={`relative z-10 bg-[#111820] border rounded-xl p-5 h-full flex flex-col transition-all hover:scale-[1.02] duration-300 ${
                  step.highlight
                    ? "border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
                    : "border-[#1e2a38]"
                }`}
              >
                {step.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-orange-500 rounded-full font-mono text-xs text-white whitespace-nowrap">
                    KEY INNOVATION
                  </div>
                )}

                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-slate-600">{step.step}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Circle node */}
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-4 ${colorMap[step.color]}`}>
                  <span className="font-mono text-sm font-bold">{step.step}</span>
                </div>

                <h3 className="font-mono text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="font-mono text-xs text-slate-500 mb-3">{step.tech}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{step.desc}</p>

                {/* Detail chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {step.details.map((d) => (
                    <span
                      key={d}
                      className="font-mono text-xs px-2 py-0.5 bg-[#0b0f14] border border-[#1e2a38] rounded text-slate-500"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Output label */}
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${colorMap[step.color]}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${dotMap[step.color]}`} />
                  <span className="font-mono text-xs">{step.output}</span>
                </div>

                {/* Arrow (desktop) */}
                {i < PIPELINE.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-[68px] w-8 h-8 items-center justify-center z-20">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-600">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
