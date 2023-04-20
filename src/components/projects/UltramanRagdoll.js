import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/ultramanRagdollScreenshot.png';

const UltramanRagdoll = ({ imageOnLeft, id }) => {
    const projectTitle = 'Ultraman Ragdoll';
    const projectParticipationType = 'Personal Project';
    const projectChips = <div><Chip>Java</Chip><Chip>OOP</Chip></div>;
    const projectDescr = <>
    <div>Ultraman was one of my favourite character when I was a kid.</div>
    <div>This project allows users to freely move, rotate, and scale an ultraman's body part, such as the torso, arms, upper and lower legs, through drag and drop.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Used strategy pattern to specify the pivot point used for rotation and scaling of each body parts</ListItem1>
        <ListItem1>Created translate, rotate and scale parent classes that define the transformation behaviour, and have the body part classes inherit from those parent classes accordingly</ListItem1>
        <ListItem1>Used matrix multiplication to apply transformations</ListItem1>
    </div>

    const projectImage = <img className={'projectImage'} src={screenshot} alt={'Ultraman Ragdoll Screenshot'} />
    return (
        <ProjectSection
            projectTitle={projectTitle}
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

export default UltramanRagdoll