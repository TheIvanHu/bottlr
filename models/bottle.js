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
    //required: true,
  },
  message: {
    type: String,
    //required: true,
  },
  tags: [{
    type: String,
    //required: true,
  }],
  views: {
    type: Number,
    //required: true,
  },
});

module.exports = Item = mongoose.model("bottle", BottleSchema);
