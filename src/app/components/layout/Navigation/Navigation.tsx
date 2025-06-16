'use client';

import { NavbarDesktop, NavbarMobile } from './Navbar';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='navbar_wrap'>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
