const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  rsvpEvent,
  unRsvpEvent,
  getMyCreatedEvents,
  getMyRsvps,
} = require("../controllers/eventController");

router.post("/", authMiddleware, createEvent);
router.get("/", getEvents);

router.get("/my-created", authMiddleware, getMyCreatedEvents);
router.get("/my-rsvps", authMiddleware, getMyRsvps);

router.post("/:id/rsvp", authMiddleware, rsvpEvent);
router.post("/:id/unrsvp", authMiddleware, unRsvpEvent);

router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);


// 👇 ADD THESE

module.exports = router;
