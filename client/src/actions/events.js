import { FETCH_EVENTS } from '../constants/actions';
import initialState from '../constants/initialState';
import { handleShow, handleClose } from './modal';
import { getAllCalendarMonth, create, update, remove } from '../fetch/events';
import { refresh } from './calendar';
import {NotificationManager} from 'react-notifications';

const onSuccess = () => (dispatch) => {
  dispatch(handleClose());
  dispatch(refresh());
};

const insert = (data) => (dispatch) => {
  create(data).then(response => {
    dispatch(onSuccess());
    NotificationManager.success('Event Added: ' + response.summary);
  });
};

const amend = (data) => (dispatch) => {
  update(data).then(response => {
    dispatch(onSuccess());
    NotificationManager.success('Event Updated: ' + response.summary);
  });
};

export const fetchEvents = (firstDay, lastDay, month) => dispatch => {
  getAllCalendarMonth(firstDay, lastDay).then((data = {}) => {
    NotificationManager.info(data.total, "Number of events");
    dispatch({
      type: FETCH_EVENTS,
      payload: { ...data, month }
    });
  });
};

export const handleSave = () => (dispatch, state) => {
  const { data } = state().modal;
  if(data.id){
    dispatch(amend(data));
  } else {
    dispatch(insert(data));
  }
};

export const handleDelete = () => (dispatch, state) => {
  const { data } = state().modal;
  remove(data).then(response => {
    dispatch(onSuccess());
    NotificationManager.success('Event Deleted: ' + data.summary);
  });
};

export const addEvent = (e) => dispatch => {
  dispatch(handleShow({
    ...initialState.events.item,
    date: new Date(Number(e.target.dataset.date))
  }, "Add Event"));
};

export const editEvent = (event) => dispatch => {
  dispatch(handleShow({
    ...event,
    date: new Date(event.date)
  }, "Edit Event"));
};