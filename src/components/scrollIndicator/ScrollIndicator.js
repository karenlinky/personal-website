import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa'
import './scrollIndicator.css'

const ScrollIndicator = ({ showIndicator }) => {
  return (
    showIndicator ? <div className={'scrollIndicatorContainer'}><FaAngleDoubleDown className={'scrollIndicator'}/></div> : null
  )
}

export default ScrollIndicator