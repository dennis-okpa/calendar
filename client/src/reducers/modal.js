import { SHOW_MODAL, HIDE_MODAL } from '../constants/actions';
import initialState from '../constants/initialState';

export default function(state = initialState.modal, action){
    switch(action.type){
      case SHOW_MODAL:
            return {
              ...state,
              show: true,
              title: action.payload.title,
              data: action.payload.data
            };
        case HIDE_MODAL:
            return {
              ...state,
              show: false
            };
        default:
            return state;
    }
}