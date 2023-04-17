import React from 'react';
import './card.css';

const Card = ({ children, className, expandableContent }) => {

  var additionalClassName = "";
  if (expandableContent !== null) {
    additionalClassName = " expandable"
  }

  return (
    <div className={'card' + additionalClassName + (className ? ' ' + className : '')}>{children}</div>
  )
}

export default Card