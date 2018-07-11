class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(characters => characters.data);
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(characters => characters.data);
  }

  createOneRegister(newData) {
    return axios
      .post(`${this.BASE_URL}/characters`, newData)
      .then(character => character.data)
      .catch(error => console.log(error));
  }

  updateOneRegister(id, newData) {
    return axios
      .patch(`${this.BASE_URL}/characters/${id}`, newData)
      .then(character => character.data)
      .catch(error => console.log("Character not found"));
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() =>
        console.log("Character has been successfully deleted")
      )
      .catch(error => console.log("Character not found"));
  }
}
