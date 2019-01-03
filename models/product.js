var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  type: {
    type: String,
    required: true,
    max: 100
  },
  etat: {
    type: String,
    required: true
  },
  description: {
    type: String,
    max: 250
  },
  date: {
    type: Date
  }
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);