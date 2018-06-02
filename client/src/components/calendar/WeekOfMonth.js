import React from 'react';
import DayOfMonth from '../../containers/calendar/DayOfMonth';
import { getDateStamp } from '../../utils/events/data';

const Week = ({ weekDays, eventData }) => {
  const week = weekDays.map(data=>{
    const stamp = getDateStamp(data.day);
    const events = eventData.hasOwnProperty(stamp) ? eventData[stamp] : [];
    return <DayOfMonth key={data.day.toString()} data={ data } events={events} />
  });
  return (
    <tr>{week}</tr>
  );
};

export default Week;