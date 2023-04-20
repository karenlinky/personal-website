import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/secretGiftaScreenshot.png';

const SpaceInvader = ({ imageOnLeft }) => {
    const projectTitle = 'Chef\'s Hat';
    const projectParticipationType = 'Group Project';
    const projectChips = <div><Chip>Web App</Chip><Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>SQL</Chip></div>;
    const projectDescr = <>
    <div>Space Invader is a popular game in the 1970s and 1980s.</div>
    <div>The objective of this project is to replicate the game using Java.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Handled user authentication - creating new account, storing and validating hashed password, signing in/out</ListItem1>
        <ListItem1>Built a form for users to create and update recipes, as well as update the corresponding content within the database</ListItem1>
        <ListItem1>Designed SQL table structures</ListItem1>
        <ListItem1>Wrote queries designe to fetch recipes from the database based on specific keywords</ListItem1>
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
            imageOnLeft={imageOnLeft}
        />
    )
}

export default SpaceInvader