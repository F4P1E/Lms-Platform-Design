import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CTASection = () => {
  return (
    <section id="cta" className="bg-blue-600 text-white text-center py-24">
      <h2 className="text-3xl font-semibold">Ready to Start Learning?</h2>
      <p className="mt-4 text-lg">Join our LMS today and unlock your potential.</p>
      <Link to="/register"> {/* Use Link to navigate to Register page */}
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Sign Up Now
        </button>
      </Link>
    </section>
  );
};

export default CTASection;
