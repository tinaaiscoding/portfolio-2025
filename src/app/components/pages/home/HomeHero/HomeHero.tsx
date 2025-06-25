'use client';

import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import TopParallaxSection from '@/app/components/TopParallaxSection/TopParallaxSection';
import { runHomeHeroAnimation } from '@/app/utils/animation/home';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import './HomeHero.css';

export default function HomeHero() {
  const lenis = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lenis || !heroRef.current) return;

    const cleanup = runHomeHeroAnimation(heroRef.current, lenis);

    return () => {
      cleanup?.();
    };
  }, [lenis]);
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
