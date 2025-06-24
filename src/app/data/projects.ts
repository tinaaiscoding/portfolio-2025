export type ProjectImageType = {
  src: string;
  width: string;
  alt: string;
};

export type ProjectType = {
  title: string;
  skills: string[];
  images: ProjectImageType[];
  slug: string;
  description: string;
  bgColor: string;
  textColor: string;
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    title: 'MNTN',
    skills: ['Web Development', 'Webflow'],
    images: [
      {
        src: '/images/mntn-1.png',
        width: '1440px',
        alt: 'MNTN website image 1',
      },
      {
        src: '/images/mntn-2.png',
        width: '500px',
        alt: 'MNTN website image 2',
      },
      {
        src: '/images/mntn-3.png',
        width: '700px',
        alt: 'MNTN website image 3',
      },
      {
        src: '/images/mntn-4.png',
        width: '1440px',
        alt: 'MNTN website image 4',
      },
      {
        src: '/images/mntn-5.png',
        width: '700px',
        alt: 'MNTN website image 5',
      },
    ],
    slug: 'mntn',
    description: ` A responsive landing page built in Webflow, leveraging the
                  Lumos framework for a flexible, modern design. Includes
                  customised components and tailored styling to enhance user
                  experience across all devices, with attention to clean
                  layouts and seamless functionality.`,
    bgColor: '#0b1d26',
    textColor: 'var(--color--light)',
    featured: true,
  },
  {
    title: 'Portfolio (2023)',
    skills: ['React', 'Web Development', 'Web Design'],
    images: [
      {
        src: '/images/portfolio-1.png',
        width: '1600px',
        alt: 'Portfolio image 1',
      },
      {
        src: '/images/portfolio-2.png',
        width: '1600px',
        alt: 'Portfolio image 2',
      },
      {
        src: '/images/portfolio-3.png',
        width: '1600px',
        alt: 'Portfolio image 3',
      },
      {
        src: '/images/portfolio-4.png',
        width: '1600px',
        alt: 'Portfolio image 4',
      },
    ],
    slug: 'portfolio23',
    description: ` A responsive landing page built in Webflow, leveraging the
                  Lumos framework for a flexible, modern design. Includes
                  customised components and tailored styling to enhance user
                  experience across all devices, with attention to clean
                  layouts and seamless functionality.`,
    bgColor: '#000000',
    textColor: 'var( --color--light)',
    featured: false,
  },
  {
    title: 'jetia',
    skills: ['React', 'Web Development'],
    images: [
      {
        src: '/images/jetia-1.png',
        width: '1440px',
        alt: 'jetia website image 1',
      },
      {
        src: '/images/jetia-2.png',
        width: '500px',
        alt: 'jetia website image 2',
      },
      {
        src: '/images/jetia-3.png',
        width: '1500px',
        alt: 'jetia website image 3',
      },
      {
        src: '/images/jetia-4.png',
        width: '500px',
        alt: 'jetia website image 4',
      },
      {
        src: '/images/jetia-5.png',
        width: '1200px',
        alt: 'jetia website image 5',
      },
    ],
    slug: 'jetia',
    description: ` A responsive landing page built in Webflow, leveraging the
                  Lumos framework for a flexible, modern design. Includes
                  customised components and tailored styling to enhance user
                  experience across all devices, with attention to clean
                  layouts and seamless functionality.`,
    bgColor: '#df7496',
    textColor: 'var( --color--dark)',
    featured: true,
  },
  {
    title: 'PokéBattles',
    skills: ['React', 'Web Development'],
    images: [
      {
        src: '/images/pokebattles-1.png',
        width: '1440px',
        alt: 'PokeBattles image 1',
      },
      {
        src: '/images/pokebattles-2.png',
        width: '500px',
        alt: 'PokeBattles image 2',
      },
      {
        src: '/images/pokebattles-3.png',
        width: '1440px',
        alt: 'PokeBattles image 3',
      },
      {
        src: '/images/pokebattles-4.png',
        width: '500px',
        alt: 'PokeBattles image 4',
      },
      {
        src: '/images/pokebattles-5.png',
        width: '1440px',
        alt: 'PokeBattles image 5',
      },
    ],
    slug: 'pokebattles',
    description: ` A responsive landing page built in Webflow, leveraging the
                  Lumos framework for a flexible, modern design. Includes
                  customised components and tailored styling to enhance user
                  experience across all devices, with attention to clean
                  layouts and seamless functionality.`,
    bgColor: '#ffe030',
    textColor: 'var( --color--dark)',
    featured: true,
  },
];
