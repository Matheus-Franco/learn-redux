import { IProduct } from './types';

interface IReturnType {
  type: string;
  payload: {
    product: IProduct;
  };
}

export function addProductToCart(product: IProduct): IReturnType {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}
