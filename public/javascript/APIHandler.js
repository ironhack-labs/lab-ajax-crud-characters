class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
            .get(this.BASE_URL + "/characters")
            .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return axios
            .get(this.BASE_URL + "/characters/" + id)
            .catch(error => console.log(error));
  }

  createOneRegister (newCharacter) {
    axios
      .post(this.BASE_URL + "/characters/", newCharacter)
      .then(() => this.getFullList())
      .catch(error => console.log(error));
  }

  updateOneRegister ( editedCharacter) {
    axios
      .put(this.BASE_URL + "/characters/" + editedCharacter.id, editedCharacter)
      .then(updatedCharacter => {
        this.getOneRegister(updatedCharacter.id);
      })
      .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(() => {
        alert("character was deleted");
        this.getFullList();
      })
      .catch(error => console.log(error));
  }

}
