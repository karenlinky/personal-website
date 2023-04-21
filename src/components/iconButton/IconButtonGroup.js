import React from 'react';
import IconButton from './IconButton';
import './iconButton.css';
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

const IconButtonGroup = () => {
  return (
    <>
    <IconButton to={'https://github.com/karenlinky'}><FaGithubSquare className={'iconButton'} /></IconButton>
    <IconButton to={'https://www.linkedin.com/in/karenlinky/'} ><FaLinkedin className={'iconButton'} /></IconButton>
    <IconButton to={'mailto: kyklin@uwaterloo.ca'}><FaEnvelopeSquare className={'iconButton'} /></IconButton>
    </>
  )
}

export default IconButtonGroup