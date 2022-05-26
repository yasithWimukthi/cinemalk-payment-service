const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  user_id:{
    type:String,
    required:true
  },
  holder:{
    type:String
  },
  number:{
    type:String
  },
  date:{
    type:Date
  },
  cvv:{
    type:Number
  },
  total:{
    type:Number,
    required:true
  },
  owner:{
    type:String
  },
  phone:{
    type:String
  }

});

module.exports = mongoose.model("Payment", paymentSchema,"payment");
