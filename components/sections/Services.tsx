import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function Services() {
  const items = site.services
  return (
    <Section id="services">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Services</h2>
        <a href="#contact" className="text-sm text-accent hover:underline">Request help</a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((s) => (
          <article key={s.slug} className="card p-5">
            <div className="mb-3 h-28 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-36">
              {s.featured ? (
                <img src={s.slug === 'equine' ? site.media.equine : s.slug === 'neck-headache' ? 'https://images.unsplash.com/photo-1599058937739-6d553ab1e0eb?q=80&w=1200&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1557825835-a5267448a9f8?q=80&w=1200&auto=format&fit=crop'} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-neutral-400">Icon</div>
              )}
            </div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{s.blurb}</p>
            <a href="#contact" className="mt-4 inline-block text-sm text-accent hover:underline">Request help</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
