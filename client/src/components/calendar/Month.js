import React from 'react';
import WeekDays from './WeekDays';
import WeekOfMonth from './WeekOfMonth';

// Since this component is simple and static, there's no parent container for it.
const Month = ({ monthData, eventData }) => {
  const month = monthData.map(weekDays=>(
    <WeekOfMonth key={weekDays[0].day.toString()} weekDays={weekDays} eventData={eventData} />
  ));
  return (
    <table className="calendar">
      <thead>
      <WeekDays />
      </thead>
      <tbody>
      {month}
      </tbody>
    </table>
  );
};

export default Month;
