import { gsap } from '@/app/lib/gsap';

export const scrollAnimation = (scrollTrack: HTMLElement) => {
  gsap.to(scrollTrack, {
    x: () => window.innerWidth - scrollTrack.scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: scrollTrack,
      start: 'top top',
      end: '+=300%',
      scrub: 1,
      pin: true,
      anticipatePin: 2,
      invalidateOnRefresh: true,
    },
  });
};
