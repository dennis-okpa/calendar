import { FETCH_EVENTS } from '../constants/actions';
import initialState from '../constants/initialState';
import { handleShow, handleClose } from './modal';
import { getAllMonth, create, update } from '../fetch/events';
import { refresh } from './calendar';

const onSuccess = () => (dispatch) => {
  dispatch(handleClose());
  dispatch(refresh());
};

const insert = (data) => (dispatch) => {
  create(data).then(response => {
    dispatch(onSuccess());
  });
};

const amend = (data) => (dispatch) => {
  update(data).then(response => {
    dispatch(onSuccess());
  });
};

export const fetchEvents = (month, year) => dispatch => {
  getAllMonth(month, year).then(data => {
    dispatch({
      type: FETCH_EVENTS,
      payload: data
    })
  });
};

export const handleSave = () => (dispatch, getState) => {
  const { data } = getState().modal;
  console.log('handleSave', data);
  if(data.id){
    dispatch(amend(data));
  } else {
    dispatch(insert(data));
  }
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