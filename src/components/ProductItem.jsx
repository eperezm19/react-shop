import React from 'react';
import '../styles/ProductItem.scss';

import addToCard from '@icons/bt_add_to_cart.svg';

export const ProductItem = ({ product }) => {
  const { price, title, images } = product;

  const handleClick = () => {
    setCart([]);
  };
  return (
    <div className='ProductItem'>
      <img src={images[0]} alt={title} />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCard} alt='' />
        </figure>
      </div>
    </div>
  );
};
