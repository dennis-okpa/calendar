export const getEventData = events => {
  let eventData = {};

  setNoneRepeatingEvents(eventData, events);
  setRepeatingEvents(eventData, events);

  return eventData;
};

const setNoneRepeatingEvents = (eventData, events) => {
  if(!events.noRepeats) return;
  events.noRepeats.forEach(function(element) {
    const date = new Date(element.date);
    setEventData(eventData, element, getDateStamp(date));
  });
};

const setRepeatingEvents = (eventData, events) => {
  const { repeats, month } = events;
  if(!repeats) return;
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
  if(element.type === 1
    && compareDate(element.date, day)){

    setEventData(eventData, element, getDateStamp(day));
  }
};

const setWeeklyEvent = (eventData, element, { day }) => {
  if(element.type === 2
    && compareDate(element.date, day)
    && getDate(element.date).getDay() === day.getDay()){

    setEventData(eventData, element, getDateStamp(day));
  }
};

const setMonthlyEvent = (eventData, element, { day }) => {
  const lastDayOfMonth = getLastDateOfMonth(day).getDate(), elementDate = new Date(element.date);
  if(element.type === 3 && compareMonth(elementDate, day)){
    if(isAfterLastDayOfMonth(elementDate.getDate(), lastDayOfMonth)){
      elementDate.setDate(lastDayOfMonth);
    }

    if(elementDate.getDate() === day.getDate()){

      setEventData(eventData, {
        ...element,
        date: elementDate.toISOString()
      }, getDateStamp(day));
    }
  }
};

const setYearlyEvent = (eventData, element, { day }) => {
  if(element.type === 4
    && compareDate(element.date, day)
    && getDate(element.date).getDate() === day.getDate()
    && getDate(element.date).getMonth() === day.getMonth()){

    setEventData(eventData, element, getDateStamp(day));
  }
};

const setEventData = (eventData, element, stamp) => {
  if(!eventData.hasOwnProperty(stamp)) eventData[stamp] = [];
  eventData[stamp].push(element);
};

const compareDate = (eventISODate, calendarDate) => getDateStamp(getDate(eventISODate)) <= getDateStamp(calendarDate);

const compareMonth = (eventDate, calendarDate) => eventDate.getFullYear() <= calendarDate.getFullYear() && eventDate.getMonth() <= calendarDate.getMonth();

const getDate = dateString => new Date(dateString);

export const getDateStamp = date => {
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

const isAfterLastDayOfMonth = (eventDay, lastDayOfMonth) => eventDay > lastDayOfMonth;

const getLastDateOfMonth = calendarDate => new Date(calendarDate.getFullYear(), calendarDate.getMonth()+1, 0);