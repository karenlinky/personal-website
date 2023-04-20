import React, { useCallback, useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import Separator from '../sectionSeparator/Separator';
import ContentStartIndicator from '../misc/ContentStartIndicator';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import ScrollIndicatorTracker from '../scrollIndicator/ScrollIndicatorTracker';
import MetaExperienceCard from './MetaExperienceCard';
import Achievers1ExperienceCard from './Achievers1ExperienceCard';
import Achievers2ExperienceCard from './Achievers2ExperienceCard';
import KGSExperienceCard from './KGSExperienceCard';
import '../content/content.css';

const WorkExperiences = () => {
  const descr = <><div>I've had the opportunity to work with a variety of organizations.</div>
  <div>Each of which has helped me develop invaluable skills and experience. Here are a few highlights from my work experience.</div></>

  const [openNum, setOpenNum] = useState('');

  const onCardClick = useCallback((newOpenNum) => {
    if (openNum === newOpenNum) {
      setOpenNum('');
    } else {
      setOpenNum(newOpenNum);
    }
  }, [openNum])

  const [showIndicator, setShowIndicator] = useState(true);
  const hideIndicator = () => {
    setShowIndicator(false);
  }

  const experiencesId = 'experiences';

  const scrollDown = () => {
    const element = document.getElementById(experiencesId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={'fullPageBody'}>
      <ScrollIndicator showIndicator={showIndicator} onClick={scrollDown} />
      <ResponsivePage>
        <PageHeader label={'Work Experiences'} descr={descr}/>
        <div>
        <ContentStartIndicator id={experiencesId} />
        <ScrollIndicatorTracker threshold={.3} onScrolledIn={hideIndicator}>
          <MetaExperienceCard openNum={openNum} experienceNum={3} onCardClick={onCardClick} />
        </ScrollIndicatorTracker>
        <Separator margin={'25'} />
        <Achievers2ExperienceCard openNum={openNum} experienceNum={2} onCardClick={onCardClick} />
        <Separator margin={'25'} />
        <Achievers1ExperienceCard openNum={openNum} experienceNum={1} onCardClick={onCardClick} />
        <Separator margin={'25'} />
        <KGSExperienceCard openNum={openNum} experienceNum={0} onCardClick={onCardClick} />
        </div>
      </ResponsivePage>
    </div>
  )
}

export default WorkExperiences