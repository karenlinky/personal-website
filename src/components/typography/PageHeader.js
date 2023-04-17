import React from 'react';
import './pageHeader.css';

const PageHeader = ({ label }) => {
  return (
    <div className="pageHeader">{label}</div>
  )
}

export default PageHeader