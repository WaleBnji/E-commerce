import React from 'react';
import Product01 from '../../asset/image-product-1.jpg';
import { Link } from 'react-router-dom';

const CollectionCard = ({ id, img, name, price }) => {
  return (
    <Link to={`/product-item/${id}`} className=' bg-gray-100 rounded-md p-4'>
      <img
        src={img}
        alt='Prod'
        className='rounded w-[150px] h-max  object-cover'
      />
      <div>
        <h3 className='  h-[70px] overflow-hidden line-clamp'>{name}</h3>
        <div className='font-semibold text-lg mt-[1em]'>${price}</div>
      </div>
    </Link>
  );
};

export default CollectionCard;
