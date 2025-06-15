'use client';

import { useEffect, useState } from 'react';

export default function GridOverlay() {
  if (process.env.NODE_ENV !== 'development') return null;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const overlay = document.createElement('div');
    overlay.id = 'grid-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';

    // Parent wrapper with max-width and centered
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = 'var(--site--max-width, 90rem)';
    wrapper.style.width = '100%';
    wrapper.style.margin = '0 auto';
    wrapper.style.height = '100%';

    // Grid container INSIDE the wrapper
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(var(--site--column-count, 12), 1fr)`;
    container.style.gap = 'var(--site--gutter, 1.25rem)';
    container.style.height = '100%';
    container.style.marginInline = 'var(--site--margin, 1rem)';

    const colCount =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--site--column-count',
        ),
      ) || 12;

    for (let i = 0; i < colCount; i++) {
      const col = document.createElement('div');
      col.style.background = 'rgba(0, 128, 255, 0.2)';
      col.style.height = '100%';
      container.appendChild(col);
    }

    wrapper.appendChild(container);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    return () => {
      overlay.remove();
    };
  }, [isVisible]);

  return (
    <button
      onClick={() => setIsVisible((prev) => !prev)}
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 10000,
        padding: '0.5rem 1rem',
        background: 'rgba(0,0,0,0.7)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        fontSize: '0.875rem',
      }}
    >
      Toggle Grid
    </button>
  );
}
