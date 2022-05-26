const express = require("express");
const router = express.Router();
const  Pay = require("../controllers/paymentController")



// add new payment by card
router.post("/payC",Pay.payCard);
// add new payment by mobile
router.post("/payM",Pay.payMobile);



module.exports = router;
