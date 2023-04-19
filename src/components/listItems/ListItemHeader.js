import React from 'react';
import './listItems.css';

const ListItemHeader = ({ children }) => {
  return (
    <div className={'listItemHeader'}>{children}</div>
  )
}

export default ListItemHeader