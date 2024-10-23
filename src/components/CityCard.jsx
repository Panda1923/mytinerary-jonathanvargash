import React from 'react';
import { Transition } from '@headlessui/react';

const CityCard = ({ city }) => {
  return (
    <Transition
      show={true}
      appear={true}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 translate-y-4"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-4"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src={city.imageUrl} alt={city.name} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{city.name}</h2>
          <p className="text-gray-700 mb-4">{city.description}</p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Gastronomy</h3>
            <p className="text-gray-700">{city.gastronomy}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Language</h3>
            <p className="text-gray-700">{city.language}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Tourist Spots</h3>
            <p className="text-gray-700">{city.bestTouristSpots}</p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CityCard;
