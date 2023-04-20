import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/GenSScreenshot.jpg';

const GenS = ({ imageOnLeft, id }) => {
    const projectTitle = 'Gen S';
    const projectParticipationType = 'Group Project';
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
    return (
        <ProjectSection
            projectTitle={projectTitle}
            projectParticipationType={projectParticipationType}
            projectChips={projectChips}
            projectDescr={projectDescr}
            projectInvolvement={projectInvolvement}
            projectImage={projectImage}
            className={'projectSection1'}
            imageOnLeft={imageOnLeft}
            id={id}
        />
    )
}

export default GenS