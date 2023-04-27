import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import './pageHeader.css';

const PageHeader = ({ label, threshold, descr, shortBottomPadding, img, aboutMe }) => {

  const [inView, setInView] = useState(false);
  const [descrInView, setDescrInView] = useState(false);

  const updateInView = (newInView) => {
    setInView(newInView);
  }

  const updateDescrInView = (newInView) => {
    setDescrInView(newInView);
  }

  return (
    <>
      <div className={'pageHeaderSection' +
      (inView || descrInView ? ' showHeader' : '') +
      (shortBottomPadding ? ' shortBottomPadding' : '') +
      (aboutMe ? ' aboutMe' : '')}>
        {img ?
        <div className={'pageHeaderImageWrapper'}>
          <div className={'pageHeaderImageContainer'}>
            <img className={'pageHeaderImage fadeIn'} src={img.img} alt={img.alt} />
          </div>
        </div> :
        null
        }
        <div className={'pageHeaderTextContainer' + (img ? ' hasImage' : '')}>
          <div className="pageHeader">
            <ScrollObserver threshold={threshold != null ? threshold : 0.2} onInViewChange={updateInView}>
              {label}
            </ScrollObserver>
          </div>
          {descr ? <div className="pageHeaderDescription">
            <ScrollObserver threshold={0} onInViewChange={updateDescrInView}>
              {descr}
            </ScrollObserver>
          </div> : null}
        </div>
      </div>
    </>
  )
}

export default PageHeader