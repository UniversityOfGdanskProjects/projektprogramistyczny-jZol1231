import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Products from './components/products/Products';

function App() {

  const [showProducts, setShowProducts] = useState(false);

  const handleExploreClick = () => {
      setShowProducts(true);
      setTimeout(() => {
          document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      }, 100);
  };


  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<>
              <Home onExploreClick={ handleExploreClick } />
              {showProducts && <Products show={ showProducts } />}
              </>
            }/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
