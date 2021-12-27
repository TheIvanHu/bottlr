const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BottleSchema = new Schema({
  accountId: {
    type: String,
    //required: true,
    default: "Anonymous"
  },
  country: {
    type: String,
    required: true,
  },
  title: {
    type: String, 
    required: true,
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
    min: 0,
},
},
{
  timestamps: true
});

module.exports = Item = mongoose.model("bottle", BottleSchema);