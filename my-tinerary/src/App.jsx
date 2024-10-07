import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Hero /> {/* Aquí colocamos el Hero */}
      </div>

      <Footer />
    </div>
  );
}

export default App;