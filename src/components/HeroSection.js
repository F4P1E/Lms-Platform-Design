import React from 'react';
import { FaBookOpen, FaUsers } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-8 md:py-10">
      <h2 className="text-xl md:text-2xl font-bold leading-tight" style={{ fontFamily: 'Protest Strike' }}>
        <FaBookOpen className="inline-block text-4xl md:text-5xl mb-1 transition-transform transform hover:scale-110" /> {/* Smaller Icon */}
        Empower Your Learning Journey
      </h2>
      <p className="mt-1 text-xs md:text-sm" style={{ fontFamily: 'Protest Strike' }}>
        <FaUsers className="inline-block text-2xl md:text-3xl mb-1 transition-transform transform hover:scale-110" /> {/* Smaller Icon */}
        Join our platform to access courses, resources, and a supportive community.
      </p>
      <button className="mt-3 px-3 py-1 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
