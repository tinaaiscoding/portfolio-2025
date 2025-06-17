import Image from 'next/image';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import TextBubble from '../../../TextBubble/TextBubble';
import './FeaturedProject.css';

export default function FeaturedProject() {
  return (
    <div className='featured_project_wrap'>
      <div className='featured_project_contain flex flex-col items-center justify-center'>
        <SectionSpacing variant='small' />
        <div className='featured_project_layout u-container flex flex-col items-start justify-between'>
          <h2 className='featured_project_heading u-text-style-h2'>jetia</h2>
          <div className='project_skills_wrap'>
            <TextBubble>Skills</TextBubble>
          </div>
          <div className='featured_project_image_wrap flex flex-col items-center justify-center'>
            <div className='featured_project_image'>
              <Image
                src='/images/jetia.png'
                alt='jetia landing page'
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
