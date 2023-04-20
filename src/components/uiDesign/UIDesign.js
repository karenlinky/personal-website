import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import ContentStartIndicator from '../misc/ContentStartIndicator';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import ScrollObserver from '../scrollObserver/ScrollObserver';
import '../content/content.css';

const UIDesign = () => {
    const descr = <><div>While I am a software engineer, I also involve myself in the UI design process.</div>
    <div>I have gained experience in UI design through my internships and projects, and I would like to showcase a few of the designs that I have created.</div></>

    const [showingTitle, setShowingTitle] = useState(false);
    const [showingActualContent, setShowingActualContent] = useState(false);

    const uiDesignId = 'ui-design';

    const scrollDown = () => {
        const element = document.getElementById(uiDesignId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (
    <div className={'fullPageBody'}>
      <ScrollIndicator showIndicator={showingTitle && !showingActualContent} onClick={scrollDown} />
      <ResponsivePage>
        <PageHeader label={'UI Design'} descr={descr} setShowingHeader={setShowingTitle}/>
        <div>
        <ContentStartIndicator id={uiDesignId} />
        <ScrollObserver threshold={.3} onInViewChange={setShowingActualContent}>
          hi
        </ScrollObserver>
        </div>
      </ResponsivePage>
    </div>
  )
}

export default UIDesign