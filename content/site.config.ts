export const site = {
  brand: {
    name: 'LH Chiropractic',
    gold: '#C9A646',
  },
  contacts: {
    email: 'drleshall@aol.com',
    phoneUK: '+44 07715 168864',
    phoneBB: '+1 (246) 254-8864',
  },
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
        quote: '“Les quickly found the source of my lower-back pain and had me moving comfortably again.”',
        author: 'J.M., Aberdeen',
      },
      {
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
        alt: 'Patient smiling outdoors in a wool coat',
        quote: '“Professional, thorough and reassuring from start to finish.”',
        author: 'S.R., Orkney',
      },
      {
        img: 'https://images.unsplash.com/photo-1520975922284-0f4a9f1a0d3b?auto=format&fit=crop&w=1200&q=80',
        alt: 'Patient looking relaxed after an adjustment',
        quote: '“Clear plan and great advice that helped me stay active between visits.”',
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
    { slug: 'back-sciatica', title: 'Back pain & sciatica', blurb: 'Reduce pain and improve mobility.', featured: true },
    { slug: 'neck-headache', title: 'Neck & headaches', blurb: 'Conservative care for certain mechanical headaches.', featured: true },
    { slug: 'equine', title: 'Equine chiropractic', blurb: 'Support performance and comfort.', featured: true },
    { slug: 'human-chiro', title: 'Human chiropractic', blurb: 'Spinal and extremity care tailored to you.' },
    { slug: 'ak', title: 'Applied Kinesiology (AK)', blurb: 'Functional testing to inform care.' },
    { slug: 'net', title: 'Neuro Emotional Technique (NET)', blurb: 'Mind–body technique used by trained practitioners.' },
  ],
  badges: [
    { name: 'GCC Registered No. 00616' },
    { name: 'AECC University College Graduate' },
  ],
} as const
