const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-[0.9rem] font-semibold leading-normal transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet-500 md:px-[1.6rem] md:py-[0.8rem] md:text-base';

const VARIANTS = {
  primary:
    'border-transparent bg-[linear-gradient(135deg,#3b82f6_0%,#6366f1_50%,#8b5cf6_100%)] bg-size-[200%_100%] bg-left text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.6)] hover:bg-right hover:shadow-[0_14px_28px_-10px_rgba(99,102,241,0.75)]',
  secondary:
    'border-indigo-500/30 bg-indigo-500/8 text-indigo-600 hover:border-indigo-500/55 hover:bg-indigo-500/14 hover:text-indigo-700 hover:shadow-[0_10px_22px_-12px_rgba(99,102,241,0.55)] dark:border-slate-400/30 dark:bg-slate-400/8 dark:text-slate-200 dark:hover:border-indigo-400/70 dark:hover:bg-indigo-500/16 dark:hover:text-white',
};

const Button = ({ href, variant = 'primary', className = '', children, ...props }) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const isExternal = href?.startsWith('http');

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={`${classes} cursor-pointer`} {...props}>
      {children}
    </button>
  );
};

export default Button;
