import React, { useState } from 'react';
import UserInputForm from './UserInputForm';
import handleCalculateAndAdd from './CarbonEmissionCalculator';
import LineChart from './LineChart';
const UserInfo = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sampleData = [200, 300, 400, 500, 600, 550, 600];
  // Array of milestone values and labels
  const milestones = [200, 300, 400, 500, 600];
  // Sample activities with points assigned
  const initialActivities = [
    { id: 1, title: 'Read an article about climate change', points: 20 },
    { id: 2, title: 'Use paper straw', points: 10 },
    { id: 3, title: 'Use public vehicle today', points: 30 },
    { id: 4, title: 'Switch to LED Bulbs', points: 40 },
    { id: 5, title: 'Recycle Household Waste', points: 25 },
    { id: 6, title: 'Eat a plant-based meal', points: 50}
  ];
  const [activities, setActivities] = useState(initialActivities);
  const [completedActivities, setCompletedActivities] = useState(new Set());
  const [totalPoints, setTotalPoints] = useState(0);
  const handleMarkAsDone = (id, points) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
    setCompletedActivities((prev) => new Set(prev).add(id));
    setTotalPoints((prev) => prev + points);
  };
  const handleSkip = (id) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
    setCompletedActivities((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };
  const progressWidth = Math.min(
    (totalPoints / milestones[milestones.length - 1]) * 100,
    100
  );
  const handleCalculate = (inputs) => {
    console.log(inputs); // Handle form inputs and calculations here
    setIsFormOpen(false); // Close the dialog after handling
    handleCalculateAndAdd(inputs);
  };
  return (
    <div className="w-full lg:w-4/5 ml-auto mt-16 p-8 bg-gray-100 h-screen overflow-y-auto no-scrollbar">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col space-y-4 md:w-1/3">
          {/* Card for Points */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-44">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Points Achieved
            </h2>
            <div className="relative bg-gray-200 h-6 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
            {/* Labels below the progress bar */}
            <div className="flex flex-wrap justify-between mt-2 text-xs text-gray-600">
              {milestones.map((milestone, index) => (
                <span key={index} className="flex flex-col items-center w-1/5">
                  <span>{milestone}</span>
                  <span className="text-xs">Label {index + 1}</span>
                </span>
              ))}
            </div>
          </div>
          {/* Entry card */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-44">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Your Entry</h2>
            <p className='text-slate-500'>Enter your emission records here...</p>
            <button
              className="bg-primary text-white pt-2 pb-2 pl-4 pr-4 rounded-md font-bold border border-transparent hover:border-primary hover:bg-white mt-4 hover:text-primary"
              onClick={() => setIsFormOpen(true)} //opening form dialog here
            >
              Calculate Emissions
            </button>
          </div>
        </div>
        {/* Activities Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:w-2/3 h-96 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Activities</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`bg-gray-50 p-4 rounded-lg shadow-md ${
                  completedActivities.has(activity.id)
                    ? 'border-green-500 border-2'
                    : ''
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <span className="text-lg font-medium">{activity.title}</span>
                  <span className="text-sm text-gray-500">
                    ({activity.points} pts)
                  </span>
                  <div className="flex space-x-2 mt-2 md:mt-0">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      onClick={() =>
                        handleMarkAsDone(activity.id, activity.points)
                      }
                      disabled={completedActivities.has(activity.id)}
                    >
                      Done
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      onClick={() => handleSkip(activity.id)}
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <LineChart data={sampleData} />
      </div>
      {/* Dialog for User Input Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <UserInputForm onCalculate={handleCalculate} />
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFormOpen(false)}
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
          </div>
        </div>
      )}
    </div>
  );
};
export default UserInfo;