import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Contactss from './pages/Contactss';
const App = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="contact" element={<Contactss/>}/>
    </Routes>
    </div>
  )
}

export default App
