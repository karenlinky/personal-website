import React from 'react';
import donut from '../../img/imageExample/donut2.jpg';
import './imageExample.css';

const ImageExample = () => {
  return (
    <div className={'imageWrapper'}>
      <div className={'imageExampleContainer'}>
          <img className={'image backgroundImage'} src={donut} alt={'donut'} />
          <img className={'image foregroundImage'} src={donut} alt={'donut'} />
      </div>
    </div>
  )
}

export default ImageExample