import React, { useCallback, useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import HeaderSpace from '../header/HeaderSpace';
import Separator from '../sectionSeparator/Separator';
import MetaExperienceCard from './MetaExperienceCard';
import Achievers1ExperienceCard from './Achievers1ExperienceCard';
import Achievers2ExperienceCard from './Achievers2ExperienceCard';
import KGSExperienceCard from './KGSExperienceCard copy';
import '../content/content.css';

const WorkExperiences = () => {

  const [openNum, setOpenNum] = useState('');

  const onCardClick = useCallback((newOpenNum) => {
    if (openNum === newOpenNum) {
      setOpenNum('');
    } else {
      setOpenNum(newOpenNum);
    }
  }, [openNum])

  return (
    <div className={'fullPageBody'}>
      <ResponsivePage>
        <HeaderSpace />
        <PageHeader label={'Work Experiences'} />
        <MetaExperienceCard openNum={openNum} experienceNum={3} onCardClick={onCardClick} />
        <Separator margin={'25'} />
        <Achievers2ExperienceCard openNum={openNum} experienceNum={2} onCardClick={onCardClick} />
        <Separator margin={'25'} />
        <Achievers1ExperienceCard openNum={openNum} experienceNum={1} onCardClick={onCardClick} />
        <Separator margin={'25'} />
        <KGSExperienceCard openNum={openNum} experienceNum={0} onCardClick={onCardClick} />
      </ResponsivePage>
    </div>
  )
}

export default WorkExperiences