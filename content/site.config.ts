export const site = {
  brand: {
    name: 'Dr Les Hall',
    practice: 'LH Chiropractic',
    gold: '#C9A646',
  },
  profile: {
    title: 'Dr Les Hall | Chiropractor & Stress Management, Aberdeen',
    summary:
      'Longest-serving chiropractor in Aberdeen with 27 years of evidence-led care supporting patients across Aberdeen, Orkney and Barbados.',
    reputation: [
      '27 years in practice',
      'Longest-serving chiropractor in Aberdeen',
      '90% of new patients arrive via personal recommendations',
    ],
    wellbeing: {
      title: 'Wellbeing & Stress Management',
      intro:
        'Stress management and wellbeing support informed by regular teaching and community workshops.',
      pointers: [
        'Breathwork sequences to reset the nervous system.',
        'Micro-mobility routines for sustained posture and desk work.',
        'Stress mapping, recovery check-ins, and balance strategies for riders and athletes.',
      ],
    },
  },
  contacts: {
    email: 'drleshall@aol.com',
    phoneUK: '+44 07715 168864',
    phoneBB: '+1 (246) 254-8864',
    whatsappUrl: 'https://wa.me/447715168864',
  },
  socials: [
    { platform: 'LinkedIn', label: 'LinkedIn', href: 'https://www.linkedin.com/in/leshalldc' },
    { platform: 'Instagram', label: 'Instagram', href: 'https://www.instagram.com/lhchiropractic' },
  ],
  media: {
    hero: 'https://new.express.adobe.com/webpage/bqeX7Q23jt49u/resources/8fad8c4e-5f51-4ee3-8321-a3ef05b6687f?asset_id=8fad8c4e-5f51-4ee3-8321-a3ef05b6687f&size=2560',
    aboutPortrait: 'https://new.express.adobe.com/webpage/bqeX7Q23jt49u/resources/be4111f2-6623-43c2-8588-a65e4d6c7367?asset_id=be4111f2-6623-43c2-8588-a65e4d6c7367&size=1024',
    equine: 'https://new.express.adobe.com/webpage/bqeX7Q23jt49u/resources/f1863241-0419-49df-9bcd-1d6762ca6de7?asset_id=f1863241-0419-49df-9bcd-1d6762ca6de7&size=1024',
    vimeoId: '598294286',
  },
  testimonials: {
    logo: {
      src: '/images/logo.svg',
      alt: 'LH Chiropractic logo',
      width: 72,
      height: 72,
    },
    slides: [
      {
        img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Smiling patient in a bright clinic hallway',
        quote:
          '“Les quickly identified the source of my lower-back pain and set out a programme that kept me confident between visits.”',
        author: 'J.M., Aberdeen',
      },
      {
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
        alt: 'Patient smiling outdoors in a wool coat',
        quote: '“His calm, methodical approach has helped me stay mobile for the work I love.”',
        author: 'S.R., Orkney',
      },
      {
        img: 'https://images.unsplash.com/photo-1520975922284-0f4a9f1a0d3b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Patient looking relaxed after an adjustment',
        quote: '“Clear guidance and supportive follow-up every step of the way.”',
        author: 'K.T., Barbados',
      },
    ],
  },
  locations: [
    { key: 'aberdeen', label: 'Aberdeen', address: 'LH Chiropractic, 2 Oldfold Drive, Milltimber, AB13 0JZ', hours: 'Mon–Fri 9–5' },
    { key: 'orkney', label: 'Orkney', address: '[Address pending]', hours: '[Hours pending]' },
    { key: 'barbados', label: 'Barbados', address: '[Address pending]', hours: '[Hours pending]' },
  ],
  services: [
    {
      slug: 'clinical-chiropractic',
      title: 'Clinical chiropractic practice',
      blurb: 'Detailed assessment of spinal mechanics, disc health, and movement patterns for complex presentations.',
      featured: true,
    },
    {
      slug: 'equine',
      title: 'Equine chiropractic & rider balance',
      blurb: 'Support for horses and riders with integrated biomechanical reviews on yard or in clinic.',
      featured: true,
    },
    {
      slug: 'stress-management',
      title: 'Stress management and wellbeing',
      blurb: 'Integrating breathwork, mobility resets, and nutrition conversations for sustainable recovery.',
      featured: true,
    },
    {
      slug: 'applied-kinesiology',
      title: 'Applied Kinesiology',
      blurb: 'Functional muscle testing and clinical reasoning to tailor care to the individual.',
    },
    {
      slug: 'net',
      title: 'Neuro Emotional Technique (NET)',
      blurb: 'Mind-body technique for addressing stress patterns linked to physical presentations.',
    },
  ],
} as const
