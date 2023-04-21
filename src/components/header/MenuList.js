import React, { useCallback, useState } from 'react'
import { FaBars } from "react-icons/fa";
import MenuListItem from './MenuListItem';
import './header.css';

const MenuList = () => {
  const [showMenuList, setShowMenuList] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenuList(!showMenuList)
  }, [showMenuList, setShowMenuList]);

  const closeMenu = useCallback(() => {
    setShowMenuList(false);
  }, [setShowMenuList]);

  return (
    <div className={'narrowMenuContainer' + (showMenuList ? ' showNarrowMenuContainer' :  ' hideNarrowMenuContainer')}>
        <FaBars onClick={toggleMenu} className={'menuIcon'}/>
        <div className={'narrowMenuScrollable'}>
          <div className={'narrowMenuList' + (showMenuList ? ' showNarrowMenuList' :  ' hideNarrowMenuList')}>
            <MenuListItem closeMenu={closeMenu} label={'Home'} to={'/home'}/>
            <MenuListItem closeMenu={closeMenu} label={'Work Experiences'} to={'/work_experiences'}/>
            <MenuListItem closeMenu={closeMenu} label={'Projects'} to={'projects'}/>
            <MenuListItem closeMenu={closeMenu} label={'UI Design'} to={'ui_design'}/>
            <MenuListItem closeMenu={closeMenu} label={'3D Modeling'} to={'3d_modeling'}/>
          </div>
        </div>
    </div>
  )
}

export default MenuList