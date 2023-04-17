import React from 'react';
import MenuItemText from './MenuItemText';
import { Link } from 'react-router-dom';
import './header.css';

const MenuItem = ({label, to}) => {
  return (
    <Link className={'menuItem'} to={to}>
      <MenuItemText label={label} />
    </Link>
  )
}

export default MenuItem