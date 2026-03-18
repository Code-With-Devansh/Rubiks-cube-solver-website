import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

export default function AchievementSection() {
  return (
    <div className="relative">
      {/* Accent glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <SectionWrapper id="achievement">
        <div className="section-reveal">
          <Card gradient glow="cyan" className="text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(234,179,8,0.04),transparent)] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-5xl mb-4">🥇</div>
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
                1st Place
              </h2>
              <p className="font-mono text-lg text-yellow-300 mb-6 tracking-wider">
                EMR Embedx — Embedded Systems Competition
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {[
                  { label: "Category", value: "Embedded Systems & Robotics" },
                  { label: "Team Size", value: "4 Members" },
                  { label: "My Role", value: "Team Lead & Computer Vision Engineer" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="font-mono text-sm text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Competed against teams with a fully functional autonomous
                Rubik&apos;s Cube solving robot — demonstrated live scanning, solving, and mechanical
                execution on stage.
              </p>

              {/* Team members placeholder */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Kavy Pagdhar", "Prabhav Dave", "Jay Shourya", "Devansh Arora"].map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1.5 bg-[#0b0f14]/60 border border-[#1e2a38] rounded-full font-mono text-xs text-slate-400"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}
