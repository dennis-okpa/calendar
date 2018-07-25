import initialState from '../constants/initialState';
import { getMonthData, getFirstDay, getLastDay } from '../utils/calendar/month';

export default function calendarReducer(state = initialState.calendar, action) {
  let calendar = {
    ...state
  };
  switch (action.type) {
    default:
      calendar = {
        ...calendar,
        month: getMonthData(calendar.date)
      };
  }
  return {
    ...calendar,
    firstDay: getFirstDay(calendar.month),
    lastDay: getLastDay(calendar.month)
  };
}
