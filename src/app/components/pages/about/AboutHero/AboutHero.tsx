'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';

import './AboutHero.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const aboutInfoRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitType | null>(null);
  const windowWidthRef = useRef<number>(0);

  useEffect(() => {
    const aboutInfoSection = aboutInfoRef.current;
    if (!aboutInfoSection) return;

    const paragraph = aboutInfoSection.querySelector('p');
    if (!paragraph) return;

    const runSplit = () => {
      splitRef.current?.revert();
      splitRef.current = new SplitType(paragraph, {
        types: 'lines',
        lineClass: 'about_hero_heading_line',
      });
      gsap.set(aboutInfoSection, { visibility: 'visible' });
      headingScroll();
    };

    const headingScroll = () => {
      const heroLines = aboutInfoSection.querySelectorAll(
        '.about_hero_heading_line',
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutInfoSection,
          start: 'top 60%',
          end: 'bottom center',
          scrub: 1,
        },
      });

      tl.to(heroLines, {
        '--line-width': '100%',
        duration: 1,
        stagger: 0.4,
      });
    };

    const handleResize = () => {
      if (window.innerWidth !== windowWidthRef.current) {
        windowWidthRef.current = window.innerWidth;
        splitRef.current?.revert();
        runSplit();
        ScrollTrigger.refresh();
      }
    };

    runSplit();
    windowWidthRef.current = window.innerWidth;
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      splitRef.current?.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='about_hero_wrap'>
      <div className='about_hero_contain u-container'>
        <div className='about_hero_layout'>
          <div className='about_hero_heading'>
            <h2 className='u-text-style-display-secondary'>about</h2>
          </div>
          <div ref={aboutInfoRef} className='about_hero_info'>
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
