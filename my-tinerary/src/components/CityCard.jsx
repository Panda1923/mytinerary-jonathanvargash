import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="border p-4 shadow-lg rounded-md">
      <img src={city.imageUrl} alt={city.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{city.name}</h2>
      <p>{city.description}</p>
    </div>
  );
};

export default CityCard; // Asegúrate de que esté exportado como default
