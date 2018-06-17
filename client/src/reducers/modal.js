import * as actions from '../constants/actions';
import initialState from '../constants/initialState';

export default function(state = initialState.modal, action){
    switch(action.type){
      case actions.SHOW_MODAL:
            return {
              ...state,
              show: true,
              title: action.payload.title,
              data: action.payload.data
            };
        case actions.HIDE_MODAL:
            return {
              ...state,
              show: false
            };
      case actions.ADD_TO_MODAL:
        const data = state.data;
        data[action.payload.name] = action.payload.value;
        return {
          ...state,
          data
        };
        default:
            return state;
    }
}