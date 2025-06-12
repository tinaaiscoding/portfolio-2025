import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/globals.css';

const cabinetGrotesk = localFont({
  src: [
    {
      path: '../fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/CabinetGrotesk-Black.woff2',
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
      path: '../fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-general-sans',
});

const fonts = `${generalSans.variable} ${cabinetGrotesk.variable}`;

export const metadata: Metadata = {
  title: "Tina's Portfolio",
  description: "Tina's Portfolio 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${fonts}`}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
