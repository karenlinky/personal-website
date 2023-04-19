import React from 'react';
import { FaLaptop } from 'react-icons/fa'
import './listItems.css';

const ListItem1 = ({ children }) => {
  return (
    <div className={'listItem1 listItem'}>
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