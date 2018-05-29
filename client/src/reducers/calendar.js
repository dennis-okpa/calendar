import initialState from '../constants/initialState';
import { getMonthData } from '../utils/calendar/month';

export default function calendarReducer(state = initialState.calendar, action) {
  switch (action.type) {
    default:
      return {
        ...state,
        month: getMonthData(state.date)
      };
  }
}
