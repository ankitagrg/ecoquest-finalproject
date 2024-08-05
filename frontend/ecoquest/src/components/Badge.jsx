import React from 'react';

const Badge = ({ src, alt }) => {
  return (
    <div className="p-2">
      <img src={src} alt={alt} className="w-12 h-12" />
    </div>
  );
};

export default Badge;