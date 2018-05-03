
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  mongoose.connect('mongodb://localhost/starter-code', {useMongoClient: true});


  const characterSchema = Schema ({
    
    id: Number,
    name: String,
    occupation: String,
    weapon: String,
    cartoon: Boolean,

  });

  const Character = mongoose.model("Character", characterSchema);



  const characters = [
    {
      "id": 1,
      "name": "Han Solo",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    },
    {
      "id": 2,
      "name": "Luke Skywalker",
      "occupation": "Jedi Knight",
      "weapon": "Lightsaber",
      "cartoon": false
    },
    {
      "id": 3,
      "name": "SpongeBob",
      "occupation": "Live under the sea",
      "weapon": "Crabby Patty",
      "cartoon": true
    }
  ];


  Character.create(characters)
  .then(res =>{
    console.log("ok")

  })
  .catch(err =>{
    console.log(err)
  })


