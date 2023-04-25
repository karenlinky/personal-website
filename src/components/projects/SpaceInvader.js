import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/spaceInvaderScreenshot.png';

const SpaceInvader = ({ imageOnLeft, id }) => {
    const projectTitle = 'Space Invader';
    const projectLink = 'https://github.com/karenlinky/space-invader';
    const projectParticipationType = 'Personal Project';
    const projectChips = <><Chip>Java</Chip><Chip>OOP</Chip></>;
    const projectDescr = <>
    <div>Space Invader is a popular game in the 1970s and 1980s.
    The objective of this project is to replicate the game using Java.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Used strategy pattern to specify the outcome of attacking various kinds of enemies and managing the generation of bullets by enemies</ListItem1>
        <ListItem1>Programmed to have a random enemy fire a bullet after a specific duration.</ListItem1>
        <ListItem1>Added event listeners that enable players to move and shoot using keyboard keys and mouse</ListItem1>
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
        />
    )
}

export default SpaceInvader