import Link from 'next/link';

import './styles/notFound.css';

export default function NotFound() {
  return (
    <div className='not_found_wrap u-container flex flex-col items-center justify-center'>
      <p className='u-text-style-large'>( ˶°ㅁ°) !!</p>
      <h2 className='u-text-style-h2 mt-8 mb-2'>404</h2>
      <p className='mb-5'>Page not found</p>
      <Link
        style={{
          color: 'var(--color--brand-main)',
          textDecoration: 'underline',
        }}
        href='/'
      >
        Return Home
      </Link>
    </div>
  );
}
