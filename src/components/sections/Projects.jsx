import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { LuFolders, LuSearchX } from 'react-icons/lu';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../projects/ProjectCard';
import ProjectStack from '../projects/ProjectStack';
import { CATEGORIES, projects } from '../../data/projects';
import { useLanguage } from '../../hooks/useLanguage';
import { localizeProject } from '../../i18n/localize';
import { Flip, gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../../lib/gsap';

const Lightbox = lazy(() => import('../projects/Lightbox'));

const ALL = 'all';
const CARD_SELECTOR = '[data-project]';

const filters = [
  { id: ALL, icon: LuFolders, count: projects.length },
  ...Object.entries(CATEGORIES)
    .map(([id, { icon }]) => ({ id, icon, count: projects.filter((p) => p.category === id).length }))
    .filter((filter) => filter.count > 0),
];

const FilterButton = ({ filter, label, isActive, onSelect }) => (
  <button
    type="button"
    aria-pressed={isActive}
    onClick={() => onSelect(filter.id)}
    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:px-[18px] md:py-2.5 md:text-[0.95rem] ${
      isActive
        ? 'border-transparent bg-[linear-gradient(135deg,#3b82f6,#8b5cf6)] text-white shadow-[0_8px_20px_rgba(59,130,246,0.3)]'
        : 'border-blue-500/20 bg-white/90 text-slate-500 hover:border-blue-500/40 hover:text-blue-500 dark:border-blue-500/30 dark:bg-slate-800/90 dark:text-slate-400'
    }`}
  >
    <filter.icon aria-hidden="true" className="text-base" />
    {label}
    <span
      className={`min-w-[22px] rounded-full px-1.5 py-px text-center text-xs ${
        isActive ? 'bg-white/25' : 'bg-blue-500/12'
      }`}
    >
      {filter.count}
    </span>
  </button>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [viewer, setViewer] = useState(null);
  const listRef = useRef(null);
  const flipState = useRef(null);
  const { t } = useLanguage();

  const selectFilter = (id) => {
    if (id === activeFilter) return;
    const cards = listRef.current.querySelectorAll(CARD_SELECTOR);
    gsap.set(cards, { autoAlpha: 1, y: 0 });
    flipState.current = Flip.getState(cards);
    setActiveFilter(id);
  };

  useGSAP(
    () => {
      const state = flipState.current;
      if (!state) return;
      flipState.current = null;

      if (!window.matchMedia(MOTION_OK).matches) {
        ScrollTrigger.refresh();
        return;
      }

      Flip.from(state, {
        targets: listRef.current.querySelectorAll(CARD_SELECTOR),
        duration: 0.6,
        ease: 'power3.inOut',
        onEnter: (elements) =>
          gsap.fromTo(elements, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 }),
        onComplete: () => ScrollTrigger.refresh(),
      });
    },
    { dependencies: [activeFilter], scope: listRef }
  );

  const filteredProjects = useMemo(
    () =>
      projects
        .filter((project) => activeFilter === ALL || project.category === activeFilter)
        .map((project) => localizeProject(project, t)),
    [activeFilter, t]
  );

  const showStack = activeFilter === ALL;
  const featured = showStack ? filteredProjects.filter((project) => project.featured) : [];
  const regular = showStack ? filteredProjects.filter((project) => !project.featured) : filteredProjects;

  const renderCard = (project, index) => (
    <ProjectCard
      key={project.slug}
      project={project}
      reversed={index % 2 === 1}
      onOpenImage={(imageIndex, source) => setViewer({ project, index: imageIndex, source })}
    />
  );

  return (
    <section
      id="projects"
      className="relative overflow-clip bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)] py-16 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] md:py-24 dark:bg-[linear-gradient(135deg,#0f172a,#1e293b)]"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader index="03" label={t.nav.projects} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div
          role="group"
          aria-label={t.projects.filterLabel}
          className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-[18px] border border-white/40 bg-white/80 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md md:mb-14 md:gap-3 dark:border-slate-400/20 dark:bg-slate-800/80"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              filter={filter}
              label={t.projects.categories[filter.id]}
              isActive={activeFilter === filter.id}
              onSelect={selectFilter}
            />
          ))}
        </div>

        <div ref={listRef} className="flex flex-col gap-7 md:gap-10">
          {featured.length > 0 && <ProjectStack>{featured.map(renderCard)}</ProjectStack>}
          {regular.map((project, index) => renderCard(project, featured.length + index))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[20px] bg-white/80 px-8 py-16 text-center text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
            <LuSearchX className="mx-auto mb-4 text-5xl" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-semibold text-ink">{t.projects.emptyTitle}</h3>
            <p>{t.projects.emptyText}</p>
          </div>
        )}
      </div>

      {viewer && (
        <Suspense fallback={null}>
          <Lightbox
            title={viewer.project.title}
            images={viewer.project.images}
            startIndex={viewer.index}
            source={viewer.source}
            onClose={() => setViewer(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Projects;
