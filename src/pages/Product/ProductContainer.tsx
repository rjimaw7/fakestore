/* eslint-disable import/order */
import React from 'react';
import ProductView from './ProductView';
import { useLocation } from 'react-router-dom';
import { IProducts } from '@shared/interfaces/IProducts';

const ProductContainer = () => {
  const location = useLocation();

  const singleProductData: IProducts = location.state.item;

  return <ProductView data={singleProductData} />;
};

export default ProductContainer;
