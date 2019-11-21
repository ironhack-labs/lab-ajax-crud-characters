const {model, Schema} = require("mongoose");

const characterSchema = new Schema({
    id: Number,
    name: String,
    occupation: String,
    weapon: String,
    cartoon: Boolean
}, 
{
    timestamps: true
  }
);

module.exports = model("Character", characterSchema);