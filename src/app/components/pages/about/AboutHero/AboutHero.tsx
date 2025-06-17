import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';

import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className='about_hero_wrap'>
      <div className='about_hero_contain u-container'>
        <div className='about_hero_layout'>
          <div className='about_hero_heading'>
            <h2 className='u-text-style-display-secondary'>about</h2>
          </div>
          <div className='about_hero_info'>
            <div className='about_hero_text'>
              <p className='u-text-style-display-primary'>
                I love creating beautiful digital experiences through websites,
                design, and interactions—blending creativity with usability to
                build clean, engaging, and intuitive interfaces that bring ideas
                to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionSpacing />
    </section>
  );
}
