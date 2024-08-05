import React, { useState } from 'react';
import communityData from '../jsonfiles/community.json';
import noPlasticImage from '../assets/noplastic.jpeg';
import treePlantImage from '../assets/treeplant.jpeg';
import zeroWasteImage from '../assets/zerowaste.jpeg';
import ChatInterface from './ChatInterface';

const Community = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [view, setView] = useState('communityList'); // Manage views

  const handleCardClick = (community) => {
    setSelectedCommunity(community);
    setView('communityDetails');
  };

  const handleJoinClick = () => {
    setView('communityDetails'); // Stay on the community details view
  };

  const handleChatClick = () => {
    setView('chat');
  };

  const handleBackClick = () => {
    setSelectedCommunity(null);
    setView('communityList');
  };

  const handleChatBackClick = () => {
    setView('communityDetails');
  };

  // Map image paths to imported images
  const imageMap = {
    1: noPlasticImage,
    2: treePlantImage,
    3: zeroWasteImage,
  };

  return (
    <div className="w-full lg:w-3/4 ml-auto mt-16 p-8 bg-gray-100 h-screen overflow-y-auto no-scrollbar">
      <div className="flex flex-col space-y-8">
        {/* Community Cards */}
        {view === 'communityList' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityData.map((community) => (
              <div
                key={community.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(community)}
              >
                <img
                  src={imageMap[community.id]}
                  alt={community.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{community.title}</h3>
                  <p className="text-gray-600">{community.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Community Details Expanded */}
        {view === 'communityDetails' && (
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleBackClick}
            >
              <svg
                className="w-6 h-6"
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
            <img
              src={imageMap[selectedCommunity.id]}
              alt={selectedCommunity.title}
              className="w-full h-60 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{selectedCommunity.title}</h2>
            <h3 className="text-xl mb-4 text-gray-600">{selectedCommunity.subtitle}</h3>
            <p className="text-gray-700 mb-4">{selectedCommunity.description}</p>
            <p className="text-gray-600 mb-4">Active Participants: {selectedCommunity.participants}</p>
           
            {/* Render the Go to Chat button only after Join Challenge button is clicked */}
            {view === 'communityDetails' && !selectedCommunity.joined && (
              <button
                className="bg-primary text-white px-4 py-2 rounded-md font-bold hover:bg-primary-dark mt-4"
                onClick={handleChatClick}
              >
                Go to Chat
              </button>
            )}
          </div>
        )}

        {/* Join Form */}
        {view === 'joinForm' && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={handleBackClick}
              >
                <svg
                  className="w-6 h-6"
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
              <h2 className="text-2xl font-semibold mb-4">Join Challenge</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="proof">
                    Add Proof (upload files)
                  </label>
                  <input
                    type="file"
                    id="proof"
                    name="proof"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <button
                  type="button"
                  className="bg-primary text-white px-4 py-2 rounded-md font-bold hover:bg-primary-dark"
                  onClick={handleChatClick}
                >
                  Go to Chat
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        {view === 'chat' && (
          <ChatInterface onBack={handleChatBackClick} />
        )}
      </div>
    </div>
  );
};

export default Community;
