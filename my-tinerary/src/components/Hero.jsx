import React from "react";

const Hero = () => {
  return (
<section
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: "url('https://images5.alphacoders.com/456/456536.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Explore the World with MY TINERARY
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Discover the best cities and plan your perfect adventure.
        </p>
        <p className="text-lg md:text-2xl mb-6">
          Ready for your next big adventure? With MY TINERARY, explore incredible
          destinations, discover hidden gems and create unforgettable memories.
          Your perfect journey starts here!
        </p>
        <a
          href="/cities"
          className="bg-indigo-700 text-white font-bold py-3 px-6 rounded-full mt-4 hover:bg-yellow-600 transition duration-300 inline-flex items-center space-x-2"
        >
          {/* Imagen GIF en el botón */}
          <img
            src="./src/assets/_084acac1-e8c0-41c5-90f3-cc38f87cb6c8.jpeg" // Cambia esta URL por tu GIF
            alt="plane"
            className="w-8 h-8 mr-2"
          />
          <span>Explorar Ciudades</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;




