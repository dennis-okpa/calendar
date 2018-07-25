import { FETCH_EVENTS } from '../constants/actions';
import { getEventData } from '../utils/events/data';
import initialState from '../constants/initialState';

export default function(state = initialState.events, action){
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                items: action.payload,
                data: getEventData(action.payload)
            };
        default:
            return state;
    }
}