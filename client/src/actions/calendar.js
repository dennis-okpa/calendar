import { FETCH_TARGET_DATE } from '../constants/actions';
import { fetchEvents } from './events';
import { getTargetDate } from '../utils/calendar/month';

export const refresh = () => (dispatch, getState) => {
  const { firstDay, lastDay, month } = getState().calendar;
  dispatch(fetchEvents(firstDay, lastDay, month));
};

export const fetchTargetDate = () => dispatch => {
  const targetDate = getTargetDate(window.location.search);
  dispatch({
    type: FETCH_TARGET_DATE,
    payload: targetDate
  });
};