import React from 'react';
import { FaLaptop } from 'react-icons/fa'
import './listItems.css';

const ListItem1 = ({ children, className }) => {
  return (
    <div className={'listItem1 listItem' + (className ? ' ' + className : '')}>
      <div className={'bulletPoint'}>
        <FaLaptop />
      </div>
      <div className={'listItemContent'}>
        {children}
      </div>
    </div>
  )
}

export default ListItem1