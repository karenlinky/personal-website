import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';
import '../../App.css';

const PrimaryButtonLink = ({label, className}) => {
  return ( 
    <NavLink to={'/about_me'}>
      <button className={'primaryButton button' + (className ? " " + className : "")}>
        {label}
      </button>
    </NavLink>
  )
}

export default PrimaryButtonLink