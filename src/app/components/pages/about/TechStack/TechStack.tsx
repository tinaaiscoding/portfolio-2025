'use client';

import { useEffect, useRef } from 'react';

import { techStack } from '@/app/data/techStack';
import { ScrollTrigger } from '@/app/lib/gsap';
import { techItemsAnimation } from '@/app/utils/animation/about';
import { debouncedResizeListener } from '@/app/utils/helpers';

import './TechStack.css';

export default function TechStack() {
  const techStackSectionRef = useRef<HTMLElement>(null);
  const techTriggerRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = techStackSectionRef.current;
    if (!section) return;

    techItemsAnimation(section, techTriggerRefs.current);

    const resizeCleanup = debouncedResizeListener(() => {
      techTriggerRefs.current.forEach((t) => t.kill());
      techTriggerRefs.current = [];

      techItemsAnimation(section, techTriggerRefs.current);

      ScrollTrigger.refresh(true);
    });

    return () => {
      resizeCleanup();
      techTriggerRefs.current.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={techStackSectionRef} className='techstack_wrap'>
      <div className='techstack_info_gradient'></div>
      <div className='techstack_contain u-container'>
        <div className='techstack_heading_wrap'>
          <div className='techstack_heading'>
            <h2 className='u-text-style-display-secondary'>tech</h2>
          </div>
        </div>
        <div className='techstack_info_wrap'>
          <div className='techstack_list_wrap'>
            <ul className='techstack_list'>
              {techStack.map((item, i) => {
                return (
                  <li key={i} className='techstack_list_item'>
                    <p className='u-text-style-display-primary'>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
