import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaListAlt, FaImage } from 'react-icons/fa';
import ListItemHeader from '../listItems/ListItemHeader';
import './projects.css';


const ProjectSection = ({ projectTitle, projectParticipationType, projectChips, projectDescr, projectInvolvement, projectImage, className, imageOnLeft, id }) => {

    const { ref, inView } = useInView({threshold: 0.4})

    const generalDescription = <div>
        <div className={'generalDescription'}>
            <span className={'projectTitle'}>{projectTitle}</span>
            <span className={'participationType'}> -- {projectParticipationType}</span>
        </div>
        <div className={'projectDescr'}>{projectDescr}</div>
    </div>

    const listTabNum = 0;
    const imageTabNum = 1;

    const [ showSectionNumber, setShowSectionNumber ] = useState(listTabNum);

    const openListTab = useCallback(() => {
        setShowSectionNumber(listTabNum);
    }, [setShowSectionNumber]);

    const openImageTab = useCallback(() => {
        setShowSectionNumber(imageTabNum);
    }, [setShowSectionNumber]);

    const textSection = <div className={'textSection'}>
        <ListItemHeader>My tasks</ListItemHeader>
        {projectInvolvement}
    </div>

    const imageSection = <div className={'imageSection'}>
        <div className={'projectImages'}>
            {projectImage}
        </div>
    </div>

    const narrowDetails = <div className={'narrowTextSection'}>
        <div className={'narrowText' + (showSectionNumber === imageTabNum ? ' hideNarrowText' : '')}>
            <ListItemHeader>My tasks</ListItemHeader>
            {projectInvolvement}
        </div> 
        <div className={'narrowProjectImages'}>
            <div className={'narrowProjectRelative'}>
                {showSectionNumber === imageTabNum ?projectImage : null}
            </div>
        </div>
    </div>

    const leftColumn = imageOnLeft ? imageSection : textSection;
    const rightColumn = imageOnLeft ? textSection : imageSection;
  return (
    <>
    <div id={id} ref={ref}>
        <div className={'projectSection' + (inView ? ' showProjectSection' : '') + (className ? ' ' + className : '')}>
            {generalDescription}
            <div className={'projectSectionDetailsSeparator'} />
            <div className={'narrowDetails'}>
                <div className={'detailsSelector'}>
                    <div
                    onClick={openListTab}
                    className={'listButton detailsSelectorButtonContainer ' +
                    (showSectionNumber === listTabNum ? 'detailsSelectorButtonContainerSelected' : 'detailsSelectorButtonContainerNotSelected')}>
                        <FaListAlt />
                    </div>
                    <div
                    onClick={openImageTab}
                    className={'imageButton detailsSelectorButtonContainer ' +
                    (showSectionNumber === imageTabNum ? 'detailsSelectorButtonContainerSelected' : 'detailsSelectorButtonContainerNotSelected')}>
                        <FaImage />
                    </div>
                </div>
                {narrowDetails}
            </div>
            <div className={'projectColumns'}>
                <div className={'leftColumn column'}>
                    {leftColumn}
                </div>
                <div className={'rightColumn column'}>
                    {rightColumn}
                </div>
            </div>
            <div className={'projectChipsContainer'}>{projectChips}</div>
        </div>
    </div>
    </>
  )
}

export default ProjectSection