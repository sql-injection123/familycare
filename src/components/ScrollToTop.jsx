import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop – scrolls window to top on every route change,
 * UNLESS the URL has a hash (e.g. /services#dental-implants),
 * in which case we let the browser / smooth-scroll logic handle it.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Give the page a short moment to render before scrolling to the element
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Element not yet in DOM – retry after a brief delay
        const timer = setTimeout(() => {
          const retryEl = document.getElementById(id);
          if (retryEl) retryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
