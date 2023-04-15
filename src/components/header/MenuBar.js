import React from 'react';
import MenuItem from './MenuItem';
import './header.css';

const MenuBar = () => {
  return (
    <div className={'menuBar'}>
        <MenuItem label={'Home'}/>
        <MenuItem label={'Work Experience'}/>
        <MenuItem label={'Projects'}/>
        <MenuItem label={'UI Design'}/>
        <MenuItem label={'3D Modelling'}/>
    </div>
  )
}

export default MenuBar