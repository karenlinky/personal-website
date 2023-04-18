import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import ListItem1 from '../listItems/ListItem1';

const MetaExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const company = 'Meta';
  const position = 'SWE Intern';
  const location = 'Seattle, WA, US';
  const dateRange = '2022 May - 2022 Aug';
  const description = <div>
    <ListItem1>Used ReactJS and Hack to build new features</ListItem1>
    <ListItem1>Used ReactJS and Hack to build new featuresUsed ReactJS and Hack to build new featuresUsed ReactJS and Hack to build new featuresUsed ReactJS and Hack to build new features</ListItem1>
    <div>Built an alert inbox page using a new React component library</div>
    <div>Added a test-launch feature to the developer communication platform</div>
    <div>Added validations to restrict recipient type of a test-launch</div>
    <div>Added logic for message’s status check</div>
    <div>Designed the UI using Figma</div>
    <div>Added alert-template feature that allows users to create new alerts using templates</div>
  </div>;
    
  return (
    <WorkExperienceCard
        company={company}
        position={position}
        location={location}
        dateRange={dateRange}
        description={description}
        openNum={openNum}
        experienceNum={experienceNum}
        onCardClick={onCardClick}
        delay={delay} />
  )
}

export default MetaExperienceCard