import React from 'react'
import '../../App.css';

const MenuItemText = (props) => {
  return (
    <div className={'notHighlightable'}>
        {props.label}
    </div>
  )
}

export default MenuItemText