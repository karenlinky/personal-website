import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, threshold, descr, setShowingHeader, short, img, shortTopPadding }) => {

  const [inView, setInView] = useState(false);

  const updateInView = (newInView) => {
    setInView(newInView);
    if (setShowingHeader != null) {
      setShowingHeader(newInView)
    }
  }

  return (
    <>
      <div className={'pageHeaderSection' + (inView ? ' showHeader' : '') + (short ? ' shortHeaderSection' : '') + (shortTopPadding ? ' shortTopPadding' : '')}>
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
            <ScrollObserver threshold={threshold != null ? threshold : (short ? 0.2 : 1)} onInViewChange={updateInView}>
              {label}
            </ScrollObserver>
          </div>
          {descr ? <div className="pageHeaderDescription">
            {descr}
          </div> : null}
        </div>
      </div>
    </>
  )
}

export default PageHeader