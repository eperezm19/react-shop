import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AddToCartImages from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';

export const ProductItem = ({ product }) => {
  const { price, title, images } = product;

  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className='ProductItem'>
      <img src={images[0]} alt={title} />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={AddToCartImages} alt='button addToCart' />
        </figure>
      </div>
    </div>
  );
};
