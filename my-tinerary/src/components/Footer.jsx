import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Nombre de la página o logo */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">MY TINERARY</h1>
        </div>

        {/* Enlaces */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/cities" className="hover:underline">Cities</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-4 text-center">
        <p>&copy; 2024 MY TINERARY. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
