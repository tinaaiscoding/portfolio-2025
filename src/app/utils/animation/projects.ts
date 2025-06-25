import { gsap } from '@/app/lib/gsap';

export const introAnimation = (section: HTMLElement) => {
  const heading = section.querySelector('h2');
  const projectItems = section.querySelectorAll('.projects_item_wrap');
  if (!heading || !projectItems.length) return;

  const tl = gsap.timeline();

  tl.set(section, { visibility: 'visible' });
  tl.fromTo(
    heading,
    { opacity: 0, y: '4rem' },
    { opacity: 1, y: '0em', duration: 0.4 },
  );
  tl.fromTo(
    projectItems,
    { opacity: 0, y: '4rem' },
    { opacity: 1, y: '0em', duration: 0.5, stagger: { each: 0.15 } },
  );

  return tl;
};

export const projectItemHover = (section: HTMLElement) => {
  const projectItems = section.querySelectorAll<HTMLElement>(
    '.projects_item_wrap',
  );
  if (!projectItems.length) return;

  const listenerCleanupFns: (() => void)[] = [];

  projectItems?.forEach((item, i) => {
    const image = item.querySelector('.projects_item_image');
    if (!image) return;

    const handleMouseEnter = () => {
      gsap.to(image, { opacity: 1, duration: 0.6, ease: 'sine.out' });
      gsap.to(projectItems, {
        opacity: (el) => (el === i ? 1 : 0.3),
        duration: 0.6,
        ease: 'sine.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, { opacity: 0, duration: 0.6, ease: 'sine.out' });
      gsap.to(projectItems, { opacity: 1, duration: 0.6, ease: 'sine.out' });
    };

    item.addEventListener('mousemove', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);

    listenerCleanupFns.push(() => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    });
  });

  return () => {
    listenerCleanupFns.forEach((fn) => fn());
  };
};

export const projectItemMouseMove = (section: HTMLElement) => {
  const projectItems = section.querySelectorAll<HTMLElement>(
    '.projects_item_wrap',
  );
  if (!projectItems.length) return;

  const listenerCleanupFns: (() => void)[] = [];

  projectItems.forEach((item) => {
    const handleMouseMove = (e: MouseEvent) => {
      const image = item.querySelector('.projects_item_image');
      if (!image) return;

      const rect = item.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      gsap.set(image, { xPercent: -50, yPercent: -50 });
      gsap.to(image, {
        x: relX,
        y: relY,
        duration: 1,
        ease: 'power3.out',
      });
    };

    item.addEventListener('mousemove', handleMouseMove);
    listenerCleanupFns.push(() =>
      item.removeEventListener('mousemove', handleMouseMove),
    );
  });

  return () => {
    listenerCleanupFns.forEach((fn) => fn());
  };
};
