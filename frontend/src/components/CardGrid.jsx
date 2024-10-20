/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const Card = ({ title, subtitle, imageUrl, index }) => (
  <Tilt
    options={{
      max: 15, // Reduced max tilt
      scale: 1.03, // Slightly reduced scale
      speed: 3000, // Increased speed for smoother transition
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)" // Smooth easing function
    }}
  >
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-[500px] flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2, 
        ease: "easeOut" 
      }}
    >
      <div className="h-64 bg-gray-300 relative overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <motion.h2 
          className="text-2xl font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-300 mb-6 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.button 
          className="text-blue-400 hover:underline flex items-center mt-auto"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.9 }}
        >
          Read more 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  </Tilt>
);

const CardGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch card data
    setTimeout(() => {
      setCards([
        {
          id: 1,
          title: "The Evolution of UI Design",
          subtitle: "From skeuomorphism to flat design and beyond, explore the journey of user interface design. Discover how design trends have shaped the digital landscape and what the future holds for UI/UX.",
          imageUrl: "/api/placeholder/400/300"
        },
        {
          id: 2,
          title: "Responsive Web Development",
          subtitle: "Crafting seamless experiences across devices has become crucial in our multi-screen world. Learn about the principles, techniques, and best practices for creating responsive websites that look great on any device.",
          imageUrl: "/api/placeholder/400/300"
        },
        {
          id: 3,
          title: "The Rise of Progressive Web Apps",
          subtitle: "Blurring the line between web and native applications, Progressive Web Apps are changing how we think about mobile experiences. Dive into the technology behind PWAs and their impact on web development.",
          imageUrl: "/api/placeholder/400/300"
        },
        {
          id: 4,
          title: "Accessibility in Modern Websites",
          subtitle: "Ensuring the web is open for everyone is not just a noble goal, it's a necessity. Explore the importance of web accessibility, common challenges, and how to implement accessible design in your projects.",
          imageUrl: "/api/placeholder/400/300"
        }
      ]);
    }, 1000); // Delay to simulate loading
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <Card key={card.id} {...card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;