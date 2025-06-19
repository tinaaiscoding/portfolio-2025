'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import './HomeHero.css';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const lenis = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const heroHeading = section.querySelector(
      '.home_hero_heading_text',
    ) as HTMLElement;
    const heroBolds = section.querySelectorAll(
      '.home_hero_heading_bold',
    ) as NodeListOf<HTMLElement>;
    const heroImages = section.querySelectorAll('.home_hero_image_wrap');

    const headingWords = new SplitType(heroHeading, {
      types: 'words',
      wordClass: 'hero-words',
    }).words;

    const spanHoverTLs: {
      span: HTMLElement;
      timeline: gsap.core.Timeline;
      handlers: {
        mouseenter: (e: MouseEvent) => void;
        mouseleave: (e: MouseEvent) => void;
      };
    }[] = [];

    const initialHeadingTL = gsap.timeline({
      paused: true,
      defaults: { ease: 'power2.out' },
    });

    const outroHeadingTL = gsap.timeline({
      scrollTrigger: {
        trigger: heroHeading,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    function isMobileContainer(): boolean {
      if (!section || !(section instanceof Element)) return false;

      const containerWidthPx = getComputedStyle(section).width;
      const rootFontSizePx = getComputedStyle(
        document.documentElement,
      ).fontSize;

      const containerWidthEm =
        parseFloat(containerWidthPx) / parseFloat(rootFontSizePx);

      return containerWidthEm <= 38;
    }

    const attachSpanHoverListeners = () => {
      spanHoverTLs.forEach(({ span, handlers }) => {
        span.addEventListener('mouseenter', handlers.mouseenter);
        span.addEventListener('mouseleave', handlers.mouseleave);
      });
    };

    const detachSpanHoverListeners = () => {
      spanHoverTLs.forEach(({ span, handlers }) => {
        span.removeEventListener('mouseenter', handlers.mouseenter);
        span.removeEventListener('mouseleave', handlers.mouseleave);
      });
    };

    const handleResize = () => {
      if (isMobileContainer()) {
        detachSpanHoverListeners();
      } else {
        attachSpanHoverListeners();
      }
    };

    window.addEventListener('resize', handleResize);

    heroBolds.forEach((span, index) => {
      const relatedImages =
        heroImages[index]?.querySelectorAll('.home_hero_image') || [];
      const otherSpans = [...heroBolds].filter((s) => s !== span);

      const spanTL = gsap.timeline({
        paused: true,
        defaults: { duration: 0.2 },
      });
      spanTL.set(span, { zIndex: 5 });
      spanTL.to(
        relatedImages,
        { opacity: 1, scale: 1.2, ease: 'power4.out' },
        0,
      );
      spanTL.fromTo(
        heroHeading,
        { color: 'var(--_theme---text)' },
        { color: 'var(--_theme---text-faded)' },
        '<',
      );
      spanTL.fromTo(
        otherSpans,
        { color: 'var(--color--brand-main)' },
        { color: 'var(--_theme---text-faded)' },
        '<',
      );

      const mouseenterHandler = () => spanTL.timeScale(1).play();
      const mouseleaveHandler = () => spanTL.timeScale(2).reverse();

      spanHoverTLs.push({
        span,
        timeline: spanTL,
        handlers: {
          mouseenter: mouseenterHandler,
          mouseleave: mouseleaveHandler,
        },
      });
    });

    if (window.pageYOffset === 0) {
      lenis?.stop?.();

      initialHeadingTL.fromTo(
        headingWords,
        { opacity: 0, y: '1rem' },
        {
          opacity: 1,
          y: '0em',
          duration: 0.8,
          stagger: { each: 0.02 },
          onComplete: () => {
            lenis?.start?.();
            if (!isMobileContainer()) attachSpanHoverListeners();
          },
        },
      );

      setTimeout(() => initialHeadingTL.play(), 100);
      gsap.set('.home_hero_heading_wrap', { visibility: 'visible' });
    } else {
      gsap.set('.home_hero_heading_wrap', { visibility: 'visible' });
    }

    outroHeadingTL.to(headingWords, {
      opacity: 0,
      y: '-10rem',
      stagger: { amount: 0.5 },
      onStart: () => detachSpanHoverListeners(),
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '20px top',
      onEnterBack: () => {
        if (!isMobileContainer()) attachSpanHoverListeners();
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf('*');
      detachSpanHoverListeners();
    };
  }, []);

  return (
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
            <strong className='home_hero_heading_bold'>engaging</strong> digital
            experiences.
          </p>
        </div>
      </div>
      <SectionSpacing />
    </section>
  );
}
