export function TrustStrip() {
  return (
    <div className="border-y border-neutral-200 bg-neutral-50/80 py-10">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="relative flex items-center gap-4">
          <span
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-bold text-white shadow-soft"
            title="27 years of professional chiropractic care"
          >
            27 years helping patients move better.
          </span>
          <span className="hidden h-12 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent md:inline" aria-hidden />
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600 md:justify-end">
          <span className="rounded-full border border-neutral-200 bg-white/90 px-4 py-2 shadow-soft">Structural, metabolic &amp; emotional focus</span>
          <span className="rounded-full border border-neutral-200 bg-white/90 px-4 py-2 shadow-soft">Serving Aberdeen · Orkney · Barbados</span>
        </div>
      </div>
    </div>
  )
}
