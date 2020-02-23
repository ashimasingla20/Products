import axios from 'axios';
import { FETCH_PRODUCTS } from './constants';
export const fetchProducts = () => async(dispatch) => {
  const res = await axios.get('https://node-sample-api.herokuapp.com/api/products?page=1')
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data
  })
}
