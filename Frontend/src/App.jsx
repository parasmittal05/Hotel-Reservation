import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Pages/Home';
import Success from './Pages/Success';
import NOTFOUND from './Pages/NOTFOUND';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NOTFOUND />} />
        </Routes>
      </Router>
      {/* Add Toaster to show toast notifications */}
      <Toaster />
    </>
  );
}

export default App;
