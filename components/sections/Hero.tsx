'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site.config'

const Dot = () => <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 32 },
    visible: { opacity: 1, y: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative">
      <div className="container grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-semibold md:text-5xl">{site.profile.title}</h1>
          <p className="text-neutral-700">{site.profile.summary}</p>
          <motion.a
            href="#contact"
            className="btn btn-primary inline-flex px-8 py-4 text-base md:text-lg"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          >
            Contact Dr Hall
          </motion.a>
          <p className="text-sm text-neutral-600">
            Clinical focus: spinal biomechanics, mobility coaching, nervous system balance.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            {site.profile.reputation.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Dot /> {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <img src={site.media.hero} alt="Dr Les Hall working with a patient" className="h-[360px] w-full object-cover md:h-[520px]" />
        </motion.div>
      </div>
    </div>
  )
}
