import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa'
import './scrollIndicator.css'

const ScrollIndicator = ({ showIndicator, onClick }) => {
    const onIndicatorClick = () => {
        if (onClick != null) {
            onClick();
        }
    }
  return (
    showIndicator ? <div className={'scrollIndicatorContainer'}><FaAngleDoubleDown onClick={onIndicatorClick} className={'scrollIndicator'}/></div> : null
  )
}

export default ScrollIndicator