import React from 'react';
import Carousel from '../Carousel.jsx';
import citiesData from '../citiesData.js'; // Asegúrate de tener los datos de las ciudades
import Hero from '../Hero.jsx'

const Home = () => {
  return (
    
    <div className="home-page">
      <Hero />
      <h1 className="text-4xl font-bold text-center my-8">Explora ciudades</h1>
      <Carousel cities={citiesData} /> {/* Integramos el carrusel */}
   
    </div>
  );
};

export default Home;

