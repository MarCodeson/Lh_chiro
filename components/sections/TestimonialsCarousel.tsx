'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Section } from '@/components/ui/Section'

const DEMO_SLIDES = [
  { img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80&auto=format&fit=crop', quote: '“Les was very professional and helped me understand my issue.”', author: 'J.M., Aberdeen' },
  { img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop', quote: '“Back to work without pain.”', author: 'S.R., Orkney' },
  { img: 'https://images.unsplash.com/photo-1520975922284-0f4a9f1a0d3b?w=800&q=80&auto=format&fit=crop', quote: '“Clear plan and great care.”', author: 'K.T., Barbados' },
]

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useMemo(() => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (paused || reduceMotion) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % DEMO_SLIDES.length), 5000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [paused, reduceMotion])

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + DEMO_SLIDES.length) % DEMO_SLIDES.length)

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
          <img src={DEMO_SLIDES[index].img} alt="Patient" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <blockquote className="text-lg">{DEMO_SLIDES[index].quote}</blockquote>
          <div className="mt-2 text-sm text-neutral-600">{DEMO_SLIDES[index].author}</div>
          <div className="mt-auto flex items-center gap-2 pt-6">
            <button aria-label="Previous" className="btn btn-ghost" onClick={() => go(-1)}>&larr;</button>
            <button aria-label="Next" className="btn btn-ghost" onClick={() => go(1)}>&rarr;</button>
            <button
              aria-label={paused ? 'Play' : 'Pause'}
              className="btn btn-ghost"
              onClick={() => setPaused((p) => !p)}
            >{paused ? 'Play' : 'Pause'}</button>
          </div>
        </div>
      </div>
      <p className="small mt-2">Demo content. We will transcribe real quotes from the current site for launch.</p>
    </Section>
  )
}
