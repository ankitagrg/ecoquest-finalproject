import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#cbfdf8]">
      <div className="bg-white rounded-lg bg-gradient-to-b from-[#339f93a8] to-[#F0F0F0] shadow-lg p-5 w-4/5 max-w-md h-4/5 max-h-[400px]">
        <h2 className="text-3xl text-[#1e594f] font-extrabold text-center">AirAlly</h2>
        <div className="text-center">
          <form id="login-form" className="mt-5">
            <input
              type="text"
              id="username"
              placeholder="Username or Email Address"
              required
              className="w-11/12 p-2 text-sm font-bold mb-7 border border-gray-300 rounded-md box-border"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              className="w-11/12 p-2 text-sm font-bold mb-7 border border-gray-300 rounded-md box-border"
            />
            <button
              type="submit"
              className="mt-5 w-2/5 bg-[#287E74] text-white text-lg font-bold rounded-lg hover:shadow-md"
            >
              Login
            </button>
          </form>
          <p className="mt-5 text-sm text-[#287E74] font-semibold">
            Don’t have an account? <a href="index.html" className="text-[#287E74] hover:cursor-pointer">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
