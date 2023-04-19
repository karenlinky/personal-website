import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollIndicatorTracker = ({ children, threshold, onScrolledIn }) => {

  const { ref, inView, entry } = useInView({threshold: threshold})

  useEffect(() => {
      if (onScrolledIn == null) {
          return;
      }
      if (inView) {
        onScrolledIn();
      }
  }, [inView])

  return (
    <div ref={ref}>{children}</div>
  )
}

export default ScrollIndicatorTracker