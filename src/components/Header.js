import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">LMS Platform</Link>
        </h1>
        <ul className="flex space-x-6 text-gray-600">
          <li><Link to="/courses" className="hover:text-blue-600">Courses</Link></li>
          <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
          <li><Link to="/profile" className="hover:text-blue-600">Profile</Link></li>
          <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
          <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
