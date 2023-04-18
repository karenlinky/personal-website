import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'
import './listItems.css';

const ListItem2 = ({ children }) => {
  return (
    <div className={'listItem2 listItem'}>
      <div className={'bulletPoint'}>
        <FaLocationArrow />
      </div>
      <div className={'listItemContent'}>
        {children}
      </div>
    </div>
  )
}

export default ListItem2