import React from 'react'
import './about.css';

const DescriptionLine = (props) => {
  return (
    <div className={'descriptionLine' + (props.lineNumber ? ' descriptionLine' + props.lineNumber : '')}>
      <div className={'descriptionContent'}>
        {props.content}
      </div>
    </div>
  )
}

export default DescriptionLine