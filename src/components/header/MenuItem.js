import React from 'react';
import MenuItemText from './MenuItemText';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './header.css';

const MenuItem = ({label, to}) => {
  

// {/* <NavLink to='about' activeClassName="active">about</NavLink> */}
  return (
    <NavLink className={'menuItem'} to={to}>
      <MenuItemText label={label} />
    </NavLink>
  )
}

export default MenuItem