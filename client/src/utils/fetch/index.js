import {NotificationManager} from 'react-notifications';

export const header = { headers: { 'Content-Type': 'application/json' } };

export const response = res => {
  if (res.status !== 200) {
    NotificationManager.error(res.status + ": " + res.statusText);
    throw Error(res.statusText);
  }
  return res.json();
};

export const requestBody = data => Object.assign(header, { body: JSON.stringify(data) });

export const request = (data, method) => ({ ...requestBody(data), ...header, method });