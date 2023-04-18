import React/*, {useEffect, useState}*/ from 'react';
import DescriptionLine from './DescriptionLine';
import PrimaryButton from '../buttons/PrimaryButtonLink';
import Separator from '../sectionSeparator/Separator';
import IconButtonGroup from '../iconButton/IconButtonGroup';
import HeaderSpace from '../header/HeaderSpace';
import '../../App.css'
import '../content/content.css';
import './about.css';

// import Spline from '@splinetool/react-spline';

const About = () => {
  const descriptionStart = <>
    <span className={'descriptionPurple'}>{'const '}</span> 
    <span className={'descriptionBlue'}>{'me '}</span> 
    <span className={'descriptionRed'}>{'='}</ span> 
    {/* <span className={'descriptionGrey'}>{'() '}</span> 
    <span className={'descriptionRed'}>{'=> '}</span> 
    <span className={'descriptionGrey'}>{'('}</span>  */}
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

  // const [showAnimation, setShowAnimation] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setShowAnimation(true), 4500);
  // }, []);

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
            <div className={'descriptionContainer'}>
              <span className={'descriptionScrollableContainer'}>
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
              </span>
            </div>
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