'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import SectionSpacing from '../../../SectionSpacing/SectionSpacing';
import './HomeHero.css';

export default function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const section = heroRef.current;
    const sectionHeading = section.querySelector('.home_hero_heading_text');
    const sectionBolds = section.querySelectorAll('.home_hero_heading_bold');
    const sectionImages = section.querySelectorAll('.home_hero_image_wrap');

    const mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      sectionBolds.forEach((boldText, index) => {
        const relatedImages =
          sectionImages[index]?.querySelectorAll('.home_hero_image');
        const otherText = [...sectionBolds].filter((_, i) => i !== index);

        const tl = gsap.timeline({ paused: true, defaults: { duration: 0.2 } });
        tl.set(boldText, { zIndex: 5 });
        tl.to(relatedImages, { opacity: 1, scale: 1.2, ease: 'power4.out' });
        tl.fromTo(
          sectionHeading,
          { color: 'var(--_theme---text)' },
          { color: 'var(--_theme---text-faded)' },
          '<',
        );
        tl.fromTo(
          otherText,
          { color: 'var(--color--brand-main)' },
          { color: 'var(--_theme---text-faded)' },
          '<',
        );

        boldText.addEventListener('mouseenter', () => {
          tl.timeScale(1).play();
        });
        boldText.addEventListener('mouseleave', () => {
          tl.timeScale(2).reverse();
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
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
    </div>
  );
}
