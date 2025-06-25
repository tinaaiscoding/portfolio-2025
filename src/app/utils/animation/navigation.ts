import type Lenis from 'lenis';

import { ScrollTrigger, gsap } from '@/app/lib/gsap';

type Options = {
  navbar: HTMLElement;
  lenis: Lenis | null;
  isOpen: boolean;
};

export function setupNavbarScrollAnimations({
  navbar,
  lenis,
  isOpen,
}: Options) {
  let animating = false;

  const ifDesktopNavbar = () => {
    const el = document.querySelector('.navbar.is-desktop');
    return !!el && window.getComputedStyle(el).display !== 'none';
  };

  const scroll = (direction: 'up' | 'down') => {
    if (isOpen && !ifDesktopNavbar()) {
      lenis?.stop();
    } else {
      lenis?.start();
      animating = true;

      const tl = gsap.timeline({
        onComplete: () => {
          animating = false;
        },
      });

      if (direction === 'up') {
        if (window.scrollY < 50) {
          tl.to(navbar, {
            borderBottomWidth: '',
            borderBottomStyle: '',
            borderBottomColor: '',
            yPercent: 0,
            duration: 0.5,
          });
        } else {
          tl.to(navbar, {
            borderBottomWidth: 'var(--border-width--main)',
            borderBottomStyle: 'solid',
            borderBottomColor: 'var(--_theme---border)',
            yPercent: 0,
            duration: 0.5,
          });
        }
      } else {
        tl.to(navbar, { yPercent: -100, duration: 0.5 });
      }
    }
  };

  const observer = ScrollTrigger.observe({
    target: document.body,
    type: 'wheel,touch,scroll',
    tolerance: 10,
    preventDefault: false,
    onUp: () => !animating && scroll('up'),
    onDown: () => !animating && scroll('down'),
  });

  return {
    observer,
    ifDesktopNavbar,
  };
}
