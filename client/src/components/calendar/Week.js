import React from 'react';
import Day from './DayOfMonth';

// Since this component is simple and static, there's no parent container for it.
class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { weekDays } = this.props;
    const week = weekDays.map(data=>(
      <Day key={data.day.toString()} data={ data } />
    ));
    return (
        <tr>{week}</tr>
    );
  }
}

export default Week;
