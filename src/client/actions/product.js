import axios from 'axios';
import {FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  FETCH_PRODUCT_BY_ID_REQUEST,
  RESET_PRODUCT_BY_ID} from './constants';
export const fetchProductById = (id) => async(dispatch) => {
  dispatch({type: FETCH_PRODUCT_BY_ID_REQUEST})
  try {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/products/${id}`);
    console.log('here in action');
    dispatch({
      type: FETCH_PRODUCT_BY_ID_SUCCESS,
      payload: res.data
    })
    // console.log('get state in product action');
    // console.log(store.getState());
    //return store.getState();
  } catch(error) {
    dispatch({
      type: FETCH_PRODUCT_BY_ID_FAILURE,
      payload: error
    })
  }
}
export const resetFetchProduct = () => async(dispatch) => {
  dispatch({type: RESET_PRODUCT_BY_ID})
}



