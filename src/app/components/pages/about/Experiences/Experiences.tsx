'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import './Experiences.css';

const EXPERIENCES = [
  {
    employer: 'Pixel Technologies',
    role: 'fullstack developer',
    date: '11.2023 / 03.2025',
  },
  {
    employer: 'General Assembly',
    role: 'instructor associate',
    date: '03.2023 / 11.2023',
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Experiences() {
  const expSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const expSection = expSectionRef.current;
    if (!expSection) return;

    const expItems = expSection.querySelectorAll<HTMLElement>('.exp_item_wrap');
    if (!expItems.length) return;

    const isSmallContainer = (): boolean => {
      const containerWidthEm =
        parseFloat(getComputedStyle(expSection).width) /
        parseFloat(getComputedStyle(document.documentElement).fontSize);
      return containerWidthEm <= 48;
    };

    const expSectionTL = gsap.timeline({
      scrollTrigger: {
        trigger: expSection,
        start: 'top top',
        end: '+=70%',
        scrub: true,
        pin: true,
        pinSpacing: isSmallContainer(),
        id: 'exp',
      },
    });

    const expLineTL = gsap.timeline({
      scrollTrigger: {
        trigger: expSection,
        start: 'top top',
        end: '40% top',
        scrub: true,
        id: 'item',
      },
    });

    expLineTL.fromTo(
      expItems,
      { opacity: 0, y: '4rem' },
      {
        opacity: 1,
        y: '0em',
        duration: 3,
        stagger: 1,
      },
    );

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
          {EXPERIENCES.map((exp, i) => {
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
