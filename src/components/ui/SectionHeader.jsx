const TITLE_STYLES = {
  plain: 'text-ink font-bold',
  gradient: 'text-gradient font-bold',
  vivid: 'text-gradient-vivid font-extrabold',
};

const SectionHeader = ({ title, subtitle, icon: Icon, variant = 'plain' }) => (
  <header data-reveal className="mb-12 text-center md:mb-16">
    <h2
      className={`mb-4 flex flex-col items-center justify-center gap-2 text-[1.75rem] sm:flex-row sm:gap-3 sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] ${TITLE_STYLES[variant]}`}
    >
      {Icon && <Icon className="text-[2rem] text-blue-500 lg:text-[2.5rem]" aria-hidden="true" />}
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted sm:text-base md:text-lg">
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionHeader;
