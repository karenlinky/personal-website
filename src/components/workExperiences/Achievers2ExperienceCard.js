import React from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import ListItem1 from '../listItems/ListItem1';
import ListItem2 from '../listItems/ListItem2';
import Chip from '../chip/Chip';
import Separator from '../sectionSeparator/Separator';
import CardPrimaryText from '../card/CardPrimaryText';

const Achievers2ExperienceCard = ({ openNum, experienceNum, onCardClick, delay }) => {
  const margin = <Separator margin={'25'} />;
  const company = 'Achievers';
  const position = 'SWE Intern';
  const location = 'Toronto, ON, CA';
  const dateRange = '2021 Sept - 2021 Dec';
  const description = <div>
    <div><Chip>ReactJS</Chip><Chip>SCSS</Chip><Chip>Python</Chip></div>
    <ListItem1>Added <CardPrimaryText>user-input validation</CardPrimaryText> for announcement form</ListItem1>
    <ListItem2>Used <CardPrimaryText>Formik</CardPrimaryText> and <CardPrimaryText>Yup</CardPrimaryText> to validate user-input on the frontend</ListItem2>
    <ListItem2>Wrote a class to <CardPrimaryText>validate request data</CardPrimaryText> received on the backend</ListItem2>
    <ListItem1>Added styling to images</ListItem1>
    <ListItem2>Created a <CardPrimaryText>blurred</CardPrimaryText> copy of an image, <CardPrimaryText>proportionally enlarged</CardPrimaryText> it, and utilized it as a background</ListItem2>
    <ListItem2>Put the original image on top of the blurried image</ListItem2>
    <ListItem1>Fixed <CardPrimaryText>frontend</CardPrimaryText> and <CardPrimaryText>backend</CardPrimaryText> bugs</ListItem1>
    <ListItem2>Made the UI more <CardPrimaryText>responsive</CardPrimaryText> by removing unwanted white spaces according to the screensize</ListItem2>
    <ListItem2>Fixed <CardPrimaryText>permission issue</CardPrimaryText></ListItem2>
    <ListItem2>Fixed bug occurred while fetching data from GCS</ListItem2>
    <ListItem1>Handled storing images</ListItem1>
    <ListItem2>Wrote scripts to <CardPrimaryText>scale</CardPrimaryText> and <CardPrimaryText>crop</CardPrimaryText> images/GIFs, and upload them to a <CardPrimaryText>GCS bucket</CardPrimaryText></ListItem2>
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