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
            <div className={'nameDescriptionContainer'}>
              <div className={'name nameColor notHighlightable'}>
                KA YING
              </div>
              <div className={'name notHighlightable'}>
                  KAREN LIN
                </div>
              <div className={'nameDescriptionDivider'} />
              <div className={'descriptionContainer'}>
              <div className={'description'}>
                  {'const me = () => ('}
                  <div className={'descriptionIndented'}>
                    {'<Full stack engineer'}<br/>
                    <div className={'descriptionIndented'}>
                      {'school=\'University of Waterloo\''}<br />
                      {'major=\'Computer Science\''}<br />
                      {'expectedGradDate=\'2023 Apr\' />'}<br />
                    </div>
                  </div>
                  {');'}
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default About