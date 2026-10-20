import { techIcons } from '../../data/techIcons';

const TechIcon = ({ name, className = '' }) => {
  const tech = techIcons[name];
  if (!tech) return null;

  const { icon: Icon, color } = tech;
  return (
    <Icon
      aria-hidden="true"
      className={`shrink-0 ${color ? '' : 'text-ink'} ${className}`}
      style={color ? { color } : undefined}
    />
  );
};

export default TechIcon;
