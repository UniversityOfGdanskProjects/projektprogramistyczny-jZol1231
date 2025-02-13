import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
