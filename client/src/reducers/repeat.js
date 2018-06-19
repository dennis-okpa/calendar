import { FETCH_REPEAT } from '../constants/actions';

export default function(state = {options:[]}, action){
    switch(action.type){
        case FETCH_REPEAT:
            return {
                ...state,
                options: action.payload
            };
        default:
            return state;
    }
}