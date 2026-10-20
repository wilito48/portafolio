import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa';
import Button from '../ui/Button';
import ProjectMedia from './ProjectMedia';
import { CATEGORIES } from '../../data/projects';

const VISIBLE_FEATURES = 4;

const Badge = ({ muted, children }) => (
  <span
    className={`rounded-full px-3 py-1 text-[0.8rem] font-semibold ${
      muted
        ? 'bg-slate-500/10 text-slate-500 dark:text-slate-400'
        : 'bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(139,92,246,0.12))] text-blue-500 dark:text-blue-300'
    }`}
  >
    {children}
  </span>
);

const FeatureList = ({ features }) => {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = features.length - VISIBLE_FEATURES;
  const visible = expanded ? features : features.slice(0, VISIBLE_FEATURES);

  return (
    <div className="mb-7 rounded-[15px] border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-400/20 dark:bg-slate-700/60">
      <h4 className="mb-3.5 font-bold text-ink">✨ Características principales</h4>
      <ul className="grid gap-2.5">
        {visible.map((feature) => (
          <li key={feature} className="flex items-baseline gap-2.5 text-[0.93rem] text-slate-500 dark:text-slate-300">
            <span className="shrink-0 font-bold text-emerald-500" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-3 cursor-pointer text-sm font-semibold text-blue-500 hover:underline"
        >
          {expanded ? 'Ver menos' : `Ver ${hiddenCount} más`}
        </button>
      )}
    </div>
  );
};

const ProjectCard = ({ project, reversed, onOpenImage }) => {
  const { title, description, technologies, features, demoLink, githubLink, category, icon, images } = project;

  return (
    <article
      data-reveal
      className="group relative grid gap-7 overflow-hidden rounded-[20px] border border-white/30 bg-white/95 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-500 after:absolute after:inset-x-0 after:top-0 after:h-1 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)] after:transition-transform after:duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,0.15)] hover:after:scale-x-100 sm:p-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-10 lg:p-6 dark:border-line dark:bg-surface-muted"
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <ProjectMedia project={project} onOpen={onOpenImage} />
      </div>

      <div className="flex min-w-0 flex-col px-1 pb-2 lg:self-stretch lg:py-2">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge>
            {CATEGORIES[category].icon} {CATEGORIES[category].label}
          </Badge>
          {images.length > 1 && <Badge muted>{images.length} capturas</Badge>}
        </div>

        <div className="mb-4 flex items-center gap-2.5">
          <span className="shrink-0 text-2xl" aria-hidden="true">
            {icon}
          </span>
          <h3 className="text-gradient text-xl leading-snug font-extrabold sm:text-2xl">{title}</h3>
        </div>

        <p className="mb-6 leading-[1.7] text-slate-500 dark:text-slate-400">{description}</p>

        <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tecnologías">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[0.82rem] font-semibold text-blue-500 dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-400"
            >
              {tech}
            </li>
          ))}
        </ul>

        <FeatureList features={features} />

        {(demoLink || githubLink) && (
          <div className="mt-auto flex flex-wrap gap-3">
            {demoLink && (
              <Button href={demoLink} className="min-w-[140px] flex-1 sm:flex-none">
                <FaRocket aria-hidden="true" />
                Ver Demo
                <FaExternalLinkAlt className="text-[0.7rem] opacity-80" aria-hidden="true" />
              </Button>
            )}
            {githubLink && (
              <Button href={githubLink} variant="secondary" className="min-w-[140px] flex-1 sm:flex-none">
                <FaGithub aria-hidden="true" />
                Código
                <FaExternalLinkAlt className="text-[0.7rem] opacity-80" aria-hidden="true" />
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
