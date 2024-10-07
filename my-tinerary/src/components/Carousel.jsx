import React, { useState } from 'react';
import CityCard from './CityCard';

const Carousel = ({ cities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cities.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cities.map((city) => (
            <div key={city.id} className="min-w-full flex justify-center">
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
