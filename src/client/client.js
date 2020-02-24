import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { renderRoutes } from 'react-router-config';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import './App.scss'
const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk, logger));
console.log(store);
ReactDOM.hydrate(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <BrowserRouter>
          <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
      </StyleContext.Provider>
    </Provider>
 , document.querySelector('#root'));
