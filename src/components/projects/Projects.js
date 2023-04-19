import React from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';

const Projects = () => {
    const descr = <><div>Over the years, I have completed several projects.</div>
        <div>Each one has presented its own unique set of challenges and here are a few of projects that I am proud of.</div></>

    return (
        <div className={'fullPageBody'}>
        <ResponsivePage>
            <PageHeader label={'Projects'} descr={descr} />
            <GenS />
            <SecretGifta />
        </ResponsivePage>
        </div>
    )
}

export default Projects