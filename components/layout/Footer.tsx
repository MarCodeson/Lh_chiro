import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site.config'

const QUICK_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50/40">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Image src="/images/logo.svg" alt={`${site.brand.name} logo`} width={56} height={56} className="h-12 w-auto" />
          <p className="small text-neutral-600">Evidence-based chiropractic care for humans and horses across Aberdeen, Orkney and Barbados.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>UK {site.contacts.phoneUK}</li>
            <li>BB {site.contacts.phoneBB}</li>
            <li>{site.contacts.email}</li>
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
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.brand.name}
      </div>
    </footer>
  )
}
