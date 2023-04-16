import React from 'react';
import Header from '../header/Header';
import '../content/content.css';
import './about.css';

const About = () => {
  return (
    <>
        <Header />
        <div className={'fullPageBody'}>
          <div className={'aboutContent'}>
            <div className={'name nameLine1'}>
              KA YING
            </div>
            <div className={'name nameLine2'}>
              KAREN LIN
            </div>
          </div>
        </div>

    </>
  )
}

export default About