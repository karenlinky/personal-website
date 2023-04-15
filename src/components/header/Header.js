import React from 'react';
import MenuBar from './MenuBar';
import MenuList from './MenuList';
import './header.css';

const Header = () => {
  return (
    <>
      <div className={'headerBar wideHeaderBar'}>
          <MenuBar />
      </div>
      <div className={'headerBar narrowHeaderBar'}>
          <MenuList />
      </div>
    </>
  )
}

export default Header