import { FETCH_EVENTS } from '../constants/actions';
import initialState from '../constants/initialState';
import { handleShow, handleClose } from './modal';
import { getAllMonth, create } from '../fetch/events';
import { refresh } from './calendar';

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
  console.log('data', data);
  create(data).then(response => {
    dispatch(handleClose());
    dispatch(refresh());
  });
};

export const addEvent = (e) => dispatch => {
  dispatch(handleShow({
    ...initialState.events.item,
    date: new Date(Number(e.target.dataset.date))
  }));
};