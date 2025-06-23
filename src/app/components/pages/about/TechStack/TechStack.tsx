'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import './TechStack.css';

const TECH_STACK = [
  'API',
  'Express.js',
  'Git',
  'GraphQL',
  'GSAP',
  'HTML/CSS',
  'Javascript',
  'Node.js',
  'PostgreSQL',
  'Python',
  'React',
  'React Native',
  'Shopify/Liquid',
  'Tailwind',
  'Typescript',
  'Webflow/Lumos',
];

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  useEffect(() => {
    const techItems = document.querySelectorAll('.techstack_list_item');
    if (!techItems.length) return;

    techItems.forEach((item, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          id: `tech-line-${index}`,
          onEnter: () => {
            techItems.forEach((el) => el.classList.remove('active'));
            item.classList.add('active');
          },
          onEnterBack: () => {
            techItems.forEach((el) => el.classList.remove('active'));
            item.classList.add('active');
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='techstack_wrap'>
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
              {TECH_STACK.map((item, i) => {
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
