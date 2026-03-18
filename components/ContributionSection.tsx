import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";

const MY_CONTRIBUTIONS = [
  {
    area: "Computer Vision Pipeline",
    icon: "👁",
    items: [
      "Designed and implemented cube state detection pipeline using OpenCV",
      "Mapped webcam input to structured 3×3 grid using coordinate-based ROI extraction",
      "Converted BGR frames to HSV color space for lighting-invariant color detection",
      "Applied morphological operations (opening/closing) to reduce noise and improve segmentation",
      "Developed color classification logic to map detected stickers into URFDLB representation",
      "Ensured consistent detection across varying lighting conditions through threshold tuning and filtering",
      "Generated accurate 54-character cube state string for solver input",
    ],
    highlight: true,
  },
  {
    area: "Hardware & Firmware",
    icon: "🤖",
    items: [
      "Designed and implemented servo control system using Arduino Uno for cube manipulation",

      "Controlled multiple servo motors (flipper, blocker, base rotation) using PWM signals",

      "Developed firmware to parse and execute command sequences received over serial communication",

      "Implemented synchronized motion logic to coordinate clamping, rotation, and flipping actions",

      "Integrated Python backend with Arduino via PySerial for real-time instruction streaming",

      "Optimized execution timing to ensure stable operation under mechanical constraints",

      "Debugged hardware issues including servo jitter, timing delays, and power stability",
    ],
  },
];

export default function ContributionSection() {
  return (
    <SectionWrapper id="contribution" className="grid-pattern">
      <SectionLabel
        tag="08 / CONTRIBUTIONS"
        title="My Contribution"
        subtitle="Individual ownership within a collaborative team project."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MY_CONTRIBUTIONS.map((section, i) => (
          <div
            key={section.area}
            className="section-reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Card
              gradient={section.highlight}
              glow={section.highlight ? "cyan" : "none"}
              className="h-full"
            >
              {section.highlight && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 font-mono text-xs text-cyan-400 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  PRIMARY OWNERSHIP
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{section.icon}</span>
                <h3 className="font-mono text-base font-bold text-white">
                  {section.area}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${section.highlight ? "bg-cyan-400" : "bg-slate-600"}`}
                    />
                    <span
                      className={`text-sm leading-relaxed ${item.startsWith("[") ? "text-slate-600 italic" : "text-slate-400"}`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>

      {/* Tech used personally */}
      <div className="section-reveal mt-10">
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 text-center">
          Technologies I worked with directly
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Python",
            "OpenCV",
            "NumPy",
            "kociemba",
            "pyserial",
            "Arduino C",
            "Servo PWM",
            "HSV Color Space",
            "Serial Protocol",
          ].map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
