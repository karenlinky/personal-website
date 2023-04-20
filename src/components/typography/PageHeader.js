import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, descr, setShowingHeader, short }) => {

  const [inView, setInView] = useState(false);

  const updateInView = (newInView) => {
    setInView(newInView);
    setShowingHeader(newInView)
  }

  return (
    <ScrollObserver threshold={short ? 0.2 : 1} onInViewChange={updateInView}>
      <div className={'pageHeaderSection' + (inView ? ' showHeader' : '') + (short ? ' shortHeaderSection' : '')}>
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