import React from 'react';
import './gallery.css';

const Gallery = ({ children }) => {
  return (
    <div className={'galleryContainer'}>
      <div className={'gallery'}>{children}</div>
    </div>
  )
}

export default Gallery