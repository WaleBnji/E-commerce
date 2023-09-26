import React from 'react'
import ProductImage from './ProductImage'
import ProductDetail from './ProductDetail'

const selectedProduct = () => {
  return (
    <div>
      <div className='lg:flex lg:px-[15rem] lg:py-[5rem] '>
        <ProductImage className='' />
        <div className='space-y-4 wrapper'>
          <ProductDetail className='py-[3rem] ' />
        </div>
      </div>
    </div>
  )
}

export default selectedProduct
