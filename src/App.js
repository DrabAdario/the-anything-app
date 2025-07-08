import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need for Link here anymore, it's in NavBar
import HomePage from './HomePage/HomePage';// import About from './components/About';
// import Contact from './components/Contact';
import NavBar from './NavBar/NavBar'; // Import the new NavBar component
import './App.css';
import About from './About/About';
function App() {
  return (
    <div className="App">
      <NavBar /> {/* Render the NavBar component here */}

      <div className="page-content" style={{ padding: '20px', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use HomePage for the root path */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;