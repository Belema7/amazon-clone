import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <Link to={`/category/${data.name}`} className="block">
      <div
        className="
          bg-white
          p-4
          rounded-lg
          shadow-md
          hover:shadow-lg
          transition
          border
          mt-[-250px]      /* your required overlap */
          relative
          z-20
        "
      >
        {/* Title */}
        <h2 className="text-lg font-bold mb-3">
          {data.title}
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={data.imageLink}
            alt={data.title}
            className="
              h-40
              object-contain
              transition-transform
              hover:scale-105
            "
          />
        </div>

        {/* Shop Now */}
        <p className="text-sm text-blue-600 font-semibold hover:underline">
          Shop now
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
