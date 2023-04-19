import React from 'react';
import ListItemHeader from '../listItems/ListItemHeader';
import './projects.css';


const ProjectSection = ({ projectTitle, projectParticipationType, projectChips, projectDescr, projectInvolvement, projectImage, className, imageOnLeft }) => {

    const generalDescription = <div>
        <div className={'generalDescription'}>
            <span className={'projectTitle'}>{projectTitle}</span>
            <span className={'participationType'}> -- {projectParticipationType}</span>
        </div>
        <div className={'projectDescr'}>{projectDescr}</div>
    </div>

    const textSection = <div className={'textSection'}>
        <ListItemHeader>My tasks</ListItemHeader>
        {projectInvolvement}
    </div>

    const imageSection = <div className={'imageSection'}>
        <div className={'projectImages'}>
            {projectImage}
        </div>
    </div>

    const leftColumn = imageOnLeft ? imageSection : textSection;
    const rightColumn = imageOnLeft ? textSection : imageSection;
  return (
    <div className={'projectSection fadeIn' + (className ? ' ' + className : '')}>
        {generalDescription}
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
  )
}

export default ProjectSection