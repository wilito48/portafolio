const SIZES = {
  sm: 'size-9 rounded-[10px] text-[1.05rem]',
  md: 'size-11 rounded-xl text-[1.3rem]',
  lg: 'size-14 rounded-2xl text-[1.6rem]',
};

const VARIANTS = {
  gradient:
    'bg-[linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)] text-white shadow-[0_8px_20px_-8px_rgba(139,92,246,0.7)]',
  soft: 'bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(139,92,246,0.14))] text-indigo-600 ring-1 ring-indigo-500/15 dark:text-indigo-300 dark:ring-indigo-400/20',
};

const IconTile = ({ icon: Icon, size = 'md', variant = 'gradient', className = '', children }) => (
  <span
    aria-hidden="true"
    className={`grid shrink-0 place-items-center font-bold ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
  >
    {Icon ? <Icon /> : children}
  </span>
);

export default IconTile;
