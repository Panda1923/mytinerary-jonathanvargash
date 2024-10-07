import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">MY TINERARY</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/cities">Cities</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
