interface SectionLabelProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionLabel({ tag, title, subtitle }: SectionLabelProps) {
  return (
    <div className="section-reveal mb-16 text-center">
      <span className="tech-badge mb-4 inline-block">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"></span>
        {tag}
      </span>
      <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
