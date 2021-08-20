import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";
import { Link } from "react-router-dom";

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  const { hostedBy, title, date, description, hostPhotoURL, venue, attendees } =
    event;
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={hostPhotoURL} />
              <Item.Content>
                <Item.Header content={title} />
                <Item.Description>Hosted by {hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {date}
            <Icon name="marker" /> {venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {attendees.map((attendee) => (
              <EventListAtendee key={attendee.id} attendee={attendee} />
            ))}
            {/* <EventListAtendee />
            <EventListAtendee /> */}
          </List>
        </Segment>
        <Segment clearing>
          <div>{description}</div>
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            onClick={() => deleteEvent(event)}
            color="red"
            floated="right"
            content="Delete"
          />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItem;
