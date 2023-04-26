import React, { useState, useCallback } from 'react';
import { FaGithub, FaListAlt, FaImage } from 'react-icons/fa';
import './projects.css';

const ProjectSection = (
  { projectTitle,
    projectLink,
    projectParticipationType,
    projectChips,
    projectDescr,
    projectInvolvement,
    projectImage,
    className,
    imageOnLeft,
    id,
    openDetail,
    setProjectDetail }) => {
  
  const [hovering, setHovering] = useState(false);

  const cardContent = <>
    <div className={'projectLink'}>
    <a target={'_blank'} rel={'noreferrer'} href={projectLink}>
      <div className={'projectPopupTitle'}>
        {projectTitle}
      </div>
      <div className={'projectPopupLinkContainer'}><FaGithub /></div>
    </a>
    </div>
    <div className={'projectPopupDescription'}>
      {projectDescr}
    </div>
    <div className={'projectPopupDetails'}>
      <div className={'projectPopupImageContainer'}>
        <img src={projectImage} className={'projectPopupImage'} />
      </div>
      <div className={'projectPopupListContainer'}>
        <div className={'projectPopupListHeading'}>
          My tasks:
        </div>
        {projectInvolvement}
      </div>
    </div>
    <div className={'projectPopupSkills'}>
      {projectChips}
    </div>
  </>;

  const onCardClick = useCallback(() => {
    openDetail();
    setProjectDetail(cardContent);
  }, [openDetail, setProjectDetail, cardContent]);

  return (
    <>
    <div id={id} className={'projectCardResponsive'}>
      <div className={'projectCard'} onClick={() => onCardClick()} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <div className={'projectContentContainer'}>
          <div className={'projectImageContainer'}>
            <img src={projectImage} className={'projectImage' + (hovering ? ' hovering' : '')} />
          </div>
          <div className={'projectCardDescriptionWrapper'}>
            <div className={'projectCardDescriptionContainer'}>
              <div className={'projectTitle'}>
                {projectTitle}
              </div>
              {projectParticipationType}
              <div className={'projectChips'}>
                {projectChips}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectSection