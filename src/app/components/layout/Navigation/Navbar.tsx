'use client';

import { Turn as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

import Dot from '../../../../../public/images/icons/dot.svg';
import TinaVo from '../../../../../public/images/icons/tina-vo.svg';

import './Navbar.css';

export const NavbarDesktop = () => {
  return (
    <div className='navbar is-desktop'>
      <div className='navbar_contain u-container'>
        <div className='navbar_layout flex items-center justify-between'>
          <Link href='/'>
            <TinaVo className='navbar_brand_svg' />
          </Link>

          <nav className='navbar_menu_wrap'>
            <ul className='navbar_list flex items-center justify-between'>
              <li className='navbar_item_wrap flex items-center justify-items-start'>
                <Dot className='navbar_item_svg' />
                <Link href='/about'>About</Link>
              </li>
              <li className='navbar_item_wrap flex items-center justify-items-start'>
                <Dot className='navbar_item_svg' />
                <Link href='/projects'>Projects</Link>
              </li>
              <li className='navbar_item_wrap flex items-center justify-items-start'>
                <Dot className='navbar_item_svg' />
                <Link href='/'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOnToggleMenu = (toggled: boolean) => {
    setMenuOpen(toggled);
  };

  return (
    <div className='navbar is-mobile'>
      <div className='navbar_contain u-container'>
        <div className='navbar_layout flex items-center justify-between'>
          <Link href='/'>
            <TinaVo className='navbar_brand_svg' />
          </Link>

          <Hamburger
            label='Show menu'
            rounded={true}
            onToggle={handleOnToggleMenu}
          />
        </div>
      </div>
      {menuOpen ? (
        <div className='navbar_overlay is-mobile'>
          <nav className='navbar_menu_wrap is-mobile'>
            <ul className='navbar_list is-mobile flex-col items-center justify-between'>
              <li className='navbar_item_wrap is-mobile'>
                <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                  <Dot className='navbar_item_svg is-mobile' />
                  <Link className='u-text-style-large' href='/about'>
                    About
                  </Link>
                </div>
              </li>
              <li className='navbar_item_wrap is-mobile'>
                <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                  <Dot className='navbar_item_svg is-mobile' />
                  <Link className='u-text-style-large' href='/projects'>
                    Projects
                  </Link>
                </div>
              </li>
              <li className='navbar_item_wrap is-mobile'>
                <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                  <Dot className='navbar_item_svg is-mobile' />
                  <Link className='u-text-style-large' href='/'>
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
