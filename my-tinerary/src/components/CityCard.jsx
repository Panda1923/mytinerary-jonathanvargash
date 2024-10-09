import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={city.imageUrl} alt={city.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{city.name}</h3>
      <p>{city.description}</p>
    </div>
  );
};

export default CityCard;
