'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

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
        className="mb-6 flex items-end justify-between"
      >
        <h2 className="text-2xl font-semibold">Services</h2>
        <a href="#contact" className="text-sm text-accent hover:underline">
          Request help
        </a>
      </motion.div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((s, index) => (
          <motion.article
            key={s.slug}
            className="card p-5"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: shouldReduceMotion ? 0 : index * 0.08 }}
          >
            <div className="mb-3 h-28 w-full overflow-hidden rounded-xl bg-neutral-100 md:h-36">
              {s.featured ? (
                <img
                  src={
                    s.slug === 'equine'
                      ? site.media.equine
                      : s.slug === 'neck-headache'
                        ? 'https://images.unsplash.com/photo-1599058937739-6d553ab1e0eb?q=80&w=1200&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1557825835-a5267448a9f8?q=80&w=1200&auto=format&fit=crop'
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-neutral-400">Icon</div>
              )}
            </div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{s.blurb}</p>
            <a href="#contact" className="mt-4 inline-block text-sm text-accent hover:underline">
              Request help
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
