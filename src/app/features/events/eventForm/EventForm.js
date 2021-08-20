import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";

const EventForm = ({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
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
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Tim",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
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
          <Button
            onClick={() => setFormOpen(false)}
            floated="right"
            content="Cancel"
          />
        </Form>
      </Segment>
    </>
  );
};

export default EventForm;
