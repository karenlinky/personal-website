import React from 'react';
import './about.css';

const DescriptionLanguageButton = ({ children, onClick }) => {
  return (
    <div className={'languageButton'} onClick={onClick}>{children}</div>
  )
}

export default DescriptionLanguageButton