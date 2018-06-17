export const getDateStamp = date => {
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

const setEventData = (eventData, element) => {
  const date = new Date(element.date);
  const stamp = getDateStamp(date);
  if(!eventData.hasOwnProperty(stamp)) eventData[stamp] = [];
  eventData[stamp].push(element);
  return eventData;
};

export const getEventData = events => {
  let eventData = {};

  events.forEach(function(element) {
    setEventData(eventData, element);
  });

  return eventData;
};