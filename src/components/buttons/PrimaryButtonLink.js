import React from 'react';
import './button.css';
import '../../App.css';

const PrimaryButtonLink = ({label, href, className}) => {
  return (
    <a href={href}>
      <button className={'primaryButton button' + (className ? " " + className : "")}>
        {label}
      </button>
    </a>
  )
}

export default PrimaryButtonLink