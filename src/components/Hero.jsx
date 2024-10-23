import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen text-white" 
      style={{ backgroundImage: "url('https://images5.alphacoders.com/456/456536.jpg')" }}
    >
      <div className=" inset-0 bg-gradient-to-b from-purple-700 via-blue-500 to-indigo-900 opacity-75"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn font-extrabold text-yellow-300">
          Explore the World with MY TINERARY
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white">
          Discover the best cities and plan your perfect adventure.
        </p>
        <p className="text-lg md:text-2xl mb-6 text-white">
          Ready for your next big adventure? Explore incredible destinations and create unforgettable memories!
        </p>
        <a
          href="/cities"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-full mt-4 hover:from-yellow-500 hover:to-pink-500 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110 inline-flex items-center space-x-2 shadow-lg"
        >
          <FontAwesomeIcon icon={faPlane} className="mr-2" />
          <span>Explorar Ciudades</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;