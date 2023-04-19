import React from 'react';
import './pageHeader.css';

const PageHeader = ({ label, descr }) => {
  return (
    <div className="pageHeaderSection">
      <div className="pageHeader">
        {label}
      </div>
      {descr ? <div className="pageHeaderDescription">
        {descr}
      </div> : null}
    </div>
  )
}

export default PageHeader