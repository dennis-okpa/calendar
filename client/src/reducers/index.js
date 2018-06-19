import { combineReducers } from 'redux';
import calendar from './calendar';
import events from './events';
import repeat from './repeat';
import modal from './modal';

export default combineReducers({
  calendar,
  events,
  repeat,
  modal
});