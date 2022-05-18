const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const paymentRoutes = require("./routes/paymentRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
require("dotenv").config();

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//app.use('/api/payment', paymentRoutes);
app.use("/reservation", reservationRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then((result) => {
    const server = app.listen(process.env.PORT || 6000);
    console.log(`Server started on port ${server.address().port}`);
  })
  .catch((err) => console.log(err));
