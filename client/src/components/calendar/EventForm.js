import React from 'react';
import Form from '../common/Form';
import InputField from '../../containers/common/InputField';
import DateField from '../../containers/common/DateField';
import { getUniqueKey } from '../../utils/common/strings';
import {Col, Modal} from 'react-bootstrap';

const EventForm = ({ repeatOptions }) => {
  const repeatOptionsTags = repeatOptions.map(option=>(
    <option key={getUniqueKey()} value={option.id}>{option.type}</option>
  ));
  return (
    <Form>
        <Modal.Header closeButton>
            <Modal.Title>
                <InputField
                    id="summary"
                    componentClass="textarea"
                    placeholder="Enter summary"
                    autoFocus
                />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col style={{display:"inline-block", width:"48%", float:"right"}}>
                <InputField
                    id="description"
                    componentClass="textarea"
                    label="Description"
                    placeholder="Enter description"
                />
                <InputField
                    id="type"
                    componentClass="select"
                    label="Repeat">
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
        </Modal.Body>
    </Form>
  );
};

export default EventForm;