'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Section } from '@/components/ui/Section'
import { slides } from '@/content/testimonials'

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (paused || reduceMotion) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [paused, reduceMotion])

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + slides.length) % slides.length)

  const current = slides[index]

  return (
    <Section id="testimonials">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="small">Auto-advances every 5s. Pauses on hover or focus.</p>
      </div>
      <div
        className="card grid gap-6 p-5 md:grid-cols-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-xl">
          <Image src={current.img} alt={current.alt} width={800} height={800} className="h-full w-full object-cover" priority={index === 0} />
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
      </div>
      <p className="small mt-2">Testimonials sourced from the previous website. Replace with final approved content before launch.</p>
    </Section>
  )
}
