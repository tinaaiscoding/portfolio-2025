'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { ProjectImageType } from '@/app/data/projects';
import { scrollAnimation } from '@/app/utils/animation/horizontalImageScroll';
import { debouncedResizeListener } from '@/app/utils/helpers';

import './HorizontalImageScroll.css';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  images: ProjectImageType[];
};

export default function HorizontalImageScroll({ images }: Props) {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;
    if (!scrollTrack) return;

    scrollAnimation(scrollTrack);
    
    const resizeCleanup = debouncedResizeListener(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      resizeCleanup();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='horizontal_scroll_section'>
      <div ref={scrollTrackRef} className='horizontal_scroll_track'>
        {images.map((img, index) => (
          <div
            key={index}
            className='horizontal_scroll_item'
            style={{ width: img.width }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes='100vw'
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
