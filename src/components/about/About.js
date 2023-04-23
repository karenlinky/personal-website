import React from 'react';
import ButtonLink from '../buttons/ButtonLink';
import Separator from '../sectionSeparator/Separator';
import IconButtonGroup from '../iconButton/IconButtonGroup';
import AboutDescription from './AboutDescription';
import '../../App.css'
import '../content/content.css';
import './about.css';

const About = () => {
  return (
    <>
      <div className={'fullPageBody'}>
        <div className={'aboutContent'}>
          <div className={'nameDescriptionContainer'}>
            <div className={'name notHighlightable'}>
              KA YING
            </div>
            <div className={'name notHighlightable'}>
                <span className={'nameColor'}>KAREN</span> LIN
                {/* KAREN LIN */}
            </div>
            <div className={'nameDescriptionDivider'} />
            <AboutDescription />
            <Separator margin={'75'} />
            <ButtonLink className={'fadeIn'} label={'About Me'} to={'/about_me'}/>
            <ButtonLink secondary addPadding className={'fadeIn'} label={'My Experiences'} to={'/work_experiences'}/>
          </div>
          <div className={'codeIconContainer'}>
            {/* {showAnimation ? <Spline scene="https://prod.spline.design/B9pJa24JBcb8CusO/scene.splinecode" /> : null} */}
          </div>
        </div>
      </div>

      {/* links */}
      <div className='icons'>
        <IconButtonGroup />
      </div>
    </>
  )
}

export default About