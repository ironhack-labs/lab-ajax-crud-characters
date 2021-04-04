class APIHandler {
  constructor(baseUrl) {
    this.axios = axios.create({ baseUrl });
  }

  getFullList() {
    return this.axios
      .get("/characters")
      .then((data) => data.data)
      .catch((err) => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get("/characters/${id}")
      .then((data) => data.data)
      .catch((err) => console.log(err));
  }

  createOneRegister(character) {
    return axios
      .post("/characters", character)
      .then((data) => data.data)
      .catch((err) => console.log(err));
  }

  updateOneRegister(id, character) {
    return axios
      .post("/characters/${id}", character)
      .then((data) => data.data)
      .catch((err) => console.log(err));
  }

  deleteOneRegister(id) {
    return axios
      .delete("/characters/${id}")
      .then((data) => data.data)
      .catch((err) => console.log(err));
  }
}
