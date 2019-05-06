const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posterSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Poster = mongoose.model("Poster", posterSchema);
module.exports = Poster;
