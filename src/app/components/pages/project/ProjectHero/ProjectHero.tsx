import HorizontalImageScroll from '@/app/components/HorizontalImageScroll/HorizontalImageScroll';
import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';
import TextBubble from '@/app/components/TextBubble/TextBubble';

import './ProjectHero.css';

const PROJECT = {
  title: 'MNTN',
  skills: ['Web Development', 'Webflow'],
  description: ` A responsive landing page built in Webflow, leveraging the
                  Lumos framework for a flexible, modern design. Includes
                  customised components and tailored styling to enhance user
                  experience across all devices, with attention to clean
                  layouts and seamless functionality.`,
};

export default function ProjectHero() {
  return (
    <section className='project_hero_wrap'>
      <HorizontalImageScroll
        images={[
          { src: '/images/mntn-1.png', width: '80vw', alt: 'MNTN 1' },
          { src: '/images/mntn-3.png', width: '40vw', alt: 'MNTN 2' },
        ]}
      />

      <section className='project_content_wrap'>
        <SectionSpacing />
        <div className='project_contain u-container'>
          <div className='project_content_layout'>
            <div className='project_content_contain u-container'>
              <div className='project_content_layout flex flex-row flex-wrap items-start justify-between'>
                <div className='project_header_wrap'>
                  <h2 className='project_title u-text-style-h1-primary'>
                    {PROJECT.title}
                  </h2>
                </div>
                <div className='project_text_wrap flex flex-col items-start justify-between'>
                  <p className='u-text-style-main'> {PROJECT.description}</p>
                  <div className='project_skills_list flex flex-row flex-wrap items-center justify-start'>
                    {PROJECT.skills.map((skill, i) => {
                      return <TextBubble key={i}>{skill}</TextBubble>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionSpacing />

        <HorizontalImageScroll
          images={[
            { src: '/images/mntn-4.png', width: '30vw', alt: 'MNTN 1' },
            { src: '/images/mntn-2.png', width: '80vw', alt: 'MNTN 2' },
            { src: '/images/mntn-5.png', width: '30vw', alt: 'MNTN 2' },
          ]}
        />
      </section>
    </section>
  );
}
