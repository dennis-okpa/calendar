import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const Day = ({ data }) => {
  const { day, currentMonth, currentDay } = data;
  let className = 'day';
  if(!currentMonth){
    className += " greyDay";
  }
  if(currentDay){
    className += " today";
  }
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
            <td />
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default Day;
