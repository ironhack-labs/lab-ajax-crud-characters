
const {
  model,
  Schema
} = require("mongoose");

const characterSchema = new Schema({
  name: String,
  occupation: String,
  cartoon: Boolean,
  weapon: String
}, {
  timestamps: true
});

module.exports = model("Character", characterSchema);