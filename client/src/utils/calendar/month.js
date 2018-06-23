import { weekOffSet } from './week';

export const getFirstDayOfMonth = (date) => {
  date.setDate(1);
  const day = date.getDay();
  date.setDate(weekOffSet[day]);
  return date;
};

export const getMonthData = (date) => {
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

    if(!week[6].currentMonth) break;
  }
  return month;
};

export const getFirstDay = (month) => {
  const day = month[0][0].day;
  day.setHours(0,0,0,0);
  return day.toISOString();
};

export const getLastDay = (month) => {
  const weeks = month.length-1;
  if(weeks < 0) return;
  const day = month[weeks][6].day;
  day.setHours(0,0,0,0);
  return day.toISOString();
};