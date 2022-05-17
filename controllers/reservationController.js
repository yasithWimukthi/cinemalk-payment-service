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

// Add new Reservation
const createReservation = (req, res) => {
  try {
    const newReservation = new Reservation({
      cusName: req.body.cusName,
      movieName: req.body.movieName,
      theater: req.body.theater,
      date: req.body.date,
      showTime: req.body.showTime,
      seats: req.body.seats,
    });

    newReservation
      .save()
      .then(() => {
        res.status(201).json({
          message: "Reservation Created",
          newReservation: newReservation,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  } catch (e) {
    res.status(500).json(e);
  }
};

const all = {
  viewAll,
  deleteReservation,
  createReservation,
};

module.exports = all;
