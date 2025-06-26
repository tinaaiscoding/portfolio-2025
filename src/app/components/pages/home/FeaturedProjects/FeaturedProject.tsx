import Image from 'next/image';

import { ProjectType } from '@/app/data/projects';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import TextBubble from '../../../TextBubble/TextBubble';
import './FeaturedProject.css';

type Props = {
  project: ProjectType;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div
      className='featured_project_wrap'
      style={{ backgroundColor: project.bgColor, color: project.textColor }}
    >
      <div className='featured_project_contain flex flex-col items-center justify-center'>
        <SectionSpacing variant='small' />

        <div className='featured_project_layout u-container flex flex-col items-start justify-between'>
          <h2 className='featured_project_heading u-text-style-h2'>
            {project.title}
          </h2>
          <div className='featured_project_skills_list flex flex-row'>
            {project.skills.map((skill, i) => {
              return <TextBubble key={i}>{skill}</TextBubble>;
            })}
          </div>
          <div className='featured_project_image_wrap flex flex-col items-center justify-center'>
            <div className='featured_project_image'>
              <Image
                src={project.images[0].src}
                alt={project.title}
                fill
                sizes='75vw'
              />
            </div>
          </div>
        </div>

        <SectionSpacing variant='small' />
      </div>
    </div>
  );
}
