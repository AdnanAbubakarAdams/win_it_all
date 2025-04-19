// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import CatFacts from './components/CatFacts';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App">
     <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/catfacts" element={<CatFacts/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
