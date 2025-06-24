'use client';

import { useParams } from 'next/navigation';

import HorizontalImageScroll from '@/app/components/HorizontalImageScroll/HorizontalImageScroll';
import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';
import TextBubble from '@/app/components/TextBubble/TextBubble';
import { projects } from '@/app/data/projects';

import './ProjectHero.css';

export default function ProjectHero() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>404</p>;

  return (
    <section className='project_hero_wrap'>
      <HorizontalImageScroll images={[...project.images.slice(0, 2)]} />

      <section className='project_content_wrap'>
        <SectionSpacing />
        <div className='project_contain u-container'>
          <div className='project_content_layout'>
            <div className='project_content_contain u-container'>
              <div className='project_content_layout flex flex-row flex-wrap items-start justify-between'>
                <div className='project_header_wrap'>
                  <h2 className='project_title u-text-style-h1-primary'>
                    {project.title}
                  </h2>
                </div>
                <div className='project_text_wrap flex flex-col items-start justify-between'>
                  <p className='u-text-style-main'>{project.description}</p>
                  <div className='project_skills_list flex flex-row flex-wrap items-center justify-start'>
                    {project.skills.map((skill, i) => {
                      return <TextBubble key={i}>{skill}</TextBubble>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionSpacing />

        <HorizontalImageScroll images={[...project.images.slice(2)]} />
      </section>
    </section>
  );
}
