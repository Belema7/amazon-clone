import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-indigo-600 border-r-indigo-500 shadow-lg"></div>
        
        {/* Text with pulse animation */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-lg font-semibold animate-pulse">
            Loading...
          </p>
          <p className="text-gray-400 text-sm font-medium">
            Please wait a moment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;