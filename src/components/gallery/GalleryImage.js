import React from 'react';
import './gallery.css';

const GalleryImage = ({ children }) => {
  return (
    <div className={'galleryImage'}>{children}</div>
  )
}

export default GalleryImage