import {NotificationManager} from 'react-notifications';

const header = { headers: { 'Content-Type': 'application/json' } };

const error = error => {
  console.error(error);
};

const response = res => {
  if (res.status !== 200) {
    NotificationManager.error(res.status + ": " + res.statusText);
    throw Error(res.statusText);
  }
  return res.json();
};

const requestBody = data => Object.assign(header, { body: JSON.stringify(data) });

const request = (data, method) => ({ ...requestBody(data), ...header, method });

export const getAllMonth = (month, year) => fetch('/api/events/all/month?month='+month+'&year='+year).then(response).catch(error);

export const create = data => fetch('/api/events', request(data, "POST")).then(response).catch(error);

export const update = data => fetch('/api/events/' + data.id, request(data, "PUT")).then(response).catch(error);

export const remove = data => fetch('/api/events/' + data.id, { ...header, method: 'DELETE' }).then(response).catch(error);