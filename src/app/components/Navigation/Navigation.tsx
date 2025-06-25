'use client';

import { useLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';

import { setupNavbarScrollAnimations } from '@/app/utils/animation/navigation';
import { debouncedResizeListener } from '@/app/utils/helpers';
import { useNavbar } from '@/app/utils/useNavbar';

import { NavbarDesktop, NavbarMobile } from './Navbar';
import './Navigation.css';

export default function Navigation() {
  const lenis = useLenis();
  const { isOpen, close } = useNavbar();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!lenis || !navbar) return;

    const { observer, ifDesktopNavbar } = setupNavbarScrollAnimations({
      navbar,
      lenis,
      isOpen,
    });

    const resizeCleanup = debouncedResizeListener(() => {
      if (ifDesktopNavbar() && isOpen) {
        close();
      }
    });

    return () => {
      resizeCleanup();
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
