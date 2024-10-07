import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="bg-slate-100 shadow-md rounded-lg overflow-hidden">
      <img src={city.imageUrl} alt={city.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{city.name}</h3>
        <p className="text-gray-600">{city.description}</p>
      </div>
    </div>
  );
};

export default CityCard;
