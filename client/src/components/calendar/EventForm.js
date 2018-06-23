import React from 'react';
import Form from '../common/Form';
import InputField from '../../containers/common/InputField';
import DateField from '../../containers/common/DateField';
import { getUniqueKey } from '../../utils/common/strings';
import { Col } from 'react-bootstrap';

const EventForm = ({ repeatOptions }) => {
  const repeatOptionsTags = repeatOptions.map(option=>(
    <option key={getUniqueKey()} value={option.id}>{option.type}</option>
  ));
  return (
    <Form>
      <Col style={{display:"inline-block", width:"48%", float:"right"}}>
        <InputField
          id="summary"
          componentClass="textarea"
          label="Summary"
          placeholder="Enter summary"
          autoFocus
        />
        <InputField
          id="description"
          componentClass="textarea"
          label="Description"
          placeholder="Enter description"
        />
        <InputField
          id="type"
          componentClass="select"
          label="Type">
          {repeatOptionsTags}
        </InputField>
      </Col>
      <Col style={{display:"inline-block", width:"50%"}}>
        <DateField
          id="date"
          type="text"
          label="Date"
        />
      </Col>
    </Form>
  );
};

export default EventForm;