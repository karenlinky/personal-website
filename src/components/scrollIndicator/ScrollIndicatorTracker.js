import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollIndicatorTracker = ({ children, threshold, onInViewChange }) => {

  const { ref, inView } = useInView({threshold: threshold})

  useEffect(() => {
      if (onInViewChange == null) {
          return;
      }
      onInViewChange(inView);
  }, [inView, onInViewChange])

  return (
    <div ref={ref}>{children}</div>
  )
}

export default ScrollIndicatorTracker