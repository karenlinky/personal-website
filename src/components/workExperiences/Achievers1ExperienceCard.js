import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

const Achievers1ExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const company = 'Achievers';
  const position = 'SWE Intern';
  const location = 'Toronto, ON, CA';
  const dateRange = '2021 Jan - 2021 Apr';
  const description = <div>
    <div>Used php to develop the backend of the Listen product
➢ Unit testing
➢ Allowed the application to switch between database port 
according to the SQL query being executed</div>
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

export default Achievers1ExperienceCard