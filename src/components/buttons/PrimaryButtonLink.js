import React from 'react';
import './button.css';

const PrimaryButtonLink = ({label, href}) => {
  return (
    <a href={href}>
      <button className={'primaryButton button'}>
        {label}
      </button>
    </a>
  )
}

export default PrimaryButtonLink