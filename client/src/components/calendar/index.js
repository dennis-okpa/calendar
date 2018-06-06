import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../containers/common/Modal';
import Month from '../../containers/calendar/Month';
import EventForm from './EventForm';

// Since this component is simple and static, there's no parent container for it.
const Calendar = ({calendarDate, monthTitle, events}) => (
  <div>
    <h1 style={{"textAlign":"center"}}>{monthTitle}</h1>
    <Month date={calendarDate} />
    <Modal>
      <EventForm />
    </Modal>
    <h1>Events</h1>
    <ul>
      {events.map(event => <li key={event.id}>{event.summary}</li>)}
    </ul>
  </div>
);

Calendar.propTypes = {
  calendarDate: PropTypes.object.isRequired,
  monthTitle: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired
};

export default Calendar;
