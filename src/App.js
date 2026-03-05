import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CapitalCityRoofing from './components/CapitalCityRoofing'; // Ensure the path is correct
import BarbershopWebsite from './components/BarbershopWebsite'; // Ensure the path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Your main portfolio home page */}
          <Route path="/" element={<Home />} />
          
          {/* The standalone roofing website page */}
          <Route path="/capital-city-roofing" element={<CapitalCityRoofing />} />
          <Route path="/barbershop-website" element={<BarbershopWebsite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;