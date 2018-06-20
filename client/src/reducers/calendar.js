import initialState from '../constants/initialState';
import { getMonthData, getFirstDay, getLastDay } from '../utils/calendar/month';

export default function calendarReducer(state = initialState.calendar, action) {
  switch (action.type) {
    default:
      const month = getMonthData(state.date);
      return {
        ...state,
        month,
        firstDay: getFirstDay(month),
        lastDay: getLastDay(month)
      };
  }
}
