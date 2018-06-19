import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

function FieldGroup({ id, label, help, gStyle, children, ...props }) {
  return (
    <FormGroup controlId={id} style={gStyle}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}>
        {children}
      </FormControl>
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default FieldGroup;