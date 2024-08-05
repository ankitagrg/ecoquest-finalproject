import React, { useState } from 'react';
import defaultProfile from '../assets/default-profile-image.jpg';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const HorizontalNavbar = () => {
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="w-full bg-primary h-16 fixed top-0 left-0 flex items-center justify-between px-4 text-white shadow-lg">
      <div className="flex items-center">
        <img
          src={Logo}
          alt=""
          className="w-40 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex items-center">
        {showSignup && (
          <Link to="/signup">
            <button
              onClick={handleSignupClick}
              className="bg-white hover:bg-slate-200 text-primary font-bold py-2 px-4 rounded mr-4 shadow-md hover:shadow-lg transition-shadow"
            >
              Signup
            </button>
          </Link>
        )}
        <img
          src={defaultProfile}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
          onClick={handleSignupClick} // Toggle signup button visibility on profile image click
        />
      </div>
    </div>
  );
};

export default HorizontalNavbar;
