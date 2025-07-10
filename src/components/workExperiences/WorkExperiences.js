import React, { useCallback, useState } from "react";
import ResponsivePage from "../responsivePage/ResponsivePage";
import PageHeader from "../typography/PageHeader";
import Separator from "../sectionSeparator/Separator";
import MetaExperienceCard from "./MetaExperienceCard";
import Achievers1ExperienceCard from "./Achievers1ExperienceCard";
import Achievers2ExperienceCard from "./Achievers2ExperienceCard";
import KGSExperienceCard from "./KGSExperienceCard";
import "../content/content.css";
import SnapExperienceCard from "./SnapExperienceCard";

const WorkExperiences = () => {
  const descr = (
    <>
      <div>
        I've worked with multiple companies.
      </div>
      <div>
        Each of which has helped me develop invaluable skills and experience.
        Here are a few highlights from my work experience.
      </div>
    </>
  );

  const [openNum, setOpenNum] = useState("");

  const onCardClick = useCallback(
    (newOpenNum) => {
      if (openNum === newOpenNum) {
        setOpenNum("");
      } else {
        setOpenNum(newOpenNum);
      }
    },
    [openNum]
  );

  return (
    <div className={"fullPageBody"}>
      <ResponsivePage>
        <PageHeader paddingBottom label={"Work Experience"} descr={descr} />
        <SnapExperienceCard
          openNum={openNum}
          experienceNum={4}
          onCardClick={onCardClick}
        />
        <Separator margin={"25"} />
        <MetaExperienceCard
          openNum={openNum}
          experienceNum={3}
          onCardClick={onCardClick}
        />
        <Separator margin={"25"} />
        <Achievers2ExperienceCard
          openNum={openNum}
          experienceNum={2}
          onCardClick={onCardClick}
        />
        <Separator margin={"25"} />
        <Achievers1ExperienceCard
          openNum={openNum}
          experienceNum={1}
          onCardClick={onCardClick}
        />
        <Separator margin={"25"} />
        <KGSExperienceCard
          openNum={openNum}
          experienceNum={0}
          onCardClick={onCardClick}
        />
      </ResponsivePage>
    </div>
  );
};

export default WorkExperiences;
