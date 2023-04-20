import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardSubheader from '../card/CardSubheader';

const WorkExperienceCard = ({ company, position, location, dateRange, description, openNum, experienceNum, onCardClick }) => {

  const { ref, inView } = useInView({threshold: 0.5})

  return (
    <div ref={ref}>
      <Card
          className={'workExperiencesCard' + (inView ? '' : ' hideCard')}
          cardContentClassName={'workExperiencesContent'}
          expandableContent={description}
          openNum={openNum}
          experienceNum={experienceNum}
          onCardClick={onCardClick}>
          <CardHeader>{company}, {position}</CardHeader>
          <CardSubheader>{location}</CardSubheader>
          <CardSubheader>{dateRange}</CardSubheader>
      </Card>
    </div>
  )
}

export default WorkExperienceCard