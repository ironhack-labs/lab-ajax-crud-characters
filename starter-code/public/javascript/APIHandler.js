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
  createOneRegister() {
    const theNames = document.getElementsByClassName("the-name");
    const theOccupations = document.getElementsByClassName("the-occupation");
    const theWeapons = document.getElementsByClassName("the-weapon");
    const theCartoons = document.getElementsByClassName("the-cartoon");

    document.getElementById("new-character-form").onsubmit = function(event) {
      event.preventDefault();

      const characterInfo = {
        name: theNames[0].value,
        occupation: theOccupations[0].value,
        weapon: theWeapons[0].value
      };

      axios
        .post("http://localhost:8000/characters", characterInfo)
        .then(response => {
          console.log("You just created this character: ", response.data);
        })
        .catch(error => {
          console.log("Error is: ", error);
        });
    };
  }

  updateOneRegister(id) {
    const theNames = document.getElementsByClassName("edit-name");
    const theOccupations = document.getElementsByClassName("edit-occupation");
    const theWeapons = document.getElementsByClassName("edit-weapon");
    const theCartoons = document.getElementsByClassName("edit-cartoon");

    document.getElementById("edit-character-form").onsubmit = function(event){
      event.preventDefault();

      const theId = document.getElementById("theCharId").value;
      const updatedcharacterInfo = {
        name: theNames[1].value,
        occupation: theOccupations[1].value,
        weapon: theWeapons[1].value
      };
      
      axios.patch("http://localhost:8000/characters/" + id, updatedcharacterInfo)
        .then(response => {
              console.log('update successful: ', response);
              document.getElementById("edit-character-form").reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
  }


  // Delete a single character through his id in http://localhost:8000/characters/:id
  deleteOneRegister(id) {
    axios
      .delete("http://localhost:8000/characters/" + id)
      .then(responseFromAPI => {
        console.log("deleted Character: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }
}
