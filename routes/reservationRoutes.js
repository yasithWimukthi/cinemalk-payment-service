const express = require("express");
const router = express.Router();
const Reservation = require("../controllers/reservationController");
const validator = require("../validation/validation");
const schema = require("../validation/reservation_schema");

// Reservations: view all Reservations
router.get("/", Reservation.viewAll);

// Reservations: delete Reservations
router.delete("/:id", Reservation.deleteReservation);

//add a new reservation
router.post("/", validator(schema), Reservation.createReservation);

module.exports = router;
