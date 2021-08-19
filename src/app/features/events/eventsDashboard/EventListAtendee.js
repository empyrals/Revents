import React from "react";
import { List, Image } from "semantic-ui-react";

const EventListAtendee = ({ attendee }) => {
  return (
    <>
      <List.Item>
        <Image size="mini" circular src={attendee.photoURL} />
      </List.Item>
    </>
  );
};

export default EventListAtendee;
