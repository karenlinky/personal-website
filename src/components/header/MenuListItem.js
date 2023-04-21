import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const MenuListItem = ({ label, to, closeMenu }) => {
  return (
    <div onClick={closeMenu}><NavLink className={'menuListItem'} to={to} >{ label }</NavLink></div>
  )
}

export default MenuListItem