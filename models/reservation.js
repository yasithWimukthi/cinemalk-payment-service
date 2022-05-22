const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cusName: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required:true,
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
  noOfSeats: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
