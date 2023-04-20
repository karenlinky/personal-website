import React from 'react';
import './gallery.css';

const Gallery = ({ children }) => {
  return (
    <div className={'gallery'}>{children}</div>
  )
}

export default Gallery