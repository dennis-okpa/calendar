import initialState from '../constants/initialState';
import { FETCH_TARGET_DATE } from '../constants/actions';
import { getMonthData, getFirstDay, getLastDay } from '../utils/calendar/month';

export default function calendarReducer(state = initialState.calendar, action) {
  let calendar = {
    ...state
  };
  switch (action.type) {
    case FETCH_TARGET_DATE:
      calendar = {
        ...calendar,
        month: getMonthData(action.payload),
        date: action.payload
      };
      break;
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
