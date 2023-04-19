import React from 'react';
import CardPrimaryText from '../card/CardPrimaryText';
import WorkExperienceCard from './WorkExperienceCard';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ListItem2 from '../listItems/ListItem2';

const MetaExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const company = 'Meta';
  const position = 'SWE Intern';
  const location = 'Seattle, WA, US';
  const dateRange = '2022 May - 2022 Aug';
  const description = <div>
    <div><Chip>ReactJS</Chip><Chip>Hack (PHP)</Chip></div>
    <ListItem1>Developed <CardPrimaryText>the frontend</CardPrimaryText> of the alert-inbox page of the developer platform</ListItem1>
    <ListItem2>Old library</ListItem2>
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