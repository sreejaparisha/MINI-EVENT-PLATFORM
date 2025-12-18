import { useEffect, useState } from "react";
import API from "../api";

function EventDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Events</h2>

      {events.map(event => (
        <div key={event._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.location}</p>
          <p>
            {event.attendeesCount} / {event.capacity} attending
          </p>

          <button>RSVP</button>
          <button>Cancel RSVP</button>
        </div>
      ))}
    </div>
  );
}

export default EventDashboard;
