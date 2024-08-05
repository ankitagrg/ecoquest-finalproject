import React from 'react';
import { Link } from 'react-router-dom';
import defaultProfile from '../assets/default-profile-image.jpg';


const Navigation = () => {
  const username = "Subi";

  const handleLogout = () => {
    console.log("Logged out");
  };

  return (
    <div className="w-1/5 bg-primary h-screen fixed text-white p-4 flex flex-col items-center">
      <div className="flex flex-col items-center bg-opacity-50 p-8 rounded-lg mb-4 flex-grow">
        <div className="flex flex-col items-center mb-8">
          <Link to="/profile">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-4 cursor-pointer" // Add cursor-pointer for better UX
            />
          </Link>
          <div className="text-center text-2xl font-bold">
            <p>Hi, {username}</p>
          </div>
        </div>
        <ul className="flex flex-col space-y-4 text-xl text-center w-full">
          <li>
            <Link to="/" className="block bg-gray-700 bg-opacity-70 p-3 rounded-md w-full text-center">Dashboard</Link>
          </li>
          <li>
            <Link to="/marketplace" className="block bg-gray-700 bg-opacity-70 p-3 rounded-md w-full text-center">Marketplace</Link>
          </li>
          <li>
            <Link to="/community" className="block bg-gray-700 bg-opacity-70 p-2 rounded-md w-full text-center">Community</Link>
          </li>
          <li>
            <Link to="/about" className="block bg-gray-700 bg-opacity-70 p-2 rounded-md w-full text-center">About</Link>
          </li>
        </ul>
        <button 
          onClick={handleLogout}
          className="bg-amber-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navigation;
