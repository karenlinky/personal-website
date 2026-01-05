import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const MenuItem = ({label, to}) => {
  return (
    <NavLink className={'menuItem notHighlightable'} to={to}>
      {label}
    </NavLink>
  )
}

export default MenuItem