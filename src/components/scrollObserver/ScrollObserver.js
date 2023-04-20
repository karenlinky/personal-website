import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const ScrollObserver = ({ threshold, onInViewChange, children }) => {

    const { ref, inView } = useInView({threshold: threshold})
    useEffect(() => {
        onInViewChange(inView);
    }, [inView, onInViewChange]);

    return (
        <div ref={ref}>{children}</div>
    )
}

export default ScrollObserver