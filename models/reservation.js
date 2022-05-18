const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  cusName: {
    type: String,
    required: true,
  },
  movieName: {
    type: String,
    required: true,
  },
  theater: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  showTime: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
