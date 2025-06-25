'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';
import { projects } from '@/app/data/projects';
import {
  introAnimation,
  projectItemHover,
  projectItemMouseMove,
} from '@/app/utils/animation/projects';

import './ProjectsHero.css';

export default function ProjectsHero() {
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = projectsSectionRef.current;
    if (!section) return;

    introAnimation(section);
    projectItemHover(section);
    projectItemMouseMove(section);

    return () => {
      introAnimation(section)?.kill();
      projectItemHover(section)?.();
      projectItemMouseMove(section)?.();
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
            {projects.map((project, i) => {
              return (
                <li key={i} className='projects_item_wrap'>
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      className='projects_item_image'
                      src={project.images[0].src}
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
