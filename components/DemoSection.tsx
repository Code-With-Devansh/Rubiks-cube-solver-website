import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import VideoEmbed from "./VideoEmbed";

export default function DemoSection() {
  return (
    <SectionWrapper id="demo" className="grid-pattern">
      <SectionLabel
        tag="06 / DEMO"
        title="See It in Action"
        subtitle="Full team walkthrough and live solve demonstration from the competition floor."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-reveal">
        <VideoEmbed
          youtubeId="H6A99FX--Og"
          title="Team Explanation — System Walkthrough"
          label="Video 01 / Team Presentation"
        />
        <VideoEmbed
          youtubeId="PTByx3YmgEY"
          title="Live Demo — Autonomous Cube Solve"
          label="Video 02 / Working Demo"
        />
      </div>

      {/* Solve metrics */}
      <div className="section-reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Avg Moves", value: "~20", sub: "Kociemba optimal" },
          { label: "Serial Baud", value: "9600", sub: "USB-B protocol" },
          { label: "Vision FPS", value: "30", sub: "OpenCV capture" },
          { label: "Servos", value: "3", sub: "Flip / Block / Rotate" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-[#111820] border border-[#1e2a38] rounded-xl p-4 text-center hover:border-cyan-500/20 transition-colors"
          >
            <p className="font-mono text-2xl font-bold text-cyan-400">{m.value}</p>
            <p className="font-mono text-xs text-white mt-1">{m.label}</p>
            <p className="font-mono text-xs text-slate-600 mt-0.5">{m.sub}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
