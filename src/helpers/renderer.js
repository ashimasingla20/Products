import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
export default (req, store) => {
  const context = {
    insertCss: (...styles) => {
      const removeCss = styles.map(x => x._insertCss());
      return () => {
        removeCss.forEach(f => f());
      };
    }
  }
  const content = renderToString(<Provider store={store}>
    <StaticRouter context={{content}} location={req.path}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  </Provider>);
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script type="text/babel" src="bundle.js"></script>
      </body>
    </html>`
}
