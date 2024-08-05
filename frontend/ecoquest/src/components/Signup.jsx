// src/components/Signup.jsx
import React from 'react';

const Signup = () => {
  const signup = (event) => {
    event.preventDefault();
    alert('Signup submitted!');
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="flex-1 bg-gray-200 text-teal-800 font-bold flex flex-col justify-center items-center p-6">
        <span className="text-6xl md:text-8xl">EcoQuest</span>
        <span className="text-lg md:text-xl mt-4">
Track, Act and Transform Your World        </span>
      </div>

      <div className="flex-1 bg-teal-800 text-white flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <form
          id="signup-form"
          className="mt-4 flex flex-col items-center"
          onSubmit={signup}
        >
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            className="p-2 w-80 md:w-96 text-black font-bold mb-6 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 w-80 md:w-96 text-black font-bold mb-6 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="p-2 w-80 md:w-96 text-black font-bold mb-6 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            id="confirm_password"
            placeholder="Confirm Password"
            required
            className="p-2 w-80 md:w-96 text-black font-bold mb-6 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="p-2 w-2/3 md:w-1/2 mt-4 bg-white text-teal-800 font-bold text-lg rounded-full hover:shadow-md"
          >
            Create account
          </button>
        </form>
        <p className="mt-4 text-sm font-semibold">
          Already have an account?{' '}
          <a href="./login.html" className="text-white hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
