import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem" className="grid-pattern">
      <SectionLabel
        tag="01 / PROBLEM"
        title="The Core Challenge"
        subtitle="Bridging the gap between mathematical optimality and physical mechanical constraints."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left: Theory */}
        <Card className="section-reveal">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-mono text-sm font-bold">∞</span>
            </div>
            <div>
              <h3 className="font-mono text-base font-bold text-white mb-1">
                Theoretical Solver
              </h3>
              <p className="text-xs font-mono text-slate-500">Kociemba Two-Phase Algorithm</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Kociemba&apos;s algorithm produces an optimal solution in ~20 moves from any scrambled state.
            However, it operates in an{" "}
            <span className="text-blue-300">abstract mathematical space</span> — any face can be
            rotated from any direction, regardless of physical accessibility.
          </p>

          <div className="code-block text-slate-400">
            <span className="text-slate-600">{"// Example solver output"}</span>
            <br />
            <span className="text-cyan-400">solution</span>
            {" = "}
            <span className="text-green-400">&quot;U2 R F&apos; D B2 L U R2 D2&quot;</span>
            <br />
            <span className="text-slate-600">
              {"// U=Up, R=Right, F=Front, D=Down — unrestricted"}
            </span>
          </div>
        </Card>

        {/* Right: Reality */}
        <Card className="section-reveal" glow="cyan">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 text-lg">⚙</span>
            </div>
            <div>
              <h3 className="font-mono text-base font-bold text-white mb-1">
                Physical Robot
              </h3>
              <p className="text-xs font-mono text-slate-500">3-servo constrained mechanism</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            The physical robot can only interact with the cube from{" "}
            <span className="text-cyan-300">one fixed orientation</span> using three servo
            mechanisms. Every mathematical move must be translated into a valid sequence of{" "}
            <span className="text-cyan-300">flip, block, and rotate</span> operations.
          </p>

          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Flipper", desc: "Tilts cube 90°" },
              { name: "Blocker", desc: "Holds position" },
              { name: "Rotator", desc: "Spins bottom face" },
            ].map((servo) => (
              <div key={servo.name} className="p-2 bg-[#0b0f14]/60 rounded-lg border border-[#1e2a38] text-center">
                <p className="font-mono text-xs text-cyan-400 font-bold">{servo.name}</p>
                <p className="font-mono text-xs text-slate-600 mt-0.5">{servo.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* The mismatch */}
      <Card gradient className="section-reveal">
        <div className="flex items-start gap-6">
          <div className="hidden md:flex w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 items-center justify-center flex-shrink-0">
            <span className="text-orange-400 text-xl">⚡</span>
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold text-white mb-3">
              The Fundamental Mismatch
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              A solver output like <code className="text-cyan-300 bg-[#0b0f14]/60 px-1.5 py-0.5 rounded text-xs">R F&apos; U</code> tells the robot to
              rotate the <em>Right</em> face, then the <em>Front</em> face, then the <em>Up</em> face — but
              physically, the robot can only ever access the <strong className="text-white">bottom face</strong>. To rotate the Right face,
              the cube must first be flipped to the correct orientation, the move executed, then potentially
              re-oriented for the next move.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Naively translating each move independently generates{" "}
              <span className="text-orange-300 font-semibold">redundant flip-unflip sequences</span> that cancel each other out —
              tripling execution time. The key innovation is a{" "}
              <span className="text-cyan-300 font-semibold">cost-optimized, stack-based reduction algorithm</span>{" "}
              that eliminates these redundancies before they reach the hardware.
            </p>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
