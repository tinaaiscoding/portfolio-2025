import HomeHero from './components/pages/home/HomeHero/HomeHero';
import FeaturedProjects from './components/pages/home/FeaturedProjects/FeaturedProjects';

export default function Home() {
  return (
    <div className='home_wrap'>
      <HomeHero />
      <FeaturedProjects />
    </div>
  );
}
