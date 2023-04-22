import React from 'react';
import './misc.css';

const ContentStartIndicator = ({ id, lessSpace }) => {
  return (
    <div id={id} className={'topOfContent' + (lessSpace ? ' lessSpaceTopOfContent' : '')}/>
  )
}

export default ContentStartIndicator