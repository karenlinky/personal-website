import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, descr, setShowingHeader }) => {

  const [inView, setInView] = useState(false);

  const updateInView = (newInView) => {
    setInView(newInView);
    setShowingHeader(newInView)
  }

  return (
    <ScrollObserver threshold={1} onInViewChange={updateInView}>
      <div className={'pageHeaderSection' + (inView ? ' showHeader' : '')}>
        <div className="pageHeader">
          {label}
        </div>
        {descr ? <div className="pageHeaderDescription">
          {descr}
        </div> : null}
      </div>
    </ScrollObserver>
  )
}

export default PageHeader