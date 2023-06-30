const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  
  cartype: {
    type: String,
    required: true,
  },
  platenumber: {
    type: String,
    required: true,
  },
  seatsavailable: {
    type: String,
    required: true,
  },
  initialrateperday: {
    type: String,
    required: true,
  },
  officecode: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
    required: true,
  },
  ownerphonenumber: {
    type: String,
    required: true,
  },
  owneremail: {
    type: String,
    required: true,
  },
  carstatus: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  reservationidnumbers: {
    type: Array,
    required: false,
  },
    
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Car", IdeasSchema);
