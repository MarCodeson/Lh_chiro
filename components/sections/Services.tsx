'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const FEATURED_IMAGES: Record<string, string> = {
  'clinical-chiropractic': 'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=80',
  equine: site.media.equine,
  'stress-management': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
}

export function Services() {
  const shouldReduceMotion = useReducedMotion()
  const items = site.services

  return (
    <Section id="services">
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <h2 className="text-2xl font-semibold">Practice focus</h2>
          <p className="text-sm text-neutral-600">Evidence-led chiropractic with stress management and wellbeing support.</p>
        </div>
        <a href="#contact" className="text-sm text-accent hover:underline">
          Contact for enquiries
        </a>
      </motion.div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((s, index) => (
            <motion.article
              key={s.slug}
              className="card flex h-full flex-col p-5"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.08 }}
            >
              {s.featured && (
                <div className="mb-3 h-28 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-36">
                  <img src={FEATURED_IMAGES[s.slug] ?? FEATURED_IMAGES['clinical-chiropractic']} alt="" className="h-full w-full object-cover" />
                </div>
              )}
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{s.blurb}</p>
            </motion.article>
          ))}
        </div>
        <motion.aside
          className="card flex h-full flex-col justify-between gap-4 border-dashed border-accent/30 bg-white/80 p-6"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.12 }}
        >
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">{site.profile.wellbeing.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{site.profile.wellbeing.intro}</p>
          </div>
          <ul className="space-y-3 text-sm text-neutral-700">
            {site.profile.wellbeing.pointers.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </Section>
  )
}
