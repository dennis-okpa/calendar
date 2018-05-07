import React from 'react';

// Since this component is simple and static, there's no parent container for it.
const Day = ({name}) => {
  return (
    <td className="weekday">{name}</td>
  );
};

export default Day;
