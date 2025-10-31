import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site.config'

const QUICK_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const

const SOCIAL_ICONS: Record<string, JSX.Element> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h3.96v12H3V9Zm6.74 0h3.79v1.64h.05c.53-.94 1.82-1.93 3.75-1.93 4.01 0 4.75 2.64 4.75 6.07V21H18.1v-5.37c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.82V21h-3.96V9Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm6.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M12.04 2a10 10 0 0 0-8.65 15l-1.28 4.68 4.8-1.26a10 10 0 1 0 5.13-18.42Zm-.04 18a8 8 0 0 1-4.08-1.12l-.29-.17-2.85.75.76-2.77-.18-.29a8 8 0 1 1 6.64 3.6Zm4.54-6.02c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.12-.17.25-.65.81-.8.98-.15.17-.3.18-.56.06a6.53 6.53 0 0 1-1.92-1.18 7.14 7.14 0 0 1-1.32-1.64c-.14-.25-.01-.38.1-.5.1-.1.25-.26.37-.4.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.41-.57-.42l-.49-.01c-.17 0-.44.06-.67.32-.23.25-.87.85-.87 2.07 0 1.21.89 2.39 1.02 2.56.13.17 1.76 2.7 4.27 3.78.6.26 1.07.42 1.44.54.6.19 1.15.16 1.59.1.49-.07 1.47-.6 1.68-1.17.21-.56.21-1.03.15-1.17-.06-.14-.23-.21-.48-.34Z" />
    </svg>
  ),
}

export function Footer() {
  const { logo } = site.testimonials
  const highlightedServices = site.services
  const socials = [
    ...site.socials,
    { platform: 'WhatsApp', label: 'WhatsApp', href: site.contacts.whatsappUrl },
  ]

  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50/40">
      <div className="container grid gap-8 py-12 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col gap-3">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-12 w-auto" />
          <p className="small text-neutral-600">
            {site.brand.name} — practising as {site.brand.practice}. Portfolio of chiropractic and wellbeing work across Scotland and Barbados.
          </p>
          <div className="flex items-center gap-3 text-neutral-600">
            {socials.map((social) => (
              <Link
                key={social.platform}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:border-accent hover:text-accent"
              >
                {SOCIAL_ICONS[social.platform]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>
              <a href={`tel:${site.contacts.phoneUK}`} className="hover:underline">
                UK {site.contacts.phoneUK}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contacts.phoneBB}`} className="hover:underline">
                Barbados {site.contacts.phoneBB}
              </a>
            </li>
            <li>
              <a href={site.contacts.whatsappUrl} className="hover:underline" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contacts.email}`} className="hover:underline">
                {site.contacts.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-neutral-900 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Locations</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {site.locations.map((loc) => (
              <li key={loc.key}>{loc.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {highlightedServices.map((service) => (
              <li key={service.slug}>
                <Link href="#services" className="transition hover:text-neutral-900 hover:underline">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.brand.name}
      </div>
    </footer>
  )
}
