import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './gallery.css';

const GalleryImage = ({ children }) => {

    const { ref, inView } = useInView({threshold: 0.2})
    // useEffect(() => {
    //     onInViewChange(inView);
    // }, [inView, onInViewChange]);

    // return (
    //     <div ref={ref}>{children}</div>
    // )

    // const [inView, setInView] = useState(false);

    return (
        <div ref={ref} className={'galleryImage' + (inView ? ' showGalleryImage' : ' hideGalleryImage')}>
            {children}
        </div>
    )
}

export default GalleryImage