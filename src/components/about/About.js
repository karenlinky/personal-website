import React from 'react';
import Header from '../header/Header';
import DescriptionLine from './DescriptionLine';
import '../../App.css'
import '../content/content.css';
import './about.css';

import Spline from '@splinetool/react-spline';

const About = () => {
  const descriptionStart = <>
    <span className={'descriptionPurple'}>{'const '}</span> 
    <span className={'descriptionBlue'}>{'me '}</span> 
    <span className={'descriptionRed'}>{'= '}</ span> 
    <span className={'descriptionGrey'}>{'() '}</span> 
    <span className={'descriptionRed'}>{'=> '}</span> 
    <span className={'descriptionGrey'}>{'('}</span> 
  </>

  const descriptionTag = <>
    <span className={'descriptionGrey'}>{'<'}</span> 
    <span className={'descriptionYellow'}>{'FullStackEngineer'}</span> 
  </>

  const descriptionSchool = <>
    <span className={'descriptionPurple'}>{'school'}</span>
    <span className={'descriptionGrey'}>{'='}</span>
    <span className={'descriptionGreen'}>{'\'University of Waterloo\''}</span> 
  </>

  const descriptionMajor = <>
    <span className={'descriptionPurple'}>{'major'}</span>
    <span className={'descriptionGrey'}>{'='}</span>
    <span className={'descriptionGreen'}>{'\'Computer Science\''}</span> 
  </>

  const descriptionGradDate = <>
    <span className={'descriptionPurple'}>{'gradDate'}</span>
    <span className={'descriptionGrey'}>{'='}</span>
    <span className={'descriptionGreen'}>{'\'2023 Apr\''}</span>
    <span className={'descriptionGrey'}>{' />'}</span> 
  </>

  const descriptionClosingBracket = <>
    <span className={'descriptionGrey'}>{');'}</span> 
  </>

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
                <DescriptionLine lineNumber={'1'} content={descriptionStart} />
                <div className={'descriptionIndented'}>
                  <DescriptionLine lineNumber={'2'} content={descriptionTag} />
                  <div className={'descriptionIndented'}>
                    <DescriptionLine lineNumber={'3'} content={descriptionSchool} />
                    <DescriptionLine lineNumber={'4'} content={descriptionMajor} />
                    <DescriptionLine lineNumber={'5'} content={descriptionGradDate}/>
                  </div>
                </div>
                <DescriptionLine lineNumber={'6'} content={descriptionClosingBracket} />
              </div>
            </div>
          </div>
          <div className={'codeIconContainer'}>
            {/* <Spline scene="https://prod.spline.design/FfFeAoRvCnDSswQo/scene.splinecode" /> */}
            <Spline scene="https://prod.spline.design/vy4gA9KFEQJRvbPs/scene.splinecode" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About