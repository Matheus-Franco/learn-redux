import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';

import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  // <formato completo do estado do redux, qual valor irei obter de dentro do retorno>
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong>
      {' - '}
      <span>{product.price}</span>
      {' - '}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>

      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de Estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
