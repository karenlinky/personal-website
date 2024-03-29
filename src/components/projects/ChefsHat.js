import React from 'react';
import Chip from '../chip/Chip';
import ListItem1 from '../listItems/ListItem1';
import ProjectSection from './ProjectSection';

import screenshot from '../../img/chefsHatScreenshot.png';

const ChefsHat = ({ imageOnLeft, id, openDetail, setProjectDetail }) => {
    const projectTitle = 'Chef\'s Hat';
    const projectLink = 'https://github.com/karenlinky/chef-s-hat';
    const projectParticipationType = 'Group Project';
    const projectChips = <><Chip>Web App</Chip><Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>SQL</Chip></>;
    const projectDescr = <>
    <div>We built a platform that allows users to manage recipes.
    It has several features such as creating new recipes, bookmarking favorites, searching and rating recipes.</div>
    </>

    const projectInvolvement = <div>
        <ListItem1 className={'lessSpaceListItem1'}>Handled user authentication - creating new accounts, storing and validating hashed password, logging in and out</ListItem1>
        <ListItem1>Built a form for users to create and edit recipes, and developed the backend to update the corresponding content within the database</ListItem1>
        <ListItem1>Designed SQL table structures</ListItem1>
        <ListItem1>Wrote queries designed to fetch recipes from the database based on specific keywords</ListItem1>
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

export default ChefsHat