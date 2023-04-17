import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';

const Achievers1ExperienceCard = () => {
  const company = 'Achievers';
  const position = 'SWE Intern';
  const location = 'Toronto, ON, CA';
  const dateRange = '2021 Jan - 2021 Apr';
  const description = <div>
    <div>Used ReactJS and Hack to build new features</div>
    <div>Built an alert inbox page using a new React component library</div>
    <div>Added a test-launch feature to the developer communication platform</div>
    <div>Added validations to restrict recipient type of a test-launch</div>
    <div>Added logic for message’s status check</div>
    <div>Designed the UI using Figma</div>
    <div>Added alert-template feature that allows users to create new alerts using templates</div>
  </div>;
    
  return (
    <WorkExperienceCard company={company} position={position}location={location} dateRange={dateRange} description={description} />
  )
}

export default Achievers1ExperienceCard