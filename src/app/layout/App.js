import EventDashboard from "../features/events/eventsDashboard/EventDashboard";
import NavBar from "../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div className="App">
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
}

export default App;
