import React from 'react';
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
  return (
    <div className={'fullPageBody'}>
      <ResponsivePage>
        <HeaderSpace />
        <PageHeader label={'Work Experiences'} />
        <MetaExperienceCard />
        <Separator margin={'25'} />
        <Achievers2ExperienceCard />
        <Separator margin={'25'} />
        <Achievers1ExperienceCard />
        <Separator margin={'25'} />
        <KGSExperienceCard />
      </ResponsivePage>
    </div>
  )
}

export default WorkExperiences