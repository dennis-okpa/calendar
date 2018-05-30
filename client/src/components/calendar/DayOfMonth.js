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
const Day = ({ data, events }) => {
  const { day, currentMonth, currentDay } = data;
  return (
    <td className={getClassName(currentMonth, currentDay)}>
      <table>
        <thead>
          <tr>
            <td>{day.getDate()}</td>
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
