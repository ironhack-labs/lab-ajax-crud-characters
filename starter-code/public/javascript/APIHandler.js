class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then(payload => payload.data);
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(payload => console.log(payload.data));
  }

  createOneRegister(payload) {
    debugger;
    axios
      .post(this.BASE_URL + "/characters", payload)
      .then(character => console.log(character.data));
  }

  updateOneRegister(id, payload) {
    axios
      .put(this.BASE_URL + "/characters/" + id, payload)
      .then(character => console.log(character.data));
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(character => console.log(character.data));
  }
}
