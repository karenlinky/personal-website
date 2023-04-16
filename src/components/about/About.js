import React from 'react';
import Header from '../header/Header';
import '../../App.css'
import '../content/content.css';
import './about.css';

const About = () => {
  return (
    <>
        <Header />
        <div className={'fullPageBody'}>
          <div className={'aboutContent'}>
            <div className={'descriptionContainer'}>
              <div className={'name nameColor notHighlightable'}>
                KA YING
              </div>
              <div className={'name notHighlightable'}>
                  KAREN LIN
                </div>
              <div className={'nameDescriptionDivider'} />
              <div className={'description'}>
                Full stack engineer | Computer Science student at University of Waterloo
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default About