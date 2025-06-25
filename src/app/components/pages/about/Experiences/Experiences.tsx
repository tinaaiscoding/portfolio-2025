'use client';

import { useEffect, useRef } from 'react';

import { experiences } from '@/app/data/experiences';
import { ScrollTrigger } from '@/app/lib/gsap';
import { expItemAnimation, expSectionST } from '@/app/utils/animation/about';
import { debouncedResizeListener } from '@/app/utils/helpers';

import './Experiences.css';

export default function Experiences() {
  const expSectionRef = useRef<HTMLElement>(null);
  const expSectionSTRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = expSectionRef.current;
    if (!section) return;

    expSectionSTRef.current = expSectionST(section);
    expItemAnimation(section);

    const resizeCleanup = debouncedResizeListener(() => {
      expSectionSTRef.current?.kill();
      expSectionSTRef.current = expSectionST(section);
      ScrollTrigger.refresh(true);
    });

    return () => {
      resizeCleanup();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={expSectionRef}
      className='exp_wrap flex flex-col items-start justify-center'
    >
      <div className='exp_contain u-container'>
        <div className='exp_heading'>
          <h2 className='u-text-style-display-secondary'>experience</h2>
        </div>
        <div className='exp_info'>
          {experiences.map((exp, i) => {
            return (
              <div key={i} className='exp_item_wrap grid auto-cols-fr'>
                <div className='exp_item_heading'>
                  <p className='u-text-style-h4'>{exp.employer}</p>
                </div>
                <div className='exp_item_subheading flex flex-row flex-wrap items-center justify-between'>
                  <p className='u-text-style-main'>{exp.role}</p>
                  <p className='u-text-style-main'>{exp.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
