import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const MenuListItem = ({ label, to }) => {
  return (
    <NavLink className={'menuListItem'} to={to} >{ label }</NavLink>
  )
}

export default MenuListItem