import type { Metadata } from 'next';

import AboutHero from '@/app/components/pages/about/AboutHero/AboutHero';
import Experiences from '@/app/components/pages/about/Experiences/Experiences';
import TechStack from '@/app/components/pages/about/TechStack/TechStack';

export const metadata: Metadata = {
  title: 'About | Tina Vo | Creative Web Developer Melbourne',
  description:
    'Learn more about Tina Vo, a frontend web developer in Melbourne with a passion for building beautiful and user-focused digital experiences.',
};

export default function Page() {
  return (
    <div className='about_wrap'>
      <AboutHero />
      <Experiences />
      <TechStack />
    </div>
  );
}
