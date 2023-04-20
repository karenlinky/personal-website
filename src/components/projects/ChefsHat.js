import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/chefsHatScreenshot.png';

const ChefsHat = ({ imageOnLeft }) => {
    const projectTitle = 'Chef\'s Hat';
    const projectParticipationType = 'Group Project';
    const projectChips = <div><Chip>Web App</Chip><Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>SQL</Chip></div>;
    const projectDescr = <>
    <div>We built a platform that allows users to manage recipes.</div>
    <div>It has several features such as creating new recipes, bookmarking favorites, searching and rating recipes.</div>
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

export default ChefsHat