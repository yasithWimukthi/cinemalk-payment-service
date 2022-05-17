const Reservation = require("../models/reservation");

// Reservations: view all reservations
const viewAll = async (req, res) => {
  const allReservations = await Reservation.find();
  res.status(200).json({
    message: "All Reservation details",
    data: allReservations,
  });
};

// Reservations: delete reservation
const deleteReservation = (req, res) => {
  const id = req.params.id;
  //Delete reservation
  const deletedReservation = Reservation.findByIdAndDelete(id);
  deletedReservation
    .then((result) => {
      res.status(200).json({
        message: "Reservation Deleted Successfully",
        deletedReservation: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        err: err.message,
      });
    });
};

const all = {
  viewAll,
  deleteReservation,
};

module.exports = all;
