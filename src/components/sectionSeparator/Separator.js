import React from 'react';
import './separator.css';

const Separator = ({ margin }) => {
  return (
    <div className={'separator' + margin} />
  )
}

export default Separator