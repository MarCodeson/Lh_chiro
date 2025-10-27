import Image from 'next/image'

const TRUST_ITEMS = [
  {
    type: 'logo' as const,
    src: '/images/badges/gcc.svg',
    alt: 'General Chiropractic Council logo',
  },
  {
    type: 'logo' as const,
    src: '/images/badges/aecc.svg',
    alt: 'AECC University College logo',
  },
  {
    type: 'pill' as const,
    label: '27+ years',
  },
]

export function TrustStrip() {
  return (
    <div className="border-y border-neutral-200 bg-neutral-50/60 py-4">
      <div className="container flex flex-wrap items-center justify-center gap-4 text-xs md:gap-8 md:text-sm">
        {TRUST_ITEMS.map((item) =>
          item.type === 'logo' ? (
            <div key={item.src} className="flex items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ) : (
            <span
              key={item.label}
              className="rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent md:text-sm"
            >
              {item.label}
            </span>
          )
        )}
      </div>
    </div>
  )
}
