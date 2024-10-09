import React from 'react';

const resourcesData = [
  {
    id: 1,
    title: 'JavaScript Guide',
    description: 'An extensive guide to JavaScript programming.',
    category: 'Programming',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    image: 'https://emaillistvalidation.com/blog/content/images/2023/09/JavaScript-Symbol.png', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'CSS Tricks',
    description: 'Learn advanced CSS techniques and tricks.',
    category: 'Web Design',
    link: 'https://css-tricks.com/',
    image: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png',
  },
  {
    id: 3,
    title: 'React Documentation',
    description: 'Official React documentation and tutorials.',
    category: 'Frameworks',
    link: 'https://reactjs.org/docs/getting-started.html',
    image: 'https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png',
  },
];

const Resources = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Bebas Neue' }}>
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{resource.title}</h3>
                <p className="mt-2 text-gray-600">{resource.description}</p>
                <p className="mt-1 text-sm text-gray-500">{resource.category}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Access Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
