import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from '../header/Header';
import React from 'react';
import About from '../about/About';
import WorkExperiences from '../workExperiences/WorkExperiences';
import UIDesign from '../uiDesign/UIDesign';
import ThreeDModeling from '../ThreeDModeling/ThreeDModeling';
import ProjectsOLD from '../projects/ProjectsOLD';
import Projects from '../projects/Projects';
import AboutMe from "../aboutMe/AboutMe";
import HeaderSpace from '../header/HeaderSpace';
import Redirection from "../redirection/Redirection";
import './content.css'

const Content = () => {
  return (
    <div className={'fullPageContent'}>
      <BrowserRouter>
        <Header />
        <HeaderSpace />
        <Routes>
          <Route path={'/'} element={<About />} />
          <Route path={'/work_experiences'} element={<WorkExperiences />} />
          {/* <Route path={'/projects'} element={<ProjectsOLD />} /> */}
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/ui_design'} element={<UIDesign />} />
          <Route path={'/3d_modeling'} element={<ThreeDModeling />} />
          <Route path={'/about_me'} element={<AboutMe />} />
          <Route path={'*'} element={<Redirection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Content