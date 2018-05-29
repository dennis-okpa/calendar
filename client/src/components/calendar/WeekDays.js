import React from 'react';
import Day from './Day';
import { getShortWeekDays } from '../../utils/calendar/week';

// Since this component is simple and static, there's no parent container for it.
class WeekDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: getShortWeekDays
    };
  }
  render() {
    const { days } = this.state;
    const week = days.map(day=>(
      <Day key={day} name={day} />
    ));
    return (
      <tr>{week}</tr>
    );
  }
}

export default WeekDays;
