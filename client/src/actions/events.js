import { FETCH_EVENTS } from '../constants/actions';

export const fetchEvents = (month, year) => dispatch => {
    fetch('/events?month='+month+'&year='+year)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_EVENTS,
        payload: data
    }));
};