'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';

import './AboutHero.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutInfoRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType>(null);
  const windowWidthRef = useRef<number>(0);

  useEffect(() => {
    const section = aboutSectionRef.current;
    const aboutInfoSection = aboutInfoRef.current;
    if (!aboutInfoSection || !section) return;

    const heading = section.querySelector('h2');
    const paragraph = aboutInfoSection.querySelector('p');
    if (!paragraph) return;

    gsap.set(section, { visibility: 'visible' });
    gsap.fromTo(
      heading,
      { opacity: 0, y: '4rem' },
      { opacity: 1, y: '0em', duration: 0.4 },
    );

    const runSplit = () => {
      splitRef.current?.revert();
      splitRef.current = new SplitType(paragraph, {
        types: 'lines',
        lineClass: 'about_hero_heading_line',
      });

      headingScroll();
    };

    const headingScroll = () => {
      const heroLines = aboutInfoSection.querySelectorAll(
        '.about_hero_heading_line',
      );
      if (!heroLines.length) return;

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutInfoSection,
          start: 'top 85%',
          end: 'bottom center',
          scrub: 1,
        },
      });

      introTl.fromTo(
        heroLines,
        { opacity: 0, y: '3rem' },
        { opacity: 1, y: '0em', duration: 0.5, stagger: { each: 0.15 } },
      );

      const highlightTl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutInfoSection,
          start: 'top 50%',
          end: 'bottom center',
          scrub: 1,
        },
      });

      highlightTl.to(heroLines, {
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
    <section ref={aboutSectionRef} className='about_hero_wrap'>
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
