const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BottleSchema = new Schema({
  accountId: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  editDate: {
    type: String,
    default: "NA"
    //required: true,
  },
  message: {
    type: String,
    default:"blank"
    //required: true,
  },
  tags: [{
    type: String,
    default: [],
    //required: true,
  }],
  views: {
    type: Number,
    default: 0,
    //required: true,
  },
});

module.exports = Item = mongoose.model("bottle", BottleSchema);
