import { useState } from 'react';

const Shot = ({ image, title }) => {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="flex size-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.25),transparent_60%),#0f172a] p-4 text-center text-sm text-slate-400">
        <span className="text-lg font-bold text-slate-200">{title}</span>
        <span>Capturas próximamente</span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="block size-full object-cover object-top"
    />
  );
};

export default Shot;
