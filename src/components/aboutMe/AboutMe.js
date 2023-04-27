import React from 'react'
import ResponsivePage from '../responsivePage/ResponsivePage';
import PageHeader from '../typography/PageHeader';
import IconButtonGroup from '../iconButton/IconButtonGroup';
import './aboutMe.css';

import profilePic from '../../img/profilePic/profilePic.jpg';

const AboutMe = () => {
    const descr = <><div>I'm a software engineer. I'm studying Computer Science at University of Waterloo and I'm graduating in 2023 April.
        I have gained experience in both front-end and back-end development through my internships and projects.
        I find full-stack development particularly interesting because of the sense of ownership it provides.
        Moreover, I also enjoy working on the front-end, including UI design, because I like making visually impactful work.<br/>
        I have a lot of hobbies. Other than coding, I like playing table tennis, basketball, ultimate frisbee and soccer, practicing wing chun, swimming, and doing 3D modeling.<br/><br/>
        Email: kyklin@uwaterloo.ca
        </div></>
    
    return (
        <>
        <div className={'fullPageBody'}>
            <ResponsivePage>
                <PageHeader aboutMe threshold={0} label={'Hi, I\'m Karen'} descr={descr} img={{img: profilePic, alt: 'profile picture'}}/>
            </ResponsivePage>
        </div>
        <div className='icons'>
            <IconButtonGroup />
        </div>
        </>
    )
}

export default AboutMe