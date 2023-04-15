import React from 'react';
import MenuItemText from './MenuItemText';
import './header.css';

const MenuItem = (props) => {
  return (
    <div className={'menuItem'}>
      <MenuItemText label={props.label} />
    </div>
  )
}

export default MenuItem