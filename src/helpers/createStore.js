import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import logger from 'redux-logger';
const creatingStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
}
export default creatingStore;
