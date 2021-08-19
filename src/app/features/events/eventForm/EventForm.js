import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const EventForm = ({ setFormOpen }) => {
  return (
    <>
      <Segment clearing>
        <Form>
          <Form.Field>
            <input type="text" placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Category" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Decription" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="City" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Venue" />
          </Form.Field>
          <Form.Field>
            <input type="date" placeholder="Date" />
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
