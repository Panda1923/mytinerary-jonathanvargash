import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/pages/Home.jsx';  // Página de inicio
import CitiesPage from './components/pages/CitiesPage.jsx';  // Página Cities

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
