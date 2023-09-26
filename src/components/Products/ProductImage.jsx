import React from 'react';
import ProductImage1 from '../../asset/image-product-1.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import ProductImage2 from '../../asset/image-product-2.jpg';
import ProductImage3 from '../../asset/image-product-3.jpg';
import ProductImage4 from '../../asset/image-product-4.jpg';
import { useCart } from '../../store/StoreContext';
// import Thumbnail1 from '../../asset/image-product-1-thumbnail.jpg';
// import Thumbnail2 from '../../asset/image-product-2-thumbnail.jpg';
// import Thumbnail3 from '../../asset/image-product-3-thumbnail.jpg';
// import Thumbnail4 from '../../asset/image-product-4-thumbnail.jpg';

const ProductImage = ({ className, img }) => {
  const { cart } = useCart();

  return (
    <div className='lg:w-[60%]'>
      <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight>
        <img src={img} alt='productimg' />
        <img src={img} alt='productimg' className='rotate-[20deg]' />
        <img src={img} alt='productimg' className='rotate-[40deg]' />
        <img src={img} alt='productimg' className='rotate-[20deg] ' />
      </Carousel>
    </div>
    // <div className=''>
    //   <img
    //     src={ProductImage1}
    //     alt=''
    //     className='w-full h-[300px] object-cover'
    //   />
    //   {/* <div>
    //     <img src={Thumbnail1} alt='' />
    //     <img src={Thumbnail2} alt='' />
    //     <img src={Thumbnail3} alt='' />
    //     <img src={Thumbnail4} alt='' />
    //   </div> */}
    // </div>
  );
};

export default ProductImage;
