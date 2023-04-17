import React from 'react';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardSubheader from '../card/CardSubheader';

const WorkExperienceCard = ({ company, position, location, dateRange, description}) => {
  return (
    <Card className={'workExperiencesCard'} cardContentClassName={'workExperiencesContent'} expandableContent={description}>
        <CardHeader>{company}, {position}</CardHeader>
        <CardSubheader>{location}</CardSubheader>
        <CardSubheader>{dateRange}</CardSubheader>
    </Card>
  )
}

export default WorkExperienceCard