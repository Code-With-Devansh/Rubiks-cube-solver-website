import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";

const MOVE_COST_TABLE = [
  { face: "D (Bottom)", cost: 1, note: "Direct — no flip needed" },
  { face: "U (Top)", cost: 3, note: "Flip × 2 + rotate" },
  { face: "F (Front)", cost: 2, note: "Single flip + rotate" },
  { face: "B (Back)", cost: 3, note: "Flip × 2 opposite" },
  { face: "L (Left)", cost: 2, note: "Single flip + 90° rotation" },
  { face: "R (Right)", cost: 2, note: "Single flip + 270° rotation" },
];

export default function AlgorithmDeepDive() {
  return (
    <SectionWrapper id="algorithm">
      <SectionLabel
        tag="05 / ALGORITHM"
        title="Algorithm Deep Dive"
        subtitle="Why Kociemba alone is insufficient — and the custom translation layer that bridges the gap."
      />

      <div className="space-y-8">
        {/* Part 1: Why Kociemba is insufficient */}
        <Card className="section-reveal" gradient>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-blue-400 font-mono text-sm font-bold">I</span>
            </div>
            <h3 className="font-mono text-xl font-bold text-white">
              Why Kociemba Alone Is Insufficient
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Kociemba&apos;s Two-Phase Algorithm solves any Rubik&apos;s Cube in at most 20 moves — this is
                mathematically proven (God&apos;s Number). It works in an abstract group space where any of the
                6 faces can be rotated independently at any time.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The algorithm has <span className="text-white font-semibold">no concept of physical orientation</span> —
                it outputs a flat sequence like{" "}
                <code className="text-cyan-300 bg-[#0b0f14]/80 px-2 py-0.5 rounded text-xs">U R2 F B R B2 R U2...</code>{" "}
                with no knowledge of how those moves will be physically executed.
              </p>
            </div>
            <div className="code-block">
              <div className="text-slate-600 mb-2 text-xs">{"/* Kociemba output — abstract notation */"}</div>
              <div className="space-y-1 text-xs">
                <div><span className="text-cyan-400">Phase1</span>: <span className="text-white">U R F D2 L B</span></div>
                <div><span className="text-cyan-400">Phase2</span>: <span className="text-white">R2 U2 D2 F2 B2 L2</span></div>
                <div className="mt-3 text-slate-600">{"// Problem: 'U' requires accessing the TOP face"}</div>
                <div className="text-slate-600">{"// Robot can only access the BOTTOM face"}</div>
                <div className="mt-2 text-orange-400">{"// → Must flip cube to bring 'U' to bottom"}</div>
                <div className="text-orange-400">{"// → Next move 'R' requires DIFFERENT orientation"}</div>
                <div className="text-orange-400">{"// → Naively: flip-back, flip-new = redundant ops"}</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Part 2: Stack-based reduction */}
        <Card className="section-reveal" glow="cyan">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400 font-mono text-sm font-bold">II</span>
            </div>
            <h3 className="font-mono text-xl font-bold text-white">
              Stack-Based Move Reduction
            </h3>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">
            The translation algorithm maintains a <span className="text-cyan-300 font-semibold">virtual orientation state</span> — tracking
            which face of the cube is currently at the bottom (accessible to the rotator servo). Instead of
            resetting to a canonical position between every move, it carries forward the current orientation
            and finds the{" "}
            <span className="text-cyan-300 font-semibold">cheapest path</span> from the current state to the
            required state for the next move.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Without Reduction</p>
              <div className="code-block text-xs space-y-1">
                <div className="text-slate-500">Input: <span className="text-white">U R</span></div>
                <div className="mt-2 text-slate-600">{"// Naïve translation:"}</div>
                <div className="text-orange-400">FLIP_FORWARD   <span className="text-slate-600">{"// U → flip to top"}</span></div>
                <div className="text-orange-400">FLIP_FORWARD</div>
                <div className="text-white">ROTATE_CW      <span className="text-slate-600">{"// execute U"}</span></div>
                <div className="text-orange-400">FLIP_BACKWARD  <span className="text-slate-600">{"// reset"}</span></div>
                <div className="text-orange-400">FLIP_BACKWARD</div>
                <div className="text-orange-400">FLIP_FORWARD   <span className="text-slate-600">{"// R → flip right"}</span></div>
                <div className="text-white">ROTATE_CW      <span className="text-slate-600">{"// execute R"}</span></div>
                <div className="mt-2 text-red-400">7 operations — 2 redundant pairs</div>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">With Stack Reduction</p>
              <div className="code-block text-xs space-y-1">
                <div className="text-slate-500">Input: <span className="text-white">U R</span></div>
                <div className="mt-2 text-slate-600">{"// Optimized translation:"}</div>
                <div className="text-cyan-400">FLIP_FORWARD   <span className="text-slate-600">{"// U → bring top to bottom"}</span></div>
                <div className="text-cyan-400">FLIP_FORWARD</div>
                <div className="text-white">ROTATE_CW      <span className="text-slate-600">{"// execute U"}</span></div>
                <div className="text-slate-600">{"// State: top face is now at bottom"}</div>
                <div className="text-cyan-400">FLIP_BACKWARD  <span className="text-slate-600">{"// direct path to R"}</span></div>
                <div className="text-white">ROTATE_CW      <span className="text-slate-600">{"// execute R"}</span></div>
                <div className="mt-2 text-green-400">5 operations — 28% reduction</div>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            The stack tracks pending orientation changes and{" "}
            <span className="text-cyan-300">cancels inverse operations</span> before they are emitted
            (e.g., a FLIP_FORWARD followed by a FLIP_BACKWARD that accomplishes nothing gets eliminated). This is
            analogous to peephole optimization in compiler design.
          </p>
        </Card>

        {/* Part 3: Cost table */}
        <Card className="section-reveal">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <span className="text-orange-400 font-mono text-sm font-bold">III</span>
            </div>
            <h3 className="font-mono text-xl font-bold text-white">
              Cost-Based Move Optimization
            </h3>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">
            Each face has a different physical cost to access from the current orientation. The algorithm
            uses a{" "}
            <span className="text-orange-300 font-semibold">precomputed cost table</span> to choose
            the minimum-cost transition path. When multiple reorientation paths have equal cost, it selects
            the one that leaves the cube in the best position for the <em>next</em> move (lookahead optimization).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-[#1e2a38]">
                  <th className="text-left py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Face</th>
                  <th className="text-left py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Op Cost</th>
                  <th className="text-left py-3 px-4 text-slate-500 text-xs uppercase tracking-wider">Physical Sequence</th>
                </tr>
              </thead>
              <tbody>
                {MOVE_COST_TABLE.map((row, i) => (
                  <tr
                    key={row.face}
                    className={`border-b border-[#1e2a38]/50 ${i === 0 ? "bg-green-500/5" : ""}`}
                  >
                    <td className="py-3 px-4">
                      <span className={i === 0 ? "text-green-400" : "text-white"}>{row.face}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-1">
                        {Array.from({ length: row.cost }).map((_, j) => (
                          <div
                            key={j}
                            className={`w-4 h-4 rounded-sm ${
                              i === 0 ? "bg-green-400/40" : "bg-cyan-400/30"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
