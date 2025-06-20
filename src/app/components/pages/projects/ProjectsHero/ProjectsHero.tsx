'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';

import './ProjectsHero.css';

const PROJECTS = [
  {
    title: 'MNTN',
    skills: ['Web Development', 'Webflow'],
    image: '/images/mntn-1.png',
  },
  {
    title: 'Portfolio (2023)',
    skills: ['React', 'Web Development', 'Web Design'],
    image: '/images/portfolio-1.png',
  },
  {
    title: 'jetia',
    skills: ['React', 'Web Development'],
    image: '/images/jetia-1.png',
  },
  {
    title: 'PokéBattles',
    skills: ['React', 'Web Development'],
    image: '/images/pokemon-1.png',
  },
];

export default function ProjectsHero() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectsSection = projectsSectionRef.current;
    if (!projectsSection) return;

    const heading = projectsSection.querySelector('h2');
    if (!heading) return;

    const projectItems = projectsSection.querySelectorAll(
      '.projects_item_wrap',
    );
    if (!projectItems) return;

    const tl = gsap.timeline();

    // Heading & Project Item Intro Animation
    tl.set(projectsSection, { visibility: 'visible' });
    tl.fromTo(
      heading,
      { opacity: 0, y: '4rem' },
      { opacity: 1, y: '0em', duration: 0.4 },
    );
    tl.fromTo(
      projectItems,
      { opacity: 0, y: '4rem' },
      { opacity: 1, y: '0em', duration: 0.5, stagger: { each: 0.3 } },
    );

    // Project Item Hover Animation
    projectItems.forEach((item, i) => {
      const image = item.querySelector('.projects_item_image');
      if (!image) return;

      item.addEventListener('mouseenter', () => {
        gsap.to(image, { opacity: 1, duration: 0.6, ease: 'sine.out' });
        gsap.to(projectItems, {
          opacity: (el) => (el === i ? 1 : 0.3),
          duration: 0.6,
          ease: 'sine.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(image, { opacity: 0, duration: 0.6, ease: 'sine.out' });
        gsap.to(projectItems, { opacity: 1, duration: 0.6, ease: 'sine.out' });
      });
    });

    // Project Item Mouse Move Mouse Move Animation
    const handleMouseMove = (e: MouseEvent, item: Element) => {
      const image = item.querySelector('.projects_item_image');
      if (!image) return;

      const rect = item.getBoundingClientRect();

      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      gsap.set(image, { xPercent: -50, yPercent: -50 });
      gsap.to(image, {
        x: relX,
        y: relY,
        duration: 1,
        ease: 'power3.out',
      });
    };

    projectItems.forEach((item) => {
      item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
    });

    return () => {
      gsap.killTweensOf('*');
      projectItems.forEach((item) => {
        item.addEventListener('mousemove', (e) =>
          handleMouseMove(e as MouseEvent, item),
        );
      });
    };
  }, []);

  return (
    <section ref={projectsSectionRef} className='projects_hero_wrap'>
      <SectionSpacing />
      <div className='projects_contain u-container flex flex-col items-center justify-center'>
        <div className='projects_heading'>
          <h2 className='u-text-style-display-secondary'>projects</h2>
        </div>
        <div className='projects_list_wrap'>
          <ul className='projects_list'>
            {PROJECTS.map((project, i) => {
              return (
                <li key={i} className='projects_item_wrap'>
                  <Link href='/'>
                    <Image
                      className='projects_item_image'
                      src={project.image}
                      alt={project.title}
                      width={441}
                      height={248}
                    />
                    <div className='projects_item_content grid auto-cols-fr'>
                      <div className='projects_item_heading'>
                        <p className='u-text-style-h4'>{project.title}</p>
                      </div>
                      <div className='projects_item_skills'>
                        {project.skills.join(' / ')}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <SectionSpacing />
    </section>
  );
}
