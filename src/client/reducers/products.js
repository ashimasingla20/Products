import { FETCH_PRODUCTS_REQUEST, 
  FETCH_PRODUCTS_SUCCESS, 
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS
 } from '../actions/constants';
const INITIAL_STATE = {
  fetching: false,
  data: [],
  error: false,
  page: 1
}
export default (state = INITIAL_STATE, action) =>  {
  switch(action.type) {
    case FETCH_PRODUCTS_REQUEST: 
      return {
        ...state,
        fetching: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        data : state.page === 1
        ? action.payload.data
        : [...state.data,
          ...action.payload.data ],
        page: action.payload.nextPage
      }
    case FETCH_PRODUCTS_FAILURE: 
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: action.error
      }
    case RESET_PRODUCTS: 
      return INITIAL_STATE
    default: 
      return state
  }
} 
