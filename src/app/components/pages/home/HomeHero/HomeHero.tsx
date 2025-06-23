'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import TopParallaxSection from '@/app/components/TopParallaxSection/TopParallaxSection';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import './HomeHero.css';

gsap.registerPlugin(ScrollTrigger);

type BoldTextTimelines = {
  boldText: Element;
  timeline: gsap.core.Timeline;
  handlers: {
    mouseenter: (e: Event) => void;
    mouseleave: (e: Event) => void;
  };
};

export default function HomeHero() {
  const lenis = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const heading: HTMLElement | null = section.querySelector(
      '.home_hero_heading_text',
    );
    const heroBoldTexts = section.querySelectorAll('.home_hero_heading_bold');
    const heroImages = section.querySelectorAll('.home_hero_image_wrap');

    if (!heading || !heroBoldTexts.length || !heroImages.length) return;

    const headingWords = new SplitType(heading, {
      types: 'words',
      wordClass: 'hero-words',
    }).words;

    const boldTextTLs: BoldTextTimelines[] = [];

    const initialHeadingTL = gsap.timeline({
      paused: true,
      defaults: { ease: 'power2.out' },
    });

    const outroHeadingTL = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    const isMobileContainer = (): boolean => {
      const containerWidthPx = getComputedStyle(section).width;
      const rootFontSizePx = getComputedStyle(
        document.documentElement,
      ).fontSize;

      const containerWidthEm =
        parseFloat(containerWidthPx) / parseFloat(rootFontSizePx);

      return containerWidthEm <= 38;
    };

    const attachBoldTextListeners = () => {
      boldTextTLs.forEach(({ boldText, handlers }) => {
        boldText.addEventListener('mouseenter', handlers.mouseenter);
        boldText.addEventListener('mouseleave', handlers.mouseleave);
      });
    };

    const detachBoldTextListeners = () => {
      boldTextTLs.forEach(({ boldText, handlers }) => {
        boldText.removeEventListener('mouseenter', handlers.mouseenter);
        boldText.removeEventListener('mouseleave', handlers.mouseleave);
      });
    };

    const handleResize = () => {
      if (isMobileContainer()) {
        detachBoldTextListeners();
      } else {
        attachBoldTextListeners();
      }
    };

    window.addEventListener('resize', handleResize);

    // Hero Bold Images Animation
    heroBoldTexts?.forEach((boldText, index) => {
      const relatedImages =
        heroImages[index]?.querySelectorAll('.home_hero_image');
      if (!relatedImages) return;
      const otherBoldTexts = [...heroBoldTexts].filter((b) => b !== boldText);

      const boldTextTL = gsap.timeline({
        paused: true,
        defaults: { duration: 0.2 },
      });
      boldTextTL.set(boldText, { zIndex: 5 });
      boldTextTL.to(
        relatedImages,
        { opacity: 1, scale: 1.2, ease: 'power4.out' },
        0,
      );
      boldTextTL.fromTo(
        heading,
        { color: 'var(--_theme---text)' },
        { color: 'var(--_theme---text-faded)' },
        '<',
      );
      boldTextTL.fromTo(
        otherBoldTexts,
        { color: 'var(--color--brand-main)' },
        { color: 'var(--_theme---text-faded)' },
        '<',
      );

      const mouseenterHandler = () => boldTextTL.timeScale(1).play();
      const mouseleaveHandler = () => boldTextTL.timeScale(2).reverse();

      boldTextTLs.push({
        boldText,
        timeline: boldTextTL,
        handlers: {
          mouseenter: mouseenterHandler,
          mouseleave: mouseleaveHandler,
        },
      });
    });

    if (window.pageYOffset === 0) {
      lenis?.stop?.();

      // Hero Heading Text Intro Animation
      initialHeadingTL.fromTo(
        headingWords,
        { opacity: 0, y: '2rem' },
        {
          opacity: 1,
          y: '0em',
          duration: 1.5,
          stagger: { each: 0.05 },
          onComplete: () => {
            lenis?.start?.();
            if (!isMobileContainer()) attachBoldTextListeners();
          },
        },
      );

      gsap.set(heroRef.current, { visibility: 'visible' });
      setTimeout(() => initialHeadingTL.play(), 100);
    } else {
      gsap.set(heroRef.current, { visibility: 'visible' });
    }

    // Hero Heading Text Outro Animation
    outroHeadingTL.to(headingWords, {
      opacity: 0,
      y: '-10rem',
      stagger: { amount: 0.5 },
      onStart: () => detachBoldTextListeners(),
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '20px top',
      onEnterBack: () => {
        if (!isMobileContainer()) attachBoldTextListeners();
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf('*');
      detachBoldTextListeners();
    };
  }, []);

  return (
    <TopParallaxSection>
      <section
        className='home_hero_wrap flex flex-col items-center justify-center'
        ref={heroRef}
      >
        <SectionSpacing />
        <div className='home_hero_contain u-container flex flex-row items-center justify-center'>
          <div className='home_hero_image_wrap'>
            <div className='home_hero_image is-1'>
              <Image
                src='/images/hero-1.jpeg'
                alt='Tina travelling'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-2'>
              <Image
                src='/images/hero-2.jpeg'
                alt='Maz and Tina'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-3'>
              <Image
                src='/images/hero-3.jpg'
                alt="Tina's hobby"
                fill
                sizes='400px 3x'
              />
            </div>
          </div>
          <div className='home_hero_image_wrap'>
            <div className='home_hero_image is-1'>
              <Image
                src='/images/hero-1.jpeg'
                alt='Tina travelling'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-2'>
              <Image
                src='/images/hero-2.jpeg'
                alt='Maz and Tina'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-3'>
              <Image
                src='/images/hero-3.jpg'
                alt="Tina's hobby"
                fill
                sizes='400px 3x'
              />
            </div>
          </div>
          <div className='home_hero_image_wrap'>
            <div className='home_hero_image is-1'>
              <Image
                src='/images/hero-1.jpeg'
                alt='Tina travelling'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-2'>
              <Image
                src='/images/hero-2.jpeg'
                alt='Maz and Tina'
                fill
                sizes='400px 3x'
              />
            </div>
            <div className='home_hero_image is-3'>
              <Image
                src='/images/hero-3.jpg'
                alt="Tina's hobby"
                fill
                sizes='400px 3x'
              />
            </div>
          </div>

          <div className='home_hero_heading_wrap'>
            <p className='home_hero_heading_text flow-root text-center text-balance'>
              Hi, I'm <strong className='home_hero_heading_bold'>Tina</strong> —
              creative web developer crafting{' '}
              <strong className='home_hero_heading_bold'>beautiful</strong> and{' '}
              <strong className='home_hero_heading_bold'>engaging</strong>{' '}
              digital experiences.
            </p>
          </div>
        </div>
        <SectionSpacing />
      </section>
    </TopParallaxSection>
  );
}
