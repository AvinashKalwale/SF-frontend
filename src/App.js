import React from 'react'
import { Routes, Route } from "react-router-dom";
import DisplayPage from './components/DisplayPage';
import ErrorPage from './components/ErrorPage';
import FormPage from './components/FormPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/DisplayPage" element={<DisplayPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>


  )
}

export default App
