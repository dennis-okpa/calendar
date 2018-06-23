import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';
import popupS from 'popups';

const CustomModal = ({show, title, editMode, className, handleSave, handleClose, handleDelete, children}) => {
  const handleRemoval = (e) => {
    NotificationManager.warning("The delete will be permanent!");
    popupS.confirm({
      content: 'Continue delete?',
      labelOk:     'Yes',
      labelCancel: 'No',
      onSubmit: function() {
        handleDelete(e);
      }
    });
  };
  return (
    <Modal show={show} className={className} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button bsStyle="danger" onClick={handleRemoval} className={editMode ? "" : "hide"}>Delete</Button>
        <Button bsStyle="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;