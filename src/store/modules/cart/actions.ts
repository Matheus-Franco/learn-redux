import { ActionTypes, IProduct } from './types';

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
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct): IReturnType {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number): IReturnTypeId {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
