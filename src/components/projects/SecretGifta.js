import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/secretGiftaScreenshot.png';

const SecretGifta = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
    const projectTitle = 'Secret Gifta';
    const projectLink = 'https://github.com/karenlinky/secret-gifta';
    const projectParticipationType = 'Personal Project';
    const projectChips = <><Chip>Web App</Chip><Chip>ReactJS</Chip><Chip>CSS</Chip><Chip>Responsive UI</Chip><Chip>Python</Chip><Chip>SQL</Chip></>;
    const projectDescr = <>
    <div>Every year, my family participates in Secret Santa by drawing names out of a plastic bag with pen and paper, which is a time-consuming process.
    As a solution, I created an app that streamlines the process by allowing users to randomly pick gift recipients with just a few clicks.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Used Formik and Yup to validate user-input on the frontend</ListItem1>
        <ListItem1>Used useContext hook to manage modal type messages</ListItem1>
        <ListItem1>Wrote an algorithm to match users with other participants using a graph data structure</ListItem1>
        <ListItem1>Wrote queries to store and fetch matching results from the database</ListItem1>
    </div>

    const projectImage = screenshot;
    return (
        <ProjectSection
            projectTitle={projectTitle}
            projectLink={projectLink}
            projectParticipationType={projectParticipationType}
            projectChips={projectChips}
            projectDescr={projectDescr}
            projectInvolvement={projectInvolvement}
            projectImage={projectImage}
            imageOnLeft={imageOnLeft}
            id={id}
            openDetail={openDetail}
            setProjectDetail={setProjectDetail}
        />
    )
}

export default SecretGifta