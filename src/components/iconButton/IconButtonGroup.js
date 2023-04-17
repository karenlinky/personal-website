import React from 'react';
import IconButton from './IconButton';
import './iconButton.css';
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

const IconButtonGroup = () => {
  return (
    <>
    <IconButton><FaGithubSquare className={'iconButton'} /></IconButton>
    <IconButton><FaLinkedin className={'iconButton'} /></IconButton>
    <IconButton><FaEnvelopeSquare className={'iconButton'} /></IconButton>
    </>
  )
}

export default IconButtonGroup