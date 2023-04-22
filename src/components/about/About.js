import React from 'react';
import PrimaryButton from '../buttons/PrimaryButtonLink';
import Separator from '../sectionSeparator/Separator';
import IconButtonGroup from '../iconButton/IconButtonGroup';
import AboutDescription from './AboutDescription';
import { NavLink } from 'react-router-dom';
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
            <NavLink to={'/about_me'}>
              <PrimaryButton className={'fadeIn'} label={'View Experience'}/>
            </NavLink>
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