// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 py-6 mt-8">
      <div className="container mx-auto text-center text-white">
        <p className="text-sm">&copy; 2024 MY TINERARY. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" className="hover:text-yellow-500 transition duration-300">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:text-yellow-500 transition duration-300">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:text-yellow-500 transition duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

