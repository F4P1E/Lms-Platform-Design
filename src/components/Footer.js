import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} LMS Platform. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h5 className="text-lg font-semibold">Follow Us</h5>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="text-lg font-semibold text-center">Subscribe to Our Newsletter</h5>
          <form className="flex justify-center mt-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="p-2 rounded-l-lg border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
