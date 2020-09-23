import { IProduct } from './types';

interface IReturnType {
  type: string;
  payload: {
    product: IProduct;
  };
}

interface IReturnTypeId {
  type: string;
  payload: {
    productId: number;
  };
}

export function addProductToCartRequest(product: IProduct): IReturnType {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct): IReturnType {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number): IReturnTypeId {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    },
  };
}
