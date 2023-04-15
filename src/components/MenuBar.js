import React from 'react';
import MenuItem from './MenuItem';
import './styles/header.css';

const MenuBar = () => {
  return (
    <div className={'menuBar'}>
        <MenuItem label={'Home'}/>
    </div>
  )
}

export default MenuBar