import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [created, setCreated] = useState([]);
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    API.get("/events/my-created").then(res => setCreated(res.data));
    API.get("/events/my-rsvps").then(res => setRsvps(res.data));
  }, []);

  return (
    <div>
      <h2>My Dashboard</h2>

      <h3>My Created Events</h3>
      {created.length === 0 && <p>No events created</p>}
      {created.map(e => (
        <div key={e._id}>{e.title}</div>
      ))}

      <h3>My RSVP’d Events</h3>
      {rsvps.length === 0 && <p>No RSVPs yet</p>}
      {rsvps.map(e => (
        <div key={e._id}>{e.title}</div>
      ))}
    </div>
  );
}
