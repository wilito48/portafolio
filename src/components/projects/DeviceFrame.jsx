export const ScreenFrame = ({ label, children }) => (
  <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 shadow-[0_20px_40px_-12px_rgba(15,23,42,0.35)]">
    <div className="flex h-8 items-center gap-3 px-3" aria-hidden="true">
      <span className="flex shrink-0 gap-1.5">
        <i className="size-[9px] rounded-full bg-red-400" />
        <i className="size-[9px] rounded-full bg-amber-400" />
        <i className="size-[9px] rounded-full bg-emerald-400" />
      </span>
      <span className="mx-auto max-w-[300px] flex-1 truncate rounded-md bg-white/7 px-2.5 py-0.5 text-center text-[11px] text-slate-400">
        {label}
      </span>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">{children}</div>
  </div>
);

export const PhoneFrame = ({ children }) => (
  <div className="@container w-full">
    <div className="aspect-[9/19.5] rounded-[14cqi] border border-slate-700 bg-slate-800 p-[2.6cqi] shadow-[0_20px_40px_-12px_rgba(15,23,42,0.4)]">
      <div className="relative h-full overflow-hidden rounded-[11.5cqi] bg-slate-900">
        {children}
        <span
          className="pointer-events-none absolute top-[3.5cqi] left-1/2 h-[8cqi] w-[30%] -translate-x-1/2 rounded-full bg-black"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
);
