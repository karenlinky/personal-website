import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';
import ChefsHat from './ChefsHat';
import SpaceInvader from './SpaceInvader';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import ContentStartIndicator from '../misc/ContentStartIndicator';

const Projects = () => {
    const descr = <><div>Over the years, I have completed several projects.</div>
        <div>Each one has presented its own unique set of challenges and here are a few of projects that I am proud of.</div></>

    const [showingTitle, setShowingTitle] = useState(false);
    const [showingActualContent, setShowingActualContent] = useState(false);

    const projectsId = 'projects';
  
    const scrollDown = () => {
      const element = document.getElementById(projectsId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return (
        <div className={'fullPageBody'}>
            <ScrollIndicator showIndicator={showingTitle && !showingActualContent} onClick={scrollDown} />
            <ResponsivePage>
                <PageHeader label={'Projects'} descr={descr} setShowingHeader={setShowingTitle}  />
                <ContentStartIndicator id={projectsId} />
                <ScrollObserver threshold={0.2} onInViewChange={setShowingActualContent}>
                    <GenS />
                </ScrollObserver>
                <SecretGifta imageOnLeft/>
                <ChefsHat />
                <SpaceInvader imageOnLeft/>
            </ResponsivePage>
        </div>
    )
}

export default Projects