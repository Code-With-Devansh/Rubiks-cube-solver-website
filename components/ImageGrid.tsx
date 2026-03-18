interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

const PLACEHOLDER_IMAGES: GalleryImage[] = [
  { src: "", alt: "Team at EMR Embedx competition", label: "EMR Embedx 2024 — Award Ceremony" },
  { src: "", alt: "Full robot assembly", label: "Final Assembly" },
  { src: "", alt: "Arduino wiring detail", label: "Arduino + Servo Wiring" },
  { src: "", alt: "OpenCV cube scan interface", label: "OpenCV Color Detection" },
  { src: "", alt: "Robot solving cube", label: "Live Solve — Side View" },
  { src: "", alt: "Team working on build", label: "Build Phase" },
];

export default function ImageGrid({ images = PLACEHOLDER_IMAGES }: { images?: GalleryImage[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative group aspect-video rounded-xl overflow-hidden border border-[#1e2a38] bg-[#111820]"
        >
          {img.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 grid-pattern">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="text-slate-700"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="font-mono text-xs text-slate-700">[ Image {i + 1} ]</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <p className="font-mono text-xs text-cyan-400">{img.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
