import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE, 
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST} from './constants';
export const fetchAllProducts = () => async(dispatch) => {
  dispatch({type: FETCH_PRODUCTS_REQUEST})
  try {
    const res = await axios.get('https://node-sample-api.herokuapp.com/api/products?page=1')
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: res.data
    })
  } catch(error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error
    })
  }
}
export const fetchSingleProduct = () => async(dispatch, id) => {
  dispatch({type: FETCH_SINGLE_PRODUCT_REQUEST})
  try {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/${id}`)
    dispatch({
      type: FETCH_SINGLE_PRODUCT_SUCCESS,
      payload: res.data
    })
  } catch(error) {
    dispatch({
      type: FETCH_SINGLE_PRODUCT_FAILURE,
      payload: error
    })
  }
}
