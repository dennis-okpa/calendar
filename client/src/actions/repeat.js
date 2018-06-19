import { FETCH_REPEAT } from '../constants/actions';
import { getRepeatOptions } from '../fetch/repeat';

export const fetchRepeatOptions = (month, year) => dispatch => {
  getRepeatOptions().then((data = []) => {
    dispatch({
      type: FETCH_REPEAT,
      payload: data
    })
  });
};