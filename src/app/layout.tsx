import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local';

import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import ScrollReset from './components/ScrollReset/ScrollReset';
import LenisScrollProvider from './lib/lenisProvider';
import './styles/globals.css';
import { NavbarProvider } from './utils/useNavbar';

const GridOverlay =
  process.env.NODE_ENV === 'development'
    ? dynamic(() => import('./devTools/components/GridOverlay'))
    : () => null;

const cabinetGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  fallback: ['Trebuchet MS', 'sans-serif'],
  variable: '--font-cabinet-grotesk',
});

const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-general-sans',
});

const fonts = `${generalSans.variable} ${cabinetGrotesk.variable}`;

export const metadata: Metadata = {
  title: 'Tina Vo | Creative Web Developer Melbourne',
  description:
    'Tina Vo is a frontend web developer based in Melbourne, creating modern, engaging, and accessible websites with a focus on user experience and creativity.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${fonts}`}>
      <body className='antialiased'>
        <LenisScrollProvider>
          <NavbarProvider>
            {process.env.NODE_ENV === 'development' && <GridOverlay />}
            <ScrollReset />
            <Navigation />
            {children}
            <Footer />
          </NavbarProvider>
        </LenisScrollProvider>
      </body>
    </html>
  );
}
