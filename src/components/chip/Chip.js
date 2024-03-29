import React from 'react';
import './chip.css';

const Chip = ({ children }) => {
  return (
    <div className={'chip'}>{children}</div>
  )
}

export default Chip