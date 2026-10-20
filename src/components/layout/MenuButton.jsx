const BAR = 'absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300';

const MenuButton = ({ isOpen, onToggle, labels }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={isOpen ? labels.close : labels.open}
    aria-expanded={isOpen}
    className={`cursor-pointer rounded-lg p-2.5 transition hover:bg-blue-600/10 hover:text-primary lg:hidden ${
      isOpen ? 'text-primary' : 'text-ink'
    }`}
  >
    <span className="relative block size-5" aria-hidden="true">
      <span className={`${BAR} ${isOpen ? 'top-[9px] rotate-45' : 'top-[3px]'}`} />
      <span className={`${BAR} top-[9px] ${isOpen ? 'scale-x-0 opacity-0' : ''}`} />
      <span className={`${BAR} ${isOpen ? 'top-[9px] -rotate-45' : 'top-[15px]'}`} />
    </span>
  </button>
);

export default MenuButton;
