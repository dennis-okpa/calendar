import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({show, title, editMode, className, handleSave, handleClose, handleDelete, children}) => {
  return (
    <Modal show={show} className={className} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button bsStyle="danger" onClick={handleDelete} className={editMode ? "" : "hide"}>Delete</Button>
        <Button bsStyle="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;