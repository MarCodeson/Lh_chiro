'use client'

import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site.config'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#locations', label: 'Locations' },
] as const

export function Header() {
  const { logo } = site.testimonials

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.brand.name} home`}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden text-sm font-semibold text-neutral-900 sm:inline">{site.brand.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-neutral-700 transition hover:text-neutral-900">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary text-sm">
            Request help
          </Link>
        </nav>
        <div className="flex flex-col text-right text-xs leading-tight md:text-sm">
          <a href={`tel:${site.contacts.phoneUK}`} className="hover:underline">
            UK {site.contacts.phoneUK}
          </a>
          <a href={`tel:${site.contacts.phoneBB}`} className="hover:underline">
            BB {site.contacts.phoneBB}
          </a>
        </div>
      </div>
    </header>
  )
}
