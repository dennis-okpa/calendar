import { FETCH_EVENTS } from '../constants/actions';

export const fetchEvents = () => dispatch => {
    console.log('fetch', FETCH_EVENTS);
    fetch('/users')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_EVENTS,
            payload: data
        }));
};