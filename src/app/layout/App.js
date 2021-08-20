import EventDashboard from "../features/events/eventsDashboard/EventDashboard";
import NavBar from "../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import EventDetailedPage from "../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../features/events/eventForm/EventForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />

            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
              />
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
