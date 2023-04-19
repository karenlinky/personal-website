import React from 'react';
import ListItemHeader from '../listItems/ListItemHeader';
import ListItem1 from '../listItems/ListItem1';
import Chip from '../chip/Chip';

import './projects.css';

import screenshot from '../../img/GenSScreenshot.jpg';


const ProjectSection = () => {
    const projectTitle = 'Gen S';
    const projectParticipationType = '2023W CS446 Group 10 Project';
    const projectChips = <div><Chip>Android Development</Chip><Chip>Kotlin</Chip><Chip>UI Design</Chip><Chip>Architecture Design</Chip></div>
    const projectDescr = <>
    <div>As students with busy schedule,
        we recognize the significance of scheduling our activities in advance and abstaining from procrastination.</div>
        <div>Therefore, we developed an app that enables users to create personalized study schedules based on their preferences and availability.
    </div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Built the UI of the auto-generate plan and manually generate plan page</ListItem1>
        <ListItem1>Created date and time picker fragments for reusability purposes</ListItem1>
        <ListItem1>Designed the UI using Figma</ListItem1>
        <ListItem1>Participated in the process of designing architecture</ListItem1>
    </div>

    const projectImage = <img className={'projectImage'} src={screenshot} alt={'Gen S Screenshot'} />
    const projectImages = <>
    {projectImage}
    </>

    const generalDescription = <div>
        <div className={'generalDescription'}>
            <span className={'projectTitle'}>{projectTitle}</span>
            <span className={'participationType'}> -- {projectParticipationType}</span>
        </div>
        <div className={'projectDescr'}>{projectDescr}</div>
    </div>

    const textSection = <div className={'textSection'}>
        <ListItemHeader>My contributions</ListItemHeader>
        {projectInvolvement}
    </div>

    const imageSection = <div className={'imageSection'}>
        <div className={'projectImages'}>
            {projectImages}
        </div>
    </div>
  return (
    <div className={'projectSection'}>
        {generalDescription}
        <div className={'projectColumns'}>
            {textSection}
            {imageSection}
        </div>
        <div className={'projectChipsContainer'}>{projectChips}</div>
    </div>
  )
}

export default ProjectSection