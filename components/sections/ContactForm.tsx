'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, type SVGProps } from 'react'
import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: site.socials[0]?.href ?? '#', icon: LinkedInIcon },
  { label: 'Instagram', href: site.socials[1]?.href ?? '#', icon: InstagramIcon },
  { label: 'WhatsApp', href: site.contacts.whatsappUrl, icon: WhatsAppIcon },
]

export function ContactForm() {
  const params = useMemo(() => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''), [])
  const initialLoc = (params.get('location') || 'aberdeen') as 'aberdeen' | 'orkney' | 'barbados'
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const q = hash.split('?')[1]
      if (q) {
        const qp = new URLSearchParams(q)
        const loc = qp.get('location') as string | null
        if (loc) {
          const select = formRef.current?.querySelector('select[name="location"]') as HTMLSelectElement | null
          if (select) select.value = loc
        }
      }
    }
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-semibold">Enquiries</h2>
        <p className="mt-1 text-neutral-700">Share your details to arrange a conversation about current availability.</p>
      </motion.div>
      <motion.form
        ref={formRef}
        onSubmit={onSubmit}
        className="card mx-auto max-w-2xl space-y-4 p-6"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required placeholder="+44 …" />
          </div>
          <div>
            <label htmlFor="location">Preferred clinic</label>
            <select id="location" name="location" defaultValue={initialLoc}>
              {site.locations.map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message">Summary</label>
          <textarea id="message" name="message" rows={4} placeholder="Outline your enquiry or area of focus" />
        </div>
        <div className="flex items-center gap-2">
          <input id="gdpr" name="gdpr" type="checkbox" required className="h-4 w-4" />
          <label htmlFor="gdpr" className="text-sm">I agree to be contacted regarding this enquiry.</label>
        </div>
        <button className="btn btn-primary" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent' : 'Send message'}
        </button>
        {status==='error' && <p className="small text-red-600">Something went wrong. Please try again later.</p>}
      </motion.form>
      <div className="mt-6 flex flex-col items-center gap-4 text-sm text-neutral-700">
        <p>Prefer another route? Connect via:</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 transition hover:border-accent hover:text-accent">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <p className="small text-neutral-500">UK {site.contacts.phoneUK} · Barbados {site.contacts.phoneBB} · {site.contacts.email}</p>
      </div>
    </Section>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h3.96v12H3V9Zm6.74 0h3.79v1.64h.05c.53-.94 1.82-1.93 3.75-1.93 4.01 0 4.75 2.64 4.75 6.07V21H18.1v-5.37c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.82V21h-3.96V9Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm6.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
    </svg>
  )
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2a10 10 0 0 0-8.65 15l-1.28 4.68 4.8-1.26a10 10 0 1 0 5.13-18.42Zm-.04 18a8 8 0 0 1-4.08-1.12l-.29-.17-2.85.75.76-2.77-.18-.29a8 8 0 1 1 6.64 3.6Zm4.54-6.02c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.12-.17.25-.65.81-.8.98-.15.17-.3.18-.56.06a6.53 6.53 0 0 1-1.92-1.18 7.14 7.14 0 0 1-1.32-1.64c-.14-.25-.01-.38.1-.5.1-.1.25-.26.37-.4.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.41-.57-.42l-.49-.01c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07 0 1.21.89 2.39 1.02 2.56.13.17 1.76 2.7 4.27 3.78.6.26 1.07.42 1.44.54.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.17.21-.56.21-1.03.15-1.17-.06-.14-.23-.21-.48-.34Z" />
    </svg>
  )
}
