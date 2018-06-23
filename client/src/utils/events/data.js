import { getMonthData } from '../calendar/month';

export const getDateStamp = date => {
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

export const getEventData = events => {
  let eventData = {};

  setNoneRepeatingEvents(eventData, events);
  setRepeatingEvents(eventData, events);

  return eventData;
};

const setNoneRepeatingEvents = (eventData, events) => {
  events.noRepeats.forEach(function(element) {
    const date = new Date(element.date);
    setEventData(eventData, element, getDateStamp(date));
  });
};

const setRepeatingEvents = (eventData, events) => {
  const { repeats, month } = events;
  repeats.forEach(function(element) {
    setRepeats(eventData, element, month);
  });
};

const setRepeats = (eventData, element, month) => {
  month.forEach(week => {
    week.forEach(day => {
      setDailyEvent(eventData, element, day);
      setWeeklyEvent(eventData, element, day);
      setMonthlyEvent(eventData, element, day);
      setYearlyEvent(eventData, element, day);
    });
  });
};

const setDailyEvent = (eventData, element, { day }) => {
  if(element.type === 1 && compareDate(element.date, day)){
    setEventData(eventData, element, getDateStamp(day));
  }
};

const setWeeklyEvent = (eventData, element, { day }) => {
  if(element.type === 2 && getDate(element.date).getDay() === day.getDay()){
    setEventData(eventData, element, getDateStamp(day));
  }
};

const setMonthlyEvent = (eventData, element, { day }) => {
  if(element.type === 3 && getDate(element.date).getDate() === day.getDate()){
    setEventData(eventData, element, getDateStamp(day));
  }
};

const setYearlyEvent = (eventData, element, { day }) => {
  if(element.type === 4
    && getDate(element.date).getDate() === day.getDate()
    && getDate(element.date).getMonth() === day.getMonth()){
    setEventData(eventData, element, getDateStamp(day));
  }
};

const setEventData = (eventData, element, stamp) => {
  if(!eventData.hasOwnProperty(stamp)) eventData[stamp] = [];
  eventData[stamp].push(element);
  return eventData;
};

const compareDate = (eventDate, day) => getDateStamp(getDate(eventDate)) <= getDateStamp(day);

const getDate = dateString => new Date(dateString);