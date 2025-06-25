// Check if container is MOBILE AND SMALLER
export const isMobileContainer = (section: HTMLElement): boolean => {
  const containerWidthPx = getComputedStyle(section).width;
  const rootFontSizePx = getComputedStyle(document.documentElement).fontSize;
  const containerWidthEm =
    parseFloat(containerWidthPx) / parseFloat(rootFontSizePx);
  return containerWidthEm <= 38;
};

// Check if container is SMALL TABLET AND SMALLER
export const isSmallContainer = (section: HTMLElement): boolean => {
  const containerWidthEm =
    parseFloat(getComputedStyle(section).width) /
    parseFloat(getComputedStyle(document.documentElement).fontSize);
  return containerWidthEm <= 48;
};

export function debouncedResizeListener(
  callback: () => void,
  delay: number = 300,
): () => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback();
    }, delay);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener('resize', handleResize);
  };
}
