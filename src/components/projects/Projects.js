import React, { useState } from 'react';
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import GenS from './GenS';
import SecretGifta from './SecretGifta';
import ChefsHat from './ChefsHat';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import ScrollIndicatorTracker from '../scrollIndicator/ScrollIndicatorTracker';

const Projects = () => {
    const descr = <><div>Over the years, I have completed several projects.</div>
        <div>Each one has presented its own unique set of challenges and here are a few of projects that I am proud of.</div></>

    const [showIndicator, setShowIndicator] = useState(true);
    const hideIndicator = () => {
        setShowIndicator(false);
    }

    return (
        <div className={'fullPageBody'}>
            <ScrollIndicator showIndicator={showIndicator} />
            <ResponsivePage>
                <PageHeader label={'Projects'} descr={descr} />
                <ScrollIndicatorTracker threshold={0.3} onScrolledIn={hideIndicator}>
                    <GenS />
                </ScrollIndicatorTracker>
                <SecretGifta imageOnLeft/>
                <ChefsHat />
            </ResponsivePage>
        </div>
    )
}

export default Projects