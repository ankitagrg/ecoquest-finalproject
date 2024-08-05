import React from 'react';
import marketplace from '../jsonfiles/marketplace.json';

const Marketplace = () => {
  return (
    <div className="w-full lg:w-4/5 ml-auto mt-16 p-8 bg-gray-100 h-screen overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {marketplace.map(shop => (
          <div
            key={shop.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
          >
            <a href={shop.link} target="_blank" rel="noopener noreferrer">
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{shop.name}</h3>
                <p className="text-sm text-gray-600">{shop.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
