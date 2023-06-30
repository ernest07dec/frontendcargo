const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
  firstname: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  maritalstatus: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  nationality: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phonenumber: {
    type: String,
    required: false,
  },
  hasdriverlicense: {
    type: Boolean,
    required: false,
  },
  driveridno: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: false,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Users", IdeasSchema);
