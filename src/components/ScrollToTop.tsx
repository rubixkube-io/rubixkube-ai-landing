// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (): null => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait for DOM to be ready before scrolling
    const scrollTo = () => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Delay scroll slightly to ensure elements are rendered
    setTimeout(scrollTo, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
