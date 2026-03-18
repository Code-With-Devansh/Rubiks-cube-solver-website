import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import Card from "./Card";
import circuitdiagram from "../public/circuit-diagram.jpg";
import Image from "next/image";
const HARDWARE = [
  {
    icon: "🔲",
    name: "Arduino Uno",
    role: "Main Controller",
    specs: ["ATmega328P @ 16 MHz", "14 digital I/O pins", "6 PWM channels", "USB-B serial (9600 baud)"],
    color: "cyan",
    desc: "Receives serial commands from Python host, drives PWM signals to each servo, and manages timing between operations.",
  },
  {
    icon: "🔧",
    name: "Flipper Servo",
    role: "Cube Orientation",
    specs: ["SG90 / MG996R", "0°–180° range", "PWM @ 50 Hz", "Tilt cube 90° per actuation"],
    color: "blue",
    desc: "Grips the cube from one side and physically tilts it 90° to change which face is accessible to the rotator.",
  },
  {
    icon: "🔒",
    name: "Blocker Servo",
    role: "Position Lock",
    specs: ["SG90 micro", "Binary position", "Prevents slip", "Active during rotation"],
    color: "blue",
    desc: "Engages to hold the top portion of the cube stationary while the rotator spins only the bottom layer.",
  },
  {
    icon: "🔄",
    name: "Rotator Servo",
    role: "Face Rotation",
    specs: ["MG996R (high torque)", "90° / 180° / 270° turns", "360° continuous mod", "Primary execution servo"],
    color: "cyan",
    desc: "Grips and rotates the bottom face of the cube — executes the actual cube moves after the flipper has positioned the correct face at the bottom.",
  },
  {
    icon: "⚡",
    name: "Power Supply",
    role: "5V Regulated",
    specs: ["5V @ 3A regulated", "Separate servo rail", "Arduino USB power", "Decoupling capacitors"],
    color: "yellow",
    desc: "Servos draw significant current under load. A dedicated 5V rail prevents Arduino resets caused by voltage drops during simultaneous servo actuation.",
  },
  {
    icon: "💻",
    name: "Host Computer",
    role: "Vision + Solver",
    specs: ["Python 3.10+", "OpenCV 4.x", "kociemba library", "pyserial for comms"],
    color: "green",
    desc: "Runs the computer vision pipeline and Kociemba solver. Connects to Arduino over USB and streams translated commands after solving.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  yellow: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
};

export default function HardwareSection() {
  return (
    <SectionWrapper id="hardware">
      <SectionLabel
        tag="04 / HARDWARE"
        title="Hardware Stack"
        subtitle="Three servo mechanisms, one Arduino, and a clean serial protocol — minimal hardware, maximum precision."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {HARDWARE.map((hw, i) => (
          <div key={hw.name} className="section-reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <Card className="h-full hover:border-[#2e3a4a] transition-colors duration-300">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-lg flex-shrink-0 ${colorMap[hw.color]}`}>
                  {hw.icon}
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold text-white">{hw.name}</h3>
                  <p className={`font-mono text-xs mt-0.5 ${colorMap[hw.color].split(" ")[0]}`}>{hw.role}</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{hw.desc}</p>

              {/* Specs */}
              <div className="space-y-1.5">
                {hw.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2">
                    <div className={`w-1 h-1 rounded-full ${colorMap[hw.color].split(" ")[0].replace("text-", "bg-")}`} />
                    <span className="font-mono text-xs text-slate-500">{spec}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Wiring diagram placeholder */}
      <div className="section-reveal mt-10">
        <Card className="text-center py-12 border-dashed">
          <div className="text-3xl mb-3">🔌</div>
          <p className="font-mono text-sm text-slate-500 mb-1">Wiring Schematic</p>
          <p className="font-mono text-xs text-slate-700">
          <Image src={circuitdiagram.src} width={circuitdiagram.width} height={circuitdiagram.height} alt="circuit diagram"/>
          </p>
        </Card>
      </div>
    </SectionWrapper>
  );
}
