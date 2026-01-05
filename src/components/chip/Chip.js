import React from 'react';
import './chip.css';

const Chip = ({ children }) => {
  return (
    <p className={'chip'}>{children}</p>
  )
}

export default Chip