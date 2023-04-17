import React from 'react';
import './card.css';

const CardHeader = ({ children, className }) => {
  return (
    <div className={'cardHeader' + (className ? ' ' + className : '')}>{children}</div>
  )
}

export default CardHeader