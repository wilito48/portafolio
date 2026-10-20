const SectionHeader = ({ index, label, title, subtitle }) => (
  <header data-reveal className="mb-12 flex flex-col items-center text-center md:mb-16">
    <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-ink-muted uppercase sm:text-sm">
      <span className="text-gradient-vivid font-extrabold">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-[linear-gradient(90deg,#3b82f6,#8b5cf6)]" />
      {label}
    </p>
    <h2 className="mb-4 text-[1.9rem] leading-tight font-extrabold tracking-tight text-ink sm:text-[2.25rem] lg:text-[2.75rem]">
      {title}
    </h2>
    <span
      aria-hidden="true"
      className="mb-5 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)]"
    />
    {subtitle && (
      <p className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted sm:text-base md:text-lg">
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionHeader;
