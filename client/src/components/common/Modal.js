import React from 'react';
import { Modal, Popover, OverlayTrigger, Button, Tooltip } from 'react-bootstrap';

const CustomModal = ({show, handleClose}) => {
  const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

  return (
    <div>
      <p>Click to get the full Modal experience!</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Popover in a modal</h4>
          <p>
            there is a{' '}
            <OverlayTrigger overlay={popover}>
              <a href="#popover">popover</a>
            </OverlayTrigger>{' '}
            here
          </p>

          <h4>Tooltips in a modal</h4>
          <p>
            there is a{' '}
            <OverlayTrigger overlay={tooltip}>
              <a href="#tooltip">tooltip</a>
            </OverlayTrigger>{' '}
            here
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomModal;