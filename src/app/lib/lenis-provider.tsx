'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';
import { FC, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenisInstance = lenisRef.current?.lenis;

    if (lenisInstance) {
      lenisInstance.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        lenisInstance.off('scroll', ScrollTrigger.update);
      };
    }
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 0.8,
        smoothWheel: true,
        gestureOrientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
