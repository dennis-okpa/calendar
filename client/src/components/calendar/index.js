import React from 'react';
import Modal from '../../containers/common/Modal';
import Month from '../../containers/calendar/Month';
import EventForm from '../../containers/calendar/EventForm';
import { NotificationContainer } from 'react-notifications';

// Since this component is simple and static, there's no parent container for it.
const Calendar = ({calendarDate, monthTitle, handleSave, handleDelete}) => (
  <div>
    <h1 style={{"textAlign":"center"}}>{monthTitle}</h1>
    <Month date={calendarDate} />
    <Modal className="calendar_events" handleSave={handleSave} handleDelete={handleDelete}>
      <EventForm />
    </Modal>
    <NotificationContainer/>
  </div>
);

export default Calendar;
