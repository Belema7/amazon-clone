import React from 'react'
import { CategoryCollections } from './CategoryCollections'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5">
      {CategoryCollections.map((collection, index) => (
        <CategoryCard key={index} data={collection} />
      ))}
    </div>
  )
}

export default Category


