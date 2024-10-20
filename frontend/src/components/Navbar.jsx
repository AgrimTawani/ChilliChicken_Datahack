import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Navbar = () => {
    const navigate = useNavigate();
    const navItems = [
        { name: 'Home', target: 'home' },
        { name: 'About Us', target: 'about' },
        { name: 'Services', target: 'whyus' },
        { name: 'Why us', target: 'WhyUs' },
    ];
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle smooth scroll when clicking on a nav item
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchFlightsClick = () => {
    console.log('Navigating to /dashboard');
    navigate('/dashboard');
  };

  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <a href="#home" className="text-2xl font-bold" onClick={() => handleScroll('home')}>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Flightly
        </span>
      </a>

      {/* Glassy Capsule Navbar */}
      <div className="hidden md:block bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-4 border border-white border-opacity-20">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                className={`px-3 py-2 transition-all duration-300 ${
                  hoveredItem && hoveredItem !== item.name
                    ? 'text-white text-opacity-30'
                    : 'text-white text-opacity-80 hover:text-opacity-100'
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleScroll(item.target)} // Trigger scroll on click
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={handleSearchFlightsClick}>
        Search Flights
      </button>
    </nav>
  );
};

export default Navbar;
