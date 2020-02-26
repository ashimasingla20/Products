import axios from 'axios';
import { FETCH_CAROUSEL_REQUEST,
  FETCH_CAROUSEL_SUCCESS,
  FETCH_CAROUSEL_FAILURE,
  RESET_CAROUSEL
} from './constants';
export const fetchCarousel = () => async(dispatch, id) => {
  dispatch({type: FETCH_CAROUSEL_REQUEST})
  try {
    const res = await axios.get(`https://node-sample-api.herokuapp.com/api/home`);
    dispatch({
      type: FETCH_CAROUSEL_SUCCESS,
      payload: res.data
    })
  } catch(error) {
    dispatch({
      type: FETCH_CAROUSEL_FAILURE,
      payload: error
    })
  }
}
export const resetCarousel = () => async(dispatch) => {
  dispatch({type: RESET_CAROUSEL})
}
