import { RefObject } from 'react';
import SplitType from 'split-type';

import { ScrollTrigger, gsap } from '@/app/lib/gsap';

import { isSmallContainer } from '../helpers';

// *** ABOUT HERO ANIMATION *** //

export const introAnimation = (
  section: HTMLElement,
  aboutInfoSection: HTMLElement,
) => {
  const heading = section.querySelector<HTMLElement>('h2');
  const heroLines = aboutInfoSection.querySelectorAll<HTMLElement>(
    '.about_hero_heading_line',
  );

  if (!heading || !heroLines.length) return;

  gsap.set(section, { visibility: 'visible' });
  gsap.fromTo(
    heading,
    { opacity: 0, y: '4rem' },
    { opacity: 1, y: '0em', duration: 0.4 },
  );

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutInfoSection,
      start: 'top 85%',
      end: 'bottom center',
      scrub: 1,
    },
  });

  introTl.fromTo(
    heroLines,
    { opacity: 0, y: '3rem' },
    { opacity: 1, y: '0em', duration: 0.5, stagger: { each: 0.15 } },
  );
};

export const headingScrollAnimation = (
  section: HTMLElement,
  aboutInfoSection: HTMLElement,
) => {
  const heading = section.querySelector('h2');
  const paragraph = aboutInfoSection.querySelector('p');
  const heroLines = aboutInfoSection.querySelectorAll(
    '.about_hero_heading_line',
  );

  if (!heading || !paragraph || !heroLines.length) return;

  const highlightTl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutInfoSection,
      start: 'top 50%',
      end: 'bottom center',
      scrub: 1,
    },
  });

  highlightTl.to(heroLines, {
    '--line-width': '100%',
    duration: 1,
    stagger: 0.4,
  });
};

export const runSplit = (
  splitRef: RefObject<SplitType | null>,
  aboutInfoSection: HTMLElement,
) => {
  const paragraph = aboutInfoSection.querySelector('p');
  if (!paragraph) return;

  splitRef.current?.revert();
  splitRef.current = new SplitType(paragraph, {
    types: 'lines',
    lineClass: 'about_hero_heading_line',
  });
};

// *** ABOUT EXPERIENCE ANIMATION *** //

export const expSectionST = (section: HTMLElement) => {
  return ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: '+=70%',
    scrub: true,
    pin: true,
    pinSpacing: isSmallContainer(section),
    id: 'exp',
  });
};

export const expItemAnimation = (section: HTMLElement) => {
  const expItems = section.querySelectorAll<HTMLElement>('.exp_item_wrap');
  if (!expItems.length) return;
  const expLineTL = gsap.timeline({
    scrollTrigger: {
      trigger: section,
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
};

// *** ABOUT TECHSTACK ANIMATION *** //
export const techItemsAnimation = (
  section: HTMLElement,
  triggerRef: ScrollTrigger[],
) => {
  const techItems = section.querySelectorAll<HTMLElement>(
    '.techstack_list_item',
  );
  if (!techItems.length) return;

  techItems.forEach((item, index) => {
    const trigger = gsap.timeline({
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

    triggerRef.push(trigger.scrollTrigger!);
  });
};
