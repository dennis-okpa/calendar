import React from 'react';
import { ButtonToolbar, Button, OverlayTrigger, Popover } from 'react-bootstrap';

const Event = ({ event, _this }) => {
  const popoverHoverFocus = (
    <Popover className="popover-trigger-hover-focus" id={"popover-trigger-hover-focus-"+event.id} title={event.summary}>
      <strong>{event.description}</strong>
    </Popover>
  );
  return (
    <li style={{position:"relative"}}>
      <ButtonToolbar>
        <OverlayTrigger
          trigger={['hover']}
          rootClose
          placement="right"
          overlay={popoverHoverFocus}
        >
          <a className="event_pin">{event.summary}</a>
        </OverlayTrigger>
      </ButtonToolbar>
    </li>
  );
};

export default Event;