import { fetchEvents } from './events';

export const refresh = () => (dispatch, getState) => {
  const { firstDay, lastDay } = getState().calendar;
  dispatch(fetchEvents(firstDay, lastDay));
};