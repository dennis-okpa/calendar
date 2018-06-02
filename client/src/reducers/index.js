import { combineReducers } from 'redux';
import calendar from './calendar';
import events from './events';
import modal from './modal';

export default combineReducers({
  calendar,
  events,
  modal
});