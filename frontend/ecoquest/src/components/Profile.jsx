import React, { useState, useEffect } from 'react';
import defaultProfile from '../assets/default-profile-image.jpg';
import badge1 from '../assets/badges/badge6.png';
import badge2 from '../assets/badges/badge2.png';
import badge3 from '../assets/badges/badge3.png';
import badge4 from '../assets/badges/badge4.png';   
import badge5 from '../assets/badges/badge5.png';
import Carousel from './Carousel';
import ContributionCalendar from './ContributionCalendar';
import Badge from './Badge';
import Points from './Points';
import axios from 'axios';

const Profile = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedActivities, setCompletedActivities] = useState(new Set());
  const [userPoints, setUserPoints] = useState(null);

  useEffect(() => {
    // Fetch completed tasks from API
    axios.get('http://localhost:5000/api/tasks/completed')
      .then(response => {
        const { tasks, totalPoints } = response.data;
        setActivities(tasks);
        setCompletedActivities(new Set(tasks.map(task => task._id)));
        setUserPoints(totalPoints);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      });
  }, []);

  // Badge data
  const badges = [
    { src: badge1, alt: 'Badge 6' },
    { src: badge2, alt: 'Badge 2' },
    { src: badge3, alt: 'Badge 3' },
    { src: badge4, alt: 'Badge 4' }, 
    { src: badge5, alt: 'Badge 5' },
  ];

  return (
    <div className="w-full ml-[500px] lg:w-3/5 mx-auto mt-16 p-8 bg-gray-100 h-screen">
      <div className="flex flex-col space-y-8">
        {/* Profile section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={defaultProfile}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">Subi Pokharel</h1>
          {userPoints !== null && (
            <p className="text-sm text-gray-500 mt-1">Total Points: {userPoints}</p>
          )}
        </div>

        {/* Badges section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl mb-2 font-semibold">Badges</h2>
          <div className="relative">
            <Carousel badges={badges} />
          </div>
        </div>

        {/* Contributions section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl mb-2 font-semibold">Contributions</h2>
          <div className="relative">
            <ContributionCalendar />
          </div>
        </div>

        {/* Activities section */}
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl font-semibold">See Activities</h3>
          <div className="bg-white rounded-lg shadow-lg p-6 h-80 hide-scrollbar">
            {loading ? (
              <p>Loading...</p>
            ) : activities.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity._id}
                    className={`bg-gray-50 p-4 rounded-lg shadow-md ${
                      completedActivities.has(activity._id)
                        ? 'border-green-500 border-2'
                        : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <span className="text-lg font-medium">{activity.name}</span>
                      <span className="text-sm text-gray-500">
                        ({activity.environmentalImpact} pts)
                      </span>
                    </div>
                    <p className="text-sm mt-2">{activity.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No tasks available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
