import React from 'react';
import CardPrimaryText from '../card/CardPrimaryText';
import WorkExperienceCard from './WorkExperienceCard';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ListItem2 from '../listItems/ListItem2';

const SnapExperienceCard = ({ openNum, experienceNum, onCardClick }) => {
  const company = 'Snap Inc.';
  const position = 'Software Engineer';
  const location = 'Santa Monica, CA, US';
  const dateRange = '2024 Feb - Present';
  const description = <div>
    <div><Chip>Kotlin</Chip><Chip>Java</Chip><Chip>Dagger Injection</Chip><Chip>XML</Chip><Chip>mvvm</Chip><Chip>OOP</Chip></div>
    <ListItem1>Improved users' login/signup experience</ListItem1>
    <ListItem1>Integrated the Snapchat app with the <CardPrimaryText>Phone-Parsing Service</CardPrimaryText></ListItem1>
    <ListItem2>Increased the number of login (with phone) success <CardPrimaryText>by 1.41%</CardPrimaryText></ListItem2>
    <ListItem2>Reduced the number of login (with phone) failure <CardPrimaryText>by 13.99%</CardPrimaryText></ListItem2>
    <ListItem1>Developing the <CardPrimaryText>Username Assisted Quick Login</CardPrimaryText> feature</ListItem1>
    <ListItem2>Increased the number of app-openings <CardPrimaryText>by 0.16%</CardPrimaryText></ListItem2>
    <ListItem2>Increased total time spent on the app <CardPrimaryText>by 0.57%</CardPrimaryText></ListItem2>
    <ListItem1>Used <CardPrimaryText>GRPC Status Code</CardPrimaryText> to determine network connectivity, and set whether an error is a retryable error accordingly</ListItem1>
    <ListItem2>Increased the number of app-openings <CardPrimaryText>by 4.32%</CardPrimaryText></ListItem2>
    <ListItem2>Increased the number of app-openings by previoiusly non-active users <CardPrimaryText>by 7.64%</CardPrimaryText></ListItem2>
    <ListItem2>Increased the number of snap save <CardPrimaryText>by 9.13%</CardPrimaryText></ListItem2>
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
        onCardClick={onCardClick} />
  )
}

export default SnapExperienceCard