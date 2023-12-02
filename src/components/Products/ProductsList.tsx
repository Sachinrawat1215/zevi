import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = () => {
  return (
    <div className='product-list-container'>
      {
        [...new Array(20)].map((product, index) => <ProductCard key={index} product={product} index={index} />)
      }
    </div>
  )
}

export default ProductsList
