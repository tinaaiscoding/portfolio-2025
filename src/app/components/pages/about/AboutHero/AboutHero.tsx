'use client';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import SectionSpacing from '@/app/components/SectionSpacing/SectionSpacing';
import { ScrollTrigger } from '@/app/lib/gsap';
import {
  headingScrollAnimation,
  introAnimation,
  runSplit,
} from '@/app/utils/animation/about';
import { debouncedResizeListener } from '@/app/utils/helpers';

import './AboutHero.css';

export default function AboutHero() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutInfoRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType | null>(null);
  const windowWidthRef = useRef<number>(0);

  useEffect(() => {
    const section = aboutSectionRef.current;
    const aboutInfoSection = aboutInfoRef.current;
    const currentSplitRef = splitRef.current
    if (!section || !aboutInfoSection || !currentSplitRef) return;

    const initAnimations = () => {
      runSplit(currentSplitRef, aboutInfoSection);
      introAnimation(section, aboutInfoSection);
      headingScrollAnimation(section, aboutInfoSection);
    };

    initAnimations();
    windowWidthRef.current = window.innerWidth;

    const resizeCleanup = debouncedResizeListener(() => {
      if (window.innerWidth !== windowWidthRef.current) {
        windowWidthRef.current = window.innerWidth;
        runSplit(currentSplitRef, aboutInfoSection);
        headingScrollAnimation(section, aboutInfoSection);
        ScrollTrigger.refresh();
      }
    });

    return () => {
      resizeCleanup();
      currentSplitRef.revert();
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
                build clean, engaging, and functional interfaces that bring
                ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionSpacing />
    </section>
  );
}
