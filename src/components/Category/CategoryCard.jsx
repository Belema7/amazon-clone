import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ data }) => {
    
  return (
    <Link to={`/category/${data.name}`}>
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition border mt-[-54]">
        
        <h2 className="text-lg font-semibold mb-3">{data.title}</h2>
        
        <img 
          src={data.imageLink} 
          alt={data.title} 
          className="h-40 w-full object-contain mb-3"
        />

        <p className="text-sm text-blue-600 font-medium hover:underline">
          Shop now
        </p>

      </div>
    </Link>
  )
}

export default CategoryCard
