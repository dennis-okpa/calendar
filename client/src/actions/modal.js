import * as actions from '../constants/actions';

export const handleShow = (data) => ({
  type: actions.SHOW_MODAL,
  payload: {
      title: "Add Event",
      data
  }
});

export const handleClose = () => ({
    type: actions.HIDE_MODAL
});

export const addInput = (name, value) => ({
  type: actions.ADD_TO_MODAL,
  payload: {
    name, value
  }
});