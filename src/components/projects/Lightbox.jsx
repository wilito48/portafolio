import { useLayoutEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiX } from 'react-icons/fi';
import IconButton from '../ui/IconButton';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const SWIPE_THRESHOLD = 50;
const TRANSPARENT = 'rgba(15, 23, 42, 0)';
const DARK_BUTTON =
  'border-white/20 bg-slate-800/80 text-slate-100 hover:enabled:border-blue-500 hover:enabled:bg-blue-500';

const canAnimate = () => window.matchMedia(MOTION_OK).matches;

const offsetFrom = (source, target) => {
  const from = source.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (!from.width || !to.width) return null;
  return {
    x: from.left + from.width / 2 - (to.left + to.width / 2),
    y: from.top + from.height / 2 - (to.top + to.height / 2),
    scale: from.width / to.width,
  };
};

const whenLoaded = (image, callback) => {
  if (image.complete && image.naturalWidth) callback();
  else image.addEventListener('load', callback, { once: true });
};

const Lightbox = ({ title, images, startIndex, source, onClose }) => {
  const dialogRef = useRef(null);
  const pointerStart = useRef(null);
  const isClosing = useRef(false);
  const shownIndex = useRef(startIndex);
  const [index, setIndex] = useState(startIndex);
  const count = images.length;
  const image = images[index];

  const go = (step) => setIndex((i) => (i + step + count) % count);
  const getImage = () => dialogRef.current?.querySelector('[data-lightbox-image]');

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
  }, []);

  useGSAP(
    () => {
      if (!canAnimate()) return;
      const dialog = dialogRef.current;
      const target = getImage();

      gsap.from(dialog, { backgroundColor: TRANSPARENT, duration: 0.35 });
      gsap.from('[data-lightbox-chrome]', { autoAlpha: 0, duration: 0.35, delay: 0.15 });

      whenLoaded(target, () => {
        const offset = source && offsetFrom(source, target);
        if (offset) {
          gsap.from(target, { ...offset, duration: 0.55, ease: 'power3.out' });
        } else {
          gsap.from(target, { autoAlpha: 0, scale: 0.95, duration: 0.35 });
        }
      });
    },
    { scope: dialogRef }
  );

  useGSAP(
    () => {
      if (shownIndex.current === index) return;
      shownIndex.current = index;
      if (!canAnimate()) return;
      gsap.fromTo(getImage(), { autoAlpha: 0, scale: 0.97 }, { autoAlpha: 1, scale: 1, duration: 0.3 });
    },
    { dependencies: [index], scope: dialogRef }
  );

  const requestClose = () => {
    if (isClosing.current) return;
    isClosing.current = true;
    if (!canAnimate()) {
      onClose();
      return;
    }

    const target = getImage();
    const offset = index === startIndex && source?.isConnected && offsetFrom(source, target);
    gsap
      .timeline({ onComplete: onClose })
      .to('[data-lightbox-chrome]', { autoAlpha: 0, duration: 0.2 }, 0)
      .to(dialogRef.current, { backgroundColor: TRANSPARENT, duration: 0.4 }, 0)
      .to(
        target,
        offset ? { ...offset, duration: 0.45, ease: 'power3.inOut' } : { autoAlpha: 0, scale: 0.95, duration: 0.3 },
        0
      );
  };

  const handleKeyDown = (event) => {
    if (count < 2) return;
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null || count < 2) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Capturas de ${title}`}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none overflow-hidden border-0 bg-slate-900/95 p-4 text-slate-100 backdrop:bg-transparent open:grid open:grid-cols-[minmax(0,1fr)] open:grid-rows-[auto_minmax(0,1fr)_auto] open:gap-4 md:px-10"
    >
      <header data-lightbox-chrome className="flex items-center justify-between gap-4">
        <p className="flex min-w-0 items-baseline gap-3 font-semibold">
          <span className="truncate">{title}</span>
          <span className="shrink-0 text-sm text-slate-400 tabular-nums">
            {index + 1} / {count}
          </span>
        </p>
        <IconButton label="Cerrar visor" onClick={requestClose} className={DARK_BUTTON}>
          <FiX />
        </IconButton>
      </header>

      <div
        onClick={(event) => event.target === event.currentTarget && requestClose()}
        onPointerDown={(event) => (pointerStart.current = event.clientX)}
        onPointerUp={handlePointerUp}
        className="relative flex min-h-0 touch-pan-y items-center justify-center select-none max-sm:pb-[60px]"
      >
        <img
          key={image.src}
          data-lightbox-image
          src={image.src}
          alt={image.alt}
          draggable="false"
          className={`relative z-10 max-h-full max-w-full object-contain ${
            image.device === 'phone' ? 'rounded-[clamp(16px,3vh,32px)] border-[6px] border-slate-800' : 'rounded-xl'
          }`}
        />

        {count > 1 && (
          <div data-lightbox-chrome>
            <IconButton
              label="Captura anterior"
              onClick={() => go(-1)}
              className={`absolute bottom-0 left-0 z-20 size-12 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 ${DARK_BUTTON}`}
            >
              <FiArrowLeft />
            </IconButton>
            <IconButton
              label="Captura siguiente"
              onClick={() => go(1)}
              className={`absolute right-0 bottom-0 z-20 size-12 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 ${DARK_BUTTON}`}
            >
              <FiArrowRight />
            </IconButton>
          </div>
        )}
      </div>

      <footer data-lightbox-chrome className="flex flex-col items-center gap-3">
        <p className="text-center text-sm text-slate-300">{image.alt}</p>
        {count > 1 && (
          <div className="scrollbar-none flex max-w-full gap-2 overflow-x-auto p-0.5">
            {images.map((thumb, i) => (
              <button
                key={thumb.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir a captura ${i + 1}`}
                aria-current={i === index}
                className={`h-[52px] shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-[border-color,opacity] duration-300 ${
                  thumb.device === 'phone' ? 'aspect-[9/19.5]' : 'aspect-[16/10]'
                } ${i === index ? 'border-blue-500 opacity-100' : 'border-white/15 opacity-50 hover:opacity-80'}`}
              >
                <img src={thumb.src} alt="" loading="lazy" className="size-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </footer>
    </dialog>
  );
};

export default Lightbox;
