import { SHOW_MODAL, HIDE_MODAL } from '../constants/actions';
import initialState from '../constants/initialState';

export default function(state = initialState.modal, action){
    switch(action.type){
      case SHOW_MODAL:
            return {
              ...state,
              show: true
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