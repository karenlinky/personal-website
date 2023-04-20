import React from 'react';
import { useInView } from 'react-intersection-observer';
import './pageHeader.css';

const PageHeader = ({ label, descr }) => {

  const { ref, inView } = useInView({threshold: 0.5})

  return (
    <div ref={ref} className={'pageHeaderSection' + (inView ? ' showHeader' : '')}>
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