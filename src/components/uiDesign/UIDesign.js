import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import Gallery from '../gallery/Gallery';
import GalleryImage from '../gallery/GalleryImage';
import './uiDesign.css';

import genS1 from '../../img/uiDesign/gen_s_ui_1.png';
import genS2 from '../../img/uiDesign/gen_s_ui_2.png';
import genS3 from '../../img/uiDesign/gen_s_ui_3.png';
import genS4 from '../../img/uiDesign/gen_s_ui_4.png';
import genS5 from '../../img/uiDesign/gen_s_ui_5.png';
import genS6 from '../../img/uiDesign/gen_s_ui_6.png';
import genS7 from '../../img/uiDesign/gen_s_ui_7.png';
import genS8 from '../../img/uiDesign/gen_s_ui_8.png';

import '../content/content.css';

const UIDesign = () => {
    const descr = <><div>While I am a software engineer, I also participate in the UI design process.</div>
    <div>I have gained experience in UI design through my internships and projects, and here are a few designs that I made with Figma.</div></>

    const [showingTitle, setShowingTitle] = useState(false);
    const [showingActualContent, setShowingActualContent] = useState(false);

    const uiDesignId = 'ui-design';

    const scrollDown = () => {
        const element = document.getElementById(uiDesignId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const threshold = 0.1;

    return (
        <div className={'fullPageBody'}>
        <ScrollIndicator showIndicator={showingTitle && !showingActualContent} onClick={scrollDown} />
        <ResponsivePage>
            {/* <PageHeader label={'UI Design'} descr={descr} setShowingHeader={setShowingTitle}/> */}
            <PageHeader short label={'UI Design'} descr={descr} setShowingHeader={setShowingTitle}/>
            {/* <div id={uiDesignId} /> */}
            <div id={uiDesignId} className={'uiGallery'} />
            <Gallery onInViewChange={setShowingActualContent}>
                <GalleryImage threshold={threshold}><img src={genS1} alt={'gen_s_1'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS2} alt={'gen_s_2'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS3} alt={'gen_s_3'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS4} alt={'gen_s_4'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS5} alt={'gen_s_5'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS6} alt={'gen_s_6'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS7} alt={'gen_s_7'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={genS8} alt={'gen_s_8'} /></GalleryImage>
            </Gallery>
        </ResponsivePage>
        </div>
    )
}

export default UIDesign