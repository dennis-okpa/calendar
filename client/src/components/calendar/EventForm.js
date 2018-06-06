import React from 'react';
import Form from '../common/Form';
import InputField from '../../containers/common/InputField';
import DateField from '../../containers/common/DateField';

const EventForm = () => {
  return (
    <Form>
      <InputField
        id="summary"
        componentClass="textarea"
        label="Summary"
        placeholder="Enter summary"
      />
      <InputField
        id="description"
        componentClass="textarea"
        label="Description"
        placeholder="Enter description"
      />
      <DateField
        id="date"
        type="text"
        label="Date"
      />
    </Form>
  );
};

export default EventForm;