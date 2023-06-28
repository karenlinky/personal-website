import React, { useState } from "react";
import ResponsivePage from "../responsivePage/ResponsivePage";
import PageHeader from "../typography/PageHeader";
import PersonalWebsite from "./PersonalWebsite";
import GenS from "./GenS";
import SecretGifta from "./SecretGifta";
import ChefsHat from "./ChefsHat";
import SpaceInvader from "./SpaceInvader";
import UltramanRagdoll from "./UltramanRagdoll";
import Modal from "../modal/Modal";
import "./projects.css";

const Projects = () => {
  const descr = (
    <>
      <div>Over the years, I have completed several projects.</div>
      <div>
        Each one has presented its own unique set of challenges. Here are a few
        of projects that I am proud of.
      </div>
    </>
  );

  const ids = {
    personalWebsite: "personal-website",
    genS: "gen-s",
    secretGifta: "secret-gifta",
    chefsHat: "chef-s-hat",
    spaceInvader: "space-invader",
    ultramanRagdoll: "ultraman-ragdoll",
  };

  const [showProjectDetail, setShowProjectDetail] = useState(false);

  const openProjectDetail = () => {
    setShowProjectDetail(true);
  };

  const closeProjectDetail = () => {
    setShowProjectDetail(false);
  };

  const [projectDetail, setProjectDetail] = useState(<></>);

  return (
    <>
      <Modal show={showProjectDetail} hideModal={closeProjectDetail}>
        {projectDetail}
      </Modal>
      <div className={"fullPageBody"}>
        <ResponsivePage>
          <PageHeader short label={"Projects"} descr={descr} />
          <div className={"projectGallery"}>
            <PersonalWebsite
              id={ids.personalWebsite}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <GenS
              id={ids.genS}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <SecretGifta
              imageOnLeft
              id={ids.secretGifta}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <ChefsHat
              id={ids.chefsHat}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <SpaceInvader
              imageOnLeft
              id={ids.spaceInvader}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <UltramanRagdoll
              id={ids.ultramanRagdoll}
              openDetail={openProjectDetail}
              setProjectDetail={setProjectDetail}
            />
            <div className="clearfix"></div>
          </div>
        </ResponsivePage>
      </div>
    </>
  );
};

export default Projects;
