import { useEffect, useState } from "react";

const useInView = (options) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        }
      }, options);

      observer.observe(ref);

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }
  }, [ref, options, hasAnimated]);

  return [setRef, inView];
};

export default useInView;
