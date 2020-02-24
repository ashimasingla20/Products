import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import StyleContext from 'isomorphic-style-loader/StyleContext';
export default (req, store) => {
  const css = new Set() // CSS for all rendered React components
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const content = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <StaticRouter context={{content}} location={req.path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </StyleContext.Provider>
    </Provider>);
  return `<!DOCTYPE html>
    <html>
      <head>
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>`
}
