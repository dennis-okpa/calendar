import React from 'react';
import { getGUID } from '../../utils/common/strings';

// Since this component is simple and static, there's no parent container for it.
const Day = ({ data, events }) => {
  const { day, currentMonth, currentDay } = data;
  let className = 'day';
  if(!currentMonth){
    className += " greyDay";
  }
  if(currentDay){
    className += " today";
  }

  const eventList = events.map(event=>(
    <li key={getGUID()}>{event.summary}</li>
  ));

  return (
    <td className={className}>
      <table>
        <thead>
          <tr>
            <td>{day.getDate()}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{eventList}</td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Day;
