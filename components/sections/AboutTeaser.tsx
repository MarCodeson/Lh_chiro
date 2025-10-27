import { site } from '@/content/site.config'
import { Section } from '@/components/ui/Section'

export function AboutTeaser() {
  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Meet Dr Les Hall</h2>
          <p className="mt-3 text-neutral-700">Dr Les Hall BSc (Hons), MSc, DC — Human & Equine Chiropractor, Applied Kinesiologist and Neuro Emotional Technique Practitioner. AECC University College graduate. UK General Chiropractic Council Registered No. 00616. Barbados Registered.</p>
          <p className="mt-3 text-neutral-700">For over 27 years, Dr Hall has provided holistic, conservative healthcare, covering the triad of health — structural, metabolic and emotional — while encouraging active patient involvement for optimal health and wellbeing.</p>
          <div className="mt-4">
            <a href="#contact" className="btn btn-primary">Request help</a>
          </div>
          <div className="mt-6">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-200 shadow-soft">
              <iframe
                className="h-full w-full"
                src={`https://player.vimeo.com/video/${site.media.vimeoId}?title=0&byline=0&portrait=0`}
                title="Practice ethos video"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-soft">
          <img src={site.media.aboutPortrait} alt="Dr Les Hall portrait" className="h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  )
}
