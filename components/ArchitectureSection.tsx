import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";

const ARCH_CARDS = [
  {
    icon: "👁",
    title: "Computer Vision",
    subtitle: "OpenCV + Python",
    color: "blue",
    highlight: false,
    points: [
      "Webcam captures each of the 6 faces sequentially",
      "HSV color space used for illumination-invariant detection",
      "Detection of each of the 9 stickers per face",
      "K-means clustering maps detected colors to 6 canonical cube colors",
      "Face ordering follows a fixed scanning protocol (U→R→F→D→L→B)",
      "Output: 54-character string",
    ],
    badge: "Layer 1",
  },
  {
    icon: "🔢",
    title: "Kociemba Solver",
    subtitle: "Two-Phase Algorithm",
    color: "blue",
    highlight: false,
    points: [
      "Phase 1: Reduces cube to subgroup G1 (edges oriented, corners partially solved)",
      "Phase 2: Solves within G1 subgroup using only half-turn moves",
      "Precomputed pruning tables enable fast look-ahead in search tree",
      "Guarantees solution in ≤20 moves (God's Number proven 2010)",
      "Python `kociemba` library wraps the optimized C implementation",
      "Typical solve time: <100ms on modern hardware",
    ],
    badge: "Layer 2",
  },
  {
    icon: "⚙",
    title: "Mechanical Translation",
    subtitle: "Custom Stack Algorithm",
    color: "orange",
    highlight: true,
    points: [
      "Maps 18 possible cube moves (U/D/F/B/L/R × CW/CCW/180°) to servo sequences",
      "Maintains virtual orientation state — tracks current cube face at bottom",
      "Stack-based cancellation removes inverse operation pairs before emission",
      "Cost table assigns operation weight per face; selects minimum-cost path",
      "Lookahead optimization leaves cube in best position for next move",
      "Outputs compact binary command list sent over USB serial at 9600 baud",
    ],
    badge: "Layer 3 — KEY",
  },
];

const colorAccent: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

export default function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture" className="grid-pattern">
      <SectionLabel
        tag="03 / ARCHITECTURE"
        title="System Architecture"
        subtitle="Three decoupled layers — each independently testable, each solving a distinct class of problem."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARCH_CARDS.map((card, i) => (
          <div key={card.title} className="section-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div
              className={`relative h-full bg-[#111820] rounded-xl p-6 border flex flex-col transition-all hover:scale-[1.01] duration-300 ${
                card.highlight
                  ? "border-orange-500/40 shadow-[0_0_40px_rgba(249,115,22,0.08)]"
                  : "border-[#1e2a38]"
              }`}
            >
              {card.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-orange-500 rounded-full font-mono text-xs text-white">
                  PRIMARY INNOVATION
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl ${colorAccent[card.color]}`}>
                  {card.icon}
                </div>
                <span className={`font-mono text-xs px-2 py-1 rounded border ${colorAccent[card.color]}`}>
                  {card.badge}
                </span>
              </div>

              <h3 className="font-mono text-xl font-bold text-white mb-1">{card.title}</h3>
              <p className="font-mono text-xs text-slate-500 mb-5">{card.subtitle}</p>

              {/* Points */}
              <ul className="space-y-3 flex-1">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${card.highlight ? "bg-orange-400" : "bg-cyan-400/50"}`} />
                    <span className="text-sm text-slate-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
