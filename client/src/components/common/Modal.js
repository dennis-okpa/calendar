import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({show, title, className, handleSave, handleClose, children}) => {
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
        <Button bsStyle="primary" onClick={handleSave}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;