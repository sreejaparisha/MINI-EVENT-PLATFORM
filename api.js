import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Auth
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

// Events
export const getEvents = () => API.get("/events");
export const createEvent = (data) => API.post("/events", data);

// RSVP
export const rsvpEvent = (id) => API.post(`/events/${id}/rsvp`);
export const unRsvpEvent = (id) => API.post(`/events/${id}/unrsvp`);

export default API;
