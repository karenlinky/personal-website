import React from 'react';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardSubheader from '../card/CardSubheader';

const WorkExperienceCard = ({ company, position, location, dateRange, description, openNum, experienceNum, onCardClick, delay }) => {
  return (
    <Card
        className={'workExperiencesCard'}
        cardContentClassName={'workExperiencesContent'}
        expandableContent={description}
        openNum={openNum}
        experienceNum={experienceNum}
        onCardClick={onCardClick}
        delay={delay}>
        <CardHeader>{company}, {position}</CardHeader>
        <CardSubheader>{location}</CardSubheader>
        <CardSubheader>{dateRange}</CardSubheader>
    </Card>
  )
}

export default WorkExperienceCard