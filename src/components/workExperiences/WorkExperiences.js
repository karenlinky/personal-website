import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import MetaExperienceCard from './MetaExperienceCard';

const WorkExperiences = () => {
  return (
    <ResponsivePage>
        <PageHeader label={'Work Experiences'}/>
        <MetaExperienceCard/>
    </ResponsivePage>
  )
}

export default WorkExperiences