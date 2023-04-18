import React from 'react';
import './about.css';

const DescriptionLanguageButton = ({ children, selected, onClick }) => {
  return (
    <div className={'languageButton' + (selected ? ' selectedButton' : ' notSelectedButton')} onClick={onClick}>{children}</div>
  )
}

export default DescriptionLanguageButton