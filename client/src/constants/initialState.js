import { getTargetDate } from '../utils/calendar/month';

const targetDate = getTargetDate();

export default {
  events: {
    items: [],
    item: {
      summary: "",
      description: "",
      date: targetDate.getTime(),
      type: 0
    },
    data: {}
  },
  calendar: {
    date: targetDate
  },
  modal: {
    show: false,
    title: "",
    data: {}
  }
};