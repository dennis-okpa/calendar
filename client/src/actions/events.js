import { FETCH_EVENTS } from '../constants/actions';
import initialState from '../constants/initialState';
import { handleShow } from './modal';

export const fetchEvents = (month, year) => dispatch => {
    fetch('/events?month='+month+'&year='+year)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_EVENTS,
        payload: data
    }));
};

export const addEvent = (e) => dispatch => {
  dispatch(handleShow(Object.assign(initialState.events.item,{
    date: e.target.dataset.date
  })));
};