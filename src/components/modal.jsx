import React from 'react';
import ProductImage from './ProductImage';

function Modal({ className }) {
  return (
    <div className={`w-[100vw] h-screen  bg-[#272727] fixed fcc bg-opacity-40`}>
      <ProductImage className={className} />
    </div>
  );
}

export default Modal;
