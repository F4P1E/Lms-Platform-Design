import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation for tracking route changes
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Courses from './components/Courses'; // Import Courses component
import Resources from './components/Resources'; // Import Resources component
import Profile from './components/Profile'; // Import Profile component
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component

const App = () => {
  const location = useLocation(); // Get current location

  React.useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={
          <>
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </>
        } /> {/* Default Route for the main sections */}
        <Route path="/courses" element={<Courses />} /> {/* Route for Courses */}
        <Route path="/resources" element={<Resources />} /> {/* Route for Resources */}
        <Route path="/profile" element={<Profile />} /> {/* Route for Profile */}
        <Route path="/register" element={<Register />} /> {/* Register Route */}
        <Route path="/login" element={<Login />} /> {/* Login Route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
