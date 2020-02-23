import { FETCH_PRODUCTS_REQUEST, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_FAILURE, 
  FETCH_SINGLE_PRODUCT_SUCCESS} from '../actions/constants';
export default (state = [], action) =>  {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload.data;
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return action.payload
    default: 
      return state
  }
} 
