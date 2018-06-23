import {NotificationManager} from 'react-notifications';
import {response} from '../utils/fetch/';

export const getRepeatOptions = () => fetch('/api/repeat').then(response).catch(error => {
  NotificationManager.error("Unable to fetch repeat options");
  console.error(error);
});