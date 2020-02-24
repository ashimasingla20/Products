import { combineReducers } from 'redux';
import products from './products';
import product from './product';
import carousel from './carousel';
export default combineReducers({
  products,
  product,
  carousel
})
