import { fetchEvents } from './events';

export const refresh = () => (dispatch, getState) => {
  const { date } = getState().calendar;
  dispatch(fetchEvents(date.getMonth()+1, date.getFullYear()));
};