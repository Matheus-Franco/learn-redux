import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './styles/global';

import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Provider store={store}>
        <Catalog />
        <Cart />
      </Provider>
    </>
  );
};

export default App;
