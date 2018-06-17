import React from 'react';
import Modal from '../../containers/common/Modal';
import Month from '../../containers/calendar/Month';
import EventForm from './EventForm';

// Since this component is simple and static, there's no parent container for it.
const Calendar = ({calendarDate, monthTitle, events, handleSave}) => (
  <div>
    <h1 style={{"textAlign":"center"}}>{monthTitle}</h1>
    <Month date={calendarDate} />
    <Modal className="calendar_events" handleSave={handleSave}>
      <EventForm />
    </Modal>
    <h1>Events</h1>
    <ul>
      {events.map(event => <li key={event.id}>{event.summary}</li>)}
    </ul>
  </div>
);

export default Calendar;
