const mongoose = require('mongoose');

module.exports = mongoose.model('Character', mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  weapon: {
    type: String,
    required: true,
  },
  cartoon: {
    type: Boolean,
    required: true,
  },
},
{
  timestamps: true
}
));