import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    decription: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Tim",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  }
  return (
    <>
      <Segment clearing>
        <Header
          content={selectedEvent ? "Edit the event" : "Create new Event"}
        />
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Name"
              name="title"
              value={values.title}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Button positive floated="right" content="Submit" />
          <Button as={Link} to="/events" floated="right" content="Cancel" />
        </Form>
      </Segment>
    </>
  );
};

export default EventForm;
