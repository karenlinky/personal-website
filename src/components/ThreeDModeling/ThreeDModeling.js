import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import Gallery from '../gallery/Gallery';
import GalleryImage from '../gallery/GalleryImage';

// import curryFishball from '../../img/3dModels/CurryFishball.png';
import gameController from '../../img/3dModels/GameController.png';
import gamingHeadset from '../../img/3dModels/GamingHeadset.png';
import glock from '../../img/3dModels/Glock.png';
import katana from '../../img/3dModels/Katana.png';
import livingRoom from '../../img/3dModels/LivingRoom.png';
import macBookPro from '../../img/3dModels/MacBookPro.png';
// import salmon from '../../img/3dModels/Salmon.png';

import '../content/content.css';

const ThreeDModeling = () => {
    const descr = <><div>I also do 3D modelling as a hobby, and I am thrilled to share some of my creations with you.</div></>

    const [showingTitle, setShowingTitle] = useState(false);
    const [showingActualContent, setShowingActualContent] = useState(false);

    const pageID = '3d-modeling';

    const scrollDown = () => {
        const element = document.getElementById(pageID);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const threshold = 0.1;

    return (
        <div className={'fullPageBody'}>
        <ScrollIndicator showIndicator={showingTitle && !showingActualContent} onClick={scrollDown} />
        <ResponsivePage>
            <PageHeader short label={'3D Modeling'} descr={descr} setShowingHeader={setShowingTitle}/>
            <div id={pageID} className={'uiGallery'} />
            <Gallery onInViewChange={setShowingActualContent}>
                <GalleryImage threshold={threshold}><img src={gameController} alt={'game controller model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={gamingHeadset} alt={'gaming headset model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={katana} alt={'katana model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={glock} alt={'glock model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={macBookPro} alt={'Mac Book Pro model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={livingRoom} alt={'living room model'} /></GalleryImage>
                {/* <GalleryImage threshold={threshold}><img src={salmon} alt={'salmon model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={curryFishball} alt={'curry fishball model'} /></GalleryImage> */}
            </Gallery>
        </ResponsivePage>
        </div>
    )
}

export default ThreeDModeling