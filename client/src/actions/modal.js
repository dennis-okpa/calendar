import { SHOW_MODAL, HIDE_MODAL } from '../constants/actions';

export const handleShow = (e) => ({
  type: SHOW_MODAL,
  payload: {
      date: e.target.dataset.date
  }
});

export const handleClose = () => ({
    type: HIDE_MODAL
});