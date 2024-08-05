import React, { useState } from 'react';

const UserInputForm = ({ onCalculate }) => {
  const [inputs, setInputs] = useState({
    electronicUse: '0',
    heatingUse: '0',
    carTravel: 'none',
    publicTransport: 'none',
    airTravel: 'none',
    meatConsumption: 'none',
    vegetableConsumption: 'small',
    wasteGeneration: 'small'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div className="w-full ml-[10px] mt-16 p-8 bg-gray-100 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Carbon Emission Input Form</h2>
      <div className="flex flex-col space-y-6">

        {/* Electronic Use */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Electronic Device Usage</h3>
          <label className="block mb-4">
            How many hours did you use electronic devices today?
            <input
              type="range"
              name="electronicUse"
              min="0"
              max="24"
              value={inputs.electronicUse}
              onChange={handleChange}
              className="w-full mt-2"
            />
            <span className="block text-gray-600">{inputs.electronicUse} hours</span>
          </label>
        </div>

        {/* Heating Use */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Heating Appliance Usage</h3>
          <label className="block mb-4">
            Did you use any heating appliances today?
            <select name="heatingUse" value={inputs.heatingUse} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="0">No</option>
              <option value="1">Less than 1 hour</option>
              <option value="3">1-3 hours</option>
              <option value="6">More than 3 hours</option>
            </select>
          </label>
        </div>

        {/* Car Travel */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Car Travel</h3>
          <label className="block mb-4">
            Did you drive a car today?
            <select name="carTravel" value={inputs.carTravel} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="none">No</option>
              <option value="short">Short trip (less than 30 minutes)</option>
              <option value="medium">Medium trip (30-60 minutes)</option>
              <option value="long">Long trip (more than 60 minutes)</option>
            </select>
          </label>
        </div>

        {/* Public Transport */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Public Transport</h3>
          <label className="block mb-4">
            Did you use public transport today?
            <select name="publicTransport" value={inputs.publicTransport} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="none">No</option>
              <option value="short">Short distance (within city)</option>
              <option value="medium">Medium distance (to a nearby town)</option>
              <option value="long">Long distance (to another city)</option>
            </select>
          </label>
        </div>

        {/* Air Travel */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Air Travel</h3>
          <label className="block mb-4">
            Did you take a flight today?
            <select name="airTravel" value={inputs.airTravel} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="none">No</option>
              <option value="short">Short flight (under 3 hours)</option>
              <option value="medium">Medium flight (3-6 hours)</option>
              <option value="long">Long flight (more than 6 hours)</option>
            </select>
          </label>
        </div>

        {/* Meat Consumption */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Meat Consumption</h3>
          <label className="block mb-4">
            Did you eat any meat today?
            <select name="meatConsumption" value={inputs.meatConsumption} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="none">No</option>
              <option value="small">Small portion (less than 100g)</option>
              <option value="medium">Medium portion (100-200g)</option>
              <option value="large">Large portion (more than 200g)</option>
            </select>
          </label>
        </div>

        {/* Vegetable Consumption */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Vegetable Consumption</h3>
          <label className="block mb-4">
            How many servings of vegetables did you have today?
            <select name="vegetableConsumption" value={inputs.vegetableConsumption} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="small">1 serving</option>
              <option value="medium">2 servings</option>
              <option value="large">3+ servings</option>
            </select>
          </label>
        </div>

        {/* Waste Generation */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Waste Generation</h3>
          <label className="block mb-4">
            How much waste do you think you generated today?
            <select name="wasteGeneration" value={inputs.wasteGeneration} onChange={handleChange} className="mt-2 block w-full p-2 border rounded">
              <option value="small">A few items</option>
              <option value="medium">Half a bag</option>
              <option value="large">A full bag</option>
            </select>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => onCalculate(inputs)}
            className="bg-primary text-white py-2 px-4 rounded-md font-bold border border-transparent hover:border-primary hover:bg-white hover:text-primary"
          >
            Calculate Emissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInputForm;
