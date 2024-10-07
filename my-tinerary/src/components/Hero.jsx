import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('https://images5.alphacoders.com/456/456536.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Explora el Mundo con MY TINERARY</h1>
        <p className="text-lg md:text-2xl mb-6">Descubre las mejores ciudades y planea tu aventura perfecta.</p>
        <a href="/cities" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition duration-300">
          Explorar ciudades
        </a>
      </div>
    </section>
  );
};

export default Hero;
