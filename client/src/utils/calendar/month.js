import { weekOffSet } from './week';

const getQuery = (url) => {
  const query = url.split("?");
  if(!query.hasOwnProperty(1)) return "";
  return query[1];
};

const getParams = (url) => {
  const query = getQuery(url);
  const params = query.split("&");
  if(params[0] === "") return [];
  return params;
};

const isValidName = name => {
  const validNames = ["year", "month"];
  const found = validNames.find(validName=>validName===name);
  return found !== undefined;
};

const isValidValue = value => !isNaN(value);

const setParams = (oParams, param) => {
  const nameValue = param.split("=");
  if(nameValue.length !== 2) return oParams;
  if(!isValidName(nameValue[0])) return oParams;
  if(!isValidValue(nameValue[1])) return oParams;
  oParams[nameValue[0]] = Number(nameValue[1]);
};

const getParamData = (params) => {
  const oParams = {};
  params.forEach((param)=>{
    setParams(oParams, param);
  });
  return oParams;
};

const setDate = (date, oParams) => {
  date.setYear(oParams.year);
  date.setMonth(oParams.month);
};

export const getTargetDate = () => {
  const date = new Date();
  const params = getParams(window.location.search);
  const defaultParamData = {
    year: date.getFullYear(),
    month: date.getMonth()
  };
  const oParams = {
    ...defaultParamData,
    ...getParamData(params)
  };
  setDate(date, oParams);
  return date;
};

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