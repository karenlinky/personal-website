import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, descr }) => {

  const [inView, setInView] = useState(false);

  return (
    <ScrollObserver threshold={.5} onInViewChange={setInView}>
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