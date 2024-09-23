import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-full animate-pulse">
          <div className="bg-gray-300 h-64 rounded-lg mb-2"></div>
          <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
          <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
