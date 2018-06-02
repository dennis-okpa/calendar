import React from 'react';
import Events from './Events';

const getClassName = (currentMonth, currentDay) => {
  let className = 'day';
  if(!currentMonth){
    className += " greyDay";
  }
  if(currentDay){
    className += " today";
  }
  return className;
};

// Since this component is simple and static, there's no parent container for it.
const Day = ({ data, events, handleShow }) => {
  const { day, currentMonth, currentDay } = data;
  return (
    <td className={getClassName(currentMonth, currentDay)}>
      <table>
        <thead>
          <tr>
            <td><a className="add_event" data-date={day.getTime()} onClick={handleShow}>{day.getDate()}</a></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Events events={events} />
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Day;
