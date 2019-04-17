const mongoose = require('mongoose');
const Character = require('../models/characters');

const dbName = 'lab-ajax-crud-character';
mongoose.connect(`mongodb://localhost/${dbName}`);

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
 ]


 Character.insertMany(characters)
.then( () => {
 console.log('Everything ok');
 mongoose.connection.close();
})
.catch(err => {
 console.error('Error insert to mongo', err);
});