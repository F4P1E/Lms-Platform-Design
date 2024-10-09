import React from 'react';

const coursesData = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming using Python.',
    image: 'https://cdn.slidesharecdn.com/ss_thumbnails/introductiontoprogramming-230822140201-bd7b5ed8-thumbnail.jpg?width=640&height=640&fit=bounds', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    description: 'Become a full-stack web developer with this comprehensive course.',
    image: 'https://th.bing.com/th/id/OIP.hewryE3nxzTjQtWvXJF1UwHaFq?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    title: 'Data Science and Machine Learning',
    description: 'Dive into data analysis and machine learning concepts.',
    image: 'https://www.acadboost.com/s/store/courses/5f6f9fe90cf2ce121d6d730b/cover.jpg?v=1',
  },
];

const Course = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Bebas Neue' }}>
          Courses Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
