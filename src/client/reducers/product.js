import { FETCH_PRODUCT_BY_ID_REQUEST, 
	FETCH_PRODUCT_BY_ID_SUCCESS, 
	FETCH_PRODUCT_BY_ID_FAILURE,
	RESET_PRODUCT_BY_ID
 } from '../actions/constants';
const INITIAL_STATE = {
	fetching: false,
	productInfo: null,
	error: false,
	page: 1
}
export default (state = INITIAL_STATE, action) =>  {
	switch(action.type) {
		case FETCH_PRODUCT_BY_ID_REQUEST: 
			return {
				...state,
				fetching: true
			}
		case FETCH_PRODUCT_BY_ID_SUCCESS:
			return {
				...state,
				fetching: false,
				productInfo: action.payload
			}
		case FETCH_PRODUCT_BY_ID_FAILURE: 
			return {
				...state,
				fetching: false,
				error: true,
				errorMessage: action.error
			}
		case RESET_PRODUCT_BY_ID: 
			return INITIAL_STATE
		default: 
			return state
	}
} 
