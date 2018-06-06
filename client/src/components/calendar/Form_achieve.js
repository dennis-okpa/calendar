import React from 'react';
import { OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

const Form = () => {
  const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  return (
    <form>
      <h2>Test</h2>
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
    </form>
  );
};

export default Form;