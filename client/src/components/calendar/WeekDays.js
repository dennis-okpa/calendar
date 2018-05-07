import React from 'react';
import Day from './Day';

// Since this component is simple and static, there's no parent container for it.
class WeekDays extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
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
