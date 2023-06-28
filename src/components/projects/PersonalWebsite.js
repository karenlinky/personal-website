import React from "react";
import Chip from "../chip/Chip";
import ListItem1 from "../listItems/ListItem1";
import ProjectSection from "./ProjectSection";

import screenshot from "../../img/personalWebsiteScreenshot.png";

const PersonalWebsite = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
  const projectTitle = "Personal Website";
  const projectLink = "https://github.com/karenlinky/personal-website";
  const projectParticipationType = "Personal Project";
  const projectChips = (
    <>
      <Chip>ReactJS</Chip>
      <Chip>Responsive UI</Chip>
      <Chip>CSS</Chip>
      <Chip>CSS Transition</Chip>
    </>
  );
  const projectDescr = (
    <>
      <div>
        To effectively highlight my projects and work experience, I have created
        this website to showcase my past accomplishments and demonstrate my
        genuine passion for frontend development, which is a field within
        software engineering that truly captivates me.
      </div>
    </>
  );

  const projectInvolvement = (
    <div>
      <ListItem1 className={"lessSpaceListItem1"}>
        Used ReactJS to build a responsive UI
      </ListItem1>
      <ListItem1>
        Managed transitions using CSS (e.g. typewriter, enlarging card size and
        changing color saturation when hovering)
      </ListItem1>
      <ListItem1>
        Used react-intersection-observer to make components appear when the
        component is scrolled to view
      </ListItem1>
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

export default PersonalWebsite;
