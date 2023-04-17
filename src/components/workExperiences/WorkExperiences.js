import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import HeaderSpace from '../header/HeaderSpace';
import Separator from '../sectionSeparator/Separator';
import MetaExperienceCard from './MetaExperienceCard';
import '../content/content.css';

const WorkExperiences = () => {
  return (
    <div className={'fullPageBody'}>
      <ResponsivePage>
        <HeaderSpace />
        <PageHeader label={'Work Experiences'} />
        <MetaExperienceCard />
        <Separator margin={'25'} />
        <MetaExperienceCard />
        <Separator margin={'25'} />
        <MetaExperienceCard />
        <Separator margin={'25'} />
        <MetaExperienceCard />
      </ResponsivePage>
    </div>
  )
}

export default WorkExperiences