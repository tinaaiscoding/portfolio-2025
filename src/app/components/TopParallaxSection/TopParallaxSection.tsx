'use client';

import { useEffect, useRef } from 'react';

import { ScrollTrigger } from '@/app/lib/gsap';
import { scrollAnimation } from '@/app/utils/animation/topParallax';

type Props = {
  children: React.ReactNode;
};

export default function TopParallaxSection({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    scrollAnimation(section);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className='parallax_section'>
      <div className='scroll_top_target'>{children}</div>
    </section>
  );
}
