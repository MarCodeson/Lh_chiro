import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { site } from '@/content/site.config'

export const metadata: Metadata = {
  title: site.profile.title,
  description:
    'Dr. Les Hall, longest-serving chiropractor in Aberdeen. 27 years of experience in chiropractic care and stress management.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
