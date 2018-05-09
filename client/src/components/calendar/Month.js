import React from 'react';
import WeekDays from './WeekDays';
import Week from './Week';

const weekOffSet = [
  -5 // Sunday
  , 1 // Monday
  , 0 // Tuesday
  , -1 // Wednesday
  , -2 // Thursday
  , -3 // Friday
  , -4 // Saturday
];

const getFirstDayOfMonth = (date) => {
  date.setDate(1);
  const day = date.getDay();
  date.setDate(weekOffSet[day]);
  return date;
};

const getMonthData = (date) => {
  const month = [];
  let targetDate = getFirstDayOfMonth(new Date(date));
  for(let i = 0; i <= 5; i++){
    let week = [];
    for(let i = 0; i <= 6; i++){
      const data = {
        day: targetDate,
        currentDay: targetDate.getYear() === date.getYear() && targetDate.getMonth() === date.getMonth() && targetDate.getDate() === date.getDate(),
        currentMonth: targetDate.getMonth() === date.getMonth()
      };
      week.push(data);
      targetDate = new Date(targetDate);
      targetDate.setDate(targetDate.getDate() + 1);
    }
    month.push(week);
  }
  return month;
};

// Since this component is simple and static, there's no parent container for it.
class Month extends React.Component {
  constructor(props) {
    super(props);
    const monthData = getMonthData(props.date);
    this.state = {
      monthData
    };
  }
  render() {
    const { monthData } = this.state;
    const month = monthData.map(weekDays=>(
      <Week key={weekDays[0].day.toString()} weekDays={weekDays} />
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
  }
}

export default Month;
