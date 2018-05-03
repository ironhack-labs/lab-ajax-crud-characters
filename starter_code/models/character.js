const mongoose = require("mongoose")
const Schema =mongoose.Schema


const characterSchema = new Schema({

  name: String,
  occupation: String,
  cartoon: {type: Boolean, default:false},
  weapon: String

})


module.exports = mongoose.model('Character', characterSchema);