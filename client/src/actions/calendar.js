import { fetchEvents } from './events';

export const refresh = () => (dispatch, getState) => {
  const { firstDay, lastDay, month } = getState().calendar;
  dispatch(fetchEvents(firstDay, lastDay, month));
};