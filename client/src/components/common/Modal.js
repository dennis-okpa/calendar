import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({show, title, handleClose, children}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;