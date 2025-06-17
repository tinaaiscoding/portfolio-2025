import Link from 'next/link';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';

import './ProjectsHero.css';

export default function ProjectsHero() {
  const PROJECTS = [
    { title: 'MNTN', skills: ['Web Development', 'Webflow'] },
    {
      title: 'Portfolio (2023)',
      skills: ['React', 'Web Development', 'Web Design'],
    },
    { title: 'jetia', skills: ['React', 'Web Development'] },
    { title: 'PokéBattles', skills: ['React', 'Web Development'] },
  ];

  return (
    <section className='projects_hero_wrap'>
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
