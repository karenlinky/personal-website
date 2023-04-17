import React from 'react';
import './card.css';

const CardContent = ({ children, className }) => {
  return (
    <div className={'cardContent' + (className ? ' ' + className : '')}>{children}</div>
  )
}

export default CardContent