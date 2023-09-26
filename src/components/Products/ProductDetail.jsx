import React, { useState } from 'react';
import { useCart } from '../../store/StoreContext';

const ProductDetail = ({
  selectedItem,
  className,
  name,
  price,
  discount,
  brand,
}) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCart();

  return (
    <div className={`space-y-6 ${className}`}>
      <h3 className='text-orange-600 font-semibold uppercase text-sm'>
        {brand}
      </h3>
      <div className='space-y-4'>
        <h1 className='w-[80%] text-3xl font-bold'>{name}</h1>
        <p className='grey-600'>
          These low-profile sneakers are your perfect casual wear companion .
          Featuring a durable rubber outer sole , they'll withstand everthing
          the weather can offer.
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-4 '>
          <h2 className='text-3xl font-bold'>{price}</h2>
          <p className='py-2 px-3 rounded bg-orange-50 text-orange-600 font-semibold'>
            50%
          </p>
        </div>
        <p className='text-grey-600 line-through decoration-gray-700 tracking-wider'>
          {discount}
        </p>
      </div>
      <div className='space-y-3'>
        <div className='cart-btn'>
          <div className='fbc py-2 px-6 bg-gray-100 rounded'>
            <button
              className='text-orange-600'
              onClick={() => setCount(count - 1)}
            >
              {count > 0 && <p>-</p>}
            </button>
            <div className='font-semibold'>{count > 0 ? count : 0}</div>
            <button
              className='text-orange-600'
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => addToCart(selectedItem)}
          className='bg-orange-600 text-white py-2 fcc rounded-md w-full'
        >
          <div>Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
