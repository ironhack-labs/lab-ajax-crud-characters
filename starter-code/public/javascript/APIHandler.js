class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Get all the characters info from http://localhost:8000/characters
  getFullList() {
    axios
      .get("http://localhost:8000/characters")
      .then(response => {
        console.log("Here are you characters: ", response.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  // Get a single character info from http://localhost:8000/characters/id
  getOneRegister(id) {
    axios
      .get("http://localhost:8000/characters/" + id)
      .then(response => {
        console.log("Here is your character: ", response.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  //Create a single character posting the data to http://localhost:8000/characters
  createOneRegister(name, occupation, weapon, cartoon) {
    let newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    axios
      .post("http://localhost:8000/characters", newCharacter)
      .then(response => {
        console.log("You just created this character: ", response.data);
        getFullList();
      })
      .catch(error => {
        console.log("Error is: ", error);
      });
  }

  // Update a single character through his id
  updateOneRegister(name, occupation, weapon, cartoon, id) {
    let updatedCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    axios
      .patch("http://localhost:8000/characters/" + id, updatedCharacter)
      .then(response => {
        console.log("update successful: ", response.dataS);
        getFullList();
        document.getElementById("edit-character-form").reset();
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister(id) {
    axios
      .delete("http://localhost:8000/characters/" + id)
      .then(responseFromAPI => {
        console.log("Character is deleted", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }
}
