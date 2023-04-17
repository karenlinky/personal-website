import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from '../header/Header';
import React from 'react';
import About from '../about/About';
import './content.css'

const Content = () => {
  return (
    <div className={'fullPageContent'}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path={'/home'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Content