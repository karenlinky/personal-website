import React from 'react';
import './button.css';
import '../../App.css';

const PrimaryButtonLink = ({label, className}) => {
  return (
    <button className={'primaryButton button' + (className ? " " + className : "")}>
      {label}
    </button>
  )
}

export default PrimaryButtonLink