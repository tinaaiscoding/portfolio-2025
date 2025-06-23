'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

import { useNavbar } from '@/app/hooks/useNavbar';

import { NavbarDesktop, NavbarMobile } from './Navbar';
import './Navigation.css';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const lenis = useLenis();
  const { isOpen, close } = useNavbar();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let animating = false;

    const desktopNavbarCheck = () =>
      !!document.querySelector('.navbar.is-desktop') &&
      window.getComputedStyle(document.querySelector('.navbar.is-desktop')!)
        .display !== 'none';

    let desktopNavbar = desktopNavbarCheck();

    const handleResize = () => {
      desktopNavbar = desktopNavbarCheck();

      if (desktopNavbar && isOpen) {
        close();
      }
    };

    window.addEventListener('resize', handleResize);

    const scroll = (direction: 'up' | 'down') => {
      if (isOpen && !desktopNavbar) {
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
          if (window.scrollY >= 0 && window.scrollY < 50) {
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

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.kill();
      lenis?.destroy();
    };
  }, [lenis, isOpen, close]);

  return (
    <div ref={navbarRef} className='navbar_wrap'>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
