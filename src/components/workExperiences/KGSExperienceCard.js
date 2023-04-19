import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import ListItem1 from '../listItems/ListItem1';
import ListItem2 from '../listItems/ListItem2';
import Chip from '../chip/Chip';
import CardPrimaryText from '../card/CardPrimaryText';

const KGSExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const company = 'KGS Research';
  const position = 'Programmer (Internship)';
  const location = 'Scarborough, ON, CA';
  const dateRange = '2020 Jan - 2020 Aug';
  const description = <div>
  <div><Chip>JavaScript</Chip><Chip>HTML</Chip></div>
  <ListItem1>Programmed and set up surveys before launching</ListItem1>
  <ListItem2>Used HTML tags to <CardPrimaryText>format question text</CardPrimaryText></ListItem2>
  <ListItem2>Handled <CardPrimaryText>skip logic</CardPrimaryText> using conditional statements</ListItem2>
  <ListItem1>Wrote scripts to <CardPrimaryText>randomize answer options</CardPrimaryText> with a specific arrangement</ListItem1>
  <ListItem1>Wrote scripts to <CardPrimaryText>validate</CardPrimaryText> participants' responses</ListItem1>
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

export default KGSExperienceCard