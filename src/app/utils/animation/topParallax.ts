import { gsap } from '@/app/lib/gsap';

export const scrollAnimation = (section: HTMLElement) => {
  const scrollTopTarget =
    section.querySelector<HTMLElement>('.scroll_top_target');
  if (!scrollTopTarget) return;

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
};
