'use client';

import { Turn as Hamburger } from 'hamburger-react';
import Link from 'next/link';

import { useNavbar } from '@/app/hooks/useNavbar';

import Dot from '../../../../public/images/icons/dot.svg';
import TinaVo from '../../../../public/images/icons/tina-vo.svg';
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
  const { isOpen, toggle, close } = useNavbar();

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
            toggled={isOpen}
            onToggle={toggle}
          />
        </div>
      </div>
      {isOpen ? (
        <div className='navbar_overlay is-mobile'>
          <nav className='navbar_menu_wrap is-mobile'>
            <ul className='navbar_list is-mobile flex-col items-center justify-between'>
              <li className='navbar_item_wrap is-mobile' onClick={close}>
                <Link href='/about'>
                  <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                    <Dot className='navbar_item_svg is-mobile' />
                    <p className='u-text-style-large'>About</p>
                  </div>
                </Link>
              </li>
              <li className='navbar_item_wrap is-mobile' onClick={close}>
                <Link href='/projects'>
                  <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                    <Dot className='navbar_item_svg is-mobile' />
                    <p className='u-text-style-large'>Projects</p>
                  </div>
                </Link>
              </li>
              <li className='navbar_item_wrap is-mobile' onClick={close}>
                <Link href='/'>
                  <div className='navbar_item_layout is-mobile u-container flex items-center justify-items-start'>
                    <Dot className='navbar_item_svg is-mobile' />
                    <p className='u-text-style-large'>Contact</p>
                  </div>
                </Link>
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
