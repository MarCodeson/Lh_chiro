'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { site } from '@/content/site.config'

const slides = site.testimonials.slides

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const timer = useRef<NodeJS.Timeout | null>(null)

  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '100%' : '-100%',
      opacity: shouldReduceMotion ? 1 : 0,
    }),
    center: { x: '0%', opacity: 1 },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? '-100%' : '100%',
      opacity: shouldReduceMotion ? 1 : 0,
    }),
  }

  useEffect(() => {
    if (paused || shouldReduceMotion) return
    timer.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, shouldReduceMotion])

  const go = (dir: -1 | 1) => {
    setDirection(dir)
    setIndex((i) => (i + dir + slides.length) % slides.length)
  }

  const current = slides[index]

  return (
    <Section id="testimonials">
      <motion.div
        className="mb-6 flex items-end justify-between"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="small">Auto-advances every 5s. Pauses on hover or focus.</p>
      </motion.div>
      <div
        className="card overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              className="grid gap-6 p-5 md:grid-cols-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeInOut' }}
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={current.img}
                  alt={current.alt}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-col">
                <blockquote className="text-lg">{current.quote}</blockquote>
                <div className="mt-2 text-sm text-neutral-600">{current.author}</div>
                <div className="mt-auto flex items-center gap-2 pt-6">
                  <button aria-label="Previous" className="btn btn-ghost" onClick={() => go(-1)}>
                    &larr;
                  </button>
                  <button aria-label="Next" className="btn btn-ghost" onClick={() => go(1)}>
                    &rarr;
                  </button>
                  <button
                    aria-label={paused ? 'Play testimonials' : 'Pause testimonials'}
                    className="btn btn-ghost"
                    onClick={() => setPaused((p) => !p)}
                  >
                    {paused ? 'Play' : 'Pause'}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-2 pb-4">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              onClick={() => {
                if (dotIndex === index) return
                setDirection(dotIndex > index ? 1 : -1)
                setIndex(dotIndex)
              }}
              className={`h-2.5 w-2.5 rounded-full transition ${
                dotIndex === index ? 'bg-accent' : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="small mt-2">Testimonials sourced from the previous website. Replace with final approved content before launch.</p>
    </Section>
  )
}
