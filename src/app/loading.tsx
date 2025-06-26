'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div>
      <div
        style={{ height: '100vh' }}
        className='u-container flex items-center justify-center'
      >
        <div style={{ width: '100px' }}>
          <DotLottieReact src='/images/loading.lottie' loop autoplay />
        </div>
      </div>
    </div>
  );
}
