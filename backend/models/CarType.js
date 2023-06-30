const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeasSchema = new Schema({
 
  textdescription: {
    type: String,
    required: true,
  },
  htmldescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },  

  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("CarType", IdeasSchema);
