import React from 'react';
import Product01 from '../asset/image-product-1.jpg';
// import Logo from '../asset/logo.svg';
import { ReactComponent as Logo } from '../asset/logo.svg';
import CollectionCard from '../components/Products/CollectionCard';
import { useCart } from '../store/StoreContext';

export default function Collections() {
  const { allStore } = useCart();
  return (
    <div className='space-y-6'>
      <img
        src={allStore[0].image.original}
        alt='ProductImage'
        className='w-full h-[200px] object-cover'
      />

      <div className='flex space-x-2 px-6 font-bold border border-b-2 text-xl'>
        <h1 className='border-r-2 border-gray-300 pr-4'>Men</h1>{' '}
        <h1 className='text-gray-400'>Women</h1>
      </div>

      <div className='wrapper'>
        <h1 className='font-bold my-4 text-xl'>Collections</h1>
        <div className='grid grid-cols-2 gap-4'>
          {allStore.map((i) => {
            return (
              <CollectionCard
                key={i.id}
                id={i.id}
                img={
                  i.image.original ||
                  'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1608736403'
                }
                price={i.retailPrice}
                total='$350'
                name={i.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
