import React from 'react';

// Example feature data
const features = [
  {
    title: 'Interactive Courses',
    description: 'Engage with interactive content and quizzes to enhance your learning experience.',
    icon: '📚', // You can replace this with an actual icon component
  },
  {
    title: 'Community Support',
    description: 'Join a community of learners and get support from peers and instructors.',
    icon: '🤝',
  },
  {
    title: 'Progress Tracking',
    description: 'Keep track of your learning progress with our built-in analytics tools.',
    icon: '📈',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto py-20">
      <h2 className="text-3xl font-semibold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div> {/* Icon */}
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
