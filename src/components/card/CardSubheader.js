import React from 'react';
import './card.css';

const CardSubheader = ({ children, className }) => {
  return (
    <div className={'cardSubheader' + (className ? ' ' + className : '')}>{children}</div>
  )
}

export default CardSubheader