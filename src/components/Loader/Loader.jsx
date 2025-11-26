import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <MoonLoader size={60} />
    </div>
  );
};

export default Loader;
