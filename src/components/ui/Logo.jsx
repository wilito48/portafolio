const Logo = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`grid shrink-0 place-items-center rounded-[22%] bg-[linear-gradient(135deg,#3b82f6,#8b5cf6,#ec4899)] font-extrabold tracking-tight text-white shadow-[0_6px_16px_-6px_rgba(139,92,246,0.7)] ${className}`}
  >
    KR
  </span>
);

export default Logo;
