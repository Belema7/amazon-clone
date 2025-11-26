import React from "react";

const ProductDetailsCard = ({ productDetail }) => {
  if (!productDetail || Object.keys(productDetail).length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  const { title, price, description, category, image, rating } = productDetail;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-8 p-6 flex flex-col md:flex-row gap-6">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-80 object-contain rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{category}</p>
          <p className="text-gray-800 mb-4">{description}</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
          <span className="text-xl font-semibold text-green-600">${price}</span>
          {rating && (
            <span className="text-yellow-500 mt-2 md:mt-0">
              ⭐ {rating.rate} ({rating.count} reviews)
            </span>
          )}
        </div>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
