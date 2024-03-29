import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './modal.css'


const Modal = ({ children, show, hideModal }) => {
  return (
    show ? <div className={'modal'}>
        <div className={'modalOverlay'} onClick={hideModal} />
        <div className={'modalWrapper'} >
            <div className={'closeModalButton'}><FaTimes  onClick={hideModal} /></div>
            <div className={'modalContentWrapper'}>
              <div className={'modalContentContainer'}>
                {children}
              </div>
            </div>
        </div>
    </div> : null
  )
}

export default Modal