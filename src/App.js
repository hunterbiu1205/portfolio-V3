import './App.scss';
// Import HashRouter instead of BrowserRouter

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import NotFound from './pages/NotFound'; // Adjust the path based on your project structure

function App() {
  // Use useEffect to check and redirect when the component mounts
  useEffect(() => {
    // Check if the current URL contains a hash
    if (window.location.hash) {
      // Extract the path without the hash
      const pathWithoutHash = window.location.hash.substring(2);
      
      // Redirect to the path without the hash
      window.location.href = pathWithoutHash;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/portfolio-V3" element={<Home />} />
        <Route path="/portfolio-V3/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;