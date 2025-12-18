import { useEffect, useState } from "react";
import { getEvents, rsvpEvent, unRsvpEvent } from "../services/api";

function Events() {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleRsvp = async (id) => {
    try {
      await rsvpEvent(id);
      loadEvents();
    } catch (err) {
      alert(err.response?.data?.message || "RSVP failed");
    }
  };

  const handleUnRsvp = async (id) => {
    try {
      await unRsvpEvent(id);
      loadEvents();
    } catch (err) {
      alert(err.response?.data?.message || "Un-RSVP failed");
    }
  };

  return (
    <div>
      <h2>Upcoming Events</h2>

      {events.map((event) => (
        <div key={event._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>
            Seats: {event.attendeesCount}/{event.capacity}
          </p>

          <button onClick={() => handleRsvp(event._id)}>RSVP</button>
          <button onClick={() => handleUnRsvp(event._id)}>Leave</button>
        </div>
      ))}
    </div>
  );
}

export default Events;
