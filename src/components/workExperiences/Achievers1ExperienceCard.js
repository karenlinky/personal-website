import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";
import ListItem1 from "../listItems/ListItem1";
import ListItem2 from "../listItems/ListItem2";
import Chip from "../chip/Chip";
import CardPrimaryText from "../card/CardPrimaryText";

const Achievers1ExperienceCard = ({ openNum, experienceNum, onCardClick }) => {
  const company = "Achievers";
  const position = "SWE Intern";
  const location = "Toronto, ON, CA";
  const dateRange = "2021 Jan - 2021 Apr";
  const description = (
    <div>
      <div>
        <Chip>PHP</Chip>
        <Chip>Unit Test</Chip>
      </div>
      <ListItem1>Unit test</ListItem1>
      <ListItem2>
        Performed <CardPrimaryText>unit testing</CardPrimaryText>
      </ListItem2>
      <ListItem2>
        Used <CardPrimaryText>PHPUnit</CardPrimaryText> to mock method calls and
        data
      </ListItem2>
    </div>
  );

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
    />
  );
};

export default Achievers1ExperienceCard;
