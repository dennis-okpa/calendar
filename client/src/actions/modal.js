import * as actions from '../constants/actions';

export const handleShow = (data, title = "Add") => ({
  type: actions.SHOW_MODAL,
  payload: {
      title,
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