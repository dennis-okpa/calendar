import { SHOW_MODAL, HIDE_MODAL } from '../constants/actions';

export const handleShow = (data) => ({
  type: SHOW_MODAL,
  payload: {
      title: "Add Event",
      data
  }
});

export const handleClose = () => ({
    type: HIDE_MODAL
});