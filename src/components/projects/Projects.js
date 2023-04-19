import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import HeaderSpace from '../header/HeaderSpace';

const Projects = () => {
  return (
    <div className={'fullPageBody'}>
      <ResponsivePage>
        <HeaderSpace />
        <PageHeader label={'Projects'} />
        <div>
        
        </div>
      </ResponsivePage>
    </div>
  )
}

export default Projects