import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '',
    picture: null,
    jobs: ['Software Engineer at Company A', 'Intern at Company B'],
    education: ['Bachelor of Science in Computer Science'],
    workHistory: ['Cashier & Cook at McDonald\'s'],
    projects: [
      {
        title: 'Build a Website using an API with HTML, JavaScript, and JSON',
        description: 'Developed a weather forecast app using HTML, CSS, and JavaScript, integrating the 7timer API for real-time data, showcasing skills while delivering valuable insights for various business applications.',
        link: '#'
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser((prev) => ({ ...prev, picture: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User updated:', user);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-8">
          {user.picture ? (
            <img
              src={user.picture}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mr-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-300 border-4 border-blue-500 shadow-lg mr-4"></div>
          )}
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">Share Profile Link</button>
            <button className="mt-2 ml-2 px-4 py-2 bg-gray-300 rounded-lg">Update Profile Visibility</button>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {user.projects.map((project, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg border-gray-300">
              <h4 className="text-lg font-bold">{project.title}</h4>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
          <h4 className="text-sm text-gray-500">Work history</h4>
          {user.workHistory.map((job, index) => (
            <p key={index} className="text-gray-700">{job}</p>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <h4 className="text-lg font-bold">Credentials</h4>
          <div className="text-gray-700">
            <p className="font-semibold">Massachusetts Institute of Technology</p>
            <p>Bachelor's degree in Engineering</p>
            <p className="text-gray-500">March 2022 - Present</p>
          </div>
          <div className="text-gray-700 mt-2">
            <p className="font-semibold">Urban International School</p>
            <p>High school diploma, Graduated September 2019</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Courses</h3>
          <div className="text-gray-700">
            <p className="font-semibold">IBM: Introduction to Artificial Intelligence (AI)</p>
            <p className="text-gray-500">Completed January 2024</p>
          </div>
          <div className="text-gray-700 mt-2">
            <p className="font-semibold">Google Cloud: Introduction to Large Language Models</p>
            <p className="text-gray-500">Completed December 2023</p>
          </div>
          <div className="text-gray-700 mt-2">
            <p className="font-semibold">Google Cloud: Introduction to Responsible AI</p>
            <p className="text-gray-500">Completed December 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
