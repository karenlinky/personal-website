import React from 'react';
import './iconButton.css';

const IconButton = ({children}) => {
  return (
    <div className={'iconButton'}>{children}</div>
  )
}

export default IconButton