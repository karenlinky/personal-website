import React from 'react';
import './card.css';

const CardHeader = ({ children, className }) => {
  return (
    <h2 className={'cardHeader' + (className ? ' ' + className : '')}>{children}</h2>
  )
}

export default CardHeader