import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, threshold, descr, setShowingHeader, short, img }) => {

  const [inView, setInView] = useState(false);

  const updateInView = (newInView) => {
    setInView(newInView);
    if (setShowingHeader != null) {
      setShowingHeader(newInView)
    }
  }

  return (
    <ScrollObserver threshold={threshold != null ? threshold : (short ? 0.2 : 1)} onInViewChange={updateInView}>
      <div className={'pageHeaderSection' + (inView ? ' showHeader' : '') + (short ? ' shortHeaderSection' : '')}>
        {img ?
        <div className={'pageHeaderImageWrapper'}>
          <div className={'pageHeaderImageContainer'}>
            <img className={'pageHeaderImage'} src={img.img} alt={img.alt} />
          </div>
        </div> :
        null
        }
        <div className={'pageHeaderTextContainer' + (img ? ' hasImage' : '')}>
          <div className="pageHeader">
            {label}
          </div>
          {descr ? <div className="pageHeaderDescription">
            {descr}
          </div> : null}
        </div>
      </div>
    </ScrollObserver>
  )
}

export default PageHeader