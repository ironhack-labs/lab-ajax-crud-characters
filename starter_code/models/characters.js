const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");


  mongoose.connect('mongodb://localhost/starter-code', {useMongoClient: true});

  autoIncrement.initialize(mongoose.connect('mongodb://localhost/starter-code', {useMongoClient: true}))


  const characterSchema = Schema ({
    
    id: {type: Number, require: true, unique: true},
    name: String,
    occupation: String,
    weapon: String,
    cartoon: Boolean,

  });

  

  characterSchema.plugin(autoIncrement.plugin, {
    model: 'characterSchema',
    field: 'id',
    startAt: 4,
    incrementBy: 1
  });

  const Character = mongoose.model("Character", characterSchema);

  module.exports = Character;