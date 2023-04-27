import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';
import '../../App.css';

const ButtonLink = ({label, to, secondary, external, addPadding, className}) => {
  return ( 
    external == null ? <NavLink to={to}>
      <button
      className={'primaryButton button' + (className ? " " + className : "") +
      (secondary ? ' secondary' : '') +
      (addPadding ? ' addPadding' : '')}>
        {label}
      </button>
    </NavLink> :
    <a href={to} target="_blank" 
    rel="noreferrer">
      <button
      className={'primaryButton button' + (className ? " " + className : "") +
      (secondary ? ' secondary' : '') +
      (addPadding ? ' addPadding' : '')}>
      {label}
      </button>
    </a>
  )
}

export default ButtonLink