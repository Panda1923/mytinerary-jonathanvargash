import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Carousel from './components/Carousel.jsx';

function App() {
  const cities = [
    {
      id: 1,
      name: 'París',
      description: 'La ciudad del amor y la torre Eiffel.',
      imageUrl: 'https://images5.alphacoders.com/456/456536.jpg',
    },
    {
      id: 2,
      name: 'Nueva York',
      description: 'La Gran Manzana, hogar de Times Square y Central Park.',
      imageUrl: 'https://images5.alphacoders.com/456/456536.jpg',
    },
    {
      id: 3,
      name: 'Tokio',
      description: 'Una ciudad vibrante llena de cultura y tecnología.',
      imageUrl: 'https://images5.alphacoders.com/456/456536.jpg',
    },
    // Agrega más ciudades aquí
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Hero /> {/* Aquí colocamos el Hero */}
      </div>
      
      <div className="flex-grow py-10">
        <h1 className="text-4xl font-bold text-center mb-6">Ciudades para Visitar</h1>
        <Carousel cities={cities} />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
