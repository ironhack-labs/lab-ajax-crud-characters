class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  getOneRegister(characterId) {
    const id = characterId;
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error.data));
  }

  createOneRegister(newCharacter) {
    console.log(newCharacter);
    axios
      .post(`${this.BASE_URL}/characters/`, newCharacter)
      .then(response => console.log("New character created"))
      .catch(error => console.log(error));
  }

  updateOneRegister(editCharacter) {
    axios
      .patch(`${this.BASE_URL}/characters/${editCharacter.id}`, editCharacter)
      .then(response => console.log("Character updated", response.data))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterId) {
    const id = characterId;
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => console.log("Character deleted"))
      .catch(error => console.log(error));
  }
}
