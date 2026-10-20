const IconButton = ({ label, className = '', children, ...props }) => (
  <button
    type="button"
    aria-label={label}
    className={`grid size-[38px] shrink-0 cursor-pointer place-items-center rounded-full border transition-all duration-300 disabled:cursor-default disabled:opacity-35 ${
      className ||
      'border-blue-500/30 bg-surface text-blue-500 hover:enabled:border-blue-500 hover:enabled:bg-blue-500 hover:enabled:text-white dark:bg-slate-800 dark:text-blue-300'
    }`}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
