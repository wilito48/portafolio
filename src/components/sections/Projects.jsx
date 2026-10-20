import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { FaCode, FaFilter } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../projects/ProjectCard';
import { CATEGORIES, projects } from '../../data/projects';
import { Flip, gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../../lib/gsap';

const Lightbox = lazy(() => import('../projects/Lightbox'));

const ALL = 'todos';

const filters = [
  { id: ALL, label: 'Todos', icon: '📁', count: projects.length },
  ...Object.entries(CATEGORIES)
    .map(([id, { label, icon }]) => ({ id, label, icon, count: projects.filter((p) => p.category === id).length }))
    .filter((filter) => filter.count > 0),
];

const FilterButton = ({ filter, isActive, onSelect }) => (
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
    <span aria-hidden="true">{filter.icon}</span>
    {filter.label}
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

  const selectFilter = (id) => {
    if (id === activeFilter) return;
    gsap.set(listRef.current.children, { autoAlpha: 1, y: 0 });
    flipState.current = Flip.getState(listRef.current.children);
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
        targets: listRef.current.children,
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
    () => (activeFilter === ALL ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)] py-16 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] md:py-24 dark:bg-[linear-gradient(135deg,#0f172a,#1e293b)]"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <SectionHeader
          icon={FaCode}
          variant="vivid"
          title="Mis Proyectos"
          subtitle="Una muestra de mi trabajo en desarrollo web y móvil. Toca cualquier captura para verla en pantalla completa."
        />

        <div
          role="group"
          aria-label="Filtrar proyectos por categoría"
          className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-[18px] border border-white/40 bg-white/80 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md md:mb-14 md:gap-3 dark:border-slate-400/20 dark:bg-slate-800/80"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              filter={filter}
              isActive={activeFilter === filter.id}
              onSelect={selectFilter}
            />
          ))}
        </div>

        <div ref={listRef} className="grid gap-7 md:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={index % 2 === 1}
              onOpenImage={(imageIndex, source) => setViewer({ project, index: imageIndex, source })}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-[20px] bg-white/80 px-8 py-16 text-center text-slate-500 dark:bg-slate-800/80 dark:text-slate-400">
            <FaFilter className="mx-auto mb-4 text-5xl" aria-hidden="true" />
            <h3 className="mb-2 text-xl font-semibold text-ink">No hay proyectos en esta categoría</h3>
            <p>Intenta seleccionar otra categoría o revisa todos los proyectos.</p>
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
