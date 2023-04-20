import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './gallery.css';

const GalleryImage = ({ children, threshold, onInViewChange }) => {

    const { ref, inView } = useInView({threshold: 0});

    useEffect(() => {
        if (onInViewChange != null) {
            onInViewChange(inView);
        }
    }, [inView, onInViewChange]);

    return (
        <div ref={ref} className={'galleryImage' + (inView === false ? ' hideGalleryContainer' : ' showGalleryImage')}>
            {children}
        </div>
    )
}

export default GalleryImage