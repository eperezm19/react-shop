import React from 'react';
import { ProductItem } from '@components/ProductItem';
import { useGetAPI } from '@hooks/useGetAPI';
import '@styles/ProductList.scss';
export const ProductList = () => {
  const API = `https://api.escuelajs.co/api/v1/products`;

  const products = useGetAPI(API);

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
