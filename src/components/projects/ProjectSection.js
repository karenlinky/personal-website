import React, { useState, useCallback, useEffect } from 'react';
import { FaGithub, FaListAlt, FaImage } from 'react-icons/fa';
import './projects.css';
import Modal from '../modal/Modal';

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
  
  const [hovering, setHovering] = useState(false);

  const listTabNum = 0;
  const imageTabNum = 1;

  const [ showSectionNumber, setShowSectionNumber ] = useState(listTabNum);

  const openListTab = useCallback(() => {
      setShowSectionNumber(listTabNum);
  }, [setShowSectionNumber, listTabNum]);

  const openImageTab = useCallback(() => {
      setShowSectionNumber(imageTabNum);
  }, [setShowSectionNumber, imageTabNum]);

  const popupImg = <img src={projectImage} className={'projectPopupImage'} />;

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
    <div className={'projectSectionSelector'}>
      <div
      onClick={openListTab}
      className={'selectorButton listButton ' + (showSectionNumber === 0 ? 'show' : 'hide')}>
          <FaListAlt />
      </div>
      <div
      onClick={openImageTab}
      className={'selectorButton imageButton ' + (showSectionNumber === 1 ? 'show' : 'hide')}>
          <FaImage />
      </div>
    </div>
    <div className={'projectPopupDetails'}>
      <div className={'projectPopupImageContainer'}>
          {popupImg}
      </div>
      <div className={'projectPopupListContainer'}>
        <div className={'projectPopupList ' + (showSectionNumber === 0 ? 'show' : 'hide')}>
          <div className={'projectPopupListHeading'}>
            My tasks:
          </div>
          {projectInvolvement}
        </div>
        <div className={'projectNarrowImageContainer ' + (showSectionNumber === 1 ? 'show' : 'hide')}>
          {popupImg}
        </div>
      </div>
    </div>
    <div className={'projectPopupSkills'}>
      {projectChips}
    </div>
  </>;

  const [showProjectDetail, setShowProjectDetail] = useState(false);

  const onCardClick = useCallback(() => {
    setShowProjectDetail(true);
  }, [setShowProjectDetail]);

  return (
    <>
    <Modal show={showProjectDetail} hideModal={() => {setShowProjectDetail(false)}}>{cardContent}</Modal>
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