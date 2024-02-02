import React  from "react";
import {Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import NavBar from "./components/navBar";

function App() {

  return (
    <div className="App">
      {/* particles js */}
      {/* navBar */}
     <NavBar />
      {/* main page content */}
      
      <div className="App_main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills'element={<Skills/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
