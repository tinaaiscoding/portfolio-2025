export type ProjectImageType = {
  src: string;
  width: string;
  alt: string;
};

export type ProjectType = {
  title: string;
  slug: string;
  metaDescription: string;
  skills: string[];
  images: ProjectImageType[];
  description: string;
  bgColor: string;
  textColor: string;
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    title: 'MNTN',
    slug: 'mntn',
    metaDescription:
      'A responsive landing page built in Webflow with the Lumos framework, featuring custom components and clean, modern design.',
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
    description: `A responsive landing page built in Webflow, leveraging the Lumos framework for a flexible, modern design. Includes customised components and tailored styling to enhance user experience across all devices, with attention to clean layouts and seamless functionality.`,
    bgColor: '#0b1d26',
    textColor: 'var(--color--light)',
    featured: true,
  },
  {
    title: 'Portfolio (2023)',
    slug: 'portfolio23',
    metaDescription:
      'A MacOS-inspired React portfolio with draggable windows and interactive components. This project emphasises playful UI design and personal creativity.',
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

    description: `Created a MacOS-inspired portfolio using React, featuring draggable windows and clickable components for a playful desktop-like experience. Focused on interactivity and UI detail, this project showcased creativity and technical skill while highlighting a personal passion for immersive, engaging design.`,
    bgColor: '#000000',
    textColor: 'var( --color--light)',
    featured: false,
  },
  {
    title: 'jetia',
    slug: 'jetia',
    metaDescription:
      'jetia is a fictional agency website built in a 3-day hackathon using React, featuring a clean, responsive layout and collaborative UX/UI design.',

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
    description: `A responsive website for a fictional digital agency, created during a three-day hackathon. Built with React and designed in collaboration with UX/UI designers, the site showcases the agency’s services, portfolio, and team. Focused on clean design, usability, and mobile responsiveness to reflect a polished, professional brand presence.`,
    bgColor: '#df7496',
    textColor: 'var( --color--dark)',
    featured: true,
  },
  {
    title: 'PokéBattles',
    slug: 'pokebattles',
    metaDescription:
      'A browser game built with Node.js and Express where users catch, collect, and battle Pokémon in a playful, dynamic interface.',
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
    description: `A browser-based game inspired by Pokémon, built with Express and Node.js. Users can choose a starter Pokémon, view their collection, catch new ones, and battle wild Pokémon. The app features dynamic interactions and a playful interface designed to capture the feel of classic Pokémon gameplay.`,
    bgColor: '#ffe030',
    textColor: 'var( --color--dark)',
    featured: true,
  },
];
