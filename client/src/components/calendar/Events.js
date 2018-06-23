import React from 'react';
import Event from '../../containers/calendar/Event';
import { getUniqueKey } from '../../utils/common/strings';

const Events = ({ events }) => {
  const eventList = events.map(event=><Event key={getUniqueKey()} event={event} />);
  return (
    <ul className="event_pins">
      {eventList}
    </ul>
  );
};

export default Events;