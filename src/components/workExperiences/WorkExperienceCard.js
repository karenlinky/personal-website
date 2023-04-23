import React, { useState } from 'react';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import Card from '../card/Card';
import CardHeader from '../card/CardHeader';
import CardSubheader from '../card/CardSubheader';

const WorkExperienceCard = ({ company, position, location, dateRange, description, openNum, experienceNum, onCardClick }) => {

  const [inView, setInView] = useState(false)

  return (
    <ScrollObserver threshold={.2} onInViewChange={setInView}>
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
    </ScrollObserver>
  )
}

export default WorkExperienceCard