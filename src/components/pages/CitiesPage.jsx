import React from 'react';
import CityCard from '../CityCard.jsx'; // Asegúrate de que la ruta sea correcta

const CitiesPage = () => {
  const cities = [
    { 
        id: 1, 
        name: 'Bangkok', 
        description: 'One of the most well-known Asian cities, Bangkok stands out for its red light districts, lively nightlife, and delicious street food.', 
        imageUrl: 'https://th.bing.com/th/id/OIP.SeCxLUAea32E7EYWyQ2z_QHaEK?rs=1&pid=ImgDetMain',
        language: 'Thai',
        gastronomy: 'Pad Thai, Som Tum, Tom Yum Goong',
        bestTouristSpots: ['The Grand Palace', 'Wat Arun', 'Chatuchak Market']
    },
    { 
        id: 2, 
        name: 'Perú', 
        description: 'Peru awaits you with open arms!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190306/Peru1.jpg',
        language: 'Spanish',
        gastronomy: 'Ceviche, Lomo Saltado, Anticuchos',
        bestTouristSpots: ['Machu Picchu', 'Nazca Lines', 'Sacred Valley']
    },
    { 
        id: 3, 
        name: 'Nueva Zelanda', 
        description: 'Discover the magic of New Zealand!.', 
        imageUrl: 'https://cdn1.intriper.com/wp-content/uploads/2019/06/20192847/Nueva-zelanda-1024x563.jpg',
        language: 'English, Maori',
        gastronomy: 'Hangi, Pavlova, Fish and Chips',
        bestTouristSpots: ['Fiordland National Park', 'Rotorua', 'Hobbiton Movie Set']
    },
    { 
        id: 4, 
        name: 'Austria', 
        description: 'Come and fall in love with Austria!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191248/Austria.jpg',
        language: 'German',
        gastronomy: 'Wiener Schnitzel, Apfelstrudel, Sachertorte',
        bestTouristSpots: ['Schönbrunn Palace', 'Hofburg', 'Salzburg']
    },
    { 
        id: 5, 
        name: 'Canada', 
        description: 'Find out why Canada is the perfect destination!', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191208/canada.jpg',
        language: 'English, French',
        gastronomy: 'Poutine, Maple Syrup, Bannock',
        bestTouristSpots: ['Niagara Falls', 'Banff National Park', 'CN Tower']
    },
    { 
        id: 6, 
        name: 'Noruega', 
        description: 'Immerse yourself in the culture and beauty of Noruega!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191151/noruega.jpg',
        language: 'Norwegian',
        gastronomy: 'Rakfisk, Pinnekjøtt, Lutefisk',
        bestTouristSpots: ['Geirangerfjord', 'Bergen', 'Lofoten Islands']
    },
    { 
        id: 7, 
        name: 'Mauricio', 
        description: 'Make Mauricio your next travel destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191118/Mauricio.jpg',
        language: 'English, French',
        gastronomy: 'Dholl Puri, Fish Vindaye, Bol Renversé',
        bestTouristSpots: ['Black River Gorges National Park', 'Le Morne Brabant', 'Île aux Cerfs']
    },
    { 
        id: 8, 
        name: 'Grecia', 
        description: 'Grecia awaits you with open arms!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191017/grecia.jpg',
        language: 'Greek',
        gastronomy: 'Moussaka, Souvlaki, Tzatziki',
        bestTouristSpots: ['Acropolis', 'Santorini', 'Meteora']
    },
    { 
        id: 9, 
        name: 'Namibia', 
        description: 'Find out why Namibia is the perfect destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190945/Namibia.jpg',
        language: 'English',
        gastronomy: 'Biltong, Kapana, Potjiekos',
        bestTouristSpots: ['Etosha National Park', 'Sossusvlei', 'Fish River Canyon']
    },
    { 
        id: 10, 
        name: 'Nueva York', 
        description: 'Discover the magic of New York!.', 
        imageUrl: 'https://th.bing.com/th/id/OIP.bP4IEtxA3iBTrHO8XCQDLAHaE7?rs=1&pid=ImgDetMain',
        language: 'English',
        gastronomy: 'New York Pizza, Bagels, Hotdogs',
        bestTouristSpots: ['Statue of Liberty', 'Central Park', 'Times Square']
    },
    { 
        id: 11, 
        name: 'Finlandia', 
        description: 'Find out why Finlandia is the perfect destination!', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190932/Finlandia.jpg',
        language: 'Finnish, Swedish',
        gastronomy: 'Karjalanpiirakka, Kalakukko, Ruisleipä',
        bestTouristSpots: ['Northern Lights', 'Helsinki Cathedral', 'Saimaa Lake']
    },
    { 
        id: 12, 
        name: 'Chile', 
        description: 'Immerse yourself in the culture and beauty of Chile!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190916/Chile.jpg',
        language: 'Spanish',
        gastronomy: 'Pastel de Choclo, Empanadas, Completo',
        bestTouristSpots: ['Atacama Desert', 'Torres del Paine', 'Valparaíso']
    },
    { 
        id: 13, 
        name: 'Filipinas', 
        description: 'Come and fall in love with Filipinas!', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190839/Filipinas.jpg',
        language: 'Filipino, English',
        gastronomy: 'Adobo, Sinigang, Lechon',
        bestTouristSpots: ['Chocolate Hills', 'Boracay', 'Palawan']
    },
    { 
        id: 14, 
        name: 'Croacia', 
        description: 'Discover the magic Croacia!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190820/Croacia.jpg',
        language: 'Croatian',
        gastronomy: 'Peka, Crni Rižot, Štrukli',
        bestTouristSpots: ['Plitvice Lakes', 'Dubrovnik', 'Hvar']
    },
    { 
        id: 15, 
        name: 'Portugal', 
        description: 'Come and fall in love with Portugal!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190800/portugal.jpg',
        language: 'Portuguese',
        gastronomy: 'Bacalhau, Pastel de Nata, Caldo Verde',
        bestTouristSpots: ['Belém Tower', 'Sintra', 'Douro Valley']
    },
    { 
        id: 16, 
        name: 'Chipre', 
        description: 'Find out why Chipre is the perfect destination!', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190741/Chipre.jpg',
        language: 'Greek, Turkish',
        gastronomy: 'Halloumi, Souvla, Kleftiko',
        bestTouristSpots: ['Aphrodite\'s Rock', 'Kykkos Monastery', 'Larnaca Salt Lake']
    },
    { 
        id: 17, 
        name: 'Venezuela', 
        description: 'Make Venezuela your next travel destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190722/Venezuela.jpg',
        language: 'Spanish',
        gastronomy: 'Arepas, Pabellón Criollo, Hallacas',
        bestTouristSpots: ['Angel Falls', 'Los Roques', 'Roraima']
    },
    { 
        id: 18, 
        name: 'Botsuana', 
        description: 'Venture into Botsuana and live unforgettable experiences!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190703/Botsuana.jpg',
        language: 'English, Tswana',
        gastronomy: 'Seswaa, Morogo, Vetkoek',
        bestTouristSpots: ['Okavango Delta', 'Chobe National Park', 'Makgadikgadi Pans']
    },
    { 
        id: 19, 
        name: 'Brasil', 
        description: 'Make Brasil your next travel destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190608/Brasil.jpg',
        language: 'Portuguese',
        gastronomy: 'Feijoada, Churrasco, Açaí',
        bestTouristSpots: ['Christ the Redeemer', 'Iguaçu Falls', 'Amazon Rainforest']
    },
    { 
        id: 20, 
        name: 'Malasia', 
        description: 'Find out why Malasia is the perfect destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190347/malasia.jpg',
        language: 'Malay',
        gastronomy: 'Nasi Lemak, Rendang, Satay',
        bestTouristSpots: ['Petronas Towers', 'Langkawi', 'Batu Caves']
    },
    { 
        id: 21, 
        name: 'Argentina', 
        description: 'Come and fall in love with Argentina!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190422/Argentina.jpg',
        language: 'Spanish',
        gastronomy: 'Asado, Empanadas, Dulce de Leche',
        bestTouristSpots: ['Iguazu Falls', 'Patagonia', 'Buenos Aires']
    },
    { 
        id: 22, 
        name: 'Sri Lanka', 
        description: 'Venture into Sri Lanka and live unforgettable experiences!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/09154855/1.-Sri-Lanka.jpg',
        language: 'Sinhala, Tamil',
        gastronomy: 'Kottu, Rice and Curry, Pol Sambol',
        bestTouristSpots: ['Sigiriya', 'Temple of the Tooth', 'Ella Rock']
    },
    { 
        id: 23, 
        name: 'Sudáfrica', 
        description: 'Make Sudafrica your next travel destination!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190508/Sudafrica.jpg',
        language: 'English, Zulu, Afrikaans',
        gastronomy: 'Biltong, Bobotie, Bunny Chow',
        bestTouristSpots: ['Table Mountain', 'Kruger National Park', 'Robben Island']
    },
    { 
        id: 24, 
        name: 'Nepal', 
        description: 'Venture into Nepal and live unforgettable experiences!.', 
        imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190623/Nepal.jpg',
        language: 'Nepali',
        gastronomy: 'Momo, Dal Bhat, Sel Roti',
        bestTouristSpots: ['Mount Everest', 'Kathmandu', 'Pokhara']
    }
];


  return (
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(https://th.bing.com/th/id/R.0530b5a64194d553134978fb5aee25f9?rik=RM10Y6OaHMi3oA&pid=ImgRaw&r=0)' }}  // Reemplaza con la ruta de tu imagen
  >
    <div className="bg-black bg-opacity-40 min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center text-white my-8">Cities to Visit</h1>
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
