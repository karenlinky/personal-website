import React from "react";
import Chip from "../chip/Chip";
import ListItem1 from "../listItems/ListItem1";
import ProjectSection from "./ProjectSection";

import screenshot from "../../img/pdfViewer.jpg";

const PDFViewer = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
  const projectTitle = "PDFViewer";
  const projectLink = "https://github.com/karenlinky/pdf-reader";
  const projectParticipationType = "Personal Project";
  const projectChips = (
    <>
      <Chip>Android App</Chip>
      <Chip>Java</Chip>
      <Chip>OOP</Chip>
    </>
  );
  const projectDescr = (
    <>
      <div>
        This PDF viewer allows users to annotate and highlight a PDF file. It
        also supports other basic functionalities such as zooming in and out,
        erasing the strokes and navigating to other pages.
      </div>
    </>
  );

  const projectInvolvement = (
    <div>
      <ListItem1 className={"lessSpaceListItem1"}>
        Used strategy pattern to specify the behaviour of each pen
      </ListItem1>
      <ListItem1>
        Wrote an algorithm to determine the draw-actions erased by the user by
        checking for intersections between each point of all strokes and the
        eraser
      </ListItem1>
      <ListItem1>
        Added buttons and spinner to the XML files for user interactions
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

export default PDFViewer;
