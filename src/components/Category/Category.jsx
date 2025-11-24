import React from 'react'
import { CategoryCollections } from './CategoryCollections'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {CategoryCollections.map((collection, index) => (
            <CategoryCard key={index} data={collection} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category