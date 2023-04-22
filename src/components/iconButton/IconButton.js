import React from 'react';
import './iconButton.css';

const IconButton = ({children, to}) => {
  return (
    <a target={'_blank'} rel={'noreferrer'} href={to} className={'iconButtonLink'}>{children}</a>
  )
}

export default IconButton