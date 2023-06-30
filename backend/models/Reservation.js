const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  carid: {
    type: String,
    required: true,
  },
  cartype: {
    type: String,
    required: true,
  },
  datetimestart: {
    type: Date, 
    required: true,
  },
  datetimefinish: {
    type: Date, 
    required: true,
  },
  paymentstatus: {
    type: String,
    required: true,
  },
  reservationstatus: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
