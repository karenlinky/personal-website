import React from 'react';
import ListItem1 from '../listItems/ListItem1';
import Chip from '../chip/Chip';
import Separator from '../sectionSeparator/Separator';
import './projects.css';

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
        <ListItem1>Built the UI of the auto-generate plan and manually generate plan page</ListItem1>
        <ListItem1>Created date and time picker fragments for reusability purposes</ListItem1>
        <ListItem1>Designed the UI using Figma</ListItem1>
        <ListItem1>Participated in the process of designing architecture</ListItem1>
    </div>

    const generalDescription = <div>
        <div className={'generalDescription'}>
            <span className={'projectTitle'}>{projectTitle}</span>
            <span className={'participationType'}> -- {projectParticipationType}</span>
        </div>
        <div className={'projectDescr'}>{projectDescr}</div>
    </div>

    const textSection = <div className={'textSection'}>
        <div className={'projectChipsContainer'}>{projectChips}</div>
        {projectInvolvement}
    </div>
  return (
    <div className={'projectSection'}>
        {generalDescription}
        {textSection}
    </div>
  )
}

export default ProjectSection