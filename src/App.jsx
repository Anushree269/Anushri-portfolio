import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Project from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'; // ✅ Added missing import
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/about'element={<About />}/>
        <Route path='/skills'element={<Skills />}/>
        <Route path='/experience'element={<Experience/>}/>
        <Route path='/projects'element={<Project />}/>
        <Route path='/contact'element={<Contact />}/>
      </Routes>
    </div>
  );
};

export default App;
