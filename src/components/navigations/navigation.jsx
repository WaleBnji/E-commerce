import React, { useMemo, useState } from 'react';
import { ReactComponent as Logo } from '../../../src/asset/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Avater from '../../asset/image-avatar.png';
// import Product from '../../asset/image-product-1-thumbnail.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import ProductItem from '../Cart/CartItem';
import { useCart } from '../../store/StoreContext';
import CartItem from '../Cart/CartItem';
import { useNavigate } from 'react-router-dom';

// import Avater from '../../src/asset/image-avatar.png';

const Navigation = ({ removeFromCart }) => {
  const [dropDown, setDropDown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className='flex px-4 h-[7vh] fbc relative lg:hidden'>
        {/* <div className='absolute bg-white top-[4.2em] right-0 w-[95%] mx-[2.5%] min-h-[30vh]  rounded-lg '>
        <div className='px-4 py-3 font-semibold text-2xl border-b border-slate-300 pb-4'>
          Cart
        </div>
        <div className='text-center my-[6em]'>Your cart is empty</div>
      </div> */}

        {dropDown && (
          <div className='space-y-6 absolute bg-white top-[4.2em] right-0 w-[95%] mx-[2.5%] min-h-[30vh]  rounded-lg z-20 h-auto pb-3 '>
            <div className='px-4 py-3 font-semibold text-2xl border-b border-slate-300 pb-4'>
              <div>Cart</div>
              <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className='w-[90%] mx-auto space-y-4'>
              {cart?.map((i) => {
                return (
                  <CartItem
                    key={i.id}
                    selectedItem={i}
                    img={
                      i.image.original ||
                      'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1608736403'
                    }
                    price={i.retailPrice}
                    total={i.total}
                    name={i.name}
                    quantity={i.quantity}
                  />
                );
              })}
              <h2>{cartTotal}</h2>
              <button className='w-full py-2 rounded-md bg-orange-600 text-center text-white'>
                Checkout
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        <div className='fc space-x-2'>
          {mobileMenu && (
            <div className='h-[100vh] w-[33vh] bg-white fixed top-0 left-0 py-4 px-6 space-y-9 z-20'>
              <AiOutlineClose
                className='text-lg font-bold'
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
              <ul className='font-semibold text-lg space-y-7'>
                <li>
                  <a href='#collection'>Collection</a>
                </li>
                <li>
                  <a href='#men'>Men</a>
                </li>
                <li>
                  <a href='#women'>Women</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </ul>
            </div>
          )}

          <GiHamburgerMenu
            className=''
            onClick={() => {
              setMobileMenu(true);
            }}
          />

          <Logo className='' />
        </div>

        <div className='fc space-x-4'>
          <AiOutlineShoppingCart
            size={25}
            onClick={() => {
              setDropDown(!dropDown);
            }}
          />
          <img src={Avater} alt='' className='h-10 w-10' />
        </div>
      </div>

      {/* desktop navbar  */}
      <div className='hidden lg:flex fbc py-8 px-[13rem]  border border-b-2 mb-5'>
        <Logo />
        <ul className='flex space-x-8'>
          <li>
            <a href='#Collections'>Collections</a>
          </li>
          <li>
            <a href='#Men'>Men</a>
          </li>
          <li>
            <a href='#women'>Women</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='fbc space-x-4'>
          <AiOutlineShoppingCart />
          <img src={Avater} alt='profile' className='h-8 w-8' />
        </div>
      </div>
    </>
  );
};

export default Navigation;
