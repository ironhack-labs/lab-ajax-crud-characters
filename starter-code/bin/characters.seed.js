const mongoose = require('mongoose');
const Character = require('../models/Character');
require('dotenv').config();

mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`);

const characters = [
    {
      "name": "Han Solo",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    },
    {
      "name": "Luke Skywalker",
      "occupation": "Jedi Knight",
      "weapon": "Lightsaber",
      "cartoon": false
    },
    {
      "name": "Sponge Bob",
      "occupation": "Lives under the sea",
      "weapon": "Crabby Patty",
      "cartoon": true
    }
  ];

Character.create(characters, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${characters.length} characters`);
  mongoose.connection.close();
});