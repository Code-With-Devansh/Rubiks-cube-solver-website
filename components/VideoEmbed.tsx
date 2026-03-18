interface VideoEmbedProps {
  youtubeId: string; // e.g. "dQw4w9WgXcQ" or "PLACEHOLDER"
  title: string;
  label?: string;
}

export default function VideoEmbed({ youtubeId, title, label }: VideoEmbedProps) {
  const isPlaceholder = youtubeId === "PLACEHOLDER";

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
          {label}
        </p>
      )}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1e2a38] bg-[#0b0f14] scanline-container">
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-cyan-400/40 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-cyan-400 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-mono text-sm text-slate-500">{title}</p>
            <p className="font-mono text-xs text-slate-700">
              [ YouTube embed placeholder ]
            </p>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
      <p className="text-slate-500 text-sm">{title}</p>
    </div>
  );
}
