import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Re-trigger reveal animations if needed
    window.dispatchEvent(new Event('scroll'));
  }, [pathname]);

  return null;
};

export default ScrollToTop;
