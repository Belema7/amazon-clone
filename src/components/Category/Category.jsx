import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
  return (
    <div>
      {
        CategoryCollections.map(collection => {
            <CategoryCard data={collection}/>
        })
      }
    </div>
  )
}

export default Category
