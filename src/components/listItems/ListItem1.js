import React from 'react';
import { FaLaptopCode } from 'react-icons/fa'
import './listItems.css';

const ListItem1 = ({ children }) => {
  return (
    <div className={'listItem1 listItem'}>
      <div className={'bulletPoint'}>
        <FaLaptopCode />
      </div>
      <div className={'listItemContent'}>
        {children}
      </div>
    </div>
  )
}

export default ListItem1