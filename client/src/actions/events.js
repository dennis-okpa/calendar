import { FETCH_EVENTS } from '../constants/actions';

export const fetchEvents = (month, year) => dispatch => {
    console.log('fetch', FETCH_EVENTS);
    fetch('/events?month='+month+'&year='+year)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_EVENTS,
        payload: data
    }));
};