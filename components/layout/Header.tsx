'use client'
import Link from 'next/link'
import { site } from '@/content/site.config'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
          <span className="font-semibold">{site.brand.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm text-neutral-700 hover:text-neutral-900">Services</Link>
          <Link href="#about" className="text-sm text-neutral-700 hover:text-neutral-900">About</Link>
          <Link href="#testimonials" className="text-sm text-neutral-700 hover:text-neutral-900">Testimonials</Link>
          <Link href="#locations" className="text-sm text-neutral-700 hover:text-neutral-900">Locations</Link>
          <Link href="#contact" className="btn btn-primary text-sm">Request help</Link>
        </nav>
        <div className="flex flex-col text-right text-xs leading-tight md:text-sm">
          <a href={`tel:${site.contacts.phoneUK}`} className="hover:underline">UK {site.contacts.phoneUK}</a>
          <a href={`tel:${site.contacts.phoneBB}`} className="hover:underline">BB {site.contacts.phoneBB}</a>
        </div>
      </div>
    </header>
  )
}
