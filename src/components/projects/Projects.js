import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';
import ChefsHat from './ChefsHat';
import SpaceInvader from './SpaceInvader';
import UltramanRagdoll from './UltramanRagdoll';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';

const Projects = () => {
    const descr = <><div>Over the years, I have completed several projects.</div>
        <div>Each one has presented its own unique set of challenges and here are a few of projects that I am proud of.</div></>

    const [showingTitle, setShowingTitle] = useState(false);
    const [showingActualContent, setShowingActualContent] = useState(false);

    const ids = {
        genS: 'gen-s',
        secretGifta: 'secret-gifta',
        chefsHat: 'chef-s-hat',
        spaceInvader: 'space-invader',
        ultramanRagdoll: 'ultraman-ragdoll',
    }

    const firstId = ids.genS;
  
    const scrollDown = () => {
      const element = document.getElementById(firstId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return (
        <div className={'fullPageBody'}>
            <ScrollIndicator showIndicator={showingTitle && !showingActualContent} onClick={scrollDown} />
            <ResponsivePage>
                <PageHeader label={'Projects'} descr={descr} setShowingHeader={setShowingTitle}  />
                <ScrollObserver threshold={0.} onInViewChange={setShowingActualContent}>
                    <GenS id={ids.genS}/>
                </ScrollObserver>
                <SecretGifta imageOnLeft id={ids.secretGifta}/>
                <ChefsHat id={ids.chefsHat}/>
                <SpaceInvader imageOnLeft id={ids.spaceInvader}/>
                <UltramanRagdoll id={ids.ultramanRagdoll} />
            </ResponsivePage>
        </div>
    )
}

export default Projects