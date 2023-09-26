import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useCart } from '../../store/StoreContext';

export default function CartItem({
  selectedItem,
  img,
  price,
  total,
  name,
  className,
  quantity,
}) {
  const { removeFromCart } = useCart();

  return (
    <div className='fbc px-3'>
      <div className='w-[95%] fc space-x-4'>
        <img src={img} alt='' className='w-16 h-16' />
        <div className=''>
          <h1 className='text-sm w-[97%]'>{name}</h1>
          <div className='fc space-x-2'>
            <p>${price}</p> <p className='text-sm font-semibold'>X {quantity}</p>
            <p className='font-semibold'>${total}</p>
          </div>
        </div>
      </div>
      <AiOutlineDelete
        size={25}
        onClick={() => removeFromCart(selectedItem)}
      />
    </div>
  );
}
