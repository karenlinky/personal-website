import React from 'react'
import './about.css';

const DescriptionLine = (props) => {
  return (
    <div className={'descriptionLine' + (props.lineNumber ? ' descriptionLine' + props.lineNumber : '')}>{props.content}</div>
  )
}

export default DescriptionLine