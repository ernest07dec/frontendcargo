const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
 
  checknumber: {
    type: String,
    required: true,
  },
  paymentdate: {
    type: String,
    required: true,
  },
  paymentstatus: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Payment", IdeasSchema);
