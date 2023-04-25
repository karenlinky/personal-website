import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';
import ChefsHat from './ChefsHat';
import SpaceInvader from './SpaceInvader';
import UltramanRagdoll from './UltramanRagdoll';
import './projects.css';

const Projects = () => {
    const descr = <><div>Over the years, I have completed several projects.</div>
    <div>Each one has presented its own unique set of challenges and here are a few of projects that I am proud of.</div></>

    const ids = {
        genS: 'gen-s',
        secretGifta: 'secret-gifta',
        chefsHat: 'chef-s-hat',
        spaceInvader: 'space-invader',
        ultramanRagdoll: 'ultraman-ragdoll',
    }

    return (
        <div className={'fullPageBody'}>
        <ResponsivePage>
            <PageHeader short label={'Projects'} descr={descr} />
            <div className={'projectGallery'}>
                <GenS id={ids.genS}/>
                <SecretGifta imageOnLeft id={ids.secretGifta}/>
                <ChefsHat id={ids.chefsHat}/>
                <SpaceInvader imageOnLeft id={ids.spaceInvader}/>
                <UltramanRagdoll id={ids.ultramanRagdoll} />
                <div className="clearfix"></div>
            </div>
        </ResponsivePage>
        </div>
    )
}

export default Projects