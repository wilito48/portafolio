import { useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi';
import IconButton from '../ui/IconButton';
import { PhoneFrame, ScreenFrame } from './DeviceFrame';
import ScrollTilt from './ScrollTilt';
import Shot from './Shot';
import { CATEGORIES } from '../../data/projects';
import { useTrackScroll } from '../../hooks/useTrackScroll';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const pad = (n) => String(n).padStart(2, '0');

const frameLabel = (project) => {
  if (project.demoLink) return new URL(project.demoLink).hostname;
  return project.category === 'desktop' ? project.title : `${project.slug}.app`;
};

const STAGE =
  'relative rounded-2xl bg-[radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.18),transparent_55%),#eef2ff] p-[clamp(1rem,4%,2rem)] dark:bg-[radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.2),transparent_55%),#0f172a]';

const ZoomButton = ({ image, onOpen, onPhone }) => (
  <button
    type="button"
    onClick={(event) => onOpen(image.index, event.currentTarget.parentElement.querySelector('img'))}
    aria-label={`Ampliar: ${image.alt}`}
    className="group/zoom absolute inset-0 cursor-zoom-in rounded-xl"
  >
    <span
      aria-hidden="true"
      className={`absolute grid size-[34px] scale-90 place-items-center rounded-full bg-blue-600/90 text-sm text-white opacity-0 transition-all duration-300 group-hover/zoom:scale-100 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100 ${
        onPhone ? 'bottom-[10%] left-1/2 -translate-x-1/2' : 'top-[42px] left-2.5'
      }`}
    >
      <FiMaximize2 />
    </span>
  </button>
);

const ArrowButtons = ({ onPrev, onNext, prevDisabled, nextDisabled }) => (
  <div className="ml-auto flex gap-2">
    <IconButton label="Anterior" onClick={onPrev} disabled={prevDisabled}>
      <FiArrowLeft />
    </IconButton>
    <IconButton label="Siguiente" onClick={onNext} disabled={nextDisabled}>
      <FiArrowRight />
    </IconButton>
  </div>
);

const Counter = ({ children }) => (
  <span className="shrink-0 text-sm font-semibold text-ink-muted tabular-nums" aria-live="polite">
    {children}
  </span>
);

const ScreenGallery = ({ project, screens, phone, onOpen }) => {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  const direction = useRef(0);
  const current = screens[active];
  const count = screens.length;

  const select = (index, step) => {
    direction.current = step;
    setActive(index);
  };
  const go = (step) => select((active + step + count) % count, step);

  useGSAP(
    () => {
      if (!direction.current) return;
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-gallery-shot]',
          { autoAlpha: 0, xPercent: 6 * direction.current },
          { autoAlpha: 1, xPercent: 0, duration: 0.5, ease: 'power3.out' }
        );
      });
    },
    { dependencies: [active], scope: stageRef }
  );

  return (
    <div className="flex flex-col gap-3">
      <div className={STAGE}>
        <ScrollTilt>
          <div ref={stageRef} className={`relative ${phone ? 'mr-[14%]' : ''}`}>
            <ScreenFrame label={frameLabel(project)}>
              <div key={current?.src} data-gallery-shot className="size-full">
                <Shot image={current} title={project.title} />
              </div>
            </ScreenFrame>
            {current && <ZoomButton image={current} onOpen={onOpen} />}
          </div>

          {phone && (
            <div className="absolute right-0 bottom-0 w-[21%] min-w-[70px]">
              <PhoneFrame>
                <Shot image={phone} title={project.title} />
              </PhoneFrame>
              <ZoomButton image={phone} onOpen={onOpen} onPhone />
            </div>
          )}
        </ScrollTilt>
      </div>

      {count > 1 && (
        <div className="flex min-h-10 items-center gap-3">
          <Counter>
            {pad(active + 1)} / {pad(count)}
          </Counter>
          <div
            className="scrollbar-none flex min-w-0 gap-2 overflow-x-auto p-[3px]"
            role="tablist"
            aria-label="Capturas"
          >
            {screens.map((image, i) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Ver captura ${i + 1}`}
                onClick={() => select(i, i > active ? 1 : -1)}
                className={`aspect-[16/10] w-16 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  i === active ? 'border-blue-500 opacity-100' : 'border-transparent opacity-55 hover:opacity-85'
                }`}
              >
                <img src={image.src} alt="" loading="lazy" className="size-full object-cover object-top" />
              </button>
            ))}
          </div>
          <ArrowButtons onPrev={() => go(-1)} onNext={() => go(1)} />
        </div>
      )}
    </div>
  );
};

const PhoneGallery = ({ project, phones, onOpen }) => {
  const { trackRef, canPrev, canNext, scrollByItem } = useTrackScroll();
  const items = phones.length ? phones : [null];

  return (
    <div className="flex flex-col gap-3">
      <div className={STAGE}>
        <ScrollTilt>
          <div
            ref={trackRef}
            className="-my-4 scrollbar-none flex snap-x snap-mandatory gap-[clamp(0.75rem,3%,1.25rem)] overflow-x-auto overscroll-x-contain py-4"
          >
            {items.map((image, i) => (
              <div
                key={image?.src ?? i}
                className="relative shrink-0 basis-[clamp(130px,30%,190px)] snap-center first:ml-auto last:mr-auto"
              >
                <PhoneFrame>
                  <Shot image={image} title={project.title} />
                </PhoneFrame>
                {image && <ZoomButton image={image} onOpen={onOpen} onPhone />}
              </div>
            ))}
          </div>
        </ScrollTilt>
      </div>

      {phones.length > 1 && (
        <div className="flex min-h-10 items-center gap-3">
          <Counter>{pad(phones.length)} pantallas</Counter>
          <ArrowButtons
            onPrev={() => scrollByItem(-1)}
            onNext={() => scrollByItem(1)}
            prevDisabled={!canPrev}
            nextDisabled={!canNext}
          />
        </div>
      )}
    </div>
  );
};

const ProjectMedia = ({ project, onOpen }) => {
  const indexed = project.images.map((image, index) => ({ ...image, index }));
  const screens = indexed.filter((image) => image.device === 'screen');
  const phones = indexed.filter((image) => image.device === 'phone');

  const showPhones =
    screens.length === 0 && (phones.length > 0 || CATEGORIES[project.category].defaultDevice === 'phone');

  return showPhones ? (
    <PhoneGallery project={project} phones={phones} onOpen={onOpen} />
  ) : (
    <ScreenGallery project={project} screens={screens} phone={phones[0]} onOpen={onOpen} />
  );
};

export default ProjectMedia;
