import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS
} from './constants';
export const fetchAllProducts = (page) => async(dispatch) => {
  dispatch({type: FETCH_PRODUCTS_REQUEST})
  try {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products?page=${page}`)
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
export const resetFetchAllProducts = () => async(dispatch) => {
  dispatch({type: RESET_PRODUCTS})
}

