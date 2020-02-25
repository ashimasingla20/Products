import { FETCH_CAROUSEL_REQUEST,
  FETCH_CAROUSEL_SUCCESS,
  FETCH_CAROUSEL_FAILURE
 } from '../actions/constants';
const INITIAL_STATE = {
  fetching: false,
  data: null,
  error: false,
  page: 1
}
export default (state = INITIAL_STATE, action) =>  {
  switch(action.type) {
    case FETCH_CAROUSEL_REQUEST: 
      return {
        ...state,
        fetching: true
      }
    case FETCH_CAROUSEL_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload
      }
    case FETCH_CAROUSEL_FAILURE: 
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.error
      }
    // case RESET_PRODUCTS: 
    //   return INITIAL_STATE
    default: 
      return state
  }
} 
