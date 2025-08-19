import Link from 'next/link';

import TinaVo from '../../../../public/images/icons/tina-vo.svg';
import SectionSpacing from '../SectionSpacing/SectionSpacing';
import './Footer.css';

export default function Footer() {
  return (
    <footer
      id='contact'
      className='footer_wrap flex flex-col items-start justify-between'
    >
      <SectionSpacing variant='small' />
      <div className='footer_contain u-container flex flex-col'>
        <div className='footer_layout flex flex-1 flex-col items-stretch justify-between'>
          <div className='footer_text_wrap grid auto-cols-fr'>
            <div className='footer_message_wrap flex flex-col items-start justify-between'>
              <div>
                <p className='u-text-style-large'>
                  Interested in collaborating on a project, have questions, or
                  just want to say hello? I&apos;d love to hear from you!
                </p>
              </div>
              <div>
                <Link
                  href={'mailto:tinavo.webdev@gmail.com'}
                  className='u-text-style-large'
                >
                  tinavo.webdev@gmail.com
                </Link>
              </div>
            </div>
            <div className='footer_acknowledgment_text flex flex-row justify-end'>
              <p className='u-text-style-small'>
                I would like to acknowledge the Wurundjeri people as the
                Traditional owners of the Kulin Nation on which I live and work.
                I pay my respects to Elders past, present and emerging, and
                acknowledge Aboriginal and Torres Strait Islanders as the first
                people of Australia.
              </p>
            </div>
          </div>
          <div className='footer_nav_wrap'>
            <div className='footer_links_wrap grid auto-cols-fr grid-cols-2'>
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
