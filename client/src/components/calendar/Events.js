import React from 'react';
import Event from './Event';
import { getUniqueKey } from '../../utils/common/strings';

const Events = ({ events }) => {
  const eventList = events.map(event=><Event key={getUniqueKey()} event={event} />);
  return (
    <ul>
      {eventList}
    </ul>
  );
};

export default Events;