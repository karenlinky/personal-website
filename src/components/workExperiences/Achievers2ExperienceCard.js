import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import Separator from '../sectionSeparator/Separator';

const Achievers2ExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const margin = <Separator margin={'25'} />;
  const company = 'Achievers';
  const position = 'SWE Intern';
  const location = 'Toronto, ON, CA';
  const dateRange = '2021 Sept - 2021 Dec';
  const description = <div>
    <div>Used ReactJS, scss to develop the frontend
➢ Used Formik and Yup to validate user-input
➢ Place a larger and blurried copy of an image/GIF behind the 
original image
➢ Fixed styling bugs
 Used python to develop the backend
➢ Wrote a class to validate request data
➢ Wrote scripts to crop image/GIFs size, and upload them to 
a GCS bucket
➢ Fixed bug occurred while fetching data from GCS
 Used Kubernetes commands to help debugging</div>
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

export default Achievers2ExperienceCard