import React from 'react';
import ProductImage from '../components/Products/ProductImage';
import ProductDetail from '../components/Products/ProductDetail';
import { useParams } from 'react-router-dom';
import { useCart } from '../store/StoreContext';

export default function ProductItem() {
  const { id } = useParams();
  const { allStore } = useCart();
  const selectedItem = allStore.find((i) => {
    return i.id === id;
  });

  return (
    <div className='pb-[3em]'>
      <ProductImage img={selectedItem.image.original} />
      <div className='wrapper'>
        <ProductDetail
          selectedItem={selectedItem}
          name={selectedItem.name}
          price={selectedItem.retailPrice}
          discount={selectedItem.estimatedMarketValue}
          brand={selectedItem.brand}
        />
      </div>
    </div>
  );
}
