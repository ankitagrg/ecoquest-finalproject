import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const LineChart = ({ data }) => {
  const [view, setView] = useState('day');

  const getLabels = () => {
    switch (view) {
      case 'month':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      case 'year':
        return ['2021', '2022', '2023'];
      default:
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    }
  };

  const chartData = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Total Carbon Emission',
        data: data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='flex justify-center'>
    <div className=" bg-white rounded-lg shadow-lg p-6 md:w-3/4 h-98">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Carbon Emission Over Time</h2>
      <Line data={chartData} />
      <div className="mt-4 flex justify-center space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setView('day')}
        >
          Day
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => setView('month')}
        >
          Month
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => setView('year')}
        >
          Year
        </button>
      </div>
    </div>
    </div>
  );
};

export default LineChart;
