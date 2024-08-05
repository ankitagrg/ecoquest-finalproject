import React from 'react';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const generateInitialData = () => {
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    weeks.push(new Array(7).fill(0));
  }
  weeks.push(new Array(1).fill(0));
  
  const augustStartWeek = 30;
  weeks[augustStartWeek][4] = 2;
  weeks[augustStartWeek][5] = 3;
  weeks[augustStartWeek][6] = 2;
  
  return weeks;
};

const contributionsData = generateInitialData();

const getColor = (value, monthIndex) => {
  if (monthIndex === 11) return "bg-gray-200"; 
  if (value === 0) return "bg-gray-200";
  if (value === 1) return "bg-green-100";
  if (value === 2) return "bg-green-300";
  if (value === 3) return "bg-green-500";
  return "bg-green-700";
};

const ContributionCalendar = ({ data = contributionsData }) => {
  return (
    <div className="overflow-auto p-4">
      <div className="flex justify-between mb-2">
        {months.map((month, idx) => (
          <span key={idx} className="text-xs">
            {month}
          </span>
        ))}
      </div>
      <div className="flex space-x-1">
        {data.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col space-y-1">
            {week.map((contribution, dayIndex) => (
              <div
                key={dayIndex}
                className={`${getColor(contribution, Math.floor((weekIndex * 7 + dayIndex) / 30))} w-4 h-4 rounded-sm`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionCalendar;
