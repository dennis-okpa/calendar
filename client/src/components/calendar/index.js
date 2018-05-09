import React from 'react';
import PropTypes from 'prop-types';
import Month from './Month';

// Since this component is simple and static, there's no parent container for it.
const Calendar = ({calendarDate, monthTitle}) => (
  <div>
    <h1 style={{"textAlign":"center"}}>{monthTitle}</h1>
    <Month date={calendarDate} />
  </div>
);

Calendar.propTypes = {
  calendarDate: PropTypes.object.isRequired,
  monthTitle: PropTypes.string.isRequired
};

export default Calendar;
