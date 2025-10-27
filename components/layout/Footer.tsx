import { site } from '@/content/site.config'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="container grid gap-6 py-10 md:grid-cols-3">
        <div>
          <div className="mb-2 font-semibold">{site.brand.name}</div>
          <p className="small">GCC Registered No. 00616 · AECC University College Graduate · 27+ years</p>
        </div>
        <div>
          <div className="mb-2 font-semibold">Contact</div>
          <p className="small">UK {site.contacts.phoneUK}</p>
          <p className="small">BB {site.contacts.phoneBB}</p>
          <p className="small">{site.contacts.email}</p>
        </div>
        <div>
          <div className="mb-2 font-semibold">Links</div>
          <ul className="small space-y-1">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} {site.brand.name}</div>
    </footer>
  )
}
