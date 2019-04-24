class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Fetch All Character
  getFullList() {
    return axios.get(this.BASE_URL + "/characters").then(characters => {
      console.log(characters.data);
      return characters.data;
    });
  }

  // Fetch a specific Character
  getOneRegister(id) {
    axios.get(this.BASE_URL + "/characters" + "/" + id).then(character => {
      console.log(character.data);
    });
  }

  // New Character
  createOneRegister(characterInfo) {
    axios
      .post(this.BASE_URL + "/characters", characterInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Error is: ", error);
      });
  }

  // Edit Character
  updateOneRegister(id, characterInfo) {
    axios
      .patch(this.BASE_URL + "/characters" + "/" + id, characterInfo)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("The error is: ", error);
      });
  }

  // Delete Character
  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/characters" + "/" + id)
      .then(character => {
        console.log(character.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
