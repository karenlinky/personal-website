import React from 'react';
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
    id }) => {
  return (
    <>
    <div id={id} className={'projectCardResponsive'}>
      <div className={'projectCard'}>
        <div className={'projectContentContainer'}>
          <div className={'projectImageContainer'}>
            <img src={projectImage} className={'projectImage'} />
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