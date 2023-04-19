import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/GenSScreenshot.jpg';

const SecretGifta = () => {
    const projectTitle = 'Secret Gifta';
    const projectParticipationType = 'Personal Project';
    const projectChips = <div><Chip>Web App</Chip><Chip>ReactJS</Chip><Chip>CSS</Chip><Chip>Responsive frontend</Chip><Chip>Python</Chip><Chip>SQL</Chip></div>;
    const projectDescr = <>
    <div>Every year, my family participates in Secret Santa by drawing names out of a plastic bag with pen and paper, which is a time-consuming process.</div>
    <div>As a solution, I created an app that streamlines the process by allowing users to randomly pick gift recipients with just a few clicks.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Used Formik and Yup to validate user-input on the frontend</ListItem1>
        <ListItem1>Used useContext hook to manage modal type message</ListItem1>
        <ListItem1>Wrote an algorithm to match users with other participants using a graph data structure</ListItem1>
        <ListItem1>Wrote queries to store and fetch matching results from the database</ListItem1>
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
        />
    )
}

export default SecretGifta