import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function Locations() {
  return (
    <Section id="locations">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Locations</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {site.locations.map((loc) => (
          <article key={loc.key} className="card p-5">
            <h3 className="text-lg font-medium">{loc.label}</h3>
            <p className="mt-1 text-sm text-neutral-700">{loc.address}</p>
            <p className="small mt-1">Hours: {loc.hours}</p>
            <a href={`#contact?location=${loc.key}`} className="mt-4 inline-block text-sm text-accent hover:underline">Select {loc.label}</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
