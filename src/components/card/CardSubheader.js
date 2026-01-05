import React from 'react';
import './card.css';

const CardSubheader = ({ children, className }) => {
  return (
    <h3 className={'cardSubheader' + (className ? ' ' + className : '')}>{children}</h3>
  )
}

export default CardSubheader