import React from 'react'
import ProductCard from './ProductCard'
import { getProducts } from 'src/api/productData'

const ProductsList = () => {
  const products = getProducts();
  
  return (
    <div className='product-list-container'>
      {
        products.map((product, index) => <ProductCard key={index} product={product} index={index} />)
      }
    </div>
  )
}

export default ProductsList
