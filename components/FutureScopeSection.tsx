import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";

const FUTURE_ITEMS = [
  {
    icon: "🍓",
    title: "Raspberry Pi Integration",
    status: "Planned",
    color: "red",
    desc: "Replace the tethered laptop with an onboard Raspberry Pi 4 for fully standalone operation. Run OpenCV, kociemba, and the translation algorithm directly on-device — no USB host required.",
    tags: ["RPi 4", "Embedded Linux", "Camera Module"],
  },
  {
    icon: "🦾",
    title: "Multi-Arm Robot",
    status: "Research",
    color: "purple",
    desc: "Redesign with two or four independently actuated arms to enable parallel face access. This would eliminate the need for cube reorientation entirely — each arm handles its own face, dramatically reducing solve time.",
    tags: ["Parallel Execution", "Multi-servo", "Kinematics"],
  },
  {
    icon: "🔢",
    title: "NxN Cube Support",
    status: "Research",
    color: "blue",
    desc: "Extend the vision pipeline and solver to handle 4x4 and 5x5 Rubik's cubes. Requires a generalized color-extraction grid, a different solving algorithm (e.g., reduction method), and adjusted servo precision.",
    tags: ["4x4 / 5x5", "Generalized solver", "Higher precision"],
  },
  {
    icon: "🌐",
    title: "Web Interface",
    status: "In Progress",
    color: "cyan",
    desc: "Build a Next.js dashboard that visualizes the cube state in real time, shows the solving animation step-by-step, and streams serial logs from the Arduino — useful for debugging and demos.",
    tags: ["Next.js", "WebSocket", "3D visualization"],
  },
  {
    icon: "⏱",
    title: "Speed Optimization",
    status: "Planned",
    color: "green",
    desc: "Profile and reduce servo transition times using motion-interpolation firmware. Current bottleneck is servo settling time (200–300ms/move). Target: sub-100ms moves with velocity-controlled servos.",
    tags: ["Firmware", "Motion profiling", "Timing"],
  },
  {
    icon: "🤖",
    title: "RL-Based Move Planner",
    status: "Exploratory",
    color: "yellow",
    desc: "Train a reinforcement learning agent to directly output mechanically-optimal move sequences, bypassing the two-step solve+translate pipeline. Could learn to minimize servo operations, not just cube moves.",
    tags: ["Reinforcement Learning", "PyTorch", "Custom env"],
  },
];

const colorMap: Record<string, string> = {
  red: "text-red-400 bg-red-400/10 border-red-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

const statusColor: Record<string, string> = {
  "Planned": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Research": "text-purple-400 bg-purple-400/10 border-purple-400/20",
  "In Progress": "text-green-400 bg-green-400/10 border-green-400/20",
  "Exploratory": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

export default function FutureScopeSection() {
  return (
    <SectionWrapper id="future" className="grid-pattern">
      <SectionLabel
        tag="09 / FUTURE"
        title="Future Scope"
        subtitle="Where this project goes next — from embedded standalone to multi-arm parallelism."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FUTURE_ITEMS.map((item, i) => (
          <div key={item.title} className="section-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <Card className="h-full hover:border-[#2a3545] transition-colors duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-xl ${colorMap[item.color]}`}>
                  {item.icon}
                </div>
                <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${statusColor[item.status]}`}>
                  {item.status}
                </span>
              </div>

              <h3 className="font-mono text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2 py-0.5 bg-[#0b0f14]/60 border border-[#1e2a38] rounded text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
