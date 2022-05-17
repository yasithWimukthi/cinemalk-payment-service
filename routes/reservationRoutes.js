const express = require("express");
const router = express.Router();
const Reservation = require("../controllers/reservationController");

// Reservations: view all Reservations
router.get("/", Reservation.viewAll);

// Reservations: delete Reservations
router.delete("/:id", Reservation.deleteReservation);

module.exports = router;
