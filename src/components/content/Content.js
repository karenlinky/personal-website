import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from '../header/Header';
import React from 'react';
import About from '../about/About';
import WorkExperiences from "../workExperiences/WorkExperiences";
import Projects from "../projects/Projects";
import HeaderSpace from "../header/HeaderSpace";
import './content.css'
import UIDesign from "../uiDesign/UIDesign";

const Content = () => {
  return (
    <div className={'fullPageContent'}>
      <BrowserRouter>
        <Header />
        <HeaderSpace />
        <Routes>
          <Route path={'/home'} element={<About />} />
          <Route path={'/work_experiences'} element={<WorkExperiences />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/ui_design'} element={<UIDesign />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Content