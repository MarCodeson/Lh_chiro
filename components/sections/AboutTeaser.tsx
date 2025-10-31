'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function AboutTeaser() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="about">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-semibold">Professional profile</h2>
          <p className="text-neutral-700">
            Dr Les Hall BSc (Hons), MSc, DC — human and equine chiropractor, Applied Kinesiologist, Neuro Emotional Technique practitioner.
            Registered with the UK General Chiropractic Council (No. 00616) and in Barbados.
          </p>
          <p className="text-neutral-700">
            Over 27 years of continuous practice with a case portfolio ranging from complex spinal presentations to rider performance reviews.
            90% of new patients come from direct recommendation, reflecting longstanding collaborative relationships with medical and coaching colleagues.
          </p>
          <div className="grid gap-2 text-sm text-neutral-600 sm:grid-cols-2">
            {site.profile.reputation.map((item) => (
              <span key={item} className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2">
                {item}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-neutral-900">Focus areas</h3>
            <p className="text-sm text-neutral-700">
              Musculoskeletal care blended with stress management, nutrition conversations, and mobility coaching to support sustainable wellbeing.
            </p>
          </div>
          <div className="pt-2">
            <a href="#contact" className="btn btn-primary">
              Contact Dr Hall
            </a>
          </div>
          <div className="space-y-3 pt-6">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-200 shadow-soft">
              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${site.media.vimeoId}?title=0&byline=0&portrait=0`}
                title="Practice overview"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          <img src={site.media.aboutPortrait} alt="Dr Les Hall portrait" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </Section>
  )
}
