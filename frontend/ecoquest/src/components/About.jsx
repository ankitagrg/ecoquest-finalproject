import React from 'react';

const About = () => {
  return (
    <div className="w-full lg:w-4/5 ml-auto mt-16 p-8 bg-gray-100 h-screen overflow-y-auto no-scrollbar">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our app! We are dedicated to promoting sustainable living and environmental responsibility. Our platform provides tools and resources to help you make eco-friendly choices and track your impact on the environment.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to empower individuals with practical insights and actionable steps to reduce their carbon footprint and contribute to a healthier planet. Explore our features and join us in making a positive impact.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get Involved</h2>
        <p className="text-lg text-gray-700 mb-4">
          We believe in the power of community and collaboration. Participate in challenges, explore eco-friendly options, and help us spread the word. Together, we can make a difference.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact Us</h3>
        <p className="text-lg text-gray-700">
          Have questions or feedback? Reach out to us at <a href="mailto:ecoquest@ourapp.com" className="text-primary hover:underline">ecoquest@ourapp.com</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
