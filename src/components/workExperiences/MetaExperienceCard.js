import React from 'react';
import CardPrimaryText from '../card/CardPrimaryText';
import WorkExperienceCard from './WorkExperienceCard';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ListItem2 from '../listItems/ListItem2';

const MetaExperienceCard = ({ openNum, experienceNum, onCardClick }) => {
  const company = 'Meta';
  const position = 'SWE Intern';
  const location = 'Seattle, WA, US';
  const dateRange = '2022 May - 2022 Aug';
  const description = <div>
    <div><Chip>ReactJS</Chip><Chip>CSS</Chip><Chip>Hack (PHP)</Chip><Chip>UI Design</Chip><Chip>OOP</Chip></div>
    <ListItem1>Upgraded the alert-inbox page of the developer communication platform using a new <CardPrimaryText>React component</CardPrimaryText> library</ListItem1>
    <ListItem2>Increased <CardPrimaryText>consistency</CardPrimaryText> of the UI styling across the platform</ListItem2>
    <ListItem2>Enhanced the <CardPrimaryText>visual appeal</CardPrimaryText> of the webpage to align it better with the current UI design standards</ListItem2>
    <ListItem1>Developed the both the <CardPrimaryText>frontend</CardPrimaryText> and <CardPrimaryText>backend</CardPrimaryText> of the <CardPrimaryText>test-launch feature</CardPrimaryText> of the developer communication platform</ListItem1>
    <ListItem2>Allowed engineers and content designers to <CardPrimaryText>launch a message for testing purposes</CardPrimaryText> without getting content approvals</ListItem2>
    <ListItem2>Enhanced <CardPrimaryText>efficiency</CardPrimaryText> by preventing users from wasting time waiting for approval</ListItem2>
    <ListItem2>Added logic to <CardPrimaryText>validate and restrict</CardPrimaryText> the recipient type of a test-launch</ListItem2>
    <ListItem2>Designed the <CardPrimaryText>UI</CardPrimaryText> using <CardPrimaryText>Figma</CardPrimaryText></ListItem2>
    <ListItem1>Added the <CardPrimaryText>alert-template feature</CardPrimaryText> to the developer communication platform</ListItem1>
    <ListItem2>Allowed users to <CardPrimaryText>select a template from a dropdown</CardPrimaryText> and compose a message using the selected template</ListItem2>
    <ListItem2>Increased <CardPrimaryText>efficiency</CardPrimaryText> by sparing users from having to write a message from scratch</ListItem2>
  </div>;
  // const description = <div>
  //   <div><Chip>ReactJS</Chip><Chip>CSS</Chip><Chip>Hack (PHP)</Chip><Chip>UI Design</Chip></div>
  //   <ListItem1>Upgraded the alert-inbox page of the developer communication platform using a new React component library</ListItem1>
  //   <ListItem2>Increased consistency of the UI styling across the platform</ListItem2>
  //   <ListItem2>Enhanced the visual appeal of the webpage to align it better with the current UI design standards</ListItem2>
  //   <ListItem1>Developed the both the frontend and backend of the test-launch feature of the developer communication platform</ListItem1>
  //   <ListItem2>Allowed engineers and content designers to launch a message for testing purposes without getting content approvals</ListItem2>
  //   <ListItem2>Enhanced efficiency by preventing users from wasting time waiting for approval</ListItem2>
  //   <ListItem2>Added logic to validate and restrict the recipient type of a test-launch</ListItem2>
  //   <ListItem2>Designed the UI using Figma</ListItem2>
  //   <ListItem1>Added the alert-template feature to the developer communication platform</ListItem1>
  //   <ListItem2>Allowed users to select a template from a dropdown and compose a message using the selected template</ListItem2>
  //   <ListItem2>Increased efficiency by sparing users from having to write a message from scratch</ListItem2>
  // </div>;
    
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

export default MetaExperienceCard