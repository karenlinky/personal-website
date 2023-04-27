import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './gallery.css';

const Gallery = ({ children }) => {

  const { ref, inView } = useInView({threshold: 0.1});

  return (
    <div ref={ref} className={'galleryContainer' + (inView === false ? ' hideGalleryContainer' : ' showGalleryContainer')}>
      <div className={'gallery'}>{children}</div>
    </div>
  )
}

export default Gallery