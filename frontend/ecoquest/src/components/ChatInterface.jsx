// src/components/ChatInterface.js
import React, { useState, useRef } from 'react';
import noPlasticImage from '../assets/noplastic.jpeg';
import treePlantImage from '../assets/treeplant.jpeg';

const ChatInterface = ({ onBack, title }) => {
  const [liked, setLiked] = useState(false);
  const fileInputRef = useRef(null);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-white shadow-lg z-50">
      <div className="flex items-center justify-between bg-primary text-white h-24 px-6">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <span className="text-2xl font-bold align-middle">Chat</span>
        </div>
        <button className="text-gray-200 hover:text-gray-400" onClick={onBack}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-8">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <img
              src={noPlasticImage}
              alt="User image"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="bg-gray-200 p-4 rounded-md">
              <img
                src={treePlantImage}
                alt="Tree Plant"
                className="rounded-md w-full"
              />
              <button
                className={`mt-2 ${liked ? 'text-green-500' : 'text-blue-500'}`}
                onClick={handleLikeClick}
              >
                {liked ? 'Liked' : 'Like'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-4 border-t border-gray-200">
        <input
          type="file"
          id="chatImage"
          name="chatImage"
          className="hidden"
          ref={fileInputRef}
        />
        <button
          type="button"
          onClick={handleFileButtonClick}
          className="flex items-center justify-center flex-grow h-10 bg-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-300"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V8l-6-6H6c-1.104 0-2 .896-2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 4v6h6"
            />
          </svg>
          <span className="text-gray-500">Choose the image</span>
        </button>
        <button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-md font-bold ml-4 hover:bg-primary-dark"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;

