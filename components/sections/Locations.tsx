import Image from 'next/image'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const MAP_IMAGES: Record<string, string> = {
  aberdeen: '/images/maps/aberdeen.svg',
  orkney: '/images/maps/orkney.svg',
  barbados: '/images/maps/barbados.svg',
}

export function Locations() {
  return (
    <Section id="locations">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Locations</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {site.locations.map((loc) => (
          <article key={loc.key} className="card flex h-full flex-col overflow-hidden">
            <div className="relative h-48 w-full border-b border-neutral-200">
              <Image
                src={MAP_IMAGES[loc.key] ?? MAP_IMAGES.aberdeen}
                alt={`${loc.label} map`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-lg font-medium text-neutral-900">{loc.label}</h3>
              <p className="text-sm text-neutral-700">{loc.address}</p>
              <p className="small">Hours: {loc.hours}</p>
              <div className="mt-auto pt-4">
                <a href={`#contact?location=${loc.key}`} className="btn btn-primary w-full text-sm">
                  Select {loc.label}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
