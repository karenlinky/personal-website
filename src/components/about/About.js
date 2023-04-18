import React from 'react';
import PrimaryButton from '../buttons/PrimaryButtonLink';
import Separator from '../sectionSeparator/Separator';
import IconButtonGroup from '../iconButton/IconButtonGroup';
import HeaderSpace from '../header/HeaderSpace';
import AboutDescription from './AboutDescription';
import '../../App.css'
import '../content/content.css';
import './about.css';

const About = () => {
  return (
    <>
      <div className={'fullPageBody'}>
        <HeaderSpace />
        <div className={'aboutContent'}>
          <div className={'nameDescriptionContainer'}>
            <div className={'name notHighlightable'}>
              KA YING
            </div>
            <div className={'name notHighlightable'}>
                <span className={'nameColor'}>KAREN</span> LIN
            </div>
            <div className={'nameDescriptionDivider'} />
            <AboutDescription />
            <Separator margin={'75'} />
            <PrimaryButton className={'fadeIn'} label={'View Experience'} href={'/#'}/>
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