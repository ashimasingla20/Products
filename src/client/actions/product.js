import axios from 'axios';
import {FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_PRODUCT_BY_ID_REQUEST} from './constants';
export const fetchProductById = () => async(dispatch, id) => {
  dispatch({type: FETCH_PRODUCT_BY_ID_REQUEST})
  try {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/1`)
    dispatch({
      type: FETCH_PRODUCT_BY_ID_SUCCESS,
      payload: res.data
    })
  } catch(error) {
    dispatch({
      type: FETCH_PRODUCT_BY_ID_FAILURE,
      payload: error
    })
  }
}