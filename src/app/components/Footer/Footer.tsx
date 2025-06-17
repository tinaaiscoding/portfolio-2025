import Link from 'next/link';

import TinaVo from '../../../../public/images/icons/tina-vo.svg';
import SectionSpacing from '../SectionSpacing/SectionSpacing';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer_wrap flex flex-col items-start justify-between'>
      <SectionSpacing variant='small' />
      <div className='footer_contain u-container flex flex-col'>
        <div className='footer_layout flex flex-1 flex-col items-stretch justify-between'>
          <div className='footer_text_wrap flex flex-col items-start justify-between'>
            <div className='u-text-style-large'>
              <p>
                Interested in collaborating on a project, have questions, or
                just want to say hello? I'd love to hear from you!
              </p>
            </div>
            <div className='u-text-style-large'>
              <p>placeholder(at)gmail.com</p>
            </div>
          </div>
          <div className='footer_nav_wrap'>
            <div className='footer_links_wrap grid auto-cols-fr'>
              <ul className='footer_links_column flex flex-row items-start'>
                <li className='footer_links_item'>
                  <Link href='/' className='footer_links_link'>
                    Home
                  </Link>
                </li>
                <li className='footer_links_item'>
                  <Link href='/about' className='footer_links_link'>
                    About
                  </Link>
                </li>
                <li className='footer_links_item'>
                  <Link href='/projects' className='footer_links_link'>
                    Projects
                  </Link>
                </li>
              </ul>

              <ul className='footer_links_column footer_links_column flex flex-row items-end justify-end'>
                <li className='footer_links_item'>
                  <a
                    href='https://www.linkedin.com/in/tinanhivo'
                    target='_blank'
                    className='footer_links_link'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='footer_links_item'>
                  <a
                    href='https://github.com/tinaaiscoding'
                    target='_blank'
                    className='footer_links_link'
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer_svg_wrap'>
              <TinaVo className='footer_svg' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
