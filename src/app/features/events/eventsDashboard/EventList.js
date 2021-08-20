import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          selectEvent={selectEvent}
          event={event}
          key={event.id}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
};

export default EventList;
