import { Metadata } from 'next';

import ProjectsHero from '@/app/components/pages/projects/ProjectsHero/ProjectsHero';

export const metadata: Metadata = {
  title: 'Projects | Tina Vo | Creative Web Developer Melbourne',
  description:
    'Explore Tina Vo’s portfolio of web development projects – combining modern design, responsive interfaces, and smooth user experiences.',
};

export default function Page() {
  return (
    <div className='projects_wrap'>
      <ProjectsHero />
    </div>
  );
}
