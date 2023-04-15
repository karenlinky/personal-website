import React from 'react';
import './header.css';

const MenuItem = (props) => {
  return (
    <div className={'menuItem'}>
        {props.label}
    </div>
  )
}

export default MenuItem