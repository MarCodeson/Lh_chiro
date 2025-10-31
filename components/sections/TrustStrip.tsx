export function TrustStrip() {
  return (
    <div className="border-y border-neutral-200 bg-neutral-50/80 py-12">
      <div className="container flex flex-col items-center gap-6 text-center">
        <span
          className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-base font-bold text-white shadow-soft"
          title="27 years of professional chiropractic care"
        >
          27 years of dedicated chiropractic practice
        </span>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
          <span className="rounded-full border border-neutral-200 bg-white/90 px-4 py-2 shadow-soft">
            Longest-serving chiropractor in Aberdeen
          </span>
          <span className="rounded-full border border-neutral-200 bg-white/90 px-4 py-2 shadow-soft">
            90% of patients arrive via recommendation
          </span>
          <span className="rounded-full border border-neutral-200 bg-white/90 px-4 py-2 shadow-soft">
            Stress management and wellbeing specialist
          </span>
        </div>
      </div>
    </div>
  )
}
