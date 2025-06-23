'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

// import './TopParallaxSection.css'

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

export default function TopParallaxSection({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const scrollTopTarget = section.querySelector('.scroll_top_target');

    gsap.to(scrollTopTarget, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

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
