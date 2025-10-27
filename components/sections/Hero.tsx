import { site } from '@/content/site.config'

export function Hero() {
  return (
    <div className="relative">
      <div className="container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-3xl font-semibold md:text-5xl">Evidence‑based chiropractic in Aberdeen, Orkney & Barbados</h1>
          <p className="mt-4 text-neutral-700">Structural, metabolic and emotional care with active patient involvement.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-primary">Request help</a>
            <a href={`tel:${site.contacts.phoneUK}`} className="btn btn-ghost">Call UK</a>
            <a href={`tel:${site.contacts.phoneBB}`} className="btn btn-ghost">Call Barbados</a>
          </div>
          <p className="mt-4 text-sm text-neutral-600">Human & Equine Chiropractic · Applied Kinesiology · Neuro Emotional Technique (NET)</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            <span className="inline-flex items-center gap-2"><Dot /> GCC Registered No. 00616</span>
            <span className="inline-flex items-center gap-2"><Dot /> AECC University College Graduate</span>
            <span className="inline-flex items-center gap-2"><Dot /> 27+ years</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
          <img src={site.media.hero} alt="Chiropractic care in clinic" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

function Dot() { return <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} /> }
