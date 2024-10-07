import React from 'react';
import CityCard from '../CityCard.jsx'; // Asegúrate de que la ruta sea correcta

const CitiesPage = () => {
  const cities = [
    { id: 1, name: 'Bangkok', description: 'Una de las ciudades asiáticas más conocidas, Bangkok, destaca por sus barrios rojos, su animada vida nocturna y su deliciosa comida callejera. ', imageUrl: 'https://th.bing.com/th/id/R.42cb4fcdeabc1cbbf89666948a3b07fb?rik=pWnYNXgOlS3l2g&riu=http%3a%2f%2fimagenesdepaisajes.org%2fwp-content%2fuploads%2f2016%2f07%2fpaisajes-mas-hermosos-del-mundo-costa.jpg&ehk=QuXqZBP%2bkT%2bexcOg4SMFrrUfvy99UMyK1dAyMFYXj6g%3d&risl=&pid=ImgRaw&r=0' },
    { id: 2, name: 'Perú', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190306/Peru1.jpg' },
    { id: 3, name: 'Nueva zelanda', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://cdn1.intriper.com/wp-content/uploads/2019/06/20192847/Nueva-zelanda-1024x563.jpg' },
    { id: 1, name: 'Austria', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191248/Austria.jpg' },
    { id: 2, name: 'Canada', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191208/canada.jpg' },
    { id: 3, name: 'Noruega', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191151/noruega.jpg' },
    { id: 1, name: 'Mauricio', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191118/Mauricio.jpg' },
    { id: 2, name: 'Grecia', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191017/grecia.jpg' },
    { id: 3, name: 'Namibia', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190945/Namibia.jpg' },
    { id: 1, name: 'Nueva York', description: 'La ciudad que nunca duerme.', imageUrl: 'https://th.bing.com/th/id/OIP.bP4IEtxA3iBTrHO8XCQDLAHaE7?rs=1&pid=ImgDetMain' },
    { id: 2, name: 'Finlandia', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190932/Finlandia.jpg' },
    { id: 3, name: 'Chile', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190916/Chile.jpg' },
    { id: 1, name: 'Filipinas', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190839/Filipinas.jpg' },
    { id: 2, name: 'Croacia', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190820/Croacia.jpg' },
    { id: 3, name: 'Portugal', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190800/portugal.jpg' },
    { id: 1, name: 'Chipre', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190741/Chipre.jpg' },
    { id: 2, name: 'Venezuela', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190722/Venezuela.jpg' },
    { id: 3, name: 'Botsuana', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190703/Botsuana.jpg' },
    { id: 1, name: 'Brasil', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190608/Brasil.jpg' },
    { id: 2, name: 'Malasia', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190347/malasia.jpg' },
    { id: 3, name: 'Argentina', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190422/Argentina.jpg' },
    { id: 1, name: 'Sri Lanka', description: 'La ciudad que nunca duerme.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/09154855/1.-Sri-Lanka.jpg' },
    { id: 2, name: 'Sudáfrica', description: 'Una ciudad histórica y moderna.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190508/Sudafrica.jpg' },
    { id: 3, name: 'Nepal', description: 'La metrópolis más grande del mundo.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190623/Nepal.jpg' },
  ];

  return (
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.0530b5a64194d553134978fb5aee25f9?rik=RM10Y6OaHMi3oA&pid=ImgRaw&r=0)' }}  // Reemplaza con la ruta de tu imagen
  >
    <div className="bg-black bg-opacity-40 min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center text-white my-8">Ciudades a Visitar</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  </div>
);
};

export default CitiesPage;
