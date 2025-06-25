import { gsap } from '@/app/lib/gsap';

export const projectItemUnmask = (section: HTMLElement) => {
  const projectItems = section.querySelectorAll<HTMLElement>(
    '.featured_project_wrap',
  );
  if (!projectItems.length) return;

  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=300%',
      scrub: true,
      pin: true,
    },
  });

  projectItems.forEach((item, index) => {
    if (index > 0) {
      tl.from(item, { yPercent: 100 });
      tl.to({}, { duration: 0.5 }); // Spacer between animations
    }
  });
   return tl;
};
