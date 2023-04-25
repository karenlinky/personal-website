import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';
import ChefsHat from './ChefsHat';
import SpaceInvader from './SpaceInvader';
import UltramanRagdoll from './UltramanRagdoll';
import Modal from '../modal/Modal';
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

    const [showProjectDetail, setShowProjectDetail] = useState(false);

    const openProjectDetail = () => {
        setShowProjectDetail(true);
    }

    const closeProjectDetail = () => {
        setShowProjectDetail(false);
    }

    return (
        <>
        <Modal show={showProjectDetail} hideModal={closeProjectDetail}/>
        <div className={'fullPageBody'}>
        <ResponsivePage>
            <PageHeader short label={'Projects'} descr={descr} />
            <div className={'projectGallery'}>
                <GenS id={ids.genS} openDetail={openProjectDetail}/>
                <SecretGifta imageOnLeft id={ids.secretGifta} openDetail={openProjectDetail}/>
                <ChefsHat id={ids.chefsHat} openDetail={openProjectDetail}/>
                <SpaceInvader imageOnLeft id={ids.spaceInvader} openDetail={openProjectDetail}/>
                <UltramanRagdoll id={ids.ultramanRagdoll} openDetail={openProjectDetail}/>
                <div className="clearfix"></div>
            </div>
        </ResponsivePage>
        </div>
        </>
    )
}

export default Projects