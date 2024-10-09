import React, { useState, useEffect } from 'react';
import CityCard from './CityCard.jsx';

const Carousel = ({ cities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Número de tarjetas visibles a la vez

  // Mueve automáticamente el carrusel cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Cada 3 segundos se mueve al siguiente slide
    return () => clearInterval(intervalId); // Limpiamos el intervalo al desmontar el componente
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cities.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cities.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {cities.map((city) => (
            <div key={city.id} className="min-w-[25%] flex justify-center"> {/* Cambié a 25% para 4 tarjetas visibles */}
              <CityCard city={city} />
            </div>
          ))}
        </div>
      </div>

      {/* Botón de izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#8592;
      </button>

      {/* Botón de derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
