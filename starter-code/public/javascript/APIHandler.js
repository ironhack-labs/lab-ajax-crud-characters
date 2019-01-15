class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  // Get all the characters info from http://localhost:8000/characters
  getFullList() {
    axios
      .get("http://localhost:8000/characters")
      .then(responseFromAPI => {
        console.log("Here are you characters: ", responseFromAPI.data);
      })
      .catch(err => {
        console.log("Error is: ", err);
      });
  }

  // // Get a single character info from http://localhost:8000/characters/:id
  getOneRegister(id) {
    axios
      .get("http://localhost:8000/characters/"+id)
      .then(responseFromAPI => {
        console.log("Here is your character: ", responseFromAPI.data);
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


    document.getElementById("character-form").onsubmit = function(event) {
      event.preventDefault();

      const characterInfo = {
        name: theNames[0].value,
        occupation: theOccupations[0].value,
        weapon: theWeapons[0].value
      };

      axios
        .post("https://ih-crud-api.herokuapp.com/characters", characterInfo)
        .then(response => {
          console.log("You just created this character: ", response.data);
        })
        .catch(error => {
          console.log("Error is: ", error);
        });
    };
  }

  updateOneRegister() {}

  deleteOneRegister() {}
}
