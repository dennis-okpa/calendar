import {NotificationManager} from 'react-notifications';
import {header, response, request} from '../utils/fetch/';

export const getAllMonth = (month, year) => fetch('/api/events/all/month?month='+month+'&year='+year).then(response).catch(error => {
  NotificationManager.error("Unable to fetch events");
  console.error(error);
});

export const getAllCalendarMonth = (firstDay, lastDay) => fetch('/api/events/all/calendar/month?firstDay='+encodeURI(firstDay)+'&lastDay='+encodeURI(lastDay)).then(response).catch(error => {
  NotificationManager.error("Unable to fetch events");
  console.error(error);
});

export const create = data => fetch('/api/events', request(data, "POST")).then(response).catch(error => {
  NotificationManager.error("Unable to create events");
  console.error(error);
});

export const update = data => fetch('/api/events/' + data.id, request(data, "PUT")).then(response).catch(error => {
  NotificationManager.error("Unable to update events");
  console.error(error);
});

export const remove = data => fetch('/api/events/' + data.id, { ...header, method: 'DELETE' }).then(response).catch(error => {
  NotificationManager.error("Unable to delete events");
  console.error(error);
});