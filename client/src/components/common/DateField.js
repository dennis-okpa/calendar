import React from 'react';
import Calendar from 'react-calendar';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, gStyle, ...props }) {
  return (
    <FormGroup controlId={id} style={gStyle}>
      <ControlLabel>{label}</ControlLabel>
      <Calendar
        {...props}
      />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default FieldGroup;