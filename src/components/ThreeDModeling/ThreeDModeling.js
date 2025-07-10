import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import Gallery from '../gallery/Gallery';
import GalleryImage from '../gallery/GalleryImage';

import gameController from '../../img/3dModels/GameController.png';
import gamingHeadset from '../../img/3dModels/GamingHeadset.png';
import glock from '../../img/3dModels/Glock.png';
import katana from '../../img/3dModels/Katana.png';
import livingRoom from '../../img/3dModels/LivingRoom.png';
import macBookPro from '../../img/3dModels/MacBookPro.png';

import '../content/content.css';

const ThreeDModeling = () => {
    const descr = <><div>I also do 3D modeling as a hobby, and I'm excited to share some of my creations!</div></>

    const threshold = 0.1;

    return (
        <div className={'fullPageBody'}>
        <ResponsivePage>
            <PageHeader shortBottomPadding label={'3D Modeling'} descr={descr}/>
            <Gallery>
                <GalleryImage threshold={threshold}><img src={gameController} alt={'game controller model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={gamingHeadset} alt={'gaming headset model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={katana} alt={'katana model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={glock} alt={'glock model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={macBookPro} alt={'Mac Book Pro model'} /></GalleryImage>
                <GalleryImage threshold={threshold}><img src={livingRoom} alt={'living room model'} /></GalleryImage>
            </Gallery>
        </ResponsivePage>
        </div>
    )
}

export default ThreeDModeling