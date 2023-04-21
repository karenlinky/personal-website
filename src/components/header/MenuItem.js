import React from 'react';
import MenuItemText from './MenuItemText';
import { NavLink } from 'react-router-dom';
import './header.css';

const MenuItem = ({label, to}) => {
  return (
    <NavLink className={'menuItem'} to={to}>
      <MenuItemText label={label} />
    </NavLink>
  )
}

export default MenuItem