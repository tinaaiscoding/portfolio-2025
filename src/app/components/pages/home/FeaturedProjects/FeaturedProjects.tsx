'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import FeaturedProject from './FeaturedProject';
import './FeaturedProjects.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const projectListRef = useRef<HTMLDivElement>(null);

  const PROJECTS = [
    {
      title: 'jetia',
      skills: ['React', 'Web Development'],
      img: '/images/jetia-1.png',
      bgColor: '#df7496',
      textColor: 'var( --color--dark)',
    },
    {
      title: 'PokéBattles',
      skills: ['React', 'Web Development'],
      img: '/images/pokemon-1.png',
      bgColor: '#ffe030',
      textColor: 'var( --color--dark)',
    },
    {
      title: 'MNTN',
      skills: ['Web Development', 'Webflow'],
      img: '/images/mntn-1.png',
      bgColor: '#0b1d26',
      textColor: 'var(--color--light)',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = projectListRef.current;
      if (!section) return;

      const projectItems = section.querySelectorAll('.featured_project_wrap');

      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
        },
      });

      projectItems.forEach((item, index) => {
        if (index > 0) {
          tl.from(item, { yPercent: 100 });
          tl.to({}, { duration: 0.5 }); // Spacer between animations
        }
      });
    }, projectListRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={projectListRef} className='featured_projects_wrap'>
      {PROJECTS.map((project, i) => {
        return (
          <section key={i} className='featured_projects_item_wrap'>
            <FeaturedProject project={project} />
          </section>
        );
      })}
    </section>
  );
}
