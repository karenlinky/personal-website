import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import About from '../about/About';
import './content.css'

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/home'} element={<div className={'fullPageContent'}><About /></div>} />
        {/* <Route path="*" element={<Redirect />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Content