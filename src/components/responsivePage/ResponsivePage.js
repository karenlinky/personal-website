import React from 'react';
import './responsivePage.css';

const ResponsivePage = ({ children }) => {
  return (
    <div className={'responsivePage'}>{children}</div>
  )
}

export default ResponsivePage