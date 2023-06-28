import React from "react";
import Chip from "../chip/Chip";
import ListItem1 from "../listItems/ListItem1";
import ProjectSection from "./ProjectSection";

import screenshot from "../../img/GenSScreenshot.jpg";

const GenS = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
  const projectTitle = "Gen S";
  const projectLink = "https://github.com/karenlinky/gen-s";
  const projectParticipationType = "Group Project";
  const projectChips = (
    <>
      <Chip>Android App</Chip>
      <Chip>Kotlin</Chip>
      <Chip>UI Design</Chip>
      <Chip>Architecture Design</Chip>
    </>
  );
  const projectDescr = (
    <>
      <div>
        As students with busy schedule, we recognize the significance of
        scheduling our activities in advance and abstaining from
        procrastination. Therefore, we developed an app that enables users to
        create personalized study schedules based on their preferences and
        availabilies.
      </div>
    </>
  );

  const projectInvolvement = (
    <div>
      <ListItem1 className={"lessSpaceListItem1"}>
        Built the UI of the auto-generate plan and manually generate plan page
      </ListItem1>
      <ListItem1>
        Created date and time picker fragments for reusability purposes
      </ListItem1>
      <ListItem1>Designed the UI using Figma</ListItem1>
      <ListItem1>Participated in the architecture design process</ListItem1>
    </div>
  );

  const projectImage = screenshot;
  return (
    <ProjectSection
      projectTitle={projectTitle}
      projectLink={projectLink}
      projectParticipationType={projectParticipationType}
      projectChips={projectChips}
      projectDescr={projectDescr}
      projectInvolvement={projectInvolvement}
      projectImage={projectImage}
      imageOnLeft={imageOnLeft}
      id={id}
      openDetail={openDetail}
      setProjectDetail={setProjectDetail}
    />
  );
};

export default GenS;
