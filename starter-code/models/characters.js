const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charactersSchema = new Schema({
 name: String,
 occupation: String, 
 weapon: String,
 cartoon: Boolean
})

const Character = mongoose.model('Character', charactersSchema);
module.exports = Character