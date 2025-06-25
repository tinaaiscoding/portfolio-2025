// utils/animation/homeHeroAnimation.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import { debouncedResizeListener, isMobileContainer } from '../helpers';

gsap.registerPlugin(ScrollTrigger);

type BoldTextTimelines = {
  boldText: Element;
  timeline: gsap.core.Timeline;
  handlers: {
    mouseenter: (e: Event) => void;
    mouseleave: (e: Event) => void;
  };
};

export function runHomeHeroAnimation(section: HTMLElement, lenis?: any) {
  const heading = section.querySelector<HTMLElement>('.home_hero_heading_text');
  const heroBoldTexts = section.querySelectorAll<HTMLElement>(
    '.home_hero_heading_bold',
  );
  const heroImages = section.querySelectorAll<HTMLElement>(
    '.home_hero_image_wrap',
  );

  if (!heading || !heroBoldTexts.length || !heroImages.length) return;

  const headingWords = splitHeadingWords(heading);
  const boldTextTimelines = createBoldTextTimelines(
    heroBoldTexts,
    heroImages,
    heading,
  );

  const attachListeners = () => attachBoldTextListeners(boldTextTimelines);
  const detachListeners = () => detachBoldTextListeners(boldTextTimelines);

  const resizeCleanup = debouncedResizeListener(() => {
    if (isMobileContainer(section)) {
      detachListeners();
    } else {
      attachListeners();
    }
  });

  if (window.pageYOffset === 0) {
    lenis?.stop?.();
    const introTL = createIntroTimeline(headingWords, section, () => {
      lenis?.start?.();
      if (!isMobileContainer(section)) attachListeners();
    });
    setTimeout(() => introTL.play(), 100);
  } else {
    gsap.set(section, { visibility: 'visible' });
  }

  createOutroTimeline(headingWords, heading, detachListeners);
  setupScrollTriggerReentry(section, attachListeners);

  return () => {
    resizeCleanup();
    detachListeners();
    // Only kill triggers for this section
    ScrollTrigger.getAll().forEach((t) => {
      if (section.contains(t.trigger as Node)) {
        t.kill();
      }
    });
    gsap.killTweensOf(section);
  };
}

function splitHeadingWords(heading: HTMLElement): HTMLElement[] {
  return new SplitType(heading, {
    types: 'words',
    wordClass: 'hero-words',
  }).words as HTMLElement[];
}

function createBoldTextTimelines(
  heroBoldTexts: NodeListOf<Element>,
  heroImages: NodeListOf<Element>,
  heading: HTMLElement,
): BoldTextTimelines[] {
  const timelines: BoldTextTimelines[] = [];

  heroBoldTexts.forEach((boldText, index) => {
    const relatedImages =
      heroImages[index]?.querySelectorAll('.home_hero_image');
    if (!relatedImages) return;
    const otherBoldTexts = [...heroBoldTexts].filter((b) => b !== boldText);

    const boldTextTL = gsap.timeline({
      paused: true,
      defaults: { duration: 0.2 },
    });
    boldTextTL.set(boldText, { zIndex: 5 });
    boldTextTL.to(
      relatedImages,
      { opacity: 1, scale: 1.2, ease: 'power4.out' },
      0,
    );
    boldTextTL.fromTo(
      heading,
      { color: 'var(--_theme---text)' },
      { color: 'var(--_theme---text-faded)' },
      '<',
    );
    boldTextTL.fromTo(
      otherBoldTexts,
      { color: 'var(--color--brand-main)' },
      { color: 'var(--_theme---text-faded)' },
      '<',
    );

    const mouseenterHandler = () => boldTextTL.timeScale(1).play();
    const mouseleaveHandler = () => boldTextTL.timeScale(2).reverse();

    timelines.push({
      boldText,
      timeline: boldTextTL,
      handlers: {
        mouseenter: mouseenterHandler,
        mouseleave: mouseleaveHandler,
      },
    });
  });

  return timelines;
}

function attachBoldTextListeners(boldTextTLs: BoldTextTimelines[]) {
  boldTextTLs.forEach(({ boldText, handlers }) => {
    boldText.addEventListener('mouseenter', handlers.mouseenter);
    boldText.addEventListener('mouseleave', handlers.mouseleave);
  });
}

function detachBoldTextListeners(boldTextTLs: BoldTextTimelines[]) {
  boldTextTLs.forEach(({ boldText, handlers }) => {
    boldText.removeEventListener('mouseenter', handlers.mouseenter);
    boldText.removeEventListener('mouseleave', handlers.mouseleave);
  });
}

function createIntroTimeline(
  words: HTMLElement[],
  section: HTMLElement,
  onComplete: () => void,
): gsap.core.Timeline {
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
  tl.fromTo(
    words,
    { opacity: 0, y: '2rem' },
    {
      opacity: 1,
      y: '0em',
      duration: 1.5,
      stagger: { each: 0.05 },
      onComplete,
    },
  );
  gsap.set(section, { visibility: 'visible' });
  return tl;
}

function createOutroTimeline(
  words: HTMLElement[],
  heading: HTMLElement,
  onStart: () => void,
) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: heading,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to(words, {
      opacity: 0,
      y: '-10rem',
      stagger: { amount: 0.5 },
      onStart,
    });
}

function setupScrollTriggerReentry(
  section: HTMLElement,
  onEnterBack: () => void,
) {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: '20px top',
    onEnterBack,
  });
}
