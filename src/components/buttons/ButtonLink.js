import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';
import '../../App.css';

const ButtonLink = ({label, to, secondary, addPadding, className}) => {
  return ( 
    <NavLink to={to}>
      <button
      className={'primaryButton button' + (className ? " " + className : "") +
      (secondary ? ' secondary' : '') +
      (addPadding ? ' addPadding' : '')}>
        {label}
      </button>
    </NavLink>
  )
}

export default ButtonLink