    import { useState } from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = () => {
    const navItems = ['Home', 'About Us', 'Services', 'Projects', 'News'];
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Flightly
            </span>
        </Link>

        {/* Glassy Capsule Navbar */}
        <div className="hidden md:block bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full px-4 py-2 border border-white border-opacity-20">
            <ul className="flex space-x-4">
            {navItems.map((item) => (
                <li key={item}>
                <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className={`px-3 py-2 transition-all duration-300 ${
                    hoveredItem && hoveredItem !== item
                        ? 'text-white text-opacity-30'
                        : 'text-white text-opacity-80 hover:text-opacity-100'
                    }`}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {item}
                </Link>
                </li>
            ))}
            </ul>
        </div>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Sign In
        </button>
        </nav>
    );
    };

    export default Navbar;
