import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'; 
import balanceReducer from './reducers/reducer_balance';
import { Provider } from 'react-redux'; 
import App from './components/app';

const store = createStore(balanceReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);