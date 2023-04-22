import React from 'react'
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import './aboutMe.css';

import profilePic from '../../img/profilePic/profilePic.jpg';

const AboutMe = () => {
    const descr = <><div>I'm a software engineer. I'm studying Computer Science at University of Waterloo and I'm graduating in 2023 April.
        Through my internships and projects, I've gained experiences on both front-end and back-end developing.
        Full-stack development is particularly appealing to me due to the level of ownership it provides.
        Moreover, I also enjoy developing the frontend (including designing the UI) because I like making visually impactful work.
        </div></>
    
    return (
        <div className={'fullPageBody'}>
            <ResponsivePage>
                <PageHeader shortTopPadding threshold={0} label={'I\'m Karen'} descr={descr} img={{img: profilePic, alt: 'profile picture'}}/>
            </ResponsivePage>
        </div>
    )
}

export default AboutMe