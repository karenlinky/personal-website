import React, { useCallback, useState } from 'react'
import { FaBars } from "react-icons/fa";
import MenuListItem from './MenuListItem';
import './header.css';

const MenuList = () => {
  const [showMenuList, setShowMenuList] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenuList(!showMenuList)
  }, [showMenuList, setShowMenuList])

  return (
    <div className={'narrowMenuContainer' + (showMenuList ? ' showNarrowMenuContainer' :  ' hideNarrowMenuContainer')}>
        <FaBars onClick={toggleMenu} className={'menuIcon'}/>
        <div className={'narrowMenuScrollable'}>
          <div className={'narrowMenuList' + (showMenuList ? ' showNarrowMenuList' :  ' hideNarrowMenuList')}>
            <MenuListItem label={'Home'} to={'/home'}/>
            <MenuListItem label={'Work Experiences'} to={'/work_experiences'}/>
            <MenuListItem label={'Projects'} to={'projects'}/>
            <MenuListItem label={'UI Design'} to={'ui_design'}/>
            <MenuListItem label={'3D Modeling'} to={'3d_modeling'}/>
          </div>
        </div>
    </div>
  )
}

export default MenuList