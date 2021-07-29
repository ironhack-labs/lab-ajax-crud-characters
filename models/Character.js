const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({
	id: Number,
	name: String,
	occupation: String,
	weapon: String,
	cartoon: {
		type: Boolean,
	}
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;