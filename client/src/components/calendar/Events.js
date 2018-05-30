import React from 'react';
import Event from './Event';

const Events = ({ events }) => {
  const eventList = events.map(event=><Event event={event} />);
  return (
    <ul>
      {eventList}
    </ul>
  );
};

export default Events;