import { FETCH_EVENTS } from '../constants/actions';

const initialState = {
    items: []
};

export default function(state = initialState, action){
    console.log('fetch', FETCH_EVENTS);
    console.log('action', action);
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state,
                items: action.payload
            };
        //case NEW_EVENT:
        default:
            return state;
    }
}