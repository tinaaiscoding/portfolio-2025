'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import './HorizontalImageScroll.css';

gsap.registerPlugin(ScrollTrigger);

type ImageData = {
  src: string;
  width: string; // e.g., '300px' or '30vw'
  alt: string;
};

type Props = {
  images: ImageData[];
};

export default function HorizontalImageScroll({ images }: Props) {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrack = scrollTrackRef.current;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    const ctx = gsap.context(() => {
      if (scrollTrack) {
        gsap.to(scrollTrack, {
          x: () => window.innerWidth - scrollTrack.scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: scrollTrack,
            start: 'top top',
            end: () => `${scrollTrack.scrollWidth - window.innerWidth}px`,
            scrub: 1,
            pin: true,
            anticipatePin: 2,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
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
              sizes={img.width}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
