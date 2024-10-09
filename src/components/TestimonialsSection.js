import React from 'react';

const testimonials = [
  {
    text: "This platform transformed my learning experience! Highly recommended.",
    author: "User A",
  },
  {
    text: "The community support is incredible. I never felt alone in my studies.",
    author: "User B",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <h2 className="text-3xl font-semibold text-center">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
            <p className="italic">"{testimonial.text}"</p>
            <cite className="mt-4 block text-right text-gray-600">- {testimonial.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
